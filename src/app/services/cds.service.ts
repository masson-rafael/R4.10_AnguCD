import { Injectable } from '@angular/core';
import { CD } from '../models/cd.model';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getCDs(): CD[] {
    
    return [
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
    ];
  }

  getCdById(id: number): CD {
    const cd = this.getCDs().find(cd => cd.id === id);
    if(cd) {
      return cd;
    } else {
      throw new Error('CD non trouvé');
    }
  }
}
