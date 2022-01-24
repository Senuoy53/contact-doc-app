import { HeadingWrapper } from "./HeadingWrapper";
import heading from "../../assets/imgs/heading.jpg";

const Heading = () => {
  return (
    <HeadingWrapper img={heading}>
      <h1>Trouvez votre médecin le plus proche</h1>
    </HeadingWrapper>
  );
};

export default Heading;
