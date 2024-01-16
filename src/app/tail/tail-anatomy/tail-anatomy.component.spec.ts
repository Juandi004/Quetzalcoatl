import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailAnatomyComponent } from './tail-anatomy.component';

describe('TailAnatomyComponent', () => {
  let component: TailAnatomyComponent;
  let fixture: ComponentFixture<TailAnatomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailAnatomyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TailAnatomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
