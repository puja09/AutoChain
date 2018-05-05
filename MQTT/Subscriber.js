var mqtt = require('mqtt');
var fs = require('fs');
var rdpath='Specify read file path';
var wrpath='Specify write file path';


NodeID='123456'
PASSWD='123456'
var option1 = {
        username:NodeID,
        password:PASSWD
      };
var client=mqtt.connect('mqtt://localhost:1883',option1)


client.on('connect',()=>{
  console.log("MQTT Connected");
  client.subscribe('#');
});


client.on('close',()=>{
console.log('MQTT Disconnected');
});

client.on('message', (topic, message) => {
	var wr_option={
		flag:'a'
	}
	var recieved=JSON.parse(message.toString())
	var toWrite={
		msg:recieved.msg
	}
	var rdFile=fs.readFileSync(rdpath);
	RD_Arr=rdFile.toString().split("\n");
	RD_Arr.forEach(element => {
		if(recieved.topic==element){
			fs.writeFile(wrpath,toWrite[wr_option],(err)=>{
				if(err){
					console.log(err);
				}
			});
		}
	});	
	});


