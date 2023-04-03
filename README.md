## 원티드 프리온보딩 4주차

주문내역 관리 어드민 페이지 구현

### [✔ 배포 링크](https://pre-onboarding-w4-switchwon.vercel.app)

**기술 스택**
* <img src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"/>

* <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/-React_Query-ff2660?style=flat-square&logo=react&logoColor=white"/>
 
* <img src="https://img.shields.io/badge/-Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white"/> <img src="https://img.shields.io/badge/-Emotion-DB7093?style=flat-square&logo=emotion&logoColor=white"/>


<br/>

## 프로젝트 실행 방법

**react app**

```bash
npm i
npm run dev
```

**json-server**

```bash
npx json-server ./data.json --w
```
<br/>

## 요구사항

1. 주어진 데이터를 이용하여 주문 목록 페이지를 구현해주세요
    - 주문 목록 페이지에는 주문에 대한 모든 정보를 표 형태로 확인할 수 있어야 합니다.
    - 주문 목록은 페이지네이션이 구현되어야 합니다(한 페이지에 50건의 주문이 보여야 합니다)
    - 데이터 중에서 오늘의 거래건만 보여지도록 해주세요
        - 여기서 오늘은 **2023-03-08**일을 의미합니다.

2. 정렬 기능을 구현해주세요
    - 기본 정렬은 ID 기준 오름차순으로 구현해주세요
    - 표에서 `주문번호`, `거래일 & 거래시간` 버튼을 누르면 각각 내림차순 정렬이 되도록 해주세요
3. 주문 처리 상태에 따라 filtering 기능을 구현해주세요

4. 고객이름을 검색할 수 있도록 해주세요

5. 서버에 들어온 주문을 5초마다 최신화 해주세요
    - 서버 API는 구현되어 있지 않지만, 구현되어 있다는 가정 하에 요구사항을 충족해주세요

6. 컴포넌트에 대한 **테스트 코드**를 구현해주세요

<br/>
