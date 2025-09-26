import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('task-manager');
}
