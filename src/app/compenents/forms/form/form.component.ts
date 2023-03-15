import { Component } from '@angular/core';
import { IProduct } from '../../../interface/IProduct'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  products:IProduct[]=[];
  product: IProduct={name:'', price:0};


  submit(form: NgForm){
    form.control.markAllAsTouched();
console.log(this.product.price)
    if(form.valid){

      this.product.price=+String(this.product.price).replace(',','.')
      this.products.push(this.product)
      this.product={name:'', price:0};
      form.resetForm(this.product);
    }

  }
}
