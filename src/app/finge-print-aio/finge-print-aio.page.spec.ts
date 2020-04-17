import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FingePrintAioPage } from './finge-print-aio.page';

describe('FingePrintAioPage', () => {
  let component: FingePrintAioPage;
  let fixture: ComponentFixture<FingePrintAioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingePrintAioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FingePrintAioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
