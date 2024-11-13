import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbCollapse, NgbNavLink, NgbNav, NgbNavItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbCollapse,NgbNav, NgbNavLink, NgbNavItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
  isMenuCollapsed = true;
}
