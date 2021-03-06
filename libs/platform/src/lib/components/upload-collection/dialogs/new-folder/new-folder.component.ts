import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';

import { DIALOG_REF, DialogRef, FormControlComponent } from '@fundamental-ngx/core';
import { UploadCollectionFolder } from '../../models/upload-collection.models';

@Component({
    templateUrl: './new-folder.component.html'
})
export class NewFolderComponent implements AfterViewInit {
    /** 
     * @hidden
     * The current folder in what need to create a new one
     */
    currentFolder?: UploadCollectionFolder = this.dialogRef.data.currentFolder;

    /** @hidden */
    _newFolderName = 'New Folder';

    /** @hidden */
    @ViewChild(FormControlComponent)
    private readonly formControl: FormControlComponent;

    constructor(@Inject(DIALOG_REF) public readonly dialogRef: DialogRef) {}

    ngAfterViewInit(): void {
        const el = this.formControl.elementRef().nativeElement as HTMLInputElement;
        if (el) {
            el.focus();
            this._setSelectionRange(el, 0, this._newFolderName.length);
        }
    }

    /** @hidden */
    private _setSelectionRange(el: HTMLInputElement, selectionStart: number, selectionEnd: number): void {
        const direction = el.selectionDirection;

        el.setSelectionRange(selectionStart, selectionEnd, direction);
    }
}
