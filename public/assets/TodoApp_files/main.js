import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/main.ts
import { bootstrapApplication } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_platform-browser.js?v=f3266688";

// src/app/app.config.ts
import { importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";
import { provideRouter } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_router.js?v=f3266688";
import { HttpClientModule as HttpClientModule3 } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_common_http.js?t=1767182907923&v=f3266688";

// src/app/app.routes.ts
import { RouterModule } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_router.js?v=f3266688";
import { NgModule } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";

// src/app/pages/overview/overview.ts
import { Component as Component2 } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";

// src/app/components/table-list/table-list.ts
import { Component } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";
import { CommonModule } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_common.js?t=1767182907923&v=f3266688";
import { CUSTOM_ELEMENTS_SCHEMA } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";
import { FormsModule } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_forms.js?t=1767182907923&v=f3266688";

// src/app/models/item.model.ts
var Item = class {
  name;
  date;
  complete;
  id;
  constructor(name, date, complete, id) {
    this.name = name;
    this.date = date;
    this.complete = complete;
    this.id = id;
  }
};

// src/app/components/table-list/table-list.ts
import { HttpClientModule } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_common_http.js?t=1767182907923&v=f3266688";
import * as i02 from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";

// src/app/services/task.service.ts
var task_service_exports = {};
__export(task_service_exports, {
  TaskService: () => TaskService
});
import { Injectable } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";
import * as i0 from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";
import * as i1 from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_common_http.js?t=1767182907923&v=f3266688";
var TaskService = class _TaskService {
  http;
  apiUrl = "http://localhost:3000/api/tasks";
  constructor(http) {
    this.http = http;
  }
  getTasks() {
    return this.http.get(this.apiUrl);
  }
  addTask(task) {
    return this.http.post(this.apiUrl, task);
  }
  updateTask(task) {
    return this.http.put(`${this.apiUrl}/${task.id}`, task);
  }
  static \u0275fac = function TaskService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskService)(i0.\u0275\u0275inject(i1.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(TaskService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i1.HttpClient }], null);
})();

// src/app/components/table-list/table-list.ts
import * as i2 from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_forms.js?t=1767182907923&v=f3266688";
import * as i3 from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_common.js?t=1767182907923&v=f3266688";
function TableList_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "tr")(1, "td");
    i02.\u0275\u0275text(2);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(3, "td");
    i02.\u0275\u0275text(4);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(5, "td")(6, "input", 3);
    i02.\u0275\u0275twoWayListener("ngModelChange", function TableList_tr_12_Template_input_ngModelChange_6_listener($event) {
      const item_r2 = i02.\u0275\u0275restoreView(_r1).$implicit;
      i02.\u0275\u0275twoWayBindingSet(item_r2.complete, $event) || (item_r2.complete = $event);
      return i02.\u0275\u0275resetView($event);
    });
    i02.\u0275\u0275listener("change", function TableList_tr_12_Template_input_change_6_listener() {
      const item_r2 = i02.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r2.markAsComplete(item_r2));
    });
    i02.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(item_r2.name);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(ctx_r2.formatDate(item_r2.date));
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275twoWayProperty("ngModel", item_r2.complete);
  }
}
function TableList_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2", 6);
    i02.\u0275\u0275text(3, "Add New Task");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(4, "form", 7);
    i02.\u0275\u0275listener("ngSubmit", function TableList_div_13_Template_form_ngSubmit_4_listener() {
      i02.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r2.onSubmit());
    });
    i02.\u0275\u0275elementStart(5, "label", 8);
    i02.\u0275\u0275text(6, " Task Name: ");
    i02.\u0275\u0275elementStart(7, "input", 9);
    i02.\u0275\u0275twoWayListener("ngModelChange", function TableList_div_13_Template_input_ngModelChange_7_listener($event) {
      i02.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i02.\u0275\u0275nextContext();
      i02.\u0275\u0275twoWayBindingSet(ctx_r2.newTaskName, $event) || (ctx_r2.newTaskName = $event);
      return i02.\u0275\u0275resetView($event);
    });
    i02.\u0275\u0275elementEnd()();
    i02.\u0275\u0275element(8, "br");
    i02.\u0275\u0275elementStart(9, "label", 10);
    i02.\u0275\u0275text(10, " Deadline: ");
    i02.\u0275\u0275elementStart(11, "input", 11);
    i02.\u0275\u0275twoWayListener("ngModelChange", function TableList_div_13_Template_input_ngModelChange_11_listener($event) {
      i02.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i02.\u0275\u0275nextContext();
      i02.\u0275\u0275twoWayBindingSet(ctx_r2.newTaskDate, $event) || (ctx_r2.newTaskDate = $event);
      return i02.\u0275\u0275resetView($event);
    });
    i02.\u0275\u0275elementEnd()();
    i02.\u0275\u0275element(12, "br");
    i02.\u0275\u0275elementStart(13, "button", 12);
    i02.\u0275\u0275text(14, "Add");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(15, "button", 13);
    i02.\u0275\u0275listener("click", function TableList_div_13_Template_button_click_15_listener() {
      i02.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r2.closeModal());
    });
    i02.\u0275\u0275text(16, "Cancel");
    i02.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance(7);
    i02.\u0275\u0275twoWayProperty("ngModel", ctx_r2.newTaskName);
    i02.\u0275\u0275advance(4);
    i02.\u0275\u0275twoWayProperty("ngModel", ctx_r2.newTaskDate);
  }
}
var TableList = class _TableList {
  taskService;
  showModal = false;
  hoveringAdd = false;
  newTaskName = "";
  newTaskDate = "";
  items = [];
  constructor(taskService) {
    this.taskService = taskService;
    this.loadTasks();
  }
  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.items = data.map((t) => new Item(t.name, new Date(t.deadline), t.complete, t.id));
    });
  }
  addItem(name, date) {
    const task = { name, deadline: date, complete: false };
    this.taskService.addTask(task).subscribe(() => {
      this.loadTasks();
    });
  }
  updateItem(item) {
    const task = {
      id: item.id,
      name: item.name,
      deadline: item.date.toISOString().split("T")[0],
      complete: item.complete
    };
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks();
    });
  }
  markAsComplete(item) {
    this.updateItem(item);
  }
  formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(void 0, options);
  }
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.newTaskName = "";
    this.newTaskDate = "";
  }
  onSubmit() {
    if (this.newTaskName && this.newTaskDate) {
      this.addItem(this.newTaskName, this.newTaskDate);
      this.closeModal();
    }
  }
  static \u0275fac = function TableList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableList)(i02.\u0275\u0275directiveInject(TaskService));
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _TableList, selectors: [["app-table-list"]], decls: 14, vars: 2, consts: [[1, "add-item-button", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "modal-backdrop", 4, "ngIf"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "modal-backdrop"], [1, "modal"], [1, "modal-title-text"], [3, "ngSubmit"], [1, "task-name-label"], ["type", "text", "name", "taskName", "required", "", 3, "ngModelChange", "ngModel"], [1, "deadline-label"], ["type", "date", "name", "taskDate", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "submit-button"], ["type", "button", 1, "cancel-button", 3, "click"]], template: function TableList_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "button", 0);
      i02.\u0275\u0275listener("click", function TableList_Template_button_click_0_listener() {
        return ctx.openModal();
      });
      i02.\u0275\u0275text(1, "Add Item");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(2, "table")(3, "thead")(4, "tr")(5, "th");
      i02.\u0275\u0275text(6, "Task");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(7, "th");
      i02.\u0275\u0275text(8, "Deadline");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(9, "th");
      i02.\u0275\u0275text(10, "Complete");
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275elementStart(11, "tbody");
      i02.\u0275\u0275template(12, TableList_tr_12_Template, 7, 3, "tr", 1);
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275template(13, TableList_div_13_Template, 17, 2, "div", 2);
    }
    if (rf & 2) {
      i02.\u0275\u0275advance(12);
      i02.\u0275\u0275property("ngForOf", ctx.items);
      i02.\u0275\u0275advance();
      i02.\u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [FormsModule, i2.\u0275NgNoValidate, i2.NgSelectOption, i2.\u0275NgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.MinValidator, i2.MaxValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, CommonModule, i3.NgClass, i3.NgComponentOutlet, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i3.NgStyle, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i3.NgPlural, i3.NgPluralCase, HttpClientModule, i3.AsyncPipe, i3.UpperCasePipe, i3.LowerCasePipe, i3.JsonPipe, i3.SlicePipe, i3.DecimalPipe, i3.PercentPipe, i3.TitleCasePipe, i3.CurrencyPipe, i3.DatePipe, i3.I18nPluralPipe, i3.I18nSelectPipe, i3.KeyValuePipe], styles: ['\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  margin: 2;\n  font-family:\n    "Fira Code",\n    Arial,\n    sans-serif;\n  background: #fff;\n  border-collapse: collapse;\n  border-radius: 22px;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  text-align: left;\n  border-bottom: 1px solid #e0e0e0;\n}\nth[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  color: #333;\n}\ntr[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  transition: background 0.2s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  background: #fff;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);\n  min-width: 300px;\n}\n.modal-title-text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  font-family:\n    "Fira Code",\n    Arial,\n    sans-serif;\n  font-weight: 600;\n}\n.task-name-label[_ngcontent-%COMP%], \n.deadline-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-family:\n    "Fira Code",\n    Arial,\n    sans-serif;\n  font-weight: 500;\n}\n.submit-button[_ngcontent-%COMP%], \n.cancel-button[_ngcontent-%COMP%] {\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 0.6rem 1.4rem;\n  font-size: 1rem;\n  font-family:\n    "Fira Code",\n    Arial,\n    sans-serif;\n  font-weight: 500;\n  margin-right: 10px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.submit-button[_ngcontent-%COMP%] {\n  position: relative;\n  right: 5px;\n}\n.cancel-button[_ngcontent-%COMP%] {\n  position: relative;\n  left: 220px;\n}\n.add-item-button[_ngcontent-%COMP%] {\n  position: relative;\n  left: 1730px;\n  background: white;\n  color: black;\n  border-radius: 8px;\n  padding: 0.6rem 1.4rem;\n  font-size: 1rem;\n  font-family:\n    Fira Code,\n    Arial,\n    sans-serif;\n  font-weight: 500;\n  margin-bottom: 20px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(89, 120, 155, 0.08);\n  transition: background 0.2s, box-shadow 0.2s;\n}\nbutton[_ngcontent-%COMP%]:hover, \nbutton[_ngcontent-%COMP%]:focus {\n  background: #d6e0ee;\n  box-shadow: 0 4px 16px rgba(89, 120, 155, 0.15);\n  outline: none;\n}\n/*# sourceMappingURL=table-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(TableList, [{
    type: Component,
    args: [{ selector: "app-table-list", standalone: true, imports: [FormsModule, CommonModule, HttpClientModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<button class='add-item-button' (click)="openModal()">Add Item</button>
<table>
    <thead>
        <tr>
            <th>Task</th>
            <th>Deadline</th>
            <th>Complete</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let item of items">
            <td>{{ item.name }}</td>
            <td>{{ formatDate(item.date) }}</td>
            <td>
                <input type="checkbox" [(ngModel)]="item.complete" (change)="markAsComplete(item)"/>
            </td>
        </tr>
    </tbody>
</table>


<div class="modal-backdrop" *ngIf="showModal">
  <div class="modal">
    <h2 class="modal-title-text">Add New Task</h2>
    <form (ngSubmit)="onSubmit()">
      <label class="task-name-label">
        Task Name:
        <input type="text" [(ngModel)]="newTaskName" name="taskName" required />
      </label>
      <br>
      <label class="deadline-label">
        Deadline:
        <input type="date" [(ngModel)]="newTaskDate" name="taskDate" required />
      </label>
      <br>
      <button class='submit-button' type="submit">Add</button>
      <button class='cancel-button' type="button" (click)="closeModal()">Cancel</button>
    </form>
  </div>
</div>
`, styles: ['/* src/app/components/table-list/table-list.scss */\ntable {\n  width: 100%;\n  position: relative;\n  margin: 2;\n  font-family:\n    "Fira Code",\n    Arial,\n    sans-serif;\n  background: #fff;\n  border-collapse: collapse;\n  border-radius: 22px;\n}\nth,\ntd {\n  padding: 0.75rem 1.25rem;\n  text-align: left;\n  border-bottom: 1px solid #e0e0e0;\n}\nth {\n  background: #f5f5f5;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  color: #333;\n}\ntr:hover {\n  background: #f9fafb;\n  transition: background 0.2s;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  width: 400px;\n  height: 200px;\n  background: #fff;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);\n  min-width: 300px;\n}\n.modal-title-text {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  font-family:\n    "Fira Code",\n    Arial,\n    sans-serif;\n  font-weight: 600;\n}\n.task-name-label,\n.deadline-label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-family:\n    "Fira Code",\n    Arial,\n    sans-serif;\n  font-weight: 500;\n}\n.submit-button,\n.cancel-button {\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 0.6rem 1.4rem;\n  font-size: 1rem;\n  font-family:\n    "Fira Code",\n    Arial,\n    sans-serif;\n  font-weight: 500;\n  margin-right: 10px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.submit-button {\n  position: relative;\n  right: 5px;\n}\n.cancel-button {\n  position: relative;\n  left: 220px;\n}\n.add-item-button {\n  position: relative;\n  left: 1730px;\n  background: white;\n  color: black;\n  border-radius: 8px;\n  padding: 0.6rem 1.4rem;\n  font-size: 1rem;\n  font-family:\n    Fira Code,\n    Arial,\n    sans-serif;\n  font-weight: 500;\n  margin-bottom: 20px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(89, 120, 155, 0.08);\n  transition: background 0.2s, box-shadow 0.2s;\n}\nbutton:hover,\nbutton:focus {\n  background: #d6e0ee;\n  box-shadow: 0 4px 16px rgba(89, 120, 155, 0.15);\n  outline: none;\n}\n/*# sourceMappingURL=table-list.css.map */\n'] }]
  }], () => [{ type: TaskService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(TableList, { className: "TableList", filePath: "src/app/components/table-list/table-list.ts", lineNumber: 17 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Ftable-list%2Ftable-list.ts%40TableList";
  function TableList_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(TableList, m.default, [i02, i2, i3, task_service_exports], [FormsModule, CommonModule, HttpClientModule, Component, CUSTOM_ELEMENTS_SCHEMA], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && TableList_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && TableList_HmrLoad(d.timestamp)));
})();

// src/app/pages/overview/overview.ts
import { HttpClientModule as HttpClientModule2 } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_common_http.js?t=1767182907923&v=f3266688";
import * as i03 from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";
var Overview = class _Overview {
  constructor() {
  }
  static \u0275fac = function Overview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Overview)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _Overview, selectors: [["app-overview"]], decls: 1, vars: 0, template: function Overview_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275element(0, "app-table-list");
    }
  }, dependencies: [TableList, HttpClientModule2], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(Overview, [{
    type: Component2,
    args: [{ selector: "app-overview", imports: [TableList, HttpClientModule2], template: "<app-table-list></app-table-list>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(Overview, { className: "Overview", filePath: "src/app/pages/overview/overview.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Foverview%2Foverview.ts%40Overview";
  function Overview_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(Overview, m.default, [i03], [TableList, HttpClientModule2, Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Overview_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Overview_HmrLoad(d.timestamp)));
})();

// src/app/app.routes.ts
import * as i04 from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";
import * as i12 from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_router.js?v=f3266688";
var routes = [
  { path: "overview", component: Overview },
  { path: "", redirectTo: "overview", pathMatch: "full" }
];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ i04.\u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ i04.\u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule3)
  ]
};

// src/app/app.ts
import { Component as Component3 } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";
import { RouterOutlet } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_router.js?v=f3266688";
import { HttpClientModule as HttpClientModule4 } from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_common_http.js?t=1767182907923&v=f3266688";
import * as i05 from "/@fs/Users/lewishamilton/Desktop/Code Practice/todo-app/.angular/cache/20.3.13/todo-app/vite/deps/@angular_core.js?v=f3266688";
var App = class _App {
  title = "todo-app";
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet, HttpClientModule4], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(App, [{
    type: Component3,
    args: [{ selector: "app-root", imports: [RouterOutlet, HttpClientModule4], template: "<router-outlet></router-outlet>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40App";
  function App_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(App, m.default, [i05], [RouterOutlet, HttpClientModule4, Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9wYWdlcy9vdmVydmlldy9vdmVydmlldy50cyIsInNyYy9hcHAvcGFnZXMvb3ZlcnZpZXcvb3ZlcnZpZXcuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy90YWJsZS1saXN0L3RhYmxlLWxpc3QudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUtbGlzdC90YWJsZS1saXN0Lmh0bWwiLCJzcmMvYXBwL21vZGVscy9pdGVtLm1vZGVsLnRzIiwic3JjL2FwcC9zZXJ2aWNlcy90YXNrLnNlcnZpY2UudHMiLCJzcmMvYXBwL2FwcC50cyIsInNyYy9hcHAvYXBwLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwQXBwbGljYXRpb24gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGFwcENvbmZpZyB9IGZyb20gJy4vYXBwL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAvYXBwJztcblxuYm9vdHN0cmFwQXBwbGljYXRpb24oQXBwLCBhcHBDb25maWcpXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcsIGltcG9ydFByb3ZpZGVyc0Zyb20sIHByb3ZpZGVCcm93c2VyR2xvYmFsRXJyb3JMaXN0ZW5lcnMsIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5cbmV4cG9ydCBjb25zdCBhcHBDb25maWc6IEFwcGxpY2F0aW9uQ29uZmlnID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlQnJvd3Nlckdsb2JhbEVycm9yTGlzdGVuZXJzKCksXG4gICAgcHJvdmlkZVpvbmVDaGFuZ2VEZXRlY3Rpb24oeyBldmVudENvYWxlc2Npbmc6IHRydWUgfSksXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpLFxuICAgIGltcG9ydFByb3ZpZGVyc0Zyb20oSHR0cENsaWVudE1vZHVsZSlcbiAgXVxufTtcbiIsImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVydmlldyB9IGZyb20gJy4vcGFnZXMvb3ZlcnZpZXcvb3ZlcnZpZXcnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG5cbiAgICB7IHBhdGg6ICdvdmVydmlldycsIGNvbXBvbmVudDogT3ZlcnZpZXcgfSxcblxuICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ292ZXJ2aWV3JywgcGF0aE1hdGNoOiAnZnVsbCcgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlTGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFibGUtbGlzdC90YWJsZS1saXN0JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vdmVydmlldycsXG4gIGltcG9ydHM6IFtUYWJsZUxpc3QsIEh0dHBDbGllbnRNb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcnZpZXcuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9vdmVydmlldy5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXcge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbn1cbiIsIjxhcHAtdGFibGUtbGlzdD48L2FwcC10YWJsZS1saXN0PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2l0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgVGFza1NlcnZpY2UsIFRhc2sgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90YXNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRhYmxlLWxpc3QnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWxpc3QuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi90YWJsZS1saXN0LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUxpc3Qge1xuXG4gIHB1YmxpYyBzaG93TW9kYWwgPSBmYWxzZTtcbiAgcHVibGljIGhvdmVyaW5nQWRkID0gZmFsc2U7XG4gIHB1YmxpYyBuZXdUYXNrTmFtZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBuZXdUYXNrRGF0ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBpdGVtczogQXJyYXk8SXRlbT4gPSBbXTtcbiAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXNrU2VydmljZTogVGFza1NlcnZpY2UpIHtcbiAgICB0aGlzLmxvYWRUYXNrcygpO1xuICB9XG5cbmxvYWRUYXNrcygpIHtcbiAgdGhpcy50YXNrU2VydmljZS5nZXRUYXNrcygpLnN1YnNjcmliZSgoZGF0YTogVGFza1tdKSA9PiB7XG4gICAgdGhpcy5pdGVtcyA9IGRhdGEubWFwKHQgPT4gbmV3IEl0ZW0odC5uYW1lLCBuZXcgRGF0ZSh0LmRlYWRsaW5lKSwgdC5jb21wbGV0ZSwgdC5pZCkpO1xuICB9KTtcbn1cblxuXG4gIGFkZEl0ZW0obmFtZTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0YXNrOiBUYXNrID0geyBuYW1lLCBkZWFkbGluZTogZGF0ZSwgY29tcGxldGU6IGZhbHNlIH07XG4gICAgdGhpcy50YXNrU2VydmljZS5hZGRUYXNrKHRhc2spLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRUYXNrcygpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSXRlbShpdGVtOiBJdGVtKSB7XG4gIGNvbnN0IHRhc2s6IFRhc2sgPSB7XG4gICAgaWQ6IGl0ZW0uaWQsIFxuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICBkZWFkbGluZTogaXRlbS5kYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICBjb21wbGV0ZTogaXRlbS5jb21wbGV0ZVxuICB9O1xuICB0aGlzLnRhc2tTZXJ2aWNlLnVwZGF0ZVRhc2sodGFzaykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICB0aGlzLmxvYWRUYXNrcygpO1xuICB9KTtcbn1cblxuICBtYXJrQXNDb21wbGV0ZShpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy51cGRhdGVJdGVtKGl0ZW0pO1xuICB9XG5cbiAgZm9ybWF0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgb3Blbk1vZGFsKCkge1xuICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICB0aGlzLm5ld1Rhc2tOYW1lID0gJyc7XG4gICAgdGhpcy5uZXdUYXNrRGF0ZSA9ICcnO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMubmV3VGFza05hbWUgJiYgdGhpcy5uZXdUYXNrRGF0ZSkge1xuICAgICAgdGhpcy5hZGRJdGVtKHRoaXMubmV3VGFza05hbWUsIHRoaXMubmV3VGFza0RhdGUpO1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG59XG4iLCI8YnV0dG9uIGNsYXNzPSdhZGQtaXRlbS1idXR0b24nIChjbGljayk9XCJvcGVuTW9kYWwoKVwiPkFkZCBJdGVtPC9idXR0b24+XG48dGFibGU+XG4gICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGFzazwvdGg+XG4gICAgICAgICAgICA8dGg+RGVhZGxpbmU8L3RoPlxuICAgICAgICAgICAgPHRoPkNvbXBsZXRlPC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICAgICAgICA8dGQ+e3sgaXRlbS5uYW1lIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBmb3JtYXREYXRlKGl0ZW0uZGF0ZSkgfX08L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIml0ZW0uY29tcGxldGVcIiAoY2hhbmdlKT1cIm1hcmtBc0NvbXBsZXRlKGl0ZW0pXCIvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5cblxuXG48ZGl2IGNsYXNzPVwibW9kYWwtYmFja2Ryb3BcIiAqbmdJZj1cInNob3dNb2RhbFwiPlxuICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cbiAgICA8aDIgY2xhc3M9XCJtb2RhbC10aXRsZS10ZXh0XCI+QWRkIE5ldyBUYXNrPC9oMj5cbiAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwidGFzay1uYW1lLWxhYmVsXCI+XG4gICAgICAgIFRhc2sgTmFtZTpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJuZXdUYXNrTmFtZVwiIG5hbWU9XCJ0YXNrTmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJyPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZGVhZGxpbmUtbGFiZWxcIj5cbiAgICAgICAgRGVhZGxpbmU6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIFsobmdNb2RlbCldPVwibmV3VGFza0RhdGVcIiBuYW1lPVwidGFza0RhdGVcIiByZXF1aXJlZCAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxicj5cbiAgICAgIDxidXR0b24gY2xhc3M9J3N1Ym1pdC1idXR0b24nIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9J2NhbmNlbC1idXR0b24nIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiZXhwb3J0IGNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgZGF0ZTogRGF0ZSxcbiAgICAgICAgcHVibGljIGNvbXBsZXRlOiBib29sZWFuLFxuICAgICAgICBwdWJsaWMgaWQ/OiBudW1iZXIsXG4gICAgKSB7fVxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFzayB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG4gICAgY29tcGxldGU6IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pICBcbmV4cG9ydCBjbGFzcyBUYXNrU2VydmljZSB7XG4gICAgcHJpdmF0ZSBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90YXNrcyc7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gICAgZ2V0VGFza3MoKTogT2JzZXJ2YWJsZTxUYXNrW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VGFza1tdPih0aGlzLmFwaVVybCk7XG4gICAgfVxuICAgIFxuICAgIGFkZFRhc2sodGFzazogVGFzayk6IE9ic2VydmFibGU8VGFzaz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VGFzaz4odGhpcy5hcGlVcmwsIHRhc2spO1xuICAgIH1cblxuICAgIHVwZGF0ZVRhc2sodGFzazogVGFzayk6IE9ic2VydmFibGU8VGFzaz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUYXNrPihgJHt0aGlzLmFwaVVybH0vJHt0YXNrLmlkfWAsIHRhc2spO1xuICAgIH1cblxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgaW1wb3J0czogW1JvdXRlck91dGxldCwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9hcHAuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgcHJvdGVjdGVkIHRpdGxlID0gJ3RvZG8tYXBwJztcbn1cbiIsIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQVMsNEJBQTRCOzs7QUNBckMsU0FBNEIscUJBQXFCLG9DQUFvQyxrQ0FBa0M7QUFDdkgsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxvQkFBQUEseUJBQXdCOzs7QUNGakMsU0FBaUIsb0JBQW9CO0FBQ3JDLFNBQVMsZ0JBQWdCOzs7QUNEekIsU0FBUyxhQUFBQyxrQkFBaUI7OztBRUExQixTQUFTLGlCQUFpQjtBQUMxQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLDhCQUE4QjtBQUN2QyxTQUFTLG1CQUFtQjs7O0FFSHRCLElBQU8sT0FBUCxNQUFXO0VBRUY7RUFDQTtFQUNBO0VBQ0E7RUFKWCxZQUNXLE1BQ0EsTUFDQSxVQUNBLElBQVc7QUFIWCxTQUFBLE9BQUE7QUFDQSxTQUFBLE9BQUE7QUFDQSxTQUFBLFdBQUE7QUFDQSxTQUFBLEtBQUE7RUFD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LE1BQU0sR0FDM0IsWUFBWSxFQUFBLENBQUE7OztnRkFFWCxrQkFBZ0IsQ0FBQTtVQUo1QjtXQUFTO01BQ1IsU0FBUyxDQUFDLGFBQWEsUUFBUSxNQUFNLENBQUM7TUFDdEMsU0FBUyxDQUFDLFlBQVk7S0FDdkI7Ozs7O0FEUk0sSUFBTSxZQUErQjtFQUMxQyxXQUFXO0lBQ1QsbUNBQWtDO0lBQ2xDLDJCQUEyQixFQUFFLGlCQUFpQixLQUFJLENBQUU7SUFDcEQsY0FBYyxNQUFNO0lBQ3BCLG9CQUFvQkUsaUJBQWdCOzs7OztBUVh4QyxTQUFTLGFBQUFDLGtCQUFpQjtBQUMxQixTQUFTLG9CQUFvQjtBQUM3QixTQUFxQixvQkFBQUMseUJBQXdCOztBQVF2QyxJQUFPLE1BQVAsTUFBTyxLQUFHO0VBQ0osUUFBUTs7cUNBRFAsTUFBRztFQUFBOzZFQUFILE1BQUcsV0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxVQUFBLFNBQUEsYUFBQSxJQUFBLEtBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQTtBQ1ZoQixNQUFBLHdCQUFBLEdBQUEsZUFBQTs7b0JETVksY0FBY0EsaUJBQWdCLEdBQUEsZUFBQSxFQUFBLENBQUE7OztnRkFJN0IsS0FBRyxDQUFBO1VBTmZEO3VCQUNXLFlBQVUsU0FDWCxDQUFDLGNBQWNDLGlCQUFnQixHQUFDLFVBQUEsb0NBQUEsQ0FBQTs7OztpRkFJOUIsS0FBRyxFQUFBLFdBQUEsT0FBQSxVQUFBLGtCQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7OzsrREFBSCxLQUFHLEVBQUEsU0FBQSxDQUFBQyxHQUFBLEdBQUEsQ0FBQSxjQUFBRCxtQkFBQUQsVUFBQSxHQUFBLGFBQUEsRUFBQSxDQUFBO0VBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGNBQUEsWUFBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsTUFBQSxZQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FUTmhCLHFCQUFxQixLQUFLLFNBQVMsRUFDaEMsTUFBTSxDQUFDLFFBQVEsUUFBUSxNQUFNLEdBQUcsQ0FBQzsiLCJuYW1lcyI6WyJIdHRwQ2xpZW50TW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJIdHRwQ2xpZW50TW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJIdHRwQ2xpZW50TW9kdWxlIiwiQ29tcG9uZW50IiwiSHR0cENsaWVudE1vZHVsZSIsImkwIl19