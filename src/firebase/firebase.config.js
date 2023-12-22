import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
    apiKey: "AIzaSyBQuRK0h_K9ihJPw_tar4BYR_exW3P7SHM",
    authDomain: "assifnment8.firebaseapp.com",
    projectId: "assifnment8",
    storageBucket: "assifnment8.appspot.com",
    messagingSenderId: "34515611622",
    appId: "1:34515611622:web:fbeda68aec1495a9243027"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth