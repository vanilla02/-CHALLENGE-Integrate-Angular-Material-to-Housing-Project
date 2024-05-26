import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HousingLocationComponent, HomeComponent, RouterModule],
  template: `
    <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
      <img class="brand-logo" src="https://static.vecteezy.com/system/resources/thumbnails/027/971/388/small/3d-render-round-warm-orange-fire-flame-icon-realistic-hot-sparks-light-gas-logo-design-for-emoticon-energy-power-ui-png.png" height="50px" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home-project';
}
