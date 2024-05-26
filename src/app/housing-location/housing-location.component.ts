import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule],
  template: `
  <mat-card class="example-card">
  <mat-card-header>
    <mat-card-title>
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    </mat-card-title>
  </mat-card-header>
  <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
  <mat-card-content>
    <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
  </mat-card-content>
  <mat-card-actions>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </mat-card-actions>
</mat-card>

`,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}