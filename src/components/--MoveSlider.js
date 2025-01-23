import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const movies = [
  {id:1, title:"첫번째", image:"./images/movie01.jpeg", tag:",최신등록"},
  {id:2, title:"두번째", image:"./images/movie02.jpeg", tag:",최신등록"},
  {id:4, title:"네번째", image:"./images/movie04.jpeg", tag:",최신등록"},
  {id:3, title:"세번째", image:"./images/movie03.jpeg", tag:",최신등록"},
  {id:5, title:"다섯번째", image:"./images/movie05.jpeg", tag:",최신등록"},
  {id:6, title:"여섯번째", image:"./images/movie06.jpeg", tag:",최신등록"},
  {id:7, title:"일곱번째", image:"./images/movie07.jpeg", tag:",최신등록"},
  {id:8, title:"여덟번째", image:"./images/movie08.jpeg", tag:",최신등록"},
  {id:9, title:"아홉번째", image:"./images/movie09.jpeg", tag:",최신등록"},
  {id:10, title:"열번째", image:"./images/movie10.jpeg", tag:",최신등록"},
];
const MoveSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextarrow: <VscChevronLeft />,
    prevarrow: <VscChevronRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
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
  function SamplePrevArrow(props){
    const {onClick} = props;
    return (
      <div className="btn_prev"
      onClick={onClick}
      >▶</div>
    );
  }
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
          movies.map((list)=>{
            return <div className="movie-card" key={list.id}>
              <span>{list.id}</span>
              <img src={list.image} alt={list.title} />
            </div>
          })
        }
      </Slider>
    </div>
  );
};

export default MoveSlider;