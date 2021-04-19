import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaListComponent } from './traza-list.component';

describe('TrazaListComponent', () => {
  let component: TrazaListComponent;
  let fixture: ComponentFixture<TrazaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrazaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
