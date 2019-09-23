var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//アクセスに対して反応を返す。 index.htmlファイルを返しています。
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//クライアントと接続。 
//接続するとコマンドラインに 「connected!」 と表示されます。
io.on('connection', function(socket){
  console.log('connected!');
});

//アクセスを待ち受け。ポートは3000番です。
http.listen(3000, function(){
  console.log('listening on *:3000');
});