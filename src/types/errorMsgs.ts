const errorMsgEntries = [
	[0, "未知的錯誤"],
	[1, "系統碼無效/不存在"],
	[2, "Task ID 不存在/權限不符"],
] as const;

export const serialToErrorMsg: ReadonlyMap<number, string> = Object.freeze(
	new Map(errorMsgEntries),
);
