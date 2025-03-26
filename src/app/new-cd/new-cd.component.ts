import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cd',
  standalone: false,
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {

  formulaire!: FormGroup; 
  thumbRegex!: RegExp;
  currentCD!: CD;

  constructor(private formBuilder: FormBuilder, private cdservice: CdsService, private router: Router) {}

  ngOnInit(): void {

    this.thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');

    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(6)]],
      author: [null, [Validators.required, Validators.minLength(6)]],
      price: [null, [Validators.required, Validators.min(0)]],
      thumbnail: [null, [Validators.required, Validators.pattern(this.thumbRegex)]],
      dateDeSortie: [null, [Validators.required, Validators.min(0)]],
      quantite: [null, [Validators.required, Validators.min(0)]],
    },
    {updateOn: 'blur'}
    );

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD = {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        price: formValue.price,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite,
        onsale: true,
      };
    });

  }

  onNewCD(): void {

    let newCD: CD = {
      id: 0,
      title: this.formulaire.get('titre')?.value,
      author: this.formulaire.get('author')?.value,
      price: this.formulaire.get('price')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value,
      onsale: true,
    };

    this.cdservice.addCD(newCD).subscribe({
      next: cd =>
      {
        this.router.navigateByUrl('/catalog')
      },
      error: err =>
      {
        console.error('Observable ajout CD a émis une erreur : ' + err);
        alert("Désolé le CD n'a pas pu être ajouté");
      }
    });
  };
}
