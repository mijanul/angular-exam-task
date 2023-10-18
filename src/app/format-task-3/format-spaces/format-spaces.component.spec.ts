import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatSpacesComponent } from './format-spaces.component';

describe('FormatSpacesComponent', () => {
  let component: FormatSpacesComponent;
  let fixture: ComponentFixture<FormatSpacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatSpacesComponent]
    });
    fixture = TestBed.createComponent(FormatSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
