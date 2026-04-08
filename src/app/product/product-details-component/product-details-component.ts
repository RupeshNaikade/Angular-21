import { Component, EventEmitter, Input, OnChanges, OnInit, Output, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from '../product.service';
import { SmartPipePipe } from '../../pipe/smart-pipe-pipe';
@Component({
  selector: 'app-product-details-component',
  standalone: true,
  imports: [SmartPipePipe],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.scss',
})
export class ProductDetailsComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() data: any;
  @Output() productDetails = new EventEmitter<any>();

  @ContentChild('myref') content!: ElementRef;


  constructor(public productService: ProductService) {
  }

  ngAfterContentInit() {
    console.log('product details data after content init', this.content.nativeElement.innerText);
  }


  ngOnInit(): void {


    var data = this.productService.itemSubject$.subscribe((res) => {
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

