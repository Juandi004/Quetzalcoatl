import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { TailComponent } from './tail/tail.component';
import { InternalAnatomyComponent } from './head/internal-anatomy/internal-anatomy.component';
import { BodyAnatomyComponent } from './body/body-anatomy/body-anatomy.component';
import { TailAnatomyComponent } from './tail/tail-anatomy/tail-anatomy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadComponent, BodyComponent, TailComponent, InternalAnatomyComponent, BodyAnatomyComponent, TailAnatomyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Quetzalcoatl';
}
