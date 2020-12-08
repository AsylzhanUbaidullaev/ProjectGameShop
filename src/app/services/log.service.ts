import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  // tslint:disable-next-line:typedef
  write(logMessage: string) {
    const currentDateTime = new Date();
    const currentDateTimeString = currentDateTime.toDateString();
    console.log(`${currentDateTimeString} :`, logMessage);
  }

  constructor() {
  }
}
