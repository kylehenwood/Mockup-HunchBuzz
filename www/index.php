<?php
ini_set('display_errors',"1");

include 'session.php';

function displayContent()	{
  $content = null;
  $title = null;
  $head = setContent('./_chrome/chrome-head.php');

	// Page switch
  if (isset($_GET['pageID'])) {

    $pageName = $_GET['pageID'];

    switch ($pageName) {
      case $pageName == 'home';
      $title = 'HunchBuzz - Home';
      $content = setContent('./_views/page-home/_construct.php');
      break;

      case $pageName == 'features';
      $title = 'HunchBuzz - Features';
      $content = setContent('./_views/page-features/_construct.php');
      break;

      case $pageName == 'how-it-works';
      $title = 'HunchBuzz - How it works';
      $content = setContent('./_views/page-hiw/_construct.php');
      break;

			case $pageName == 'plans';
      $title = 'HunchBuzz - Plans';
      $content = setContent('./_views/page-plans/_construct.php');
      break;

      // 404 page not found
      default:
      $title = '404 Page not found';
      $content = setContent('./_views/page-404/_construct.php');
      break;
    }
  } else {
    // no pageID -> home page
    $title = 'HunchBuzz - Home';
    $content = setContent('./_views/page-home/_construct.php');
  }


  echo '<!DOCTYPE html>';
  echo '<html class="js-html svg">';
  echo $head;
  echo '<title>'.$title.'</title>';
  echo '<body class="layout js-layout">';
  echo $content;
  echo '</body>';
  echo '</html>';

  return false;
}

// retrieves the page content and returns as a variable
function setContent($filePath) {
  ob_start();
  include($filePath);
  $content = ob_get_clean();
  return $content;
}

displayContent();

?>
