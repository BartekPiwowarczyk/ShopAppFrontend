import { Injectable } from '@angular/core';
import { CartCommonService } from '../common/service/cart-common.service';
import { CartSummary } from '../common/model/cart/cartSummary';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrderDto } from './model/orderDto';
import { OrderSummary } from './model/orderSummary';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private cartCommonService: CartCommonService,
    private http: HttpClient
    ) { }

  getCart(id: number):Observable<CartSummary> {
    return this.cartCommonService.getCart(id);
  }

  placeOrder(order: OrderDto): Observable<OrderSummary> {
    return this.http.post<OrderSummary>("/api/orders",order);
  }
}