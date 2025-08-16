import type React from "react";

/**
 * Email-safe CSS styles extracted as constants
 * Following HTML v4 email client compatibility requirements
 */

// Base layout styles
export const EMAIL_LAYOUT_STYLES = {
	DOCUMENT_BODY: {
		margin: 0,
		padding: 0,
		backgroundColor: "#ffffff",
		color: "#333333",
		fontFamily: "黑體, sans-serif",
		fontSize: "14px",
		lineHeight: 1.6,
	} as React.CSSProperties,

	MAIN_CONTAINER: {
		borderCollapse: "collapse" as const,
		margin: "0 auto",
	} as React.CSSProperties,

	CONTENT_CONTAINER: {
		borderCollapse: "collapse" as const,
	} as React.CSSProperties,
} as const;

// Content section styles
export const EMAIL_CONTENT_STYLES = {
	HEADER_CELL: {
		padding: "20px 0",
	} as React.CSSProperties,

	HEADER_IMAGE: {
		display: "block",
		border: 0,
		maxWidth: "100%",
		height: "auto",
		maxHeight: "100px",
		objectFit: "cover" as const,
	} as React.CSSProperties,

	BODY_CELL: {
		padding: "0 10px",
		borderTop: "1px solid #aeaeae",
	} as React.CSSProperties,

	SYSTEM_NOTICE: {
		textAlign: "center" as const,
		margin: 0,
		padding: "0 10px",
	} as React.CSSProperties,

	CONTENT_PARAGRAPH: {
		margin: "20px 10px",
	} as React.CSSProperties,

	FOOTER_CONTAINER: {
		padding: "20px 10px",
		borderTop: "1px solid #aeaeae",
		margin: "0 auto",
		width: "600px",
		textAlign: "left" as const,
	} as React.CSSProperties,

	FOOTER_TEXT: {
		margin: 0,
	} as React.CSSProperties,
} as const;

// Table styles
export const EMAIL_TABLE_STYLES = {
	RESULTS_TABLE: {
		borderCollapse: "collapse" as const,
		border: "1px solid #ccc",
		margin: "10px 0",
	} as React.CSSProperties,

	TABLE_HEADER: {
		backgroundColor: "#f5f5f5",
	} as React.CSSProperties,

	TABLE_HEADER_CELL: {
		padding: 8,
		border: "1px solid #ccc",
	} as React.CSSProperties,

	TABLE_CELL: {
		padding: 8,
		border: "1px solid #ccc",
	} as React.CSSProperties,

	TABLE_CELL_CENTERED: {
		padding: 8,
		border: "1px solid #ccc",
		textAlign: "center" as const,
	} as React.CSSProperties,

	TABLE_CELL_PRE_WRAP: {
		padding: 8,
		border: "1px solid #ccc",
		whiteSpace: "pre-wrap" as const,
	} as React.CSSProperties,
} as const;

// Color constants
export const EMAIL_COLORS = {
	SUCCESS: "#00bf16",
	ERROR: "#ff0000",
	BORDER_LIGHT: "#aeaeae",
	BORDER_STANDARD: "#ccc",
	BACKGROUND_HEADER: "#f5f5f5",
	BACKGROUND_WHITE: "#ffffff",
	TEXT_DARK: "#333333",
} as const;

// Link styles
export const EMAIL_LINK_STYLES = {
	DEFAULT_LINK: {
		color: EMAIL_COLORS.SUCCESS,
		textDecoration: "none",
	} as React.CSSProperties,
} as const;

// Layout dimensions
export const EMAIL_LAYOUT_DIMENSIONS = {
	CONTAINER_WIDTH: "600px",
	TABLE_WIDTH: "100%",
	IMAGE_WIDTH: "600",
} as const;
