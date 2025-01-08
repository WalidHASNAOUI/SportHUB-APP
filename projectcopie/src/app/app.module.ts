import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AuthenticatorComponent } from './tool/authenticator/authenticator.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './tool/profile/profile.component';
import { PostFeedComponent } from './pages/post-feed/post-feed.component';
import { CreatePostComponent } from './tool/create-post/create-post.component';
import { PostComponent } from './tool/post/post.component';
import { CommentsComponent } from './tool/comments/comments.component';

import { HeaderComponent } from './tool/header/header.component';
import { SidebarComponent } from './tool/sidebar/sidebar.component';
import { FriendListComponent } from './tool/friend-list/friend-list.component';
import { NotificationComponent } from './tool/notification/notification.component';
import { MessagingComponent } from './tool/messaging/messaging.component';
import { EventPageComponent } from './pages/eventpage/eventpage.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';

import { HttpClientModule } from '@angular/common/http';
import { FriendsComponent } from './pages/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatorComponent,
    HomeComponent,
    ProfileComponent,
    PostFeedComponent,
    CreatePostComponent,
    PostComponent,
    CommentsComponent,
    
    HeaderComponent,
    SidebarComponent,
    FriendListComponent,
    NotificationComponent,
    MessagingComponent,
    EventPageComponent,
    EventDetailComponent,
    ProfilepageComponent,
   
    FriendsComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
