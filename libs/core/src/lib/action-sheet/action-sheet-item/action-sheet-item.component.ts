import {
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component,
    ContentChild, ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import { KeyboardSupportItemInterface } from '../../utils/interfaces/keyboard-support-item.interface';
import {KeyUtil} from '../../..';
import {startWith, takeUntil} from 'rxjs/operators';


/**
 * A component used to enforce a certain layout for the action sheet.
 * ```html
 * <fd-action-sheet>
 *     <fd-action-sheet-control>Control Element</fd-action-sheet-control>
 *     <fd-action-sheet-body>
 *          <fd-action-sheet-item>Action Sheet Body</fd-action-sheet-item>
 *          <fd-action-sheet-item>Action Sheet Body</fd-action-sheet-item>
 *          <fd-action-sheet-item>Action Sheet Body</fd-action-sheet-item>
 *     </fd-action-sheet-body>
 * </fd-action-sheet>
 * ```
 */
@Component({
    selector: 'fd-action-sheet-item',
    templateUrl: './action-sheet-item.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'fd-action-sheet__item'
    }
})

export class ActionSheetItemComponent implements KeyboardSupportItemInterface {

    /** Sets text of button. */
    @Input()
    label: string;

    /** Sets icon of action item. */
    @Input()
    glyph: string;

    /** Indicate state of the button.*/
    @Input()
    negative = false;

    /** Indicate if items should be in compact or compare mode. **/
    @Input()
    compact = false;

    /** Display the mobile view. **/
    @Input()
    mobile = false;

    /** @hidden Implementation of KeyboardSupportItemInterface | TODO Revisit KeyboardSupportItemInterface*/
    @Output()
    keyDown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();


    /** @hidden Implementation of KeyboardSupportItemInterface | TODO Revisit KeyboardSupportItemInterface*/
    clicked = new EventEmitter<MouseEvent>();

    constructor(
        public elementRef: ElementRef,
    ) { }


    /** @hidden */
    @HostListener('keydown', ['$event'])
    keydownHandler(event: KeyboardEvent): void {
        this.keyDown.emit(event);
    }

    /** Handler for mouse events */
    @HostListener('click', ['$event'])
    onClick(event: MouseEvent): void {
        this.clicked.emit(event);
    }

    /** @hidden */
    click(): void {
        this.elementRef.nativeElement.click();
    }

    /** @hidden */
    focus(): void {
        this.elementRef.nativeElement.focus();
    }
    //
    // /** @hidden */
    // private _listenOnLinkQueryChange(): void {
    //     this.linkDirectives.changes.pipe(
    //         takeUntil(this._onDestroy$),
    //         startWith(0)
    //     ).subscribe(() => {
    //         this.link = this.linkDirectives.length > 0;
    //         this._changeDetectorRef.detectChanges();
    //     });
    // }


}
