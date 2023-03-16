import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaesarCipherService {

  constructor() { }

  encode(msg: string): string{
    return (msg + '').replace(/[a-zA-Z]/gi, (s) => {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
    });
  }

  decode(msg: string): string{
    return this.encode(msg)
  }
}
