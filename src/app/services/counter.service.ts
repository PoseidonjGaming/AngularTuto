import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  run(): Observable<number>{
    return new Observable<number>((sub: Subscriber<number>)=>{
      let i=0;
      setInterval(()=>{
        console.log(i)
        sub.next(i)
        if(i==10){
          sub.complete()
        }
        i++
      },100)
    });
  }
}
