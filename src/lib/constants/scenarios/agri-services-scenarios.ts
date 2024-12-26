export const AGRI_SERVICES_SCENARIOS = {
	// select: [
	// 	{
	// 		name: "Selections",
	// 		scenario: "selection",
	// 	},
	// 	{
	// 		name: "Customization",
	// 		scenario: "customization",
	// 	},
	// ],
	on_select: [
		{
			name: "Default",
			scenario: "default",
		},
		{
			name: "Schedule Confirmed",
			scenario: "schedule_confirmed",
		},
		{
			name: "Schedule Rejected",
			scenario: "schedule_rejected",
		},
	],
	// init: [
	// 	{
	// 		name: "Service",
	// 		scenario: "service",
	// 	},
	// ],
	on_init: [],
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
			name: "Collected By Agent",
			scenario: "COLLECTED_BY_AGENT",
		},
		{
			name: "Received At Lab",
			scenario: "RECEIVED_AT_LAB",
		},
		{
			name: "Test Completed",
			scenario: "TEST_COMPLETED",
		},
		{
			name: "Report Generated",
			scenario: "REPORT_GENERATED",
		},
		{
			name: "Report Shared",
			scenario: "REPORT_SHARED",
		},
	],

	on_update: [
		// {
		// 	name: "Update Items",
		// 	scenario: "items",
		// },
		// {
		// 	name: "Reschedule",
		// 	scenario: "fulfillments",
		// },
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