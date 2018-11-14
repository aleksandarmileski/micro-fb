import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Photo } from './../../data/photo.interface';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { TypicodeService } from '../../services/typicode.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photo$: Observable<Photo>;
  editTitle: boolean = false;
  deleted: boolean = false;
  deleting: boolean = false;

  constructor(
    private typicodeService: TypicodeService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.photo$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.typicodeService.fetchPhoto(params.get('id')))
      );
  }

  changeTitle() {
    this.editTitle = true;
  }

  saveChanges(photo) {
    this.editTitle = false;
    this.typicodeService.updatePhoto(photo)
      .subscribe(() => { })
  }

  deletePhoto(photo) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, { width: '80%' });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {

          this.deleting = true;
          this.photo$ = null;

          this.typicodeService.deletePhoto(photo.id)
            .subscribe(response => {

              this.deleting = false;
              this.deleted = true;

              setTimeout(() => {
                this.router.navigate(['/photos'])
              }, 2000)
            })
        }
      });
  }
}
