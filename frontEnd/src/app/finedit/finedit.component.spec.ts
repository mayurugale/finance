import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineditComponent } from './finedit.component';

describe('FineditComponent', () => {
  let component: FineditComponent;
  let fixture: ComponentFixture<FineditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
