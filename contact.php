<?php

  if($_POST){

    $to = 'jenbon@jennurate.com';
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];
    $header = "From: $fname <$fname> $lname <$lname>";



    $honeypot = $_POST['firstname'];

    if($honeypot > 1){
      return;
    }
    else{
      mail($to, $subject, $message, $header);
    }
  }

  ?>

  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="Check out the nearest asteroid of today! Data retrieved from NASA." />
    <meta name="keywords" content="asteroid, celestial object, celestial bodies, earth, NASA, space" />
    <link rel="stylesheet" href="styles/styles.css" type="text/css" />
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <title>Asteroid of the Day | Contact</title>

  </head>
  <body>
    <div id="bg" class="contact-bg"></div>
    <div id="filter"></div>

    <!-- Background element -->
    <ul class="nav-list">
      <li>
        <a id="sun" class="nav-element"><span id="bg-cap"><p>Check out the background-picture</p></span></a>
      </li>
      <li>
        <div id="bg-expl-container">
          <i id="x"></i>
          <div id="bg-box">
            <p>
              <a href="https://images.nasa.gov/details-PIA18165.html" target="_blank" title="Opens in new tab">This image</a> shows the Hubble Telescope against Earth's horizon, and was taken by <a href="https://www.nasa.gov" target="_blank" title="Opens in new tab">NASA</a> in 1997.
              The Hubble Telescope was launched April 24, 1990 and was the worlds first optical telescope to be in space. Since its launch date, Hubble has made more than 1.3 million observations and gone
              more than 4 billion miles simply circling around Earth, and still going!
              Discover more amazing facts about the Hubble Telescope <a href="https://www.nasa.gov/mission_pages/hubble/story/index.html" target="_blank" title="Opens in new tab">here</a>.
            </p>
          </div>
        </div>
      </li>
    </ul>

  <div id="content">
    <header>
      <nav id="main-nav">
        <ul>
          <li><a id="home" class="nav-element" href="index.html"><span><p>Home</span></p></a></li>
          <li><a id="mercury" class="nav-element" href="asteroid-of-the-day.html"><span><p>Today's asteroid</p></span></a></li>
          <li><a id="venus" class="nav-element" href="discover.html"><span><p>Discover more approaching asteroids</p></span></a></li>
          <li><a id="earth" class="nav-element" href="planetary-defense.html"><span><p>How do we defend our planet?</p></span></a></li>
          <li><a id="mars" class="nav-element" href="asteroid-belt.html"><span><p>Learn more about the asteroid belt</p></span></a></li>
          <li><a id="jupiter" class="nav-element" href="well-known-asteroids.html"><span><p>Well known asteroids</p></span></a></li>
        </ul>
      </nav>
    </header>

    <main>
      <h1>Feedback, tips, critics, issues?</h1>
      <fieldset>
        <legend>Please contact me!</legend>
        <form method="post" action="" id="contact-form">
          <!-- honeypot field -->
          <input name="firstname" type="text" id="firstname" class="hide-robot"/>
          <!-- honeypot field end -->
          <input name="fname" id="fname" type="text" placeholder="First name" />
          <input name="lname" id="lname" type="text" placeholder="Last name"  />
          <p id="name-error" class="hide-robot"></p>
          <input name="email" id="email" type="email" placeholder="Your e-mail address"  />
          <p id="email-error" class="hide-robot"></p>
          <input name="subject" id="subject" type="text" placeholder="Subject"  />
          <p id="subject-error" class="hide-robot"></p>
          <textarea name="message" id="message" placeholder="What's on your mind?" ></textarea>
          <p id="message-error" class="hide-robot"></p>
          <input id="submit" type="submit" value="Send!" />
        </form>
      </fieldset>
  <!-- Honey pot creds: https://arctek.co.za/simple-honeypot-for-an-html-form/ -->
    </main>

    <footer>
      <nav id="footer-nav">
        <ul>
          <li><a href="about.html" title="About Asteroid of the Day">About</a></li>
          <li><a href="contact.html" title="Contact me">Contact</a></li>
        </ul>
        <ul class="social-media">
          <li><a href="https://www.facebook.com/NASA/" class="fa fa-facebook" title="Follow NASA on Facebook"></a></li>
          <li><a href="https://www.instagram.com/nasa/" class="fa fa-instagram" title="Follow NASA on Instagram"></a></li>
          <li><a href="https://twitter.com/nasa" class="fa fa-twitter" title="Follow NASA on Twitter"></a></li>
        </ul>
      </nav>
      <p>&copy; 2018 Jennurate All Rights Reserved </p>

    </footer>
  </div> <!-- content -->

  <script src="scripts/validations.js"></script>
  <script src="scripts/global.js"></script>
  </body>
  </html>
