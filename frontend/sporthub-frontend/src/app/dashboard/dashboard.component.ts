import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    LeftSidebarComponent,
    ActivityFeedComponent,
    RightSidebarComponent,
    FooterComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
