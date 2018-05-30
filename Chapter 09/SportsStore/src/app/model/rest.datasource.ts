import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';
import { map } from 'rxjs/operators';


const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    get httpOptions() {
        return {
            headers: new HttpHeaders({
                'Authorization': `Bearer<${this.auth_token}>`
            })
        };
    }

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getUrl(suffixUrl: string): string {
        return `${this.baseUrl}${suffixUrl}`;
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post(this.getUrl('login'), {name: user, password: pass})
            .pipe(
                map(response => {
                    this.auth_token = response['success'] ? response['token'] : null;
                    return response['success'];
                }));
    }

    getProducts() {
        return this.http.get<Product[]>(this.getUrl('products'), this.httpOptions);
    }

    saveProduct(product: Product) {
        return this.http.post<Product>(this.getUrl('products'), product, this.httpOptions);
    }

    updateProduct(product) {
        return this.http.put<Product>(this.getUrl(`products/${product.id}`), product, this.httpOptions);
    }

    deleteProduct(id: number) {
        return this.http.delete<Product>(this.getUrl(`products/${id}`), this.httpOptions);
    }

    getOrders() {
        return this.http.get<Order[]>(this.getUrl('orders'), this.httpOptions);
    }

    saveOrder(order: Order) {
        return this.http.post<Order>(
            this.getUrl('orders'), order, this.httpOptions);
    }

    updateOrder(order: Order) {
        return this.http.put<Order>(this.getUrl(`orders/${order.id}`), order, this.httpOptions);
    }

    deleteOrder(id: number) {
        return this.http.delete<Order>(this.getUrl(`orders/${id}`), this.httpOptions);
    }
}
