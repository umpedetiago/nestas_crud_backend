import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as firebaseAccount from '../firebaseAccount.json';

@Injectable()
export class FirebaseService {
  firebaseApp: admin.app.App;

  constructor() {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(
        firebaseAccount as admin.ServiceAccount,
      ),
    });
  }
  async verifytoken(token: string): Promise<boolean> {
    try {
      await this.firebaseApp.auth().verifyIdToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }
}
