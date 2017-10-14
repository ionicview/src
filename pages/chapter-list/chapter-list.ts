import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChoiceQuestions } from '../choice-questions/choice-questions';
import { MyBooksService } from '../../service/MyBooksService';
import { Test } from '../test/test';
/**
 * Generated class for the ChapterList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chapter-list',
  templateUrl: 'chapter-list.html',
})
export class ChapterList {
  treeList: any;
  bookId: String;
  bookName: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public myBooksService: MyBooksService) {
    this.bookId = navParams.get('bookId');
    this.bookName = navParams.get('bookName');
    /*
    this.treeList = [
      {
        chapterId: 1,
        chapterName: '第一章 集合',
        showFlag: true,
        allCounts:10,
        finishCounts:3,
        sections : [
          {
            sectionId: 1,
            sectionName: '1.1 集合的含义与表示',
            allCounts:4,
            finishCounts:1,
            thumbsups:[1,2],
            showFlag: false
  
          },
          {
            sectionId: 2,
            sectionName: '1.2 集合的基本关系',
            allCounts:6,
            finishCounts:2,
            thumbsups:[1],
            showFlag: false
          }
        ]
      },
      {
        chapterId: 1,
        chapterName: '第二章 函数',
        showFlag: true,
        allCounts:15,
        finishCounts:4,
        sections : [
          {
            sectionId: 1,
            sectionName: '1.1 函数的定义',
            allCounts:5,
            finishCounts:1,
            thumbsups:[1,2],
            showFlag: false
          },
          {
            sectionId: 2,
            sectionName: '1.2 函数的方程表达式',
            allCounts:5,
            finishCounts:2,
            thumbsups:[1,2,3],
            showFlag: false
          },
          {
            sectionId: 3,
            sectionName: '1.3 函数表示方法',
            allCounts:5,
            finishCounts:1,
            thumbsups:[1,2],
            showFlag: false
          }
        ]
      }
    ];
  */
  }

  ngOnInit() {
    this.myBooksService.getChapter(this.bookId).subscribe(
      data => {
        this.treeList = data;
        console.log(this.treeList);
      },
      err => {
        console.log(err);
      },
      () => { }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterList');
  }

  chapterEvent(item) {
    //this.visible = !this.visible;
    item.showFlag = !item.showFlag;
    //alert(item.chapterName);
  }

  //跳转到选题页面
  goChoiceQuestions(section) {
    this.navCtrl.push(ChoiceQuestions, {
      sectionId: section.sectionId,
      sectionName: section.sectionName
    });
  }

  goTest(section) {
    let profileModal = this.modalCtrl.create(Test, {
      testId:section.Id,
      testName:section.sectionName
    });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
}
