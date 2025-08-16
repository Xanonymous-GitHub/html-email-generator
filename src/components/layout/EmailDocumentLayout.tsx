import type React from "react";
import {
	EMAIL_LAYOUT_DIMENSIONS,
	EMAIL_LAYOUT_STYLES,
} from "../../constants/emailStyles";
import { EMAIL_DOCUMENT_TEXT } from "../../constants/emailText";
import { EMAIL_URLS } from "../../constants/emailUrls";
import type { EmailDocumentLayoutProps } from "../../types/email";
import { EmailTable } from "../base/EmailTable";

/**
 * Email document layout wrapper
 * Provides HTML document structure with email-safe meta tags and styling
 */

export const EmailDocumentLayout: React.FC<EmailDocumentLayoutProps> = ({
	children,
}) => (
	<html lang={EMAIL_DOCUMENT_TEXT.LANG_CODE}>
		<head>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="preload" as="image" href={EMAIL_URLS.HEADER_IMAGE} />
			<title>{EMAIL_DOCUMENT_TEXT.TITLE}</title>
		</head>
		<body style={EMAIL_LAYOUT_STYLES.DOCUMENT_BODY}>
			<EmailTable
				width={EMAIL_LAYOUT_DIMENSIONS.CONTAINER_WIDTH}
				style={EMAIL_LAYOUT_STYLES.MAIN_CONTAINER}
			>
				<tbody>
					<tr>
						<td align="center">{children}</td>
					</tr>
				</tbody>
			</EmailTable>
		</body>
	</html>
);
