import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentblockComponent } from './contentblock.component';

describe('ContentblockComponent', () => {
  let component: ContentblockComponent;
  let fixture: ComponentFixture<ContentblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
