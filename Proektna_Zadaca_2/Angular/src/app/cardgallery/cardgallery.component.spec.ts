import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardgalleryComponent } from './cardgallery.component';

describe('CardgalleryComponent', () => {
  let component: CardgalleryComponent;
  let fixture: ComponentFixture<CardgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardgalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
