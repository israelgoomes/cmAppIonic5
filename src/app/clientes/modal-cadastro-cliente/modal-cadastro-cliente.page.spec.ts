import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCadastroClientePage } from './modal-cadastro-cliente.page';

describe('ModalCadastroClientePage', () => {
  let component: ModalCadastroClientePage;
  let fixture: ComponentFixture<ModalCadastroClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCadastroClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCadastroClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
