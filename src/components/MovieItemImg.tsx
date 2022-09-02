
interface MovieItemImgProps {
    posterPath: string;
    backdropPath: string;
}

const MovieItemImg = ({posterPath, backdropPath}: MovieItemImgProps) => {
    let imgSrc = '';
    
    if (posterPath) imgSrc = `${process.env.REACT_APP_IMG_URL}${posterPath}?api_key=${process.env.REACT_APP_API_KEY}`;
    else if (backdropPath) imgSrc = `${process.env.REACT_APP_IMG_URL}${backdropPath}?api_key=${process.env.REACT_APP_API_KEY}`;
    else imgSrc = '/not-found.png';

    return (
        <img src={imgSrc} />
    );
}

export default MovieItemImg;