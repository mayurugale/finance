import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceaddComponent } from './financeadd.component';

describe('FinanceaddComponent', () => {
  let component: FinanceaddComponent;
  let fixture: ComponentFixture<FinanceaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
