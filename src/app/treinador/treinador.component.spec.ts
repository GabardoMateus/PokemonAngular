import { TreinadorComponent } from "@angular/cli/bin/angular-pokemon/src/app/treinador/treinador.component";
import { ComponentFixture, TestBed } from "@angular/cli/bin/angular-pokemon/node_modules/@angular/core/testing";
import { async } from "@angular/cli/bin/angular-pokemon/node_modules/@types/q";


describe('TreinadoresComponent', () => {
  let component: TreinadorComponent;
  let fixture: ComponentFixture<TreinadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
