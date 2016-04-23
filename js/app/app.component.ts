import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeaderPageComponent } from './header-page/header-page.component';


@Component({
    selector: 'my-app',
    templateUrl: 'js/app/app.component.html',
    directives: [ HeaderPageComponent ]

})
@RouteConfig([
    {
        path: '/',
        name: 'index'
        //component: DashboardComponent,
        //useAsDefault: true
    }
])
export class AppComponent {
    title = 'Pagina principal';
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */