import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EmailTemplate } from "@/pages/EmailTemplate.tsx";
import type { EmailProps } from "@/types/props.ts";

const testProps = {
	detailLink: "https://task.xcc.tw/dashboard/tasks",
	rows: [
		{
			taskID: "1234567890",
			systemCode: "ABCDEF123456",
			errSigns: [],
		},
		{
			taskID: "0987654321",
			systemCode: "654321ABCDEF",
			errSigns: [0, 1],
		},
		{
			taskID: "1122334455",
			systemCode: "AABBCCDDEEFF",
			errSigns: [],
		},
		{
			taskID: "5566778899",
			systemCode: "FFEEDDCCBBAA",
			errSigns: [0],
		},
	],
} satisfies EmailProps;

const dummy = document.createElement("div");

createRoot(document.getElementById("root") ?? dummy).render(
	<StrictMode>
		<EmailTemplate {...testProps} />
	</StrictMode>,
);
