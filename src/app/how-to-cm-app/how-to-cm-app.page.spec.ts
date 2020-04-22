import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowToCmAppPage } from './how-to-cm-app.page';

describe('HowToCmAppPage', () => {
  let component: HowToCmAppPage;
  let fixture: ComponentFixture<HowToCmAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToCmAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowToCmAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
