import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthitencationServiceService {

  private static readonly TOKEN = 'token'
  constructor() { }

  login(name?: string, pwd?: string) {
    localStorage.setItem(AuthitencationServiceService.TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
  }

  lougout() {
    localStorage.removeItem(AuthitencationServiceService.TOKEN)
  }

  isAuthitacation(): boolean {
    return AuthitencationServiceService.TOKEN != null
  }

  getToken(): string | null {
    return localStorage.getItem(AuthitencationServiceService.TOKEN)
  }


}
