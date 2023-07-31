import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as Papa from 'papaparse';


@Injectable({
  providedIn: 'root'
})

export class AlldataService {
  
  constructor(private Http:HttpClient) { }
 
  data: any = [];
  nombreArchivo:string = '';

  //APi para consumir los datos

  public getAllData(url:string):Observable<any>{
    return this.Http.get(url);
  }



//Metodo para exportar archivos excel
  descargarCSV(data: any[], nombreArchivo: String) {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${nombreArchivo}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

}
