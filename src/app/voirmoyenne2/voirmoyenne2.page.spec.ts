import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Voirmoyenne2Page } from './voirmoyenne2.page';

describe('Voirmoyenne2Page', () => {
  let component: Voirmoyenne2Page;
  let fixture: ComponentFixture<Voirmoyenne2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Voirmoyenne2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Voirmoyenne2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
