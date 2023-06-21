import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminProductAddService } from './admin-product-add.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminMessageService } from '../../common/service/admin-message.service';
import { AdminProductUpdate } from '../model/adminProductUpdate';
import { AdminProductImageService } from '../admin-product-image.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss'],
})
export class AdminProductAddComponent implements OnInit {
  productForm!: FormGroup;
  requiredFileTypes = 'image/jpeg, image/png';
  imageForm!: FormGroup;
  image: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private adminProductAddService: AdminProductAddService,
    private adminProductImageService: AdminProductImageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminMessageService: AdminMessageService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      fullDescription: [''],
      categoryId: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      currency: ['PLN', Validators.required],
      slug: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.imageForm = this.formBuilder.group({
      file: [''],
    });
  }

  submit() {
    this.adminProductAddService
      .saveNewProduct({
        name: this.productForm.get('name')?.value,
        description: this.productForm.get('description')?.value,
        fullDescription: this.productForm.get('fullDescription')?.value,
        categoryId: this.productForm.get('categoryId')?.value,
        price: this.productForm.get('price')?.value,
        currency: this.productForm.get('currency')?.value,
        slug: this.productForm.get('slug')?.value,
        image: this.image,
      } as AdminProductUpdate)
      .subscribe({
        next: (product) => {
          this.router
            .navigate(['/admin/products/update', product.id])
            .then(() =>
              this.snackBar.open('Produkt został dodany', '', {
                duration: 3000,
              })
            );
        },
        error: (err) => this.adminMessageService.addSpringErrors(err.error),
      });
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('file', this.imageForm.get('file')?.value);
    this.adminProductImageService
      .uploadImage(formData)
      .subscribe((uploadResponse) => (this.image = uploadResponse.filename));
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.imageForm.patchValue({
        file: event.target.files[0],
      });
    }
  }
}
