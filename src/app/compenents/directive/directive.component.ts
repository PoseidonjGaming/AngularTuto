import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  display=true
  or?:string
  class?:string
  pg=10;
  color='red'

  info(): string|null{
    if(!this.display){
      return null;
    }
    return "CC"
  }


}
