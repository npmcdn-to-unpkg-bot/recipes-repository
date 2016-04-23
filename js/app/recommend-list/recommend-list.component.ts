import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { RecommendReceiptService } from './recommend-list.service';
import { RecommendList } from './recommend-list';


@Component({
    selector: 'my-recommend-list',
    templateUrl: './js/app/recommend-list/recommend-list.component.html'
})

export class RecommendListComponent implements OnInit {
/*    recommend: RecommendReceipt[];
    selected_receipt: RecommendReceipt;*/

    constructor(){
        private _router: Router;
        private _recommendReceiptService: RecommendReceiptService;
    }

    /*ngOnInit() {
        this.getRecommendReceipts();
    }*/

    this.$onInit = function() {
        this.getRecommendReceipts();
    }

    this.getRecommendReceipts = function() {
        this._recommendReceiptService.getRecommendReceipts().then(recommend => this.recommend = recommend);
    }

    this.onSelectReceipt = function(receipt: RecommendReceipt) { this.selected_receipt = receipt; }

    this.gotoDetailReceipt = function() {
        this._router.navigate(['ReceiptDetail', { id: this.selected_receipt.id }]);
    }
}