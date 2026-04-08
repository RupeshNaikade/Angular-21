import { Component, OnInit } from '@angular/core';
import { ProductStore } from '../../product/product.store';
import { Product } from '../../product/product.modal';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-cart.component',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {

  constructor(public productStore: ProductStore, public productService: ProductService) {
  }
  ngOnInit(): void {
    console.log('cart data', this.productStore.cartItems$());
    var data = this.productService.getItem();
    data.subscribe((res) => {
      console.log('product details data subject', res);
    });

    var behData = this.productService.getItemWithBehaviorSubject();
    behData.subscribe((res) => {
      console.log('product details data with behavior subject', res);
    });
  }

  removeToCart(_t2: any) {
    this.productStore.removeCartData(_t2);
  }


}
