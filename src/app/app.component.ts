import { Component } from '@angular/core';
import {DataService} from './services/data.service';
import {LogService} from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, LogService]
})
export class AppComponent {
  title = 'ProjectGameShop';

}
