import { AuthenticatorComponent } from './../../tool/authenticator/authenticator.component';
import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private loginSheet:MatBottomSheet){

  }
  onGetStartedClick(){
    this.loginSheet.open(AuthenticatorComponent)

  }

}
