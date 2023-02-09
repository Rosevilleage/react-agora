## My Agora States: Eeact 버전입니다.

코드스테이츠 과제인 나만의 아고라스테이츠 만들기 `part: server` 까지 완성한 이후 처음에 만들었던 javascript 버전을 react로 새로 만들었습니다.

>편의상 js 버전을 v1, react 버전을 v2 그리고 아고라스테이츠는 아고라로 칭하겠습니다. 

### 페이지 예시
<p align='center'><img src='public/%EC%95%84%EA%B3%A0%EB%9D%BC%20%EC%98%88%EC%8B%9C.png' width=700/></p>

### 기존 자바스크립트 버전과 달라진점
* 나아진 가독성

	기존의 v1 아고라는 각 함수들이 하나의 데이터를 담은 변수에 의존하고, 다른 함수에 의존하는 부분이 상당수 있어서 코드를 읽고 파악하는 것이 번거로웠습니다.

	그러나 v2 아고라는 선언적으로 코드를 작성할 수 있는 react의 특성에 맞게 코드들은 더이상 이상하게 꼬인 스파게티 코드가 아닌 가독성 좋은 코드의 모습을 하게 되었으며, <br>
	각 기능별 용도별 component가 분리되어 오류나 수정이 용이해 졌습니다.

* fetch()를 통한 http 플로토콜 요청

	v1 아고라에서는 하드코딩된 파일에 데이터를 모으고, 그 데이터를 바탕으로 post들을 뿌리고, localStorage를 사용해 post르르 추가하는 방식을 사용했습니다.

	v2 아고라는 단순한 데이터 목록 사용에서 한 발자국 더 나아가 서버와 통신해 데이터를 받아오는 조금은 페이지 같은 모습을 갖추게 되었습니다.
	<img src='public/%EC%95%84%EA%B3%A0%EB%9D%BC.png' width=600/>

