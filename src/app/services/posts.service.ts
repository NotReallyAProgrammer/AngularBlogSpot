import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestore:AngularFirestore) { }

   //Loading Featured Post in Firestore
   loadFeatured(){

    return this.firestore.collection('posts', ref => ref.where('isFeatured' , '==' , true).limit(4)).snapshotChanges().pipe(
       map(actions => {
        return actions.map(a => {

           const data = a.payload.doc.data();
           const id = a.payload.doc.id;

           return {id, data}
         })
       })
     )

   }

   //Loading latest post by date
   loadLatest(){

    return this.firestore.collection('posts', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
       return actions.map(a => {

          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, data}
        })
      })
    )

   }

   //Loading Post using category
   loadCategoryPost(categoryId:any){

    return this.firestore.collection('posts', ref => ref.where('category.categoryId' , '==' , categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
       return actions.map(a => {

          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, data}
        })
      })
    )

   }

   //Loading Single Post
   loadSinglePost(postId:any){

   return this.firestore.doc(`posts/${postId}`).valueChanges();

   }

   loadSimiliar(catId:any){

    return this.firestore.collection('posts', ref => ref.where('category.categoryId' , '==' , catId).limit(4)).snapshotChanges().pipe(
      map(actions => {
       return actions.map(a => {

          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, data}
        })
      })
    )
   }

   //Counting View of page
   countViews(postId:any){

    const viewCount = {
      views: firebase.default.firestore.FieldValue.increment(1)
    }

    this.firestore.doc(`posts/${postId}`).update(viewCount).then(() => {
      console.log('View count updated');

    })
   }
}
