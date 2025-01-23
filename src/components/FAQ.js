import { useState } from "react";
import { VscAdd, VscChromeClose } from "react-icons/vsc";

const FAQlist = [
  {id: 1,
    Q:"넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
    A: "넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다.마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다."
  },
  {id: 2,
    Q:"넷플릭스란 무엇인가요?",
    A: "넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. 저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다."
  },
  {id: 3,
    Q:"넷플릭스 요금은 얼마인가요?",
    A: "스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다."
  }
];
const FAQ = () => {
  const [openIdx,setOpenIdx] = useState(null);
  const handleClick = (idx)=>{
    // setOpenIdx(idx);
    setOpenIdx(openIdx === idx ? null : idx);
    
  }
  return (
    <div className="faq">
      <h2>자주 묻는 질문</h2>
      <ul className="faq-list">
        {
          FAQlist.map((list,idx)=>{
            return <li key={list.id}>
              <button onClick={()=>handleClick(idx)}>
                <span>{list.Q}</span>
                {openIdx === idx? <VscChromeClose/> : <VscAdd />}
              </button>
              {openIdx === idx && <p>{list.A}</p>}
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default FAQ;