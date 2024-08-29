import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AcntService } from '../acnt.service';

@Component({
  selector: 'app-signin-redirect-callback',
  template: `<p>Redirecting...</p>`
})
export class SigninRedirectCallbackComponent implements OnInit {

  constructor(private msalService: MsalService, private acntService: AcntService) {}

  ngOnInit() {
    // This will handle the response from Azure AD B2C and complete the login process
    this.msalService.instance.handleRedirectPromise().then((result) => {
      if (result) {
        console.log('Login successful:', result);
        this.acntService.currentUserSource.next(this.msalService.instance.getActiveAccount());
        // Redirect to home or any specific page after handling the redirect
        window.location.href = '/';
      } else {
        console.log('No login result found.');
      }
    }).catch((error) => {
      console.error("Error handling redirect:", error);
    });
  }
}
