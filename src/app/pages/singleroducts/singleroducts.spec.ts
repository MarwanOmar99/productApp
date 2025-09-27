import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singleroducts } from './singleroducts';

describe('Singleroducts', () => {
  let component: Singleroducts;
  let fixture: ComponentFixture<Singleroducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Singleroducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singleroducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
