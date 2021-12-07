import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsFromAPIService } from 'src/app/services/products-from-api.service';
import { ProductAPI } from 'src/app/models/product-api';
import { environment } from 'src/environments/environment';
import { CatrgoriesFromApiService } from 'src/app/services/catrgories-from-api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  // @ViewChild(MatTable) table: MatTable<PeriodicElement>
  subscription!: Subscription[]
  imgHoverColor: string = 'green';


  ImagesUrl: string = environment.ImagesURL;
  todayDate: Date = new Date();
  ProductList: ProductAPI[] = [];
  CatList: string[] = [];
  SelectedProduct!: ProductAPI;
  selectedCat: string = "";
  StaticCat: string[] = ["Mobiles", "Tablets", "Electronics", "Watches", "Televisions", "Fashion", "Clothes"];



  constructor(private prdSerAPI: ProductsFromAPIService, private catSerAPI: CatrgoriesFromApiService, private router: Router) {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  ngOnInit(): void {
    this.prdSerAPI.getAllProducts()
      .subscribe(productList => {
        this.ProductList = productList;
        //console.log(this.ProductList)
      },
        err => {
          console.log(err);
        });


    this.catSerAPI.getAllCategories()
      .subscribe(catList => {
        this.CatList = catList;
        //console.log("hamooooooooooo",this.CatList)
      },
        err => {
          //console.log("erooooooor",this.CatList)
          console.log(err);
        });
  }

  showProducts(category: string) {
    if (category === "") {
      this.prdSerAPI.getAllProducts()
        .subscribe(productList => {
          this.ProductList = productList;
          //console.log(this.ProductList)
        },
          err => {
            console.log(err);
          });
    }
    else {
      this.prdSerAPI.getProductByCatName(category)
        .subscribe(productList => {
          this.ProductList = productList;
          //console.log(this.ProductList)
        },
          err => {
            console.log(err);
          });
    }

  }

  showProductById(id: string) {
    this.prdSerAPI.getProductByID(id)
      .subscribe(product => {
        this.SelectedProduct = product;
        console.log(this.SelectedProduct)
      },
        err => {
          console.log(err);
        });
  }
  addData() { }
  removeData() { }
  deleteProduct(prdId: string) {
    if (confirm("Are you sure to delete this product")) {
      this.prdSerAPI.deleteProductByID(prdId).subscribe(
        (prd => {
          console.log(prd)
          this.prdSerAPI.getAllProducts()
            .subscribe(productList => {
              this.ProductList = productList;
              //console.log(this.ProductList)
            },
              err => {
                console.log(err);
              });
        })
        , (err => console.log(err))
      )
    }
  }
  goToPrdDetails() { }
}

