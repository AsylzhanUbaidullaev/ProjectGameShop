import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {User} from '../../user';


@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {
  games: any[] = [];
  id: string;
  name: string;
  routerLinkSelling: string;
  routerLinkGames: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getGames().subscribe((data: User) => this.games = data["Games"]);
  }

}
