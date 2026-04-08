import { computed, Injectable, signal } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.modal';
@Injectable({
  providedIn: 'root',
})
export class ProductStore {

  constructor(public Product: ProductService) {

  }

  private product = signal<Product[]>([]);
  private loading = signal<boolean>(false);

  product$ = computed(() => this.product());
  loading$ = computed(() => this.loading());

  private cartData = signal<Product[]>([]);
  cartItems$ = this.cartData.asReadonly();

  getProductList() {
    this.loading.set(true);
    this.Product.getProductList().subscribe((res: any) => {
      this.product.set(res.products);
      this.loading.set(false);
    }, (err) => {
      console.error('Error fetching products:', err);
      this.loading.set(false);
    });
  }

  get productList() {
    return this.product();
  }

  get isLoading() {
    return this.loading();
  }

  setCartData(cartItems: Product) {
    this.cartData.update(currentItems => [...currentItems, cartItems]);
  }

  removeCartData(cartItems: Product) {
    this.cartData.update(currentItems => currentItems.filter(item => item.id !== cartItems.id));
  }

}
