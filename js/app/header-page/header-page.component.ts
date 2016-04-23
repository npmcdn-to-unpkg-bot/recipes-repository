import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { SearchComponent } from './search/search.component';
import { SubmenuComponent } from './submenu/submenu.component';
@Component({
    selector: 'my-header-page',
    templateUrl: './js/app/header-page/header-page.component.html',
    directives: [ SearchComponent, SubmenuComponent ]
})

//export class HeaderPageComponent {
export class HeaderPageComponent {
    //selectedAdvanceSearch: Boolean;

    constructor(){
        console.log('hola');
    }
/*
    constructor(private _router: Router){
        console.log('hola');
    }
    ngOnInit() {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
        console.log('hola2');
    }
    OnInit(){
        this.selectedAdvanceSearch = false;
    }

    gotoLogin() {
        this._router.navigate(['login', {}]);
    }
    gotoHome() {
        this._router.navigate(['Home', {}]);
    }

    onSelectAdvanceSearch(select: Boolean) { this.selectedAdvanceSearch = select; }

   /* constructor(){
        this.sayMyName()
    }
    sayMyName(){
        console.log('hola')
    }*/
}