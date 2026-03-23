import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComicConComponent } from './pages/comic-con/comic-con.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComicConComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'comicon';
}
