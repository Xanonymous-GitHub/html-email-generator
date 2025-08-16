/**
 * Task execution type definitions
 * Enhanced with readonly modifiers for immutability
 */

// Task execution result for individual task
export interface TaskExecutionResultRow {
	readonly taskID: string;
	readonly systemCode: string;
	readonly errSigns: readonly number[];
}

// Task execution status
export type TaskExecutionStatus = "success" | "failure";

// Task execution summary information
export interface TaskExecutionSummary {
	readonly successCount: number;
	readonly failureCount: number;
	readonly totalCount: number;
}

// Error message mapping entry
export interface ErrorMessageEntry {
	readonly code: number;
	readonly message: string;
}

// Task execution result with calculated status
export interface ProcessedTaskResult {
	readonly taskID: string;
	readonly systemCode: string;
	readonly status: TaskExecutionStatus;
	readonly errorMessages: readonly string[];
	readonly hasErrors: boolean;
}

// Task calculation utilities return type
export interface TaskCalculationResult {
	readonly summary: TaskExecutionSummary;
	readonly processedRows: readonly ProcessedTaskResult[];
}
