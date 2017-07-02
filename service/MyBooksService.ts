import {Injectable,Inject} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { EnvVariables } from '../app/environment-variables/environment-variables.token';

@Injectable()
export class MyBooksService{
  http:any;
  bookUrl:String;
  allBooks:any;
  books1:any;
  data:any;
  imgbookUrl:String;
  constructor(http:Http,@Inject(EnvVariables) public envVariables){
    this.http = http;
   // this.allBooks = null;
    this.bookUrl = `${envVariables.baseUrl}/books`;
    this.imgbookUrl='/youranxue/image/imageDisplay';
  }

  getPosts(){
    return this.http.get(`${this.bookUrl}/sample`)
      .map(res => res.json());
  }

  getGrades(){
    return this.http.get(`${this.bookUrl}/grade`)
      .map(res => res.json());
  }

  getBooks(){
    var response = this.http.get(`${this.bookUrl}/myBooks`).map(res => res.json());
    return  response ;
  }

  getChapter(bookId){
    var response = this.http.get(`${this.bookUrl}/${bookId}`).map(res => res.json());
    return  response ;
  }


//新规作业名字事件
  createNewTaskName(property) {
    let body = JSON.stringify({ "newTaskName":property});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.bookUrl}/p007r001`, body, options)
      .map(res => res.json());
      //.catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

//菜单树结构的取得
  getAssignHomeWorkTreeList(){
    return this.http.get(`${this.bookUrl}/p007r002`)
      .map(res => res.json());
  }

}
