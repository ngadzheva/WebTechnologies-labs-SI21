<?php
    class User {
        private $userName;
        private $password;
        private $email;

        public function __construct($userName, $password, $email) {
            $this->userName = $userName;
            $this->password = $password;
            $this->email = $email;
        }

        public function setUsername($userName) {
            $this->userName = $userName;
        }

        public function getUsername() {
            return $this->userName;
        }
    }

    $user = new User("ivgerves", "pass", "ivgerves@gmail.com");
    echo $user->getUsername();
?>