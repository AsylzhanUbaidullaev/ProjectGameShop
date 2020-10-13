import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  // addGame() {
  //   const game: Game = {
  //     title: this.title
  //   }
  // }
}
