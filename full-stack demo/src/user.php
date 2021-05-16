<?php
    require_once "db.php";

    class User {
        private $username;
        private $password;
        private $email;
        private $userId;

        private $db;

        public function __construct($username, $password) {
            $this->username = $username;
            $this->password = $password;

            $this->db = new Database();
        }

        public function getUsername() {
            return $this->username;
        }

        public function getEmail() {
            return $this->email;
        }

        public function getUserId() {
            return $this->userId;
        }

        public function userExists() {
            $query = $this->db->selectUserQuery(["user" => $this->username]);

            if ($query["success"]) {
                $user = $query["data"]->fetch(PDO::FETCH_ASSOC);

                if ($user) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return $query;
            }
        }

        public function isValid() {
            $query = $this->db->selectUserQuery(["user" => $this->username]);

            if ($query["success"]) {
                $user = $query["data"]->fetch(PDO::FETCH_ASSOC);

                if ($user) {
                    if (password_verify($this->password, $user["password"])) {
                        $this->password = $user["password"];
                        $this->email = $user["email"];
                        $this->userId = $user["id"];

                        return ["success" => true];
                    } else {
                        return ["success" => false, "error" => "Invalid password"];
                    }
                } else {
                    return ["success" => false, "error" => "Invalid username"];
                }
            } else {
                return $query;
            }
        }

        public function createUser($passwordHash, $email) {
            $query = $this->db->insertUserQuery(["username" => $this->username, "password" => $passwordHash, "email" => $email]);

            if ($query["success"]) {
                $this->password = $passwordHash;
                $this->email = $email;

                return $query;
            } else {
                return $query;
            }
        }
    }
?>