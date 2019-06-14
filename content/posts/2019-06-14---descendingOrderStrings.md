---
title: 문자열 내림차순으로 배치하기
date: "2019-06-14T13:22:00Z"
template: "post"
draft: false
slug: "category/programmers/descendingOrderStrings"
category: "Programmers"
tags:
    - "algorithm"
    - "programmers"
    - "level1"
    - "javascript"
    - "practice"
description: "프로그래머스 코딩테스트 연습문제 Javascript Level1에 있는 문자열 내림차순으로 배치하기 문제 풀이"
---
## 문제 설명

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

## 제한사항

- str은 길이 1 이상인 문자열입니다.

### 입출력 예

| s | return |
| --- | --- |
| "Zbcdefg" | "gfedcbZ" |

### Solution

---

```javascript

function solution(s) {
    // return s.split('').sort().reverse().join('');
    return [...s].sort().reverse().join('');
}

```
