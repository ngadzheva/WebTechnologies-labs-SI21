<?php
    session_start();

    if ($_SESSION) {
        session_unset();
        session_destroy();

        setcookie('token', '', time() - 60 * 30, '/');

        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
?>