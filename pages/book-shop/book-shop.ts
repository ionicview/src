import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookShop page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-book-shop',
  templateUrl: 'book-shop.html',
})
export class BookShop {
topBookList:any;
bargainPriceBookList:any;
typeBookList:any;
recommendationBookList:any;
bookShopType:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.bookShopType = "topBookShop";
//排行榜的书籍一览的取值
  this.topBookList = [
    {bookName: '排行榜书籍1',bookId: '1',image:'assets/img/book.svg'},
    {bookName: '排行榜书籍2',bookId: '2',image:'assets/img/book.svg'},
    {bookName: '排行榜书籍3',bookId: '3',image:'assets/img/book.svg'}
  ];
  //特价的书籍一览的取值
  this.bargainPriceBookList = [
    {bookName: '特价书籍1',bookId: '1',image:'assets/img/book.svg'},
    {bookName: '特价书籍2',bookId: '2',image:'assets/img/book.svg'},
    {bookName: '特价书籍3',bookId: '3',image:'assets/img/book.svg'}
    ];
  //分类的书籍一览的取值
  this.typeBookList = [
    {bookName: '分类书籍1',bookId: '1',image:'assets/img/book.svg'},
    {bookName: '分类书籍2',bookId: '2',image:'assets/img/book.svg'},
    {bookName: '分类书籍3',bookId: '3',image:'assets/img/book.svg'}
  ];
  //推荐的书籍一览的取值
  this.recommendationBookList = [
    {bookName: '推荐的书籍1',bookId: '1',image:'assets/img/book.svg'},
    {bookName: '推荐的书籍2',bookId: '2',image:'assets/img/book.svg'},
    {bookName: '推荐的书籍3',bookId: '3',image:'assets/img/book.svg'}
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookShop');
  }

}
