<?php 
session_start();
require_once './connect.php';


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="gameover">
        <picture>
            <img src="./GregariousSociableIbis-size_restricted.gif" alt="game_over">
            <button id="rejouer2"><img src="./replay.png" alt=""></button>
        </picture>
    </div>
    <h1>Memory</h1>
    <div>
        <div id="timer"></div>

        <form action="#" methode="GET">
            <label>Pseudo</label>
            <input type="text" name='pseudo'>
            <div id="off">Score :</div>

            <input type="submit" name='submit' value='Envoyer'>
        </form>
    </div>
    <div id="memory"></div> 
    <button id='rejouer'> Rejouer </button>
    <script src="main.js"></script> 
</body>
</html>