import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDialogComponent } from './items-dialog.component';

describe('ItemsDialogComponent', () => {
  let component: ItemsDialogComponent;
  let fixture: ComponentFixture<ItemsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
