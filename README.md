# HTML Email Generator

> React-based template for generating professional HTML emails with modern TypeScript and email-client compatibility.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF)](https://vitejs.dev/)
[![Biome](https://img.shields.io/badge/Biome-2.2-60A5FA)](https://biomejs.dev/)

## Overview

This project serves as a React-based template for generating professional, email-client compatible HTML emails. Built with React 19 and TypeScript, it demonstrates modern email generation techniques with a complete example showing task execution notifications. The template is designed to be forked and customized for any email generation use case.

### Key Features

- 📧 **Email Client Compatible**: Table-based layout works across all major email clients
- ⚛️ **Modern React Stack**: Built with React 19, TypeScript, and Vite for optimal development experience
- 🔧 **CLI Integration**: Stdin/stdout pipeline for seamless system integration
- 🛡️ **Type Safe**: Comprehensive TypeScript interfaces prevent runtime errors
- ⚡ **Optimized Build**: Single ESM bundle with SSR for production deployment
- 🎨 **Professional Design**: Clean, accessible styling ready for customization
- 📋 **Template Structure**: Well-organized component architecture for easy modification
- 🌐 **Example Content**: Complete working example with realistic data structure

## Quick Start

### Prerequisites

- Node.js 18+ (with ES modules support)
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Build the generator
pnpm build
```

### Basic Usage

```bash
# Generate email from JSON input (example data structure)
echo '{
  "detailLink": "https://task.xcc.tw/dashboard/tasks",
  "rows": [
    {
      "taskID": "1234567890",
      "systemCode": "ABCDEF123456",
      "errSigns": []
    },
    {
      "taskID": "0987654321", 
      "systemCode": "654321ABCDEF",
      "errSigns": [0, 1]
    }
  ]
}' | node ./dist/generator.js > email.html
```

*Note: The above shows the example data structure. Customize the interfaces in `src/types/props.ts` for your use case.*

## API Documentation

### Input Format

The generator accepts JSON input via stdin with the following structure (example interfaces):

```typescript
interface EmailProps {
  detailLink: string;                    // URL for detailed information
  rows: TaskExecutionResultRow[];        // Array of data rows
}

interface TaskExecutionResultRow {
  taskID: string;                        // Unique identifier
  systemCode: string;                    // System-specific code
  errSigns: number[];                    // Error codes (empty array = success)
}
```

*Note: These interfaces represent the example use case. Modify them in `src/types/props.ts` to match your data structure.*

### Error Codes (Example Content)

| Code | Message | Description |
|------|---------|-------------|
| 0 | 未知的錯誤 | Unknown error occurred (example in Chinese) |
| 1 | 系統碼無效/不存在 | System code is invalid or doesn't exist |
| 2 | Task ID 不存在/權限不符 | Task ID not found or permission denied |

*Note: These are example error codes for demonstration. Customize according to your use case.*

### Output Format

Raw HTML string ready for email sending. The output includes:
- Complete HTML document with proper meta tags
- Email-client compatible styling
- Responsive 600px width layout
- Chinese font declarations
- Accessibility features

## Usage Examples

### Simple Success Case

```bash
echo '{
  "detailLink": "https://task.xcc.tw/dashboard/tasks",
  "rows": [
    {
      "taskID": "TASK001",
      "systemCode": "SYS123",
      "errSigns": []
    }
  ]
}' | node ./dist/generator.js
```

### Mixed Results with Errors

```bash
echo '{
  "detailLink": "https://task.xcc.tw/dashboard/tasks",
  "rows": [
    {
      "taskID": "TASK001",
      "systemCode": "SYS123", 
      "errSigns": []
    },
    {
      "taskID": "TASK002",
      "systemCode": "SYS456",
      "errSigns": [1, 2]
    }
  ]
}' | node ./dist/generator.js
```

### Pipeline Integration

```bash
# From file
cat task-results.json | node ./dist/generator.js > email.html

# From API response
curl -s https://api.example.com/task-results | node ./dist/generator.js | sendmail user@example.com
```

## Development

### Development Server

```bash
# Start development server with live preview
pnpm dev
```

This starts a Vite development server where you can preview the email template with test data. The preview updates automatically when you modify components.

### Development Workflow

1. **Local Development**: Use `pnpm dev` for live preview
2. **Edit Components**: Modify React components in `src/components/`
3. **Test Changes**: Preview updates automatically in browser
4. **Build & Test**: Run `pnpm build` and test with CLI commands
5. **Validate**: Ensure emails render correctly in target email clients

### Project Structure

```
src/
├── components/          # React components
│   ├── EmailBody.tsx   # Main content with counts & instructions
│   ├── EmailHeader.tsx # Branded header with image
│   ├── ResultTable.tsx # Task results table
│   └── TableRow.tsx    # Individual result row
├── layouts/
│   └── EmailLayout.tsx # HTML document wrapper
├── pages/
│   └── EmailTemplate.tsx # Main template orchestrator
├── types/
│   ├── errorMsgs.ts    # Error code mappings
│   └── props.ts        # TypeScript interfaces
├── generator.tsx       # CLI entry point
└── main.tsx           # Development entry point
```

### Code Quality

```bash
# Lint and format code
pnpm lint

# Full check (lint + format + organize imports)
pnpm check

# Preview build output
pnpm preview
```

## Configuration

### Email Client Testing

Test generated emails in multiple clients:
- **Gmail** (web, mobile)
- **Outlook** (desktop, web, mobile)  
- **Apple Mail** (desktop, mobile)
- **Thunderbird**
- **Yahoo Mail**

### Customization Options

The email template can be customized by modifying:

- **Styling**: Inline styles in component files
- **Layout**: Table structure in `EmailLayout.tsx`
- **Content**: Text and messaging in `EmailBody.tsx` (currently shows example content)
- **Branding**: Header image and footer in respective components
- **Data Structure**: TypeScript interfaces in `src/types/props.ts` to match your use case
- **Error Messages**: Mappings in `src/types/errorMsgs.ts` (example content)
- **Language**: All text content can be changed from the example Chinese to any language

### Environment Variables

No environment variables required. All configuration is compile-time.

## Integration Guide

### System Integration

The generator is designed for seamless integration into larger systems:

```bash
# Simple pipeline
task-executor | email-generator | email-sender

# With error handling
task-executor | email-generator || handle-error

# Save and send
task-executor | tee results.json | email-generator | email-sender
```

### Programmatic Usage

```javascript
import { spawn } from 'child_process';

function generateEmail(taskData) {
  return new Promise((resolve, reject) => {
    const generator = spawn('node', ['dist/generator.js']);
    let output = '';
    
    generator.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    generator.on('close', (code) => {
      code === 0 ? resolve(output) : reject(new Error(`Exit code: ${code}`));
    });
    
    generator.stdin.write(JSON.stringify(taskData));
    generator.stdin.end();
  });
}
```

## Troubleshooting

### Common Issues

**JSON Parse Errors**:
```bash
# Ensure valid JSON format
echo '{"detailLink":"...","rows":[]}' | node ./dist/generator.js

# Check JSON validity
echo '{}' | python -m json.tool
```

**Character Encoding Issues**:
- Ensure input is UTF-8 encoded
- Verify terminal encoding matches your content language  
- Check email client charset handling (example content uses Chinese characters)

**Build Issues**:
```bash
# Clear cache and rebuild
rm -rf dist/ node_modules/.vite/
pnpm install
pnpm build
```

**Email Rendering Problems**:
- Test in multiple email clients
- Validate HTML structure
- Check for unsupported CSS properties
- Verify table-based layout integrity

### Debug Commands

```bash
# TypeScript check
pnpm tsc --noEmit

# Test with minimal input
echo '{"detailLink":"test","rows":[]}' | node ./dist/generator.js

# Validate output HTML
node ./dist/generator.js < input.json | html5validator --stdin

# Check bundle size
pnpm build --analyze
```

## Contributing

### Development Setup

1. Fork the repository
2. Install dependencies: `pnpm install`
3. Start development: `pnpm dev`
4. Make changes and test thoroughly
5. Run quality checks: `pnpm check`
6. Submit pull request

### Code Standards

- **TypeScript**: Strict mode, no implicit any
- **React**: Function components with proper typing
- **Styling**: Inline styles only (email compatibility)
- **Formatting**: Biome configuration (tabs, double quotes)
- **Commits**: Conventional commit messages

## License

This project is part of XCC (xanonymous's personal tech workspace) and serves as an open template. Feel free to fork and customize for your own email generation needs.

## Related Documentation

- [`CLAUDE.md`](./CLAUDE.md) - Comprehensive technical documentation
- [Vite Documentation](https://vitejs.dev/) - Build tool documentation
- [React Email Best Practices](https://react.email/) - Email development guidelines
