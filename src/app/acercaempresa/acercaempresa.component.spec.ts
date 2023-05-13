import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaempresaComponent } from './acercaempresa.component';

describe('AcercaempresaComponent', () => {
  let component: AcercaempresaComponent;
  let fixture: ComponentFixture<AcercaempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
