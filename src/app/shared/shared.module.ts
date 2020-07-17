import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [TruncatePipe, PaginationComponent],
  exports: [
    TruncatePipe,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedModule { }
