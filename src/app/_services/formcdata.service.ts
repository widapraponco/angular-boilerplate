import { Injectable } from '@angular/core'; 
// import { FormcComponent } from '../landing/custom-page/content/formc/formc.component'; 

@Injectable({
  providedIn: 'root'
})
export class FormcdataService {
  datas = []
  constructor() { 
  }

  addItem(item){
    this.datas.push(item);
  }
  getItem(){
    console.log(this.datas)
    return this.datas;
  }
}
