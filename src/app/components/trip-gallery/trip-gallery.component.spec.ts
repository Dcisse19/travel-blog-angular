import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripGalleryComponent } from './trip-gallery.component';

describe('TripGalleryComponent', () => {
  let component: TripGalleryComponent;
  let fixture: ComponentFixture<TripGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
