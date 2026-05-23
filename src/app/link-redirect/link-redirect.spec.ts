import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRedirect } from './link-redirect';

describe('LinkRedirect', () => {
  let component: LinkRedirect;
  let fixture: ComponentFixture<LinkRedirect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkRedirect],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkRedirect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
