import { StrictMode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { EmailTemplate } from "@/pages/EmailTemplate.tsx";
import type { EmailProps } from "@/types/props.ts";

async function main() {
	const chunks: Buffer[] = [];
	for await (const chunk of process.stdin) chunks.push(chunk);
	const props: EmailProps = JSON.parse(Buffer.concat(chunks).toString());

	const html = renderToStaticMarkup(
		<StrictMode>
			<EmailTemplate {...props} />
		</StrictMode>,
	);

	// The output must be transformed via `JSON.stringify` before
	// inserting into the JSON payload of the email sending request.
	// However, we don't use `JSON.stringify` here because it will
	// be escaped by another process, and we want to keep the raw HTML
	// to prevent double escaping.
	process.stdout.write(html);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
