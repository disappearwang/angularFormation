import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";
import {ProductComponent} from "./product-component/product-component.component";
import {ProductService} from "./product-component/pruduct-service.service";
import {CustomerService} from "./customer/customer-service.service";
import {SortTablePipe} from "./pipe/sort-table.pipe";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import {BasketComponent} from "./basket/basket.component";
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { FormValidatorDirective } from './validator/form-validator.directive';
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader} from "@ngx-translate/core";
import {TranslateModule} from "@ngx-translate/core";
import {TranslatePipe} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'basket', component: BasketComponent}
];


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    HomeComponent,
    BasketComponent,
    FooterComponent,
    FormValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    TranslateModule.forRoot()
  ],
  providers: [ProductService,
    CustomerService,
    SortTablePipe,
    TranslatePipe,
    TranslateService,

    {provide: APP_BASE_HREF, useValue : ""}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
