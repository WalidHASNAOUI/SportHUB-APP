import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticatorComponent } from './tool/authenticator/authenticator.component';
import { PostFeedComponent } from './pages/post-feed/post-feed.component';
import { EventPageComponent } from './pages/eventpage/eventpage.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';

import { ProfileComponent } from './tool/profile/profile.component';


import { FriendsComponent } from './pages/friends/friends.component';





const routes: Routes = [
  
    
  {path:"",component:HomeComponent},
  {path:"login",component:AuthenticatorComponent},
  { path: 'profilepage', component: ProfilepageComponent },
  {path:"postfeed",component:PostFeedComponent},
  {path:"events", component: EventPageComponent},
  {path: 'event/:id', component: EventDetailComponent}, 
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent },
  {path:"**",component:HomeComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



