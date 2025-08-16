import type React from "react";
import { DetailLinkSection } from "../components/content/DetailLinkSection";
import { EmailFooter } from "../components/content/EmailFooter";
import { EmailHeader } from "../components/content/EmailHeader";
import { TaskResultsTable } from "../components/content/TaskResultsTable";
import { TaskSummarySection } from "../components/content/TaskSummarySection";
import { EmailContentContainer } from "../components/layout/EmailContentContainer";
import { EmailDocumentLayout } from "../components/layout/EmailDocumentLayout";
import { EMAIL_CONTENT_STYLES } from "../constants/emailStyles";
import type { EmailProps } from "../types/email";
import { calculateTaskSummary } from "../utils/taskCalculations";

/**
 * Main task notification email template
 * Orchestrates all email components with clean separation of concerns
 */

export const TaskNotificationEmail: React.FC<EmailProps> = ({
	rows,
	detailLink,
}) => {
	// Business logic extracted to utility functions
	const taskSummary = calculateTaskSummary(rows);

	return (
		<EmailDocumentLayout>
			<EmailContentContainer>
				<EmailHeader />
				<tr>
					<td style={EMAIL_CONTENT_STYLES.BODY_CELL}>
						<TaskSummarySection
							successCount={taskSummary.successCount}
							failureCount={taskSummary.failureCount}
						/>
						<TaskResultsTable rows={rows} />
						<DetailLinkSection detailLink={detailLink} />
					</td>
				</tr>
			</EmailContentContainer>
			<EmailFooter />
		</EmailDocumentLayout>
	);
};
