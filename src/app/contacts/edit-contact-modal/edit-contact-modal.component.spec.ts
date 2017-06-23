import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactModalComponent } from './edit-contact-modal.component';

describe('EditContactModalComponent', () => {
  let component: EditContactModalComponent;
  let fixture: ComponentFixture<EditContactModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
