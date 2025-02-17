import { Component , OnInit } from '@angular/core';
import { CD } from '../models/cd.model';

@Component({
  selector: 'app-list-cd',
  standalone: false,
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCdComponent implements OnInit {
  listcd! : CD[];

  ngOnInit(): void {
    this.listcd = [
      {
        id : 1,
        title : "The Dark Side of the Moon",
        author : "Pink Floyd",
        price : 10,
        thumbnail : "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        dateDeSortie : new Date(1973, 3, 1),
        quantite : 1
      },
      {
        id : 2,
        title : "Pulse",
        author : "Pink Floyd",
        price : 10,
        thumbnail : "https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg",
        dateDeSortie : new Date(1974, 4, 11),
        quantite : 2,
        onsale : true
      },
      {
        id : 3,
        title : "Led Zeppelin IV",
        author : "Led Zeppelin",
        price : 100,
        thumbnail : "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg",
        dateDeSortie : new Date(1971, 11, 8),
        quantite : 0
      }
    ]
  }
}
