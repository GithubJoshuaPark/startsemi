# 프로젝트 개요
---
이 프로젝트는 반도체 제조 공정에 대한 정보를 제공하는 웹사이트입니다. 다양한 제조 공정 단계별로 관련 영상과 설명을 포함하고 있습니다. 이 웹사이트는 HTML, CSS, JavaScript로 구성되어 있으며, 반응형 디자인을 적용하여 다양한 기기에서 최적의 사용자 경험을 제공합니다.

### 주요 특징은 다음과 같습니다.

```bash
    1. 동적 콘텐츠 생성: 모든 비디오 정보는 JavaScript(script.js) 내의 
       videoData 객체 배열에    저장되어 있으며,        
       페이지 로딩 시 이 데이터를 기반으로 동적으로 HTML 콘텐츠를 생성합니다. 
       이 덕분에 HTML 파일을 직접 수정하지 않고도 콘텐츠 추가 및 관리가 매우 용이합니다.

    2. 반응형 웹 디자인: CSS 미디어 쿼리를 사용하여 데스크톱, 태블릿, 모바일 등 다양한 화면
       크기에서 최적화된 레이아웃을 제공합니다.

    3. PWA (Progressive Web App): 사용자가 웹사이트를 스마트폰 홈 화면에 앱처럼 설치하고, 
       오프라인 상태에서도 기본적인 콘텐츠에 접근할 수 있는 기능을 갖추고 있습니다.

    4. 성능 최적화: 유튜브 영상(<iframe>)에 loading="lazy" 속성을 적용하여, 사용자가 스크롤하여 
       실제로 보게 될 영상만 로드하는 지연 로딩(Lazy Loading) 기술로 초기 로딩 속도를 향상시켰습니다.

    5. Firebase 호스팅: Firebase의 멀티사이트(multi-site) 호스팅 기능을 사용하여 
       startsemi.web.app 주소로 배포되었습니다.
```

### 주요 파일별 역할
```bash
1. 프론트엔드 (사용자에게 보이는 부분)
    /Users/joshuapark/Desktop/DevAndStudy/vanialJs/semibasic/public/index.html: 
    - 웹페이지의 기본 구조와 뼈대를 정의하는 HTML 파일입니다. 
      콘텐츠가 동적으로 채워질 <section> 태그들과 PWA 설치를 위한 메타 태그들이 포함되어 있습니다.

    /Users/joshuapark/Desktop/DevAndStudy/vanialJs/semibasic/public/style.css: 
    - 웹사이트의 모든 시각적 디자인(색상, 폰트, 레이아웃 등)을 담당합니다.
      CSS 변수(:root)를 사용하여 오렌지색 테마를 일관되게 관리하고 있습니다.

    /Users/joshuapark/Desktop/DevAndStudy/vanialJs/semibasic/public/script.js: 
    - 웹사이트의 '두뇌' 역할을 하는 가장 핵심적인 파일입니다.

    데이터 관리: videoData 변수에 모든 영상 정보를 구조화된 JSON 형태로 가지고 있습니다.

    동적 렌더링: videoData를 순회하며 각 비디오에 대한 HTML 요소를 생성하고, 
                 적절한 섹션에 동적으로 추가합니다.

    상호작용 구현: 내비게이션 메뉴의 부드러운 스크롤, 모바일 햄버거 메뉴 동작, 
                   그리고 주제별 영상 필터링을 위한 검색(select) 기능 등을 처리합니다.

    PWA 등록: 서비스 워커(sw.js)를 브라우저에 등록하여 PWA 기능을 활성화합니다.


2. PWA (Progressive Web App) 관련 파일
    /Users/joshuapark/Desktop/DevAndStudy/vanialJs/semibasic/public/manifest.json: 
    - 웹 앱 매니페스트 파일입니다. 앱의 이름, 아이콘, 테마 색상 등 "홈 화면에 추가" 시 필요한 정보들을 정의합니다.

    /Users/joshuapark/Desktop/DevAndStudy/vanialJs/semibasic/public/sw.js: 
    - 서비스 워커 파일입니다. 웹사이트의 핵심 파일들(HTML, CSS, JS, 이미지 등)을 
      사용자의 기기에 캐싱(저장)하여, 오프라인 상태에서도 사이트가 작동하도록 만듭니다.

3. 개발 및 배포 설정 파일
    /Users/joshuapark/Desktop/DevAndStudy/vanialJs/semibasic/firebase.json: 
    - Firebase 호스팅 설정을 정의합니다. target을 startsemi로 지정하여, 
      RootBridge 프로젝트 내의 여러 사이트 중 startsemi 사이트에만 배포되도록 설정되어 있습니다.

    /Users/joshuapark/Desktop/DevAndStudy/vanialJs/semibasic/.firebaserc: 
    - 로컬 프로젝트 폴더를 원격 Firebase 프로젝트(rootbridge-9b225)와 연결하는 정보를 담고 있습니다.

    /Users/joshuapark/Desktop/DevAndStudy/vanialJs/semibasic/.gitignore: 
    - Git 버전 관리에서 제외할 파일 및 폴더(예: node_modules, 시스템 파일, 로그 파일 등)를 
      지정하여 저장소를 깨끗하게 유지합니다.

    /Users/joshuapark/Desktop/DevAndStudy/vanialJs/semibasic/README.md: 
    - 프로젝트의 개요와 함께, 특히 복잡할 수 있는 Firebase 멀티사이트 배포 과정을 
      단계별로 상세히 기록한 문서입니다.

4. 요약:
    이 프로젝트는 잘 구조화된 바닐라 JS 프로젝트의 훌륭한 예시입니다. 
    데이터와 뷰를 분리하고, 반응형 디자인과 PWA 같은 현대적인 웹 기술을 적용했으며, 
    Firebase를 통한 배포 자동화까지 체계적으로 구성되어 있습니다.
```

---
## PWA (Progressive Web App) 기능 추가

이 웹사이트는 PWA로 구성되어 사용자가 홈 화면에 앱처럼 설치하고, 오프라인 상태에서도 기본적인 콘텐츠에 접근할 수 있습니다.

### 1. 웹 앱 매니페스트 (`manifest.json`)

앱의 이름, 아이콘, 테마 색상 등의 정보를 정의하는 `public/manifest.json` 파일을 추가했습니다.

### 2. 서비스 워커 (`sw.js`)

오프라인 캐싱을 위해 `public/sw.js` 파일을 추가했습니다. 이 서비스 워커는 웹사이트의 핵심 정적 파일들(HTML, CSS, JS, 이미지)을 사용자의 기기에 저장하여 네트워크 연결이 없을 때도 페이지를 불러올 수 있게 합니다.

### 3. HTML 및 JavaScript 수정

-   **`index.html`**: `<head>` 태그에 `manifest.json` 링크와 관련 메타 태그를 추가했습니다.
-   **`script.js`**: 페이지 로딩 시 `sw.js` 서비스 워커를 브라우저에 등록하는 코드를 추가했습니다.

### 4. 앱 아이콘 (필수 작업)

PWA 설치 시 홈 화면에 표시될 아이콘 파일이 필요합니다. 아래 경로에 해당 크기의 아이콘 이미지를 직접 생성하여 위치시켜야 합니다.
-   `public/images/icon-192x192.png`
-   `public/images/icon-512x512.png`

# 반도체 공정 학습 사이트 배포 가이드 (Firebase Hosting)

이 문서는 `semibasic` 프로젝트를 Firebase Hosting에 배포하는 과정을 기록하고 설명합니다. 이 프로젝트는 `RootBridge`라는 Firebase 프로젝트 내의 `startsemi`라는 멀티사이트(multi-site) 호스팅 환경에 배포되었습니다.

## 사전 준비

1.  **Node.js 및 npm**: 컴퓨터에 Node.js (LTS 버전 권장)가 설치되어 있어야 합니다.
2.  **Firebase CLI**: Firebase 명령줄 도구를 전역으로 설치합니다.
    ```bash
    npm install -g firebase-tools
    ```

## 초기 설정 및 배포 과정

### 1. Firebase 로그인

터미널에서 다음 명령어를 실행하여 Firebase 계정에 로그인합니다.

```bash
firebase login
```

### 2. 프로젝트 초기화

프로젝트 루트 디렉토리에서 다음 명령어를 실행하여 Firebase 설정을 시작했습니다.

```bash
firebase init
```

초기화 과정에서 다음과 같이 선택했습니다.

-   **Feature Selection**: `Hosting: Configure files for Firebase Hosting...` 선택
-   **Project Setup**: `Use an existing project` 선택
-   **Default Project**: `rootbridge-9b225 (RootBridge)` 프로젝트 선택
-   **Public Directory**: `public` 입력 (배포할 파일들이 위치한 폴더)
-   **Single-Page App**: `No` 선택 (이 프로젝트는 SPA가 아님)
-   **GitHub Deploys**: `No` 선택
-   **Overwrite `index.html`?**: `No` 선택 (기존에 작업한 `index.html` 파일 유지를 위해)

### 3. 멀티사이트(Multi-site) 배포 설정

`firebase init` 완료 후, 특정 사이트(`startsemi`)에 배포하기 위해 추가 설정이 필요했습니다.

#### 3.1. `firebase.json` 수정

`hosting` 설정을 배열 형태로 변경하여 배포 대상을 지정할 수 있도록 `firebase.json` 파일을 수정했습니다. 이 파일은 로컬 `startsemi` 타겟이 `public` 폴더를 사용하도록 정의합니다.

#### 3.2. 배포 대상(Target) 연결

로컬의 `startsemi` 타겟과 Firebase 콘솔에 생성된 원격 `startsemi` 사이트를 연결하기 위해 다음 명령어를 **한 번** 실행했습니다.

```bash
firebase target:apply hosting startsemi startsemi
```

### 4. 최종 배포

모든 설정이 완료된 후, 다음 명령어를 사용하여 `startsemi.web.app`으로 프로젝트를 성공적으로 배포했습니다.

```bash
firebase deploy --only hosting:startsemi
```

## 향후 업데이트

프로젝트의 HTML, CSS, JavaScript 파일을 수정한 후에는 `public` 폴더에 최신 파일을 반영하고, 위의 최종 배포 명령어(`firebase deploy --only hosting:startsemi`)만 다시 실행하면 웹사이트가 업데이트됩니다.