import { Component ,Input,Output ,EventEmitter } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskRemoved = new EventEmitter<number>();
  @Output() taskCompleted = new EventEmitter<Task>();

  removeTask(taskId: number) {
    this.taskRemoved.emit(taskId);
  }
  taskComplete(task: Task) {
    task.completed = !task.completed;
    this.taskCompleted.emit(task);
  }
}
