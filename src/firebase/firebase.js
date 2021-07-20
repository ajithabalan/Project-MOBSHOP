
  import app from 'firebase/app';
  import 'firebase/auth';
  import 'firebase/firestore';
  import 'firebase/storage';

 
  const firebaseConfig = {
    apiKey: "AIzaSyByg7n43sXrHeCWei67KRQneCJ6ShbsJAU",
    authDomain: "mobshop-react.firebaseapp.com",
    databaseURL: "https://mobshop-react-default-rtdb.firebaseio.com",
    projectId: "mobshop-react",
    storageBucket: "mobshop-react.appspot.com",
    messagingSenderId: "990026123775",
    appId: "1:990026123775:web:64a56afbb3c4032f3effca"

    
  };
  
  class Firebase {
    
    constructor() {
      app.initializeApp(firebaseConfig); //create firebase instance

      this.storage = app.storage();
      this.db = app.firestore();
      this.auth = app.auth();
    }
  createAccount = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  signInWithGoogle = () => this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());
  
  signOut = () => this.auth.signOut();

 

  addUser = (id, user) => { this.db.collection('users').doc(id).set(user)};
  getUser = id => this.db.collection('users').doc(id).get();

  //passwordUpdate = password => this.auth.currentUser.updatePassword(password);

  // changePassword = (currentPassword, newPassword) => {
  //   return new Promise((resolve, reject) => {
  //     this.reauthenticate(currentPassword).then(() => {
  //       const user = this. auth.currentUser;
  //       user.updatePassword(newPassword).then(()=> {
  //         resolve("Password Updated Successfully");
  //       }).catch(error => reject(error));
  //     }).catch(error => reject(error));
  //   });
  // };

  updateEmail = (currentPassword, newEmail) => {
    return new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword).then(() => {
        const user = this. auth.currentUser;
        user.updateEmail(newEmail).then(()=> {
          resolve("Email Updated Successfully");
        }).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  };
  
  updateProfile = (id, updates) => this.db.collection('users').doc(id).update(updates);

  reauthenticate = (currentPassword) => {
    const user = this.auth.currentUser;
    const cred = app.auth.EmailAuthProvider.credential(user.email, currentPassword);
    
    return user.reauthenticateWithCredential(cred);
  };
 
  onAuthStateChanged = () => { //onAuthStateChanged. Adds an observer for changes to the user's sign-in state
    return new Promise ((resolve, reject) => {
      this.auth.onAuthStateChanged((user)=>{
        if(user){
          return resolve(user);
        }else {
          return reject(new Error('Auth State Changed Failed'));
        }
      });
    });
  };
 setAuthPersistence = () => this.auth.setPersistence(app.auth.Auth.Persistence.LOCAL);
 //This means your app works as it would online by using the local data stored in the cache.


 
  // // --------

  getProducts = (lastRefKey) => {   //lastrefkey of product document
    let didTimeout = false;

    return new Promise(async (resolve, reject) => {
      if (lastRefKey) {
        try {
          const query = this.db.collection('products').orderBy(app.firestore.FieldPath.documentId()).startAfter(lastRefKey).limit(12);
          const snapshot = await query.get();
          const products = [];
          snapshot.forEach(doc => products.push({ id: doc.id, ...doc.data() }));
          const lastKey = snapshot.docs[snapshot.docs.length - 1];
          
          resolve({ products, lastKey });
        } catch (e) {
          reject(':( Failed to fetch products.');
        }
      } else {
        const timeout = setTimeout(() => {
          didTimeout = true;
          reject('Request timeout, please try again');
        }, 15000); 

        try {
          // getting the total count of data

          // adding shallow parameter for smaller response size
          // better than making a query from firebase
          // NOT AVAILEBLE IN FIRESTORE const request = await fetch(`${process.env.FIREBASE_DB_URL}/products.json?shallow=true`);
          
          const totalQuery = await this.db.collection('products').get();
          const total = totalQuery.docs.length;
          const query = this.db.collection('products').orderBy(app.firestore.FieldPath.documentId()).limit(12);
          const snapshot = await query.get();

          clearTimeout(timeout);
          if (!didTimeout) {
            const products = [];
            snapshot.forEach(doc => products.push({ id: doc.id, ...doc.data() }));
            const lastKey = snapshot.docs[snapshot.docs.length - 1];
            
            resolve({ products, lastKey, total});
          }
        } catch (e) {
          if (didTimeout) return;
          console.log('Failed to fetch products: An error occured while trying to fetch products or there may be no product ', e);
          reject(':( Failed to fetch products.');
        }
      }
    });
}
  
    //admin functions

  addProduct = (id, product) => this.db.collection('products').doc(id).set(product);

  generateKey = () => this.db.collection('products').doc().id;

  storeImage = async (id, folder, imageFile) => {  //for admin product image and user profile add
    const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
    const downloadURL = await snapshot.ref.getDownloadURL();
//save photo in the Firebase Storage and then take a url and write it to the Firebase database.
    return downloadURL;
  }

  deleteImage = id => this.storage.ref('products').child(id).delete();

  editProduct = (id, updates) => this.db.collection('products').doc(id).update(updates);

  removeProduct = id => this.db.collection('products').doc(id).delete();
}

const firebase = new Firebase();

export default firebase;




