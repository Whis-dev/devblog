---
title: 문자열 내림차순으로 배치하기
date: "2019-06-17T12:27:00Z"
template: "post"
draft: false
slug: "category/programmers/handlingStringBasic"
category: "Programmers"
tags:
    - "algorithm"
    - "programmers"
    - "level1"
    - "javascript"
    - "practice"
description: "프로그래머스 코딩테스트 연습문제 Javascript Level1에 있는 문자열 다루기 기본 문제 풀이"
---
## 문제 설명

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

## 제한사항

- s는 길이 1 이상, 길이 8 이하인 문자열입니다.

### 입출력 예

| s | return |
| --- | --- |
| "a234" | false |
| "1234" | true |

### Solution

---

```javascript

function solution(s) {
    // test 11번 안됨
    // var test = s.split('');
    // if(test.length == 4 || test.length == 6) {
    //     return isNaN(s) ? false : true;
    // } else {
    //     return false;
    // }

    //first Solution
    // if(s.length == (4 || 6)){
    //     let regExp = /^[0-9]+$/;
    //     return regExp.test(s);
    // } else {
    //     return false;
    // }

    //second Solution
    // return s.length == (4 || 6) ? /^[0-9]+$/.test(s) : false;

    //third Solution
    return /^\d{6}$|^\d{4}$/.test(s);
}

```
