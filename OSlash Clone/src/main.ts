import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./userschema";
import { myPlugin } from "./plugins/authPlug";
import { metricsPlugin } from "./plugins/metrics";

function main() {
  const yoga = createYoga({ schema, plugins: [myPlugin,metricsPlugin] });

  const server = createServer(yoga);

  server.listen(4000, () => {
    console.info("🚀 Server is running on http://localhost:4000/graphql");
  });
}
main();


