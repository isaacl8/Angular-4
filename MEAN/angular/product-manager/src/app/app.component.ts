import { ProductService } from './product.service'; //importing the ProductService Class so that it can be injected into the constructor() parameters
import { Product } from './product'; // importing product
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; //a special type of observable to grab special characters; Represents a value that changes over time; used with suscribe

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {

 products = [ // is the arr to store the products being created
   new Product(1, 'DSLR Camera', 1499.99, '../../assets/camera.jpeg'),
   new Product(2, 'iLaptop', 1299.99, '../../assets/laptop.jpg')
 ];

 constructor(private _productService: ProductService) { //ProductService class is injected  and saved in the _productService variable
   this._productService.updateProducts(this.products); //from this._produceService variable invoke updateProducts(); this.products is from the products(arr) on line 13
   this._productService.productsObservable.subscribe( (products) => { //productsObservable.subscribe goes back to the observable BehaviorSubject
     this.products = products; //expain after the lecture
   });
 }



}
