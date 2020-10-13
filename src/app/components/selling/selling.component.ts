import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {
  game1 = "Clash of clans"
  game2 = "Clash Royale"
  game3 = "Brawl Stars"

  constructor() { }

  ngOnInit(): void {
  }

}
