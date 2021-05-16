<?php
    require_once "user.php";
    
    $errors = [];
    $response = [];

    if ($_POST) {
      $data = json_decode($_POST["data"], true);

      // $userName = testInput($data["userName"]);
      // $password = testInput($data["password"]);
      // $confirmPassword = testInput($data["confirmPassword"]);
      // $email = testInput($data["email"]);

      if (!$data['userName']) {
        $errors[] = "Username is required.";
      }

      if (!$data['password']) {
        $errors[] = "Password is required.";
      }

      if (!$data['confirmPassword']) {
        $errors[] = "Password confirmation is required.";
      }

      if ($data['userName'] && $data['password'] && $data['confirmPassword']) {
        if ($data['password'] != $data['confirmPassword']) {
          $errors[] = "Password confirmation does not match password.";
        } else {
            // TODO: 
            // * Check for user existance
            // * Hash password
            // * Create user in DB
            $user = new User($data['userName'], $data['password']);
            $exists = $user->userExists();

            if ($exists) {
              $errors[] = "Username is already taken.";
            } else {
              $passwordHash = password_hash($data['password'], PASSWORD_DEFAULT);
              $user->createUser($passwordHash, $data['email']);
            }
        }
      }
    } else {
      $erros[] = "Invalid request.";
    }

    if ($errors) {
      $response = ["success" => false, "data" => $errors];
    } else {
      $response = ["success" => true];
    }

    echo json_encode($response);
?>