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