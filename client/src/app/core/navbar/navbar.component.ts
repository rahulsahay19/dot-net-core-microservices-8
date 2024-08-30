import { Component, OnInit } from '@angular/core';
import { AcntService } from 'src/app/account/acnt.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isUserAuthenticated: boolean = false;

  constructor(public basketService: BasketService, private acntService: AcntService) {}

  ngOnInit(): void {
    this.acntService.currentUser$.subscribe({
      next: (user) => {
        this.isUserAuthenticated = !!user;  // true if user is logged in, false otherwise
        console.log(`User authenticated: ${this.isUserAuthenticated}`);
      },
      error: (err) => {
        console.log(`An error occurred while setting isUserAuthenticated flag: ${err}`);
      }
    });
  }

  getBasketCount(items: IBasketItem[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  public login(): void {
    this.acntService.login();
  }

  public logout(): void {
    this.acntService.logout();
  }
}
