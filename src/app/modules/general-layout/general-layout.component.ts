import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class GeneralLayoutComponent {}
