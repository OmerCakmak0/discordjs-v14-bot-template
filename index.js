const {Client, GatewayIntentBits, Partials, Collection} = require('discord.js');
const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember} = Partials;

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember]
});

const { loadEvents } = require('./handlers/eventHandler');

const title = `
███╗░░██╗███████╗████████╗██████╗░██╗░░░██╗░██████╗
████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░██║██╔════╝
██╔██╗██║█████╗░░░░░██║░░░██████╔╝██║░░░██║╚█████╗░
██║╚████║██╔══╝░░░░░██║░░░██╔═══╝░██║░░░██║░╚═══██╗
██║░╚███║███████╗░░░██║░░░██║░░░░░╚██████╔╝██████╔╝
╚═╝░░╚══╝╚══════╝░░░╚═╝░░░╚═╝░░░░░░╚═════╝░╚═════╝░`;
console.log(title + '\n----------------------------------------------------');

client.config = require('./config.json');
client.events = new Collection();

loadEvents(client);

client.login(client.config.token);