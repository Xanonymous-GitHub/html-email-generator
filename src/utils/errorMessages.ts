/**
 * Error message processing utilities
 * Handles error code to message mapping and formatting
 */

// Import the error message map from the existing location
import { serialToErrorMsg } from "@/types/errorMsgs";

// Re-export for convenience
export { serialToErrorMsg };

/**
 * Get human-readable error message for an error code
 */
export const getErrorMessage = (
	errorCode: number,
	errorMap: ReadonlyMap<number, string> = serialToErrorMsg,
): string => {
	return errorMap.get(errorCode) ?? "未知的錯誤";
};

/**
 * Get all error messages for an array of error codes
 */
export const getErrorMessages = (
	errorCodes: readonly number[],
	errorMap: ReadonlyMap<number, string> = serialToErrorMsg,
): readonly string[] => {
	return errorCodes.map((code) => getErrorMessage(code, errorMap));
};

/**
 * Format error messages as a bulleted list
 */
export const formatErrorMessagesAsList = (
	errorMessages: readonly string[],
): readonly string[] => {
	return errorMessages.map((message) => `• ${message}`);
};

/**
 * Check if error codes array indicates success (no errors)
 */
export const isSuccessResult = (errorCodes: readonly number[]): boolean => {
	return errorCodes.length === 0;
};

/**
 * Get formatted error messages with bullet points
 */
export const getFormattedErrorMessages = (
	errorCodes: readonly number[],
	errorMap: ReadonlyMap<number, string> = serialToErrorMsg,
): readonly string[] => {
	if (isSuccessResult(errorCodes)) {
		return [];
	}

	const messages = getErrorMessages(errorCodes, errorMap);
	return formatErrorMessagesAsList(messages);
};
