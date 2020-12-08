import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ComponentCanDeactivate} from '../../guards/deactivate-selling.guard';
import {Observable} from 'rxjs';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-coc-sell',
  templateUrl: './coc-sell.component.html',
  styleUrls: ['./coc-sell.component.css']
})
export class CocSellComponent implements OnInit, ComponentCanDeactivate {
  account: any[] = [];
  th: string;
  price: string;
  constructor(private dataService: DataService) {
  }

  saved = false;
  sellingForm: NgForm;

  // tslint:disable-next-line:typedef
  addAccount(th: string, price: string) {
    this.dataService.addAccount(th, price);
  }

  save() {
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {

    if (!this.saved) {
      return confirm('Tap OK, if you dont want to put up account for sale');
    } else {
      return true;
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(sellingForm: NgForm) {
    console.log(this.sellingForm.value);
  }
}
