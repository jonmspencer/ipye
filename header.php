<!DOCTYPE html>
<html>
  <head>
    <title>Pizza Shop</title>
    <link rel="stylesheet" type="text/css" href="assets/styles/style.css">
    <script src="assets/scripts/jQuery.js"></script>
  </head>
  <body>
    <?php require_once('partials/_signup.php');
    require_once('partials/_login.php'); ?>
    <div class="curtain hide"></div>
    <header>
      <a href="/" class="logo phark" style="background-image: url('/assets/images/logo.png');">Pizza Shop Name</a>
      <?php require_once('partials/_user.php'); ?>
    </header>
    <?php require_once('partials/_nav.php'); ?>
    <?php require_once('partials/_cart.php'); ?>