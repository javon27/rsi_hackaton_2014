<!doctype html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Jonesboro Parks and Recreation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <link rel="stylesheet" href="css/main.css">

    <script>
      function changeImage()
      {
      var img = document.getElementById("image");
      img.src="imgs/JonesboroPoolCenter.JPG";
      return false;
      }
      $("#parkContent").click(function () {
        alert('blah');
      })
    </script>
</head>

<body>
<?php include 'header.html'; ?>
<div class="container-fluid">
  <div class='row'>
    <div class='main-content'>

      <div id="parkContent" class="content">
        <p>Welcome to the Jonesboro Parks and Recreation website. Click on a park name below to view information
          on each park.</p>
      </div>
      <div class='row'><!--this is for the images for each park-->
        <div class='col-lg-12 col-md-12 col-sm-12 hidden-xs'>
          <!--need to change each image depending on which park is selected(php, javascript, idfk)-->
          <img src='imgs/MiracleLeagueLogo.JPG' alt='header img' onclick="parklogoClick()">
        </div><!--col-->
      </div><!--row-->
      <div id="parkSelector">
        <div class='row'><!--first 4 parks-->
          <div class='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
            <div id="allen_park" class="park"><div class="inner">Allen Park and Community Center</div></div>
          </div>
          <div class='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
            <div id="craighead_forest" class="park"><div class="inner">Craighead Forest Park</div></div>
          </div>
          <div class='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
            <div id="earl_bell" class="park"><div class="inner">Earl Bell Community Center</div></div>
          </div>
          <div class='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
            <div id="joe_mack" class="park"><div class="inner">Joe Mack Campbell Park</div></div>
          </div>
        </div>
        <div class='row'><!--next 4 parks-->
          <div class='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
            <div id="jonesboro_pool" class="park"><div class="inner">Jonesboro Pool Center</div></div>
          </div>
          <div class='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
            <div id="miracle_league" class="park"><div class="inner">Miracle League of Jonesboro</div></div>
          </div>
          <div class='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
            <div id="parker_park" class="park"><div class="inner">Parker Park Community Center</div></div>
          </div>
          <div class='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
            <div id="southside_softball" class="park"><div class="inner">Southside Softball Complex</div></div>
          </div>
        </div>
      </div>

    </div><!--main-content-->
  </div><!--row-->
</div><!--contFluid-->

</body>

</html>
