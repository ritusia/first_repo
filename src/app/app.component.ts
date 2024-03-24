import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
   <div>
     <aside class="flex flex-col justify-between">
       <div>abc dupa </div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
     </aside>
     <main class="main"></main>
   </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
}
