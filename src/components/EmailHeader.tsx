import type React from "react";

export const EmailHeader: React.FC = () => (
	<table
		role="presentation"
		width="600px"
		style={{ borderCollapse: "collapse" }}
	>
		<tbody>
			<tr>
				<td align="center" style={{ padding: "20px 0" }}>
					<img
						src="https://media.zoom.com/images/assets/Meetings.png/Zz01OTIwZmI2NGU3NmMxMWVlOGUyYzJhOTVjMzMwZDkxYQ=="
						alt="通知標頭"
						width="600"
						style={{
							display: "block",
							border: 0,
							maxWidth: "100%",
							height: "auto",
							maxHeight: "100px",
							objectFit: "cover",
						}}
					/>
				</td>
			</tr>
		</tbody>
	</table>
);
