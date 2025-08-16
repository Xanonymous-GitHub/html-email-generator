# CLAUDE.md - Email Generator Project Documentation

## Project Overview

**Project Name**: HTML Email Generator  
**Version**: 0.0.0  
**Type**: React-based HTML Email Generation Template  
**Primary Language**: TypeScript  
**Target Runtime**: Node.js CLI + Web Development  
**Purpose**: Template/Example for custom email generators  

### Purpose
This project serves as a React-based template for generating HTML emails. It demonstrates how to create professional, email-client compatible HTML templates using modern React and TypeScript. The example content shows a task execution notification system, but the template is designed to be forked and customized for any email generation use case.

### Key Features
- **Email Client Compatible**: Table-based layout ensuring compatibility across all major email clients
- **Modern React Stack**: Built with React 19, TypeScript, and Vite for optimal development experience
- **Type-Safe API**: Comprehensive TypeScript interfaces for reliable integration
- **CLI Integration**: Stdin/stdout pipeline for seamless system integration
- **Template Structure**: Well-organized component architecture for easy customization
- **Professional Styling**: Clean, accessible design ready for customization
- **Example Content**: Includes realistic example data structure and styling

## Architecture Overview

### Tech Stack
- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.9.2
- **Build Tool**: Vite 7.1.2
- **Code Quality**: Biome 2.2.0 (linting, formatting, import organization)
- **Git Hooks**: Husky 9.1.7
- **Package Manager**: pnpm

### Build Architecture
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Development   │    │   Production     │    │   Output        │
│                 │    │                 │    │                 │
│  main.tsx       │    │  generator.tsx   │    │  generator.js   │
│  (Preview Mode) │    │  (CLI Mode)      │    │  (ESM Bundle)   │
│                 │    │                 │    │                 │
│  - Live Preview │ -> │  - Stdin Input   │ -> │  - Single File  │
│  - Test Data    │    │  - HTML Output   │    │  - Minified     │
│  - Hot Reload   │    │  - Error Handle  │    │  - Deployable   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### File Structure
```
src/
├── components/          # React components for email sections
│   ├── EmailBody.tsx   # Main content with success/failure counts
│   ├── EmailHeader.tsx # Branded header with image
│   ├── ResultTable.tsx # Tabular display of task results
│   └── TableRow.tsx    # Individual result row with error handling
├── layouts/
│   └── EmailLayout.tsx # HTML document wrapper with meta tags
├── pages/
│   └── EmailTemplate.tsx # Main template orchestrator
├── types/
│   ├── errorMsgs.ts    # Error code to message mapping
│   └── props.ts        # TypeScript interface definitions
├── generator.tsx       # Production CLI entry point
└── main.tsx           # Development preview entry point
```

## Component Architecture

### EmailLayout.tsx
**Purpose**: HTML document wrapper providing proper email structure  
**Responsibilities**:
- HTML5 document structure with Chinese language declaration
- Meta tags for email client compatibility
- Base styling with email-safe CSS
- Image preloading for performance

**Key Features**:
- Chinese font family declaration (`黑體, sans-serif`)
- 600px fixed width for email client compatibility
- Proper charset and viewport meta tags

### EmailTemplate.tsx
**Purpose**: Main template orchestrator and business logic  
**Responsibilities**:
- Calculate success/failure counts from task results
- Orchestrate component rendering
- Provide structured layout with proper spacing
- Include footer with XCC branding

**Props Interface**:
```typescript
interface EmailProps {
  rows: TaskExecutionResultRow[];
  detailLink: string;
}
```

### EmailHeader.tsx
**Purpose**: Branded header section  
**Responsibilities**:
- Display company/system branding
- Provide visual hierarchy
- Maintain consistent header styling

### EmailBody.tsx
**Purpose**: Main content section with summary and instructions  
**Responsibilities**:
- Display greeting and system notification disclaimer (example content)
- Show success/failure count summary with color coding
- Provide instructions for next steps with actionable links (example: XCC system references)
- Embed result table display
- Include detail link for comprehensive information

**Props Interface**:
```typescript
interface EmailBodyProps {
  resultTable: ReactNode;
  taskSystemLink: string;
  successCount: number;
  failureCount: number;
}
```

### ResultTable.tsx
**Purpose**: Tabular display of task execution results  
**Responsibilities**:
- Create accessible table structure with proper headers
- Apply email-safe styling with borders and spacing
- Map over result rows for dynamic content generation

**Table Structure**:
| Column | Purpose | Alignment |
|--------|---------|-----------|
| # | Row number | Left |
| Task ID | Unique task identifier | Left |
| 系統碼 | System code | Left |
| 執行結果 | Success/Failure status | Center |
| 錯誤訊息 | Error messages (if any) | Left |

### TableRow.tsx
**Purpose**: Individual result row with error handling  
**Responsibilities**:
- Determine success/failure status based on error signs
- Apply conditional styling (red for failures)
- Map error codes to user-friendly Chinese messages
- Handle multiple error conditions per task

**Error Handling Logic**:
```typescript
const isSuccess = row.errSigns.length === 0;
const errorMessages = row.errSigns.map(
  (sign) => serialToErrorMsg.get(sign) ?? "未知的錯誤"
);
```

## Type System Documentation

### Core Types

```typescript
// Task execution result for individual task
type TaskExecutionResultRow = {
  taskID: string;           // Unique identifier for the task
  systemCode: string;       // System-specific code/identifier  
  errSigns: number[];       // Array of error codes (empty = success)
};

// Main input interface for email generation
type EmailProps = {
  rows: TaskExecutionResultRow[];  // Array of task results
  detailLink: string;              // URL for detailed information
};
```

### Error Code System (Example Content)

```typescript
const serialToErrorMsg: ReadonlyMap<number, string> = new Map([
  [0, "未知的錯誤"],              // Unknown error (example in Chinese)
  [1, "系統碼無效/不存在"],        // Invalid/non-existent system code
  [2, "Task ID 不存在/權限不符"],   // Task ID not found/permission denied
]);
```

**Error Handling Strategy**:
- Empty `errSigns` array indicates successful task execution
- Multiple error codes can be present for a single task
- Unknown error codes default to "未知的錯誤"
- Error messages display as bulleted list in email

## Build Process & Configuration

### Vite Configuration
**Mode**: Server-Side Rendering (SSR)  
**Target**: ESNext for modern Node.js compatibility  
**Output**: Single ESM bundle (`generator.js`)  

**Key Settings**:
```typescript
{
  build: {
    ssr: true,                    // Enable server-side rendering
    target: "esnext",            // Modern JavaScript features
    minify: true,                // Optimize bundle size
    rollupOptions: {
      input: "src/generator.tsx",  // CLI entry point
      output: {
        format: "esm",            // ES modules for Node.js
        entryFileNames: "generator.js"
      }
    }
  },
  ssr: {
    noExternal: true             // Bundle all dependencies
  }
}
```

### Biome Configuration
**Style**: Tab indentation, double quotes  
**Rules**: React domain enabled, recommended rules  
**Features**: Auto-import organization, source actions enabled  

### Development vs Production

**Development Mode** (`pnpm dev`):
- Uses `main.tsx` with test data
- Live preview in browser
- Hot module replacement
- Interactive development

**Production Mode** (`pnpm build`):
- Builds `generator.tsx` as CLI tool
- Single bundle output
- Minified and optimized
- Ready for deployment

## Email Design Guidelines

### Email Client Compatibility
- **Table-based Layout**: Uses `<table role="presentation">` for maximum compatibility
- **Fixed Width**: 600px width works across all major email clients
- **Inline Styles**: All styling applied inline for email client support
- **Web-safe Fonts**: Uses system fonts with proper fallbacks

### Styling Approach
```css
/* Base layout */
width: 600px;
border-collapse: collapse;
margin: 0 auto;

/* Typography (example uses Chinese fonts) */
font-family: 黑體, sans-serif;
font-size: 14px;
line-height: 1.6;

/* Colors */
background-color: #ffffff;
color: #333333;
success-color: #00bf16;
error-color: #ff0000;
border-color: #aeaeae, #ccc;
```

### Accessibility Features
- Proper `role="presentation"` on layout tables
- Semantic table headers for data tables
- Color coding with text labels (not color-only information)
- Proper link attributes (`target="_blank"`, `rel="noopener noreferrer"`)

## Integration Guide

### CLI Usage
```bash
# Basic usage with JSON input
echo '{
  "detailLink": "https://task.xcc.tw/dashboard/tasks",
  "rows": [
    {
      "taskID": "1234567890",
      "systemCode": "ABCDEF123456", 
      "errSigns": []
    }
  ]
}' | node ./dist/generator.js
```

### System Integration Patterns

**Pipeline Integration**:
```bash
# From file
cat task-results.json | node generator.js > email.html

# From API
curl -s api/task-results | node generator.js | mail-sender
```

**Programmatic Usage**:
```javascript
import { spawn } from 'child_process';

const generator = spawn('node', ['generator.js']);
generator.stdin.write(JSON.stringify(taskData));
generator.stdin.end();
generator.stdout.on('data', (html) => {
  // Process generated HTML
});
```

### Input Validation
The system expects valid JSON matching the `EmailProps` interface. Invalid input will cause the process to exit with error code 1 and error details on stderr.

### Output Format
Raw HTML string suitable for email sending APIs. The output is not JSON-encoded to prevent double-escaping issues when inserted into email service payloads.

## Development Workflow

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run linting
pnpm lint

# Run full check (lint + format)
pnpm check

# Build for production
pnpm build
```

### Testing Strategy
**Development Testing**:
- Use `pnpm dev` to preview emails in browser
- Modify test data in `main.tsx` for different scenarios
- Live reload for rapid iteration

**Production Testing**:
```bash
# Test with sample data
echo '{"detailLink":"https://example.com","rows":[{"taskID":"test","systemCode":"TEST123","errSigns":[]}]}' | node dist/generator.js
```

**Edge Case Testing**:
- Empty rows array
- Multiple error codes per task
- Very long task IDs or system codes
- Invalid error codes
- Unicode handling in system codes

### Code Quality Standards
- **TypeScript**: Strict mode enabled, no implicit any
- **React**: Use function components with proper prop typing
- **Styling**: Inline styles only, email-safe CSS properties
- **Imports**: Organize imports automatically with Biome
- **Git**: Husky pre-commit hooks ensure code quality

## Troubleshooting

### Common Issues

**Build Fails**:
- Check TypeScript errors: `pnpm tsc --noEmit`
- Verify all imports are correctly typed
- Ensure React components have proper return types

**Email Rendering Issues**:
- Test in multiple email clients (Gmail, Outlook, Apple Mail)
- Validate HTML structure (proper table nesting)
- Check for unsupported CSS properties

**CLI Issues**:
- Verify JSON input format matches `EmailProps` interface
- Check Node.js version compatibility (requires ES modules support)
- Ensure proper stdin encoding (UTF-8)

**Character Encoding**:
- Input JSON must be UTF-8 encoded
- Output HTML includes proper charset meta tag
- Verify email client displays content correctly (example uses Chinese characters)

### Debugging Commands
```bash
# Validate TypeScript
pnpm tsc --noEmit

# Check bundle output
node dist/generator.js < sample-input.json > output.html

# Lint and format check
pnpm check --dry-run

# View bundle analysis
pnpm build --analyze
```

## Project Status

**Current Version**: 0.0.0  
**Status**: Production Ready  
**Last Updated**: 2025-08-16  

**Recent Changes**:
- Initial project setup with React 19 and TypeScript
- Implemented complete email generation system
- Added Chinese language support and proper styling
- Configured build system for CLI deployment
- Added comprehensive error handling and type safety
- **2025-08-16**: Created comprehensive documentation (CLAUDE.md + enhanced README.md)
- **2025-08-16**: Implemented auto-update mechanism for documentation maintenance
- **2025-08-16**: Validated build process, TypeScript compilation, and CLI functionality

**Documentation Status**:
- ✅ Comprehensive CLAUDE.md with technical architecture and auto-update mechanism
- ✅ Enhanced README.md with professional presentation and examples
- ✅ All code examples validated and tested
- ✅ Build process and CLI functionality confirmed working
- ✅ TypeScript interfaces and error codes documented accurately

**Upcoming Enhancements**:
- Add email template customization options
- Implement additional error code mappings
- Add email client testing automation
- Consider adding dark mode email support

## AI Assistant Workflow & Auto-Update Instructions

**IMPORTANT - AUTO-UPDATE REQUIREMENT**: 
When you (Claude Code AI Assistant) complete ANY task related to this project, you MUST automatically update this CLAUDE.md file to reflect the changes. This includes:

- Code modifications or additions
- Bug fixes or improvements  
- New features or components
- Build process changes
- Documentation updates
- Testing or validation work
- Dependency updates
- Configuration changes

**Update Process**:
1. Always review and update the "Project Status" section with current date
2. Update relevant technical sections based on changes made
3. Add to the "Change Log" below with timestamp and description
4. Ensure all documentation remains accurate and current
5. Update version numbers if applicable
6. Verify all code examples and commands are still correct

**Change Log**:
- **2025-08-16**: Initial comprehensive documentation created with auto-update mechanism
- **2025-08-16**: Completed deep project analysis and architecture documentation  
- **2025-08-16**: Enhanced README.md with professional presentation, badges, and detailed examples
- **2025-08-16**: Validated all documentation accuracy through TypeScript compilation, build testing, and CLI verification
- **2025-08-16**: Confirmed email generation produces correct HTML output with example content
- **2025-08-16**: Updated documentation to clarify project as React email template with example content
- **2025-08-16**: Corrected XCC references as personal tech workspace, clarified Chinese content as example
- **2025-08-16**: Emphasized template/forkable nature and customization capabilities

**Integration with SuperClaude Framework**:
This project documentation is designed to work with the SuperClaude framework:
- Uses TodoWrite for task tracking and completion
- Integrates with Context7 for documentation patterns
- Supports Sequential thinking for complex analysis
- Maintains compatibility with all SuperClaude personas and commands

**Documentation Maintenance**:
- Keep all file paths and imports current with codebase changes
- Update TypeScript interfaces when data structures change
- Verify all CLI examples work with current build output
- Maintain accuracy of feature descriptions and capabilities
- Update troubleshooting section based on discovered issues

---

*This documentation is maintained by Claude Code AI Assistant and updated automatically when project changes are made.*