import { Component } from '@angular/core';
import { CaesarCipherService } from 'src/app/services/caesar-cipher.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  constructor(private cipher: CaesarCipherService) { }

  msg?: string

  encode() {
    if(this.msg!=undefined){
      console.log(this.cipher.encode(this.msg))
      this.msg = undefined
    }
  }
}
