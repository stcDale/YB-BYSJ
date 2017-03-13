<?php
  include'conndb.php';
?>
<?php
 $v_name=$_REQUEST["name"];
 $v_pwd=$_REQUEST["pwd"];
 $v_sex=$_REQUEST["sex"];
 $v_lx=$_REQUEST["lx"];
 $v_phone=$_REQUEST["phone"];
 echo $v_name;
 echo $v_pwd;
 echo $v_lx;
 echo $v_phone;
 echo $v_sex;
 $sql="insert into user(name,pwd,sex,lx,phone) values('$v_name','$v_pwd','$v_sex','&v_lx',$v_phone)";
 $result=mysql_query($sql,$db_link);
 if(!empty($result)){
 echo "1";
 }
 else{
 echo $result;
 }
?>