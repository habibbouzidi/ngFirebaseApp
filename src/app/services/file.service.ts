import { Injectable, inject } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { FileMeta } from '../models/fileMeta';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  firestore: Firestore = inject(Firestore);
  constructor(private fireStorage: AngularFireStorage) {}

  async saveFile(file: FileMeta){
    const fileMeta = {
      name: file.name,
      size: file.size,
      url: file.url
    }

    const docRef = await addDoc(collection(this.firestore, "Uploads"), fileMeta);
    return docRef;
  }

  async getAllFiles(){
    const querySnapshot = await getDocs(collection(this.firestore, "Uploads"));
    return querySnapshot;
  }

  async deleteFile(fid: string, fname: string) {
    this.fireStorage.ref('/Uploads/'+fname).delete();
    return await deleteDoc(doc(this.firestore, "Uploads", fid));
  }
}
