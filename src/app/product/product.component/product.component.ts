import { Component, OnInit } from '@angular/core';
import { ProductStore } from '../product.store';
import { Product } from '../product.modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductDetailsComponent } from '../product-details-component/product-details-component';

@Component({
  selector: 'app-product.component',
  imports: [ProductDetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {

  constructor(public productStore: ProductStore, public productService: ProductService, public router: Router) {
  }

  ngOnInit(): void {
    this.productStore.getProductList();
  }


  addToCart(_t1: any) {
    this.productStore.setCartData(_t1);
  }

  productDetails(item: Product) {
    // Implementation for product details can be added here, such as navigating to a product details page or displaying a modal with product information.
    this.productService.setItem(item);

    this.productService.setItemWithBehaviorSubject(item);

    //this.router.navigate(['/product-details']);
  }

}
