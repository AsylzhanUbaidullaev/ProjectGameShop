import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {User} from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  receivedUser: User;
  done: boolean = false;
  polzovateli: any[] = [];
  email: string;
  password: string;
  constructor(private dataService: DataService) { }

  // tslint:disable-next-line:typedef
  // addPolzovatel(email: string, password: string) {
  //   this.dataService.addUsers(email, password);
  // }
  // tslint:disable-next-line:typedef
  submit(user: User){
    this.dataService.addUsers(user)
      .subscribe(
        (data: User) => {this.receivedUser = data; this.done = true; },
        error => console.log(error)
      );
  }

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
    });
  date: Date = new Date();
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.loginForm.value);
  }
  ngOnInit(): void {
    // this.polzovateli = this.dataService.getUser();
  }

}
