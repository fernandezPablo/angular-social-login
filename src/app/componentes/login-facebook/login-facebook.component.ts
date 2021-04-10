import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-facebook',
  templateUrl: './login-facebook.component.html',
  styleUrls: ['./login-facebook.component.css']
})
export class LoginFacebookComponent implements OnInit {

  FB: any;

  constructor() { }

  ngOnInit(): void {
    (window as any).fbAsyncInit = function() {
      this.FB.init({
        appId            : '552514601430-ah8lrti9049eo1p08qvh92uem20gg5na.apps.googleusercontent.com',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v10.0'
      });
    };

    this.FB.login(function(response: any) {
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       
      //  this.FB.api('/me', function(response: any) {
      //    console.log('Good to see you, ' + response.name + '.');
      //  });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
  });

  }

}
