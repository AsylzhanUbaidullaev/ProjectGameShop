import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [DataService]
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUser().subscribe((data: User) => this.users = data["UsersList"]);
  }

}
