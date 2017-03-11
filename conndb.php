<?php
$db_link=mysql_connect("localhost","root","admin") or die("数据库服务器连接失败！".mysql_error());
 $db=mysql_select_db("yb",$db_link);
?>