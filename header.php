<!DOCTYPE html>
<html>
  <head>
    <title>Pizza Shop</title>
    <link rel="stylesheet" type="text/css" href="assets/styles/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
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
    <div class="right-bar">
      <?php // require_once('partials/_cart.php'); ?>
    </div><!-- END RIGHT BAR -->