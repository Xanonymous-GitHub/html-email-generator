import type React from "react";
import { EMAIL_COLORS, EMAIL_TABLE_STYLES } from "@/constants/emailStyles";
import { EMAIL_TABLE_TEXT } from "@/constants/emailText";
import type { TaskResultRowProps } from "@/types/email";
import {
	getFormattedErrorMessages,
	isSuccessResult,
} from "@/utils/errorMessages";

/**
 * Individual task result row with error handling
 * Displays task execution details with conditional styling
 */

export const TaskResultRow: React.FC<TaskResultRowProps> = ({
	rowNumber,
	row,
}) => {
	const isSuccess = isSuccessResult(row.errSigns);
	const errorMessages = getFormattedErrorMessages(row.errSigns);

	const errorColor = isSuccess ? undefined : EMAIL_COLORS.ERROR;

	return (
		<tr>
			<td style={EMAIL_TABLE_STYLES.TABLE_CELL}>{rowNumber}</td>
			<td style={EMAIL_TABLE_STYLES.TABLE_CELL}>{row.taskID}</td>
			<td style={EMAIL_TABLE_STYLES.TABLE_CELL_PRE_WRAP}>{row.systemCode}</td>
			<td
				style={{
					...EMAIL_TABLE_STYLES.TABLE_CELL_CENTERED,
					color: errorColor,
				}}
			>
				{isSuccess
					? EMAIL_TABLE_TEXT.RESULTS.SUCCESS
					: EMAIL_TABLE_TEXT.RESULTS.FAILURE}
			</td>
			<td
				style={{
					...EMAIL_TABLE_STYLES.TABLE_CELL,
					color: errorColor,
				}}
			>
				{errorMessages.length > 0 &&
					errorMessages.map((message) => <p key={message}>{message}</p>)}
			</td>
		</tr>
	);
};
