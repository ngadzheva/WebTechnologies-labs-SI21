<?php
    $dbtype = "mysql";
    $host = "localhost";
    $username = "root";
    $pass = "";
    $dbname = "www";

    try {
        $connection = new PDO("$dbtype:host=$host;dbname=$dbname", $username, $pass,
            array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

        // $sql = "CREATE TABLE students(
        //     fn INT(6) UNSIGNED NOT NULL,
        //     userID INT NOT NULL,
        //     firstName VARCHAR(30) NOT NULL,
        //     lastName VARCHAR(30) NOT NULL,
        //     PRIMARY KEY (fn),
        //     FOREIGN KEY(userID) REFERENCES users(id)
        // )";
        // $connection->exec($sql);

        // $sql = "INSERT INTO students(fn, userID, firstName, lastName) VALUES(66666, 1, 'Ivan', 'Ivanov')";
        // $connection->exec($sql);

        $sql = "SELECT * FROM students";
        $result = $connection->query($sql);

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo $row['fn'] . ": " . $row['firstName'] . " " . $row['lastName'];
            echo "<br/>";
        }

        $students = $result->fetchAll(PDO::FETCH_ASSOC);

        $sql = "INSERT INTO users(username, password) VALUES(?, ?)";
        $insertUserStatement = $connection->prepare($sql);
        // $insertUserStatement->execute(['user1', 'jfkdfkdfd']);

        $sql = "INSERT INTO students(fn, userID, firstName, lastName) VALUES(?, ?, ?, ?)";
        $insertStudentStatement = $connection->prepare($sql);
        // $insertStudentStatement->execute([66667, 2, 'Student', 'Name']);

        // $sql = "UPDATE students SET lastName = :lastName WHERE userID = :id";
        // $updateStudentStatement = $connection->prepare($sql);
        // $updateStudentStatement->execute(["lastName" => "StudentLastName", "id" => 2]);

        $users = [
            ['user2', 'fjkdsjfkdjgkdf'],
            ['user3', 'djfkdsjgkdfjgkdf'],
            ['user4', 'dksfldsfljdkslfjdsf']
        ];

        $students = [
            [66668, 10, 'fjds', 'jfksjgk'],
            [66669, 11, 'fjddfdss', 'jfkfkdsfsjgk'],
            [66670, 12, 'fjddskfs', 'jfkfdkssjgk']
        ];

        $connection->beginTransaction();

        // foreach($users as $user) {
        //     $insertUserStatement->execute($user);
        // }

        // foreach($students as $student) {
        //     $insertStudentStatement->execute($student);
        // }

        $connection->commit();
    } catch(PDOException $e) {
        $connection->rollBack();
        echo $e->getMessage();
    }
?>