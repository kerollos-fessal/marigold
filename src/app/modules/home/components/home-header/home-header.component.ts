import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  imports: [MatIconModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {

  constructor(private router: Router){}

  toShop(){
    this.router.navigate(['./shop'])
  }
}
