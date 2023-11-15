import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-category-form',
  template: ` <div [formGroup]="parentForm" fxLayout="column">
    <mat-form-field appearance="fill">
      <mat-label>Name</mat-label>
      <input
        matInput
        placeholder="Provide the product name"
        formControlName="name"
      />
      <div
        *ngIf="name?.invalid && (name?.dirty || name?.touched)"
        class="errorMessages"
      >
        <div *ngIf="name?.errors?.['required']">Name is required.</div>
        <div *ngIf="name?.errors?.['minlength']">
            Name must have at least 4 characters
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Url</mat-label>
      <input matInput placeholder="Provide url" formControlName="slug" />
      <div
        *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)"
        class="errorMessages">
        <div *ngIf="slug?.errors?.['required']">url is required.</div>
        <div *ngIf="slug?.errors?.['minlength']">
          Url must have at least 4 characters
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Description</mat-label>
      <textarea
        matInput
        rows="5"
        placeholder="Provide product description"
        formControlName="description"
      ></textarea>
    </mat-form-field>

    <div fxLayoutAlign="end">
      <button mat-flat-button color="primary" [disabled]="!parentForm.valid">
        Save
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
