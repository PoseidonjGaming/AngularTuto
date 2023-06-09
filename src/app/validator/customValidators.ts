import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'
export class CustomValidator{

  static mail(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null=>{

      const regex=new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');
      if(!regex.test(control.value)){
        return { mail: true }
      }

      return null
    }
  }

  static checkPwd(){
   return (control: AbstractControl): ValidationErrors | null=>{

        const pwd=control.get('pwd')
        const cpwd=control.get('cpwd')
        if(pwd?.value!=cpwd?.value){
          cpwd?.setErrors({'check_pwd': true})
        }
        return null
      }
  }
}
