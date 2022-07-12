import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGfRoO2D7_DqAM8A0nYX4V29G9ffmqHU4",
  authDomain: "littleclothes-26b5f.firebaseapp.com",
  projectId: "littleclothes-26b5f",
  storageBucket: "littleclothes-26b5f.appspot.com",
  messagingSenderId: "637586192428",
  appId: "1:637586192428:web:44d6def063c328e7c0f989",
  databaseURL: "https://littleclothes-26b5f-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig) ;

export {app}
