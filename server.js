const fastify = require("fastify")({ logger: true });
const path = require("path");

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "build")
});

fastify.get("/", async (Request, reply) => {
  reply.sendFile("index.html");
});

const start = async () => {
  try {
    await fastify.listen(8000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
