<html>
<head>
  <meta charset="utf-8">
</head>
<body>

<form class="form" method="POST">
  <input type="text" name="login">
  <input type="text" name="pass">
  <input type="submit" name="submit">
</form>

<?php
$mysqli = new mysqli('localhost', 'admin', '123', 'mybase');
$mysqli->query("SET NAMES 'utf8'");

if(isset($_POST['submit']))
{

  $query = mysqli_query($link,"SELECT user, pass FROM logins WHERE user='".mysqli_real_escape_string($link,$_POST['login'])."' LIMIT 1");
  $data = mysqli_fetch_assoc($query);


  if($data['pass'] === md5(md5($_POST['pass'])))
  {
    $hash = md5(generateCode(10));


    setcookie("id", $data['user_id'], time()+60*60*24*30);
    setcookie("hash", $hash, time()+60*60*24*30);
  }
  else
  {
    print "Вы ввели неправильный логин/пароль";
  }
}
$mysqli->close();

//if ($_SERVER['REQUEST_METHOD']=='POST') {
//  $mysqli = new mysqli('localhost', 'admin', '123', 'mybase');
//  $mysqli->query("SET NAMES 'utf8'");
//  $login = $_POST['login'];
//  $pass = $_POST['pass'];
//
//  $mysqli->query("INSERT INTO logins (user, pass) VALUES ('$login', '" . md5("$pass") . "')");
//
//
//  $mysqli->close();
//}
?>
</body>
</html>
