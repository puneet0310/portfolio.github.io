document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // Prevent form from submitting
    alert('Form submitted successfully!');
    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const project = document.getElmaentById('project').value;

    // Display the input values
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Project: ${project}</p>`;
    
    
});