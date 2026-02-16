import { HumanMessage } from "@langchain/core/messages";
import { END, START, StateGraph } from "@langchain/langgraph";
import { MessagesState } from "./state";
import llmCall from "./nodes/llmCall";
import toolCall from "./nodes/toolCall";
import shouldContinue from "./edges/shouldContinue";

const agent = new StateGraph(MessagesState)
  .addNode("llmCall", llmCall)
  .addNode("toolNode", toolCall)
  .addEdge(START, "llmCall")
  .addConditionalEdges("llmCall", shouldContinue, ["toolNode", END])
  .addEdge("toolNode", "llmCall")
  .compile();


export async function invokeAgent(): Promise<any> {
  const result = await agent.invoke({
    messages: [new HumanMessage("What is the square root of 16?")],
  });
  console.log("Result:", result);

  for (const message of result.messages) {
    console.log(`[${message.type}]: ${message.text}`);
  }

  return result;
}