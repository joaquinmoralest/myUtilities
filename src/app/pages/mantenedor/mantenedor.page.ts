import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'app-mantenedor',
  templateUrl: './mantenedor.page.html',
  styleUrls: ['./mantenedor.page.scss'],
})
export class MantenedorPage implements OnInit {

  mainForm: FormGroup;
  Data: any[] = [];
  image: any;

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router,
    public camera: typeof Camera
  ) {}

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res)
      {
        this.db.fetchPerfiles().subscribe(item => {
          this.Data = item;
        });
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
      red_social: [''],
      foto: ['']
    });
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
      this.mainForm.value.red_social,
      this.mainForm.value.foto
    ).then((res) => {
      this.mainForm.reset();
    });
  }

  deletePerfil(id){
    this.db.deletePerfil(id).then(async (res) => {
      const toast = await this.toast.create({
        message: 'Perfil eliminado',
        duration: 3000
      });
      toast.present();
    });
  }

  // sacarCamara() {
  //   this.camera.getPicture({
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     sourceType: this.camera.PictureSourceType.CAMERA,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     targetHeight: 300,
  //     targetWidth: 300,
  //     saveToPhotoAlbum: true,
  //     allowEdit: false,
  //   }).then(resultado => {
  //     this.image = 'data:image/jpeg;base64,' + resultado;
  //     this.mainForm.value.foto = this.image;
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }

}
