import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AdminProduct } from './adminProduct';
import { AdminProductService } from './admin-product.service';
import { MatPaginator } from '@angular/material/paginator';
import { map, startWith, switchMap } from 'rxjs';
import { AdminConfirmDialogService } from '../admin-confirm-dialog.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements AfterViewInit {
  
  //dataSource: AdminProduct[] =[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ["productId", "image", "name", "price", "actions"];
  totalElements: number = 0;
  data: AdminProduct[] = [];

  constructor(
    private adminProductService: AdminProductService,
    private dialogService: AdminConfirmDialogService
    ){}
  
  ngAfterViewInit(): void {
   this.paginator.page.pipe(
    startWith({}),
    switchMap(() => {
      return this.adminProductService.getProducts(this.paginator.pageIndex,this.paginator.pageSize);
    }),
   ).subscribe(data => {
    this.totalElements = data.totalElements;
    this.data = data.content;
   });
  }

  confirmDelete(element: AdminProduct) {
      this.dialogService.openConfirmDialog("Czy na pewno chcesz usunąć ten produkt?")
      .afterClosed()
      .subscribe(result => {
        if(result) {
          this.adminProductService.delete(element.productId)
          .subscribe(() => {
            this.data.forEach((value,index)=>{
              if(element == value) {
                this.data.splice(index, 1);
                this.table.renderRows();
              }
            })
          });
        }
      });
  }
}