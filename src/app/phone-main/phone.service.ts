import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GeneratedStatus} from './Beans';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  public generarePhoneNumbers(phoneNumber): Observable<GeneratedStatus> {
    return this.http.get<GeneratedStatus>('http://finraphone-env.eba-c3sin3tx.us-east-1.elasticbeanstalk.com/generate', { params: {phoneNumber}});
  }

  public getAllPreviousPhones(): Observable<any> {
    return this.http.get<any>('http://finraphone-env.eba-c3sin3tx.us-east-1.elasticbeanstalk.com/getAllGenerated');
  }
}
