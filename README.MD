# Dialog Service
  This library abstract the job with modals bring modals pre-componentized as alert, confirm and prompt. This is built based on [ng2-bootstrap-modal](https://github.com/ankosoftware/ng2-bootstrap-modal).

## Installation

To install this library, run:

```bash
$ npm install @pluritech/dialog-service --save
$ npm install ng2-bootstrap-modal --save          (Temporary)
$ npm install bootstrap --save          (Optional)
```
## Without bootstrap
You can also use your custom css, see the docs in [ng2-bootstrap-modal](https://github.com/ankosoftware/ng2-bootstrap-modal)

## With bootstrap
Import bootstrap css in Angular CLI.
```json
    "styles": [
      "../node_modules/bootstrap/dist/css/bootstrap.css"
    ]
 ```

and then import it in your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Import the library like the following:
import { DialogServiceModule } from '@pluritech/dialog-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    DialogServiceModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components (dialogs) in your Angular application:

```typescript
import { Component } from '@angular/core';

import { Validators } from '@angular/forms';

import { DialogModalService } from '@pluritech/dialog-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(private dialogModalService:DialogModalService<any>) {}

 public openModals() {
    // Opennig Alert Modal
    this.dialogModalService.openAlert({
      message: 'Hi, im alert modal!'
    }).subscribe((res) => console.log('openAlert response', res));
    
    // Opennig Confirmation Modal
    this.dialogModalService.openConfirm({
      btnNo: 'Cancel',
      btnYes: 'Ok',
      message: 'Hi, im alert confirm modal!',
      title: 'Confirm Modal Title',
      btnNoClass: 'btn-danger',
      btnYesClass: 'btn-primary',
      positionBtnYes: 'right' // Default: Left
    }).subscribe(res => console.log('openConfirm response', res));
    
    // Opennig Prompt Modal    
    this.dialogModalService.openPrompt({
      btnNo: 'Cancel',
      btnYes: 'Signup',
      title: 'Add Person',
      fields: [
        {
          idField: 'name',
          label: 'Name',
          placeholder: 'John',
          type: 'text',
          validators: [],
          valueDefault: ''
        },
        {
          idField: 'age',
          label: 'Age',
          placeholder: '26',
          type: 'number',
          validators: [Validators.required],
          valueDefault: ''
        }
      ]
    }).subscribe(res => console.log('openPrompt', res));
  }
  title = 'app';
}

```

## Working with callback with subscribes

Every modal returns a subscribe with receives the response data.


Modal        | Type of response
------------ |------------------
Alert | boolean - always true, it is returned when modal goes closed
Confirm | boolean - can be true or false
Prompt | a object that represents the form value with keys being the idField and the respective value


## License

MIT © [mduraes1994](mailto:mduraes1994@gmail.com) and [lucascco](mailto:lucasccorrea@gmail.com@)
