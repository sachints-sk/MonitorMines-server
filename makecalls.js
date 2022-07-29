// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC0324614f0559ce1ea8bb029a4141205b';
const authToken = '2c97de793852fe9eba250f45550d2752';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
        twiml: '<Response><Play>https://assets.mixkit.co/sfx/preview/mixkit-siren-tone-1649.mp3</Play><Say>Important , high amount of poisonous gas detected near device 0 1 , please rescue fast!</Say><Play>https://assets.mixkit.co/sfx/preview/mixkit-siren-tone-1649.mp3</Play><Play>https://assets.mixkit.co/sfx/preview/mixkit-siren-tone-1649.mp3</Play><Say>Important , high amount of poisonous gas detected near device 0 1 , please rescue fast!</Say><Play>https://assets.mixkit.co/sfx/preview/mixkit-siren-tone-1649.mp3</Play><Play>https://assets.mixkit.co/sfx/preview/mixkit-siren-tone-1649.mp3</Play><Say>Important , high amount of poisonous gas detected near device 0 1 , please rescue fast!</Say><Play>https://assets.mixkit.co/sfx/preview/mixkit-siren-tone-1649.mp3</Play></Response>',
         to: '+919645115583',
         from: '+19789614927'
       })
      .then(call => console.log(call.sid));
