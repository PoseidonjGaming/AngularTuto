import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../interface/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private subject = new Subject<IProduct>()

  add(prod: IProduct){
    this.subject.next(prod)
  }

  get(): Subject<IProduct>{
    return this.subject
  }
}
