const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const axios = require('axios');
const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { MessageAttachment2 } = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.DISCORD_BOT_TOKEN;
const { MessageEmbed } = require("discord.js");

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);

    bot.user.setActivity(`made by ItsMB`, { type: 'WATCHING' });
});
