import { Component, OnInit } from '@angular/core';

export interface Game {
  name: string
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  game1 = "Clash of clans"
  game2 = "Clash Royale"
  game3 = "Brawl Stars"

  toggle = true

  // games=[/Clash of clans, /Clash Royale, /Brawl Stars]

  imgUrl: string = 'https://images8.alphacoders.com/782/thumb-1920-782650.png'


  constructor() { }

  // addGame = 'Add Game'

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://i.pinimg.com/originals/a6/f0/aa/a6f0aa5cdeb0d6b386a73095dbba97ff.jpg'

    }, 3000);
  }

  // games: Game[] = [
  //   {name: 'Clash of clans'},
  //   {name: 'Clash Royale'},
  //   {name: 'Brawl Stars'}
  // ]
  // addGame(game: Game) {
  //   this.game.push(game)
  // }

  toggleGames() {
    this.toggle = !this.toggle
  }
  backgroundToggle = false
}
