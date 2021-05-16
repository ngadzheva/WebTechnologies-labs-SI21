<?php
    require_once 'db.php';

    class Mark {
        private $id;
        private $studentFn;
        private $mark;

        private $db;

        public function __construct($studentFn, $mark) {
            $this->db = new Database();

            $this->studentFn = $studentFn;
            $this->mark = $mark;
        }

        public function setId($id) {
            $this->id = $id;
        }

        public function getId() {
            return $this->id;
        }

        public function setStudentFn($studentFn) {
            $this->studentFn = $studentFn;
        }

        public function getStudentFn() {
            return $this->studentFn;
        }

        public function setMark($mark) {
            $this->mark = $mark;
        }

        public function getMark() {
            return $this->mark;
        }

        // TODO
        public function validateMark() {

        }

        public function getAllMarks() {
            $query = $this->db->selectMarks();

            if ($query["success"]) {
                return $query["data"]->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return $query;
            }
        }

        public function addMark() {
            $query = $this->db->insertMark(["fn" => $this->studentFn, "mark" => $this->mark]);
        }

        public function getAllMarksWithStudents() {
            $query = $this->db->selectStudentsWithMarksQuery();

            if ($query["success"]) {
                return $query["data"]->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return $query;
            }
        }
    }
?>