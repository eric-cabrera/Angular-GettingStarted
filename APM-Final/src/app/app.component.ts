//this is our root app component
import { Component } from '@angular/core';

//@Component is a decorator. it always prefix with an @ singh  
//a decorator is a function and that's why we use parenthisis that add metadata to a class its members our its mthod arguments  
//we adentified this class as a component 

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //property
  pageTitle : string  = 'Acme Product Management';
}
