import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { Avatar } from '../pages/avatar/avatar';
import { Name } from '../pages/name/name';
import { Password } from '../pages/password/password';
import { About } from '../pages/about/about';
import { Favorites } from '../pages/favorites/favorites';
import { Reflection } from '../pages/reflection/reflection';
import { Mistakenote } from '../pages/mistakenote/mistakenote';
import { Diagnosis } from '../pages/diagnosis/diagnosis';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Http, HttpModule, RequestOptions } from '@angular/http';


import { ChoiceQuestions } from '../pages/choice-questions/choice-questions';
import { Test} from '../pages/test/test';
import { Start} from '../pages/start/start';
import { Discover} from '../pages/discover/discover';
import { TopList} from '../pages/top-list/top-list';
import { SolutionReflect} from '../pages/solution-reflect/solution-reflect';
import { Login} from '../pages/login/login';
import { Register} from '../pages/register/register';
import { BookShop} from '../pages/book-shop/book-shop';
import { ChapterList} from '../pages/chapter-list/chapter-list';
import { Answer} from '../pages/answer/answer';
import { Hint} from '../pages/hint/hint';

import {SignupPage} from "../pages/signup/signup";
import {CustomFormsModule} from 'ng2-validation'
import {Storage, IonicStorageModule} from "@ionic/storage";
import {JwtHelper, AuthConfig, AuthHttp} from "angular2-jwt";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MathJaxDirective } from '../directives/Mathjax.directive';
import { AuthService } from './../service/auth-service';

import { QuestionService } from '../service/QuestionService';
import { MyBooksService } from '../service/MyBooksService';

import {EnvironmentsModule} from './environment-variables/environment-variables.module'

import {AuthProvider} from "../providers/auth/auth";

export function authHttpServiceFactory(http: Http, options: RequestOptions, storage: Storage) {
  const authConfig = new AuthConfig({
    tokenGetter: (() => storage.get('jwt')),
  });
  return new AuthHttp(authConfig, http, options);
}

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    Avatar,
    Name,
    Password,
    About,
    Favorites,
    Reflection,
    Mistakenote,
    Diagnosis,
    HomePage,
    ChoiceQuestions,
    Test,
    Start,
    Discover,
    TopList,
    SolutionReflect,
    Login,
    SignupPage,
    Register,
    BookShop,
    ChapterList,
    Answer,
    Hint,
    TabsPage,
    MathJaxDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    EnvironmentsModule,
    IonicStorageModule.forRoot({
      name: 'myapp',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
    CustomFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    Avatar,
    Name,
    Password,
    About,
    Favorites,
    Reflection,
    Mistakenote,
    Diagnosis,
    HomePage,
    ChoiceQuestions,
    Test,
    Discover,
    TopList,
    SolutionReflect,
    Start,
    Login,
    SignupPage,
    Register,
    BookShop,
    ChapterList,
    Answer,
    Hint,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    QuestionService,
    MyBooksService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    JwtHelper, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions, Storage]
    }
  ]
  
})
export class AppModule {}
