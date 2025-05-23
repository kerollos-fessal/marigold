import { Component } from '@angular/core';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeAboutusComponent } from './components/home-aboutus/home-aboutus.component';
import { HomeCategoriesComponent } from './components/home-categories/home-categories.component';
import { HomeTestimonialComponent } from './components/home-testimonial/home-testimonial.component';
import { HomeFollowusComponent } from './components/home-followus/home-followus.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  imports: [ HomeHeaderComponent,
     HomeAboutusComponent,
     HomeCategoriesComponent,
     HomeTestimonialComponent,
     HomeFollowusComponent],
})
export class HomeComponent {}
