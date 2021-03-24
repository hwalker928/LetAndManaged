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
    return {
      send: true,
      result: `${msg}`
    };
  }

};
