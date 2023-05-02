const setWithExpiry = (
	key: string,
	value: string | object,
	ttl: number
): void => {
	const now = new Date();

	const item = {
		value,
		expires: now.getTime() + ttl * 1000,
	};

	typeof window !== "undefined" &&
		localStorage.setItem(key, JSON.stringify(item));
};

const getWithExpiry = (key: string): null | string | object => {
	if (typeof window === "undefined") {
		return null;
	}

	const itemStr = localStorage.getItem(key);

	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);

	const now = new Date();

	if (item.expires < now.getTime()) {
		localStorage.removeItem(key);
		return null;
	}

	if (typeof window === "undefined") {
		return null;
	}

	return item.value;
};

export { setWithExpiry, getWithExpiry };