import { ProductService } from './../product.service'; //imported from the services but is related to the observables
import { Component, OnInit } from '@angular/core'; //automatically imported when creating a component
import { Router, ActivatedRoute } from '@angular/router';
//Router is imported for routing, ActivatedRoute was imported for line 27-33
import { Product } from '../Product'; //imported from the product.ts (model) to layout the format of product, and to have access to the model colums.

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products: Product[]; // products will hold the array filled with values of product type cause it is a class(itts own datatype)
  product: Product; // this will be a var of the Product datatype class

  constructor(  //the constructor is utilizing the dependencies of the imported items; having a (_)is claiming that as a variable and it it storing the imported item(linking it all)
    private _route: ActivatedRoute, //used in line 27
    private _productService: ProductService, // ProductService is the class name of that file which holds all the logic in it; It is also being stored in a var _produceService, which allows for it to be accessed with this._produceService
    private _router: Router //used in line 44
  ) {

    this._productService.productsObservable  //EXPLAIN AFTER THE LECTURE
    .subscribe( (products) => {
      this.products = products;
    });

    this._route.params // ActivatedRoute: contains route specific information such as route parameters, static data, resolve data, etc.
    .subscribe( param => { //EXPLAIN AFTER THE LECTURE
      for (let idx = 0; idx < this.products.length; idx++) {
        if (this.products[idx].id == param.id) {
          this.product = this.products[idx];
          break;
        }
      }
    });

  }

  ngOnInit() {
  }

  update(){ //Router: Displays the application component for the active URL. Manages navigation from one component to the next
    this._productService.updateProducts(this.products);//_produceService is being called with its method updatePRoducts(this.products) being the parram being stored with it when the function runs.
    this._router.navigate(['/products']);//the _router var is being called from the constructor which holders Router, and is being told to the go to the product url with .navigate(['/products']);
  }

}
