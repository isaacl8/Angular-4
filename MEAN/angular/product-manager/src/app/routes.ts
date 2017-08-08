import { ProductEditComponent } from './product-edit/product-edit.component';//Need to import the components to allow them to be routed to
import { ProductNewComponent } from './product-new/product-new.component';//Need to import the components to allow them to be routed to
import { ProductListComponent } from './product-list/product-list.component';//Need to import the components to allow them to be routed to
import { ProductLandingComponent } from './product-landing/product-landing.component';//Need to import the components to allow them to be routed to
import { Routes, RouterModule } from '@angular/router';//Need this line of code where-ever the routes are located

const APP_ROUTES: Routes = [ // const APP_ROUTES: is to store the object val of the diff routes; : Routes = [ is defing this as a data type of routes(sim to string, arr)
    { path: '', component: ProductLandingComponent, pathMatch: 'full' }, //is the == the home page ('/'); pathMatch: 'full' - matches the exact path, only used for root route requests and sub-routing.
    { path: 'products', component: ProductListComponent },//the path is like the url(/products); Having the component: adding the connection ProductListComponent(needs to be the class name!!!)
    { path: 'products/new', component: ProductNewComponent },//the path is like the url(/products/new); Having the component: adding the connection ProductListComponent(needs to be the class name!!!)
    { path: 'products/edit/:id', component: ProductEditComponent } //having ':' tells angular to expect a parameter; creates a more specific url Having the component: adding the connection ProductEditComponent (needs to be the class name!!!)
];
export const routing = RouterModule.forRoot(APP_ROUTES);//this line is exporting the routing variable to app.module.ts which will have import routing
