import { Component, inject } from '@angular/core';
import { SharedToolbarComponent } from './../shared-toolbar/shared-toolbar.component';
import { User } from './../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [SharedToolbarComponent],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  firestore: Firestore = inject(Firestore);
  loading = false;
  dialogRef: MatDialogRef<DialogAddUserComponent> = inject(MatDialogRef);

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);

    const docRef = collection(this.firestore, 'users'); // Create the colletion 'users' in firestore
    addDoc(docRef, this.user.toJSON()).then((result: any) => {
      console.log(result);
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
