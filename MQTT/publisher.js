var express = require('express');
var router = express.Router();
var mqtt = require('mqtt');


NodeID='123456'
PASSWD='123456'
var option1 = {
        username:NodeID,
        password:PASSWD
      };
var client=mqtt.connect('mqtt://localhost:1883',option1)


client.on('connect',()=>{
  console.log("MQTT Connected");
});


client.on('close',()=>{
console.log('MQTT Disconnected');
});

var time = getTime();

router.post('/',(req,res)=>{

  var TXN_ID=NodeID+req.body.id+time;
  topics=NodeID;
  msgs=TXN_ID;

  client.publish(topics,msg,()=>{
  });

  res.json({
    success:true,
    msg:'PUBLISHED'
  });
});

module.exports=router
