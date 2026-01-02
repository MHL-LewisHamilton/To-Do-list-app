import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item.model';
import { TaskService, Task } from '../../services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskPieComponent } from '../task-pie/task-pie';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, TaskPieComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './table-list.html',
  styleUrl: './table-list.scss',
})
export class TableList {
  @Output() tasksChanged = new EventEmitter<void>();

  public showModal = false;
  public showEditTaskModal = false;
  public hoveringAdd = false;
  public newTaskName: string = '';
  public newTaskDate: string = '';
  public newTaskType: string = 'personal';
  public editTaskType: string = 'personal';
  public editTaskName: string = '';
  public editTaskDate: string = '';
  public editingItem: Item | null = null;
  public items: Array<Item> = [];
  public currentFilter: 'all' | 'personal' | 'work' = 'all';
  public isFading = false;
  public statusFilter: boolean|null = null;
    // Removed duplicate toggleStatusFilter
  
    setFilter(filter: 'all' | 'personal' | 'work') {
      if (this.currentFilter === filter) return;
      this.isFading = true;
      setTimeout(() => {
        this.currentFilter = filter;
        this.isFading = false;
      }, 400);
    }

    toggleStatusFilter(status: boolean) {
      this.isFading = true;
      setTimeout(() => {
        // If already selected, deselect (show all)
        if (this.statusFilter === status) {
          this.statusFilter = null;
        } else {
          this.statusFilter = status;
        }
        this.isFading = false;
      }, 400);
    }

    filteredItems(): Array<Item> {
      let filtered = this.currentFilter === 'all'
        ? this.items
        : this.items.filter(item => item.taskType === this.currentFilter);
      if (this.statusFilter !== null) {
        filtered = filtered.filter(item => item.complete === this.statusFilter);
      }
      return filtered.slice().sort((a, b) => a.date.getTime() - b.date.getTime());
    }
  

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.items = data.map(t => new Item(t.name, new Date(t.deadline), t.complete, t.id, t.taskType));
      this.tasksChanged.emit();
    });
  }


  addItem(name: string, date: string, taskType: string) {
    const task: Task = { name, deadline: date, complete: false, taskType };
    this.taskService.addTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  removeItem(item: Item) {
    this.taskService.deleteTaskById(item.id!).subscribe(() => {
      this.loadTasks();
    });
  }

  updateItem(item: Item) {
    const task: Task = {
      id: item.id,
      name: item.name,
      deadline: item.date.toISOString().split('T')[0],
      complete: item.complete,
      taskType: item.taskType
    };
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  markAsComplete(item: Item) {
    this.updateItem(item);
    if (item.complete) {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
    }
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  openModal() {
    this.newTaskType = 'personal';
    this.showModal = true;
  }

  openEditTaskModal(item: Item) {
    this.editingItem = item;
    this.editTaskName = item.name;
    this.editTaskDate = item.date.toISOString().split('T')[0];
    this.editTaskType = item.taskType || 'personal';
    this.showEditTaskModal = true;
  }

  closeEditModal() {
    this.showEditTaskModal = false;
    this.editingItem = null;
    this.editTaskName = '';
    this.editTaskDate = '';
    this.editTaskType = 'personal';
  }

  onEditSubmit() {
    if (this.editingItem && this.editTaskName && this.editTaskDate && this.editTaskType) {
      this.editingItem.name = this.editTaskName;
      this.editingItem.date = new Date(this.editTaskDate);
      this.editingItem.taskType = this.editTaskType;
      this.updateItem(this.editingItem);
      this.closeEditModal();
    }
  }

  closeModal() {
    this.showModal = false;
    this.newTaskName = '';
    this.newTaskDate = '';
    this.newTaskType = 'personal';
  }

  onSubmit() {
    if (this.newTaskName && this.newTaskDate && this.newTaskType) {
      this.addItem(this.newTaskName, this.newTaskDate, this.newTaskType);
      this.closeModal();
    }
  }
}
