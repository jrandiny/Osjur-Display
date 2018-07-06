<?php
  define("URI","otpauth:\/\/totp\/SPARTA%20HMIF?period=300&secret=SECRETCODE");
  $url = urldecode(URI);
  $query = parse_url($url);
  parse_str($query['query'],$output);

  $cmd = "oathtool --totp --base32 -d 6 -s " . $output['period'] . " " . $output['secret'];
  $token = exec($cmd);
  echo $token;
?>
