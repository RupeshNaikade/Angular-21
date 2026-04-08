import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-details-component',
  imports: [],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.scss',
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Output() productDetails = new EventEmitter<any>();


  constructor(public productService: ProductService) {
  }

  ngOnInit(): void {


    var data = this.productService.itemSubject$.subscribe((res)=>{
      console.log('product details data subject', res);
    });

    var behData = this.productService.itemSubBehaviorSubject$;
    behData.subscribe((res) => {
      console.log('product details data with behavior subject', res);
    });
  }

  ngOnChanges() {
    //console.log('product details data on changes', this.data);
  }

  productDetailsEvent(item: any) {
    this, this.productDetails.emit(item);
  }

}

