import styled, { keyframes } from 'styled-components';
import { LoaderProps } from './Loader';

const rotationLoader = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const ButtonLoaderStyled = styled.div<LoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    position: relative;
    width: ${({ width }) => width};
    height: ${({ width }) => width};
    animation: 0.8s linear infinite ${rotationLoader};

    .path1 {
      fill: #326da8;
      border-radius: 20px;
    }

    stop {
      stop-color: #326da8 !important;
    }

    .svgBackground {
      fill: none !important;
    }
  }
`;

export default ButtonLoaderStyled;
