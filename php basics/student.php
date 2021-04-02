<?php
    require_once "user.php";

    class Student extends User {
        private $firstName;
        private $lastName;
        private $fn;

        public function __construct($userName, $password, $email, $firstName, $lastName, $fn) {
            parent::__construct($userName, $password, $email);

            $this->firstName = $firstName;
            $this->lastName = $lastName;
            $this->fn = $fn;
        }

        public function getStudentInfo() {
            return parent::getUserName() . ": " . $this->firstName . " " . $this->lastName;
        }
    }

    $student = new Student("ivgerves", "pass", "ivgerves@gmail.com", "Ivan", "Ivanov", 66666);
    $student->getUserName();
    $student->getStudentInfo();
?>