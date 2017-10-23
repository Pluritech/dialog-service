import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

import { AlertModel } from './../models/alert.model';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent extends DialogComponent<AlertModel, boolean> implements AlertModel  {

  title: string;
  message: string;
  btnLabel: string;
  btnClass: string = 'btn-success';
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }

}
