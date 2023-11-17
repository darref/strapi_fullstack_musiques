import { Link, useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        We are in About
        <Link to="/"> Go to Home</Link>
        <Link to="/connection"> Go to connection</Link>
      </div>
    );
  };

  export default About;