import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Нарощування вій Бровари';
  constructor (private meta: Meta)
  {this.meta.addTags( [
    {name: 'вії в Бровараї' , content: 'Вії Бровари'},
    {name: 'вії Бровари' , content: 'Вії Бровари'},
    {name: 'вії' , content: 'Вії Бровари'},
    {name: 'ресницы' , content: 'Вії Бровари'},
    {name: 'сделать ресницы' , content: 'Вії Бровари'},
    {name: 'голливуд' , content: 'Вії Бровари'},
    {name: 'голівуд вії' , content: 'Вії Бровари'},
    {name: 'вії красиві' , content: 'Вії Бровари'},
    {name: 'вії пишні' , content: 'Вії Бровари'}
  ])}
}
