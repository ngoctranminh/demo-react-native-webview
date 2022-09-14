const html = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <button onclick="send()">OK ban</button>
</body>

<script>
  var popup = window.open("http://172.18.163.169:5500", 'hello');


  function a() {

  }
  function send() {
    alert(popup)
    w.postMessage("Hello, window-2! i am window-1", "http://127.0.0.1:5500/index.html");
  }

</script>

</html>`

export default html;