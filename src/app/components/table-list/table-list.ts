import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item.model';
import { TaskService, Task } from '../../services/task.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './table-list.html',
  styleUrl: './table-list.scss',
})
export class TableList {

  public showModal = false;
  public hoveringAdd = false;
  public newTaskName: string = '';
  public newTaskDate: string = '';
  public items: Array<Item> = [];
  

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

loadTasks() {
  this.taskService.getTasks().subscribe((data: Task[]) => {
    this.items = data.map(t => new Item(t.name, new Date(t.deadline), t.complete, t.id));
  });
}


  addItem(name: string, date: string) {
    const task: Task = { name, deadline: date, complete: false };
    this.taskService.addTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  updateItem(item: Item) {
  const task: Task = {
    id: item.id, 
    name: item.name,
    deadline: item.date.toISOString().split('T')[0],
    complete: item.complete
  };
  this.taskService.updateTask(task).subscribe(() => {
    this.loadTasks();
  });
}

  markAsComplete(item: Item) {
    this.updateItem(item);
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.newTaskName = '';
    this.newTaskDate = '';
  }

  onSubmit() {
    if (this.newTaskName && this.newTaskDate) {
      this.addItem(this.newTaskName, this.newTaskDate);
      this.closeModal();
    }
  }
}
