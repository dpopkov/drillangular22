import {Component} from '@angular/core';
import {TodoList} from "./model/todoList";
import {TodoItem} from "./model/todoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Alice", [
    new TodoItem("Go for long run"),
    new TodoItem("Get some milk"),
    new TodoItem("Collect garbage")
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => !item.complete);
  }
}
