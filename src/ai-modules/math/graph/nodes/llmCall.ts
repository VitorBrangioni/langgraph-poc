import { SystemMessage } from "@langchain/core/messages";
import { GraphNode } from "@langchain/langgraph";
import mathModelWithTools from "../../llm-models/math";
import { MessagesState } from "../state";


const llmCall: GraphNode<typeof MessagesState> = async (state) => {
    const response = await mathModelWithTools.invoke([
        new SystemMessage(
            "You are a helpful assistant tasked with performing arithmetic on a set of inputs."
        ),
        ...state.messages,
    ]);
    return {
        messages: [response],
        llmCalls: 1,
    };
};

export default llmCall;