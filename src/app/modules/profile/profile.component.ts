import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { Tab } from 'src/app/shared/models/tab.interface';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],

  imports: [RouterModule, MatIconModule, FormsModule, MatTabsModule, HeaderComponent],
})
export class ProfileComponent {

  tabs: Tab[] = [
    { label: 'Personal Information', route: 'personal-info', icon: 'person' },
    { label: 'My Orders', route: 'my-orders', icon: 'shopping_bag' },
    { label: 'Manage Address', route: 'manage-address', icon: 'home' },
    { label: 'Payment Method', route: 'payment-method', icon: 'credit_card' },
    { label: 'Password Management', route: 'password-management', icon: 'lock' },
    { label: 'Logout', route: 'logout', icon: 'logout' }
  ];
}
