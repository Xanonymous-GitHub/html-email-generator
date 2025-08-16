import type React from "react";
import {
	EMAIL_LAYOUT_DIMENSIONS,
	EMAIL_TABLE_STYLES,
} from "@/constants/emailStyles";
import { EMAIL_TABLE_TEXT } from "@/constants/emailText";
import type { TaskResultsTableProps } from "@/types/email";
import { TaskResultRow } from "./TaskResultRow";

/**
 * Task results table with headers and result rows
 * Displays tabular data of task execution results
 */

const TABLE_HEADERS = [
	EMAIL_TABLE_TEXT.HEADERS.ROW_NUMBER,
	EMAIL_TABLE_TEXT.HEADERS.TASK_ID,
	EMAIL_TABLE_TEXT.HEADERS.SYSTEM_CODE,
	EMAIL_TABLE_TEXT.HEADERS.EXECUTION_RESULT,
	EMAIL_TABLE_TEXT.HEADERS.ERROR_MESSAGE,
] as const;

export const TaskResultsTable: React.FC<TaskResultsTableProps> = ({ rows }) => (
	<table
		role="presentation"
		width={EMAIL_LAYOUT_DIMENSIONS.TABLE_WIDTH}
		style={EMAIL_TABLE_STYLES.RESULTS_TABLE}
	>
		<thead style={EMAIL_TABLE_STYLES.TABLE_HEADER}>
			<tr>
				{TABLE_HEADERS.map((header) => (
					<th
						key={header}
						style={{
							...EMAIL_TABLE_STYLES.TABLE_HEADER_CELL,
							textAlign:
								header === EMAIL_TABLE_TEXT.HEADERS.EXECUTION_RESULT
									? "center"
									: "left",
						}}
					>
						{header}
					</th>
				))}
			</tr>
		</thead>
		<tbody>
			{rows.map((row, index) => (
				<TaskResultRow key={row.taskID} rowNumber={index + 1} row={row} />
			))}
		</tbody>
	</table>
);
