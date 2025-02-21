const { Kafka } = require("kafkajs");
const readline = require("readline");
const dotenv = require("dotenv");

dotenv.config();

const kafka = new Kafka({
  clientId: "appProducer",
  brokers: [process.env.BROKERS],
});

const producer = kafka.producer();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const run = async () => {
  await producer.connect();
  console.log("Producer connected to Kafka.");

  const askForInput = () => {
    rl.question('Please type Key(or type "exit" to quit): ', (key) => {
      if (key.toLowerCase() === "exit") {
        console.log("Exiting producer...");
        rl.close();
        producer.disconnect();
        return;
      }

      rl.question("Value: ", async (value) => {
        if (value.toLowerCase() === "exit") {
          console.log("Exiting producer...");
          rl.close();
          producer.disconnect();
          return;
        }

        const strMsg = `Key: ${key} - Value: ${value}`;

        try {
          await producer.send({
            topic: "test-topic",
            messages: [{ value: strMsg }],
          });
          console.log("Message sent successfully!");
        } catch (error) {
          console.error("Error sending message", error);
        }

        askForInput();
      });
    });
  };

  askForInput();
};

run().catch(console.error);
