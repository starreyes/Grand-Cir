<script>
  function validateEmail(){
    var text = document.forms ["email"].value;

    var atpos = text.indexOf ("@");
    var dotpos = text.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > text.length) {
      alert ("Please enter a valid email address.");
      return false;
      else {
        alert (validateEmail);

      }


    }
  }


</script>
