import { Component } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }
  removeTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  completeTask(task: Task) {
}}
