import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBj4K4PET6-ttkRi6a9YYfluhkXBR7MoSE",
    authDomain: "crown-clothing-database-4e483.firebaseapp.com",
    projectId: "crown-clothing-database-4e483",
    storageBucket: "crown-clothing-database-4e483.appspot.com",
    messagingSenderId: "440025510189",
    appId: "1:440025510189:web:0debab70e58283ef5fa3a4"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInPopup = () => signInWithPopup(auth, provider);

export const firestore_db = getFirestore();
export const UserDocfromAuth = async (userAuth) => {
    const userDocReference = doc(firestore_db, 'users', userAuth.uid)
    console.log(userDocReference);

    const userTemp = await getDoc(userDocReference);
    console.log(userTemp);
    console.log(userTemp.exists());

    if (!userTemp.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocReference, {
                displayName, 
                email, 
                createdAt,
            });
        } catch (error) {
            console.log('Error in user creation', error.message);
        
        }
        
    }

    return userDocReference;
};