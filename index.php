
<!DOCTYPE html>
<html>

<head>
    <link rel="icon" type="image/png" href="logofav.png" sizes="32x32">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171780865-1"></script>
    <script src="google_anylatic.js">
    </script>

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <script src="http://hongru.github.io/proj/canvas2image/canvas2image.js"></script>

    <script type="text/javascript" src="customCircularLibrary.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.js"></script>
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <script type="text/javascript" src="main.js"></script>
    <script type="text/javascript" src="modals.js"></script>

    <script src="konva.js"></script> 
    <script src="https://kit.fontawesome.com/9d61450a29.js" crossorigin="anonymous"></script>
   

    <title>Page Maker</title>
</head>

<body>
    <div id="measure"></div>
    <div class="shadow-sm bg-primary p-3 text-white">
        <div class="row">

                <h3 class="col-sm-12 col-12 col-lg-3 col-md-3 d-none d-lg-inline" style="padding:20px;">My Page Maker</h3>

            <div class="col-sm-12 col-12 col-lg-9 col-md-9s">

                <img class="d-inline d-lg-none" src="logo.png" />
               
     <div class="dropdown btn o">
  <button class="btn o dropdown-toggle  text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 250 250" width="24px"
                        height="24px" version="1.0" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#ffffff"
                            d="M5 236l60 1 15 -38 45 0c-1,-20 3,-35 15,-50 1,-1 1,-2 2,-2l-41 -1 24 -59 22 54c1,0 7,-5 10,-7 13,-8 27,-11 43,-10l-45 -113 -60 0 -90 225zm180 -82l15 0 0 30 30 0 0 15 -30 0 0 30 -15 0 0 -30 -30 0 0 -15 30 0 0 -27 0 -3zm2 -15c-30,4 -50,30 -47,58 3,27 28,50 58,47 16,-2 28,-10 35,-19 19,-22 15,-56 -6,-74 -11,-8 -25,-14 -40,-12z">
                        </path>
                    </svg>
                    <br><span style="color:white;">Text</span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" id="addlinetext">Line Text</a>
    <button class="dropdown-item" id="addroundtext" href="#">Round Text</button>
  </div>
</div>
     <div class="dropdown btn o">
  <button class="btn o dropdown-toggle  text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 250 250" width="24px"
                        height="24px" version="1.0" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#ffffff"
                            d="M125 15c-61,0 -110,49 -110,110 0,61 49,110 110,110 7,0 13,0 20,-1 -7,-7 -12,-15 -16,-24 -1,0 -3,0 -4,0 -47,0 -85,-38 -85,-85 0,-47 38,-85 85,-85 47,0 85,38 85,85 0,1 0,2 0,2 9,3 17,8 24,15 1,-6 1,-11 1,-17 0,-61 -49,-110 -110,-110zm60 139l15 0 0 30 30 0 0 15 -30 0 0 30 -15 0 0 -30 -30 0 0 -15 30 0 0 -27 0 -3zm2 -15c-30,4 -50,30 -47,58 3,27 28,50 58,47 16,-2 28,-10 35,-19 19,-22 15,-56 -6,-74 -11,-8 -25,-14 -40,-12z">
                        </path>
                    </svg>
                    <br><span style="color:white;">Shapes</span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="addcircle" href="#">Circle</a>
    <button class="dropdown-item" id="addsquare" href="#">Square</button>
    <a class="dropdown-item" href="#" id="addtriangle">Triangle</a>
  </div>
</div>

                <button class="btn o" id="addimage" title="Image">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 250 250" width="24px"
                        height="24px" version="1.0" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="add_el_path" fill="#ffffff"
                            d="M185 154l15 0 0 30 30 0 0 15 -30 0 0 30 -15 0 0 -30 -30 0 0 -15 30 0 0 -27 0 -3zm2 -15c-30,4 -50,30 -47,58 3,27 28,50 58,47 16,-2 28,-10 35,-19 19,-22 15,-56 -6,-74 -11,-8 -25,-14 -40,-12zm-83 -25c0,-11 -8,-20 -19,-20 -11,0 -20,9 -20,20 0,11 9,20 20,20 11,0 19,-9 19,-20zm-44 72l0 23 69 0c-2,-7 -4,-14 -4,-21 0,-22 12,-41 29,-53l-9 -12 -20 29 -25 -11 -40 45zm32 -174l-58 61 0 164 114 0c-5,-5 -9,-9 -12,-14l-88 0 0 -144 53 0 0 -53 101 0 0 99c5,1 9,3 14,5l0 -118 -124 0zm-5 26l0 27 -25 0 25 -27z">
                        </path>
                    </svg>
                    <br><span style="color:white;">Image</span>

</button>

 <button class="btn o" id="addLine" title="Image">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 250 250" width="24px"
                        height="24px" version="1.0" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="add_el_path"fill="#ffffff"
                            d="M125 15c-61,0 -110,49 -110,110 0,61 49,110 110,110 7,0 13,0 20,-1 -7,-7 -12,-15 -16,-24 -1,0 -3,0 -4,0 -47,0 -85,-38 -85,-85 0,-47 38,-85 85,-85 47,0 85,38 85,85 0,1 0,2 0,2 9,3 17,8 24,15 1,-6 1,-11 1,-17 0,-61 -49,-110 -110,-110zm60 139l15 0 0 30 30 0 0 15 -30 0 0 30 -15 0 0 -30 -30 0 0 -15 30 0 0 -27 0 -3zm2 -15c-30,4 -50,30 -47,58 3,27 28,50 58,47 16,-2 28,-10 35,-19 19,-22 15,-56 -6,-74 -11,-8 -25,-14 -40,-12z">
                        </path>
                    </svg>
                    <br><span style="color:white;">Lines</span>

</button>


            </div>
            
        </div>
    </div>

    <div class="container">
        <!-- Scrolling Wrapper End-->
        <div class="row">
            <ul class="bookmarks col-lg-2 col-sm-2 col-md-3 col-2" id="labels">
            </ul>
            <div class="col-lg-6 canvas col-sm-3 col-10 col-md-4">
                <div  id="container" style="margin-top:40px; ">
                </div>
            </div>
            <br>
            <div class="col-lg-4 col-sm-12 col-md-12 col-xs-3" id="properties" style="height:auto;margin-top:40px;">
                <!-- <div class="guide">
                    <u><b>Create a round stamp</b></u><br>
                    Select <b>Circle</b> element to add a stamp circle<br>
                    Edit the circle, change its radius and stroke width<br>
                    Select <b>Round</b> Text element to add a text around the circle<br>
                    Enter and edit the text, change spacing and rotate it clockwise<br>
                    Select <b>Line</b> Text element to add a text in the center<br>
                    Enter and edit the text, move or rotate it<br>
                    Select <b>Image</b> element to add an image<br>
                    Upload the image, change its size and position<br>
                    Add any numbers of elements<br>
                    Delete elements clicking on <b>delete x</b> <br>
                    <b>Download</b> your stamp
                </div> -->
            </div>


        </div>
        <br>
        <div class="col-lg">
<center>
            <button class="btn btn-outline-secondary btn-sm modals" onclick="switchStage()">Switch</button>
 
<button class="btn btn-outline-secondary btn-sm modals" onclick="plusStage()">+</button>
 
<button class="btn btn-outline-secondary btn-sm modals" onclick="minusStage()">-</button> 

<button class="btn btn-outline-secondary btn-sm modals" onclick="fit()">Fit</button> 

<button class="btn btn-outline-secondary btn-sm modals" onclick="fit()">[]</button>            
        </center>
        <br>    <center>
                <button class="btn btn-lg btn-success shadow" id="downloads"
                    onclick="downloadKonva()">Download</button>
            </center>
        </div>
    </div>



    <script>
    // $(document).click(function(){
    // alert($("#colorpicker").spectrum("get").toHex());
    // })
    </script>
    <!-- Modal Of Sign Up -->
   
</body>

<footer class="footer font-small blue pt-4" style="background-color:#007bff;color:white;">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col-md-6 mt-md-0 mt-3">

                <!-- Content -->
                <h5 class="text-uppercase">My Page Maker</h5>
                <p>Create a page easily.</p>

            </div>
            <!-- Grid column -->


            <!-- Grid column -->
            <div class="col-md-3 mb-md-0 mb-3">

                <!-- Links -->
                <ul class="list-unstyled">
                    <li>
                        <a style="color:white;" href="terms.php" target="_blank">
                            Terms & conditions.
                        </a>

                    </li>
                    <li>
                        <a style="color:white;" href="privacy.php" target="_blank">Privacy Notice</a>
                    </li>
                </ul>


            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 mb-md-0 mb-3">
                <ul class="list-unstyled">
                    <li>
                        <b style="color:white;">Email:</b> sayapingeorge@gmail.com
                    </li>
                    <li>
                        <b style="color:white;">Address:</b> MyPageMaker <br>
                        Brentwood Street, 30709<br>
                        Southfield, MI 48076<br>
                        United States<br>

                    </li>
                    <li>
                        <b style="color:white;">Company Name:</b> My Page Maker
                    </li>
                </ul>


            </div>
            <!-- Grid column -->

        </div>
        <!-- Grid row -->

    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="#" style="color:white;"> MyStampMaker</a>
    </div>
    <!-- Copyright -->

</footer>
<br><br><br>
 <script src="https://unpkg.com/konva@7.0.3/konva.min.js"></script>
</html>
<script type="text/javascript">
var idleTime = 0;
$(document).ready(function() {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function(e) {
        idleTime = 0;
    });
    $(this).keypress(function(e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 240) {
        $.ajax({
            url: "logout.php", //the page containing php script
            type: "post", //request type,
            dataType: 'json',
            success: function(response) {
                if (response.abc == "done") {

                    swal("You Have Been Logout",
                        "You have been logout, Reason: Inactive for about 4 hours.", "warning").then(
                        function() {

                            location.reload();
                        });
                }
            }
        });

    }
}
</script>