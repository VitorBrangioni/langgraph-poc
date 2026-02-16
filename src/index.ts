import "dotenv/config";
import { invokeAgent } from "./ai-modules/math/graph/agent";

(async () => {
  console.log("Invoking agent...");
  const result = await invokeAgent();
})();