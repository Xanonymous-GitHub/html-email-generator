import type React from "react";

/**
 * UI component type definitions
 * Common patterns for React component props
 */

// Base component props that all components should extend
export interface BaseComponentProps {
	readonly className?: string;
	readonly style?: React.CSSProperties;
	readonly testId?: string;
}

// Component with children
export interface ComponentWithChildren {
	readonly children: React.ReactNode;
}

// Component with optional children
export interface ComponentWithOptionalChildren {
	readonly children?: React.ReactNode;
}

// HTML table element props (email-safe subset)
export interface EmailTableElementProps {
	readonly width?: string;
	readonly cellPadding?: number;
	readonly cellSpacing?: number;
	readonly border?: string | number;
	readonly role?: "presentation" | "table";
}

// HTML table cell props (email-safe subset)
export interface EmailTableCellProps {
	readonly align?: "left" | "center" | "right";
	readonly valign?: "top" | "middle" | "bottom";
	readonly width?: string;
	readonly colSpan?: number;
	readonly rowSpan?: number;
}

// Email link attributes
export interface EmailLinkAttributes {
	readonly href: string;
	readonly target?: "_blank" | "_self" | "_parent" | "_top";
	readonly rel?: string;
	readonly title?: string;
}

// Email image attributes
export interface EmailImageAttributes {
	readonly src: string;
	readonly alt: string;
	readonly width?: string | number;
	readonly height?: string | number;
	readonly border?: string | number;
}

// Text content with optional styling
export interface StyledTextContent {
	readonly content: string;
	readonly color?: string;
	readonly weight?: "normal" | "bold";
	readonly size?: string;
}

// Conditional rendering props
export interface ConditionalRenderProps {
	readonly condition: boolean;
	readonly children: React.ReactNode;
	readonly fallback?: React.ReactNode;
}
