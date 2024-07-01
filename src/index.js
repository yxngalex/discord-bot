require("dotenv").config();

const { Client, IntentsBitField } = require("discord.js");

const token = process.env.TOKEN;
const channelId = process.env.CHANNEL_ID;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`The bot [${c.user.username}] is online`);

  const channel = client.channels.cache.get(channelId);

  if (channel) {
    const today = new Date();
    const day = today.getDate();

    if (day === 22) {
      channel
        .send("@everyone Podsetnik za spotify premium pretplatu <3")
        .then(() => console.log("Message sent successfully"))
        .catch((error) => console.error("Failed to send message:", error));
    }
  }
});

client.login(token).catch((error) => console.log("Failed to login:", error));
