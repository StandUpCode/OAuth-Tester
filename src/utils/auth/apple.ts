import { OAuthProvider } from "firebase/auth";

import { auth } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";

const provider = new OAuthProvider("apple.com");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appleSignIn = async () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const credential = OAuthProvider.credentialFromResult(result); 

			console.log(credential?.idToken);
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The credential that was used.
			const credential = OAuthProvider.credentialFromError(error);

			console.log(errorCode, errorMessage, email, credential);
		});
};

export default appleSignIn;
