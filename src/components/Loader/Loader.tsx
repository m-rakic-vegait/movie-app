import { ReactSVG } from 'react-svg';
import LoaderImage from '../../assets/svg/loader-large.svg';
import ButtonLoaderStyled from './Loader.styles';

export interface LoaderProps {
  height?: string;
  width?: string;
};

const Loader = ({width = '30px', height = '30px'}: LoaderProps): JSX.Element => (
  <ButtonLoaderStyled
    width={width}
    height={height}
    data-testid="dca-loading-animation">
    <ReactSVG src={LoaderImage} />
  </ButtonLoaderStyled>
);

export default Loader;
