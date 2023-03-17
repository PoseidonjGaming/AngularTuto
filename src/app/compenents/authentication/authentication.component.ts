import { Component } from '@angular/core';
import { AuthitencationServiceService } from 'src/app/services/authitencation-service.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  constructor(private auth: AuthitencationServiceService){}
  
  cnx(){
    this.auth.login("Admin", "1234")
  }

  uncnx(){
    this.auth.lougout()
    
  }

  isCNX(): boolean{
    return this.auth.isAuthitacation()
  }
}
