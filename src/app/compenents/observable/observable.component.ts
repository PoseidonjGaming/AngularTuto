import { I18nPluralPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/IProduct';
import { CartService } from 'src/app/services/cart.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  disabled!: boolean;
  sub?: Subscription

  tab!: IProduct[]
  constructor(private counter: CounterService, private cart: CartService) { }

  ngOnInit(): void {
    this.disabled = false;
    this.tab = [
      {
        name: 'test', price: 3.33
      },
      {
        name: 'test', price: 3.33
      },
      {
        name: 'test', price: 3.33
      }
    ]
  }


  number?: number;


  start() {
    this.disabled = true
    this.number = undefined
    this.sub = this.counter.run().subscribe({
      next: (v: number) => {
        this.number = v
      },
      complete: () => {
        this.disabled = false
      }
    })
  }

  addToCart(p: IProduct){
    this.cart.add(p)
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
    this.counter.clear()
  }
}
