import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookShop } from './book-shop';

@NgModule({
  declarations: [
    BookShop,
  ],
  imports: [
    IonicPageModule.forChild(BookShop),
  ],
  exports: [
    BookShop
  ]
})
export class BookShopModule {}
