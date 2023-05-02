import { auth } from "../../utils/firebase";
import {
	FacebookAuthProvider,
	signInWithPopup,
} from "firebase/auth";

const provider = new FacebookAuthProvider();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const facebookSignIn = async () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const credential = FacebookAuthProvider.credentialFromResult(result);
            console.log(credential?.idToken);
		})
		.catch((error) => {
			console.log(error);
		});
};

export default facebookSignIn;
