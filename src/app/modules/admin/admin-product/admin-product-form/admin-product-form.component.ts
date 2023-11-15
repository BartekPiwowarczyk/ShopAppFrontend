import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminCategoryNameDto } from '../../common/dto/adminCategoryNameDto';
import { FormCategoryService } from './form-category.service';

@Component({
  selector: 'app-admin-product-form',
  template: ` <div [formGroup]="parentForm" fxLayout="column">
    <mat-form-field appearance="fill">
      <mat-label>Name</mat-label>
      <input
        matInput
        placeholder="Provide product name"
        formControlName="name"
      />
      <div
        *ngIf="name?.invalid && (name?.dirty || name?.touched)"
        class="errorMessages"
      >
        <div *ngIf="name?.errors?.['required']">Name is required</div>
        <div *ngIf="name?.errors?.['minlength']">
          Name must have at least 4 characters.
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Url</mat-label>
      <input matInput placeholder="Podaj url" formControlName="slug" />
      <div
        *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)"
        class="errorMessages"
      >
        <div *ngIf="slug?.errors?.['required']">Url is required</div>
        <div *ngIf="slug?.errors?.['minlength']">
          Url must have at least 4 characters.
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Description</mat-label>
      <textarea
        matInput
        rows="10"
        placeholder="Provide product description"
        formControlName="description"
      ></textarea>
      <div
        *ngIf="
          description?.invalid && (description?.dirty || description?.touched)
        "
        class="errorMessages"
      >
        <div *ngIf="description?.errors?.['required']">Description is required</div>
        <div *ngIf="description?.errors?.['minlength']">
          Description must have at least 4 characters.
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Full description</mat-label>
      <textarea
        matInput
        rows="40"
        placeholder="Provide full description"
        formControlName="fullDescription"
      ></textarea>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Category</mat-label>
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
          Category is required.
        </div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Price</mat-label>
      <input
        matInput
        placeholder="Provide product price"
        formControlName="price"
      />
      <div
        *ngIf="price?.invalid && (price?.dirty || price?.touched)"
        class="errorMessages"
      >
        <div *ngIf="price?.errors?.['required']">Price is required</div>
        <div *ngIf="price?.errors?.['min']">Price must be greater than 0.</div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Sale price</mat-label>
      <input
        matInput
        placeholder="Provide product sale price"
        formControlName="salePrice"
      />
      <div
        *ngIf="salePrice?.invalid && (salePrice?.dirty || salePrice?.touched)"
        class="errorMessages"
      >
        <div *ngIf="salePrice?.errors?.['min']">Price must be greater than 0.</div>
      </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Currency</mat-label>
      <input
        matInput
        placeholder="Provide product currency"
        formControlName="currency"
      />
      <div
        *ngIf="currency?.invalid && (currency?.dirty || currency?.touched)"
        class="errorMessages"
      >
        <div *ngIf="currency?.errors?.['required']">Currency is required</div>
      </div>
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
  get salePrice() {
    return this.parentForm.get('salePrice');
  }
  get currency() {
    return this.parentForm.get('currency');
  }

  get slug() {
    return this.parentForm.get('slug');
  }
}
