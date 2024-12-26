export const SERVICES_SCENARIOS = {

	on_select: [
		{
			name: "Schedule Confirmed",
			scenario: "schedule_confirmed",
		},
		{
			name: "Schedule Rejected",
			scenario: "schedule_rejected",
		},
	],
	on_init: [
		{
			name: "Service",
			scenario: "service",
		},
	],
	on_confirm: [
		{
			name: "Service",
			scenario: "service",
		},
	],

	on_status: [
		{
			name: "Completed",
			scenario: "completed",
		},
		{
			name: "In Transit",
			scenario: "in-transit",
		},
		{
			name: "Reached Re-OTP",
			scenario: "reached-re-otp",
		},
		{
			name: "Reached",
			scenario: "reached",
		},
		{
			name: "Service Started",
			scenario: "service-started",
		},
	],

	on_update: [
		{
			name: "Requote",
			scenario: "requote",
		},
		{
			name: "Reschedule",
			scenario: "reschedule",
		},
	],

	on_cancel: [
		{
			name: "ACK",
			scenario: "ack",
		},
		{
			name: "Merchant",
			scenario: "merchant",
		},
	],
};