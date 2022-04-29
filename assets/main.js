function CryptoAddressfunction() {
  var buttonCopied = document.getElementById("buttonCopied");
  buttonCopied.setAttribute("title", "");
  var copyText = document.getElementById("CryptoAddress");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  // if (buttonCopied) {
  //   buttonCopied.setAttribute("title", `Copied`);
  // }
   /* Alert the copied text */
   alert("Copied the text: " + copyText.value);
}
