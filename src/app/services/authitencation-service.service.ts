import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthitencationServiceService {

  private static readonly TOKEN = 'token'
  private subject = new BehaviorSubject("visiteur")
  constructor() { }

  login(name?: string, pwd?: string) {
    console.log(name)
    this.subject.next(name!)
    localStorage.setItem(AuthitencationServiceService.TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
  }

  lougout() {
    this.subject.next('visiteur')
    localStorage.removeItem(AuthitencationServiceService.TOKEN)
  }

  isAuthitacation(): boolean {
    return this.getToken() != null
  }

  getToken(): string | null {
    return localStorage.getItem(AuthitencationServiceService.TOKEN)
  }

  get(): BehaviorSubject<string> {
    return this.subject
  }

}
