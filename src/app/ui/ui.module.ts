import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiComponent} from './components/ui/ui.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {PostsModule} from '../posts/posts.module';
import {PageNotFoundModule} from '../page-not-found/page-not-found.module';

@NgModule({
  declarations: [HeaderComponent, UiComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    RouterModule,
    PostsModule,
    PageNotFoundModule
  ]
})
export class UiModule { }
