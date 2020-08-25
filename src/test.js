import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('qh20f8eFdF7IOFIRC4GS').collection('cartItems').doc('c29UVPSJG70eK1AcNx7P');
firestore.doc('/users/qh20f8eFdF7IOFIRC4GS/cartItems/c29UVPSJG70eK1AcNx7P');
firestore.collection('/users/qh20f8eFdF7IOFIRC4GS/cartItems');
