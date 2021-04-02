<?php
    $age = 22;
    $name = "Nevena";

    function add() {
        global $age, $name;

        $five = 5;

        echo $age + $five;
        echo $name;
    }

    add();

    function increment() {
        static $a = 0;

        echo $a;

        ++$a;
    }

    echo "<br/>";
    
    increment();
    increment();
    increment();

    echo "<br/>";

    function makeCoffee($type = "cappuccino") {
        echo "Making a cup of $type.<br/>";
    }

    makeCoffee();
    makeCoffee(null);
    makeCoffee("latte");

    $array = array();
    $array[0] = 2;
    $array[1] = 5;
    $array[] = 10;
    $array[] = 6;

    echo "<br/>";

    var_dump($array);

    echo "<br/>";

    print_r($array);

    foreach($array as $value) {
        echo "<br/>";
        echo $value;
    }

    array_push($array, 8);
    echo "<br/>";
    print_r($array);

    array_unshift($array, 3);
    echo "<br/>";
    print_r($array);

    array_pop($array);
    echo "<br/>";
    print_r($array);

    array_shift($array);
    echo "<br/>";
    print_r($array);

    array_slice($array, 1, 3);
    array_splice($array, 2, 2);

    echo "<br/>";
    print_r($array);

    array_splice($array, 1, 0, 30);

    echo "<br/>";
    print_r($array);

    sort($array);
    rsort($array);

    $namedArray = array("name" => "John", "age" => 23);
    $otherNamedArray = ["name" => "Jack", "age" => 22];

    echo "<br/>";
    print_r($namedArray);

    echo "<br/>";
    var_dump($otherNamedArray);

    $namedArray["name"];
    $namedArray["age"];

    $namedArray["fn"] = 66666;

    echo "<br/>";
    print_r($namedArray);

    foreach($namedArray as $key => $value) {
        echo "<br/>";
        echo "$key: $value";
    }

    $twoDimensionalArray = [
        [1, 2, 3],
        [3, 2, 6]
    ];

    $namedArr = [
        "first" => [
            "name" => "Some name", 
            "age" => 22
        ],
        "second" => [
            "name" => "Some other name", 
            "age" => 23
        ]
    ];

    echo "<br/>";

    $letters = ['a', 's', 'd', 'f'];
    echo implode('', $letters);
    $string = 'as:df';
    $arr = explode(':', $string);
    print_r($arr);
?>