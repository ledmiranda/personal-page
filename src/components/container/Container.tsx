import './Container.scss';
import photo from '../../assets/author_photo2.jpeg';

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  return (
    <div className="content">
      <div className="author-image">
        <img src={photo} alt="Logo" />
      </div>
      {children}
    </div>
  );
};

export default Container;
