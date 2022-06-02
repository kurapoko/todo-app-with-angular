import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';


@Component({
  selector: 'app-todo-list-card',
  templateUrl: './todo-list-card.component.html',
  styleUrls: ['./todo-list-card.component.scss']
})
export class TodoListCardComponent implements OnInit {

  @Input()
  todo!: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
