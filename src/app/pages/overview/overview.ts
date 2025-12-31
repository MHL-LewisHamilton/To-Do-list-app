import { Component } from '@angular/core';
import { TableList } from '../../components/table-list/table-list';
import { Item } from '../../models/item.model';
import { TaskPieComponent } from '../../components/task-pie/task-pie';
import { HttpClientModule } from '@angular/common/http';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-overview',
  imports: [TableList, HttpClientModule, TaskPieComponent],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {
  public items: Array<Item> = [];

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.items = data.map(t => new Item(t.name, new Date(t.deadline), t.complete, t.id));
    });
  }

  get completeCount() {
    return this.items.filter(i => i.complete).length;
  }

  get incompleteCount() {
    return this.items.filter(i => !i.complete).length;
  }
}