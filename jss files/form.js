
const scriptURL = 'https://script.google.com/macros/s/AKfycbz6cLQeFfHwKOQYCOTsFqas0ZqRCCsyPI4Uba6h03C53BV-iQSd96EABN6pZTq5bDZ2/exec'
﻿
const form = document.forms['contact-form']
﻿
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})