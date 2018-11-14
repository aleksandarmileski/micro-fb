import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/data/photo.interface';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  photo: Photo;
  adding: boolean = false;
  added: boolean = false;

  constructor(private typicodeService: TypicodeService) {
    this.newPhoto()
  }

  ngOnInit() {
  }

  newPhoto() {
    this.photo = {
      title: '',
      url: ''
    }
  }

  onSubmit(photoForm) {
    let photoData = photoForm.value;
    this.adding = true;
    this.typicodeService.createPhoto(photoData)
      .subscribe(response => {
        this.adding = false;
        this.added = true;
      })
  }

  addNew() {
    this.newPhoto();
    this.adding = false;
    this.added = false;
  }

}
