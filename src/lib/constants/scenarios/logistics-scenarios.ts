export const LOGISTICS_SCENARIOS = {
	on_init: [
		{
			name: "KYC Success",
			scenario: "success",
		},
		{
			name: "KYC Failed",
			scenario: "kyc-failed",
		},
	],
	update: [
		{
			name: "RTS",
			scenario: "rts",
		},
		{
			name: "RTS with weight difference",
			scenario: "rts-weight-difference",
		},
	],
	on_update: [
		{
			name: "Slots provided.",
			scenario: "regular",
		},
		{
			name: "Slots with updated quote.",
			scenario: "updated-quote",
		},
	],
};
