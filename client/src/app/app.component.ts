import { Component, OnInit } from '@angular/core';
import { AcntService } from './account/acnt.service';
import { BasketService } from './basket/basket.service';
import { MsalService } from '@azure/msal-angular';
import { BrowserCacheLocation, PublicClientApplication } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eShopping';

  constructor(
    private basketService: BasketService, 
    private acntService: AcntService,
    private msalService: MsalService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.initializeMsal();
    // Handle MSAL redirect response
    this.msalService.instance.handleRedirectPromise().then((result) => {
      if (result) {
        this.acntService.currentUserSource.next(this.msalService.instance.getActiveAccount());
        console.log('Login successful:', result);
      } else {
        console.log('No redirect login result, app started normally.');
      }
    }).catch((error) => {
      console.error('Error handling redirect:', error);
    });

    // Existing logic to load the basket
    const basket_username = localStorage.getItem('basket_username');
    if (basket_username) {
      this.basketService.getBasket(basket_username);
    }
  }
  private async initializeMsal(): Promise<void> {
    const pca = new PublicClientApplication({
      auth: {
        clientId: '85ec0233-0ecb-4830-96f5-12d00bf87176',
        authority: 'https://sportscenter19.b2clogin.com/sportscenter19.onmicrosoft.com/B2C_1_SignInSignUp/v2.0/',
        redirectUri: 'http://localhost:4200',
        knownAuthorities: ['sportscenter19.b2clogin.com'],
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: false
      }
    });
    this.msalService.instance = pca;
    await pca.initialize();  // Ensure the instance is initialized before proceeding
  }
}
