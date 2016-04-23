import { Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-search',
    templateUrl: './js/app/header-page/search/search.component.html'
})

export class SearchComponent {

    constructor(){
        console.log('search');
    }
}