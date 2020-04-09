import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormBuilder, FormControl} from '@angular/forms'
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

  @Input() label: any;
  @Input() width: any;
  @Input() lista: any[];
  @Input() view: any;
  @Input() valueAtr: any;
  @Input() isDisabled: boolean;
  @Input() selected: any;
  formGroup: FormGroup;
  disabled = new FormControl(false);
  value: any;
  onChange: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.selected = this.selected;
    this.disabled.setValue(this.isDisabled);
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
