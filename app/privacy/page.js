'use client';
import { useRouter } from 'next/navigation'; 


export default function PrivacyPage() {
  
  
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

         
         <h1 style={{ fontSize: 'clamp(1rem, 5vw, 2rem)', marginBottom: '20px' }}>개인정보 처리방침</h1>

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
            안녕하세요 일단해 앱 대표 김호성 입니다.
        </h2>

        <p style={paragraphStyle}>
          저희 이아이티에이 하우스(EITA HOUSE)는 개인정보를 안전하게 취급하는데 최선을 다합니다.
          법령에 의하거나, 여러분이 별도로 동의하지 않는 한 회사가 여러분의 개인정보를 제 3자에게 제공하는 일은 절대 없으니 안심하고 서비스를 이용해주세요.
        </p>

        <h2 style={secondTitleStyle}>
            본 개인정보 수집 목적은 다음 과 같습니다.
        </h2>

        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'auto'
          }}
        >

      
        <table
          border='1'
          cellSpacing='0'       // HTML attribute: cellspacing → cellSpacing (camelCase)
          cellPadding='8'       // HTML attribute: cellpadding → cellPadding (camelCase)
          style={{              // 인라인 스타일 객체로 변경
            borderCollapse: 'collapse',
            textAlign: 'center',
            width: '100%',      // 부모 너비에 맞게 늘어나거나 줄어듦
            maxWidth: '800px',  // 필요에 따라 최대 너비 설정 (예: 800px)
            margin: '0 auto'  
          }}
        >
          <thead style={{ backgroundColor: '#f58220', color: 'white' }}>
            <tr>
              <th style={{ padding: 10 }}>수집 목적</th>
              <th style={{ padding: 10 }}>수집항목</th>
              <th style={{ padding: 10 }}>보유기간</th>
            </tr>
          </thead>
          <tbody>
            <tr >
                <td style={{ padding: 10 }}>2중 로그인 방지<br /> 기능 설정</td>
                <td style={{ padding: 10 }}>휴대폰 모델, 휴대폰 고유 번호, 이메일</td>
                <td style={{ padding: 10 }}> 회원 탈퇴시<br />3달 후 즉시 파기</td>
              </tr>
            <tr >
              <td style={{ padding: 10 }}>만 14세 미만 아동<br />개인정보 수집</td>
              <td style={{ padding: 10 }}>이메일, 닉네임, 휴대전화 번호(선택),<br /> 성별(선택), 나이(선택) </td>
              <td style={{ padding: 10 }}> 회원 탈퇴시<br />3달 후 즉시 파기</td>
            </tr>
            <tr>
              <td style={{ padding: 10 }} >이메일 회원 가입</td>
              <td style={{ padding: 10 }} >이메일, 닉네임, 휴대전화 번호(선택),<br /> 성별(선택), 나이(선택)</td>
              <td style={{ padding: 10 }}>회원 탈퇴시<br />3달 후 즉시 파기</td>
            </tr>
            <tr>
              <td style={{ padding: 10 }}>
                서비스 이용, 회원 관리,<br />
                서비스 개발 및 마케팅<br />
                /프로모션 활용
              </td>
              <td style={{ padding: 10 }}>
                성별, 나이대, 직군, MBTI,<br />
                이메일, 휴대전화 번호
              </td>
              <td style={{ padding: 10 }}>회원 탈퇴시<br />3달 후 즉시 파기</td>
            </tr>
          </tbody>
        </table>
        </div>

    </div>
  );
}


const headTitleStyle = {
  fontSize: '1.5rem',
  marginTop: '50px',
};

const secondTitleStyle = {
  fontSize: '1rem',
  marginTop: '50px',
};


const paragraphStyle = {
  fontSize: '1rem',
  marginTop: '10px',
};
