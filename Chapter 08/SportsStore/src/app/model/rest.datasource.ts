import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';


const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts() {
        return this.http.get(`${this.baseUrl}products`);
    }

    sendOrder(order: Order) {
        return this.http.post(
            '${this.baseUrl}orders', order);
    }
}
