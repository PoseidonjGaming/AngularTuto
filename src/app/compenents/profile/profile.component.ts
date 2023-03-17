import { Component, OnInit } from '@angular/core';
import { AuthitencationServiceService } from 'src/app/services/authitencation-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthitencationServiceService){}
  name: string = ''
  ngOnInit(): void {
    this.auth.get().subscribe({
      next:(v: string)=>{
        this.name=v
      },
      
    })
  }
  
}
