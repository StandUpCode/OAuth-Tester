interface IObjectKey {
	[key: string]: string;
}

export interface LineAccessTokenBody extends IObjectKey {
	grant_type: string;
	code: string;
	redirect_uri: string;
	client_id: string;
	client_secret: string;
	code_verifier: string;
}

export interface getProfileBody extends IObjectKey {
	id_token: string;
	client_id: string;
}

export interface lineAccessTokenResponse {
	access_token: string;
	expires_in: number;
	id_token: string;
	refresh_token: string;
	scope: string;
	token_type: string;
}