import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { ChapterList } from '../chapter-list/chapter-list';
import {MyBooksService} from '../../service/MyBooksService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//购买的书籍一览变量声明
//myBookList: any = (new Array(3)).fill((new Array(3)));
myBookList: any ;
allBooks:Array<any>;
constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public myBooksService:MyBooksService) {

  //购买的书籍一览的取值
  var myBookRow1:any;

  // myBookRow1 = myBooksService.get
  // this.myBookList = myBookRow1;
  // myBookRow1 = [
  //   {bookName: '数学培优新方法',bookId: '1',image:'assets/img/books/math1.png'},
  //   {bookName: '辅导与训练',bookId: '2',image:'assets/img/books/math2.png'},
  //   {bookName: '上海作业',bookId: '3',image:'assets/img/books/math3.png'}];
  // this.myBookList = [
  //   myBookRow1 
  // ];

}

	searchBooks() {
			this.myBooksService.getBooks().subscribe(
				data => {
					 this.allBooks = data; 
    			  	 console.log(this.allBooks);
				},
				err => {
					console.log(err);
				},
				() => {
					/*
					console.log('get Books finished');
	   				console.log("all books in last:"+this.allBooks);
					let i = 0 ;
					let j = 0;
					console.log("i:"+i);
					var row:Array<any> = new Array();
					for (let book of this.allBooks){
						//console.log("for loop1");
						row[i][j++] = book;

						if (j>2) {
							this.myBookList[i++] = row;
							row = new Array();
							j=0;

						//console.log("for loop2");
						}
						



						//this.myBookList[i][j] = book;
						console.log("for loop4:"+ this.myBookList[i][j].materialsName);
						console.log("for loop4:"+ this.myBookList[i][j].imgPath);
					
					}
				
				console.log("my books :"+this.myBookList);
				*/
				}
			);
	   		//console.log("all books out:"+this.allBooks);
			//console.log("myBookList:"+this.myBookList);


	} 

ngOnInit(){
	this.myBooksService.getBooks().subscribe(
		data => {
			this.allBooks = data; 
			console.log(this.allBooks);
		},
			err => {
			console.log(err);
		},
		() => {}
	);
}

//跳转到章一览画面
goChapterList(book){
  this.navCtrl.push(ChapterList,{
       materialsId:book.materialsId,
       materialsName:book.materialsName
     });
}


}
