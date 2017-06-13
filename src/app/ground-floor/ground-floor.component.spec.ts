import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundFloorComponent } from './ground-floor.component';

describe('GroundFloorComponent', () => {
  let component: GroundFloorComponent;
  let fixture: ComponentFixture<GroundFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
