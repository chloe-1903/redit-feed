import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  paginationOptions = [5, 10, 25];
  @Input() itemsPerPage = 10;

  @Input() disabledPrevious = true;
  @Input() disabledNext = false;

  @Output() pageChanges = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
