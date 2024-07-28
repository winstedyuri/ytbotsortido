// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    console.log(`Received message: ${msg.content}`);

    const content = msg.content;

    if(content.startsWith("#cmd")) {
        msg.reply("Você utilizou o comando sortido")
    }

    if (msg.content === 'ping') {
        msg.reply('Pong!')
    }

    if (msg.content === 'faz o L' || msg.content === 'faz o l') {
        msg.reply('Faça o L imediatamente!!!')
    }
});

client.login(process.env.DISCORD_TOKEN);
