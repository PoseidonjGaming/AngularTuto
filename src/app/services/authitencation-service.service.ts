import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthitencationServiceService {

  private static readonly TOKEN = 'token'

  private subject = new BehaviorSubject("visiteur")
  
  constructor(private router: Router, private route:ActivatedRoute) { }

  login(name?: string, pwd?: string) {
    this.subject.next(name!)
    localStorage.setItem(AuthitencationServiceService.TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    if(this.route.snapshot.queryParamMap.has('redirect')){
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('redirect')!)
    }
  }

  lougout() {
    this.subject.next('visiteur')
    localStorage.removeItem(AuthitencationServiceService.TOKEN)
    this.router.navigateByUrl('/')
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
