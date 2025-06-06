import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '../../../stencil-demo/loader';

defineCustomElements();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-demo';
}
