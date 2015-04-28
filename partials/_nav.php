<?php
  $full_name = $_SERVER['PHP_SELF'];
  $name_array = explode('/',$full_name);
  $count = count($name_array);
  $page_name = $name_array[$count-1];
?>
<section class="left-bar"> 
  <ul class="yep menu primary-nav">
    <li>
      <a class="menu-item <?php echo ($page_name=='specialty-pizzas.php')?'active':'';?>" href="specialty-pizzas.php" title="Specialty Pizzas">
        <span class="image" style="background-image: url('/assets/images/specialty-pizzas.jpg');"></span>
        <span class="title">Specialty Pizzas</span>
      </a>
    </li>
    <li>
      <a class="menu-item <?php echo ($page_name=='wings.php')?'active':'';?>" href="wings.php" title="Product Name">
        <span class="image" style="background-image: url('/assets/images/wings.jpg');"></span>
        <span class="title">Wings</span>
      </a>
    </li>
  </ul><!-- END PRIMARY NAV -->
  <ul class="yep menu secondary-nav">
    <li>
      <a class="menu-item" href="#">Store Hours</a>
    </li>
    <li>
      <a class="menu-item" href="#">Online Coupons</a>
    </li>
  </ul>
</section>