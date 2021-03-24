const { Plugin } = require('powercord/entities');
const { get } = require('powercord/http');

module.exports = class LetAndManaged extends Plugin {

  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'addquote',
      description: 'Adds a quote to the random list.',
      usage: '{c}{msg}',
      executor: this.quote.bind()
    });
  }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('addquote');
    }

  async quote() {
    const data = await get(`http://api.quotable.io/random`);
    return {
      send: true,
      result: `${data.body.content}`
    };
  }

};
