import { Injectable } from '@nestjs/common';
import { firebaseAuthApp} from './config'

@Injectable()
export class FirebaseService {
    public app: any;
    constructor()  {
        this.app = firebaseAuthApp
    }
}
