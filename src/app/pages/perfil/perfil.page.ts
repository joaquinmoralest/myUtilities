import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  editForm : FormGroup;
  id : any;

  constructor(
    private db: DbService,
    private router: Router,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.db.getPerfil(this.id).then(res => {
      this.editForm.setValue({
      nombre: res['nombre'],
      apellido_paterno: res['apellido_paterno'],
      apellido_materno: res['apellido_materno'],
      edad: res['edad'],
      genero: res['genero'],
      ocupacion: res['ocupacion'],
      fono: res['fono'],
      correo: res['correo'],
      deporte_favorito: res['deporte_favorito'],
      red_social: res['red_social']
      })
    })
  }

  ngOnInit() {
    
    this.editForm = this.formBuilder.group({
      nombre: [''],
      apellido_paterno: [''],
      apellido_materno: [''],
      edad: [''],
      genero: [''],
      ocupacion: [''],
      fono: [''],
      correo: [''],
      deporte_favorito: [''],
      red_social: ['']
    })
  }
  
  updatePerfil() {
    this.db.updatePerfil(this.id, this.editForm.value).then((res) => {
      console.log(res)
      this.router.navigate(['/mantenedor']);
    });
  }

}
