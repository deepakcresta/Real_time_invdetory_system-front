import {Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, Provider} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  ValidationErrors, Validator,
  Validators, FormGroup
} from "@angular/forms";
import {Subscription} from "rxjs";
import { DatePipe } from '@angular/common';


const PREFERENCE_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};
const CONTROL_NG_VALIDATOR: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true,
};
@Component({
  selector: 'deepak-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [PREFERENCE_CONTROL_VALUE_ACCESSOR, CONTROL_NG_VALIDATOR]

})
export class DatePickerComponent  implements OnInit, ControlValueAccessor, OnDestroy, Validator {

  dateForm: FormGroup = new FormGroup({});

@Input() title: string | undefined;

@Input() maxLimit: string | undefined;

@Input() minLimit: string | undefined;

@Input() submitted: boolean = false;

@Input() isReadonly: boolean = false;

@Output() dateEmit: EventEmitter<any> = new EventEmitter<any>();

  onChangeSubscription: Subscription[] = [];

  onChange: any = () => {}

  onTouched: any = () => {}

  onValidationChange: any = () => {};

  constructor(
    private untypedFormBuilder: FormBuilder
) { }

  ngOnInit(): void {
    this.buildForm();
    this.dateForm.valueChanges.subscribe((val) => {
      this.onChange(val);
      this.onValidationChange();
    });
  }

  buildForm(){
    this.dateForm = this.untypedFormBuilder.group({
      date: [new Date(), Validators.compose([Validators.required])]
    });
  }

  registerOnChange(onChange: any): void {
    const sub = this.dateForm.valueChanges.subscribe(onChange);
    this.onChangeSubscription.push(sub);
  }

  registerOnTouched(onTouched: Function): void {
    this.onTouched = onTouched;
  }

  writeValue(value: any): void {
    console.log('value date', value);
    if (!value) return;
  this.dateForm.patchValue({
    date: value
  });
}

  ngOnDestroy() {
    for (let sub of this.onChangeSubscription) {
      sub.unsubscribe();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.dateForm.valid ? null : {
      invalidForm: {valid: false, message: "dateForm fields are invalid"}
    };
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn;
  }
}
