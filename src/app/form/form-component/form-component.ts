import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from '../../product/product.service';
import { SmartPipePipe } from '../../pipe/smart-pipe-pipe';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, SmartPipePipe],
  templateUrl: './form-component.html',
  styleUrl: './form-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  form: any;
  email: any;
  password: any;
  data: any;
  constructor(public fb: FormBuilder, public service: ProductService, public cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
    })

    this.service.getProductList().subscribe((res: any) => {
      console.log('product list data', res);

      this.data = res.products.filter((item: any) => item.stock > 70);
      console.log('filtered product list data', this.data.length, this.data);
      this.cdr.markForCheck();
    });

  }


  formSubmit() {
    console.log("form submit:", this.form.value);
    console.log("form submit:", this.email);
    console.log("form submit:", this.password);
  }

}
