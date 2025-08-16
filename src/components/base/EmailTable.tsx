import type React from "react";
import { EMAIL_LAYOUT_DIMENSIONS } from "@/constants/emailStyles";
import type { EmailTableProps } from "@/types/email";

/**
 * Base email-safe table component
 * Provides consistent table structure for email client compatibility
 */

const DEFAULT_TABLE_STYLES = {
	borderCollapse: "collapse" as const,
} as const;

export const EmailTable: React.FC<EmailTableProps> = ({
	children,
	width = EMAIL_LAYOUT_DIMENSIONS.TABLE_WIDTH,
	role = "presentation",
	style = DEFAULT_TABLE_STYLES,
}) => {
	const combinedStyles = {
		...DEFAULT_TABLE_STYLES,
		...style,
	};

	return (
		<table role={role} width={width} style={combinedStyles}>
			{children}
		</table>
	);
};
