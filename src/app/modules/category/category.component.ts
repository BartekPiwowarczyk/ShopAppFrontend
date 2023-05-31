import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Category } from './model/category';
import { Subscription, filter } from 'rxjs';
import { CategoryProducts } from './model/categoryProducts';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy{

  categoryProducts!: CategoryProducts;
  private sub!: Subscription;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
    ) { }
    
  ngOnInit(): void {
    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(()=>this.getCategoryWithProduct(0,10));

    this.getCategoryWithProduct(0,10);
  }
      
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getCategoryWithProduct(page: number, size: number) {
    let slug = this.route.snapshot.params['slug'];
    this.categoryService.getCategoryWithProduct(slug, page, size)
    .subscribe(categoryProducts => this.categoryProducts = categoryProducts);
  }

  onPageEvent(event: PageEvent) {
    this.getCategoryWithProduct(event.pageIndex,event.pageSize);
  }
}
