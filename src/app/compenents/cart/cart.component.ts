import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items: IProduct[]=[]

  constructor(private cart: CartService){}

  ngOnInit(): void {
    this.cart.get().subscribe({
      next: (v: IProduct)=>{
        this.items.push(v)
      }
    })
  }
  
}
