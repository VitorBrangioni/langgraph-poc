import { AIMessage, ToolMessage } from "@langchain/core/messages";
import { GraphNode } from "@langchain/langgraph";
import { toolsByName } from "../../tools/math";
import { MessagesState } from "../state";

const toolNode: GraphNode<typeof MessagesState> = async (state) => {
  const lastMessage = state.messages.at(-1);

  if (lastMessage == null || !AIMessage.isInstance(lastMessage)) {
    return { messages: [] };
  }

  const result: ToolMessage[] = [];
  for (const toolCall of lastMessage.tool_calls ?? []) {
    if (toolCall.name in toolsByName) {
      const tool = toolsByName[toolCall.name as keyof typeof toolsByName];
      const observation = await tool.invoke(toolCall);
      result.push(observation);
    }
  }

  return { messages: result };
};

export default toolNode;