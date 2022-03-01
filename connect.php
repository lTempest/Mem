<?php
try{
$db = new PDO ('mysql:host=localhost;dbname=cms;charset=utf8','root');

} catch (PDOException $e) {
    echo 'Echec de la connection' . $e->getMessage();
}
