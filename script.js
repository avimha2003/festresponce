 // JavaScript
 document.addEventListener('DOMContentLoaded', function () {
    // Parse the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id'); // Get the 'id' parameter

    // Set the ID field value if 'id' parameter exists
    if (idParam) {
      document.getElementById('id').value = idParam;
    } else {
      alert('Error: Missing ID in URL.');
      document.getElementById('dataForm').querySelector('button').disabled = true; // Disable form submission
    }
  });

  document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;

    // Google Form URL (replace with your actual form URL)
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc27pCRsXjX7IhXoK51gDT_BEvxgfJWe57XMYsHshNju3EalA/formResponse';

    // Form entry IDs (replace with your own IDs)
    const nameField = 'entry.408507727'; // Entry ID for Name
    const idField = 'entry.989624450';   // Entry ID for ID

    // Prepare data to send to the Google Form
    const data = new FormData();
    data.append(nameField, name);
    data.append(idField, id);

    // Send the data to Google Form
    fetch(googleFormUrl, {
      method: 'POST',
      body: data,
      mode: 'no-cors' // Required to bypass CORS restrictions
    }).then(() => {
      alert('Data successfully submitted!');
      document.getElementById('dataForm').reset();
    }).catch(error => {
      alert('Error submitting data. Please try again.');
      console.error(error);
    });
  });