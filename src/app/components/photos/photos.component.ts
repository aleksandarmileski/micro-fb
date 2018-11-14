import { Component, OnInit } from '@angular/core';
import { TypicodeService } from './../../services/typicode.service';
import { Photo } from './../../data/photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  loading: boolean = true;
  photos: Photo[] = [];

  constructor(private typicodeService: TypicodeService) { }

  ngOnInit() {
    this.loadPhotos()
  }

  loadPhotos(page?) {
    this.loading = true;
    let start = page
      ? (page === 'next'
        ? this.typicodeService.startPhoto + this.typicodeService.limitPhoto
        : this.typicodeService.startPhoto - this.typicodeService.limitPhoto)
      : this.typicodeService.startPhoto

    this.typicodeService.fetchPhotos(start)
      .subscribe((photos: Photo[]) => {
        this.typicodeService.startPhoto = start
        if (photos) {
          this.loading = false;
          this.photos = photos
        }
      })
  }
  checkMinPhoto() { return this.typicodeService.startPhoto > 0 }
}
