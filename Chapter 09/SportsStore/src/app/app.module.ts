import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cart-detail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreFirstGuard } from './store-first.guard';
import { AdminModule } from './admin/admin.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, StoreModule,
        RouterModule.forRoot([
            {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
            {path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard]},
            {path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]},
            {path: 'admin', loadChildren: () => AdminModule, canActivate: [StoreFirstGuard]},
            {path: '**', redirectTo: '/store'},
        ])
    ],
    providers: [StoreFirstGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
