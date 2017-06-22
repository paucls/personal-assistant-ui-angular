import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ] // declare the test component
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance; // NavbarComponent test instance

    // query for the navbar nav tag by CSS element selector
    de = fixture.debugElement.query(By.css('nav.navbar'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original userName', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.userName);
  });

  it('should display a different test title', () => {
    const newUserName = 'Mark Ryan';
    component.userName = newUserName;
    fixture.detectChanges();
    expect(el.textContent).toContain(newUserName);
  });

});
