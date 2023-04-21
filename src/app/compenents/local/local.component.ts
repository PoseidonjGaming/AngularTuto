import { Component, Inject, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {
  constructor(@Inject(LOCALE_ID) public locale: string, @Inject(DEFAULT_CURRENCY_CODE) public devise: string) {
  }

  date = new Date()
}
