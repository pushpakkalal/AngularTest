import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cupping-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit() {
  }
  gender = null;
  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  // }
  resetForm(form: NgForm) {
    form.reset();
    // form.resetForm({
    //   firstName: ''
    // });
  }
  setDefaultValues() {
    this.firstName = 'Pushpak';
    this.lastName = 'Kalal';
  }
}
