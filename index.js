const { Plugin } = require('powercord/entities');
const { get } = require('powercord/http');

module.exports = class LetAndManaged extends Plugin {

  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'addquote',
      description: 'Adds a quote to the list.',
      usage: '{c} [quotation]',
      executor: (args) => this.addquote(args)
    });
    powercord.api.commands.registerCommand({
      command: 'randomquote',
      description: 'Sends a random quote from the list.',
      usage: '{c}',
      executor: this.randomquote.bind()
    });
  }

  pluginWillUnload() {
     powercord.api.commands.unregisterCommand('addquote');
     powercord.api.commands.unregisterCommand('randomquote');
  }
  
  async addquote(args) {
    const data = await get(`https://LetAndManaged.18walkerh.repl.co/addquote?quote=${args.join(' ')}&apikey=harry`);
    return {
      send: false,
      result: `${data.body}`
    };
  }
  
  async randomquote() {
    const data = await get(`https://LetAndManaged.18walkerh.repl.co/randomquote?apikey=harry`);
    return {
      send: true,
      result: `${data.body}`
    };
  }

};
