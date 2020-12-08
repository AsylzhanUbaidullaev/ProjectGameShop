import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {User} from '../../user';

export interface Game {
  name: string
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  games: any[] = [];

  toggle = true;


  imgUrl: string = 'https://images8.alphacoders.com/782/thumb-1920-782650.png';


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://i.pinimg.com/originals/a6/f0/aa/a6f0aa5cdeb0d6b386a73095dbba97ff.jpg';
    }, 5000);
    // this.games = this.dataService.getGames();
    this.dataService.getGames().subscribe((data: User) => this.games = data["Games"]);
  }

  toggleGames() {
    this.toggle = !this.toggle;
  }

  backgroundToggle = false;
}
