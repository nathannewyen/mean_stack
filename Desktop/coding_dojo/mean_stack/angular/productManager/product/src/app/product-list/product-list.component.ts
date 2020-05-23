import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService() {
    let observable = this._httpService.getProducts();
    observable.subscribe((data) => {
      this.products = data["data"];
    });
  }
}
