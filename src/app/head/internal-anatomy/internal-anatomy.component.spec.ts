import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAnatomyComponent } from './internal-anatomy.component';

describe('InternalAnatomyComponent', () => {
  let component: InternalAnatomyComponent;
  let fixture: ComponentFixture<InternalAnatomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalAnatomyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalAnatomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
