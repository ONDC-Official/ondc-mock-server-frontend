export const B2B_SCENARIOS = {
	select: [
		{
			name: "RFQ",
			scenario: "rfq", // Select Domestic
		},
		{
			name: "Non-RFQ",
			scenario: "non-rfq",
		},
	],

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
	init: [
		{
			name: "On Fulfillment",
			scenario: "on-fulfillment", //default
		},
		{
			name: "Prepaid Payment Collected By BPP",
			scenario: "prepaid-bpp-payment",
		},
		{
			name: "Prepaid Payment Collected By BAP",
			scenario: "prepaid-bap-payment",
		},
	],
	on_confirm: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "Cancelled",
			scenario: "cancelled",
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
	on_update: [
		{
			name: "Fulfillments",
			scenario: "fulfillment", // default
		},
		{
			name: "Prepaid BAP",
			scenario: "prepaid-bap",
		},
		{
			name: "Prepaid",
			scenario: "prepaid",
		},
	],
};