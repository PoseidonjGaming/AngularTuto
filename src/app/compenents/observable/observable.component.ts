import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  constructor(private counter: CounterService){}

  number?: number;
  disabled=false;

  start(){
    this.disabled=true
    this.number=undefined
    this.counter.run().subscribe()
  }
}
