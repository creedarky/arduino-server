var socket = io();

var dataContainer = document.querySelector('#data');
socket.on('data', function(data) {
  dataContainer.insertAdjacentHTML('beforeend', '<p>' + data.temperature + '</p>')
});
