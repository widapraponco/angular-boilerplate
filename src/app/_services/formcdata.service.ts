import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormcdataService {

  constructor(
    public no?: string,
    public images?: string,
    public name?: string,
    public address?: string,
    public no_telp?: string,) { }
}
