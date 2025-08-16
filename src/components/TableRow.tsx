import type React from "react";
import { serialToErrorMsg } from "../types/errorMsgs.ts";
import type { TaskExecutionResultRow } from "../types/props.ts";

export const TableRow: React.FC<{
	rowNum: number;
	row: TaskExecutionResultRow;
}> = ({ rowNum, row }) => {
	const isSuccess = row.errSigns.length === 0;

	const errorMessages = row.errSigns.map(
		(sign) => serialToErrorMsg.get(sign) ?? "未知的錯誤",
	);

	return (
		<tr>
			<td style={tdStyle}>{rowNum}</td>
			<td style={tdStyle}>{row.taskID}</td>
			<td style={{ ...tdStyle, whiteSpace: "pre-wrap" }}>{row.systemCode}</td>
			<td
				style={{
					...tdStyle,
					color: isSuccess ? undefined : "#ff0000",
					textAlign: "center",
				}}
			>
				{isSuccess ? "成功" : "失敗"}
			</td>
			<td
				style={{
					...tdStyle,
					color: isSuccess ? undefined : "#ff0000",
				}}
			>
				{!isSuccess
					? errorMessages.map((msg, i) => (
							<p key={msg + i.toString()}>{`• ${msg}`}</p>
						))
					: ""}
			</td>
		</tr>
	);
};

const tdStyle: React.CSSProperties = {
	padding: 8,
	border: "1px solid #ccc",
};
