import { Component } from '@angular/core';

@Component({
  selector: 'app-pres',
  templateUrl: './pres.component.html',
  styleUrls: ['./pres.component.css']
})
export class PresComponent {

  //test='test';
  prod={
    id:1,
    name:'test',
    price:13.99
  }

  html='<b>test</b>'

  src='assets/LoopingImage.jpg'

  msg?: string;

  users=['test','test','test']

  test(): void{
    console.log("test")
  }

  testdl(event: MouseEvent):void{
    console.log(event.target)
  }



}
