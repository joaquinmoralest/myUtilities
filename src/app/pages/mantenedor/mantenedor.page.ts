import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-mantenedor',
  templateUrl: './mantenedor.page.html',
  styleUrls: ['./mantenedor.page.scss'],
})
export class MantenedorPage implements OnInit {

  mainForm: FormGroup;
  Data: any[] = []

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res)
      {
        this.db.fetchPerfiles().subscribe(item => {
          this.Data = item
        })
      }
    });
    this.mainForm = this.formBuilder.group({
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
  storeData(){
    this.db.addPerfil(
      this.mainForm.value.nombre,
      this.mainForm.value.apellido_paterno,
      this.mainForm.value.apellido_materno,
      this.mainForm.value.edad,
      this.mainForm.value.genero,
      this.mainForm.value.ocupacion,
      this.mainForm.value.fono,
      this.mainForm.value.correo,
      this.mainForm.value.deporte_favorito,
      this.mainForm.value.red_social
    ).then((res) => {
      this.mainForm.reset();
    });
  }

  deletePerfil(id){
    this.db.deletePerfil(id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Perfil eliminado',
        duration: 3000
      });
      toast.present()
    });
  }

}
