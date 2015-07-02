var webpage1 = require('webpage').create();
webpage1
  .openUrl('http://127.0.0.1:17345/', { operation: 'GET', data: {} })
  .then(function(){ // executed after loading
    console.log('----------------------------------');
    console.log('Should be GET:');
    console.log(webpage1.content);
    console.log('----------------------------------');
  });

var webpage2 = require('webpage').create();
webpage2
  .openUrl('http://127.0.0.1:17345/', { operation: 'POST' })
  .then(function(){ // executed after loading
    console.log('----------------------------------');
    console.log('Should be POST:');
    console.log(webpage2.content);
    console.log('----------------------------------');
  });
