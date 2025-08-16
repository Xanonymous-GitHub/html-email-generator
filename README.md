# HTML Email generator

This project builds a single bundled JavaScript file that can be used to generate html email.

## Usage

1. Install dependencies:

```shell
pnpm i
```

2. Build the script

```shell
pnpm build
```

3. Test the script

Run the following command to test the script with a sample JSON input
You will get the rendered email HTML in the console output.

```shell
echo '{
	detailLink: "https://task.xcc.tw/dashboard/tasks",
	rows: [
		{
			taskID: "1234567890",
			systemCode: "ABCDEF123456",
			errSigns: [],
		},
		{
			taskID: "0987654321",
			systemCode: "654321ABCDEF",
			errSigns: [0, 1],
		}
	],
}' | node ./dist/generator.js
```

## Development

```shell
pnpm dev
```
