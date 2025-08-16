/**
 * Email text content constants
 * All string literals extracted for maintainability and localization
 */

export const EMAIL_DOCUMENT_TEXT = {
	TITLE: "系統任務執行完成通知",
	LANG_CODE: "zh",
	IMAGE_ALT: "通知標頭",
} as const;

export const EMAIL_CONTENT_TEXT = {
	SYSTEM_NOTICE: "<此為系統通知信件，請勿回信。>",

	GREETING: "您好：",

	TASK_COMPLETION_MESSAGE: {
		PART_1:
			"感謝您本次在本平台執行任務以及對本平台的支持。您本次的任務執行共有",
		PART_2: "筆任務通過，",
		PART_3: "筆任務失敗。",
	},

	INSTRUCTIONS: {
		SUCCESS_INSTRUCTION_1: "請針對執行成功的任務，至",
		SUCCESS_INSTRUCTION_2:
			"繼續進行後續操作。如任務執行失敗，請更新任務內容後重新上傳至",
		SUCCESS_INSTRUCTION_3: "再次執行。",
	},

	RESULTS_SECTION_TITLE: "結果報告：",

	DETAIL_LINK_TEXT: {
		INSTRUCTION: "若需查詢更多細節，請透過下方連結查看：",
	},

	FOOTER: {
		CLOSING: "祝您順心愉快！",
		SIGNATURE: "XCC 系統工程團隊",
	},
} as const;

export const EMAIL_TABLE_TEXT = {
	HEADERS: {
		ROW_NUMBER: "#",
		TASK_ID: "Task ID",
		SYSTEM_CODE: "系統碼",
		EXECUTION_RESULT: "執行結果",
		ERROR_MESSAGE: "錯誤訊息",
	},

	RESULTS: {
		SUCCESS: "成功",
		FAILURE: "失敗",
	},
} as const;

export const EMAIL_LINK_TEXT = {
	XCC_DASHBOARD: "XCC 後台系統",
	XCC_TASK_SYSTEM: "XCC 任務執行系統",
} as const;
