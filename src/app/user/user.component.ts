import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from './../dialog-add-user/dialog-add-user.component';
import { SharedToolbarComponent } from './../shared-toolbar/shared-toolbar.component';
import { User } from './../../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SharedToolbarComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user = new User();
  firestore: Firestore = inject(Firestore);
  allUsers: User[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');

    collectionData(usersCollection, { idField: 'idCostumer' }).subscribe(
      (changes: any) => {
        console.log('Received changes from DB', changes);
        this.allUsers = changes;
      }
    );
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
