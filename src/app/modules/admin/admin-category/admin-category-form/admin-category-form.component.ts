import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-category-form',
  template: ` <div [formGroup]="parentForm" fxLayout="column">
    <mat-form-field appearance="fill">
      <mat-label>Nazwa</mat-label>
      <input
        matInput
        placeholder="Podaj nazwę produktu"
        formControlName="name"
      />
      <div
        *ngIf="name?.invalid && (name?.dirty || name?.touched)"
        class="errorMessages"
      >
        <div *ngIf="name?.errors?.['required']">Nawa jest wymagana</div>
        <div *ngIf="name?.errors?.['minlength']">
          Nawa musi mieć przynajmniej 4 znaki
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Przyjazny url</mat-label>
      <input matInput placeholder="Podaj url" formControlName="slug" />
      <div
        *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)"
        class="errorMessages">
        <div *ngIf="slug?.errors?.['required']">Nawa jest wymagana</div>
        <div *ngIf="slug?.errors?.['minlength']">
          Nawa musi mieć przynajmniej 4 znaki
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Opis</mat-label>
      <textarea
        matInput
        rows="5"
        placeholder="Podaj opis produktu"
        formControlName="description"
      ></textarea>
    </mat-form-field>

    <div fxLayoutAlign="end">
      <button mat-flat-button color="primary" [disabled]="!parentForm.valid">
        Zapisz
      </button>
    </div>
  </div>`,
  styles: [
    `
      .errorMessages {
        color: red;
        font-style: italic;
      }
    `,
  ],
})
export class AdminCategoryFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    
  }

  get name() {
    return this.parentForm.get('name');
  }
  get description() {
    return this.parentForm.get('description');
  }
  get slug() {
    return this.parentForm.get('slug');
  }
}
