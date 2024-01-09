<?php
    session_start(); // Start a session to store user data
    
    $serverName = "DESKTOP-CC8UR9F\SQLEXPRESS";
    $connectionOptions = array(
        "Database" => "WEBAPP",
        "Uid" => "",
        "PWD" => ""
    );
    
    $conn = sqlsrv_connect($serverName, $connectionOptions);
    
    if ($conn === false) {
        die(print_r(sqlsrv_errors(), true));
    }
    
    if (isset($_POST['submit'])) {
        $email = $_POST['email'];
        $pass = $_POST['pass'];
    
        
        $query = "SELECT * FROM F1 WHERE EMAIL = ? AND PASSWORD = ?";
        $params = array($email, $pass);
        $result = sqlsrv_query($conn, $query, $params);
    
        if ($result === false) {
            die(print_r(sqlsrv_errors(), true));
        }
    
        $row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC);
    
        if ($row) {
            
            $_SESSION['f1_id'] = $row['F1_ID'];
            $_SESSION['email'] = $row['EMAIL'];
            header("Location: Mentor.php"); 
            exit();
        } else {
            
            echo 'Login Failed. Please check your credentials.';
        }
    }
?>
