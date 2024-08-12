import { Component } from '@angular/core';
import { SharedToolbarComponent } from './../../shared-toolbar/shared-toolbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedToolbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
