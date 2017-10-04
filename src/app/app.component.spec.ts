import {async, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Product} from "./model/product";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as total `, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.total).toEqual(0);
  }));
  it('should render title in a p tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Votre panier s\'élève à');
  }));
 /* it('should updatePrice', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    let productCompo = compiled.querySelector('app-product-component');
    let product = new Product();
    product.title = "test_product";
    product.description="this is a test product";
    product.photo = "";
    product.price = 100;
    productCompo.data = product;
    productCompo.querySelector('button').click();

    const app = fixture.debugElement.componentInstance;
    expect(app.total).toEqual(100);

  }) )*/
});
