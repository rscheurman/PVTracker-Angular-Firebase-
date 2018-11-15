import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJumpsComponent } from './add-jumps.component';

describe('AddJumpsComponent', () => {
  let component: AddJumpsComponent;
  let fixture: ComponentFixture<AddJumpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJumpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
