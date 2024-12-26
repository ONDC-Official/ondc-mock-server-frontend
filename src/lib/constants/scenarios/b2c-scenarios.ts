export const B2C_SCENARIOS = {
	on_select: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "Non Serviceable",
			scenario: "non-serviceable",
		},
		{
			name: "Quantity Unavailable",
			scenario: "quantity-unavailable",
		},
	],
	on_status: [
		{
			name: "BPP Payment-Success",
			scenario: "bpp-payment",
		},
		{
			name: "BPP Payment-Error",
			scenario: "bpp-payment-error",
		},
		{
			name: "Delivered",
			scenario: "delivered",
		},
		{
			name: "Out for Delivery",
			scenario: "out-for-delivery",
		},
		{
			name: "Pickup Up",
			scenario: "picked-up",
		},
		{
			name: "Proforma Invoice",
			scenario: "proforma-invoice",
		},
		{
			name: "Self Pickup",
			scenario: "self-picked-up",
		},
	],
};
