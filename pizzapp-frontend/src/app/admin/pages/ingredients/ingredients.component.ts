import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';
import { AlertService } from 'src/app/services/alert.service';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.sass']
})
export class IngredientsComponent implements OnInit {
  items: Ingredient[] = []

  constructor(private service: IngredientService, private alert: AlertService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.service.find().subscribe(data => {
      this.items = data;
    })
  }

  delete(id: string){
    this.alert.preConfirmLoading('¿Esta seguro?', 'La acción eliminará el objeto.', () => new Promise((resolve, reject) => {
      this.service.delete(id).subscribe(result => {
        resolve('Elemento eliminado correctamente!')
        this.get()
      }, error => reject('No se pudo eliminar el objeto.'))
    }))
  }
}
