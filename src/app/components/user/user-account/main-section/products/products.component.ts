import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { DataFromServerService } from 'src/app/services/data-from-server.service';
import { ProductService } from '../../../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges, OnDestroy {
  // @ViewChild(MatTable) table: MatTable<PeriodicElement>
  selectedCategory: number = 0;
  prdList: Product[] = []
  category! : Category
  subscription!: Subscription[]
  todayDate: Date = new Date();
  imgHoverColor: string = 'green';
  constructor(
    private prdService: ProductService,
    private DataFrmServer: DataFromServerService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    console.log("welcome ");

    let sub1, sub2;
    if (this.selectedCategory != 0) {
      sub1 = this.DataFrmServer.getProductsByCatID(this.selectedCategory)
      .subscribe((products) => {
        this.prdList = products;
        console.log("welcome ");
      });
      this.subscription.push(sub1);
    } else {
      sub2 = this.DataFrmServer.getAllProducts().subscribe((products) => {
        this.prdList = products;
        //
      });
      this.subscription.push(sub2);
    }
  }
  // AllProducts(): any {
  //   this.selectedCategory = 0
  //  return this.getProductsByCatID()
  //  }
  getProductsByCatID() {
    console.log("welcome ");

    // if(this.selectedCategory!=0)
    //   return this.prdService.getProductsByCatID(this.selectedCategory)
    // else
    //   return this.prdService.getAllProducts();
    if (this.selectedCategory != 0)
      return this.prdService.getProductsByCatID(this.selectedCategory);
    else return this.prdService.getAllProducts();
  }

  getCategory() {
    return this.prdService.getCategory();
  }
  viewProduct(prdID:number):void{
    // this.router.navigate(['/Products/',prdID]);
    this.router.navigateByUrl('/Products/' + prdID);
    console.log(prdID);
  }
  addData() {}
  removeData() {}
  goToPrdDetails() {}
}
