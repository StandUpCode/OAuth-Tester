import { auth } from "../../utils/firebase";
import {
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const googleSignIn = async () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log(credential?.idToken);
		})
		.catch((error) => {
			console.log(error);
		});
};

export default googleSignIn;
