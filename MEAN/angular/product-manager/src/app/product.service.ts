import { Product } from './product'; //This is being imported from the product.ts model.
import { Injectable } from '@angular/core'; // automatically imported when you create the service
import { BehaviorSubject } from 'rxjs'; //The BehaviorSubject is a type of observable which allows us to retrieve the current data last modified on the Observable.


@Injectable() // automatically imported when you create the service
export class ProductService {
  productsObservable = new BehaviorSubject(null);

  constructor() { }

  updateProducts(products: Array<Product>) { //<'Product'> is from the Product model, where in the constructor of the Product lays out the format for how the array to be set up.
    this.productsObservable.next(products);
  }

}
