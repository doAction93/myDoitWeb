'use client';
import { useRouter } from 'next/navigation'; 


export default function MarketingPage() {


   const router = useRouter();
    

        const handleBackClick = () => {
          router.back();  // 이전 페이지로 돌아가기
        };
    
  return (
    <div style={{ padding: '50px' }}>
       
       
       <div
          style={{
            display: 'flex',              // ← Flex 컨테이너 활성화
            justifyContent: 'space-between',
            alignItems: 'center',         // (선택- 수직 가운데 정렬
            width: '100%',                // (필요시- 부모 너비 꽉 채우기
          }}>

         
         <h1 style={{ fontSize: 'clamp(1rem, 5vw, 2rem)', marginBottom: '20px' }}>광고 수신 동의서</h1>

         <div>
          {/* <button
            onClick={handleBackClick}
            style={{
              backgroundColor: '#FA7852',  // 버튼 배경색
              color: '#ffffff',             // 텍스트 색상
              fontSize: 'clamp(0.2rem, 2.5vw, 1.2rem)',           // 폰트 크기
              width: '12vw',               // 가로 크기
              height: '8vh',
              maxwidth: "100px",
              minwidth: "60px",              // 세로 크기
              border: 'none',               // 테두리 제거
              borderRadius: 'clamp(5px, 2.5vw, 20px)',          // (선택- 모서리 둥글게
              cursor: 'pointer',            // 마우스 커서 포인터
              marginRight: '20px' 
            }}
            >
            뒤로가기
          </button> */}

          <a
              href="mailto:doaction93@gmail.com"
              style={{
                display: 'inline-block',    // a 태그를 블록처럼
                textDecoration: 'none',     // 밑줄 제거
              }}
            >

          <button
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              fontSize: 'clamp(0.2rem, 2.5vw, 1.2rem)', 
              width: '12vw',               // 가로 크기
              height: '8vh',
              maxwidth: "100px",
              minwidth: "60px",
              border: '1px solid #ccc', // 회색 테두리
              borderRadius: 'clamp(5px, 2.5vw, 20px)',  
              cursor: 'pointer',
            }}
            >
            문의하기
          </button>
          </a>
        </div>
        
        </div>


        <h2 style={headTitleStyle}>
           마케팅 정보 수신 동의
        </h2>

        <p style={secondTitleStyle}>
            이아이티에이 하우스(EITA HOUSE)는 개인정보보호법 및 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 따라 광고성 정보를 전송하기 위해 이용자의 사전 수신 동의를 받고 있습니다. 본 내용은 일단해 회원 서비스가 적용되는 개별서비스의 마케팅 수신동의를 포함하고 있으며, 마케팅 정보 수신 동의 시개별서비스의 마케팅 수신에 일괄 동의한 것으로 처리됩니다.
        </p>

        <p style={paragraphTitleStyle}>
            1. 전송방법
        </p>

        <p style={paragraphStyle}>
          마케팅 정보 전송 방법은 일단해의 각 개별서비스에서 정한 방식에 따라 전송됩니다.       
         </p>


        <p style={paragraphTitleStyle}>
           2. 전송내용    
        </p>

        <p style={paragraphStyle}>
            발송되는 마케팅 정보는 수신자에게 일단해 및 개별서비스에서 제공하는 혜택(포인트, 쿠폰 등) 정보, 각종 이벤트, 신규 상품 관련 소식 등 광고성 정보로 관련 법의 규정을 준수하여 발송됩니다. 단, 광고성 정보 이외에 의무적으로 안내 되어야 하는 정보성 내용은 수신동의 여부와 무관하게 제공됩니다.     
        </p>

        <p style={paragraphTitleStyle}>
            3. 수집항목  
        </p>

        <p style={paragraphStyle}>
          이메일, 이름, 전화번호(선택), 성별(선택), 나이대(선택), MBTI, 직군, 디바이스 이름, 디바이스 고유번호
        </p>

        <p style={paragraphTitleStyle}>
            4. 이용목적 
        </p>

        <p style={paragraphStyle}>
          소식지 서비스 제공, 신제품 및 이벤트 안내, 이벤트 경품/사은품 제공, 할인행사, 고객 맞춤 마케팅/판촉 등 관련 이메일 및 SMS 등 발송
        </p>

        <p style={paragraphTitleStyle}>
            5. 철회안내
        </p>

        <p style={paragraphStyle}>
          수신동의 이후에라도 언제든지 동의를 철회할 수 있으며, 수신을 동의하지 않아도 회사가 제공하는 기본적인 서비스를 이용하실 수 있습니다. 다만 수신 거부할 경우 신규 서비스나 상품 관련 소식 등의 마케팅 정보를 제공받지 못할 수 있습니다.
        </p>

        <p style={paragraphTitleStyle}>
            6. 수신동의 변경 및 보유기간
        </p>

        <p style={paragraphStyle}>
            보유 기간 : 마케팅 정보 수신 동의로부터 2년, 기간 초과 시 동의 절차 재진행 (미동의 시, 즉시 파기)
        </p>
        
        <p style={paragraphTitleStyle}>

         일단해 정보수정 페이지에서 개별서비스의 마케팅 수신동의를 변경(동의/철회)할 수 있으며, 동의일로부터 회원 탈퇴 혹은 마케팅 수신 동의 해제 시까지 광고성 정보 전달을 위하여 보유ㆍ이용 됩니다.
        </p>






        </div>
  );
}

const headTitleStyle = {
  fontSize: '1.5rem',
  marginTop: '50px',
};

const secondTitleStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  marginTop: '20px',
};

const paragraphTitleStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  marginTop: '20px',
};


const paragraphStyle = {
  fontSize: '1rem',
  marginTop: '10px',
};
