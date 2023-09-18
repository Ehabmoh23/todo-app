import { Component , Output, EventEmitter } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  @Output() taskAdded = new EventEmitter<Task>();
  task: Task = { id: 0, name: '', completed: false };

  addTask() {
    this.taskAdded.emit({ ...this.task, id: Date.now() });
    this.task = { id: 0, name: '', completed: false };
  }
}
