import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('hVKKV4xkbCtujPrTL84d').collection('cartItems').doc('i9h3BK7BIyC20CL9J4nZ');
firestore.doc('/users/hVKKV4xkbCtujPrTL84d/cartItems/i9h3BK7BIyC20CL9J4nZ');
firestore.collection('/users/hVKKV4xkbCtujPrTL84d/cartItems');
