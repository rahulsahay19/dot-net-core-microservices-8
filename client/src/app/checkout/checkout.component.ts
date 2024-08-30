import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AcntService } from '../account/acnt.service';
import { BasketService } from '../basket/basket.service';
import { IBasket, IBasketItem } from '../shared/models/basket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  constructor(
    public basketService: BasketService,
    private acntService: AcntService,
    private router: Router){}

  ngOnInit(): void {
    this.acntService.currentUser$.subscribe({
      next: (user) => {
        this.isUserAuthenticated = !!user;
        if (!this.isUserAuthenticated) {
          // If the user is not authenticated, trigger the login process
          this.acntService.login(this.router.url);
        }
      },
      error: (err) => {
        console.log(`An error occurred while setting isUserAuthenticated flag: ${err}`);
      }
    });
  }
  public isUserAuthenticated: boolean = false;


  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemFromBasket(item);
  }

  incrementItem(item: IBasketItem){
    this.basketService.incrementItemQuantity(item);
  }

  decrementItem(item: IBasketItem){
    this.basketService.decrementItemQuantity(item);
  }

  orderNow(item: IBasket){
    this.basketService.checkoutBasket(item);
  }
}
