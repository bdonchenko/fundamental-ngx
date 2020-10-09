import { Component, ViewEncapsulation } from '@angular/core';
import { RtlService } from '@fundamental-ngx/core';
import { Observable } from 'rxjs';
import { Placement } from 'popper.js';
import { map } from 'rxjs/operators';

@Component({
    selector: 'fd-action-sheet-mobile-example',
    templateUrl: './action-sheet-mobile-example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ActionSheetMobileExampleComponent {
    leftPlacement$: Observable<Placement>;
    rightPlacement$: Observable<Placement>;

    constructor(private _rtlService: RtlService) {
        this.leftPlacement$ = this._rtlService.rtl.pipe(map((isRtl) => (isRtl ? 'right' : 'left')));
        this.rightPlacement$ = this._rtlService.rtl.pipe(map((isRtl) => (isRtl ? 'left' : 'right')));
    }
}