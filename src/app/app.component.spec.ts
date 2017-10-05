import {async, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ProductService} from "./product-component/pruduct-service.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {SortTablePipe} from "./pipe/sort-table.pipe";
import {CustomerService} from "./customer/customer-service.service";
import {APP_BASE_HREF} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BasketComponent} from "./basket/basket.component";
import {MenuComponent} from "./menu/menu.component";
import {ProductComponent} from "./product-component/product-component.component";
import {FormsModule} from "@angular/forms";
describe('AppComponent', () => {

  const title : string = "Welcome to OUI.SNCF.COM";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        ProductComponent,
        HomeComponent,
        BasketComponent
      ],
      providers: [ProductService,
        CustomerService,
        SortTablePipe,
        {provide: 'title', useValue: title},
        {provide: APP_BASE_HREF, useValue : ""}],
      imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([], {useHash: true}),
        FormsModule
      ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
