import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  toggle = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleMM() {
    this.toggle = !this.toggle
  }
}
