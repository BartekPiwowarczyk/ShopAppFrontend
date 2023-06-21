import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminCategoryNameDto } from '../../common/dto/adminCategoryNameDto';
import { FormCategoryService } from './form-category.service';

@Component({
  selector: 'app-admin-product-form',
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
        class="errorMessages"
      >
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
        rows="10"
        placeholder="Podaj opis produktu"
        formControlName="description"
      ></textarea>
      <div
        *ngIf="
          description?.invalid && (description?.dirty || description?.touched)
        "
        class="errorMessages"
      >
        <div *ngIf="description?.errors?.['required']">Opis jest wymagany</div>
        <div *ngIf="description?.errors?.['minlength']">
          Opis musi mieć przynajmniej 4 znaki
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Pełny opis</mat-label>
      <textarea
        matInput
        rows="40"
        placeholder="Podaj pełny opis produktu"
        formControlName="fullDescription"
      ></textarea>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Kategoria</mat-label>
      <mat-select formControlName="categoryId">
        <mat-option
          *ngFor="let element of categories"
          [value]="element.id"
        >
          {{ element.name }}
        </mat-option>
      </mat-select>
      <div
        *ngIf="
          categoryId?.invalid && (categoryId?.dirty || categoryId?.touched)
        "
        class="errorMessages"
      >
        <div *ngIf="categoryId?.errors?.['required']">
          Kategoria jest wymagana
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Cena</mat-label>
      <input
        matInput
        placeholder="Podaj cenę produktu"
        formControlName="price"
      />
      <div
        *ngIf="price?.invalid && (price?.dirty || price?.touched)"
        class="errorMessages"
      >
        <div *ngIf="price?.errors?.['required']">Cena jest wymagana</div>
        <div *ngIf="price?.errors?.['min']">Cena musi mbyć większa od 0</div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Waluta</mat-label>
      <input
        matInput
        placeholder="Podaj walutę produktu"
        formControlName="currency"
      />
      <div
        *ngIf="currency?.invalid && (currency?.dirty || currency?.touched)"
        class="errorMessages"
      >
        <div *ngIf="currency?.errors?.['required']">Waluta jest wymagana</div>
      </div>
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
export class AdminProductFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  categories: Array<AdminCategoryNameDto> = [];

  constructor(private formCategoryService: FormCategoryService) {}

  ngOnInit(): void {
    this.getcategories();
  }

  getcategories() {
    return this.formCategoryService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  get name() {
    return this.parentForm.get('name');
  }
  get description() {
    return this.parentForm.get('description');
  }
  get fullDescription() {
    return this.parentForm.get('fullDescription');
  }
  get categoryId() {
    return this.parentForm.get('categoryId');
  }
  get price() {
    return this.parentForm.get('price');
  }
  get currency() {
    return this.parentForm.get('currency');
  }

  get slug() {
    return this.parentForm.get('slug');
  }
}
