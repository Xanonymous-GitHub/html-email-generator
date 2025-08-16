export type TaskExecutionResultRow = {
	taskID: string;
	systemCode: string;
	errSigns: number[];
};

export type EmailProps = {
	rows: TaskExecutionResultRow[];
	detailLink: string;
};
