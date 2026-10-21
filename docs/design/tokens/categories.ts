// Klover 카테고리·상태 태그 정의 (참고용 — apps/desktop/src/renderer/lib/categories.ts 로 복사해 사용)
// 색은 klover-theme.css 의 토큰 클래스만 사용한다.

export type CategoryKey =
  | "work_request"
  | "meeting"
  | "approval"
  | "report_share"
  | "notice"
  | "external"
  | "newsletter";

export const CATEGORIES: Record<
  CategoryKey,
  { label: string; tag: string; dot: string }
> = {
  work_request: { label: "업무 요청",     tag: "bg-cat-work-bg text-cat-work-fg",             dot: "bg-cat-work-dot" },
  meeting:      { label: "회의·일정",     tag: "bg-cat-meeting-bg text-cat-meeting-fg",       dot: "bg-cat-meeting-dot" },
  approval:     { label: "결재·승인",     tag: "bg-cat-approval-bg text-cat-approval-fg",     dot: "bg-cat-approval-dot" },
  report_share: { label: "보고·공유",     tag: "bg-cat-report-bg text-cat-report-fg",         dot: "bg-cat-report-dot" },
  notice:       { label: "공지",          tag: "bg-cat-notice-bg text-cat-notice-fg",         dot: "bg-cat-notice-dot" },
  external:     { label: "외부·고객",     tag: "bg-cat-external-bg text-cat-external-fg",     dot: "bg-cat-external-dot" },
  newsletter:   { label: "뉴스레터·광고", tag: "bg-cat-newsletter-bg text-cat-newsletter-fg", dot: "bg-cat-newsletter-dot" },
};

// 상태 태그 (메일 목록·검색 결과)
export const STATUS_TAGS = {
  needs_reply: { label: "회신 필요",            tag: "bg-danger-subtle text-danger" },
  due:         { label: (d: string) => `마감 ${d}`, tag: "bg-warning-subtle text-warning" },
  unreplied:   { label: (n: number) => `미회신 ${n}일`, tag: "bg-danger-subtle text-danger" },
  suggestion:  { label: "일정 제안",            tag: "bg-ai-subtle text-ai-text" },
} as const;

// 태그 공통 클래스
export const TAG_BASE =
  "inline-flex items-center h-5 px-1.5 rounded-sm text-caption font-medium whitespace-nowrap";
