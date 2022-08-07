import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnimaisService } from '../animais.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {
  formalarioAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(
    private animaisService: AnimaisService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formalarioAnimal = this.formBuilder.group({
      // file: primeiro campo
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const allowComments = this.formalarioAnimal.get('allowComments')?.value ?? false;
    const description = this.formalarioAnimal.get('description')?.value ?? '';

    this.animaisService.upload(description, allowComments, this.file).pipe(
      // finalize: método que finaliza
      finalize(() => {
        this.router.navigate(['animais'])
      })
    ).subscribe((event: HttpEvent<any>) => {
      if (event.type == HttpEventType.UploadProgress) {
        const total = event.total ?? 1;
        this.percentualConcluido = Math.round(100 * (event.loaded / total));
      }
    }, (errors) => console.log(errors));
  }

  gravaArquivo(arquivo: any): void {
    const [file] = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }

}
