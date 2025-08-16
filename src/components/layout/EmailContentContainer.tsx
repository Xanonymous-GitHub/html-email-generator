import type React from "react";
import { EmailTable } from "@/components/base/EmailTable";
import {
	EMAIL_LAYOUT_DIMENSIONS,
	EMAIL_LAYOUT_STYLES,
} from "@/constants/emailStyles";
import type { EmailContentContainerProps } from "@/types/email";

/**
 * Email content container
 * Provides structured container for email content with proper table layout
 */

export const EmailContentContainer: React.FC<EmailContentContainerProps> = ({
	children,
	width = EMAIL_LAYOUT_DIMENSIONS.CONTAINER_WIDTH,
}) => (
	<EmailTable width={width} style={EMAIL_LAYOUT_STYLES.CONTENT_CONTAINER}>
		<tbody>{children}</tbody>
	</EmailTable>
);
