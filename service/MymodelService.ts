import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MyModelService{
  http:any;
  baseUrl:String;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = '/t001';
  }

  getPosts(){
    return this.http.get(`${this.baseUrl}/sample`)
      .map(res => res.json());
  }

  getGrades(){
    return this.http.get(`${this.baseUrl}/grade`)
      .map(res => res.json());
  }
//作业一览的作业一览取得
  getLessonHomeWorkList(){
    return this.http.get(`${this.baseUrl}/p006r001`)
      .map(res => res.json());
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
