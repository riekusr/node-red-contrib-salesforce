// const logger = require('../util/logger');
const status = require('../util/nodeStatus');
// const salesforceHelper = require('../util/salesforceHelper');

module.exports = function (RED) {
  'use strict';

  function SalesforceStartFlowNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.salesforce = config.salesforce;
    node.salesforceConfig = RED.nodes.getNode(node.salesforce);

      node.on('input', function (msg) {

        node.flowName = msg.flowName || config.flowName;


        status.info(node, "processing");
        msg.payload = node.flowName; 
        node.send(msg)
      });



  }

  RED.nodes.registerType('salesforce-startFlow', SalesforceStartFlowNode);
}
