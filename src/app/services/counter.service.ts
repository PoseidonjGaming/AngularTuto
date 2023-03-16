import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  id:unknown;
  constructor() { }

  run(): Observable<number>{
    return new Observable<number>((sub: Subscriber<number>)=>{
      let i=0;
      this.id= setInterval(()=>{
        console.log(i)
        sub.next(i)
        if(i==10){
          sub.complete()
          this.clear()
        }
        i++
      },100)
    });
  }

  clear(){
    clearInterval(this.id as number);
  }
}
