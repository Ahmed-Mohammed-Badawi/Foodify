import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDpdvn43kWEEtHT1-CBvZzMytJewE2a7N0",
    authDomain: "foodify-b8773.firebaseapp.com",
    databaseURL: "https://foodify-b8773-default-rtdb.firebaseio.com",
    projectId: "foodify-b8773",
    storageBucket: "foodify-b8773.appspot.com",
    messagingSenderId: "819311478370",
    appId: "1:819311478370:web:0250f1659496d76d4cf33b",
    measurementId: "G-1TCZ3W47KY"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};