import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
    moduleId: module.id,
    selector: 'app-cart-summary',
    templateUrl: 'cart-summary.component.html'
})

export class CartSummaryComponent {

    constructor(public cart: Cart) {
    }
}
