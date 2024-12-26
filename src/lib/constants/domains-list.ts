export const SUPPORTED_DOMAINS = [
	"B2B",
	"B2C Exports",
	"SERVICES",
	"AGRI SERVICES",
	"HEALTHCARE SERVICES",
	"AGRI EQUIPMENT HIRING",
	"BID AND AUCTION",
	"LOGISTICS",
	"PRINT MEDIA (SUBSCRIPTION)"
];


export const SERVICES_DOMAINS = {
	SERVICE: "ONDC:SRV11",
	HEALTHCARE_SERVICES: "ONDC:SRV13",
	AGRI_SERVICES: "ONDC:SRV14",
	EQUIPMENT_HIRING_SERVICES: "ONDC:SRV17",
	BID_AUCTION_SERVICE: "ONDC:SRV18",
	PRINT_MEDIA: "ONDC:MEC10"
};

export const LOGISTICS_DOMAINS_OBJECT = {
	DOMESTIC: "ONDC:LOG10",
	INTERNATIONAL: "ONDC:LOG11",
};

export const SERVICE_DOMAINS = [
	"ONDC:SRV11",
	"ONDC:SRV13",
	"ONDC:SRV14",
	"ONDC:SRV17",
	"ONDC:SRV18",
];

export const LOGISTICS_DOMAINS = ["ONDC:LOG10", "ONDC:LOG11"];

export const AGRI_DOMAINS = ["ONDC:AGR10", "ONDC:AGR11"];
export const B2C_DOMAINS = ["ONDC:RET10", "ONDC:RET12"];


export const SUBSCRIPTION_DOMAINS = [
	"ONDC:MEC10"
]


export const RETAIL_DOMAINS = ["b2b", "b2c"];

export const B2B_DOMAINS = [
	"ONDC:RET1A",
	"ONDC:RET1B",
	"ONDC:RET1C",
	"ONDC:RET1D",
	"ONDC:RET10",
	"ONDC:RET12",
	"ONDC:RET13",
	"ONDC:RET14",
];

export const ALL_DOMAINS = {
	Retail: RETAIL_DOMAINS,
	Services: SERVICE_DOMAINS,
	Subscription: SUBSCRIPTION_DOMAINS,
	Logistics: LOGISTICS_DOMAINS,
	Agri: AGRI_DOMAINS,
  B2B: B2B_DOMAINS,
};

export const SWAGGER_DOMAIN_FIELDS = {
	name: "service_name",
	placeholder: "Select Service...",
	type: "select",
	domainDepended: false,
	options: ALL_DOMAINS,
};

export const DOMAINS = {
	b2b: "B2B",
	services: "Services - Home Services",
	agriServices: "Agri Services",
	healthcareServices: "HealthCare Services",
	logistics: "LOGISTICS",
};