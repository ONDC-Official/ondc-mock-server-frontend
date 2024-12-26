export const AGRI_SCENARIOS = {
  search: [
    {
      name: "Default",
      scenario: "default",
    },
    {
      name: "Incremental Pull.",
      scenario: "incremental-pull", // Select Domestic
    },
  ],
  on_search: [
    {
      name: "Default",
      scenario: "default",
    },
    {
      name: "Incremental Pull.",
      scenario: "incremental-pull", // Select Domestic
    },
  ],
  select: [
    {
      name: "Default",
      scenario: "default",
    },
    {
      name: "Multi Items Successfull Order",
      scenario: "multi-items-successfull-order",
    },
  ],
  on_select: [
    {
      name: "Default",
      scenario: "default",
    },
    {
      name: "Multi Items Successfull Order",
      scenario: "multi-items-successfull-order",
    },
    {
      name: "Item_Out_Of_Stock",
      scenario: "item-out-of-stock",
    },
  ],
  on_status: [
    {
      name: "Default",
      scenario: "default",
    },
    {
      name: "Accepted",
      scenario: "accepted",
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
      name: "Order Picked Up",
      scenario: "order-picked-up",
    },
    {
      name: "Out for Delivery",
      scenario: "out-for-delivery",
    },
    {
      name: "Delivery",
      scenario: "delivery",
    },
  ],
  update: [
    // {
    //  name:"update-items",
    //  scenario:"items"
    // },
    {
      name: "liquidate",
      scenario: "liquidate",
    },
    {
      name: "Reject",
      scenario: "reject",
    },
  ],
  on_update: [
    {
      name: "Default",
      scenario: "default",
    },
    {
      name: "Reject",
      scenario: "reject", 
    },
  ],
};