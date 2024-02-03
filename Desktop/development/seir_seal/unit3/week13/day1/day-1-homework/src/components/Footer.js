const Footer = (props) => {

    return (
        <div className="footer"> 
            <div className="footer-newsletter">
                <form>
                    <label for="name">Name:</label><br></br>
                    <input type="text" name="name" placeholder="John Doe"></input><br></br>
                    <label for="email">Email:</label><br></br>
                    <input type="text" name="email" placeholder="someone@email.com"></input>
                </form>
            </div>
            <div className="footer-project">
                <h4>More Projects?</h4><br></br>
                <a href="https://www.github.com/lldeejeell102">Daniel's Repos</a>
            </div>
            <div className="footer-service">
                <h4>Customer Service</h4><br></br>
                <a href="https://www.linkedin.com/in/danji90">Contact Us</a>
            </div>
        </div>
    );
}

// export the component
export default Footer