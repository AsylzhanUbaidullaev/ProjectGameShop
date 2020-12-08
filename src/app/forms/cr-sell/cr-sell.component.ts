import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from '../../guards/deactivate-selling.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cr-sell',
  templateUrl: './cr-sell.component.html',
  styleUrls: ['./cr-sell.component.css']
})
export class CrSellComponent implements OnInit {
  saved = false;
  save(){
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean>{

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
