import { AlertType } from "../UI/Alert";

interface AlertData {
  title: string;
  body: string;
  type: AlertType;
  show: boolean;
}

export interface AlertModel {
  alertData: AlertData;
}
