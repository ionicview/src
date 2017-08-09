import { Component , Inject} from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { ChapterList } from '../chapter-list/chapter-list';
import {MyBooksService} from '../../service/MyBooksService';
import { EnvVariables } from '../../app/environment-variables/environment-variables.token';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//购买的书籍一览变量声明
myBookList: any ;
allBooks:Array<any>;
img1:string;
bottonStr:string;
constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public myBooksService:MyBooksService,@Inject(EnvVariables) public envVariables) {
}

//获取购买图书
//TODO 后期将下载到本地
searchBooks() {
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

ngOnInit(){
	this.searchBooks()
	this.img1 = this.myBooksService.img1;
	this.bottonStr ="<button block >Test Button</button>"
}

//跳转到章一览画面
goChapterList(book){
  this.navCtrl.push(ChapterList,{
       bookId:book.bookId,
       bookName:book.bookName
     });
}


}
