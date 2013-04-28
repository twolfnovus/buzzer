var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/tty.usbserial-A600JSRZ", {
  baudrate: 115200
}, false);
  
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Buzzer' });
};

exports.buzz = function(req, res){
  // setTimeout(function() {
  //   serialPort.
  // }, 4000);

  serialPort.open(function () {
      serialPort.write("H", function(err, results) {
        if (err) console.log('error:' + err);
      });
      setTimeout(function() {
        serialPort.write("A", serialOff);
        res.send('Buzz');
      }, 4000);
    });

  function serialOff(e, r) {
    if (e) {
      console.log('error:' + e);
      serialPort.write(" ", serialOff);
    }  
  }
};