import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private camera: Camera) {
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  pessoas = [];
  imc = [];

  cadastrar(nome, email, peso, altura, foto, fotoTirada){
    this.pessoas.push({nome: nome, email: email, peso: peso, altura: altura, foto: foto, fotoTirada: fotoTirada});
    console.log(this.pessoas);
  }

  calcularIMC(nome, peso,altura){
    const resultado = altura * altura;
    const calculo = peso/resultado;
    this.imc.push({nome:nome, resultado:calculo.toFixed(6)});
    console.log(resultado)
    console.log(this.imc)
  }

  tirarFoto(){
    this.camera.getPicture(this.options).then((imageData) =>{
      let base64Image = 'data:image/jpeg;base64,' + imageData
    }).catch(err => {
      console.log(err);
    })
  }

  listaPessoas(){
    console.log(this.pessoas);
    return this.pessoas.keys();
  }
}
