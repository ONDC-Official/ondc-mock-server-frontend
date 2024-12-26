type CopyCallbackFn = () => void;

export const copyToClipboard = (body: object, callback?: CopyCallbackFn) => {
	navigator.clipboard
		.writeText(JSON.stringify(body))
		.then(() => {
			if (callback) callback();
		})
		.catch((err) => {
			console.log(err.message);
		});
};
