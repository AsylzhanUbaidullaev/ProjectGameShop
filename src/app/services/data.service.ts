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

  // private accounts = [
  //   {th: 'TH9', price: '25$', image: 'https://clash-service.ru/img/products/town-hall-9.png'},
  //   {th: 'TH10', price: '40$', image: 'https://clash-service.ru/img/products/town-hall-10.png'},
  //   {th: 'TH11', price: '70$', image: 'https://clash-service.ru/img/products/town-hall-11.png'},
  //   {th: 'TH12', price: '120$', image: 'https://clash-service.ru/img/products/town-hall-12.png'},
  //   {th: 'TH13', price: '170$', image: 'https://clash-service.ru/img/products/town-hall-13.png'},
  // ];

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
  addUsers(user: User) {
    this.logService.write('User added');
    // this.users.push(email, password);
    const body = {email: user.email, password: user.password};
    return this.http.post('http://localhost:3000/users', body);
  }
}
