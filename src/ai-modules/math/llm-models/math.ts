import { ChatOpenAI } from "@langchain/openai";
import tools from "../tools/math";

const mathModel = new ChatOpenAI({
    model: 'gpt-4o-mini',
    temperature: 0,
    apiKey: process.env.OPENAI_API_KEY,
});

const mathModelWithTools = mathModel.bindTools(tools);

export default mathModelWithTools;
