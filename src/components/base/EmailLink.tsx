import type React from "react";
import { EMAIL_LINK_STYLES } from "@/constants/emailStyles";
import { EMAIL_LINK_ATTRIBUTES } from "@/constants/emailUrls";
import type { EmailLinkProps } from "@/types/email";

/**
 * Email-safe link component with consistent styling
 * Ensures proper email client compatibility and security attributes
 */

export const EmailLink: React.FC<EmailLinkProps> = ({
	href,
	children,
	target = EMAIL_LINK_ATTRIBUTES.TARGET,
	rel = EMAIL_LINK_ATTRIBUTES.REL,
	style = EMAIL_LINK_STYLES.DEFAULT_LINK,
}) => {
	return (
		<a href={href} target={target} rel={rel} style={style}>
			{children}
		</a>
	);
};
