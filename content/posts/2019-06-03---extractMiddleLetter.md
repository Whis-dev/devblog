---
title: 가운데 글자 가져오기
date: "2019-06-03T11:37:00Z"
template: "post"
draft: false
slug: "category/programmers/extractMiddleLetter"
category: "Programmers"
tags:
    - "algorithm"
    - "programmers"
    - "level1"
    - "javascript"
    - "practice"
description: "프로그래머스 코딩테스트 연습문제 Javascript Level1에 있는 가운데 글자 가져오기 문제 풀이"
---

## 문제 설명

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

## 제한사항

- s는 길이가 1 이상, 100이하인 스트링입니다.

### 입출력 예

| s | return |
| --- | --- |
| "abcde" | "c" |
| "qwer" | "we" |

### Solution

---

```javascript

function solution(s) {
    var answer = '';
    var temp = s.split("");
    var parse = parseInt(temp.length /2);
    if (temp.length % 2 == 0) {
        answer = temp[parse-1] + temp[parse];
    } else {
        answer = temp[parse];
    }
    return answer;
}

```
