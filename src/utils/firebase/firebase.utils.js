import { initializeApp } from 'firebase/app';
import { onAuthStateChanged, getAuth, signInWithEmailAndPassword, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore';

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
export const signInRedirect = () => signInWithRedirect(auth, provider);///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const firestore_db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(firestore_db, collectionKey);
    const batch = writeBatch(firestore_db);

    objectsToAdd.forEach((object) => {
        const docRefCollection = doc(collectionRef);
        batch.set(docRefCollection, object);
    });

    await batch.commit();
    console.log("Batch commit done");
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(firestore_db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data()
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}

export const UserDocfromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
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
                ...additionalInfo
            });
        } catch (error) {
            console.log('Error in user creation', error.message);
        
        }
        
    }

    return userDocReference;
};

export const authUserEmailPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const authUserEmailPasswordSignIn = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
}