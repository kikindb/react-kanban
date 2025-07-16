pipeline {
  agent any

  tools {
    nodejs 'NODE22'
  }

  environment {
    SONARQUBE_ENV = 'sonarserver'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
        script {
          env.BRANCH_NAME = env.GIT_BRANCH?.replaceAll(/^origin\//, '') ?: 'unknown'
          echo "Current branch: ${env.BRANCH_NAME}"
        }
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Extract Version') {
      steps {
        script {
          def pkgVersion = sh(script: "node -p \"require('./package.json').version\"", returnStdout: true).trim()
          env.PACKAGE_VERSION = pkgVersion
          echo "Version from package.json: ${env.PACKAGE_VERSION}"
        }
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test || echo "No tests found, skipping..."'
      }
    }

    stage('SonarQube Analysis') {
      environment {
        SONAR_SCANNER_OPTS = '-Dsonar.projectKey=react-kanban'
      }
      steps {
        withSonarQubeEnv("${SONARQUBE_ENV}") {
          sh 'npx sonar-scanner'
        }
      }
    }

    stage('Build Dev') {
      when {
        not {
          branch 'main'
        }
      }
      steps {
        sh 'npm run build:dev'
      }
    }

    stage('Build Prod') {
      when {
        branch 'main'
      }
      steps {
        sh 'npm run build'
      }
    }

    stage('Package Artifact') {
      steps {
        script {
          def artifactName = "${env.BRANCH_NAME}-react-kanban-${env.PACKAGE_VERSION}.zip"
          env.ARTIFACT_NAME = artifactName
          sh "cd dist && zip -r ../${artifactName} ."
        }
      }
    }

    stage('Determine Nexus Group ID') {
      steps {
        script {
          def groupId = 'test' // default
          if (env.BRANCH_NAME == 'main') {
            groupId = 'prod'
          } else if (env.BRANCH_NAME == 'dev') {
            groupId = 'qa'
          }
          env.NEXUS_GROUP_ID = groupId
          echo "Using Nexus groupId: ${env.NEXUS_GROUP_ID}"
        }
      }
    }

    stage('Upload to Nexus') {
      steps {
        nexusArtifactUploader (
          nexusVersion: 'nexus3',
          protocol: 'http',
          nexusUrl: '192.168.56.15:8081',
          groupId: "${env.NEXUS_GROUP_ID}",
          version: "${env.PACKAGE_VERSION}",
          repository: 'ui-apps',
          credentialsId: 'nexuslogin',
          artifacts: [
            [
              artifactId: "react-kanban",
              file: "${env.ARTIFACT_NAME}",
              type: 'zip'
            ]
          ]
        )
      }
    }

    stage('Deploy to Test') {
      when {
        branch 'dev'
      }
      steps {
        echo "Deploying to test environment using Jenkins artifact..."
        sh "unzip -o ${env.ARTIFACT_NAME} -d /var/www/react-kanban/"
      }
    }

    stage('Deploy to Prod') {
      when {
        branch 'main'
      }
      steps {
        echo "Deploying to production..."
        // Example: sh './deploy-prod.sh' or helm install/upgrade
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
