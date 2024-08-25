import { Component, OnInit, inject } from '@angular/core';
import { SharedToolbarComponent } from './../shared-toolbar/shared-toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { User } from './../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [SharedToolbarComponent],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  private route = inject(ActivatedRoute); // Inject direkt als Eigenschaft
  firestore: Firestore = inject(Firestore);

  userId = '';
  user: User = new User();

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id') ?? '';
      console.log('Got ID', this.userId);
      this.getUser();
    });
  }

  getUser() {
    docData(doc(this.firestore, `users/${this.userId}`)).subscribe((user) => {
      this.user = new User(user);
      console.log(this.user);
    });
  }

  openAdressDialog() {
    
  }
}
