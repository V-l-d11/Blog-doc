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
