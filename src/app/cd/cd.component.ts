import { Component, Input } from '@angular/core';
import { CD } from '../models/cd.model';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CdComponent {

  @Input() cd!: CD;

  onAddCD(): void {
    this.cd.quantite++;
  }
}
