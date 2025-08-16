import type React from "react";
import {
	EMAIL_CONTENT_STYLES,
	EMAIL_LAYOUT_DIMENSIONS,
} from "../../constants/emailStyles";
import { EMAIL_CONTENT_TEXT } from "../../constants/emailText";
import type { EmailFooterProps } from "../../types/email";

/**
 * Email footer with closing message and signature
 * Provides consistent footer content for email notifications
 */

export const EmailFooter: React.FC<EmailFooterProps> = ({
	width = EMAIL_LAYOUT_DIMENSIONS.CONTAINER_WIDTH,
}) => (
	<footer
		style={{
			...EMAIL_CONTENT_STYLES.FOOTER_CONTAINER,
			width,
		}}
	>
		<p style={EMAIL_CONTENT_STYLES.FOOTER_TEXT}>
			{EMAIL_CONTENT_TEXT.FOOTER.CLOSING}
			<br />
			{EMAIL_CONTENT_TEXT.FOOTER.SIGNATURE}
		</p>
	</footer>
);
