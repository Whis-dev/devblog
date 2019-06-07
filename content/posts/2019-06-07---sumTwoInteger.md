---
title: 두 정수 사이의 합
date: "2019-06-07T12:48:00Z"
template: "post"
draft: false
slug: "category/programmers/sumTwoInteger"
category: "Programmers"
tags:
    - "algorithm"
    - "programmers"
    - "level1"
    - "javascript"
    - "practice"
description: "프로그래머스 코딩테스트 연습문제 Javascript Level1에 있는 두 정수 사이의 합 문제 풀이"
---
## 문제 설명

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

## 제한 조건

- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

### 입출력 예

| a | b | return |
| --- | --- | --- |
| 3 | 5 | 12 |
| 3 | 3 | 3 |
| 5 | 5 | 12 |

### Solution

---

```javascript

function solution(a, b) {
    var answer = 0;
    var array  = [a , b].sort((a,b) => a-b);
    if(array[0] == array[1]) {
        return array[0];
    }else {
        let i = array[0];
        while( i <= array[1]) {
            answer += i;
            i++;
        }
        return answer;
    }
}

```
