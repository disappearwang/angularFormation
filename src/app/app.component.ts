import {Component} from "@angular/core";
import {Inject} from "@angular/core";
import {Product} from "./model/product";
import {ProductService} from "./product-component/pruduct-service.service";
import {CustomerService} from "./customer/customer-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total: number;
  products: Product[];

  constructor(private productService: ProductService,
              private customerService: CustomerService,
              @Inject('title') private title: string) {
    this.total = 0;
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  getTitle(): string {
    return this.title;
  }

  getTotal(): number {
    return this.customerService.getTotal();
  }

  hasStock(product: Product): boolean {
    return this.productService.hasStock(product);
  }

  basketHandler(product: Product) {
    this.customerService.addProduct(product);
  }

  cartHandler() {
    this.customerService.getBasket();
  }
}
