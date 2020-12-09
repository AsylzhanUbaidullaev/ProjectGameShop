import {Injectable} from '@angular/core';
import {LogService} from './log.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient, private logService: LogService) {
  }

  private users = [];

  // tslint:disable-next-line:typedef
  getGames() {
    this.logService.write('Game list...');
    return this.http.get('assets/db.json');
  }

  // tslint:disable-next-line:typedef
  getAccounts() {
    // return this.accounts;
    this.logService.write('Account list...');
    return this.http.get('assets/db.json');
  }

  // tslint:disable-next-line:typedef
  addAccount(th: string, price: string) {
    // @ts-ignore
    this.accounts.push(th, price);
  }

  // tslint:disable-next-line:typedef
  getUser() {
    this.logService.write('Users');
    return this.http.get('assets/db.json');
  }

  // tslint:disable-next-line:typedef
  addUsers(email: string, password: string) {
    this.logService.write('User added');
    this.users.push(email, password);
    // const body = {email: user.email, password: user.password};
    // return this.http.post('http://localhost:3000/users', body);
  }
}
