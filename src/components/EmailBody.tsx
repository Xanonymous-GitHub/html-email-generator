import type React from "react";
import type { ReactNode } from "react";

export const EmailBody: React.FC<{
	resultTable: ReactNode;
	taskSystemLink: string;
	successCount: number;
	failureCount: number;
}> = ({ resultTable, taskSystemLink, successCount, failureCount }) => {
	return (
		<>
			<p style={{ textAlign: "center", margin: 0, padding: "0 10px" }}>
				&lt;此為系統通知信件，請勿回信。&gt;
			</p>
			<p style={{ margin: "20px 10px" }}>
				您好：
				<br />
				感謝您本次在本平台執行任務以及對本平台的支持。您本次的任務執行共有{" "}
				<span style={{ color: "#00bf16" }}>{successCount}</span> 筆任務通過，
				<span style={{ color: "#ff0000" }}>{failureCount}</span> 筆任務失敗。
				<br />
				<br />
				請針對執行成功的任務，至
				<a
					href="https://task.xcc.tw/dashboard"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#00bf16", textDecoration: "none" }}
				>
					XCC 後台系統
				</a>
				繼續進行後續操作。如任務執行失敗，請更新任務內容後重新上傳至
				<a
					href={taskSystemLink}
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#00bf16", textDecoration: "none" }}
				>
					XCC 任務執行系統
				</a>
				再次執行。
				<br />
				<br />
				結果報告：
				{resultTable}
			</p>
		</>
	);
};
