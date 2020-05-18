import {Component, Input, OnInit} from '@angular/core';
import {AlertService} from './alert.service';



@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input('alertId')
  alertId: string = null;

  constructor(public alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alertDisplay = null;
  }

}
