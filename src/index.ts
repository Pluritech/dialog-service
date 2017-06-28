import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PromptComponent } from './prompt/prompt.component';

import { DialogModalService } from './service/dialog.modal.service';

export * from './alert/alert.component';
export * from './confirm/confirm.component';
export * from './prompt/prompt.component';

export * from './models/alert.model';
export * from './models/confirm.model';
export * from './models/prompt.model';

export * from './service/dialog.modal.service';

@NgModule({
  imports: [
    CommonModule,
    BootstrapModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AlertComponent,
    ConfirmComponent,
    PromptComponent
  ],
  exports: [
    AlertComponent,
    ConfirmComponent,
    PromptComponent
  ],
  entryComponents: [
    AlertComponent,
    ConfirmComponent,
    PromptComponent
  ]
})
export class DialogServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DialogServiceModule,
      providers: [DialogModalService]
    }
  }
}
