import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

import { PromptModel, FieldModel } from './../models/prompt.model';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html'
})
export class PromptComponent extends DialogComponent<PromptModel, any> implements PromptModel {

  public formPrompt: FormGroup;

  public submitted: boolean;

  public title: string;
  public fields: FieldModel[];
  public btnYes: string;
  public btnNo: string;

  constructor(dialogService: DialogService, private fb: FormBuilder) {
    super(dialogService);
  }

  public cancel() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = null;
    this.close();
  }

  public hasError(inputId: string): boolean {
    if (this.formPrompt) {
      const listErros = this.formPrompt.get(inputId).errors;
      return this.submitted && listErros != null;
    }else {
      return false;
    }
  }

  public submitFields() {
    this.submitted = true;
    if (this.formPrompt.valid) {
      this.result = this.formPrompt.getRawValue();
      this.close();
    }
  }

  private initForm() {
    const filedsControl = {};
    this.fields.forEach((fd) => {
      filedsControl[fd.idField] = [fd.valueDefault, fd.validators]
    });
    this.formPrompt = this.fb.group(filedsControl);
  }

  ngOnInit() {
    this.initForm();
  }

}
