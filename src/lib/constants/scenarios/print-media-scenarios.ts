export const PRINT_MEDIA_SCENARIOS = {
	select: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "Subscription with EMandate",
			scenario: "subscription-with-eMandate",
		},

		{
			name: "Single Order Offline without Subscription",
			scenario: "single-order-offline-without-subscription",
		},
		{
			name: "Single Order Online without Subscription",
			scenario: "single-order-online-without-subscription",
		},
	],

	on_select: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "Subscription with EMandate",
			scenario: "subscription-with-eMandate",
		},
		{
			name: "Subscription with Manual Payments",
			scenario: "subscription-with-manual-payments",
		},
		{
			name: "Single Order Offline without Subscription",
			scenario: "single-order-offline-without-subscription",
		},
		{
			name: "Single Order Online without Subscription",
			scenario: "single-order-online-without-subscription",
		},
		{
			name: "Subscription with Full Payments",
			scenario: "subscription-with-full-payments",
		},
	],

	init: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "Subscription with EMandate",
			scenario: "subscription-with-eMandate",
		},
		{
			name: "Subscription with Manual Payments",
			scenario: "subscription-with-manual-payments",
		},
		{
			name: "Single Order Offline without Subscription",
			scenario: "single-order-offline-without-subscription",
		},
		{
			name: "Single Order Online without Subscription",
			scenario: "single-order-online-without-subscription",
		},
		{
			name: "Subscription with Full Payments",
			scenario: "subscription-with-full-payments",
		},
	],
	on_init: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "Subscription with Manual Payments",
			scenario: "subscription-with-manual-payments",
		},
		{
			name: "Subscription with Full Payments",
			scenario: "subscription-with-full-payments",
		},
	],

	on_confirm: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "Child Order",
			scenario: "child-order",
		},
	],

	on_status: [
		{
			name: "Default",
			scenario: "default",
		},

		{
			name: "Pending",
			scenario: "pending",
		},
		{
			name: "Packed",
			scenario: "packed",
		},
		{
			name: "Agent Assigned",
			scenario: "agent-assigned",
		},
		{
			name: "Out for Delivery",
			scenario: "out-for-delivery",
		},
		{
			name: "Order Picked Up",
			scenario: "order-picked-up",
		},
		{
			name: "Completed",
			scenario: "completed",
		},
	],

	on_update: [
		{
			name: "Subscription Transffered",
			scenario: "subscription-transffered", // default
		},
		{
			name: "Paymment Confirmation",
			scenario: "payment-confirmation",
		},
		{
			name: "Parent Order Linked To Child Order",
			scenario: "parent-order-linked-to-child-order",
		},
		{
			name: "Subscription Paused",
			scenario: "subscription paused",
		},
	],
};