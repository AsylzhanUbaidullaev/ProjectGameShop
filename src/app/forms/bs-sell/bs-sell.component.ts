import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bs-sell',
  templateUrl: './bs-sell.component.html',
  styleUrls: ['./bs-sell.component.css']
})
export class BsSellComponent implements OnInit {
  saved = false;
  // tslint:disable-next-line:typedef
  save(){
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved){
      return confirm('Tap OK, if you dont want to put up account for sale');
    }
    else{
      return true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
