import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  date=new Date();
  tab: string[]=["test","test1","test2","test3","test4","test5","test6","test7","test","test1","test2","test3","test4","test5","test6","test7"]
  start=0;
  end=5;

  next(){
    this.start+=5
    if(this.end+5>this.tab.length){
      this.end=this.tab.length
    }
    else{

      this.end+=5
    }

  }

  prev(){
    if(this.start-5<0){
      this.start=0
      this.end=5
    }
    else if(this.end==this.tab.length){
      this.start-=5
      this.end-=1
    }
    else{
      this.start-=5
      this.end-=5
    }

  }
}
