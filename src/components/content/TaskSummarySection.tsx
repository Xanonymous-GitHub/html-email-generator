import type React from "react";
import {
	EMAIL_COLORS,
	EMAIL_CONTENT_STYLES,
} from "../../constants/emailStyles";
import { EMAIL_CONTENT_TEXT, EMAIL_LINK_TEXT } from "../../constants/emailText";
import { EMAIL_URLS } from "../../constants/emailUrls";
import type { TaskSummarySectionProps } from "../../types/email";
import { EmailLink } from "../base/EmailLink";

/**
 * Task summary section with success/failure counts and instructions
 * Displays execution summary and user instructions for next steps
 */

export const TaskSummarySection: React.FC<TaskSummarySectionProps> = ({
	successCount,
	failureCount,
}) => (
	<>
		<p style={EMAIL_CONTENT_STYLES.SYSTEM_NOTICE}>
			{EMAIL_CONTENT_TEXT.SYSTEM_NOTICE}
		</p>
		<p style={EMAIL_CONTENT_STYLES.CONTENT_PARAGRAPH}>
			{EMAIL_CONTENT_TEXT.GREETING}
			<br />
			{EMAIL_CONTENT_TEXT.TASK_COMPLETION_MESSAGE.PART_1}{" "}
			<span style={{ color: EMAIL_COLORS.SUCCESS }}>{successCount}</span>{" "}
			{EMAIL_CONTENT_TEXT.TASK_COMPLETION_MESSAGE.PART_2}
			<span style={{ color: EMAIL_COLORS.ERROR }}>{failureCount}</span>{" "}
			{EMAIL_CONTENT_TEXT.TASK_COMPLETION_MESSAGE.PART_3}
			<br />
			<br />
			{EMAIL_CONTENT_TEXT.INSTRUCTIONS.SUCCESS_INSTRUCTION_1}
			<EmailLink href={EMAIL_URLS.XCC_DASHBOARD}>
				{EMAIL_LINK_TEXT.XCC_DASHBOARD}
			</EmailLink>
			{EMAIL_CONTENT_TEXT.INSTRUCTIONS.SUCCESS_INSTRUCTION_2}
			<EmailLink href={EMAIL_URLS.XCC_DASHBOARD}>
				{EMAIL_LINK_TEXT.XCC_TASK_SYSTEM}
			</EmailLink>
			{EMAIL_CONTENT_TEXT.INSTRUCTIONS.SUCCESS_INSTRUCTION_3}
			<br />
			<br />
			{EMAIL_CONTENT_TEXT.RESULTS_SECTION_TITLE}
		</p>
	</>
);
