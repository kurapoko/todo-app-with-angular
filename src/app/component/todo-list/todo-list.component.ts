import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  list:Todo[] = [
    {
      title: 'タスク1',
      description: 'タスク1の詳細',
      date: '6月5日（金）',
      done: false
    },
    {
      title: 'タスク2',
      description: 'タスク2の詳細',
      date: '6月6日（土）',
      done: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
