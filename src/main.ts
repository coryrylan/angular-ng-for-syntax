import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Angular ngFor demo</h1>
    <p>
      <a href="https://coryrylan.com/blog/angular-ng-for-syntax ">Tutorial at coryrylan.com</a>
    </p>
    <ul>
      <li *ngFor="let item of items; let i = index">
        {{i}}. {{item}}
      </li>
    </ul>

  `,
})
export class App {
  items = ['First', 'Second', 'Third'];
}

bootstrapApplication(App);
