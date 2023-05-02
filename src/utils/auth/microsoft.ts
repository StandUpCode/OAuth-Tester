import { OAuthProvider } from "firebase/auth";

import { auth } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";

const provider = new OAuthProvider("microsoft.com");
provider.setCustomParameters({
    // Force re-consent.
    prompt: 'consent',
    // Target specific email with login hint.
    login_hint: 'user@firstadd.onmicrosoft.com'
  });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const microsoftSignIn = async () => {
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

export default microsoftSignIn;
