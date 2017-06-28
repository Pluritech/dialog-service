import { PromptComponent } from './../prompt/prompt.component';
import { AlertComponent } from './../alert/alert.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogService } from 'ng2-bootstrap-modal';

import { PromptModel } from './../models/prompt.model';
import { AlertModel } from './../models/alert.model';
import { ConfirmModel } from './../models/confirm.model';

import { ConfirmComponent } from './../confirm/confirm.component';

@Injectable()
export class DialogModalService<TRP> {
    constructor(private dialogService: DialogService){}

    public openConfirm(params: ConfirmModel): Observable<boolean> {
        console.log('openConfirm', params);
        return this.dialogService.addDialog(ConfirmComponent, params);
    }

    public openAlert(params: AlertModel): Observable<boolean> {
        console.log('openConfirm', params);        
        return this.dialogService.addDialog(AlertComponent, params);
    }

    public openPrompt(params: PromptModel): Observable<TRP> {
        console.log('openConfirm', params);        
        return this.dialogService.addDialog<PromptModel, TRP>(PromptComponent, params);
    }
}