import { Component , OnInit } from '@angular/core';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-list-cd',
  standalone: false,
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCdComponent implements OnInit {
  
  listcd! : CD[];

  constructor(private myCdsService: CdsService) {}

  ngOnInit(): void {
    this.listcd = this.myCdsService.getCDs();
  }
}
