import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutapageComponent } from './rutapage.component';

describe('RutapageComponent', () => {
  let component: RutapageComponent;
  let fixture: ComponentFixture<RutapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutapageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
