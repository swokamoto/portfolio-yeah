import './Contact.css';

export default function Contact() {

    // Not a real form submission, just an alert to show that the form is working
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
        e.target.reset();
    }

    return (
        <>
            <h2><center>Contact Me</center></h2>

            <form onSubmit={handleSubmit} method="POST">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit">Submit</button>
            </form>
        </>
    );
}