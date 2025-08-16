import type React from "react";
import type { TaskExecutionResultRow } from "../types/props.ts";
import { TableRow } from "./TableRow";

export const ResultTable: React.FC<{ rows: TaskExecutionResultRow[] }> = ({
	rows,
}) => (
	<table
		role="presentation"
		width="100%"
		style={{
			borderCollapse: "collapse",
			border: "1px solid #ccc",
			margin: "10px 0",
		}}
	>
		<thead style={{ backgroundColor: "#f5f5f5" }}>
			<tr>
				{["#", "Task ID", "系統碼", "執行結果", "錯誤訊息"].map((h) => (
					<th
						key={h}
						style={{
							padding: 8,
							border: "1px solid #ccc",
							textAlign: h === "執行結果" ? "center" : "left",
						}}
					>
						{h}
					</th>
				))}
			</tr>
		</thead>
		<tbody>
			{rows.map((r, i) => (
				<TableRow key={r.taskID} rowNum={i + 1} row={r} />
			))}
		</tbody>
	</table>
);
