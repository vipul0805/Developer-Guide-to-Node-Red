module.exports=function(RED){

    function ExampleNode(n){

      RED.nodes.createNode(this,n);
      var node=this;
      node.operation=n.operation;
      node.floor=n.floor;
      node.round=n.round;
      node.sqrt=n.sqrt;


      this.on("input",function(msg){
        if(typeof msg.payload==="number"){
          if(node.operation==="round"){
            msg.payload=Math.round(msg.payload);
          }else if(node.operation==="floor"){
            msg.payload=Math.floor(msg.payload);
          }else if(node.operation==="sqrt"){
            msg.payload=Math.sqrt(msg.payload);
          }
          node.send(msg);
        }else{
          node.error("Payload is not a number",msg);
        }
      })
    }

    RED.nodes.registerType("operation",ExampleNode);
}
