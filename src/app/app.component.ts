import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Mark as standalone
  imports: [RouterModule, CommonModule], // ✅ Import necessary modules
  template: `
    <h1>Welcome to the Magic: The Gathering Store</h1>
    <nav>
      <a routerLink="/products">View Products</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
