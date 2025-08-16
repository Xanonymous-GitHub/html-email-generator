import type React from "react";
import { EMAIL_CONTENT_STYLES } from "../../constants/emailStyles";
import { EMAIL_CONTENT_TEXT } from "../../constants/emailText";
import type { DetailLinkSectionProps } from "../../types/email";
import { EmailLink } from "../base/EmailLink";

/**
 * Detail link section with instructions and link
 * Provides additional information access link
 */

export const DetailLinkSection: React.FC<DetailLinkSectionProps> = ({
	detailLink,
}) => (
	<p style={EMAIL_CONTENT_STYLES.CONTENT_PARAGRAPH}>
		{EMAIL_CONTENT_TEXT.DETAIL_LINK_TEXT.INSTRUCTION}
		<br />
		<EmailLink href={detailLink}>{detailLink}</EmailLink>
	</p>
);
