document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const resultElement = document.getElementById('result');

    // Check if files have been uploaded
    const fileInputs = document.querySelectorAll('input[type="file"]');
    const filesUploaded = Array.from(fileInputs).every(input => input.files.length > 0);

    // Check if text input has been filled
    const textInput = document.getElementById('position_details');
    const textInputFilled = textInput.value.trim().length > 0;

    if (!filesUploaded || !textInputFilled) {
        resultElement.textContent = "Please upload example file and include text input!";
        return;
    }
    
    resultElement.classList.add('loading'); 
    resultElement.innerHTML = `
        <div class="loading-content">
            <p>Generating job description...</p>
            <div class="spinner"></div>
        </div>
    `;
    
    const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
    });

    const result = await response.json();
    resultElement.classList.remove('loading'); 
    resultElement.innerHTML = result;

});

document.getElementById('downloadButton').addEventListener('click', function() {
    this.href = '/download';
});


document.addEventListener('DOMContentLoaded', () => {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
      input.addEventListener('change', (event) => {
        const files = event.target.files;
        if (files.length > 0) {
          const fileNames = Array.from(files).map(file => file.name);
          const messageElement = event.target.nextElementSibling;
          messageElement.textContent = `Files successfully uploaded: ${fileNames.join(', ')}`;
        }
      });
    });
});