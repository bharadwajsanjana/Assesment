<?php
session_start();
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <title>Student Create</title>
</head>
<body>

    <div class="container mt-5">

        <?php include('message.php'); ?>

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Student Add
                            <a href="indexx.php" class="btn btn-danger float-end">BACK</a>
                        </h4>
                    </div>
                    <div class="card-body">
                        <form action="code.php" method="POST">

                            <div class="mb-3">
                                <label>Student Name</label>
                                <input type="text" name="name" pattern="[A-Za-z]{1,10}" title="First name only" class="form-control" /required>
                            </div>
                            <div class="mb-3">
                                <label>Student Age</label>
                                <input type="text" name="age" pattern="[0-9]{1,2}" title="Mention your apt age" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Student Class</label>
                                <input type="text" name="class" class="form-control" pattern="[A-Za-z0-9]{1,10}" title="Just mention your class no or text"  required>
                            </div>
                            <div class="mb-3">
                                <label>Student Section</label>
                                <input type="text" name="section" pattern="[A-Za-z]{1}" title="Just mention your section" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Student RollNo</label>
                                <input type="digit" name="rollno" pattern="\d{1,3}" title="Just three digits" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Student Email</label>
                                <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="include@ and.com" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Student Phone</label>
                                <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" title="3-2-3 ph.no"  class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Student Address</label>
                                <input type="text" name="address" pattern="[A-Za-z]{3,20}" title="Just the place" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <button type="submit" name="save_student" class="btn btn-primary">Save Student</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
