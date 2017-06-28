import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { PromptComponent } from './prompt/prompt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export * from './alert/alert.component';
export * from './confirm/confirm.component';
export * from './prompt/prompt.component';
export * from './prompt/prompt.interfaces';

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
  ]
})
export class DialogServiceModule {
}
