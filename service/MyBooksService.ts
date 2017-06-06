import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MyBooksService{
  http:any;
  baseUrl:String;
  allBooks:any;
  books1:any;
  data:any;
  constructor(http:Http){
    this.http = http;
   // this.allBooks = null;
    this.baseUrl = '/youranxue/books';
  }

  getPosts(){
    return this.http.get(`${this.baseUrl}/sample`)
      .map(res => res.json());
  }

  getGrades(){
    return this.http.get(`${this.baseUrl}/grade`)
      .map(res => res.json());
  }

  getBooks(){
    var response = this.http.get(`${this.baseUrl}/mybooks`).map(res => res.json());
    return  response ;
  }

  getChapter(bookId){
    var response = this.http.get(`${this.baseUrl}/${bookId}`).map(res => res.json());
    return  response ;
  }



    searchMovies(movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var response = this.http.get(url).map(res => res.json());
		return response;
    }

//新规作业名字事件
  createNewTaskName(property) {
    let body = JSON.stringify({ "newTaskName":property});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.baseUrl}/p007r001`, body, options)
      .map(res => res.json());
      //.catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

//菜单树结构的取得
  getAssignHomeWorkTreeList(){
    return this.http.get(`${this.baseUrl}/p007r002`)
      .map(res => res.json());
  }

}
