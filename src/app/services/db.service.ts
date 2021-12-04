import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import {Perfil} from './perfil';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  private storage: SQLiteObject;
  private perfilList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlporter: SQLitePorter) {
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'perfil.db',
          location: 'default'
        })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
      });
    }

    dbState(){
      return this.isDbReady.asObservable();
    }

    fetchPerfiles(): Observable<Perfil[]> {
      return this.perfilList.asObservable();

    }
    getFakeData() {
      this.httpClient.get(
        'assets/script.sql',{responseType: 'text'}
      ).subscribe(data => {
        this.sqlporter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getPerfiles();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }
    //CRUD//
    //Obtener la lista de perfiles//
    getPerfiles(){
      return this.storage.executeSql('SELECT * FROM perfil', []).then(res => {
        const items: Perfil[] = [];
        if (res.rows.length > 0)
        {
          for(let i=0; i < res.rows.length; i++)
          {
            items.push({
              id: res.rows.item(i).id,
              foto: res.rows.item(i).foto,
              nombre: res.rows.item(i).nombre,
              apellido_materno: res.rows.item(i).apellido_materno,
              apellido_paterno: res.rows.item(i).apellido_paterno,
              edad: res.rows.item(i).edad,
              genero: res.rows.item(i).genero,
              ocupacion: res.rows.item(i).ocupacion,
              fono: res.rows.item(i).fono,
              correo: res.rows.item(i).correo,
              deporte_favorito: res.rows.item(i).deporte_favorito,
              red_social: res.rows.item(i).red_social
            });
          }
        }
        this.perfilList.next(items);

      });

    }

    //agregar perfil bd//
    addPerfil(foto, nombre, apellido_paterno, apellido_materno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social){
      const data= [foto, nombre, apellido_paterno, apellido_materno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social];
      return this.storage.executeSql('INSERT INTO perfil(FOTO, NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO,EDAD,GENERO,OCUPACION,FONO,CORREO,DEPORTE_FAVORITO,RED_SOCIAL) VALUES (?,?,?,?,?,?,?,?,?,?,?)', data)
      .then(res => {
        this.getPerfiles();
      });
    }

    //obtener un perfil//

    getPerfil(id): Promise<Perfil> {
      return this.storage.executeSql('SELECT * FROM perfil WHERE ID = ?',[id])
      .then(res => {
        return {
          id: res.rows.item(0).id,
          foto: res.rows.item(0).foto,
          nombre: res.rows.item(0).nombre,
          apellido_paterno: res.rows.item(0).apellido_paterno,
          apellido_materno: res.rows.item(0).apellido_materno,
          edad: res.rows.item(0).edad,
          genero: res.rows.item(0).genero,
          ocupacion: res.rows.item(0).ocupacion,
          fono: res.rows.item(0).fono,
          correo: res.rows.item(0).correo,
          deporte_favorito: res.rows.item(0).deporte_favorito,
          red_social: res.rows.item(0).red_social
        };
    });
  }
  //actualizar perfil//
  updatePerfil(id, perfil: Perfil){
    const data = [perfil.foto, perfil.nombre, perfil.apellido_paterno,perfil.apellido_materno,perfil.edad,perfil.genero,perfil.ocupacion,perfil.fono,perfil.correo,perfil.deporte_favorito,perfil.red_social];
    return this.storage.executeSql(`UPDATE perfil SET foto = ?, nombre = ?, apellido_paterno = ?, apellido_materno = ?, edad = ?, genero = ?, ocupacion = ?, fono = ?,
    correo = ?,deporte_favorito = ?, red_social = ? WHERE id = ${id}`,data)
    .then(_ => {
      this.getPerfiles();
    });
  }

  //eliminar un perfil//

  deletePerfil(id) {
    return this.storage.executeSql('DELETE FROM perfil WHERE id = ?',[id])
    .then(_ => {
      this.getPerfiles();
    });
  }

}
