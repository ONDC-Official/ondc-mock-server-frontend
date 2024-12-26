import { AGRI_SCENARIOS } from "./scenarios/agri-scenarios";
import { B2C_CITY_CODE } from "./b2c-city-code";
import { CITY_CODE } from "./city-code";
import { AGRI_DOMAINS, B2B_DOMAINS, B2C_DOMAINS, LOGISTICS_DOMAINS, RETAIL_DOMAINS, SERVICE_DOMAINS, SUBSCRIPTION_DOMAINS } from "./domains-list";
import { B2B_SCENARIOS, PRINT_MEDIA_SCENARIOS } from "./scenarios";

export const INITIATE_FIELDS = {
	search: [
		{
			name: "bpp_uri",
			placeholder: "Enter Your BPP URI",
			type: "text",
		},

		//DEPEND ON SERVICES AND RETAILS
		{
			name: "version",
			placeholder: "Select Use Case...",
			type: "select",
			domainDepended: true,
			options: {
				retail: RETAIL_DOMAINS,
				b2b: RETAIL_DOMAINS,
				b2c: RETAIL_DOMAINS,
			},
		},

		//DEPEND ON SELECTED SERVICES
		{
			name: "domain",
			placeholder: "Select Domain...",
			type: "select",
			domainDepended: true,
			options: {
				retail: B2B_DOMAINS,
				b2b: B2B_DOMAINS,
				services: SERVICE_DOMAINS,
				subscription: SUBSCRIPTION_DOMAINS,
				// services:SERVICE_DOMAINS_OBJECT,
				b2c: B2C_DOMAINS,
				logistics: LOGISTICS_DOMAINS,
				agri: AGRI_DOMAINS,
			},
		},
		//DEPENDS ON DOMAIN B2B LOGISTICS
		{
			name: "deliveryType",
			placeholder: "Select Delivery Type...",
			type: "select",
			domainDepended: true,
			options: {
				logistics: [],
			},
		},


		{
			name: "city",
			placeholder: "Select A City",
			type: "select",
			domainDepended: true,
			options: {
				retail: CITY_CODE,
				b2b: CITY_CODE,
				services: CITY_CODE,
				subscription: CITY_CODE,
				b2c: B2C_CITY_CODE,
				agri: CITY_CODE,
				agrioutput:CITY_CODE,
				logistics: [],
			},
		},
		{
			name: "scenario",
			placeholder: "Select Scenario",
			type: "select",
			domainDepended: true,
			options: {
				agri: AGRI_SCENARIOS["search"].map((each) => each.scenario),
				// agrioutput:AGRI_OUTPUT_SCENARIOS["search"].map((each)=>each.scenario)
			},
		},
	],

	select: [
		{
			name: "transactionId",
			placeholder: "Enter Your Transaction ID",
			type: "text",
		},
		{
			name: "scenario",
			placeholder: "Select Scenario",
			type: "select",
			domainDepended: true,
			options: {
				retail: B2B_SCENARIOS["select"].map((each) => each.scenario),
				subscription: PRINT_MEDIA_SCENARIOS["select"].map((each) => each.scenario),
				b2b: B2B_SCENARIOS["select"].map((each) => each.scenario),
				agri: AGRI_SCENARIOS["select"].map((each) => each.scenario),
				// agrioutput:AGRI_OUTPUT_SCENARIOS["select"].map((each)=>each.scenario)
			},
		},
	],

	init: [
		{
			name: "transactionId",
			placeholder: "Enter Your Transaction ID",
			type: "text",
		},
		{
			name: "scenario",
			placeholder: "Select Scenario",
			type: "select",
			domainDepended: true,
			options: {
				retail: B2B_SCENARIOS["init"].map((each) => each.scenario),
				// subscription:PRINT_MEDIA_SCENARIOS["init"].map((each) => each.scenario),
				// agrioutput:AGRI_OUTPUT_SCENARIOS["init"].map((each)=>each.scenario),
				b2b: B2B_SCENARIOS["init"].map((each) => each.scenario),
				// retail: B2B_SCENARIOS["init"].map((each) => each.scenario),
				// services: SERVICES_SCENARIOS["init"].map((each) => each.scenario),
			},
		},
	],

	confirm: [
		{
			name: "transactionId",
			placeholder: "Enter Your Transaction ID",
			type: "text",
		},
		{
			name: "scenario",
			placeholder: "Select Scenario",
			type: "select",
			domainDepended: true,
			options: {
				// services: SERVICES_SCENARIOS["confirm"].map((each) => each.scenario),
			},
		},
	],

	status: [
		{
			name: "transactionId",
			placeholder: "Enter Your Transaction ID",
			type: "text",
		},
		{
			name: "scenario",
			placeholder: "Select Scenario",
			type: "select",
			domainDepended: true,
			options: {
				// services: SERVICES_SCENARIOS["confirm"].map((each) => each.scenario),
			},
		},
	],

	update: [
		{
			name: "transactionId",
			placeholder: "Enter Your Transaction ID",
			type: "text",
		},
		{
			name: "update_target",
			placeholder: "Update Target",
			type: "select",
			domainDepended: true,
			options: {
				services: ["payments", "fulfillments", "items"],
				b2b: ["payments", "fulfillments", "items"],
				b2c: ["payments", "fulfillments", "items"],
				logistics: ["fulfillments"],
				agri: AGRI_SCENARIOS["update"].map((each) => each.scenario),
				// agrioutput:AGRI_OUTPUT_SCENARIOS["update"].map((each)=>each.scenario)
			},
		},
	],

	cancel: [
		{
			name: "transactionId",
			placeholder: "Enter Your Transaction ID",
			type: "text",
		},
		{
			name: "orderId",
			placeholder: "Enter Your Order ID",
			type: "text",
		},
		{
			name: "cancellationReasonId",
			placeholder: "Enter Your Cancellation Reason ID",
			type: "text",
			domainDepended: true,
			options: {
				services: ["001"],
				b2b: ["001"],
				b2c: ["001"],
				retail: ["001"],
				subscription: ["001"],
				logistics: ["TAT Breach, 007"],
				agri: ["010"] 

			},
		},
		{
			name: "scenario",
			placeholder: "Select Scenario",
			type: "select",
			domainDepended: true,
			options: {
				// agrioutput:AGRI_OUTPUT_SCENARIOS["cancel"].map((each)=>each.scenario)
				// services: SERVICES_SCENARIOS["confirm"].map((each) => each.scenario),
			},
		},
	],
};