import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRespectiveMenuCredentialsComponent } from './add-respective-menu-credentials.component';

describe('AddRespectiveMenuCredentialsComponent', () => {
  let component: AddRespectiveMenuCredentialsComponent;
  let fixture: ComponentFixture<AddRespectiveMenuCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRespectiveMenuCredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRespectiveMenuCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
