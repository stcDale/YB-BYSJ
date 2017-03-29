<?php
   include'conndb.php';
  ?>
  <?php
  header("Content-type:text/html;charset=utf-8");
   $v_uname=$_REQUEST["username"];
   $v_upwd=$_REQUEST["password"];
   $sql="select * from user where name='$v_uname' and pwd='$v_upwd'";
   mysql_query("SET NAMES UTF8");
   $result=mysql_query($sql,$db_link);
  session_start();
   if($v1=mysql_fetch_array($result)){
      $_SESSION['uname']=$v1['name'];
      $_SESSION['uid']=$v1['id'];
   }
  else{
  echo'µÇÂ¼Ê§°Ü';
  }
  ?>