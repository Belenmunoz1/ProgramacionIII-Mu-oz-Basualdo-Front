import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './registro.html',
})
export class Registro {
  private formBuilder = inject(FormBuilder);

  registroForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    direccion: this.formBuilder.group({
      calle: [''],
      ciudad: [''],
    }),
  });

  onSubmit() {
    console.log(this.registroForm.value);
  }

  cargarDireccionDePrueba() {
    this.registroForm.patchValue({
      direccion: {
        calle: 'Belgrano 845',
        ciudad: 'Córdoba',
      },
    });
  }
}
