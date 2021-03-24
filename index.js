const { Plugin } = require('powercord/entities');
const { post } = require('powercord/http');

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
    const res = await post('url').set('content-type', 'application/json').send({ quote: 'uwu' })
    return {
      send: false,
      result: res
    };
  }

};
