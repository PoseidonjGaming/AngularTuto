import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: string[]=[];
  content?: string;

  add(){
    var content=this.content!.trim();
    if(content!==''){
      this.todos.push(content);
    }
    this.content='';
  }

  delete(key: number){
    this.todos.splice(key, 1);
  }

}
