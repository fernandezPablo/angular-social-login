import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser  } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Google User
  googleUser: SocialUser;
  loggedInGoogle: boolean;
  pickGoogle: boolean;
  
  // Facebook User
  facebookUser: SocialUser;
  loggedInFacebook: boolean;
  pickFacebook: boolean;
  
  constructor(private authService: SocialAuthService) {
      this.googleUser = new SocialUser();
      this.loggedInGoogle = false;
      this.pickGoogle = false;

      this.facebookUser = new SocialUser();
      this.loggedInFacebook = false;
      this.pickFacebook = false;
   }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (this.pickGoogle){
        this.googleUser = user;
        this.loggedInGoogle = (user != null);
        console.log('Google User: ', this.googleUser);
      }
      else{
        if (this.pickFacebook){
          this.facebookUser = user;
          this.loggedInFacebook = (user != null);
          console.log('Facebook User: ', this.facebookUser);
        }
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.pickGoogle = true;
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.pickFacebook = true;
  }

  signOut(): void {
    this.authService.signOut();
  }

}
