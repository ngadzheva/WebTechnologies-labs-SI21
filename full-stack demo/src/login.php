<?php
    require_once 'user.php';

    session_start();

    header('Content-Type: application/json');

    $errors = [];
    $response = [];

    if (isset($_POST)) {
        $data = json_decode($_POST['data'], true);

        // TODO: testInput

        if(!$data['userName']) {
            $errors[] = 'Please eneter user name';
        }

        if(!$data['password']) {
            $errors[] = 'Please enter password';
        }

        if($data['userName'] && $data['password']) {
            $user = new User($data['userName'], $data['password']);
            $isValid = $user->isValid();

            if($isValid['success']) {
                $_SESSION['username'] = $user->getUsername();
                $_SESSION['email'] = $user->getEmail();
                $_SESSION['userId'] = $user->getUserId();

                if ($data['remember']) {
                    // Create cookie for remembering the user
                }
            } else {
                $erros[] = $isValid['error'];
            }
        }
    } else {
        $error[] = 'Invalid request';
    }

    if($errors) {
        $response = ['success' => false, 'data' => $errors];
    } else {
        $response = ['success' => true];
    }

    echo json_encode($response);
?>