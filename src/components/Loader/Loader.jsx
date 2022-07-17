import { Puff } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox>
      <Puff color="#00BFFF" height={80} width={80} />
    </LoaderBox>
  );
};

export default Loader;
