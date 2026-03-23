import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicConComponent } from './comic-con.component';

describe('ComicConComponent', () => {
  let component: ComicConComponent;
  let fixture: ComponentFixture<ComicConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicConComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
