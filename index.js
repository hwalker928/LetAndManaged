const { Plugin } = require('powercord/entities');
const { get } = require('powercord/http');

module.exports = class LetAndManaged extends Plugin {

  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'addquote',
      description: 'Adds a quote to the list.',
      usage: '{c} [quotation]',
      executor: this.addquote.bind()
    });
  }

  pluginWillUnload() {
     powercord.api.commands.unregisterCommand('addquote');
  }
  
  async addquote() {
    const data = await get(`https://LetAndManaged.18walkerh.repl.co/?quote=hi`);
    return {
      send: false,
      result: `${data.body.content}`
    };
  }

};
