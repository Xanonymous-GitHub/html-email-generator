import type React from "react";

/**
 * Email-specific type definitions
 * Following React 19.1+ and TypeScript 5.9+ best practices
 */

// Main email props interface
export interface EmailProps {
	readonly rows: readonly TaskExecutionResultRow[];
	readonly detailLink: string;
}

// Task execution result for individual task
export interface TaskExecutionResultRow {
	readonly taskID: string;
	readonly systemCode: string;
	readonly errSigns: readonly number[];
}

// Task execution summary
export interface TaskExecutionSummary {
	readonly successCount: number;
	readonly failureCount: number;
	readonly totalCount: number;
}

// Email document layout props
export interface EmailDocumentLayoutProps {
	readonly children: React.ReactNode;
}

// Email content container props
export interface EmailContentContainerProps {
	readonly children: React.ReactNode;
	readonly width?: string;
}

// Email header props
export interface EmailHeaderProps {
	readonly imageUrl?: string;
	readonly imageAlt?: string;
	readonly width?: string;
}

// Task summary section props
export interface TaskSummarySectionProps {
	readonly successCount: number;
	readonly failureCount: number;
}

// Task results table props
export interface TaskResultsTableProps {
	readonly rows: readonly TaskExecutionResultRow[];
}

// Task result row props
export interface TaskResultRowProps {
	readonly rowNumber: number;
	readonly row: TaskExecutionResultRow;
}

// Email footer props
export interface EmailFooterProps {
	readonly width?: string;
}

// Detail link section props
export interface DetailLinkSectionProps {
	readonly detailLink: string;
}

// Base email table props
export interface EmailTableProps {
	readonly children: React.ReactNode;
	readonly width?: string;
	readonly role?: "presentation" | "table";
	readonly style?: React.CSSProperties;
}

// Email link props
export interface EmailLinkProps {
	readonly href: string;
	readonly children: React.ReactNode;
	readonly target?: string;
	readonly rel?: string;
	readonly style?: React.CSSProperties;
}
