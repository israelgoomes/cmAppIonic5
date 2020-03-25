import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormBuilder} from '@angular/forms'
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-cm-select',
  templateUrl: './cm-select.component.html',
  styleUrls: ['./cm-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmSelectComponent),
      multi: true
    }
  ]
})
export class CmSelectComponent implements OnInit, ControlValueAccessor {
teste: any;
  @Input() lista: any[] = []
  @Input() view: any;
  @Input() valueAtr: any;
  formGroup: FormGroup;

  value: any;
  onChange: any;
  constructor(private fb: FormBuilder) { 
    
  }
  teste2(){
    console.log('Valor escolhido', this.formGroup)
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      option: ['']
    })
  }

setValue(value: any){
  this.value = value;
  this.onChange(this.value);
}

  writeValue(obj: any): void {
       this.value = obj;
     }
  

     registerOnChange(fn: any): void {
       this.onChange = fn;
     }
  
     registerOnTouched(fn: any): void {}
 
     setDisabledState?(isDisabled: boolean): void;

}
