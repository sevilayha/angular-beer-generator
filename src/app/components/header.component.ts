import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav className="navbar is-info">
      <div className="navbar-brand">
        <h2 className="navbar-item title">Beer Factory!</h2>
      </div>
    </nav>
  `
})
export class HeaderComponent {}
