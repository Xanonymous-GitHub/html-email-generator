import type React from "react";
import type { EmailProps } from "../types/props.ts";

const layoutBodyStyle: React.CSSProperties = {
	margin: 0,
	padding: 0,
	backgroundColor: "#ffffff",
	color: "#333333",
	fontFamily: "黑體, sans-serif",
	fontSize: "14px",
	lineHeight: 1.6,
};

export const EmailLayout: React.FC<
	EmailProps & { children: React.ReactNode }
> = ({ children }) => (
	<html lang="zh">
		<head>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link
				rel="preload"
				as="image"
				href="https://media.zoom.com/images/assets/Meetings.png/Zz01OTIwZmI2NGU3NmMxMWVlOGUyYzJhOTVjMzMwZDkxYQ=="
			/>
			<title>系統任務執行完成通知</title>
		</head>
		<body style={layoutBodyStyle}>
			<table
				role="presentation"
				width="600px"
				style={{
					borderCollapse: "collapse",
					margin: "0 auto",
				}}
			>
				<tbody>
					<tr>
						<td align="center">{children}</td>
					</tr>
				</tbody>
			</table>
		</body>
	</html>
);
