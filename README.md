# 🦁 Lion Judge - 멋쟁이사자처럼 9기 온라인 실습 포털

멋쟁이사자처럼 9기 교육생들을 위한 **온라인 실습 및 자동 채점(Online Judge) 플랫폼**입니다.  
비용 부담 없는 완전 무료 아키텍처(Vercel 무료 정적 호스팅 + Raspberry Pi 5 도커 샌드박스 채점 엔진)로 구축되었습니다.

---

## 🌟 주요 특징

1. **48개 전 일차 실습 문제 및 해설 기본 탑재**
   - **Java (Day 1 ~ Day 7)**: 카페 영수증, 편의점 재고, 학생 성적 관리, 은행 ATM 등 (총 21문제)
   - **MySQL (Day 8 ~ Day 12)**: 도서관 대출, 영화관 예매, 배달 주문 데이터 모델링/쿼리 (총 15문제)
   - **Web (Day 13 ~ Day 16)**: Todo 리스트, 날씨 대시보드, 쇼핑몰 장바구니 등 (총 12문제)
   - 각 일차별 **상 / 중 / 하** 난이도 구분

2. **라즈베리 파이 5 (8GB) 기반 도커 격리 채점 샌드박스**
   - 네트워크 차단(`--network none`), 메모리/CPU 제한(`--memory 256m`, `--cpus 1.0`), 실행 시간 제한(5초 타임아웃)
   - Java 21(`eclipse-temurin:21-jdk`), Node.js(`node:22-alpine`), Python(`python:3.11-alpine`) 다중 언어 격리 실행

3. **백준(BOJ) 스타일 과제 제출 현황 & 관리자 대시보드**
   - **학생(Student)**: 실시간 코드 실행, 결과 및 점수 확인, 나의 제출 이력 열람
   - **관리자(Admin)**: 전체 교육생 제출 현황 실시간 모니터링 (제출자, 문제, 점수, 소스코드 보기 팝업 모달)

---

## 🔑 기본 테스트 계정

| 구분 | 아이디 (Username) | 비밀번호 (Password) | 역할 (Role) | 권한 |
| :--- | :--- | :--- | :--- | :--- |
| **관리자** | `admin` | `admin1234` | 관리자 (Admin) | 전체 학생 제출 현황 모니터링, 제출 소스코드 열람 |
| **학생** | `student01` | `student1234` | 학생 (Student) | 문제 풀이 및 제출, 개인 채점 이력 확인 |

---

## 🚀 빠른 시작 가이드

### 1. 프론트엔드 (Vercel 배포)
- 이 리포지토리는 Vercel과 GitHub이 자동 연동되어 배포됩니다.
- 로컬에서 바로 실행하려면 `index.html` 파일을 더블 클릭하거나 Live Server로 열면 됩니다.

### 2. 백엔드 채점 서버 (Raspberry Pi 5)
- **위치**: `/home/pi/judge-server/`
- **시작**:
  ```bash
  cd /home/pi/judge-server
  ./start.sh   # 또는 docker compose up -d
  ```
- **중지**:
  ```bash
  cd /home/pi/judge-server
  ./stop.sh    # 또는 docker compose down
  ```
- **기본 접속 포트**: `http://<라즈베리파이_IP>:8000`
