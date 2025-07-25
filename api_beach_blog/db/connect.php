<?php
function connect () {
    $host = 'localhost';
    $user = 'root';
    $password = 'root';
    $db_name = 'beach_blog';
    $conn = mysqli_connect($host, $user, $password, $db_name);
    if ($conn->connect_error) {
        die("Connection failed!");
    }
    return $conn;
}

function query($sql) {
    $conn = connect();
    return $conn->query($sql);
}

function insert($sql) {
    $conn = connect();
    $conn->query($sql);
    return $conn->insert_id;
}