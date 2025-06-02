form:FormBuilder

private ageValidation!:Subscription;

this.ageValidator=this.form.controls.yearOfbirthday.valueChnges.pipe(
tap(()=>this.form.controls.passport.markAsDirty()),
startWith(this.form.controls.yearOfBirthday.value)
).subscribe(
yearBirthday=>{
this.function(yearBirthday) ? this.form.controls.passport.addValidators(Validators.requier)
: this.form.control.passport.removeValidator(Validator.requeir)
this.form.controls.passport.updateValueAndValidity();
this.form.controls.passport.markAsDirty(); // this value is automaticly chnages valid input;
}
)

ngOnDestroy():void{
this.ageValidator.unsubscribe();
}

//@ContentChild - if in child component we have ng-content and want to check the component or tag who вложен с родителя
//ngAfterViewInit -for interact with value

//Reactive Form Validator in Template
@if(form.controls.firstname.invalid && (form.controls.firstname.touched || form.controls.firstname.dirty) ){
@if(form.controls.firstname.errors?.['requier']){
<small>Requeried<small>
}
}

//Fucnction With Validator

export const forbidenNameValidator=(control:AbstractControl):ValidationErrors | null =>{
const names=['foo'];
return names.includes(control.value) ? {forbiddenName:'Name is not eloud'} : null;
}

form=this.fb.groupe({
firstName:this.fb.control('',{
validators:[
Validator.requeier,
forbidenNameValidator
]
})
})
