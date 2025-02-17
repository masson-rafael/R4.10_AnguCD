import { Component, Input } from '@angular/core';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CdComponent {

  @Input() cd!: CD;
  theCd!: CD;
  idCd!: string;

  constructor(private cdService: CdsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCd = this.route.snapshot.params['id'];
    if (this.idCd !== undefined ) {
      this.theCd = this.cdService.getCdById(+this.idCd);
    } else {
      this.theCd = this.cd;
    }
  }

  onAddCD(): void {
    this.theCd.quantite++;
  }
}
