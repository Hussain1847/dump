<?php


define(constant_name:'DB_SERVER' , value:'localhost');
define(constant_name:'DB_USERNAME' , value:'root');
define(constant_name:'DB_PASSWORD' , value:'');
define(constant_name:'DB_NAME' , value:'db');

$link = mysqli_connect ( DB_SERVER,   DB_USERNAME, DB_PASSWORD,  DB_NAME);

//CHECK CONNECTION
if($link === false){
    die("ERROR: Could not connect.". mysqli_connect_error());
}

