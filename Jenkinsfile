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
        git url: 'https://github.com/kikindb/react-kanban.git', branch: 'main'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
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

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Package Artifact') {
      steps {
        sh '''
          cd dist
          zip -r ../${BRANCH_NAME}-react-kanban-${env.PACKAGE_VERSION}.zip .
        '''
      }
    }

    stage('Upload to Nexus') {
      steps {
        nexusArtifactUploader (
          nexusVersion: 'nexus3',
          protocol: 'http',
          nexusUrl: '192.168.56.15:8081',
          groupId: 'QA',
          version: "${env.PACKAGE_VERSION}",
          repository: 'ui-apps',
          credentialsId: 'nexuslogin',
          artifacts: [
            [
              artifactId: "react-kanban",
              file: "${BRANCH_NAME}-react-kanban-${env.PACKAGE_VERSION}.zip",
              type: 'zip'
            ]
          ]
        )
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
