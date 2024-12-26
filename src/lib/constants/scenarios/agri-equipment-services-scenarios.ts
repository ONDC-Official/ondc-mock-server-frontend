export const AGRI_EQUIPMENT_SERVICES_SCENARIOS = {
	on_select: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "No Equipment Avaliable",
			scenario: "no_equipment_avaliable",
		},
		{
			name: "Know the land's acres but unsure of the usage hours",
			scenario: "know_the_lands_acres_but_unsure_of_the_usage_hours",
		},
	],

	on_init: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "Availability Changes During The Transaction Journey",
			scenario: "availability_changes_during_the_transaction_journey",
		},
	],
	// confirm: [
	// 	{
	// 		name: "Service",
	// 		scenario: "service",
	// 	},
	// ],
	on_confirm: [
		// {
		// 	name: "Service",
		// 	scenario: "service",
		// },
	],
	on_status: [
		{
			name: "In Transit",
			scenario: "IN_TRANSIT",
		},
		{
			name: "Reached",
			scenario: "AT_LOCATION",
		},

		{
			name: "Completed",
			scenario: "COMPLETED",
		},
	],

	on_update: [
		{
			name: "Update Items",
			scenario: "items",
		},
		{
			name: "Requote(Payments)",
			scenario: "payments",
		},
	],
	on_cancel: [
		// {
		// 	name: "ACK",
		// 	scenario: "ack",
		// },
		// {
		// 	name: "Merchant",
		// 	scenario: "merchant",
		// },
	],
};