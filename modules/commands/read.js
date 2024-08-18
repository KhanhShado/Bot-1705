const fs = require('fs');
const axios = require('axios');

module.exports.config = {
  name: "read",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Eien Mojiki",
  description: "Reads the contents of a JavaScript file in the commands folder.",
  commandCategory: "Utility",
  usages: "read -c {filename}.js | read -a {url} | read -j {api-url}",
  cooldowns: 5
};

module.exports.run = async function({ args, event, api }) {
  const option = args[0];
  switch (option) {
    case '-c': {
      const filename = args[1];
      if (!filename) {
        return api.sendMessage("Please provide a file name to read.", event.threadID);
      }

      const path = `./modules/commands/${filename}`;
      if (!fs.existsSync(path)) {
        return api.sendMessage(`File '${filename}' not found.`, event.threadID);
      }

      const content = fs.readFileSync(path, 'utf8');
      return api.sendMessage(content, event.threadID);
    }
    case '-a': {
      const url = args[1];
      try {
        const response = await axios.get(url);
        const content = response.data;
        return api.sendMessage(content, event.threadID);
      } catch (error) {
        return api.sendMessage(`Error while reading data from ${url}: ${error}`, event.threadID);
      }
    }
    case '-j': {
      const apiUrl = args[1];
      try {
        const response = await axios.get(apiUrl);
        const content = JSON.stringify(response.data, null, 2);
        return api.sendMessage(content, event.threadID);
      } catch (error) {
        return api.sendMessage(`Error while reading data from ${apiUrl}: ${error}`, event.threadID);
      }
    }
    default: {
      return api.sendMessage(`Invalid option '${option}'. Please use '-c' to read a file, '-a' to read data from a URL, or '-j' to read JSON data from an API.`, event.threadID);
    }
  }
};