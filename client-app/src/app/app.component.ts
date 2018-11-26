import { Component } from '@angular/core';
import { LoopBackConfig } from './shared/sdk/index';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
  LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
  LoopBackConfig.setApiVersion('api');
}
}
