import { Component, OnInit } from '@angular/core';
import {AlertService} from '../alert/alert.service';
import {PhoneService} from './phone.service';
import {GeneratedStatus} from './Beans';

@Component({
  selector: 'app-phone-main',
  templateUrl: './phone-main.component.html',
  styleUrls: ['./phone-main.component.css']
})
export class PhoneMainComponent implements OnInit {
  phoneNumber: string = '';
  isGenerating = false;
  isValidPhone = false;
  generatedNumber: GeneratedStatus = null;
  prevousPhoneNumbers: GeneratedStatus[] = [];

  constructor(public alertService: AlertService, public phoneService: PhoneService) { }

  ngOnInit(): void {
     this.getPreviousPhones();
  }

  onPhoneChange() {
    if (this.phoneNumber.length === 1 && this.phoneNumber !== '(') {
      this.phoneNumber = '(' + this.phoneNumber;
    } else if (this.phoneNumber.length === 4) {
      if (/^\d+$/.test(this.phoneNumber.slice(1, this.phoneNumber.length))) {
        this.phoneNumber = this.phoneNumber + ')'
        this.isValidPhone = true;
        this.alertService.closeAlert();
      }else {
        this.isValidPhone = false;
        this.alertService.showAlert('danger', 'Phone number can contain only numbers');
      }
    } else if (this.phoneNumber.length === 8) {
      if (/^\d+$/.test(this.phoneNumber.slice(5, this.phoneNumber.length))) {
        this.phoneNumber = this.phoneNumber + '-';
        this.isValidPhone = true;
        this.alertService.closeAlert();
      }else {
        this.isValidPhone = false;
        this.alertService.showAlert('danger', 'Phone number can contain only numbers');
      }
    } else if (this.phoneNumber.length === 13) {
      if (/^\d+$/.test(this.phoneNumber.slice(9, this.phoneNumber.length))) {
        this.isValidPhone = true;
        this.alertService.closeAlert();
      } else {
        this.isValidPhone = false;
        this.alertService.showAlert('danger', 'Phone number can contain only numbers');
      }
    } else if (this.phoneNumber.length > 13) {
      this.isValidPhone = false;
      this.alertService.showAlert('danger', 'Invalid phone number (only 10 digits allowed)');
    }

    if (this.phoneNumber.length === 13 && (this.phoneNumber.charAt(0) !== '(' || this.phoneNumber.charAt(4) !== ')'  || this.phoneNumber.charAt(8) !== '-' )) {
      this.isValidPhone = false;
      this.alertService.showAlert('danger', 'Invalid phone number');
    }
  }

  public generate() {
    if (this.isValidPhone) {
      this.isGenerating = true;
      this.phoneService.generarePhoneNumbers(this.phoneNumber).subscribe(generatedNumber => {
        console.log(generatedNumber);
        this.generatedNumber = generatedNumber;
        this.isGenerating = false;
        this.getPreviousPhones();
        this.alertService.showAlert('success', 'Phone numbers are generated', 5);
      }, err => {
        console.log(err);
        this.alertService.showAlert('danger', 'Server Error. Make sure to provide valid phone number');
        this.isGenerating = false;
      });
    } else {
      this.alertService.showAlert('danger', 'Invalid phone number');
    }
  }

  public getPreviousPhones() {
    this.phoneService.getAllPreviousPhones().subscribe(res => {
      this.prevousPhoneNumbers = res;
    }, err => {
      console.error(err);
    });
  }

  public formatPhone(phone): string {
    return '(' + phone.slice(0, 3) + ')' + phone.slice(3, 6) + '-' + phone.slice(6);
  }
}
