var moment = require('moment');

//console.log(moment().format());

var now = moment();

//console.log('Current timestamp ' +  now);

let timestamp = now.unix();

//console.log('Current date ' +  now.unix(timestamp));
//console.log('Current date ' +  moment.unix(timestamp).format('MMMM D, YYYY @ kk:mm'));
