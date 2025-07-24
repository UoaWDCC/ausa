import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const app = initializeApp();

export const auth = getAuth(app);