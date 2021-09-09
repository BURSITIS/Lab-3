var socket = io.connect("http://localhost:3000", { forceNew: true });

socket.on("messages", function (data) {
  console.log(data);
  render(data)
});

function render(data) {
    var html = `<div>
                <strong>${data}</strong>:
              </div>`;
  
    document.getElementById("messages").innerHTML = html;
  }