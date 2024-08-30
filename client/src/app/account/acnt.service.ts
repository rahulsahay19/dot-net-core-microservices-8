import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

import { Router } from '@angular/router';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { Constants } from './constants';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';


@Injectable({
  providedIn: 'root'
})
export class AcntService {

  // We need to have something which won't emit initial value rather wait till it has something.
  // Hence for that ReplaySubject. I have given to hold one user object and it will cache this as well
  public currentUserSource = new ReplaySubject<any>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(
    private http: HttpClient,
    private router: Router,
    private msalService: MsalService
  ) {
    // Set user state if already logged in
    const account = this.msalService.instance.getActiveAccount();
    if (account) {
      this.currentUserSource.next(account);
    }
  }

  isAuthenticated(): boolean {
   // return this.user != null && !this.user.expired;
   return this.msalService.instance.getActiveAccount() !== null;
  }

  login(state?: string) {
      this.msalService.loginRedirect({
      scopes: ["openid", "profile", "https://sportscenter19.onmicrosoft.com/85ec0233-0ecb-4830-96f5-12d00bf87176"],
      state: state
    });
    //this.currentUserSource.next(this.msalService.instance.getActiveAccount());
  }
  
  logout() {
    this.msalService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200',  // Replace with your post-logout redirect URI
    });
    this.currentUserSource.next(null);  // Emit null to clear the current user
  }

  setUserAfterRedirect(): void {
    const account = this.msalService.instance.getActiveAccount();
    console.log('Active Account after Redirect:', account); // Debugging: Log the account info
    if (account) {
        this.currentUserSource.next(account);
    } else {
        this.currentUserSource.next(null);
    }
}

 get authorizationHeaderValue(): Promise<string> {
    const account = this.msalService.instance.getActiveAccount();
    if (account) {
      return this.msalService.instance.acquireTokenSilent({
        scopes: ["openid", "profile"],
        account: account
      }).then((result: AuthenticationResult) => {
        return `${result.tokenType} ${result.accessToken}`;
      });
    }
    // Return an empty string if no account is found
    return Promise.resolve(''); 
  }

}



