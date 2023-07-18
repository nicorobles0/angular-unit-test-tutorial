import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css'],
})
export class Example3Component implements OnInit {
  fakeForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.fakeForm = this._formBuilder.group({
      names: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
      city: [''],
    });
  }

  ngOnInit(): void {}

  sendForm() {
    this.fakeForm.updateValueAndValidity();
    if (this.fakeForm.invalid) {
      this.fakeForm.markAllAsTouched();
      return;
    }
    this.sendInfoToLocal();
  }
  /*
   * Función para enviar datos del formulario al localstorage
   */
  sendInfoToLocal() {
    const storage = localStorage || null;
    if (storage) {
      storage.setItem('contact', JSON.stringify(this.fakeForm.value));
    }
  }
}
