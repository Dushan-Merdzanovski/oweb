import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcommentComponent } from './cardcomment.component';

describe('CardcommentComponent', () => {
  let component: CardcommentComponent;
  let fixture: ComponentFixture<CardcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
