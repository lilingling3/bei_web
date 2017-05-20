import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'loading-button',
    templateUrl: './loading-button.html',
    styleUrls: ['./loading-button.css']
})
export class LoadingButton {
    constructor () {}
    @Input() name : string;
    @Input() isLoading : boolean;

    @Output() action = new EventEmitter();

    private apply = function(){
        this.action.emit();
    }
}

