import { Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-submenu',
    templateUrl: './js/app/header-page/submenu/submenu.component.html'
})

export class SubmenuComponent {

    constructor(){
        console.log('submenu');
    }

   /* OnInit(){
    }

    gotoNovedad() {
        this._router.navigate(['Novedad', {}]);
    }

    gotoRecommend() {
        this._router.navigate(['Recommend', {}]);
    }

    gotoTendencia() {
        this._router.navigate(['Tendencia', {}]);
    }*/
}