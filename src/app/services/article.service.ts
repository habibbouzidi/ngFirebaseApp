import { Injectable, inject } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  firestore: Firestore = inject(Firestore);

  async getAllArticles(){
    const querySnapshot = await getDocs(collection(this.firestore, "article"));

    return querySnapshot;
  }

  async addArticle(article: Article){
    const docRef = await addDoc(collection(this.firestore, "article"), article);
    return docRef.id;
  }

  async updateArticle(data: any, aid: string) {
    const id = doc(this.firestore, "article", aid);
    return await updateDoc(id, data);
  }

  async deleteArticle(aid: string) {
    return await deleteDoc(doc(this.firestore, "article", aid));
  }
}
