import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
//import { ChoiceQuestions } from '../choice-questions/choice-questions';
import { ChapterList } from '../chapter-list/chapter-list';
//import { HomeWorkPreviewPage } from '../home-work-preview/home-work-preview';
//import {MyModelService} from './../../service/MymodelService';
import { BookShop } from '../book-shop/book-shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//购买的书籍一览变量声明
myBookList: any;
bookType:string;
topBookList:any;
bargainPriceBookList:any;
typeBookList:any;
recommendationBookList:any;
bookShopType:string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.bookShopType = "myBook";
//购买的书籍一览的取值
var myBookRow1:any;
  myBookRow1 = [
      {bookName: '数学培优新方法',bookId: '1',image:'assets/img/books/math1.png'},
      {bookName: '辅导与训练',bookId: '2',image:'assets/img/books/math2.png'},
      {bookName: '上海作业',bookId: '3',image:'assets/img/books/math3.png'}];
      
    this.myBookList = [
      myBookRow1 
    ];
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
  ngOnInit(){
    //this.getLessonHomeWorkList();
  }

  swipeToLeft(){
    console.debug("Left");
  }
//跳转到章一览画面
  goChapterList(book){
     this.navCtrl.push(ChapterList,{
       bookId:book.bookId,
       bookName:book.bookName
     });
  }
  goAssignHomeworkPage(newHomeWorkName){
    // this.navCtrl.push(AssignHomeworkPage,{
    //   newHomeWorkName:newHomeWorkName,
    //   name:"grey",
    //   job:"IT"
    // });
  }
//跳转到书市画面
goBookShopPage(){
   this.navCtrl.push(BookShop,{
     //bookId:book.bookId,
     //bookName:book.bookName,
     //name:"grey",
     //job:"IT"
   });
}

}
