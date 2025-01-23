const fmenus = [
  { id: 1, title: "자주 묻는 질문", url:"#"},
  { id: 2, title: "고객센터", url:"#"},
  { id: 3, title: "계정", url:"#"},
  { id: 4, title: "미디어 센터", url:"#"},
  { id: 5, title: "투자 정보", url:"#"},
  { id: 6, title: "입사 정보", url:"#"},
  { id: 7, title: "넷플릭스 지원 디바이스", url:"#"},
  { id: 8, title: "이용 약관", url:"#"},
  { id: 9, title: "개인정보 처리방침", url:"#"},
  { id: 10, title: "쿠키 설정", url:"#"},
  { id: 11, title: "회사 정보", url:"#"},
  { id: 12, title: "문의하기", url:"#"},
  { id: 13, title: "속도 테스트", url:"#"},
  { id: 14, title: "법적 고지", url:"#"},
  { id: 15, title: "오직 넷플릭스에서", url:"#"}
];
const Footer = () => {
  return (
    <footer>
      <p>질문이 있으신가요? 문의 전화: <a href="tel:00-308-321-0161">00-308-321-0161(수신자 부담)</a></p>
      <div className="f-menu">
      {
        fmenus.map((list)=>{
          return <a key={list.id}
            href={list.url}>
            {list.title}</a>
        })
      }
      </div>
      <p>넷플릭스 대한민국</p>
    </footer>
  );
};

export default Footer;