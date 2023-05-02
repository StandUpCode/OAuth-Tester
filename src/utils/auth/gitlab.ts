
const generateAuthGitlabRequest = (action: string) => {
	const client_id = import.meta.env.VITE_GITLAB_OAUTH_CLIENT_ID;
	const redirect_uri =
		import.meta.env.VITE_GITLAB_REDIRECT_URI 
	const scope = "read_user+profile";

	const url = `https://gitlab.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&state=${state}&scope=${scope}`;
	console.log(url);
	return url;
};

export { generateAuthGitlabRequest };
