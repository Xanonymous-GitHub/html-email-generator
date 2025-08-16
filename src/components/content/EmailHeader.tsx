import type React from "react";
import {
	EMAIL_CONTENT_STYLES,
	EMAIL_LAYOUT_DIMENSIONS,
} from "../../constants/emailStyles";
import { EMAIL_DOCUMENT_TEXT } from "../../constants/emailText";
import { EMAIL_URLS } from "../../constants/emailUrls";
import type { EmailHeaderProps } from "../../types/email";
import { EmailTable } from "../base/EmailTable";

/**
 * Email header with notification image
 * Displays branded header for email notifications
 */

export const EmailHeader: React.FC<EmailHeaderProps> = ({
	imageUrl = EMAIL_URLS.HEADER_IMAGE,
	imageAlt = EMAIL_DOCUMENT_TEXT.IMAGE_ALT,
	width = EMAIL_LAYOUT_DIMENSIONS.CONTAINER_WIDTH,
}) => (
	<tr>
		<td>
			<EmailTable width={width}>
				<tbody>
					<tr>
						<td align="center" style={EMAIL_CONTENT_STYLES.HEADER_CELL}>
							<img
								src={imageUrl}
								alt={imageAlt}
								width={EMAIL_LAYOUT_DIMENSIONS.IMAGE_WIDTH}
								style={EMAIL_CONTENT_STYLES.HEADER_IMAGE}
							/>
						</td>
					</tr>
				</tbody>
			</EmailTable>
		</td>
	</tr>
);
