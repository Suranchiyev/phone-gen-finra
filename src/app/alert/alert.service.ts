import {Injectable} from '@angular/core';

class Alert {
  type: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertDisplay: Alert = null;
  alertIdConfirm: string = null;

  constructor() {
  }

  public showAlert(type: string, message: string, forSeconds?: number): void {
    this.alertIdConfirm = null;
    if (forSeconds) {
      this.alertDisplay = {type: type, message: message};
      setTimeout(() => {
        this.alertDisplay = null;
      }, forSeconds * 1000);

    } else {
      this.alertDisplay = {type: type, message: message};
    }
  }

  public showAlertById(alertId: string, type: string, message: string, forSeconds?: number): void {
    this.alertIdConfirm = alertId;
    if (forSeconds) {
      this.alertDisplay = {type: type, message: message};
      setTimeout(() => {
        this.alertDisplay = null;
      }, forSeconds * 1000);

    } else {
      this.alertDisplay = {type: type, message: message};
    }
  }

  public closeAlert() {
    this.alertDisplay = null;
  }

}
