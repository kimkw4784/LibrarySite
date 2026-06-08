# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\accessibility.spec.js >> Web Accessibility Tests >> Homepage should not have any automatically detectable accessibility violations
- Location: tests\accessibility.spec.js:5:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 213

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#2b7de9",
+               "contrastRatio": 4.02,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.02 (foreground color: #ffffff, background color: #2b7de9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"tag blue\">문화행사</span>",
+                 "target": Array [
+                   ".event-item:nth-child(1) > .event-content > .blue.tag",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.02 (foreground color: #ffffff, background color: #2b7de9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"tag blue\">문화행사</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".event-item:nth-child(1) > .event-content > .blue.tag",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#2b7de9",
+               "contrastRatio": 4.02,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.02 (foreground color: #ffffff, background color: #2b7de9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"tag blue\">문화행사</span>",
+                 "target": Array [
+                   ".event-item:nth-child(2) > .event-content > .blue.tag",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.02 (foreground color: #ffffff, background color: #2b7de9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"tag blue\">문화행사</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".event-item:nth-child(2) > .event-content > .blue.tag",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#2b7de9",
+               "contrastRatio": 4.02,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.02 (foreground color: #ffffff, background color: #2b7de9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"tag blue\">강좌</span>",
+                 "target": Array [
+                   ".event-item:nth-child(3) > .event-content > .blue.tag",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.02 (foreground color: #ffffff, background color: #2b7de9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"tag blue\">강좌</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".event-item:nth-child(3) > .event-content > .blue.tag",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#2b7de9",
+               "contrastRatio": 4.02,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.02 (foreground color: #ffffff, background color: #2b7de9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"tag blue\">문화행사</span>",
+                 "target": Array [
+                   ".event-item:nth-child(4) > .event-content > .blue.tag",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.02 (foreground color: #ffffff, background color: #2b7de9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"tag blue\">문화행사</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".event-item:nth-child(4) > .event-content > .blue.tag",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+   Object {
+     "description": "Ensure elements that have scrollable content are accessible by keyboard in Safari",
+     "help": "Scrollable region must have keyboard access",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright",
+     "id": "scrollable-region-focusable",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "focusable-content",
+             "impact": "serious",
+             "message": "Element should have focusable content",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "focusable-element",
+             "impact": "serious",
+             "message": "Element should be focusable",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element should have focusable content
+   Element should be focusable",
+         "html": "<div class=\"tablet-carousel-track\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".tablet-carousel-track",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "wcag2a",
+       "wcag211",
+       "wcag213",
+       "TTv5",
+       "TT4.a",
+       "EN-301-549",
+       "EN-9.2.1.1",
+       "EN-9.2.1.3",
+       "RGAAv4",
+       "RGAA-7.3.2",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - img "화성시립도서관 로고" [ref=e5]:
      - img "화성시립도서관 로고" [ref=e6]
      - heading "화성시립도서관" [level=1] [ref=e7]
    - button "메뉴 열기" [ref=e8] [cursor=pointer]:
      - img [ref=e9]
  - main [ref=e11]:
    - generic [ref=e12]:
      - region "주요 소식 배너" [ref=e13]:
        - heading "주요 소식 배너" [level=2] [ref=e14]
        - generic [ref=e15]:
          - generic [ref=e16]:
            - generic [ref=e17]:
              - button "<매주 수요일> 문화가 있는 날" [ref=e18] [cursor=pointer]:
                - generic [ref=e19]: <매주 수요일> 문화가 있는 날
              - button [ref=e20] [cursor=pointer]:
                - generic [ref=e21]: 전자책(e-Book) 이용 방법 안내
              - button [ref=e22] [cursor=pointer]:
                - generic [ref=e23]: 도서관 주간 두배로 대출 이벤트
              - button [ref=e24] [cursor=pointer]:
                - generic [ref=e25]: 오디오북 제작사업 참여자 모집
              - button [ref=e26] [cursor=pointer]:
                - generic [ref=e27]: 비블리오 배틀 주제 시민 공모
            - generic [ref=e28]:
              - button "이전 배너" [ref=e29] [cursor=pointer]:
                - generic [ref=e30]: ◀
              - button "배너 자동 재생 시작" [ref=e31] [cursor=pointer]:
                - generic [ref=e32]: ▶
              - button "다음 배너" [ref=e33] [cursor=pointer]:
                - generic [ref=e34]: ▶
          - generic [ref=e37]:
            - img [ref=e39] [cursor=pointer]
            - img [ref=e41] [cursor=pointer]
            - img [ref=e43] [cursor=pointer]
            - img [ref=e45] [cursor=pointer]
            - img [ref=e47] [cursor=pointer]
            - img [ref=e49] [cursor=pointer]
            - img [ref=e51] [cursor=pointer]
            - img [ref=e53] [cursor=pointer]
            - img [ref=e55] [cursor=pointer]
            - img [ref=e57] [cursor=pointer]
            - img [ref=e59] [cursor=pointer]
            - img [ref=e61] [cursor=pointer]
            - img [ref=e63] [cursor=pointer]
            - img [ref=e65] [cursor=pointer]
            - img [ref=e67] [cursor=pointer]
      - generic [ref=e68]:
        - search [ref=e70]:
          - generic [ref=e71]: 도서 검색
          - searchbox "찾으시는 도서를 검색하세요" [ref=e72]
          - button "검색" [ref=e73] [cursor=pointer]:
            - img [ref=e74]
        - generic [ref=e78]:
          - 'button "도서관 이용안내: 휴관, 회원가입, 대출안내" [ref=e79] [cursor=pointer]':
            - img [ref=e81]
            - generic [ref=e82]:
              - generic [ref=e83]: 도서관 이용안내
              - generic [ref=e84]: 휴관, 회원가입, 대출안내
          - 'button "지하철역 도서관: 이용장소, 시간, 방법안내" [ref=e85] [cursor=pointer]':
            - img [ref=e87]
            - generic [ref=e88]:
              - generic [ref=e89]: 지하철역 도서관
              - generic [ref=e90]: 이용장소, 시간, 방법안내
          - 'button "희망도서 신청: 희망도서 신청, 조회(현황)" [ref=e91] [cursor=pointer]':
            - img [ref=e93]
            - generic [ref=e94]:
              - generic [ref=e95]: 희망도서 신청
              - generic [ref=e96]: 희망도서 신청, 조회(현황)
          - 'button "내가 빌린 책: 대출조회, 예약, 연장" [ref=e97] [cursor=pointer]':
            - img [ref=e99]
            - generic [ref=e100]:
              - generic [ref=e101]: 내가 빌린 책
              - generic [ref=e102]: 대출조회, 예약, 연장
    - generic [ref=e103]:
      - generic [ref=e105]:
        - generic [ref=e106]:
          - heading "공지사항" [level=2] [ref=e107]
          - button "공지사항 더보기" [ref=e108] [cursor=pointer]: + 더보기
        - list [ref=e109]:
          - listitem [ref=e110]:
            - generic [ref=e111]:
              - generic [ref=e112]: 공통
              - link "[도서관 소식지 풍경] 2026년 봄호(65호) 발간 안내" [ref=e113] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e114]: 2026-04-10
          - listitem [ref=e115]:
            - generic [ref=e116]:
              - generic [ref=e117]: 화성
              - link "화성시립남양도서관 기간제근로자 채용 공고" [ref=e118] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e119]: 2026-04-03
          - listitem [ref=e120]:
            - generic [ref=e121]:
              - generic [ref=e122]: 공통
              - link "제60회 도서관주간 및 도서관의 날 행사 안내" [ref=e123] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e124]: 2026-03-25
          - listitem [ref=e125]:
            - generic [ref=e126]:
              - generic [ref=e127]: 이벤트
              - link "2026년 상반기 독서교실 수강생 모집" [ref=e128] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e129]: 2026-03-15
      - region "문화행사/강좌" [ref=e130]:
        - generic [ref=e131]:
          - heading "문화행사/강좌" [level=2] [ref=e132]
          - button "문화행사/강좌 더보기" [ref=e133] [cursor=pointer]: 더보기 >
        - list [ref=e134]:
          - listitem [ref=e135]:
            - generic [ref=e136]:
              - generic [ref=e137]: 문화행사
              - link "[문화교실]그림책아, 나랑 놀자!" [ref=e138] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e139]: 접수중
          - listitem [ref=e140]:
            - generic [ref=e141]:
              - generic [ref=e142]: 문화행사
              - link "[성인강좌] 목요일에 만나는 인문학 카페" [ref=e143] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e144]: 접수마감
          - listitem [ref=e145]:
            - generic [ref=e146]:
              - generic [ref=e147]: 강좌
              - link "[청소년] 나만의 AI 에이전트 만들기 기초" [ref=e148] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e149]: 접수중
          - listitem [ref=e150]:
            - generic [ref=e151]:
              - generic [ref=e152]: 문화행사
              - link "여름밤의 클래식 음악회 초대" [ref=e153] [cursor=pointer]:
                - /url: "#"
            - generic [ref=e154]: 접수중
    - region "도서 큐레이션" [ref=e155]:
      - heading "도서 큐레이션" [level=2] [ref=e156]
      - tablist [ref=e157]:
        - tab "인기도서" [selected] [ref=e158] [cursor=pointer]
        - tab "추천도서" [ref=e159] [cursor=pointer]
        - tab "신착도서" [ref=e160] [cursor=pointer]
      - tabpanel "인기도서" [ref=e161]:
        - generic [ref=e162]:
          - generic [ref=e163]:
            - img "한국인의 건강 밥상 표지" [ref=e165]
            - generic [ref=e166]:
              - generic [ref=e167]: 한국인의 건강 밥상
              - generic [ref=e168]: 김첨지
          - generic [ref=e169]:
            - img "달빛에 그린 사랑 표지" [ref=e171]
            - generic [ref=e172]:
              - generic [ref=e173]: 달빛에 그린 사랑
              - generic [ref=e174]: 문사랑
          - generic [ref=e175]:
            - img "부의 지도 표지" [ref=e177]
            - generic [ref=e178]:
              - generic [ref=e179]: 부의 지도
              - generic [ref=e180]: 강부자
          - generic [ref=e181]:
            - img "빛나는 우리들의 계절 표지" [ref=e183]
            - generic [ref=e184]:
              - generic [ref=e185]: 빛나는 우리들의 계절
              - generic [ref=e186]: 박가을
  - contentinfo [ref=e187]:
    - navigation "하단 메뉴" [ref=e189]:
      - link "이용약관" [ref=e190] [cursor=pointer]:
        - /url: "#terms"
      - link "개인정보처리방침" [ref=e191] [cursor=pointer]:
        - /url: "#privacy"
      - link "찾아오시는 길" [ref=e192] [cursor=pointer]:
        - /url: "#directions"
      - link "사이트맵" [ref=e193] [cursor=pointer]:
        - /url: "#sitemap"
    - button "유관기관 사이트" [ref=e196] [cursor=pointer]:
      - text: 유관기관 사이트
      - img [ref=e197]
    - generic [ref=e199]:
      - generic [ref=e200]:
        - generic [ref=e201]:
          - text: 경기도 화성시 미래구 가상로 123 (우)00000
          - text: "대표전화 : 031-123-4567 | 팩스 : 031-100-2000"
        - paragraph [ref=e202]: Copyright © 2026 HWASUNG CITY LIBRARY. All Rights Reserved
      - generic [ref=e203]:
        - link "페이스북" [ref=e204] [cursor=pointer]:
          - /url: "#facebook"
          - img [ref=e206]
        - link "인스타그램" [ref=e208] [cursor=pointer]:
          - /url: https://www.instagram.com/hwaseong_citylibrary
          - img [ref=e210]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const AxeBuilder = require('@axe-core/playwright').default;
  3  | 
  4  | test.describe('Web Accessibility Tests', () => {
  5  |   test('Homepage should not have any automatically detectable accessibility violations', async ({ page }) => {
  6  |     // Assuming Vite is running on localhost:5173
  7  |     await page.goto('http://localhost:5173/');
  8  | 
  9  |     // Wait for network to be somewhat idle or just load
  10 |     await page.waitForLoadState('networkidle');
  11 | 
  12 |     // Run axe accessibility check
  13 |     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  14 | 
  15 |     // Attach results to test report for debugging (optional)
  16 |     await test.info().attach('accessibility-scan-results', {
  17 |       body: JSON.stringify(accessibilityScanResults, null, 2),
  18 |       contentType: 'application/json'
  19 |     });
  20 | 
  21 |     // Check for violations
> 22 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  23 |   });
  24 | });
  25 | 
```