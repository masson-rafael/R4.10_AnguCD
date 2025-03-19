import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CD } from '../models/cd.model';

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

  constructor(private formBuilder: FormBuilder) {}

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

  }
}
