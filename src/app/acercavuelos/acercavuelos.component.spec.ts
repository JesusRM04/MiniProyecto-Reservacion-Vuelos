import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercavuelosComponent } from './acercavuelos.component';

describe('AcercavuelosComponent', () => {
  let component: AcercavuelosComponent;
  let fixture: ComponentFixture<AcercavuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercavuelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercavuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
