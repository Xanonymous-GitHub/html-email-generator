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

- Node.js 24+ (with ES modules support)
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
  readonly detailLink: string;                    // URL for detailed information
  readonly rows: readonly TaskExecutionResultRow[];        // Array of data rows
}

interface TaskExecutionResultRow {
  readonly taskID: string;                        // Unique identifier
  readonly systemCode: string;                    // System-specific code
  readonly errSigns: readonly number[];                    // Error codes (empty array = success)
}
```

*Note: These interfaces represent the example use case. Modify them in `src/types/email.ts` and `src/types/task.ts` to match your data structure.*

### Error Codes (Example Content)

| Code | Message          | Description                                 |
|------|------------------|---------------------------------------------|
| 0    | 未知的錯誤            | Unknown error occurred (example in Chinese) |
| 1    | 系統碼無效/不存在        | System code is invalid or doesn't exist     |
| 2    | Task ID 不存在/權限不符 | Task ID not found or permission denied      |

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
3. **Update Constants**: Modify styling, text, or URLs in `src/constants/`
4. **Business Logic**: Update utility functions in `src/utils/` for custom calculations
5. **Test Changes**: Preview updates automatically in browser
6. **Build & Test**: Run `pnpm build` and test with CLI commands
7. **Validate**: Ensure emails render correctly in target email clients

### Project Structure

```
src/
├── constants/           # Extracted constants for maintainability
│   ├── emailStyles.ts  # Email-safe CSS styles
│   ├── emailText.ts    # String literals and localization
│   └── emailUrls.ts    # URL constants and link attributes
├── types/               # Enhanced TypeScript definitions
│   ├── email.ts        # Email-specific interfaces with readonly modifiers
│   ├── task.ts         # Task execution types
│   ├── ui.ts           # UI component patterns
│   └── errorMsgs.ts    # Error code to message mapping
├── utils/               # Business logic utilities
│   ├── taskCalculations.ts # Success/failure counting logic
│   └── errorMessages.ts     # Error message processing
├── components/
│   ├── base/           # Reusable base components
│   │   ├── EmailTable.tsx # Email-safe table component
│   │   └── EmailLink.tsx  # Styled link component
│   ├── layout/         # Layout components
│   │   ├── EmailDocumentLayout.tsx # HTML document wrapper
│   │   └── EmailContentContainer.tsx # Main content container
│   └── content/        # Content components
│       ├── EmailHeader.tsx      # Header with notification image
│       ├── TaskSummarySection.tsx # Summary with counts
│       ├── TaskResultsTable.tsx  # Results table
│       ├── TaskResultRow.tsx     # Individual result row
│       ├── EmailFooter.tsx       # Footer content
│       └── DetailLinkSection.tsx # Detail link section
├── templates/          # Page templates
│   └── TaskNotificationEmail.tsx # Main template orchestrator
├── pages/              # Re-export for backwards compatibility
│   └── EmailTemplate.tsx # Re-exports TaskNotificationEmail
├── generator.tsx       # Production CLI entry point
└── main.tsx           # Development preview entry point
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

- **Styling**: Constants in `src/constants/emailStyles.ts` for consistent styling
- **Content**: Text constants in `src/constants/emailText.ts` (currently shows example content)
- **URLs**: Link configurations in `src/constants/emailUrls.ts`
- **Layout**: Table structure in `src/components/layout/EmailDocumentLayout.tsx`
- **Business Logic**: Utility functions in `src/utils/` for calculations and formatting
- **Data Structure**: TypeScript interfaces in `src/types/email.ts` and `src/types/task.ts` to match your use case
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

- **TypeScript**: Strict mode, readonly interfaces, explicit React.FC typing
- **React**: Function components with React 19.1+ patterns and modern hooks
- **Architecture**: Separation of concerns with business logic in utilities
- **Constants**: All string literals and styles extracted to dedicated files
- **Styling**: Email-safe inline styles with constant extraction
- **Formatting**: Biome configuration (tabs, double quotes, import organization)
- **Commits**: Conventional commit messages

## Related Documentation

- [Vite Documentation](https://vitejs.dev/) - Build tool documentation
- [React Email Best Practices](https://react.email/) - Email development guidelines
