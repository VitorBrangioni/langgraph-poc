# LangGraph POC

A simple proof-of-concept demonstrating how to build an AI agent with tool calling using [LangGraph.js](https://langchain-ai.github.io/langgraphjs/).

## What it does

This project creates a **Math Agent** that can perform calculations by calling tools. The agent uses GPT-4o-mini and has access to:

- `add` - Add two numbers
- `multiply` - Multiply two numbers
- `divide` - Divide two numbers

## Architecture

```
START → llmCall → shouldContinue? → toolNode → llmCall → ... → END
```

The agent loops between the LLM and tools until the task is complete.

## Setup

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your OpenAI API key:
   ```
   OPENAI_API_KEY=your-key-here
   ```

## Run

```bash
npm run dev
```

## Tech Stack

- [LangGraph.js](https://github.com/langchain-ai/langgraphjs) - Agent orchestration
- [LangChain](https://github.com/langchain-ai/langchainjs) - LLM framework
- TypeScript
