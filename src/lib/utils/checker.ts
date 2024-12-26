export const checker = (
	arr: string[],
	target: string[],
	domain?: string,
	version?: string
) => {
	if (
		domain === "services" ||
		domain === "logistics" ||
		domain === "agri" ||
		domain === "subscription"
	) {
		target = target.filter((item) => item !== "version");
	}

	if (domain === "retail" && version === "b2c") {
		target = target.filter((item) => item !== "scenario");
	}
	if (domain !== "logistics")
		target = target.filter((item) => item !== "deliveryType");

	if (domain === "agrioutput")
		target = target.filter((item) => item !== "version");
	console.log("array",arr,target,domain)
	return target.every((v) => arr.includes(v));
};
