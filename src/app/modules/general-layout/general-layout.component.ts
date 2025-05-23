import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.scss'],

  imports: [RouterOutlet, NavbarComponent],
})
export class GeneralLayoutComponent {}
