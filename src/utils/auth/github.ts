import { setWithExpiry } from "../../utils/localstorage";
import { nanoid } from "nanoid";

const generateAuthGithubRequest = (action: string) => {
	const client_id = import.meta.env.VITE_GITHUB_OAUTH_CLIENT_ID;
	const redirect_uri =
		import.meta.env.VITE_GITHUB_REDIRECT_URI 
	const state = nanoid();
	const scope = "user%20repo";

	setWithExpiry("line-state", state, 60 * 5);

	const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`;
	console.log(url);
	return url;
};

export { generateAuthGithubRequest };
