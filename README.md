# Cobb-dev-blog

usernamechiho가 만든 개인 블로그입니다.
블로그의 이름은 `코브 (Cobb)` 입니다.

## 🚀 배포사이트
http://cobb-dev.com

## 기능

### 게시글

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/87627359/204490256-8ca66bb9-a9ef-4410-ae22-6f4f66db7adb.png">

![게시글](https://user-images.githubusercontent.com/87627359/204490646-74dc2916-851e-4e16-870f-24ed6f18efba.gif)

- 게시글을 확인할 수 있습니다.
- 코멘트가 가능합니다.
- SSG를 사용해 빌드한 페이지로, 리소스를 낭비하지 않습니다.
- 코드 복사 붙여넣기가 가능합니다.
- 코드 블록은 VSCode 스타일로, 가독성을 높였습니다.


### 블로그 주인 소개

![코브 소개](https://user-images.githubusercontent.com/87627359/204492280-7e3f4b82-e852-42ed-9554-27815b790c7a.gif)

- 저에 대한 소개 페이지입니다.
- 애니메이션을 추가해 너무 정적이지 않도록 디자인했습니다.
- parent를 overlay하는 child 컴포넌트를 이용해 UI를 꾸몄습니다.

### 블로그 소개

![블로그 소개](https://user-images.githubusercontent.com/87627359/204492540-c319ec90-adee-48c5-a9c1-460826f99690.gif)

- 블로그 제작 이유가 담겨있는 페이지입니다.
- typewriter effect를 이용해 디자인했습니다.

### Contact 페이지

![이메일 전송](https://user-images.githubusercontent.com/87627359/204493168-132e1dc6-7eb4-438e-885b-887713ed9454.gif)

- 개선점, 문제점을 제보받을 수 있습니다.
- 자유로운 질문도 받습니다.
- 모든 `input`은 조건이 있습니다.
- 조건을 충족하게 되면, 저에게 이메일이 전송됩니다.
- 코멘트와 더불어 클라이언트와 인터렉션 할 수 있는 공간입니다.

## 블로그를 위한 추가 기능

### Google Analytics

- GA를 추가해 방문자 트래킹이 가능합니다.

### Google Search Console

- 빌드시 구글에 sitemap.xml을 제출합니다.
- 페이지가 색인되어 구글 검색에 노출됩니다.

### Cobb-Thumbnail

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/87627359/204494091-3cc1cc85-0dfb-4644-8acc-1b57e2157dc3.png">

- 썸네일 사진 제작과 다운로드를 위해 썸네일을 만들 수 있는 사이트를 배포했습니다.
- Blurred, Abstract 사진을 랜덤으로 불러올 수 있습니다.
- Theme을 변경할 수 있습니다

### AWS EC2, PM2

- AWS의 EC2 환경을 이용 중입니다.
- 로컬에서 EC2 인스턴스와 연결이 끊겨도 계속 배포 상태를 유지하게 위해 PM2를 이용해 무중단 배포 중입니다.


## 추가하고 싶은 것들

- Ngnix를 사용한 HTTPS 커스텀 서버 이용
- ISR을 사용한 CI/CD
- 더 다양한 인터렉션 공간 생성
