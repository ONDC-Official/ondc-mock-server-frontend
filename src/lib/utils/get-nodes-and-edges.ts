import { Edge, MarkerType, Node } from "reactflow";
import { CustomNodeData } from "../../components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNodesAndEdges = (formattedResponse: any, theme: Theme) => {
	const { transaction_id, bpp_id, bpp_uri, bap_id, bap_uri } =
		formattedResponse.length > 1
			? formattedResponse[1].request.context
			: formattedResponse[0].request.context;

	const nodes: Node<CustomNodeData>[] = [
		{
			id: `${transaction_id}-buyer`,
			position: { x: 50, y: 0 },
			style: { width: "1000px", height: "80px" },
			data: { title: "Buyer App Node", subline: bap_id, uri: bap_uri },
			type: "custom",
		},
		{
			id: `${transaction_id}-seller`,
			position: { x: 50, y: 420 },
			style: { width: "1000px", height: "80px" },
			data: { title: "Seller App Node", subline: bpp_id, uri: bpp_uri },
			type: "custom",
		},
	];
	const edges: Edge[] = [];
	let initialX = 50;

	// Determine the domain (assume domain info is available in the response)
	// const domain = formattedResponse[0].domain?.toLowerCase() || "services"; // Default to "services" if domain is not provided

	// Choose the correct mapping based on the domain
	// const prevActionMapping =
	// 	domain === "logistics"
	// 		? PREV_ACTION_LOGISTICS
	// 		: formattedResponse &&
	// 		  formattedResponse[5] &&
	// 		  formattedResponse[5]?.request?.message?.order?.payments[0].tags[0]
	// 				.list[0].value
	// 		? PREV_SUBSCRIPTION_EMANDATE_ACTION
	// 		: PREV_ACTION;

	// formattedResponse = formattedResponse.sort(
	// 	(a: any, b: any) =>
	// 		new Date(a.request.context.timestamp) <
	// 		new Date(b.request.context.timestamp)
	// );
	formattedResponse = formattedResponse.sort(
		(a: any, b: any) =>
			new Date(a.request.context.timestamp).getTime() -
			new Date(b.request.context.timestamp).getTime()
	);

	formattedResponse.forEach(
		(
			log: {
				id?: string;
				action: string;
				request: {
					context: { message_id: string };
					message: { order: { ref_order_ids: string[] } };
				};
				timestamp: string;
			},
			index: number
		) => {
			const {
				request: {
					context: { message_id },
				},
			} = log;

			if (log.action.startsWith("on_")) {
				nodes.push({
					// id: `${transaction_id}-${log.action}-${message_id}`,
					// id: log.action === "on_confirm" && log.id ? `${transaction_id}-${log.action}-${message_id}-${log.id}` : `${transaction_id}-${log.action}-${message_id}`,
					id: `${transaction_id}-${log.action}-${message_id}-${log.id}-${log.timestamp}`,
					position: { x: initialX, y: 300 },
					data: { title: log.action, log: log },
					type: "custom",
				});
				initialX += 200;
			} else {
				nodes.push({
					id: `${transaction_id}-${log.action}-${message_id}-${log.id}-${log.timestamp}`,
					position: { x: initialX, y: 100 },
					data: { title: log.action, log: log },
					type: "custom",
				});
			}

			for (let i = index - 1; i >= 0; i--) {
				if (formattedResponse[i].id === log.id) {
					edges.push({
						id: `e-${transaction_id}-${formattedResponse[i].action}-${log.action}-${message_id}-${log.id}-${log.timestamp}`,
						source: `${transaction_id}-${formattedResponse[i].action}-${formattedResponse[i].request.context.message_id}-${log.id}-${formattedResponse[i].timestamp}`,
						target: `${transaction_id}-${log.action}-${message_id}-${log.id}-${log.timestamp}`,
						type: "custom",
						markerEnd: {
							type: MarkerType.Arrow,
							color: theme.palette.primary.dark,
						},
						animated: log.action.startsWith("on_"),
					});
					break;
				}
			}
		}
	);
	console.log(edges);
	console.log(nodes);
	console.log("EDGES LENGTH :::", edges.length);
	console.log("NODE LENGTH :::", nodes.length);

	return { nodes, edges };
};