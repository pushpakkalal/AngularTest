import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../helper/forbidden-name.directive';

@Component({
  selector: 'cupping-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  presonalForm: FormGroup;
  empForm: FormGroup;
  empskills: FormArray;
  submitted = false;
  constructor(private fb: FormBuilder) { }
  countries=['India','Italy','Rashia','Pakistan','Turki','U.S','U.K','Germany','China','North Korea','South Korea','Newzeeland'];
  states=['Gujrat','Rajasthan','Utar Pradesh','Madhya Pradesh','Utarakhand','Hariyana','Delhi','Bihar','Asam','Jamu and Kashmir','Ladakh','Chatisgadh'];
  cities=['Ahmedabad','Jodhpur','Rajkot','Surat','Bahvnagar','Jaipur','Dungarpur','Udaipur','Ajamer','Alvar','Kota','Banswara'];
  ngOnInit() {
    // Create Form Controle using Form Group directive
    this.presonalForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[A-Za-z ]+$"), forbiddenNameValidator(/bob/i)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[A-Za-z ]+$")]),
      emailfield: new FormControl('', [Validators.required, Validators.email]),
      phonefield: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address: new FormGroup({
        streetfield: new FormControl('', [Validators.required]),
        countryfield: new FormControl('', [Validators.required]),
        statefield: new FormControl('', [Validators.required]),
        cityfield: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z ]+$")]),
        zipfield: new FormControl('', [Validators.required, Validators.pattern("^[1-9][0-9]{5}$")]),
      })
    });
    // Create Form Controle using Form Builder directive
    
    this.empForm = this.fb.group({
      empNameField: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[A-Za-z ]+$")]],
      empIdField:['',[Validators.required, Validators.minLength(3), Validators.maxLength(3),Validators.pattern("[0-9]*")]],
      empAddress:this.fb.group({
        empstreetField:['', [Validators.required]],
        empcountryField:['', [Validators.required]],
        empstateField:['', [Validators.required]],
        empcityField:['', [Validators.required, Validators.required, Validators.pattern("^[A-Za-z ]+$")]],
        empzipField:['', [Validators.required, Validators.pattern("^[1-9][0-9]{5}$")]],
      }),
      empskills:this.fb.array([this.creatSkills()]),
      empPhoneField: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });    
  }
  creatSkills(): FormGroup {
    return this.fb.group({
        skillslanguage: ['', [Validators.required]],
        skillsProficieny: ['Expert', [Validators.required]],
    });
  }
  get getempskillsArray() {
    return this.empForm.get('empskills') as FormArray;
  }
  addSkills(): void {
    this.getempskillsArray.push(this.creatSkills());
  }
  removeSkills(): void {
    this.getempskillsArray.removeAt(this.getempskillsArray.length - 1);
  }
  

  onsetValueClick(): void {  
    this.presonalForm.setValue({  
      firstName: "Pushpak",
      lastName: "Kalal",
      emailfield: "pushpakkalal295@gmail.com",
      phonefield: "+918000204954",
      address: {
        streetfield: "A-408, Shree hari Blessing, Opp- Shree Ram Recidency, Narol-Lambha Highway",
        countryfield: "India",
        statefield: "Gujrat",
        cityfield: "Ahmedabad",
        zipfield: "380009",
      },
    });
    this.empForm.setValue({  
      empNameField: "Pushpak",
      empIdField: "001",
      empAddress: {
        empstreetField: "A-408, Shree hari Blessing, Opp- Shree Ram Recidency, Narol-Lambha Highway",
        empcountryField: "India",
        empstateField: "Gujrat",
        empcityField: "Ahmedabad",
        empzipField: "380009",
      },
      empPhoneField: "+918000204954",
      empskills: ([
        { 
          skillslanguage: "AA", 
          skillsProficieny: "Very Good"
        }
      ])
    });
  }

  onpatchValueClick(): void {  
    this.presonalForm.patchValue({  
      firstName: "Pushpak",
      address: {
        statefield: "Gujrat",
        cityfield: "Ahmedabad",
      },
    });
    this.empForm.patchValue({  
      empNameField: "Pushpak",
      empIdField: "001",
      empAddress: {
        empstateField: "Gujrat",
        empcityField: "Ahmedabad",
      },
    });
  }
  resetFormOnClick() {
    this.presonalForm.reset();
    this.empForm.reset();
  }
  get pf() { return this.presonalForm.controls; }
  get empf() { return this.empForm.controls; }
  
  onSubmit() {
    this.submitted = true;
  }
}
