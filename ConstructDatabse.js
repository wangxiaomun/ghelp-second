var mysql = require('mysql');
var client = mysql.createConnection({
host: 'localhost',
user: 'wangxiaomun',
password: 'wangxiaomun'
});

client.query('CREATE DATABASE IF NOT EXISTS Ghelp');
client.query('USE Ghelp');
client.query(  
  'CREATE TABLE IF NOT EXISTS UserInfo'+  //Userinfor table used for register and log in 
  '(ID INT(11) AUTO_INCREMENT, '+  
  'NAME VARCHAR(255), '+
  'PASSWORD VARCHAR(255), '+ 
  'EMAIL VARCHAR(255), '+ 
  'PRIMARY KEY (ID))'  
);  
/*client.query('INSERT INTO UserInfo (NAME,PASSWORD,EMAIL) VALUES ("WANGXIAOMUN","WANGXIAOPASSWORD","WANGXIAOMUN@GMIAL.COM")');* test case */

client.query(  
  'CREATE TABLE IF NOT EXISTS Profile'+  //Profile table used for update presonal infor after register 
  '(ID INT(11) AUTO_INCREMENT, '+  
  'NAME VARCHAR(255), '+
  'GENDER VARCHAR(255), '+ 
  'EMAIL VARCHAR(255), '+ 
  'BORNAT VARCHAR(255), '+ 
  'BORNIN VARCHAR(255), '+ 
  'LANGUAGE VARCHAR(255), '+ 
  'MAJOR VARCHAR(255), '+ 
  'DEPARTMENT VARCHAR(255), '+ 
  'JOB VARCHAR(255), '+
  'FAMILY VARCHAR(255), '+ 
  'RELIGION VARCHAR(255), '+ 
  'LIVEADRESS VARCHAR(255), '+ 
  'MAILBOX VARCHAR(255), '+ 
  'IDENTITY VARCHAR(255), '+   
  'PRIMARY KEY (ID))'  
);  

client.query(  
  'CREATE TABLE IF NOT EXISTS HOUSE'+  //HOUSE table used for HOUSE INFORMATION 
  '(ID INT(11) AUTO_INCREMENT, '+  
  'NAME VARCHAR(255), '+
  'TIME DATETIME, '+ 
  'RENT INT(11), '+ 
  'HOST VARCHAR(255), '+ 
  'AMOUNT INT(11), '+ 
  'AVALIABLE INT(11), '+ 
  'PRIMARY KEY (ID))'  
);

client.query(  
  'CREATE TABLE IF NOT EXISTS EVENT'+  //EVENT table used for publish event 
  '(ID INT(11) AUTO_INCREMENT, '+  
  'NAME VARCHAR(255), '+
  'TIME DATETIME, '+ 
  'AMOUNT INT(11), '+ 
  'PRIMARY KEY (ID))'  
);  


client.end();