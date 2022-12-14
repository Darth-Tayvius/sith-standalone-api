import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SithStandaloneApiLibComponent } from './sith-standalone-api-lib.component';

describe('SithStandaloneApiLibComponent', () => {
  let component: SithStandaloneApiLibComponent;
  let fixture: ComponentFixture<SithStandaloneApiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SithStandaloneApiLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SithStandaloneApiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
