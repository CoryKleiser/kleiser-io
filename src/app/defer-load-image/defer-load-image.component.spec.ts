import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferLoadImageComponent } from './defer-load-image.component';

describe('DeferLoadImageComponent', () => {
  let component: DeferLoadImageComponent;
  let fixture: ComponentFixture<DeferLoadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeferLoadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferLoadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
