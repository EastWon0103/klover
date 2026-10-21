# Klover 브랜드 · 로고 가이드

> v1.0 · 2026-10-20 · 미리보기: `../styleguide.png` 1장

## 로고의 의미

- **네 잎 클로버**: 서비스 이름(Klover = Clover의 C를 Koscom의 K로)과 행운. 네 잎은 Klover가 돕는 네 가지 일 — 분류, 검색, 답장, 보고.
- **가운데 ◆ (보라)**: AI. 앱 안에서 AI가 만든 것을 표시하는 ◆ 기호와 같은 모양이다.
- **워드마크 `klover`**: Pretendard Bold, 소문자, 자간 -2%. 글자는 윤곽선(path)으로 바꿔 두어 글꼴이 없어도 똑같이 보인다.

## 파일

| 파일 | 쓰는 곳 |
| --- | --- |
| `klover-logo.svg` | 기본 가로 로고 (마크 + 워드마크). 앱 상단 바, 첫 실행 화면, 문서 |
| `klover-logo-white.svg` | 어두운 배경용 |
| `klover-logo-mono.svg` | 한 가지 색(currentColor) — 인쇄, 워터마크 |
| `klover-wordmark.svg` | 워드마크만 |
| `klover-mark.svg` | 마크만 (컬러) — 빈 화면 일러스트, 대화상자 아이콘 |
| `klover-mark-mono.svg` / `klover-mark-white.svg` | 마크 단색 / 흰색 |
| `klover-app-icon.svg` | 앱 아이콘 원본 (초록 바탕 + 흰 잎) |
| `klover.ico` | **Windows 앱 아이콘** (16·24·32·48·64·128·256px 포함) → electron-builder `win.icon` |
| `png/app-icon-{16…512}.png` | 앱 아이콘 PNG (설치 화면, 알림 아이콘 등) |
| `klover-tray-light.svg`, `png/tray-light-{16,32}.png` | **트레이 아이콘 — 어두운 작업 표시줄용(흰색, Windows 기본)** |
| `klover-tray-dark.svg`, `png/tray-dark-{16,32}.png` | 트레이 아이콘 — 밝은 작업 표시줄용 |
| `png/logo-768w.png`, `png/logo-white-768w.png`, `png/mark-512.png` | 문서·발표 자료용 비트맵 |

Electron 연결 예시:

```ts
// main/tray.ts
const icon = nativeTheme.shouldUseDarkColors ? "tray-light-32.png" : "tray-dark-32.png";
// main/notifications.ts  — new Notification({ icon: "app-icon-256.png", ... })
```

## 색

| 이름 | 값 | 쓰임 |
| --- | --- | --- |
| Clover 500 | `#1F9D55` | 로고 잎 |
| Violet 500 | `#5B4FE0` | 로고 가운데 ◆ |
| Ink | `#14171C` | 워드마크 |
| Violet 200 | `#C8C3F7` | 흰색 로고의 ◆ |

## 사용 규칙

- **여백**: 로고 둘레에 마크 높이의 1/4 이상 비워 둔다.
- **최소 크기**: 가로 로고 높이 20px, 마크 16px. 그보다 작으면 마크만 쓴다.
- **배경**: 흰색·밝은 회색에는 기본 로고, 어두운 배경·사진 위에는 흰색 로고.
- **하지 말 것**: 색 바꾸기(잎을 보라로, ◆를 초록으로), 늘이거나 눌러서 비율 바꾸기, 그림자·그라데이션 추가, 워드마크를 다른 글꼴로 다시 쓰기, 잎 개수 바꾸기.

## 다시 만들기

로고는 코드로 만들었다(SVG 직접 생성). 모양을 고치고 싶으면 Claude Code에 "`docs/design/brand/klover-mark.svg`의 잎을 조금 더 둥글게"처럼 요청하고, 바뀐 SVG로 PNG·ICO를 다시 뽑는다.
