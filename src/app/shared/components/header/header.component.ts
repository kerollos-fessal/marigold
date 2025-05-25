import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  imports: [],
})
export class HeaderComponent {
  @Input() title: string = ''
}
