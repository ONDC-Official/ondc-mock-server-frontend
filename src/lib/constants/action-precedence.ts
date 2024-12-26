export const ACTION_PRECENDENCE = [
	"search",
	"on_search",
	"select",
	"on_select",
	"init",
	"on_init",
	"confirm",
	"on_confirm",
	"status",
	"on_status",
	"update",
	"on_update",
	"cancel",
	"on_cancel",
];


export const NEXT_ACTION_LOGISTICS = {
	search: "on_search",
	on_search: "init",
	init: "on_init",
	on_init: "confirm",
	confirm: "on_confirm",
	on_confirm: "update",
	update: "on_update",
	status: "on_status",
	cancel: "on_cancel",
};

export const PREV_ACTION_LOGISTICS = {
	on_search: "search",
	init: "on_search",
	on_init: "init",
	confirm: "on_init",
	on_confirm: "confirm",
	status: "on_confirm",
	on_status: "status",
	cancel: "on_confirm",
	on_cancel: "cancel",
	update: "on_confirm",
	on_update: "update",
	agriServices: "Agri Services",
	healthcareServices: "HealthCare Services",
};

export const NEXT_ACTION = {
	search: "on_search",
	on_search: "select",
	select: "on_select",
	on_select: "init",
	init: "on_init",
	on_init: "confirm",
	confirm: "on_confirm",
	update: "on_update",
	status: "on_status",
	cancel: "on_cancel",
};

export const PREV_ACTION = {
	on_search: "search",
	select: "on_search",
	on_select: "select",
	init: "on_select",
	on_init: "init",
	confirm: "on_init",
	on_confirm: "confirm",
	status: "on_confirm",
	on_status: "status",
	cancel: "on_confirm",
	on_cancel: "cancel",
	update: "on_confirm",
	on_update: "update",
};

export const PREV_SUBSCRIPTION_EMANDATE_ACTION = {
	on_search: "search",
	select: "on_search",
	on_select: "select",
	init: "on_select",
	on_init: "init",
	on_status: "on_init",
	confirm: "on_status",
	on_confirm: "confirm",
	status:"on_confirm"	,
	on_update:"on_confirm",
	cancel: "on_confirm",
	on_cancel: "cancel",
	update: "on_confirm",
};

export const NEXT_SUBSCRIPTION_EMANDATE_ACTION = {
	search: "on_search",
	on_search: "select",
	select: "on_select",
	on_select: "init",
	init: "on_init",
	on_init: "on_status",
	on_status:"confirm",
	confirm: "on_confirm",
	on_confirm:"on_update",
	status: "on_status",
	cancel: "on_cancel",
};