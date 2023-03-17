import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService) { }

  users: IUser[] = []
  ngOnInit(): void {
    this.getAll()
  }

  private getAll(){
    this.service.getUsers().subscribe((d: IUser[]) => {
      this.users = d
    })
  }


}
