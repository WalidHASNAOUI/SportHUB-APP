import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { ConversationListComponent } from './messaging/conversation-list/conversation-list.component';
import { MessageDetailsComponent } from './messaging/message-details/message-details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { CreatePublicationComponent } from './publications/create-publication/create-publication.component';
import { PublicationDetailsComponent } from './publications/publication-details/publication-details.component';
import { PublicationListComponent } from './publications/publication-list/publication-list.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component:LoginComponent}, 
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: 'create-event', component: CreateEventComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'messages', component: ConversationListComponent },
    { path: 'messages/:id', component: MessageDetailsComponent },
    { path: 'publications', component: PublicationListComponent },
    { path: 'publications/:id', component: PublicationDetailsComponent },
    { path: 'create-publication', component: CreatePublicationComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: 'login' }
];
