import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

const options: { [key: string]: string } = {
  home: 'Home',
  about: 'About',
  portfolio: 'Portfolio',
  contact: 'Contact',
};

const Navbar = () => {
  const navigate = useNavigate();

  const changeNavOption = (selectedOption: string) => {
    const valueOption = Object.keys(options).find(
      (option) => options[option] === selectedOption
    );

    navigate(`/${valueOption}`);
  };

  return (
    <div className="nav-container">
      <div className="creator">Luis Miranda</div>
      <nav className="navigator-menu">
        <button onClick={() => changeNavOption(options.home)}>
          {options.home}
        </button>
        <button onClick={() => changeNavOption(options.about)}>
          {options.about}
        </button>
        <button onClick={() => changeNavOption(options.portfolio)}>
          {options.portfolio}
        </button>
        <button onClick={() => changeNavOption(options.contact)}>
          {options.contact}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
