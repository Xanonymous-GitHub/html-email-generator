import type {
	ProcessedTaskResult,
	TaskCalculationResult,
	TaskExecutionResultRow,
	TaskExecutionSummary,
} from "../types/task";

/**
 * Business logic for task execution calculations
 * Extracted from UI components for better separation of concerns
 */

/**
 * Calculate task execution summary from raw results
 */
export const calculateTaskSummary = (
	rows: readonly TaskExecutionResultRow[],
): TaskExecutionSummary => {
	let successCount = 0;
	let failureCount = 0;

	for (const row of rows) {
		if (row.errSigns.length === 0) {
			successCount++;
		} else {
			failureCount++;
		}
	}

	return {
		successCount,
		failureCount,
		totalCount: rows.length,
	};
};

/**
 * Process a single task result to determine status and error messages
 */
export const processTaskResult = (
	row: TaskExecutionResultRow,
	errorMessageMap: ReadonlyMap<number, string>,
): ProcessedTaskResult => {
	const hasErrors = row.errSigns.length > 0;
	const status = hasErrors ? "failure" : "success";

	const errorMessages = row.errSigns.map(
		(sign) => errorMessageMap.get(sign) ?? "未知的錯誤",
	);

	return {
		taskID: row.taskID,
		systemCode: row.systemCode,
		status,
		errorMessages,
		hasErrors,
	};
};

/**
 * Process all task results with summary calculation
 */
export const processAllTaskResults = (
	rows: readonly TaskExecutionResultRow[],
	errorMessageMap: ReadonlyMap<number, string>,
): TaskCalculationResult => {
	const summary = calculateTaskSummary(rows);
	const processedRows = rows.map((row) =>
		processTaskResult(row, errorMessageMap),
	);

	return {
		summary,
		processedRows,
	};
};

/**
 * Check if a task execution was successful
 */
export const isTaskSuccessful = (row: TaskExecutionResultRow): boolean => {
	return row.errSigns.length === 0;
};

/**
 * Get total task count
 */
export const getTotalTaskCount = (
	rows: readonly TaskExecutionResultRow[],
): number => {
	return rows.length;
};
