import { ProductService } from './product.service';//Need to import ProductService to link the whole project to the services.
import { routing } from './routes'; //The routing is a var, being imported from routes.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Add this if there is a form involved in the project.
import { HttpModule } from '@angular/http'; //Need to have this imported cause of the service named ProductService.

import { AppComponent } from './app.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductNewComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductLandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Need to have this cause the importing of the Formsmodule.
    HttpModule,  //Need to have this cause the importing of the HttpModule.
    routing //Need to add this cause the import of routing.
  ],
  providers: [ProductService], // Need to add the name of the service into providers.
  bootstrap: [AppComponent]
})
export class AppModule { }
