import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

const MoveSlider = () => {
  const [movies, setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const fetchMovies = async ()=>{
    const API_KEY="decc67e8f617c228c9c976bb05cd39ca"
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
    try{
      const response = await axios.get(url);
      setMovies(response.data.results.slice(0,10));
      setIsLoading(false);
    } catch(err){
      setError("영화 데이터를 가져오는 중 오류 발생");
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    setIsLoading(true);
    fetchMovies();
  },[]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };
  function SampleNextArrow(props){
    const {onClick} = props;
    return (
      <div className="btn_next"
      onClick={onClick}
      >▶</div>
    );
  }
  function SamplePrevArrow(props){
    const {onClick} = props;
    return (
      <div className="btn_prev"
      onClick={onClick}
      >◁</div>
    );
  }

  if(error){
    return <div>{error}</div>
  }
  if(isLoading){
    return <div>Loading......</div>
  }

  return (
    <div className="move-slider">
      <h2>지금 뜨는 콘텐츠</h2>
      <select className="sec1">
        <option>대한민국</option>
        <option>글로벌</option>
      </select>
      <select className="sec2">
        <option>영화</option>
        <option>시리즈</option>
      </select>
      <Slider {...settings}>
        {
          movies.map((list,idx)=>{
            return <div className="movie-card" key={list.id}>
              <span>{idx+1}</span>
              <img src={`https://image.tmdb.org/t/p/w342${list.poster_path}`} alt={list.title} />
            </div>
          })
        }
      </Slider>
    </div>
  );
};

export default MoveSlider;