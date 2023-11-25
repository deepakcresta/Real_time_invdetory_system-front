import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'deepak-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10; // You can set your default value
  @Input() totalItems: number = 0;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }
}
