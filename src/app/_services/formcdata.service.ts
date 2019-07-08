import { Injectable } from '@angular/core'; 
// import { FormcComponent } from '../landing/custom-page/content/formc/formc.component'; 
import { Headers, Http, Response } from '@angular/http';

import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FormcdataService {
  datas: any = []
  image = []
  constructor() { 
  }

  addItem(item){
    this.datas.push(item);
  }

  getItem(){
    // console.log(this.datas)
    return this.datas
      
  }
  getImage(images){
    this.image = images
    console.log(this.image)
  }
  mintaImage(){
    return this.image
  }
}
