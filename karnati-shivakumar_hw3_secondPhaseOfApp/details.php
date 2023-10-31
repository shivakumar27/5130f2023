<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection details
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "user_info";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
        $firstName = $_POST["firstName"];
        $lastName = $_POST["lastName"];
        $email = $_POST["email"];
        $gender = $_POST["gender"];
        $currentLocation = $_POST["currentLocation"];
        $cityOfBirth = $_POST["cityOfBirth"];
        $dreamDestination = $_POST["dreamDestination"];
        $role = $_POST["role"];
        $interests = $_POST["Interests"];
        $uploadfile = $_POST["uploadfile"];
        // You can process or store this data as needed.

        // For demonstration purposes, we'll display the submitted data.
       // echo "<h2>Submitted Data:</h2>";
       // echo "<p>First Name: $firstName</p>";
       // echo "<p>Last Name: $lastName</p>";
       // echo "<p>Email: $email</p>";
       // echo "<p>Gender: $gender</p>";
       // echo "<p>Current Location: $currentLocation</p>";
       // echo "<p>City of Birth: $cityOfBirth</p>";
       // echo "<p>Dream Destination: $dreamDestination</p>";
       // echo "<p>Role: $role</p>";
       // echo "<p>Interests: $interests</p>";

            // Insert data into the database
    $sql = "INSERT INTO user_table (firstName, lastName, email, gender, currentLocation, cityOfBirth, dreamDestination, role, interests, uploadfile)
                VALUES ('$firstName', '$lastName', '$email', '$gender', '$currentLocation', '$cityOfBirth', '$dreamDestination', '$role', '$interests', '$uploadfile')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

// Close the database connection
    $conn->close();
}
?>