import type React from "react";
import { EmailBody } from "../components/EmailBody";
import { EmailHeader } from "../components/EmailHeader";
import { ResultTable } from "../components/ResultTable";
import { EmailLayout } from "../layouts/EmailLayout.tsx";
import type { EmailProps } from "../types/props.ts";

export const EmailTemplate: React.FC<EmailProps> = (props) => {
	let successCount = 0;
	let failureCount = 0;

	props.rows.forEach((row) => {
		if (row.errSigns.length === 0) {
			successCount++;
		} else {
			failureCount++;
		}
	});

	return (
		<EmailLayout {...props}>
			<table
				role="presentation"
				width="600px"
				style={{
					borderCollapse: "collapse",
				}}
			>
				<tbody>
					<tr>
						<EmailHeader />
					</tr>
					<tr>
						<td
							style={{
								padding: "0 10px",
								borderTop: "1px solid #aeaeae",
							}}
						>
							<EmailBody
								resultTable={<ResultTable rows={props.rows} />}
								taskSystemLink={props.detailLink}
								successCount={successCount}
								failureCount={failureCount}
							/>
							<p style={{ margin: "20px 10px" }}>
								若需查詢更多細節，請透過下方連結查看：
								<br />
								<a
									href={props.detailLink}
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#00bf16", textDecoration: "none" }}
								>
									{props.detailLink}
								</a>
							</p>
						</td>
					</tr>
				</tbody>
			</table>
			<footer
				style={{
					padding: "20px 10px",
					borderTop: "1px solid #aeaeae",
					margin: "0 auto",
					width: "600px",
					textAlign: "left",
				}}
			>
				<p style={{ margin: 0 }}>
					祝您順心愉快！
					<br />
					XCC 系統工程團隊
				</p>
			</footer>
		</EmailLayout>
	);
};
