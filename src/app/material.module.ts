import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatIconModule, MatListModule, MatDialogModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatListModule, MatDialogModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatListModule, MatDialogModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }
