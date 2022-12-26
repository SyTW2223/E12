import { Component, Input } from '@angular/core';
import { User } from './modules/header/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infosports';
  actualPage = "Home";

  UpdatePage(page: string){
    this.actualPage = page;
  }
}
