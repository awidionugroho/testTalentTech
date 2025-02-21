const { Kafka } = require("kafkajs");
const dotenv = require("dotenv");

dotenv.config();

const kafka = new Kafka({
  clientId: "appConsumer",
  brokers: [process.env.BROKERS],
});

const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
    },
  });
};

run().catch(console.error);
