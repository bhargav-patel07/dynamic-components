import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { user } from 'src/app/Users.model';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  public dataCommunication = new Subject<user>;
  name$: any;
  constructor() { }

  getData(user: user) {
    this.dataCommunication.next(user);
  }
}




