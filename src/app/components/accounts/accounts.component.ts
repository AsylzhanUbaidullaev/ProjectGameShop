import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  searchAcc = ''
  constructor() { }
  accounts = [
    {th: 'TH9', price: '25$', image: 'https://clash-service.ru/img/products/town-hall-9.png'},
    {th: 'TH10', price: '40$', image: 'https://clash-service.ru/img/products/town-hall-10.png'},
    {th: 'TH11', price: '70$', image: 'https://clash-service.ru/img/products/town-hall-11.png'},
    {th: 'TH12', price: '120$', image: 'https://clash-service.ru/img/products/town-hall-12.png'},
    {th: 'TH13', price: '170$', image: 'https://clash-service.ru/img/products/town-hall-13.png'},
  ]

  ngOnInit(): void {
  }

  changeColor = "not change"

  receiveColor($event) {
    this.changeColor = $event
  }
}
