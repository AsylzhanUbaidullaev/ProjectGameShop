import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buy-acc',
  templateUrl: './buy-acc.component.html',
  styleUrls: ['./buy-acc.component.css']
})
export class BuyAccComponent implements OnInit {

  changeColor: string = "color changed"

  @Output() colorEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  buy() {
    this.colorEvent.emit(this.changeColor)
  }
}
