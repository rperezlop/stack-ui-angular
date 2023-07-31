import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../../services/alldata.service';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  constructor(private serviceData: AlldataService) { }

  data: any = [];

  ngOnInit(): void {
    this.serviceData.getAllData('https://rickandmortyapi.com/api/character').subscribe(itemData => {
      this.data = itemData.results;
      console.log(this.data);
    })
  }

  descargarCSV() {
    this.serviceData.descargarCSV(this.data, 'Datos')
  }

}

