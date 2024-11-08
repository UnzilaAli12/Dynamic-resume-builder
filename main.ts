document.getElementById('resumeForm')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    // Get references to form elements using their IDs with type assertions
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const contactElement = document.getElementById('contact') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;

    // Check if all form elements exist
    if (
        nameElement && emailElement && contactElement &&
         educationElement &&
        experienceElement && skillsElement
    ) {
        // Get form values
        const name: string = nameElement.value;
        const email: string = emailElement.value;
        const contact: string = contactElement.value;
        const education: string = educationElement.value;
        const experience: string = experienceElement.value;
        const skills: string = skillsElement.value;

        
        // Generate resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Insert resume into the DOM
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});

