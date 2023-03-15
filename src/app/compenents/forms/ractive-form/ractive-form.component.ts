import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { signUpConstraint } from '../../../constraint/signUp.constraint'
import { CustomValidator } from '../../../validator/customValidators'

@Component({
  selector: 'app-ractive-form',
  templateUrl: './ractive-form.component.html',
  styleUrls: ['./ractive-form.component.css']
})
export class RactiveFormComponent {
  form= new FormGroup({
    mail:new FormControl(null, [Validators.required, CustomValidator.mail]),
    pwd:new FormControl(null, [Validators.required]),
    cpwd:new FormControl(null, [Validators.required]),
    terms:new FormControl(null, [Validators.requiredTrue]),
  });

  sub(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      console.log(this.form)
    }
  }

  mailValidate(): string|null{
    var msg:string|null=null;
    if(this.form.get('mail')?.touched){
      if(this.form.get('mail')?.hasError('required')){
        msg=`Required`
      }
    }
    return msg
  }

  Validate(key: string): string|null{

      const f=this.form.get(key);
      // @ts-ignore
      const constraints= signUpConstraint[key]
      if(f?.touched){
        for(let constraint in constraints){
          if(f?.hasError(constraint)){
              return constraints[constraint]
          }
        }
      }
      return null
    }
}
