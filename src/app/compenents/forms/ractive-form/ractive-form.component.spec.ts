import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RactiveFormComponent } from './ractive-form.component';

describe('RactiveFormComponent', () => {
  let component: RactiveFormComponent;
  let fixture: ComponentFixture<RactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
