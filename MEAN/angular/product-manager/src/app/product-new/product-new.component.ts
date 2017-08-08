import { ProductService } from './../product.service'; //imported from the services but is related to the observables, ProductServices is the class name
import { Product } from './../product'; ////imported from the product.ts (model) to layout the format of product, and to have access to the model colums.
import { Component, OnInit } from '@angular/core'; //automatically imported when creating a component
import { Router } from '@angular/router'; //Router is imported for routing, Displays the application component for the active URL. Manages navigation from one component to the next

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct: Product = new Product(); //Create a new instance of the Product model; and is being stored in the var newProduct
  products: Product[]; //defines the datatype of what products will be; expecting a products array; products will hold the array

  constructor( //the constructor is utilizing the dependencies of the imported items; having a (_)is claiming that as a variable and it it storing the imported item(linking it all)
    private _produceService: ProductService, // ProductService is the class name of that file which holds all the logic in it; It is also being stored in a var _produceService, which allows for it to be accessed with this._produceService
    private _router: Router //same explaination as _produceService
  ) {
    this._produceService.productsObservable.subscribe( (products) => { //this an observables
      this.products = products;
    })
  }

  ngOnInit() {
    this.newProduct = new Product(); //evry time this component loads it will reset and not hold ay residual product saving
  }

  create() {
    if (this.newProduct.imgUrl.length < 1 || //The if statement is checking if this.newProduct.imgUrl is empty, and if it id is will create a new image
        this.newProduct.imgUrl === 'null' ||
        this.newProduct.imgUrl === null) {
      this.newProduct.imgUrl = null;
    }
    this.products.push(this.newProduct);//the array in this.products isbeing pushed into the new var this.newProduct
    this._produceService.updateProducts(this.products);//_produceService is being called with its method updatePRoducts(this.products) being the parram being stored with it when the function runs.
    this.newProduct = new Product();// EXPLAIN
    this._router.navigate(['/products']);//the _router var is being called from the constructor which holders Router, and is being told to the go to the product url with .navigate(['/products']);
  }

}
