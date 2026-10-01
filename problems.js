// 멋쟁이사자처럼 9기 전체 16일차 실습 문제 데이터셋 (2시간 맞춤형 70제)
// 각 일차별 상/중/하/도전 난이도 필수 포함 및 초보자 힌트 탑재
// 1일차 10개 테스트케이스 & 3개 예제 입출력 고도화 완료

const PROBLEMS = [
    {
        "id": "day01_하1",
        "day": 1,
        "subject": "Java",
        "difficulty": "하",
        "title": "두 정수의 사칙연산 및 몫·나머지 계산기 (SimpleArithmetic)",
        "desc": "두 개의 정수 A와 B를 입력받아, 두 수의 덧셈(A+B), 뺄셈(A-B), 곱셈(A*B), 나눗셈의 몫(A/B), 나눗셈의 나머지(A%B)를 계산하여 서식에 맞게 한 줄씩 출력하세요.\n\n[입력]\n첫째 줄에 두 정수 A와 B가 공백으로 구분되어 주어집니다. (단, B는 0이 아님)\n(예: 20 6)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n\n        System.out.println(\"덧셈: \" + (a + b));\n        System.out.println(\"뺄셈: \" + (a - b));\n        System.out.println(\"곱셈: \" + (a * b));\n        System.out.println(\"몫: \" + (a / b));\n        System.out.println(\"나머지: \" + (a % b));\n    }\n}\n",
        "sample_input": "20 6",
        "sample_output": "덧셈: 26\r\n뺄셈: 14\r\n곱셈: 120\r\n몫: 3\r\n나머지: 2",
        "expected": "덧셈: 26\r\n뺄셈: 14\r\n곱셈: 120\r\n몫: 3\r\n나머지: 2",
        "hint": "1. import java.util.Scanner; : 키보드 입력을 처리하기 위해 자바 기본 제공 Scanner 라이브러리를 불러옵니다.\n2. Scanner sc = new Scanner(System.in); : 입력 도구 객체를 생성합니다.\n3. int a = sc.nextInt(); int b = sc.nextInt(); : 공백으로 구분된 두 정수를 차례대로 읽어 변수에 대입합니다.\n4. 나눗셈의 몫은 / 연산자, 나머지는 % 연산자를 사용합니다.\n5. System.out.println(\"덧셈: \" + (a + b)); 처럼 괄호 (a + b)로 묶어주어야 문자열 이어붙이기가 아닌 덧셈 계산이 올바르게 수행됩니다.",
        "testcases": [
            {
                "input": "20 6",
                "expected": "덧셈: 26\r\n뺄셈: 14\r\n곱셈: 120\r\n몫: 3\r\n나머지: 2",
                "is_hidden": false
            },
            {
                "input": "100 25",
                "expected": "덧셈: 125\r\n뺄셈: 75\r\n곱셈: 2500\r\n몫: 4\r\n나머지: 0",
                "is_hidden": false
            },
            {
                "input": "7 3",
                "expected": "덧셈: 10\r\n뺄셈: 4\r\n곱셈: 21\r\n몫: 2\r\n나머지: 1",
                "is_hidden": false
            },
            {
                "input": "15 4",
                "expected": "덧셈: 19\r\n뺄셈: 11\r\n곱셈: 60\r\n몫: 3\r\n나머지: 3",
                "is_hidden": true
            },
            {
                "input": "1 1",
                "expected": "덧셈: 2\r\n뺄셈: 0\r\n곱셈: 1\r\n몫: 1\r\n나머지: 0",
                "is_hidden": true
            },
            {
                "input": "999 10",
                "expected": "덧셈: 1009\r\n뺄셈: 989\r\n곱셈: 9990\r\n몫: 99\r\n나머지: 9",
                "is_hidden": true
            },
            {
                "input": "50 7",
                "expected": "덧셈: 57\r\n뺄셈: 43\r\n곱셈: 350\r\n몫: 7\r\n나머지: 1",
                "is_hidden": true
            },
            {
                "input": "1234 56",
                "expected": "덧셈: 1290\r\n뺄셈: 1178\r\n곱셈: 69104\r\n몫: 22\r\n나머지: 2",
                "is_hidden": true
            },
            {
                "input": "80 8",
                "expected": "덧셈: 88\r\n뺄셈: 72\r\n곱셈: 640\r\n몫: 10\r\n나머지: 0",
                "is_hidden": true
            },
            {
                "input": "2000000 3",
                "expected": "덧셈: 2000003\r\n뺄셈: 1999997\r\n곱셈: 6000000\r\n몫: 666666\r\n나머지: 2",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "20 6",
                "output": "덧셈: 26\r\n뺄셈: 14\r\n곱셈: 120\r\n몫: 3\r\n나머지: 2"
            },
            {
                "input": "100 25",
                "output": "덧셈: 125\r\n뺄셈: 75\r\n곱셈: 2500\r\n몫: 4\r\n나머지: 0"
            },
            {
                "input": "7 3",
                "output": "덧셈: 10\r\n뺄셈: 4\r\n곱셈: 21\r\n몫: 2\r\n나머지: 1"
            }
        ]
    },
    {
        "id": "day01_하2",
        "day": 1,
        "subject": "Java",
        "difficulty": "하",
        "title": "카페 음료 영수증 결제 금액 계산기 (CafeReceiptCalculator)",
        "desc": "카페 포스기(POS)에서 주문받은 음료의 단가와 수량을 입력받아 공급가액, 부가세(VAT 10%), 최종 결제 금액을 계산하여 출력하세요.\n(부가세는 공급가액의 10%이며, (int)로 명시적 형변환합니다.)\n\n[입력]\n첫째 줄에 아메리카노 단가와 수량, 카페라떼 단가와 수량이 공백으로 구분되어 주어집니다.\n(예: 4500 2 5000 3)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int americanoPrice = sc.nextInt();\n        int americanoQty = sc.nextInt();\n        int lattePrice = sc.nextInt();\n        int latteQty = sc.nextInt();\n\n        int supplyPrice = (americanoPrice * americanoQty) + (lattePrice * latteQty);\n        int vat = (int) (supplyPrice * 0.1);\n        int totalAmount = supplyPrice + vat;\n\n        System.out.println(\"=== 스타카페 주문 영수증 ===\");\n        System.out.printf(\"아메리카노 (%d원 x %d잔): %d원\\n\", americanoPrice, americanoQty, americanoPrice * americanoQty);\n        System.out.printf(\"카페라떼   (%d원 x %d잔): %d원\\n\", lattePrice, latteQty, lattePrice * latteQty);\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"공급가액: %d원\\n\", supplyPrice);\n        System.out.printf(\"부가세(10%%): %d원\\n\", vat);\n        System.out.printf(\"최종 결제 금액: %d원\\n\", totalAmount);\n    }\n}\n",
        "sample_input": "4500 2 5000 3",
        "sample_output": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (4500원 x 2잔): 9000원\n카페라떼   (5000원 x 3잔): 15000원\n---------------------------------\r\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원",
        "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (4500원 x 2잔): 9000원\n카페라떼   (5000원 x 3잔): 15000원\n---------------------------------\r\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원",
        "hint": "1. 4개의 정수를 sc.nextInt()로 순서대로 입력받습니다:\n   int americanoPrice = sc.nextInt(); int americanoQty = sc.nextInt();\n   int lattePrice = sc.nextInt(); int latteQty = sc.nextInt();\n2. 부가세는 공급가액의 10%이며, 소수점을 버리고 정수로 변환하기 위해 (int) (supplyPrice * 0.1) 형태로 명시적 형변환을 적용합니다.\n3. System.out.printf() 서식 출력에서 % 기호 자체를 출력할 때는 %% 로 두 번 작성해야 합니다.",
        "testcases": [
            {
                "input": "4500 2 5000 3",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (4500원 x 2잔): 9000원\n카페라떼   (5000원 x 3잔): 15000원\n---------------------------------\r\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원",
                "is_hidden": false
            },
            {
                "input": "3000 1 4000 2",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (3000원 x 1잔): 3000원\n카페라떼   (4000원 x 2잔): 8000원\n---------------------------------\r\n공급가액: 11000원\n부가세(10%): 1100원\n최종 결제 금액: 12100원",
                "is_hidden": false
            },
            {
                "input": "5000 0 6000 1",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (5000원 x 0잔): 0원\n카페라떼   (6000원 x 1잔): 6000원\n---------------------------------\r\n공급가액: 6000원\n부가세(10%): 600원\n최종 결제 금액: 6600원",
                "is_hidden": false
            },
            {
                "input": "4000 5 5500 0",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (4000원 x 5잔): 20000원\n카페라떼   (5500원 x 0잔): 0원\n---------------------------------\r\n공급가액: 20000원\n부가세(10%): 2000원\n최종 결제 금액: 22000원",
                "is_hidden": true
            },
            {
                "input": "1500 10 2000 5",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (1500원 x 10잔): 15000원\n카페라떼   (2000원 x 5잔): 10000원\n---------------------------------\r\n공급가액: 25000원\n부가세(10%): 2500원\n최종 결제 금액: 27500원",
                "is_hidden": true
            },
            {
                "input": "4800 3 5300 2",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (4800원 x 3잔): 14400원\n카페라떼   (5300원 x 2잔): 10600원\n---------------------------------\r\n공급가액: 25000원\n부가세(10%): 2500원\n최종 결제 금액: 27500원",
                "is_hidden": true
            },
            {
                "input": "3500 1 4500 1",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (3500원 x 1잔): 3500원\n카페라떼   (4500원 x 1잔): 4500원\n---------------------------------\r\n공급가액: 8000원\n부가세(10%): 800원\n최종 결제 금액: 8800원",
                "is_hidden": true
            },
            {
                "input": "10000 1 12000 1",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (10000원 x 1잔): 10000원\n카페라떼   (12000원 x 1잔): 12000원\n---------------------------------\r\n공급가액: 22000원\n부가세(10%): 2200원\n최종 결제 금액: 24200원",
                "is_hidden": true
            },
            {
                "input": "2500 4 3500 4",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (2500원 x 4잔): 10000원\n카페라떼   (3500원 x 4잔): 14000원\n---------------------------------\r\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원",
                "is_hidden": true
            },
            {
                "input": "5000 10 6000 10",
                "expected": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (5000원 x 10잔): 50000원\n카페라떼   (6000원 x 10잔): 60000원\n---------------------------------\r\n공급가액: 110000원\n부가세(10%): 11000원\n최종 결제 금액: 121000원",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "4500 2 5000 3",
                "output": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (4500원 x 2잔): 9000원\n카페라떼   (5000원 x 3잔): 15000원\n---------------------------------\r\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원"
            },
            {
                "input": "3000 1 4000 2",
                "output": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (3000원 x 1잔): 3000원\n카페라떼   (4000원 x 2잔): 8000원\n---------------------------------\r\n공급가액: 11000원\n부가세(10%): 1100원\n최종 결제 금액: 12100원"
            },
            {
                "input": "5000 0 6000 1",
                "output": "=== 스타카페 주문 영수증 ===\r\n아메리카노 (5000원 x 0잔): 0원\n카페라떼   (6000원 x 1잔): 6000원\n---------------------------------\r\n공급가액: 6000원\n부가세(10%): 600원\n최종 결제 금액: 6600원"
            }
        ]
    },
    {
        "id": "day01_중1",
        "day": 1,
        "subject": "Java",
        "difficulty": "중",
        "title": "편의점 거스름돈 최소 화폐 매수 계산기 (ChangeCalculator)",
        "desc": "손님이 낸 금액과 상품 금액을 입력받아, 거스름돈을 최소 매수의 화폐(10,000원, 5,000원, 1,000원, 500원, 100원)로 거슬러 주기 위한 단위별 개수를 산출하세요.\n\n[입력]\n첫째 줄에 상품 금액과 손님이 낸 금액이 공백으로 주어집니다.\n(예: 23700 50000)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int itemPrice = sc.nextInt();\n        int paidAmount = sc.nextInt();\n        int change = paidAmount - itemPrice;\n\n        int count10000 = change / 10000;\n        int rem10000 = change % 10000;\n        int count5000 = rem10000 / 5000;\n        int rem5000 = rem10000 % 5000;\n        int count1000 = rem5000 / 1000;\n        int rem1000 = rem5000 % 1000;\n        int count500 = rem1000 / 500;\n        int rem500 = rem1000 % 500;\n        int count100 = rem500 / 100;\n\n        System.out.println(\"=== 편의점 거스름돈 계산기 ===\");\n        System.out.printf(\"상품 금액: %,d원\\n\", itemPrice);\n        System.out.printf(\"받은 금액: %,d원\\n\", paidAmount);\n        System.out.printf(\"거스름돈 총액: %,d원\\n\", change);\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"10,000원권: %d장\\n\", count10000);\n        System.out.printf(\" 5,000원권: %d장\\n\", count5000);\n        System.out.printf(\" 1,000원권: %d장\\n\", count1000);\n        System.out.printf(\"   500원 동전: %d개\\n\", count500);\n        System.out.printf(\"   100원 동전: %d개\\n\", count100);\n    }\n}\n",
        "sample_input": "23700 50000",
        "sample_output": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 23,700원\n받은 금액: 50,000원\n거스름돈 총액: 26,300원\n---------------------------------\r\n10,000원권: 2장\n 5,000원권: 1장\n 1,000원권: 1장\n   500원 동전: 0개\n   100원 동전: 3개",
        "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 23,700원\n받은 금액: 50,000원\n거스름돈 총액: 26,300원\n---------------------------------\r\n10,000원권: 2장\n 5,000원권: 1장\n 1,000원권: 1장\n   500원 동전: 0개\n   100원 동전: 3개",
        "hint": "1. 거스름돈 총액 = 받은 금액 - 상품 금액 (change = paidAmount - itemPrice)\n2. 가장 큰 단위 화폐(10,000원)부터 몫(/)으로 장수를 구하고, 나머지(%)를 다음 단위로 넘겨주는 연쇄 계산을 작성합니다:\n   - int count10000 = change / 10000;\n   - int rem10000 = change % 10000;\n   - int count5000 = rem10000 / 5000; (이하 1000원, 500원, 100원 반복)\n3. 3자리마다 콤마를 찍으려면 printf(\"%,d원\\n\", itemPrice)의 %,d 서식을 사용하세요.",
        "testcases": [
            {
                "input": "23700 50000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 23,700원\n받은 금액: 50,000원\n거스름돈 총액: 26,300원\n---------------------------------\r\n10,000원권: 2장\n 5,000원권: 1장\n 1,000원권: 1장\n   500원 동전: 0개\n   100원 동전: 3개",
                "is_hidden": false
            },
            {
                "input": "14300 20000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 14,300원\n받은 금액: 20,000원\n거스름돈 총액: 5,700원\n---------------------------------\r\n10,000원권: 0장\n 5,000원권: 1장\n 1,000원권: 0장\n   500원 동전: 1개\n   100원 동전: 2개",
                "is_hidden": false
            },
            {
                "input": "5000 5000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 5,000원\n받은 금액: 5,000원\n거스름돈 총액: 0원\n---------------------------------\r\n10,000원권: 0장\n 5,000원권: 0장\n 1,000원권: 0장\n   500원 동전: 0개\n   100원 동전: 0개",
                "is_hidden": false
            },
            {
                "input": "1200 10000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 1,200원\n받은 금액: 10,000원\n거스름돈 총액: 8,800원\n---------------------------------\r\n10,000원권: 0장\n 5,000원권: 1장\n 1,000원권: 3장\n   500원 동전: 1개\n   100원 동전: 3개",
                "is_hidden": true
            },
            {
                "input": "48500 50000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 48,500원\n받은 금액: 50,000원\n거스름돈 총액: 1,500원\n---------------------------------\r\n10,000원권: 0장\n 5,000원권: 0장\n 1,000원권: 1장\n   500원 동전: 1개\n   100원 동전: 0개",
                "is_hidden": true
            },
            {
                "input": "1900 5000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 1,900원\n받은 금액: 5,000원\n거스름돈 총액: 3,100원\n---------------------------------\r\n10,000원권: 0장\n 5,000원권: 0장\n 1,000원권: 3장\n   500원 동전: 0개\n   100원 동전: 1개",
                "is_hidden": true
            },
            {
                "input": "36200 100000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 36,200원\n받은 금액: 100,000원\n거스름돈 총액: 63,800원\n---------------------------------\r\n10,000원권: 6장\n 5,000원권: 0장\n 1,000원권: 3장\n   500원 동전: 1개\n   100원 동전: 3개",
                "is_hidden": true
            },
            {
                "input": "700 1000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 700원\n받은 금액: 1,000원\n거스름돈 총액: 300원\n---------------------------------\r\n10,000원권: 0장\n 5,000원권: 0장\n 1,000원권: 0장\n   500원 동전: 0개\n   100원 동전: 3개",
                "is_hidden": true
            },
            {
                "input": "85400 90000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 85,400원\n받은 금액: 90,000원\n거스름돈 총액: 4,600원\n---------------------------------\r\n10,000원권: 0장\n 5,000원권: 0장\n 1,000원권: 4장\n   500원 동전: 1개\n   100원 동전: 1개",
                "is_hidden": true
            },
            {
                "input": "3500 50000",
                "expected": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 3,500원\n받은 금액: 50,000원\n거스름돈 총액: 46,500원\n---------------------------------\r\n10,000원권: 4장\n 5,000원권: 1장\n 1,000원권: 1장\n   500원 동전: 1개\n   100원 동전: 0개",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "23700 50000",
                "output": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 23,700원\n받은 금액: 50,000원\n거스름돈 총액: 26,300원\n---------------------------------\r\n10,000원권: 2장\n 5,000원권: 1장\n 1,000원권: 1장\n   500원 동전: 0개\n   100원 동전: 3개"
            },
            {
                "input": "14300 20000",
                "output": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 14,300원\n받은 금액: 20,000원\n거스름돈 총액: 5,700원\n---------------------------------\r\n10,000원권: 0장\n 5,000원권: 1장\n 1,000원권: 0장\n   500원 동전: 1개\n   100원 동전: 2개"
            },
            {
                "input": "5000 5000",
                "output": "=== 편의점 거스름돈 계산기 ===\r\n상품 금액: 5,000원\n받은 금액: 5,000원\n거스름돈 총액: 0원\n---------------------------------\r\n10,000원권: 0장\n 5,000원권: 0장\n 1,000원권: 0장\n   500원 동전: 0개\n   100원 동전: 0개"
            }
        ]
    },
    {
        "id": "day01_중2",
        "day": 1,
        "subject": "Java",
        "difficulty": "중",
        "title": "테마파크 입장료 및 우대 혜택 판별기 (ThemeParkPricing)",
        "desc": "테마파크 기준 요금, 입장객 나이, 우대 대상 여부(1: 우대, 0: 일반), 연간회원권 보유 여부(1: 보유, 0: 일반)를 입력받아 조건에 맞는 최종 입장료를 계산하세요.\n- 연간회원권 보유(1): 무료 입장 (할인율 100%)\n- 연간회원이 아닐 때:\n  * 우대 대상(1)이거나 65세 이상 경로: 50% 할인\n  * 13세 미만 어린이: 30% 할인\n  * 그 외 일반 고객: 할인 없음 (0%)\n\n[입력]\n기준요금 나이 우대여부(1/0) 연간회원여부(1/0)\n(예: 40000 10 0 0)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int basePrice = sc.nextInt();\n        int age = sc.nextInt();\n        boolean isSpecial = sc.nextInt() == 1;\n        boolean hasPass = sc.nextInt() == 1;\n\n        double discountRate = hasPass ? 1.0 : ((isSpecial || age >= 65) ? 0.5 : (age < 13 ? 0.3 : 0.0));\n        int finalPrice = basePrice - (int)(basePrice * discountRate);\n\n        System.out.println(\"=== 에버드림 테마파크 티켓 발권기 ===\");\n        System.out.printf(\"기준 요금: %,d원\\n\", basePrice);\n        System.out.printf(\"입장객 나이: %d세\\n\", age);\n        System.out.printf(\"우대 혜택 적용: %s\\n\", isSpecial ? \"적용 (우대 대상)\" : \"미적용\");\n        System.out.printf(\"연간 회원 여부: %s\\n\", hasPass ? \"연간회원 (무료)\" : \"일반 고객\");\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"최종 결제 금액: %,d원 (할인율: %.0f%%)\\n\", finalPrice, discountRate * 100);\n    }\n}\n",
        "sample_input": "40000 10 0 0",
        "sample_output": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 40,000원\n입장객 나이: 10세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 28,000원 (할인율: 30%)",
        "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 40,000원\n입장객 나이: 10세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 28,000원 (할인율: 30%)",
        "hint": "1. 4개 입력값을 순서대로 받습니다: 기준요금(int), 나이(int), 우대여부(int), 연간회원여부(int)\n2. 0 또는 1로 주어지는 우대 및 회원 여부를 논리형(boolean)으로 변환하면 가독성이 좋습니다:\n   boolean isSpecial = sc.nextInt() == 1;\n   boolean hasPass = sc.nextInt() == 1;\n3. 조건문(if)을 아직 배우지 않은 1일차이므로 삼항 연산자 (조건 ? 참 : 거짓)를 중첩하여 할인율을 계산합니다:\n   double discountRate = hasPass ? 1.0 : ((isSpecial || age >= 65) ? 0.5 : (age < 13 ? 0.3 : 0.0));\n4. 최종 금액 = basePrice - (int)(basePrice * discountRate)",
        "testcases": [
            {
                "input": "40000 10 0 0",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 40,000원\n입장객 나이: 10세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 28,000원 (할인율: 30%)",
                "is_hidden": false
            },
            {
                "input": "50000 70 0 0",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 50,000원\n입장객 나이: 70세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 25,000원 (할인율: 50%)",
                "is_hidden": false
            },
            {
                "input": "60000 25 0 1",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 60,000원\n입장객 나이: 25세\n우대 혜택 적용: 미적용\n연간 회원 여부: 연간회원 (무료)\n---------------------------------\r\n최종 결제 금액: 0원 (할인율: 100%)",
                "is_hidden": false
            },
            {
                "input": "45000 30 1 0",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 45,000원\n입장객 나이: 30세\n우대 혜택 적용: 적용 (우대 대상)\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 22,500원 (할인율: 50%)",
                "is_hidden": true
            },
            {
                "input": "55000 28 0 0",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 55,000원\n입장객 나이: 28세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 55,000원 (할인율: 0%)",
                "is_hidden": true
            },
            {
                "input": "30000 12 1 0",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 30,000원\n입장객 나이: 12세\n우대 혜택 적용: 적용 (우대 대상)\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 15,000원 (할인율: 50%)",
                "is_hidden": true
            },
            {
                "input": "40000 65 0 0",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 40,000원\n입장객 나이: 65세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 20,000원 (할인율: 50%)",
                "is_hidden": true
            },
            {
                "input": "50000 13 0 0",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 50,000원\n입장객 나이: 13세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 50,000원 (할인율: 0%)",
                "is_hidden": true
            },
            {
                "input": "70000 64 0 0",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 70,000원\n입장객 나이: 64세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 70,000원 (할인율: 0%)",
                "is_hidden": true
            },
            {
                "input": "80000 75 1 1",
                "expected": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 80,000원\n입장객 나이: 75세\n우대 혜택 적용: 적용 (우대 대상)\n연간 회원 여부: 연간회원 (무료)\n---------------------------------\r\n최종 결제 금액: 0원 (할인율: 100%)",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "40000 10 0 0",
                "output": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 40,000원\n입장객 나이: 10세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 28,000원 (할인율: 30%)"
            },
            {
                "input": "50000 70 0 0",
                "output": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 50,000원\n입장객 나이: 70세\n우대 혜택 적용: 미적용\n연간 회원 여부: 일반 고객\n---------------------------------\r\n최종 결제 금액: 25,000원 (할인율: 50%)"
            },
            {
                "input": "60000 25 0 1",
                "output": "=== 에버드림 테마파크 티켓 발권기 ===\r\n기준 요금: 60,000원\n입장객 나이: 25세\n우대 혜택 적용: 미적용\n연간 회원 여부: 연간회원 (무료)\n---------------------------------\r\n최종 결제 금액: 0원 (할인율: 100%)"
            }
        ]
    },
    {
        "id": "day01_상",
        "day": 1,
        "subject": "Java",
        "difficulty": "상",
        "title": "영화관 관람료 복합 할인 및 3항 연산자 판별기 (MovieTicketPricing)",
        "desc": "기준 요금, 관람자 나이, 조조 할인 여부(1 또는 0), 통신사 제휴 할인 여부(1 또는 0)를 입력받아 조건에 맞는 최종 예매 금액을 계산하세요.\n- 나이 할인: 65세 이상 50%, 19세 미만 30%\n- 조조 할인: 2,000원 차감\n- 통신사 할인: 추가 10% 감면\n\n[입력]\n기준요금, 나이, 조조할인여부(1/0), 통신사할인여부(1/0)가 공백으로 주어집니다.\n(예: 15000 17 1 1)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int basePrice = sc.nextInt();\n        int age = sc.nextInt();\n        boolean isMorning = sc.nextInt() == 1;\n        boolean hasTelecomDiscount = sc.nextInt() == 1;\n\n        double ageDiscountRate = (age >= 65) ? 0.5 : ((age < 19) ? 0.3 : 0.0);\n        int priceAfterAge = basePrice - (int)(basePrice * ageDiscountRate);\n        int priceAfterMorning = isMorning ? (priceAfterAge - 2000) : priceAfterAge;\n        int finalPrice = hasTelecomDiscount ? (int)(priceAfterMorning * 0.9) : priceAfterMorning;\n\n        System.out.println(\"=== CGV 영화 예매 요금 계산서 ===\");\n        System.out.printf(\"기준 요금: %,d원\\n\", basePrice);\n        System.out.printf(\"관람자 나이: %d세 (연령 할인율: %.0f%%)\\n\", age, ageDiscountRate * 100);\n        System.out.printf(\"조조 할인 적용 여부: %s (-2,000원)\\n\", isMorning ? \"적용\" : \"미적용\");\n        System.out.printf(\"통신사 제휴 할인: %s (추가 10%%)\\n\", hasTelecomDiscount ? \"적용\" : \"미적용\");\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"최종 결제 금액: %,d원\\n\", finalPrice);\n    }\n}\n",
        "sample_input": "15000 17 1 1",
        "sample_output": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 15,000원\n관람자 나이: 17세 (연령 할인율: 30%)\n조조 할인 적용 여부: 적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 7,650원",
        "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 15,000원\n관람자 나이: 17세 (연령 할인율: 30%)\n조조 할인 적용 여부: 적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 7,650원",
        "hint": "1. 4개 입력값을 순서대로 받습니다: 기준요금, 나이, 조조할인여부(1/0), 통신사할인여부(1/0)\n2. 1단계 (나이 할인율 판별):\n   double ageDiscountRate = (age >= 65) ? 0.5 : ((age < 19) ? 0.3 : 0.0);\n   int priceAfterAge = basePrice - (int)(basePrice * ageDiscountRate);\n3. 2단계 (조조 2,000원 차감):\n   int priceAfterMorning = isMorning ? (priceAfterAge - 2000) : priceAfterAge;\n4. 3단계 (통신사 제휴 10% 추가 할인):\n   int finalPrice = hasTelecomDiscount ? (int)(priceAfterMorning * 0.9) : priceAfterMorning;",
        "testcases": [
            {
                "input": "15000 17 1 1",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 15,000원\n관람자 나이: 17세 (연령 할인율: 30%)\n조조 할인 적용 여부: 적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 7,650원",
                "is_hidden": false
            },
            {
                "input": "14000 25 0 0",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 14,000원\n관람자 나이: 25세 (연령 할인율: 0%)\n조조 할인 적용 여부: 미적용 (-2,000원)\n통신사 제휴 할인: 미적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 14,000원",
                "is_hidden": false
            },
            {
                "input": "16000 70 0 1",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 16,000원\n관람자 나이: 70세 (연령 할인율: 50%)\n조조 할인 적용 여부: 미적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 7,200원",
                "is_hidden": false
            },
            {
                "input": "15000 18 1 0",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 15,000원\n관람자 나이: 18세 (연령 할인율: 30%)\n조조 할인 적용 여부: 적용 (-2,000원)\n통신사 제휴 할인: 미적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 8,500원",
                "is_hidden": true
            },
            {
                "input": "15000 19 0 1",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 15,000원\n관람자 나이: 19세 (연령 할인율: 0%)\n조조 할인 적용 여부: 미적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 13,500원",
                "is_hidden": true
            },
            {
                "input": "15000 64 1 0",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 15,000원\n관람자 나이: 64세 (연령 할인율: 0%)\n조조 할인 적용 여부: 적용 (-2,000원)\n통신사 제휴 할인: 미적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 13,000원",
                "is_hidden": true
            },
            {
                "input": "15000 65 1 1",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 15,000원\n관람자 나이: 65세 (연령 할인율: 50%)\n조조 할인 적용 여부: 적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 4,950원",
                "is_hidden": true
            },
            {
                "input": "12000 10 0 1",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 12,000원\n관람자 나이: 10세 (연령 할인율: 30%)\n조조 할인 적용 여부: 미적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 7,560원",
                "is_hidden": true
            },
            {
                "input": "18000 35 1 0",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 18,000원\n관람자 나이: 35세 (연령 할인율: 0%)\n조조 할인 적용 여부: 적용 (-2,000원)\n통신사 제휴 할인: 미적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 16,000원",
                "is_hidden": true
            },
            {
                "input": "20000 80 1 1",
                "expected": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 20,000원\n관람자 나이: 80세 (연령 할인율: 50%)\n조조 할인 적용 여부: 적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 7,200원",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "15000 17 1 1",
                "output": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 15,000원\n관람자 나이: 17세 (연령 할인율: 30%)\n조조 할인 적용 여부: 적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 7,650원"
            },
            {
                "input": "14000 25 0 0",
                "output": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 14,000원\n관람자 나이: 25세 (연령 할인율: 0%)\n조조 할인 적용 여부: 미적용 (-2,000원)\n통신사 제휴 할인: 미적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 14,000원"
            },
            {
                "input": "16000 70 0 1",
                "output": "=== CGV 영화 예매 요금 계산서 ===\r\n기준 요금: 16,000원\n관람자 나이: 70세 (연령 할인율: 50%)\n조조 할인 적용 여부: 미적용 (-2,000원)\n통신사 제휴 할인: 적용 (추가 10%)\n---------------------------------\r\n최종 결제 금액: 7,200원"
            }
        ]
    },
    {
        "id": "day01_도전",
        "day": 1,
        "subject": "Java",
        "difficulty": "도전",
        "title": "8비트 서버 인프라 상태 플래그 마스킹 & 가중치 헬스체크 엔진 (ServerStatusMasking)",
        "desc": "클라우드 인프라 관제 시스템에서는 8비트(0~255) 1바이트 정수 코드 하나에 서버의 세부 장애 상태들을 비트 플래그로 압축하여 관리합니다.\n입력받은 8비트 정수 상태 코드에 대해 비트 마스킹(&)을 수행하여 장애 항목을 파악하고, 각 장애별 위험 가중치 점수를 합산하여 시스템 건전성 점수(100점 만점)와 상태 등급을 산출하세요.\n\n[8비트 장애 플래그 정의]\n- Bit 0 (1): CPU 과부하 (위험 감점: -25점)\n- Bit 1 (2): 메모리 고갈 (위험 감점: -25점)\n- Bit 2 (4): 디스크 용량 부족 (위험 감점: -20점)\n- Bit 3 (8): 네트워크 패킷 손실 (위험 감점: -15점)\n- Bit 4 (16): 데이터베이스 락 (위험 감점: -30점)\n- Bit 5 (32): 전원 공급 불안정 (위험 감점: -40점)\n\n[건전성 점수 및 종합 등급 판정]\n- 기본 점수: 100점\n- 최종 건전성 점수 = 100 - (발생한 장애들의 감점 총합). 단, 0점 미만으로 내려가면 0점으로 보정.\n- 종합 상태 등급:\n  * 80점 이상: 정상 (HEALTHY)\n  * 50점 이상 80점 미만: 주의 (WARNING)\n  * 50점 미만: 위험 (CRITICAL)\n\n[치명적 복합 장애 자동 격리 (비트 OR 연산)]\n- 조건: CPU 과부하(1)와 DB 락(16)이 동시에 발생했거나, 또는 전원 불안정(32)이 발생한 경우\n- 조치: 비트 7 (128 / 1 << 7 = 긴급 격리 페일오버 플래그)을 비트 OR(|) 연산으로 켜서 새로운 상태 코드를 생성하고 격리 조치 발령.\n\n[입력]\n첫째 줄에 0 이상 255 이하의 정수 상태 코드가 주어집니다.\n(예: 17)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static final int FLAG_CPU   = 1 << 0; // 1 (감점 25)\n    public static final int FLAG_MEM   = 1 << 1; // 2 (감점 25)\n    public static final int FLAG_DISK  = 1 << 2; // 4 (감점 20)\n    public static final int FLAG_NET   = 1 << 3; // 8 (감점 15)\n    public static final int FLAG_DB    = 1 << 4; // 16 (감점 30)\n    public static final int FLAG_PWR   = 1 << 5; // 32 (감점 40)\n    public static final int FLAG_ISOL  = 1 << 7; // 128 (격리 플래그)\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static final int FLAG_CPU   = 1 << 0; // 1 (감점 25)\n    public static final int FLAG_MEM   = 1 << 1; // 2 (감점 25)\n    public static final int FLAG_DISK  = 1 << 2; // 4 (감점 20)\n    public static final int FLAG_NET   = 1 << 3; // 8 (감점 15)\n    public static final int FLAG_DB    = 1 << 4; // 16 (감점 30)\n    public static final int FLAG_PWR   = 1 << 5; // 32 (감점 40)\n    public static final int FLAG_ISOL  = 1 << 7; // 128 (격리 플래그)\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int statusCode = sc.nextInt();\n\n        boolean isCpu = (statusCode & FLAG_CPU) != 0;\n        boolean isMem = (statusCode & FLAG_MEM) != 0;\n        boolean isDisk = (statusCode & FLAG_DISK) != 0;\n        boolean isNet = (statusCode & FLAG_NET) != 0;\n        boolean isDb = (statusCode & FLAG_DB) != 0;\n        boolean isPwr = (statusCode & FLAG_PWR) != 0;\n\n        int penalty = (isCpu ? 25 : 0)\n                    + (isMem ? 25 : 0)\n                    + (isDisk ? 20 : 0)\n                    + (isNet ? 15 : 0)\n                    + (isDb ? 30 : 0)\n                    + (isPwr ? 40 : 0);\n\n        int healthScore = 100 - penalty;\n        healthScore = (healthScore < 0) ? 0 : healthScore;\n\n        String grade = (healthScore >= 80) ? \"정상 (HEALTHY)\" : ((healthScore >= 50) ? \"주의 (WARNING)\" : \"위험 (CRITICAL)\");\n\n        boolean needsIsolation = (isCpu && isDb) || isPwr;\n        int newStatusCode = needsIsolation ? (statusCode | FLAG_ISOL) : statusCode;\n\n        String binInitial = String.format(\"%8s\", Integer.toBinaryString(statusCode)).replace(' ', '0');\n        String binNew = String.format(\"%8s\", Integer.toBinaryString(newStatusCode)).replace(' ', '0');\n\n        System.out.println(\"=== 클라우드 인프라 8비트 관제 엔진 ===\");\n        System.out.printf(\"초기 상태 코드: %d (2진수: %s)\\n\", statusCode, binInitial);\n        System.out.printf(\"- CPU 과부하 (1): %s\\n\", isCpu ? \"감지 (감점 -25)\" : \"정상\");\n        System.out.printf(\"- 메모리 고갈 (2): %s\\n\", isMem ? \"감지 (감점 -25)\" : \"정상\");\n        System.out.printf(\"- 디스크 부족 (4): %s\\n\", isDisk ? \"감지 (감점 -20)\" : \"정상\");\n        System.out.printf(\"- 네트워크 손실 (8): %s\\n\", isNet ? \"감지 (감점 -15)\" : \"정상\");\n        System.out.printf(\"- DB 락 (16): %s\\n\", isDb ? \"감지 (감점 -30)\" : \"정상\");\n        System.out.printf(\"- 전원 불안정 (32): %s\\n\", isPwr ? \"감지 (감점 -40)\" : \"정상\");\n        System.out.println(\"----------------------------------------\");\n        System.out.printf(\"시스템 건전성 점수: %d점 / 100점\\n\", healthScore);\n        System.out.printf(\"종합 상태 등급: %s\\n\", grade);\n        System.out.printf(\"긴급 페일오버 격리: %s\\n\", needsIsolation ? String.format(\"발령 (신규 코드: %d / %s)\", newStatusCode, binNew) : \"미발령 (정상 유지)\");\n    }\n}\n",
        "sample_input": "17",
        "sample_output": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 17 (2진수: 00010001)\n- CPU 과부하 (1): 감지 (감점 -25)\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 감지 (감점 -30)\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 45점 / 100점\n종합 상태 등급: 위험 (CRITICAL)\n긴급 페일오버 격리: 발령 (신규 코드: 145 / 10010001)",
        "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 17 (2진수: 00010001)\n- CPU 과부하 (1): 감지 (감점 -25)\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 감지 (감점 -30)\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 45점 / 100점\n종합 상태 등급: 위험 (CRITICAL)\n긴급 페일오버 격리: 발령 (신규 코드: 145 / 10010001)",
        "hint": "1. 비트 마스킹: boolean isCpu = (statusCode & FLAG_CPU) != 0; 형태로 각 비트가 켜져있는지 검사합니다.\n2. 가중치 감점: 발생한 장애에 따라 penalty를 누적하고, healthScore = (healthScore < 0) ? 0 : healthScore 형태로 0점 미만 하한선을 보정합니다.\n3. 종합 등급: (healthScore >= 80) ? \"정상 (HEALTHY)\" : ((healthScore >= 50) ? \"주의 (WARNING)\" : \"위험 (CRITICAL)\")\n4. 격리 플래그 셋팅: boolean needsIsolation = (isCpu && isDb) || isPwr; 조건 충족 시 statusCode | FLAG_ISOL 연산으로 비트 7을 켭니다.\n5. 8비트 2진수 서식: String.format(\"%8s\", Integer.toBinaryString(code)).replace(' ', '0') 을 활용하면 00010001 처럼 8자리 2진수 문자열로 예쁘게 출력할 수 있습니다.",
        "testcases": [
            {
                "input": "17",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 17 (2진수: 00010001)\n- CPU 과부하 (1): 감지 (감점 -25)\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 감지 (감점 -30)\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 45점 / 100점\n종합 상태 등급: 위험 (CRITICAL)\n긴급 페일오버 격리: 발령 (신규 코드: 145 / 10010001)",
                "is_hidden": false
            },
            {
                "input": "0",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 0 (2진수: 00000000)\n- CPU 과부하 (1): 정상\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 정상\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 100점 / 100점\n종합 상태 등급: 정상 (HEALTHY)\n긴급 페일오버 격리: 미발령 (정상 유지)",
                "is_hidden": false
            },
            {
                "input": "32",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 32 (2진수: 00100000)\n- CPU 과부하 (1): 정상\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 정상\n- 전원 불안정 (32): 감지 (감점 -40)\n----------------------------------------\r\n시스템 건전성 점수: 60점 / 100점\n종합 상태 등급: 주의 (WARNING)\n긴급 페일오버 격리: 발령 (신규 코드: 160 / 10100000)",
                "is_hidden": false
            },
            {
                "input": "3",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 3 (2진수: 00000011)\n- CPU 과부하 (1): 감지 (감점 -25)\n- 메모리 고갈 (2): 감지 (감점 -25)\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 정상\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 50점 / 100점\n종합 상태 등급: 주의 (WARNING)\n긴급 페일오버 격리: 미발령 (정상 유지)",
                "is_hidden": true
            },
            {
                "input": "12",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 12 (2진수: 00001100)\n- CPU 과부하 (1): 정상\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 감지 (감점 -20)\n- 네트워크 손실 (8): 감지 (감점 -15)\n- DB 락 (16): 정상\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 65점 / 100점\n종합 상태 등급: 주의 (WARNING)\n긴급 페일오버 격리: 미발령 (정상 유지)",
                "is_hidden": true
            },
            {
                "input": "1",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 1 (2진수: 00000001)\n- CPU 과부하 (1): 감지 (감점 -25)\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 정상\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 75점 / 100점\n종합 상태 등급: 주의 (WARNING)\n긴급 페일오버 격리: 미발령 (정상 유지)",
                "is_hidden": true
            },
            {
                "input": "48",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 48 (2진수: 00110000)\n- CPU 과부하 (1): 정상\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 감지 (감점 -30)\n- 전원 불안정 (32): 감지 (감점 -40)\n----------------------------------------\r\n시스템 건전성 점수: 30점 / 100점\n종합 상태 등급: 위험 (CRITICAL)\n긴급 페일오버 격리: 발령 (신규 코드: 176 / 10110000)",
                "is_hidden": true
            },
            {
                "input": "63",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 63 (2진수: 00111111)\n- CPU 과부하 (1): 감지 (감점 -25)\n- 메모리 고갈 (2): 감지 (감점 -25)\n- 디스크 부족 (4): 감지 (감점 -20)\n- 네트워크 손실 (8): 감지 (감점 -15)\n- DB 락 (16): 감지 (감점 -30)\n- 전원 불안정 (32): 감지 (감점 -40)\n----------------------------------------\r\n시스템 건전성 점수: 0점 / 100점\n종합 상태 등급: 위험 (CRITICAL)\n긴급 페일오버 격리: 발령 (신규 코드: 191 / 10111111)",
                "is_hidden": true
            },
            {
                "input": "2",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 2 (2진수: 00000010)\n- CPU 과부하 (1): 정상\n- 메모리 고갈 (2): 감지 (감점 -25)\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 정상\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 75점 / 100점\n종합 상태 등급: 주의 (WARNING)\n긴급 페일오버 격리: 미발령 (정상 유지)",
                "is_hidden": true
            },
            {
                "input": "19",
                "expected": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 19 (2진수: 00010011)\n- CPU 과부하 (1): 감지 (감점 -25)\n- 메모리 고갈 (2): 감지 (감점 -25)\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 감지 (감점 -30)\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 20점 / 100점\n종합 상태 등급: 위험 (CRITICAL)\n긴급 페일오버 격리: 발령 (신규 코드: 147 / 10010011)",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "17",
                "output": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 17 (2진수: 00010001)\n- CPU 과부하 (1): 감지 (감점 -25)\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 감지 (감점 -30)\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 45점 / 100점\n종합 상태 등급: 위험 (CRITICAL)\n긴급 페일오버 격리: 발령 (신규 코드: 145 / 10010001)"
            },
            {
                "input": "0",
                "output": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 0 (2진수: 00000000)\n- CPU 과부하 (1): 정상\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 정상\n- 전원 불안정 (32): 정상\n----------------------------------------\r\n시스템 건전성 점수: 100점 / 100점\n종합 상태 등급: 정상 (HEALTHY)\n긴급 페일오버 격리: 미발령 (정상 유지)"
            },
            {
                "input": "32",
                "output": "=== 클라우드 인프라 8비트 관제 엔진 ===\r\n초기 상태 코드: 32 (2진수: 00100000)\n- CPU 과부하 (1): 정상\n- 메모리 고갈 (2): 정상\n- 디스크 부족 (4): 정상\n- 네트워크 손실 (8): 정상\n- DB 락 (16): 정상\n- 전원 불안정 (32): 감지 (감점 -40)\n----------------------------------------\r\n시스템 건전성 점수: 60점 / 100점\n종합 상태 등급: 주의 (WARNING)\n긴급 페일오버 격리: 발령 (신규 코드: 160 / 10100000)"
            }
        ]
    },
    {
        "id": "day02_하1",
        "day": 2,
        "subject": "Java",
        "difficulty": "하",
        "title": "학생 시험 성적 등급 및 장학금 판별기 (GradeEvaluator)",
        "desc": "학생의 시험 점수(0~100)를 입력받아 90점 이상이면 A, 80점 이상이면 B, 70점 이상이면 C, 60점 이상이면 D, 그 미만은 F를 부여하세요.\n추가로 95점 이상인 경우 '전액 장학금 대상', 90점 이상인 경우 '반액 장학금 대상', 그 외는 '장학금 미대상'을 출력하세요.\n(60점 이상은 '합격', 미만은 '불합격' 판정)\n\n[입력]\n첫째 줄에 학생의 점수(0~100 사이 정수)가 주어집니다.\n(예: 96)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int score = sc.nextInt();\n\n        char grade;\n        if (score >= 90) grade = 'A';\n        else if (score >= 80) grade = 'B';\n        else if (score >= 70) grade = 'C';\n        else if (score >= 60) grade = 'D';\n        else grade = 'F';\n\n        String passStatus = (score >= 60) ? \"합격\" : \"불합격\";\n\n        String scholarship;\n        if (score >= 95) scholarship = \"전액 장학금 대상\";\n        else if (score >= 90) scholarship = \"반액 장학금 대상\";\n        else scholarship = \"장학금 미대상\";\n\n        System.out.println(\"=== 성적 평가 결과표 ===\");\n        System.out.printf(\"취득 점수: %d점\\n\", score);\n        System.out.printf(\"학점 등급: %c등급 (%s)\\n\", grade, passStatus);\n        System.out.printf(\"장학 혜택: %s\\n\", scholarship);\n    }\n}",
        "sample_input": "96",
        "sample_output": "=== 성적 평가 결과표 ===\n취득 점수: 96점\n학점 등급: A등급 (합격)\n장학 혜택: 전액 장학금 대상",
        "expected": "=== 성적 평가 결과표 ===\n취득 점수: 96점\n학점 등급: A등급 (합격)\n장학 혜택: 전액 장학금 대상",
        "hint": "1. int score = sc.nextInt(); 로 점수를 읽습니다.\n2. if-else if-else 구조를 사용하여 90, 80, 70, 60점 기준으로 학점 등급을 분류합니다.\n3. 장학금 여부도 95점 이상, 90점 이상 여부에 따라 if-else if로 분기하여 문자열 변수에 담아 출력합니다."
    },
    {
        "id": "day02_하2",
        "day": 2,
        "subject": "Java",
        "difficulty": "하",
        "title": "자판기 음료 주문 및 잔돈 반환기 (VendingMachine)",
        "desc": "투입 금액과 선택할 음료 메뉴 번호(1: 코카콜라 1200원, 2: 칠성사이다 1100원, 3: 레쓰비 800원, 4: 삼다수 600원)를 입력받아 음료 배출 및 잔돈 반환 로직을 switch-case 문으로 구현하세요.\n\n[입력]\n투입 금액과 메뉴 번호가 공백으로 주어집니다.\n(예: 1500 2)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int balance = sc.nextInt();\n        int menuChoice = sc.nextInt();\n\n        String menuName;\n        int price;\n\n        switch (menuChoice) {\n            case 1: menuName = \"코카콜라\"; price = 1200; break;\n            case 2: menuName = \"칠성사이다\"; price = 1100; break;\n            case 3: menuName = \"레쓰비 캔커피\"; price = 800; break;\n            case 4: menuName = \"삼다수 생수\"; price = 600; break;\n            default: menuName = \"알 수 없는 메뉴\"; price = 0; break;\n        }\n\n        System.out.println(\"=== 스마트 음료 자판기 ===\");\n        System.out.printf(\"투입 금액: %,d원\\n\", balance);\n        System.out.printf(\"선택 메뉴: %s (가격: %,d원)\\n\", menuName, price);\n\n        if (price == 0) {\n            System.out.println(\"오류: 올바른 메뉴 번호를 입력해주세요.\");\n        } else if (balance >= price) {\n            int change = balance - price;\n            System.out.printf(\">> [%s] 음료가 나왔습니다! (잔돈: %,d원 반환)\\n\", menuName, change);\n        } else {\n            int shortage = price - balance;\n            System.out.printf(\">> 잔액이 %,d원 부족하여 구매할 수 없습니다.\\n\", shortage);\n        }\n    }\n}",
        "sample_input": "1500 2",
        "sample_output": "=== 스마트 음료 자판기 ===\n투입 금액: 1,500원\n선택 메뉴: 칠성사이다 (가격: 1,100원)\n>> [칠성사이다] 음료가 나왔습니다! (잔돈: 400원 반환)",
        "expected": "=== 스마트 음료 자판기 ===\n투입 금액: 1,500원\n선택 메뉴: 칠성사이다 (가격: 1,100원)\n>> [칠성사이다] 음료가 나왔습니다! (잔돈: 400원 반환)",
        "hint": "1. switch(menuChoice) { case 1: ... break; } 문으로 메뉴별 이름과 가격을 결정합니다.\n2. 잔액이 음료 가격 이상인지 if-else로 검사하여 잔돈을 계산하거나 부족액을 출력합니다."
    },
    {
        "id": "day02_중1",
        "day": 2,
        "subject": "Java",
        "difficulty": "중",
        "title": "N단 구구단 및 직각 삼각형 별 찍기 (PatternPrinter)",
        "desc": "정수 N(1~9)을 입력받아, 먼저 N단 구구단을 1부터 9까지 곱한 결과를 출력하고, 이어서 N행의 직각 삼각형 별(*) 패턴을 출력하세요.\n(i번째 줄에는 i개의 별이 출력됩니다.)\n\n[입력]\n정수 N 하나가 주어집니다.\n(예: 4)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        System.out.printf(\"=== %d단 구구단 ===\\n\", n);\n        for (int i = 1; i <= 9; i++) {\n            System.out.printf(\"%d x %d = %d\\n\", n, i, n * i);\n        }\n\n        System.out.println(\"=== 직각 삼각형 별 패턴 ===\");\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n    }\n}",
        "sample_input": "4",
        "sample_output": "=== 4단 구구단 ===\n4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36\n=== 직각 삼각형 별 패턴 ===\n*\n**\n***\n****",
        "expected": "=== 4단 구구단 ===\n4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36\n=== 직각 삼각형 별 패턴 ===\n*\n**\n***\n****",
        "hint": "1. 구구단은 for (int i = 1; i <= 9; i++) 단일 루프로 출력합니다.\n2. 별 찍기는 이중 for문을 사용하여 외부 루프는 행(1~N), 내부 루프는 열(1~i)만큼 '*'을 print한 뒤 줄바꿈 println()을 수행합니다."
    },
    {
        "id": "day02_중2",
        "day": 2,
        "subject": "Java",
        "difficulty": "중",
        "title": "숫자 맞추기 Up-Down 게임 시뮬레이터 (UpDownGame)",
        "desc": "목표 정답 숫자와 시도 횟수 K, 그리고 K개의 추측 숫자를 순서대로 입력받아 Up-Down 게임 판정을 진행하세요.\n- 추측값이 목표값보다 크면: 'DOWN! 더 작은 수를 입력하세요.'\n- 추측값이 목표값보다 작으면: 'UP! 더 큰 수를 입력하세요.'\n- 정답을 맞추면: '정답입니다! X회 만에 맞추셨습니다! 🎉' 출력 후 즉시 종료(break)\n- K번 시도 내에 맞추지 못하면 마지막에 '아쉽습니다. 정답은 X였습니다.' 출력\n\n[입력]\n첫째 줄에 정답 숫자(1~100)와 총 시도 횟수 K가 공백으로 주어집니다.\n둘째 줄에 K개의 추측 숫자가 공백으로 주어집니다.\n(예:\n50 4\n30 70 45 50)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int target = sc.nextInt();\n        int attempts = sc.nextInt();\n\n        boolean isCorrect = false;\n        int count = 0;\n\n        for (int i = 1; i <= attempts; i++) {\n            int guess = sc.nextInt();\n            count = i;\n\n            if (guess == target) {\n                System.out.printf(\"[%d회차] 추측: %d -> 정답입니다! %d회 만에 맞추셨습니다!\\n\", i, guess, count);\n                isCorrect = true;\n                break;\n            } else if (guess < target) {\n                System.out.printf(\"[%d회차] 추측: %d -> UP! 더 큰 수를 입력하세요.\\n\", i, guess);\n            } else {\n                System.out.printf(\"[%d회차] 추측: %d -> DOWN! 더 작은 수를 입력하세요.\\n\", i, guess);\n            }\n        }\n\n        if (!isCorrect) {\n            System.out.printf(\"아쉽습니다. 제한 횟수(%d회) 초과로 실패! 정답은 %d였습니다.\\n\", attempts, target);\n        }\n    }\n}",
        "sample_input": "50 4\n30 70 45 50",
        "sample_output": "[1회차] 추측: 30 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 70 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 45 -> UP! 더 큰 수를 입력하세요.\n[4회차] 추측: 50 -> 정답입니다! 4회 만에 맞추셨습니다!",
        "expected": "[1회차] 추측: 30 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 70 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 45 -> UP! 더 큰 수를 입력하세요.\n[4회차] 추측: 50 -> 정답입니다! 4회 만에 맞추셨습니다!",
        "hint": "1. int target = sc.nextInt(); int attempts = sc.nextInt(); 로 게임 설정을 읽습니다.\n2. for (int i = 1; i <= attempts; i++) 루프에서 sc.nextInt()로 추측값을 하나씩 읽고 비교합니다.\n3. 정답을 맞추면 `break` 키워드로 즉시 루프를 탈출합니다."
    },
    {
        "id": "day02_상",
        "day": 2,
        "subject": "Java",
        "difficulty": "상",
        "title": "369 게임 박수 횟수 계산기 (ThreeSixNineGame)",
        "desc": "정수 N(1~100)을 입력받아 1부터 N까지의 369 게임을 시뮬레이션하세요.\n- 숫자에 3, 6, 9가 포함되어 있다면 포함된 개수만큼 '짝'을 출력합니다. (예: 33은 '짝짝')\n- 3, 6, 9가 포함되지 않은 숫자는 숫자 그대로 출력합니다.\n- 출력은 공백으로 구분하며, 마지막 줄에 1부터 N까지 친 총 박수 횟수를 출력하세요.\n\n[입력]\n끝 숫자 N이 주어집니다.\n(예: 35)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        int totalClaps = 0;\n        StringBuilder sb = new StringBuilder();\n\n        for (int i = 1; i <= n; i++) {\n            int temp = i;\n            int clapCount = 0;\n\n            while (temp > 0) {\n                int digit = temp % 10;\n                if (digit == 3 || digit == 6 || digit == 9) {\n                    clapCount++;\n                }\n                temp /= 10;\n            }\n\n            if (clapCount > 0) {\n                totalClaps += clapCount;\n                for (int c = 0; c < clapCount; c++) {\n                    sb.append(\"짝\");\n                }\n            } else {\n                sb.append(i);\n            }\n\n            if (i < n) sb.append(\" \");\n        }\n\n        System.out.println(\"=== 369 게임 진행 결과 ===\");\n        System.out.println(sb.toString());\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"1부터 %d까지 총 박수 횟수: %d회\\n\", n, totalClaps);\n    }\n}",
        "sample_input": "35",
        "sample_output": "=== 369 게임 진행 결과 ===\n1 2 짝 4 5 짝 7 8 짝 10 11 12 짝 14 15 짝 17 18 짝 20 21 22 짝 24 25 짝 27 28 짝 짝 짝 짝 짝짝 짝 짝\n---------------------------------\n1부터 35까지 총 박수 횟수: 16회",
        "expected": "=== 369 게임 진행 결과 ===\n1 2 짝 4 5 짝 7 8 짝 10 11 12 짝 14 15 짝 17 18 짝 20 21 22 짝 24 25 짝 27 28 짝 짝 짝 짝 짝짝 짝 짝\n---------------------------------\n1부터 35까지 총 박수 횟수: 16회",
        "hint": "1. 1부터 N까지 for문으로 순회합니다.\n2. 각 숫자 `temp`를 `while (temp > 0)`로 자리수(`temp % 10`)마다 3, 6, 9인지 확인하고 `temp /= 10`으로 줄여나갑니다.\n3. `clapCount`가 1 이상이면 박수 개수만큼 '짝'을 이어붙이고 `totalClaps`에 합산합니다."
    },
    {
        "id": "day02_도전",
        "day": 2,
        "subject": "Java",
        "difficulty": "도전",
        "title": "소수(Prime Number) 판별 및 N번째 소수 탐색기 (PrimeFinder)",
        "desc": "양의 정수 N(1~1,000)을 입력받아, 2부터 시작하여 N번째 소수(Prime Number)를 찾아내고, 해당 소수까지 도달하는 동안 거쳐간 소수의 총 개수와 합성수(1 제외 소수가 아닌 수)의 총 개수를 집계하세요.\n(효율적인 탐색을 위해 2부터 제곱근 sqrt(num)까지만 나누어 떨어지는지 검사하는 최적화 알고리즘을 적용하세요.)\n\n[입력]\n찾고자 하는 소수의 순번 N\n(예: 10)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int targetN = sc.nextInt();\n\n        int primeCount = 0;\n        int compositeCount = 0;\n        int currentNum = 2;\n        int lastPrime = 2;\n\n        while (primeCount < targetN) {\n            boolean isPrime = true;\n            for (int i = 2; i * i <= currentNum; i++) {\n                if (currentNum % i == 0) {\n                    isPrime = false;\n                    break;\n                }\n            }\n\n            if (isPrime) {\n                primeCount++;\n                lastPrime = currentNum;\n            } else {\n                compositeCount++;\n            }\n\n            if (primeCount == targetN) break;\n            currentNum++;\n        }\n\n        System.out.println(\"=== N번째 소수 탐색 시뮬레이터 ===\");\n        System.out.printf(\"탐색 목표: %d번째 소수\\n\", targetN);\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"%d번째 소수: %d\\n\", targetN, lastPrime);\n        System.out.printf(\"2부터 %d까지 소수 개수: %d개\\n\", lastPrime, primeCount);\n        System.out.printf(\"2부터 %d까지 합성수 개수: %d개\\n\", lastPrime, compositeCount);\n    }\n}",
        "sample_input": "10",
        "sample_output": "=== N번째 소수 탐색 시뮬레이터 ===\n탐색 목표: 10번째 소수\n---------------------------------\n10번째 소수: 29\n2부터 29까지 소수 개수: 10개\n2부터 29까지 합성수 개수: 18개",
        "expected": "=== N번째 소수 탐색 시뮬레이터 ===\n탐색 목표: 10번째 소수\n---------------------------------\n10번째 소수: 29\n2부터 29까지 소수 개수: 10개\n2부터 29까지 합성수 개수: 18개",
        "hint": "1. 어떤 수 k가 소수인지 검사할 때, 2부터 k-1까지 모두 나눌 필요 없이 `i * i <= k` 까지만 나누어 떨어지는지 검사하면 시간 복잡도를 O(√N)으로 획기적으로 줄일 수 있습니다.\n2. while문으로 `primeCount < targetN`인 동안 순차 탐색하며 카운터를 갱신합니다."
    },
    {
        "id": "day03_하1",
        "day": 3,
        "subject": "Java",
        "difficulty": "하",
        "title": "정수 배열 최소/최대/평균 통계 계산기 (ArrayStatistics)",
        "desc": "정수 N(3~20)과 N개의 정수를 입력받아 1차원 배열에 저장한 후, 원소들의 총합, 평균(소수점 둘째 자리), 최댓값, 최솟값을 계산하여 출력하세요.\n\n[입력]\n첫째 줄에 정수의 개수 N이 주어집니다.\n둘째 줄에 N개의 정수가 공백으로 주어집니다.\n(예:\n5\n12 85 43 90 27)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        int sum = 0;\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n            sum += arr[i];\n        }\n\n        int max = arr[0];\n        int min = arr[0];\n        for (int i = 1; i < n; i++) {\n            if (arr[i] > max) max = arr[i];\n            if (arr[i] < min) min = arr[i];\n        }\n\n        double avg = (double) sum / n;\n\n        System.out.println(\"=== 배열 기초 통계 분석표 ===\");\n        System.out.printf(\"원소 개수: %d개\\n\", n);\n        System.out.printf(\"합계: %d\\n\", sum);\n        System.out.printf(\"평균: %.2f\\n\", avg);\n        System.out.printf(\"최댓값: %d\\n\", max);\n        System.out.printf(\"최솟값: %d\\n\", min);\n    }\n}",
        "sample_input": "5\n12 85 43 90 27",
        "sample_output": "=== 배열 기초 통계 분석표 ===\n원소 개수: 5개\n합계: 257\n평균: 51.40\n최댓값: 90\n최솟값: 12",
        "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 5개\n합계: 257\n평균: 51.40\n최댓값: 90\n최솟값: 12",
        "hint": "1. int[] arr = new int[n]; 로 배열을 생성하고 for문으로 입력을 채웁니다.\n2. sum 변수에 누적하고, max와 min은 arr[0]으로 초기화한 뒤 배열을 순회하며 갱신합니다.\n3. 평균은 (double) sum / n 형변환 후 %.2f 로 서식 출력합니다."
    },
    {
        "id": "day03_하2",
        "day": 3,
        "subject": "Java",
        "difficulty": "하",
        "title": "학생 점수 역순 출력 및 합격자 수 (ReverseScoreFilter)",
        "desc": "학생 수 N과 N명의 점수, 그리고 기준 커트라인 점수 C를 입력받아 배열에 저장하세요.\n입력된 점수들을 역순(마지막 입력부터 첫 번째 입력 순서)으로 공백으로 구분하여 출력하고, 기준점수 C 이상을 득점한 합격자 수를 계산하여 출력하세요.\n\n[입력]\n첫째 줄에 학생 수 N(1~20)이 주어집니다.\n둘째 줄에 N개의 점수가 공백으로 주어집니다.\n셋째 줄에 기준 점수 C가 주어집니다.\n(예:\n5\n70 85 60 95 80\n75)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] scores = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            scores[i] = sc.nextInt();\n        }\n\n        int cutoff = sc.nextInt();\n        int passCount = 0;\n\n        StringBuilder sb = new StringBuilder();\n        for (int i = n - 1; i >= 0; i--) {\n            sb.append(scores[i]);\n            if (i > 0) sb.append(\" \");\n            if (scores[i] >= cutoff) passCount++;\n        }\n\n        System.out.println(\"=== 점수 역순 조회 및 합격 판정 ===\");\n        System.out.println(\"역순 점수: \" + sb.toString());\n        System.out.printf(\"기준 점수: %d점 이상\\n\", cutoff);\n        System.out.printf(\"합격자 수: %d명 (총 %d명 중)\\n\", passCount, n);\n    }\n}",
        "sample_input": "5\n70 85 60 95 80\n75",
        "sample_output": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 80 95 60 85 70\n기준 점수: 75점 이상\n합격자 수: 3명 (총 5명 중)",
        "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 80 95 60 85 70\n기준 점수: 75점 이상\n합격자 수: 3명 (총 5명 중)",
        "hint": "1. int[] scores = new int[n]; 에 점수를 입력받습니다.\n2. 역순 순회는 `for (int i = n - 1; i >= 0; i--)` 로 인덱스를 줄여가며 출력합니다.\n3. 순회하면서 `scores[i] >= cutoff` 인 경우 `passCount++` 합니다."
    },
    {
        "id": "day03_중1",
        "day": 3,
        "subject": "Java",
        "difficulty": "중",
        "title": "편의점 주간 요일별 매출 및 목표 달성 분석기 (WeeklySalesAnalyzer)",
        "desc": "월요일부터 일요일까지 7일간의 편의점 일일 매출액을 입력받아 배열에 저장하세요.\n- 요일 이름: 월, 화, 수, 목, 금, 토, 일\n- 주간 총매출, 일평균 매출(정수 단위 반올림), 최고 매출을 기록한 요일과 매출액, 평균 매출 이상을 기록한 일수를 순서대로 출력하세요.\n\n[입력]\n7개의 정수가 공백으로 주어집니다.\n(예: 850000 920000 780000 890000 1200000 1450000 1300000)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] days = {\"월요일\", \"화요일\", \"수요일\", \"목요일\", \"금요일\", \"토요일\", \"일요일\"};\n        int[] sales = new int[7];\n\n        int total = 0;\n        int maxIdx = 0;\n\n        for (int i = 0; i < 7; i++) {\n            sales[i] = sc.nextInt();\n            total += sales[i];\n            if (sales[i] > sales[maxIdx]) {\n                maxIdx = i;\n            }\n        }\n\n        int avg = (int) Math.round((double) total / 7);\n\n        int aboveAvgCount = 0;\n        for (int s : sales) {\n            if (s >= avg) aboveAvgCount++;\n        }\n\n        System.out.println(\"=== 주간 매출 정밀 분석표 ===\");\n        System.out.printf(\"주간 총매출: %,d원\\n\", total);\n        System.out.printf(\"일평균 매출: %,d원\\n\", avg);\n        System.out.printf(\"최고 매출 요일: %s (%,d원)\\n\", days[maxIdx], sales[maxIdx]);\n        System.out.printf(\"평균 이상 달성 일수: %d일\\n\", aboveAvgCount);\n    }\n}",
        "sample_input": "850000 920000 780000 890000 1200000 1450000 1300000",
        "sample_output": "=== 주간 매출 정밀 분석표 ===\n주간 총매출: 7,390,000원\n일평균 매출: 1,055,714원\n최고 매출 요일: 토요일 (1,450,000원)\n평균 이상 달성 일수: 3일",
        "expected": "=== 주간 매출 정밀 분석표 ===\n주간 총매출: 7,390,000원\n일평균 매출: 1,055,714원\n최고 매출 요일: 토요일 (1,450,000원)\n평균 이상 달성 일수: 3일",
        "hint": "1. `String[] days = {\"월요일\", ...};` 요일명 배열을 선언하고 인덱스를 매핑합니다.\n2. 매출 최대치 갱신 시 `maxIdx = i;`로 최대 매출이 발생한 요일 인덱스를 함께 기억합니다."
    },
    {
        "id": "day03_중2",
        "day": 3,
        "subject": "Java",
        "difficulty": "중",
        "title": "2차원 행렬(3x3) 행별/열별 합계 계산기 (MatrixRowColSum)",
        "desc": "3행 3열의 2차원 정수 배열에 들어갈 9개의 정수를 행 우선(row-major) 순서로 입력받아 2차원 배열에 저장하세요.\n각 행의 합계(1행, 2행, 3행)와 각 열의 합계(1열, 2열, 3열), 그리고 행렬 전체 총합을 서식에 맞게 출력하세요.\n\n[입력]\n9개의 정수가 공백 또는 줄바꿈으로 주어집니다.\n(예:\n1 2 3\n4 5 6\n7 8 9)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[][] matrix = new int[3][3];\n\n        int totalSum = 0;\n        int[] rowSum = new int[3];\n        int[] colSum = new int[3];\n\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                matrix[i][j] = sc.nextInt();\n                totalSum += matrix[i][j];\n                rowSum[i] += matrix[i][j];\n                colSum[j] += matrix[i][j];\n            }\n        }\n\n        System.out.println(\"=== 3x3 행렬 집계표 ===\");\n        for (int i = 0; i < 3; i++) {\n            System.out.printf(\"%d행 합계: %d\\n\", i + 1, rowSum[i]);\n        }\n        System.out.println(\"---------------------------------\");\n        for (int j = 0; j < 3; j++) {\n            System.out.printf(\"%d열 합계: %d\\n\", j + 1, colSum[j]);\n        }\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"행렬 전체 총합: %d\\n\", totalSum);\n    }\n}",
        "sample_input": "1 2 3\n4 5 6\n7 8 9",
        "sample_output": "=== 3x3 행렬 집계표 ===\n1행 합계: 6\n2행 합계: 15\n3행 합계: 24\n---------------------------------\n1열 합계: 12\n2열 합계: 15\n3열 합계: 18\n---------------------------------\n행렬 전체 총합: 45",
        "expected": "=== 3x3 행렬 집계표 ===\n1행 합계: 6\n2행 합계: 15\n3행 합계: 24\n---------------------------------\n1열 합계: 12\n2열 합계: 15\n3열 합계: 18\n---------------------------------\n행렬 전체 총합: 45",
        "hint": "1. `int[][] matrix = new int[3][3];` 이중 for문으로 값을 읽습니다.\n2. `rowSum[i] += val;` 와 `colSum[j] += val;` 로 행과 열의 누적합을 동시에 계산할 수 있습니다."
    },
    {
        "id": "day03_상",
        "day": 3,
        "subject": "Java",
        "difficulty": "상",
        "title": "좌석 예약 현황판 및 연속 좌석 탐색기 (CinemaSeatManager)",
        "desc": "영화관 4행 5열(총 20석)의 좌석 상태(1: 예약됨, 0: 빈 좌석)와 예약 희망 인원 수 K(1~4)를 입력받으세요.\n- 전체 빈 좌석(0)의 총 개수를 계산하세요.\n- K명의 관람객이 한 행에서 연속으로 나란히 앉을 수 있는 행(Row) 번호(1행~4행)를 찾아 출력하세요.\n- 가능한 행이 여러 개이면 쉼표로 연결하여 출력하고, 가능한 행이 없으면 '예약 불가'를 출력하세요.\n\n[입력]\n첫 4개 줄에 각 행의 5개 좌석 상태(0 또는 1)가 공백으로 주어집니다.\n다섯째 줄에 예약 희망 인원 수 K가 주어집니다.\n(예:\n0 1 0 0 0\n1 1 1 0 1\n0 0 0 0 1\n1 0 1 0 1\n3)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[][] seats = new int[4][5];\n        int totalEmpty = 0;\n\n        for (int i = 0; i < 4; i++) {\n            for (int j = 0; j < 5; j++) {\n                seats[i][j] = sc.nextInt();\n                if (seats[i][j] == 0) totalEmpty++;\n            }\n        }\n\n        int k = sc.nextInt();\n        ArrayList<Integer> validRows = new ArrayList<>();\n\n        for (int i = 0; i < 4; i++) {\n            int consecutive = 0;\n            boolean found = false;\n            for (int j = 0; j < 5; j++) {\n                if (seats[i][j] == 0) {\n                    consecutive++;\n                    if (consecutive >= k) {\n                        found = true;\n                        break;\n                    }\n                } else {\n                    consecutive = 0;\n                }\n            }\n            if (found) {\n                validRows.add(i + 1);\n            }\n        }\n\n        System.out.println(\"=== CGV 좌석 배정 분석 보고서 ===\");\n        System.out.printf(\"총 좌석 수: 20석 (빈 좌석: %d석, 예약됨: %d석)\\n\", totalEmpty, 20 - totalEmpty);\n        System.out.printf(\"예약 희망 인원: %d명\\n\", k);\n        System.out.println(\"---------------------------------\");\n        if (validRows.isEmpty()) {\n            System.out.println(\"연속 좌석 예약 가능 행: 예약 불가\");\n        } else {\n            StringBuilder sb = new StringBuilder();\n            for (int idx = 0; idx < validRows.size(); idx++) {\n                sb.append(validRows.get(idx)).append(\"행\");\n                if (idx < validRows.size() - 1) sb.append(\", \");\n            }\n            System.out.printf(\"연속 좌석 예약 가능 행: %s\\n\", sb.toString());\n        }\n    }\n}",
        "sample_input": "0 1 0 0 0\n1 1 1 0 1\n0 0 0 0 1\n1 0 1 0 1\n3",
        "sample_output": "=== CGV 좌석 배정 분석 보고서 ===\n총 좌석 수: 20석 (빈 좌석: 11석, 예약됨: 9석)\n예약 희망 인원: 3명\n---------------------------------\n연속 좌석 예약 가능 행: 1행, 3행",
        "expected": "=== CGV 좌석 배정 분석 보고서 ===\n총 좌석 수: 20석 (빈 좌석: 11석, 예약됨: 9석)\n예약 희망 인원: 3명\n---------------------------------\n연속 좌석 예약 가능 행: 1행, 3행",
        "hint": "1. 4x5 2차원 배열을 순회하며 빈 좌석(0)의 개수를 셉니다.\n2. 각 행별로 연속된 0의 개수(`consecutive`)를 세다가 1을 만나면 0으로 리셋합니다.\n3. `consecutive >= k`가 되는 행을 리스트에 담아 서식에 맞춰 출력합니다."
    },
    {
        "id": "day03_도전",
        "day": 3,
        "subject": "Java",
        "difficulty": "도전",
        "title": "N x N 달팽이(소용돌이) 배열 채우기 및 대각선 합계 (SpiralMatrix)",
        "desc": "홀수 N(3, 5, 7 중 하나)을 입력받아, N x N 크기의 2차원 배열에 1부터 N^2까지의 숫자를 시계 방향 소용돌이(우 -> 하 -> 좌 -> 상) 형태로 채워 넣으세요.\n- 채워진 2차원 배열을 서식에 맞게 출력하세요.\n- 중심(Center) 좌표(1부터 시작하는 행, 열)의 원소 값과 주 대각선(X자 대각선)에 위치한 모든 원소들의 총합을 계산하여 출력하세요.\n\n[입력]\n홀수 N (3, 5, 7)\n(예: 5)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] matrix = new int[n][n];\n\n        // 우, 하, 좌, 상 방향 벡터\n        int[] dr = {0, 1, 0, -1};\n        int[] dc = {1, 0, -1, 0};\n\n        int r = 0, c = 0, dir = 0;\n        for (int val = 1; val <= n * n; val++) {\n            matrix[r][c] = val;\n            int nr = r + dr[dir];\n            int nc = c + dc[dir];\n\n            if (nr < 0 || nr >= n || nc < 0 || nc >= n || matrix[nr][nc] != 0) {\n                dir = (dir + 1) % 4;\n                nr = r + dr[dir];\n                nc = c + dc[dir];\n            }\n            r = nr;\n            c = nc;\n        }\n\n        System.out.printf(\"=== %dx%d 달팽이 소용돌이 배열 ===\\n\", n, n);\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.printf(\"%2d\", matrix[i][j]);\n                if (j < n - 1) System.out.print(\" \");\n            }\n            System.out.println();\n        }\n\n        int centerR = n / 2;\n        int centerC = n / 2;\n        int centerVal = matrix[centerR][centerC];\n\n        int diagonalSum = 0;\n        for (int i = 0; i < n; i++) {\n            diagonalSum += matrix[i][i];\n            if (i != n - 1 - i) {\n                diagonalSum += matrix[i][n - 1 - i];\n            }\n        }\n\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"중심 좌표 (%d행 %d열) 원소: %d\\n\", centerR + 1, centerC + 1, centerVal);\n        System.out.printf(\"대각선(X자) 원소 합계: %d\\n\", diagonalSum);\n    }\n}",
        "sample_input": "5",
        "sample_output": "=== 5x5 달팽이 소용돌이 배열 ===\n 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9\n---------------------------------\n중심 좌표 (3행 3열) 원소: 25\n대각선(X자) 원소 합계: 133",
        "expected": "=== 5x5 달팽이 소용돌이 배열 ===\n 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9\n---------------------------------\n중심 좌표 (3행 3열) 원소: 25\n대각선(X자) 원소 합계: 133",
        "hint": "1. 방향 벡터 `dr = {0, 1, 0, -1}`, `dc = {1, 0, -1, 0}`를 선언합니다.\n2. 다음 위치가 배열 범위를 벗어나거나 이미 숫자가 채워진 경우 `dir = (dir + 1) % 4`로 방향을 90도 회전합니다.\n3. X자 대각선 합 계산 시 중심 원소가 두 번 더해지지 않도록 중복 처리를 주의합니다."
    },
    {
        "id": "day04_하1",
        "day": 4,
        "subject": "Java",
        "difficulty": "하",
        "title": "은행 계좌 입출금 및 잔액 관리 클래스 (AccountManager)",
        "desc": "예금주 이름, 계좌번호, 초기 잔액, 입금액, 출금액을 입력받아 Account 클래스의 객체를 생성하고 입금과 출금(잔액 검증 포함)을 수행한 뒤 최종 상태를 출력하세요.\n\n[입력]\n예금주 계좌번호 초기잔액 입금액 출금액\n(예: 홍길동 110-123-456 10000 5000 8000)",
        "template": "import java.util.Scanner;\n\nclass Account {\n    // 필드 및 메서드를 작성하세요\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nclass Account {\n    String owner;\n    String accountNo;\n    int balance;\n\n    public Account(String owner, String accountNo, int balance) {\n        this.owner = owner;\n        this.accountNo = accountNo;\n        this.balance = balance;\n    }\n\n    public void deposit(int amount) {\n        this.balance += amount;\n        System.out.printf(\"입금 성공: %,d원 (현재 잔액: %,d원)\\n\", amount, this.balance);\n    }\n\n    public boolean withdraw(int amount) {\n        if (amount > this.balance) {\n            System.out.println(\"출금 실패: 잔액이 부족합니다.\");\n            return false;\n        }\n        this.balance -= amount;\n        System.out.printf(\"출금 성공: %,d원 (현재 잔액: %,d원)\\n\", amount, this.balance);\n        return true;\n    }\n\n    public void printInfo() {\n        System.out.printf(\"계좌번호: %s | 예금주: %s | 최종 잔액: %,d원\\n\", accountNo, owner, balance);\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String owner = sc.next();\n        String accountNo = sc.next();\n        int initialBalance = sc.nextInt();\n        int depAmount = sc.nextInt();\n        int withAmount = sc.nextInt();\n\n        Account acc = new Account(owner, accountNo, initialBalance);\n        System.out.println(\"=== 계좌 거래 내역서 ===\");\n        acc.deposit(depAmount);\n        acc.withdraw(withAmount);\n        System.out.println(\"---------------------------------\");\n        acc.printInfo();\n    }\n}",
        "sample_input": "홍길동 110-123-456 10000 5000 8000",
        "sample_output": "=== 계좌 거래 내역서 ===\n입금 성공: 5,000원 (현재 잔액: 15,000원)\n출금 성공: 8,000원 (현재 잔액: 7,000원)\n---------------------------------\n계좌번호: 110-123-456 | 예금주: 홍길동 | 최종 잔액: 7,000원",
        "expected": "=== 계좌 거래 내역서 ===\n입금 성공: 5,000원 (현재 잔액: 15,000원)\n출금 성공: 8,000원 (현재 잔액: 7,000원)\n---------------------------------\n계좌번호: 110-123-456 | 예금주: 홍길동 | 최종 잔액: 7,000원",
        "hint": "1. 클래스 내에 필드(owner, accountNo, balance)와 생성자를 선언합니다.\n2. deposit(int amount)은 잔액을 늘려주고 현재 잔액을 출력합니다.\n3. withdraw(int amount)는 잔액과 비교하여 출금 가능 여부를 판별합니다."
    },
    {
        "id": "day04_중1",
        "day": 4,
        "subject": "Java",
        "difficulty": "중",
        "title": "학생 성적 평가 및 학점 등급 산출 클래스 (StudentGrade)",
        "desc": "학생 이름과 국어, 영어, 수학 3과목 점수를 입력받아 Student 객체를 생성하고, 총점, 평균(소수점 둘째 자리), 학점 등급(90이상 A, 80이상 B, 70이상 C, 60이상 D, 미만 F)을 산출하여 출력하세요.\n\n[입력]\n이름 국어점수 영어점수 수학점수\n(예: 김철수 92 85 88)",
        "template": "import java.util.Scanner;\n\nclass Student {\n    // 필드 및 메서드를 작성하세요\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nclass Student {\n    String name;\n    int kor, eng, math;\n\n    public Student(String name, int kor, int eng, int math) {\n        this.name = name;\n        this.kor = kor;\n        this.eng = eng;\n        this.math = math;\n    }\n\n    public int getTotal() {\n        return kor + eng + math;\n    }\n\n    public double getAverage() {\n        return getTotal() / 3.0;\n    }\n\n    public char getGrade() {\n        double avg = getAverage();\n        if (avg >= 90) return 'A';\n        if (avg >= 80) return 'B';\n        if (avg >= 70) return 'C';\n        if (avg >= 60) return 'D';\n        return 'F';\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String name = sc.next();\n        int kor = sc.nextInt();\n        int eng = sc.nextInt();\n        int math = sc.nextInt();\n\n        Student s = new Student(name, kor, eng, math);\n        System.out.println(\"=== 학생 성적 통지표 ===\");\n        System.out.printf(\"성명: %s\\n\", s.name);\n        System.out.printf(\"국어: %d점 | 영어: %d점 | 수학: %d점\\n\", s.kor, s.eng, s.math);\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"총점: %d점\\n\", s.getTotal());\n        System.out.printf(\"평균: %.2f점\\n\", s.getAverage());\n        System.out.printf(\"학점 등급: %c등급\\n\", s.getGrade());\n    }\n}",
        "sample_input": "김철수 92 85 88",
        "sample_output": "=== 학생 성적 통지표 ===\n성명: 김철수\n국어: 92점 | 영어: 85점 | 수학: 88점\n---------------------------------\n총점: 265점\n평균: 88.33점\n학점 등급: B등급",
        "expected": "=== 학생 성적 통지표 ===\n성명: 김철수\n국어: 92점 | 영어: 85점 | 수학: 88점\n---------------------------------\n총점: 265점\n평균: 88.33점\n학점 등급: B등급",
        "hint": "1. Student 클래스에 kor, eng, math 점수를 저장하고 getTotal(), getAverage() 메서드를 정의합니다.\n2. 평균은 정수 나눗셈 대신 `getTotal() / 3.0`을 사용하여 실수로 계산합니다.\n3. getGrade()에서 평균 점수 기준으로 if-else 분기를 통해 A~F를 반환합니다."
    },
    {
        "id": "day04_중2",
        "day": 4,
        "subject": "Java",
        "difficulty": "중",
        "title": "카페 주문 및 VIP 멤버십 할인 계산 클래스 (CafeOrder)",
        "desc": "음료 메뉴명, 잔당 단가, 주문 수량, VIP 여부(1: VIP, 0: 일반)를 입력받아 주문 금액을 계산하세요.\n- VIP 고객은 총 주문 금액에서 10%를 즉시 할인받고, 결제액의 5%를 포인트로 적립합니다.\n- 일반 고객은 할인이 없으며, 결제액의 1%를 포인트로 적립합니다.\n\n[입력]\n메뉴명 단가 수량 VIP여부(1/0)\n(예: 아메리카노 4500 3 1)",
        "template": "import java.util.Scanner;\n\nclass CafeOrder {\n    // 필드 및 계산 메서드를 작성하세요\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nclass CafeOrder {\n    String menuName;\n    int unitPrice;\n    int quantity;\n    boolean isVip;\n\n    public CafeOrder(String menuName, int unitPrice, int quantity, boolean isVip) {\n        this.menuName = menuName;\n        this.unitPrice = unitPrice;\n        this.quantity = quantity;\n        this.isVip = isVip;\n    }\n\n    public int getSubtotal() {\n        return unitPrice * quantity;\n    }\n\n    public int getDiscount() {\n        if (isVip) {\n            return (int) (getSubtotal() * 0.1);\n        }\n        return 0;\n    }\n\n    public int getFinalPrice() {\n        return getSubtotal() - getDiscount();\n    }\n\n    public int getPoints() {\n        double rate = isVip ? 0.05 : 0.01;\n        return (int) (getFinalPrice() * rate);\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String menu = sc.next();\n        int price = sc.nextInt();\n        int qty = sc.nextInt();\n        boolean isVip = sc.nextInt() == 1;\n\n        CafeOrder order = new CafeOrder(menu, price, qty, isVip);\n        System.out.println(\"=== 스타카페 주문 명세서 ===\");\n        System.out.printf(\"메뉴: %s (단가: %,d원)\\n\", order.menuName, order.unitPrice);\n        System.out.printf(\"주문 수량: %d잔\\n\", order.quantity);\n        System.out.printf(\"회원 등급: %s\\n\", order.isVip ? \"VIP 회원\" : \"일반 고객\");\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"주문 합계: %,d원\\n\", order.getSubtotal());\n        if (order.isVip) {\n            System.out.printf(\"VIP 특별 할인(10%%): -%,d원\\n\", order.getDiscount());\n        }\n        System.out.printf(\"최종 결제 금액: %,d원\\n\", order.getFinalPrice());\n        System.out.printf(\"적립 포인트(%s): %,dP\\n\", order.isVip ? \"5%\" : \"1%\", order.getPoints());\n    }\n}",
        "sample_input": "아메리카노 4500 3 1",
        "sample_output": "=== 스타카페 주문 명세서 ===\n메뉴: 아메리카노 (단가: 4,500원)\n주문 수량: 3잔\n회원 등급: VIP 회원\n---------------------------------\n주문 합계: 13,500원\nVIP 특별 할인(10%): -1,350원\n최종 결제 금액: 12,150원\n적립 포인트(5%): 607P",
        "expected": "=== 스타카페 주문 명세서 ===\n메뉴: 아메리카노 (단가: 4,500원)\n주문 수량: 3잔\n회원 등급: VIP 회원\n---------------------------------\n주문 합계: 13,500원\nVIP 특별 할인(10%): -1,350원\n최종 결제 금액: 12,150원\n적립 포인트(5%): 607P",
        "hint": "1. getSubtotal()은 단가 * 수량입니다.\n2. getDiscount()는 isVip가 true일 때 10%를 계산하여 반환합니다.\n3. 최종 결제액과 적립 포인트는 형변환(int)을 활용해 계산합니다."
    },
    {
        "id": "day04_상",
        "day": 4,
        "subject": "Java",
        "difficulty": "상",
        "title": "물류 창고 재고 관리 및 출고 검증 시스템 (WarehouseInventory)",
        "desc": "상품 2종류의 기본 정보(상품코드, 품명, 단가, 초기재고)를 등록하고, 각 상품별 출고 요청 수량을 입력받아 출고 가능 여부를 검증하세요.\n- 재고가 충분하면 출고를 승인하고 남은 재고를 갱신합니다.\n- 재고가 부족하면 출고를 거부하고 경고 메시지를 출력합니다.\n- 마지막으로 창고 내 상품별 잔여 재고 현황 및 전체 잔여 재고 평가액(단가 * 잔여수량의 합)을 출력하세요.\n\n[입력]\n첫째 줄: 상품1코드 품명 단가 초기재고\n둘째 줄: 상품2코드 품명 단가 초기재고\n셋째 줄: 상품1출고요청수량 상품2출고요청수량\n(예:\nP01 노트북 1200000 10\nP02 무선마우스 30000 5\n5 8)",
        "template": "import java.util.Scanner;\n\nclass Item {\n    // 상품 필드 및 출고/평가액 메서드 작성\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nclass Item {\n    String code;\n    String name;\n    int price;\n    int stock;\n\n    public Item(String code, String name, int price, int stock) {\n        this.code = code;\n        this.name = name;\n        this.price = price;\n        this.stock = stock;\n    }\n\n    public boolean releaseStock(int qty) {\n        if (qty > stock) {\n            System.out.printf(\"[출고 실패] %s 출고 불가: 재고 부족 (현재 재고: %d개, 요청: %d개)\\n\", name, stock, qty);\n            return false;\n        }\n        stock -= qty;\n        System.out.printf(\"[출고 완료] %s %d개 출고 성공 (남은 재고: %d개)\\n\", name, qty, stock);\n        return true;\n    }\n\n    public long getStockValue() {\n        return (long) price * stock;\n    }\n\n    public void printStatus() {\n        System.out.printf(\"코드: %s | 품명: %s | 단가: %,d원 | 재고: %d개 | 재고 평가액: %,d원\\n\",\n                code, name, price, stock, getStockValue());\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Item item1 = new Item(sc.next(), sc.next(), sc.nextInt(), sc.nextInt());\n        Item item2 = new Item(sc.next(), sc.next(), sc.nextInt(), sc.nextInt());\n\n        int req1 = sc.nextInt();\n        int req2 = sc.nextInt();\n\n        System.out.println(\"=== 물류 창고 재고 현황판 ===\");\n        item1.releaseStock(req1);\n        item2.releaseStock(req2);\n        System.out.println(\"---------------------------------\");\n        item1.printStatus();\n        item2.printStatus();\n        System.out.println(\"---------------------------------\");\n        long totalValue = item1.getStockValue() + item2.getStockValue();\n        System.out.printf(\"창고 총 재고 평가액: %,d원\\n\", totalValue);\n    }\n}",
        "sample_input": "P01 노트북 1200000 10\nP02 무선마우스 30000 5\n5 8",
        "sample_output": "=== 물류 창고 재고 현황판 ===\n[출고 완료] 노트북 5개 출고 성공 (남은 재고: 5개)\n[출고 실패] 무선마우스 출고 불가: 재고 부족 (현재 재고: 5개, 요청: 8개)\n---------------------------------\n코드: P01 | 품명: 노트북 | 단가: 1,200,000원 | 재고: 5개 | 재고 평가액: 6,000,000원\n코드: P02 | 품명: 무선마우스 | 단가: 30,000원 | 재고: 5개 | 재고 평가액: 150,000원\n---------------------------------\n창고 총 재고 평가액: 6,150,000원",
        "expected": "=== 물류 창고 재고 현황판 ===\n[출고 완료] 노트북 5개 출고 성공 (남은 재고: 5개)\n[출고 실패] 무선마우스 출고 불가: 재고 부족 (현재 재고: 5개, 요청: 8개)\n---------------------------------\n코드: P01 | 품명: 노트북 | 단가: 1,200,000원 | 재고: 5개 | 재고 평가액: 6,000,000원\n코드: P02 | 품명: 무선마우스 | 단가: 30,000원 | 재고: 5개 | 재고 평가액: 150,000원\n---------------------------------\n창고 총 재고 평가액: 6,150,000원",
        "hint": "1. Item 클래스에 code, name, price, stock 속성을 두고 releaseStock(int qty) 메서드로 출고 가능 여부를 if문으로 검사합니다.\n2. 출고 성공 시에는 stock에서 qty를 차감하고, 부족 시 차감하지 않고 에러를 출력합니다.\n3. 단가 * 재고수는 금액이 커질 수 있으므로 long 형변환을 고려합니다."
    },
    {
        "id": "day04_도전",
        "day": 4,
        "subject": "Java",
        "difficulty": "도전",
        "title": "객체 간 상호작용 및 은행 계좌 이체 트랜잭션 관리자 (BankTransactionManager)",
        "desc": "두 명의 예금주 계좌 객체(A 계좌, B 계좌)를 생성하고, A 계좌에서 B 계좌로 일정 금액을 송금하는 이체(transfer) 트랜잭션 메서드를 구현하세요.\n- 송금 시 이체 수수료(송금액의 1%, 최소 500원)가 출금 계좌에서 추가로 차감됩니다.\n- 출금 계좌의 잔액이 (송금액 + 수수료)보다 부족할 경우 트랜잭션 전체가 롤백(취소)되어 양쪽 계좌 잔액이 전혀 변동되지 않아야 합니다.\n- 이체 성공 시 양쪽 계좌 잔액을 갱신하고 거래 결과를 상세히 출력하세요.\n\n[입력]\n출금계좌주 출금계좌잔액 입금계좌주 입금계좌잔액 이체희망액\n(예: 홍길동 50000 이영희 20000 30000)",
        "template": "import java.util.Scanner;\n\nclass Account {\n    // 계좌 필드, 입금, 출금, 이체(transfer) 메서드를 작성하세요\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nclass Account {\n    String owner;\n    int balance;\n\n    public Account(String owner, int balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n\n    public boolean transferTo(Account target, int amount) {\n        int fee = Math.max(500, (int) (amount * 0.01));\n        int totalNeeded = amount + fee;\n\n        if (this.balance < totalNeeded) {\n            int shortage = totalNeeded - this.balance;\n            System.out.printf(\"[이체 실패] 잔액 부족으로 이체 트랜잭션이 취소되었습니다. (부족액: %,d원)\\n\", shortage);\n            return false;\n        }\n\n        this.balance -= totalNeeded;\n        target.balance += amount;\n\n        System.out.printf(\"[이체 요청] %s -> %s (송금액: %,d원 | 이체 수수료: %,d원)\\n\",\n                this.owner, target.owner, amount, fee);\n        System.out.println(\">> 이체 트랜잭션 승인 완료!\");\n        return true;\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String senderName = sc.next();\n        int senderBal = sc.nextInt();\n        String receiverName = sc.next();\n        int receiverBal = sc.nextInt();\n        int transferAmt = sc.nextInt();\n\n        Account sender = new Account(senderName, senderBal);\n        Account receiver = new Account(receiverName, receiverBal);\n\n        System.out.println(\"=== 은행 계좌 간 이체 트랜잭션 시스템 ===\");\n        boolean success = sender.transferTo(receiver, transferAmt);\n        System.out.println(\"---------------------------------\");\n        int fee = Math.max(500, (int) (transferAmt * 0.01));\n        int deducted = success ? (transferAmt + fee) : 0;\n        int received = success ? transferAmt : 0;\n\n        System.out.printf(\"[출금 계좌] 예금주: %s | 차감액: %,d원 | 최종 잔액: %,d원\\n\",\n                sender.owner, deducted, sender.balance);\n        System.out.printf(\"[입금 계좌] 예금주: %s | 수취액: %,d원 | 최종 잔액: %,d원\\n\",\n                receiver.owner, received, receiver.balance);\n    }\n}",
        "sample_input": "홍길동 50000 이영희 20000 30000",
        "sample_output": "=== 은행 계좌 간 이체 트랜잭션 시스템 ===\n[이체 요청] 홍길동 -> 이영희 (송금액: 30,000원 | 이체 수수료: 500원)\n>> 이체 트랜잭션 승인 완료!\n---------------------------------\n[출금 계좌] 예금주: 홍길동 | 차감액: 30,500원 | 최종 잔액: 19,500원\n[입금 계좌] 예금주: 이영희 | 수취액: 30,000원 | 최종 잔액: 50,000원",
        "expected": "=== 은행 계좌 간 이체 트랜잭션 시스템 ===\n[이체 요청] 홍길동 -> 이영희 (송금액: 30,000원 | 이체 수수료: 500원)\n>> 이체 트랜잭션 승인 완료!\n---------------------------------\n[출금 계좌] 예금주: 홍길동 | 차감액: 30,500원 | 최종 잔액: 19,500원\n[입금 계좌] 예금주: 이영희 | 수취액: 30,000원 | 최종 잔액: 50,000원",
        "hint": "1. 메서드의 매개변수로 다른 객체(`Account target`)의 참조를 전달받아 객체 간 메시지 전송(협력)을 구현합니다.\n2. 수수료 = `Math.max(500, (int) (amount * 0.01))` 로 1%와 500원 중 큰 값을 적용합니다.\n3. 출금 계좌의 잔액이 충분할 때만 `this.balance -= (amount + fee)` 및 `target.balance += amount`를 수행하여 트랜잭션 원자성을 보장합니다."
    },
    {
        "id": "day05_하1",
        "day": 5,
        "subject": "Java",
        "difficulty": "하",
        "title": "사원과 관리자의 급여 계산 상속 모델 (EmployeeSalaryManager)",
        "desc": "기본 사원(Employee) 클래스와 이를 상속받은 관리자(Manager) 클래스를 설계하세요.\n- Employee는 이름(`name`)과 기본급(`baseSalary`)을 가집니다.\n- Manager는 추가로 직책 보너스(`bonus`)를 가집니다.\n- 각 클래스에서 지급 급여(`getSalary()`)를 계산하고 서식에 맞게 출력하세요.\n\n[입력]\n사원명 사원기본급 관리자명 관리자기본급 관리자보너스\n(예: 이순신 3000000 강감찬 4500000 1500000)",
        "template": "import java.util.Scanner;\n\nclass Employee {\n    // 공통 필드 및 메서드\n}\n\nclass Manager extends Employee {\n    // 보너스 필드 및 메서드 오버라이딩\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nclass Employee {\n    String name;\n    int baseSalary;\n\n    public Employee(String name, int baseSalary) {\n        this.name = name;\n        this.baseSalary = baseSalary;\n    }\n\n    public int getSalary() {\n        return baseSalary;\n    }\n}\n\nclass Manager extends Employee {\n    int bonus;\n\n    public Manager(String name, int baseSalary, int bonus) {\n        super(name, baseSalary);\n        this.bonus = bonus;\n    }\n\n    @Override\n    public int getSalary() {\n        return baseSalary + bonus;\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String empName = sc.next();\n        int empSal = sc.nextInt();\n        String mgrName = sc.next();\n        int mgrSal = sc.nextInt();\n        int mgrBonus = sc.nextInt();\n\n        Employee emp = new Employee(empName, empSal);\n        Manager mgr = new Manager(mgrName, mgrSal, mgrBonus);\n\n        System.out.println(\"=== 직원 급여 지급 명세서 ===\");\n        System.out.printf(\"[일반 사원] %s : 지급 급여 %,d원\\n\", emp.name, emp.getSalary());\n        System.out.printf(\"[부서 관리자] %s : 지급 급여 %,d원 (기본급 %,d원 + 직책 보너스 %,d원)\\n\",\n                mgr.name, mgr.getSalary(), mgr.baseSalary, mgr.bonus);\n    }\n}",
        "sample_input": "이순신 3000000 강감찬 4500000 1500000",
        "sample_output": "=== 직원 급여 지급 명세서 ===\n[일반 사원] 이순신 : 지급 급여 3,000,000원\n[부서 관리자] 강감찬 : 지급 급여 6,000,000원 (기본급 4,500,000원 + 직책 보너스 1,500,000원)",
        "expected": "=== 직원 급여 지급 명세서 ===\n[일반 사원] 이순신 : 지급 급여 3,000,000원\n[부서 관리자] 강감찬 : 지급 급여 6,000,000원 (기본급 4,500,000원 + 직책 보너스 1,500,000원)",
        "hint": "1. `class Manager extends Employee`로 상속을 선언합니다.\n2. 자식 클래스 생성자에서 `super(name, baseSalary);`로 부모 생성자를 먼저 호출합니다.\n3. `@Override`를 붙여 `getSalary()`를 오버라이딩하여 기본급에 보너스를 더한 값을 반환합니다."
    },
    {
        "id": "day05_중1",
        "day": 5,
        "subject": "Java",
        "difficulty": "중",
        "title": "다형성 도형 면적 및 둘레 계산기 (ShapeCalculator)",
        "desc": "추상 클래스 `Shape`를 상속받는 `Rectangle`(직사각형)과 `Circle`(원) 클래스를 정의하고, 다형성(Polymorphism)을 활용하여 면적과 둘레를 계산하세요.\n- `Rectangle`: 가로(`w`), 세로(`h`) 입력, 넓이 = `w * h`, 둘레 = `2 * (w + h)`\n- `Circle`: 반지름(`r`) 입력, 넓이 = `r * r * 3.14`, 둘레 = `2 * 3.14 * r`\n- 모든 결과는 소수점 둘째 자리까지 출력하세요.\n\n[입력]\n직사각형 가로 세로, 원 반지름이 공백으로 주어집니다.\n(예: 10 20 5)",
        "template": "import java.util.Scanner;\n\nabstract class Shape {\n    abstract double area();\n    abstract double perimeter();\n}\n\n// Rectangle과 Circle 클래스를 구현하세요\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nabstract class Shape {\n    abstract double area();\n    abstract double perimeter();\n}\n\nclass Rectangle extends Shape {\n    double w, h;\n\n    public Rectangle(double w, double h) {\n        this.w = w;\n        this.h = h;\n    }\n\n    @Override\n    double area() {\n        return w * h;\n    }\n\n    @Override\n    double perimeter() {\n        return 2 * (w + h);\n    }\n}\n\nclass Circle extends Shape {\n    double r;\n\n    public Circle(double r) {\n        this.r = r;\n    }\n\n    @Override\n    double area() {\n        return r * r * 3.14;\n    }\n\n    @Override\n    double perimeter() {\n        return 2 * 3.14 * r;\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double w = sc.nextDouble();\n        double h = sc.nextDouble();\n        double r = sc.nextDouble();\n\n        Shape rect = new Rectangle(w, h);\n        Shape circle = new Circle(r);\n\n        System.out.println(\"=== 다형성 도형 면적 및 둘레 계산기 ===\");\n        System.out.printf(\"[직사각형 (가로: %.1f, 세로: %.1f)]\\n\", w, h);\n        System.out.printf(\"- 넓이: %.2f\\n\", rect.area());\n        System.out.printf(\"- 둘레: %.2f\\n\", rect.perimeter());\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"[원 (반지름: %.1f)]\\n\", r);\n        System.out.printf(\"- 넓이: %.2f\\n\", circle.area());\n        System.out.printf(\"- 둘레: %.2f\\n\", circle.perimeter());\n    }\n}",
        "sample_input": "10 20 5",
        "sample_output": "=== 다형성 도형 면적 및 둘레 계산기 ===\n[직사각형 (가로: 10.0, 세로: 20.0)]\n- 넓이: 200.00\n- 둘레: 60.00\n---------------------------------\n[원 (반지름: 5.0)]\n- 넓이: 78.50\n- 둘레: 31.40",
        "expected": "=== 다형성 도형 면적 및 둘레 계산기 ===\n[직사각형 (가로: 10.0, 세로: 20.0)]\n- 넓이: 200.00\n- 둘레: 60.00\n---------------------------------\n[원 (반지름: 5.0)]\n- 넓이: 78.50\n- 둘레: 31.40",
        "hint": "1. `abstract class Shape`의 추상 메서드 `area()`, `perimeter()`를 하위 클래스에서 반드시 구현해야 합니다.\n2. 부모 타입인 `Shape rect = new Rectangle(...)` 처럼 다형성 참조 변수를 활용할 수 있습니다.\n3. 서식 문자 `%.2f`로 소수점 둘째 자리까지 출력합니다."
    },
    {
        "id": "day05_중2",
        "day": 5,
        "subject": "Java",
        "difficulty": "중",
        "title": "다형적 전자결제 게이트웨이 시스템 (PaymentProcessor)",
        "desc": "결제 방식을 추상화한 `Payment` 클래스와 하위 구현 클래스인 `CardPayment`(신용카드), `CashPayment`(현금)를 정의하세요.\n- `CardPayment`: 카드 수수료 2% 가산 청구 (`최종 승인액 = 원금 + (int)(원금 * 0.02)`)\n- `CashPayment`: 현금영수증 발행 및 1% 할인 (`최종 결제액 = 원금 - (int)(원금 * 0.01)`)\n- 카드 결제 요청액과 현금 결제 요청액을 입력받아 각각 결제 처리하고 총 정산 금액을 집계하세요.\n\n[입력]\n신용카드결제금액 현금결제금액\n(예: 50000 30000)",
        "template": "import java.util.Scanner;\n\nabstract class Payment {\n    int amount;\n    public Payment(int amount) { this.amount = amount; }\n    abstract int getFinalAmount();\n    abstract void printReceipt();\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nabstract class Payment {\n    int amount;\n    public Payment(int amount) { this.amount = amount; }\n    abstract int getFinalAmount();\n    abstract void printReceipt();\n}\n\nclass CardPayment extends Payment {\n    public CardPayment(int amount) { super(amount); }\n\n    @Override\n    int getFinalAmount() {\n        return amount + (int)(amount * 0.02);\n    }\n\n    @Override\n    void printReceipt() {\n        int fee = (int)(amount * 0.02);\n        System.out.printf(\"[신용카드 결제] 원금: %,d원 | 카드 수수료(2%%): %,d원 | 최종 승인액: %,d원\\n\",\n                amount, fee, getFinalAmount());\n    }\n}\n\nclass CashPayment extends Payment {\n    public CashPayment(int amount) { super(amount); }\n\n    @Override\n    int getFinalAmount() {\n        return amount - (int)(amount * 0.01);\n    }\n\n    @Override\n    void printReceipt() {\n        int discount = (int)(amount * 0.01);\n        System.out.printf(\"[현금 결제] 원금: %,d원 | 현금 할인(1%%): %,d원 | 최종 결제액: %,d원 (현금영수증 발급 완료)\\n\",\n                amount, discount, getFinalAmount());\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int cardAmt = sc.nextInt();\n        int cashAmt = sc.nextInt();\n\n        Payment card = new CardPayment(cardAmt);\n        Payment cash = new CashPayment(cashAmt);\n\n        System.out.println(\"=== 통합 전자결제 게이트웨이 ===\");\n        card.printReceipt();\n        cash.printReceipt();\n        System.out.println(\"---------------------------------\");\n        int totalSettled = card.getFinalAmount() + cash.getFinalAmount();\n        System.out.printf(\"총 정산 금액: %,d원\\n\", totalSettled);\n    }\n}",
        "sample_input": "50000 30000",
        "sample_output": "=== 통합 전자결제 게이트웨이 ===\n[신용카드 결제] 원금: 50,000원 | 카드 수수료(2%): 1,000원 | 최종 승인액: 51,000원\n[현금 결제] 원금: 30,000원 | 현금 할인(1%): 300원 | 최종 결제액: 29,700원 (현금영수증 발급 완료)\n---------------------------------\n총 정산 금액: 80,700원",
        "expected": "=== 통합 전자결제 게이트웨이 ===\n[신용카드 결제] 원금: 50,000원 | 카드 수수료(2%): 1,000원 | 최종 승인액: 51,000원\n[현금 결제] 원금: 30,000원 | 현금 할인(1%): 300원 | 최종 결제액: 29,700원 (현금영수증 발급 완료)\n---------------------------------\n총 정산 금액: 80,700원",
        "hint": "1. `Payment` 추상 클래스를 상속받아 `CardPayment`와 `CashPayment`가 각각의 수수료/할인 로직을 구현합니다.\n2. 다형성을 이용해 `Payment[] payments = {card, cash};` 처럼 배열로 묶어 순회 처리할 수도 있습니다.\n3. printf에서 % 기호는 `%%`로 작성해야 합니다."
    },
    {
        "id": "day05_상",
        "day": 5,
        "subject": "Java",
        "difficulty": "상",
        "title": "RPG 영웅 다형적 공격 및 레이드 보스 배틀 시뮬레이터 (RpgBattleSimulator)",
        "desc": "영웅 추상 클래스 `Hero`를 상속받는 `Warrior`(전사)와 `Mage`(마법사)가 레이드 보스 몬스터를 협동 공격하는 전투 시뮬레이터를 작성하세요.\n- `Hero` 공통: 이름(`name`), 기본 공격력(`attackPower`)\n- `Warrior`: 일반 공격(`attackPower`), 특수 스킬 `파워 스트라이크` (기본 공격력의 1.5배 정수값 피해)\n- `Mage`: 일반 공격(`attackPower`), 특수 스킬 `메테오 스트라이크` (기본 공격력의 2.0배 정수값 피해)\n- 두 영웅이 각각 1회의 일반 공격과 1회의 특수 스킬 공격을 차례대로 수행합니다.\n- 보스의 초기 체력에서 총 피해량을 차감하고, 잔여 체력(최소 0)과 토벌 성공 여부(체력 0 이하면 '토벌 성공!', 초과면 '토벌 실패 (보스가 생존했습니다)')를 출력하세요.\n\n[입력]\n보스초기체력 전사공격력 마법사공격력\n(예: 1000 120 150)",
        "template": "import java.util.Scanner;\n\nabstract class Hero {\n    String name;\n    int attackPower;\n    // 추상 메서드 및 생성자 작성\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nabstract class Hero {\n    String name;\n    int attackPower;\n\n    public Hero(String name, int attackPower) {\n        this.name = name;\n        this.attackPower = attackPower;\n    }\n\n    public int normalAttack() {\n        return attackPower;\n    }\n\n    abstract int skillAttack();\n}\n\nclass Warrior extends Hero {\n    public Warrior(int attackPower) {\n        super(\"전사\", attackPower);\n    }\n\n    @Override\n    int skillAttack() {\n        return (int) (attackPower * 1.5);\n    }\n}\n\nclass Mage extends Hero {\n    public Mage(int attackPower) {\n        super(\"마법사\", attackPower);\n    }\n\n    @Override\n    int skillAttack() {\n        return (int) (attackPower * 2.0);\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int bossHp = sc.nextInt();\n        int wAtk = sc.nextInt();\n        int mAtk = sc.nextInt();\n\n        Warrior warrior = new Warrior(wAtk);\n        Mage mage = new Mage(mAtk);\n\n        System.out.println(\"=== 레이드 보스 토벌 시뮬레이션 ===\");\n        System.out.printf(\"보스 초기 체력: %,d HP\\n\", bossHp);\n        System.out.println(\"---------------------------------\");\n\n        int wNormal = warrior.normalAttack();\n        int wSkill = warrior.skillAttack();\n        System.out.printf(\"[전사 기본 공격] %,d 피해를 입혔습니다.\\n\", wNormal);\n        System.out.printf(\"[전사 파워 스트라이크] %,d 치명타 피해를 입혔습니다!\\n\", wSkill);\n\n        int mNormal = mage.normalAttack();\n        int mSkill = mage.skillAttack();\n        System.out.printf(\"[마법사 기본 공격] %,d 피해를 입혔습니다.\\n\", mNormal);\n        System.out.printf(\"[마법사 메테오 스트라이크] %,d 마법 피해를 입혔습니다!\\n\", mSkill);\n\n        int totalDamage = wNormal + wSkill + mNormal + mSkill;\n        int remainHp = Math.max(0, bossHp - totalDamage);\n\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"총 누적 입힌 피해: %,d DMG\\n\", totalDamage);\n        System.out.printf(\"보스 잔여 체력: %,d HP\\n\", remainHp);\n        if (remainHp == 0) {\n            System.out.println(\"전투 결과: 보스 토벌 성공! 레이드를 클리어하셨습니다.\");\n        } else {\n            System.out.println(\"전투 결과: 보스 토벌 실패 (보스가 생존했습니다)\");\n        }\n    }\n}",
        "sample_input": "1000 120 150",
        "sample_output": "=== 레이드 보스 토벌 시뮬레이션 ===\n보스 초기 체력: 1,000 HP\n---------------------------------\n[전사 기본 공격] 120 피해를 입혔습니다.\n[전사 파워 스트라이크] 180 치명타 피해를 입혔습니다!\n[마법사 기본 공격] 150 피해를 입혔습니다.\n[마법사 메테오 스트라이크] 300 마법 피해를 입혔습니다!\n---------------------------------\n총 누적 입힌 피해: 750 DMG\n보스 잔여 체력: 250 HP\n전투 결과: 보스 토벌 실패 (보스가 생존했습니다)",
        "expected": "=== 레이드 보스 토벌 시뮬레이션 ===\n보스 초기 체력: 1,000 HP\n---------------------------------\n[전사 기본 공격] 120 피해를 입혔습니다.\n[전사 파워 스트라이크] 180 치명타 피해를 입혔습니다!\n[마법사 기본 공격] 150 피해를 입혔습니다.\n[마법사 메테오 스트라이크] 300 마법 피해를 입혔습니다!\n---------------------------------\n총 누적 입힌 피해: 750 DMG\n보스 잔여 체력: 250 HP\n전투 결과: 보스 토벌 실패 (보스가 생존했습니다)",
        "hint": "1. `Hero` 추상 클래스에 공통 속성을 정의하고, `skillAttack()`을 추상 메서드로 선언합니다.\n2. 자식 클래스에서 직업별 스킬 배율(전사 1.5배, 마법사 2.0배)을 오버라이딩합니다.\n3. 총 피해량을 누적 계산하여 잔여 체력(`Math.max(0, bossHp - totalDamage)`)을 구합니다."
    },
    {
        "id": "day05_도전",
        "day": 5,
        "subject": "Java",
        "difficulty": "도전",
        "title": "턴제 RPG 전투 시뮬레이션 및 다형성 스킬 체인 (TurnBasedRpgBattle)",
        "desc": "전사(Warrior, 고정 피해 200), 도적(Rogue, 연속 2타 150*2=300), 힐러(Healer, 고정 피해 80)로 구성된 영웅 파티가 체력 H의 레이드 보스를 공격합니다.\n- 매 턴마다 3명의 영웅이 다형성 배열을 통해 순서대로 공격합니다 (1턴 파티 총 피해: 200 + 300 + 80 = 580 DMG).\n- 각 턴이 종료될 때마다 보스의 잔여 체력(최소 0)을 갱신 및 출력합니다.\n- 보스의 체력이 0 이하가 되면 전투를 즉시 종료하고 토벌 소요 턴 수와 전원 생존 메시지를 출력하세요.\n\n[입력]\n보스 초기 체력 H (정수)\n(예: 1500)",
        "template": "import java.util.Scanner;\n\nabstract class Hero {\n    String job;\n    public Hero(String job) { this.job = job; }\n    abstract int attack();\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nabstract class Hero {\n    String job;\n    public Hero(String job) { this.job = job; }\n    abstract int attack();\n}\n\nclass Warrior extends Hero {\n    public Warrior() { super(\"전사\"); }\n    @Override int attack() { return 200; }\n}\n\nclass Rogue extends Hero {\n    public Rogue() { super(\"도적\"); }\n    @Override int attack() { return 300; } // 150 * 2\n}\n\nclass Healer extends Hero {\n    public Healer() { super(\"힐러\"); }\n    @Override int attack() { return 80; }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int bossHp = sc.nextInt();\n\n        Hero[] party = { new Warrior(), new Rogue(), new Healer() };\n\n        System.out.println(\"=== 던전 레이드 턴제 전투 시뮬레이션 ===\");\n        System.out.printf(\"보스 체력: %,d HP | 파티 인원: %d명\\n\", bossHp, party.length);\n        System.out.println(\"---------------------------------\");\n\n        int turn = 0;\n        int currentHp = bossHp;\n\n        while (currentHp > 0) {\n            turn++;\n            int turnDamage = 0;\n            for (Hero h : party) {\n                turnDamage += h.attack();\n            }\n\n            currentHp = Math.max(0, currentHp - turnDamage);\n            System.out.printf(\"[%d턴] 파티 총 공격: %,d 데미지 -> 보스 잔여 체력: %,d HP\\n\", turn, turnDamage, currentHp);\n        }\n\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"전투 승리! [%d턴] 만에 보스를 토벌하였습니다.\\n\", turn);\n        System.out.println(\"생존 영웅: 전사, 도적, 힐러 (전원 생존)\");\n    }\n}",
        "sample_input": "1500",
        "sample_output": "=== 던전 레이드 턴제 전투 시뮬레이션 ===\n보스 체력: 1,500 HP | 파티 인원: 3명\n---------------------------------\n[1턴] 파티 총 공격: 580 데미지 -> 보스 잔여 체력: 920 HP\n[2턴] 파티 총 공격: 580 데미지 -> 보스 잔여 체력: 340 HP\n[3턴] 파티 총 공격: 580 데미지 -> 보스 잔여 체력: 0 HP\n---------------------------------\n전투 승리! [3턴] 만에 보스를 토벌하였습니다.\n생존 영웅: 전사, 도적, 힐러 (전원 생존)",
        "expected": "=== 던전 레이드 턴제 전투 시뮬레이션 ===\n보스 체력: 1,500 HP | 파티 인원: 3명\n---------------------------------\n[1턴] 파티 총 공격: 580 데미지 -> 보스 잔여 체력: 920 HP\n[2턴] 파티 총 공격: 580 데미지 -> 보스 잔여 체력: 340 HP\n[3턴] 파티 총 공격: 580 데미지 -> 보스 잔여 체력: 0 HP\n---------------------------------\n전투 승리! [3턴] 만에 보스를 토벌하였습니다.\n생존 영웅: 전사, 도적, 힐러 (전원 생존)",
        "hint": "1. `Hero[] party = { new Warrior(), new Rogue(), new Healer() };` 다형성 배열을 선언합니다.\n2. while문 안에서 `currentHp > 0`인 동안 턴을 증가시키며 파티원들의 공격력을 합산 차감합니다.\n3. `Math.max(0, currentHp - turnDamage)`로 음수 체력을 방지합니다."
    },
    {
        "id": "day06_하1",
        "day": 6,
        "subject": "Java",
        "difficulty": "하",
        "title": "안전 정수 나눗셈 예외 처리기 (SafeDivisionCalculator)",
        "desc": "두 개의 정수 A와 B를 입력받아 나눗셈의 몫(A / B)과 나머지(A % B)를 계산하세요.\n- 나눗셈 수행 시 0으로 나누는 상황이 발생하면 `ArithmeticException` 예외를 try-catch로 포착하여 `[예외 발생] 0으로 나눌 수 없습니다.`를 출력하세요.\n- 정상 계산 시에는 몫과 나머지를 출력하고, 예외 발생 여부와 상관없이 `finally` 블록에서 `계산기 작업을 정상 종료합니다.`를 반드시 출력하세요.\n\n[입력]\n두 정수 A와 B가 공백으로 주어집니다.\n(예: 25 4)",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // try - catch - finally 블록을 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n\n        System.out.println(\"=== 안전 정수 나눗셈 계산기 ===\");\n        try {\n            int quotient = a / b;\n            int remainder = a % b;\n            System.out.println(\"[계산 성공]\");\n            System.out.printf(\"%d / %d = %d (몫)\\n\", a, b, quotient);\n            System.out.printf(\"%d %% %d = %d (나머지)\\n\", a, b, remainder);\n        } catch (ArithmeticException e) {\n            System.out.println(\"[예외 발생] 0으로 나눌 수 없습니다.\");\n        } finally {\n            System.out.println(\"계산기 작업을 정상 종료합니다.\");\n        }\n    }\n}",
        "sample_input": "25 4",
        "sample_output": "=== 안전 정수 나눗셈 계산기 ===\n[계산 성공]\n25 / 4 = 6 (몫)\n25 % 4 = 1 (나머지)\n계산기 작업을 정상 종료합니다.",
        "expected": "=== 안전 정수 나눗셈 계산기 ===\n[계산 성공]\n25 / 4 = 6 (몫)\n25 % 4 = 1 (나머지)\n계산기 작업을 정상 종료합니다.",
        "hint": "1. `try { ... } catch (ArithmeticException e) { ... } finally { ... }` 구조를 사용합니다.\n2. 자바에서 정수를 0으로 나누면 `ArithmeticException`이 발생합니다.\n3. `finally` 블록의 코드는 예외 발생 여부와 관계없이 무조건 실행됩니다."
    },
    {
        "id": "day06_중1",
        "day": 6,
        "subject": "Java",
        "difficulty": "중",
        "title": "사용자 정의 예외 기반 ATM 잔액 검증기 (CustomWithdrawException)",
        "desc": "은행 ATM 출금 시스템에서 계좌 잔액보다 많은 금액을 출금하려고 할 때 발생하는 사용자 정의 예외 `InsufficientBalanceException`을 작성하세요.\n- 현재 계좌 잔액과 출금 희망 금액을 입력받습니다.\n- 출금액이 잔액을 초과할 경우 `throw new InsufficientBalanceException(...)`을 발생시키고, 메인 함수에서 이를 catch하여 오류 사유와 거래 취소 메시지를 출력하세요.\n- 출금 가능한 경우 잔액을 차감하고 출금 성공을 알리세요.\n\n[입력]\n현재잔액 출금희망액\n(예: 50000 70000)",
        "template": "import java.util.Scanner;\n\nclass InsufficientBalanceException extends Exception {\n    public InsufficientBalanceException(String message) {\n        super(message);\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nclass InsufficientBalanceException extends Exception {\n    public InsufficientBalanceException(String message) {\n        super(message);\n    }\n}\n\npublic class Solution {\n    public static void withdraw(int balance, int amount) throws InsufficientBalanceException {\n        if (amount > balance) {\n            int shortage = amount - balance;\n            throw new InsufficientBalanceException(String.format(\"출금 불가 - 잔액이 %,d원 부족합니다.\", shortage));\n        }\n        int newBalance = balance - amount;\n        System.out.printf(\"[출금 완료] %,d원 출금 성공 (남은 잔액: %,d원)\\n\", amount, newBalance);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int balance = sc.nextInt();\n        int amount = sc.nextInt();\n\n        System.out.println(\"=== 국민은행 스마트 ATM ===\");\n        System.out.printf(\"현재 계좌 잔액: %,d원\\n\", balance);\n        System.out.printf(\"출금 요청 금액: %,d원\\n\", amount);\n\n        try {\n            withdraw(balance, amount);\n        } catch (InsufficientBalanceException e) {\n            System.out.println(\"[예외 감지] InsufficientBalanceException 발생!\");\n            System.out.printf(\"사유: %s\\n\", e.getMessage());\n            System.out.println(\"거래가 안전하게 취소되었습니다.\");\n        }\n    }\n}",
        "sample_input": "50000 70000",
        "sample_output": "=== 국민은행 스마트 ATM ===\n현재 계좌 잔액: 50,000원\n출금 요청 금액: 70,000원\n[예외 감지] InsufficientBalanceException 발생!\n사유: 출금 불가 - 잔액이 20,000원 부족합니다.\n거래가 안전하게 취소되었습니다.",
        "expected": "=== 국민은행 스마트 ATM ===\n현재 계좌 잔액: 50,000원\n출금 요청 금액: 70,000원\n[예외 감지] InsufficientBalanceException 발생!\n사유: 출금 불가 - 잔액이 20,000원 부족합니다.\n거래가 안전하게 취소되었습니다.",
        "hint": "1. `class InsufficientBalanceException extends Exception`으로 커스텀 예외를 선언합니다.\n2. 출금 검증 메서드에 `throws InsufficientBalanceException`을 명시하고, 조건 위반 시 `throw new InsufficientBalanceException(...)`을 호출합니다.\n3. main에서 `try-catch`로 감싸 `e.getMessage()`를 서식에 맞춰 출력합니다."
    },
    {
        "id": "day06_중2",
        "day": 6,
        "subject": "Java",
        "difficulty": "중",
        "title": "스마트홈 IoT 가전 제어 인터페이스 (SmartDeviceController)",
        "desc": "가전 기기 제어를 표준화하기 위한 인터페이스 `RemoteControllable`을 작성하고, 이를 구현하는 `SmartTv`와 `AirConditioner` 클래스를 작성하세요.\n- `interface RemoteControllable`: `turnOn()`, `turnOff()`, `setSetting(int value)` 메서드 규격 정의\n- `SmartTv`: `setSetting` 호출 시 `[SmartTV] 볼륨을 {value}(으)로 조절했습니다.` 출력\n- `AirConditioner`: `setSetting` 호출 시 `[에어컨] 희망 온도를 {value}도로 설정했습니다.` 출력\n- TV 볼륨과 에어컨 희망 온도를 입력받아 각 기기의 전원 On -> 설정 변경 -> 전원 Off 과정을 출력하세요.\n\n[입력]\nTV볼륨(정수) 에어컨희망온도(정수)\n(예: 25 22)",
        "template": "import java.util.Scanner;\n\ninterface RemoteControllable {\n    void turnOn();\n    void turnOff();\n    void setSetting(int value);\n}\n\n// SmartTv와 AirConditioner 구현 클래스를 작성하세요\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\ninterface RemoteControllable {\n    void turnOn();\n    void turnOff();\n    void setSetting(int value);\n}\n\nclass SmartTv implements RemoteControllable {\n    @Override\n    public void turnOn() {\n        System.out.println(\"[SmartTV] 전원이 켜졌습니다.\");\n    }\n\n    @Override\n    public void turnOff() {\n        System.out.println(\"[SmartTV] 전원을 끕니다.\");\n    }\n\n    @Override\n    public void setSetting(int value) {\n        System.out.printf(\"[SmartTV] 볼륨을 %d(으)로 조절했습니다.\\n\", value);\n    }\n}\n\nclass AirConditioner implements RemoteControllable {\n    @Override\n    public void turnOn() {\n        System.out.println(\"[에어컨] 전원이 켜졌습니다.\");\n    }\n\n    @Override\n    public void turnOff() {\n        System.out.println(\"[에어컨] 전원을 끕니다.\");\n    }\n\n    @Override\n    public void setSetting(int value) {\n        System.out.printf(\"[에어컨] 희망 온도를 %d도로 설정했습니다.\\n\", value);\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int tvVol = sc.nextInt();\n        int acTemp = sc.nextInt();\n\n        RemoteControllable tv = new SmartTv();\n        RemoteControllable ac = new AirConditioner();\n\n        System.out.println(\"=== 스마트홈 IoT 통합 원격 제어기 ===\");\n        tv.turnOn();\n        tv.setSetting(tvVol);\n        tv.turnOff();\n        System.out.println(\"---------------------------------\");\n        ac.turnOn();\n        ac.setSetting(acTemp);\n        ac.turnOff();\n    }\n}",
        "sample_input": "25 22",
        "sample_output": "=== 스마트홈 IoT 통합 원격 제어기 ===\n[SmartTV] 전원이 켜졌습니다.\n[SmartTV] 볼륨을 25(으)로 조절했습니다.\n[SmartTV] 전원을 끕니다.\n---------------------------------\n[에어컨] 전원이 켜졌습니다.\n[에어컨] 희망 온도를 22도로 설정했습니다.\n[에어컨] 전원을 끕니다.",
        "expected": "=== 스마트홈 IoT 통합 원격 제어기 ===\n[SmartTV] 전원이 켜졌습니다.\n[SmartTV] 볼륨을 25(으)로 조절했습니다.\n[SmartTV] 전원을 끕니다.\n---------------------------------\n[에어컨] 전원이 켜졌습니다.\n[에어컨] 희망 온도를 22도로 설정했습니다.\n[에어컨] 전원을 끕니다.",
        "hint": "1. `interface`에 선언된 메서드는 기본적으로 `public abstract`입니다.\n2. `implements RemoteControllable`을 선언하고 인터페이스의 메서드들을 모두 재정의(`@Override`)합니다.\n3. 부모 인터페이스 타입 변수로 구현 객체를 참조하여 다형성을 실천합니다."
    },
    {
        "id": "day06_상",
        "day": 6,
        "subject": "Java",
        "difficulty": "상",
        "title": "다중 인터페이스 및 결제 유효성 검증 주문 파이프라인 (DeliveryOrderPipeline)",
        "desc": "음식 배달 서비스의 주문 처리 시스템을 위해 결제 인터페이스 `Payable`과 배송 인터페이스 `Shippable`을 선언하고, 주문 처리 클래스 `DeliveryOrder`를 구현하세요.\n- `DeliveryOrder`는 주문자명(`customer`), 주문금액(`amount`), 배송거리(`distanceKm`)를 갖습니다.\n- 최소 주문 금액은 15,000원입니다. 만약 주문 금액이 15,000원 미만이면 사용자 정의 예외 `InvalidOrderException`을 던져 주문을 즉시 중단하고 안내 메시지를 출력하세요.\n- 주문 금액이 정상이면 결제 승인과 라이더 배차(예상 배달 소요시간: `distanceKm * 5분`)를 순차 진행하세요.\n\n[입력]\n주문자명 주문금액 배송거리(km)\n(예: 홍길동 28000 3)",
        "template": "import java.util.Scanner;\n\nclass InvalidOrderException extends Exception {\n    public InvalidOrderException(String message) {\n        super(message);\n    }\n}\n\ninterface Payable {\n    void processPayment();\n}\n\ninterface Shippable {\n    void assignDelivery();\n}\n\n// DeliveryOrder 구현\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nclass InvalidOrderException extends Exception {\n    public InvalidOrderException(String message) {\n        super(message);\n    }\n}\n\ninterface Payable {\n    void processPayment();\n}\n\ninterface Shippable {\n    void assignDelivery();\n}\n\nclass DeliveryOrder implements Payable, Shippable {\n    String customer;\n    int amount;\n    int distanceKm;\n\n    public DeliveryOrder(String customer, int amount, int distanceKm) throws InvalidOrderException {\n        if (amount < 15000) {\n            throw new InvalidOrderException(String.format(\"최소 주문 금액(15,000원) 미달입니다. (현재 금액: %,d원)\", amount));\n        }\n        this.customer = customer;\n        this.amount = amount;\n        this.distanceKm = distanceKm;\n    }\n\n    @Override\n    public void processPayment() {\n        System.out.printf(\"[결제 승인] Payable: %,d원 결제가 정상 승인되었습니다.\\n\", amount);\n    }\n\n    @Override\n    public void assignDelivery() {\n        int estimatedTime = distanceKm * 5;\n        System.out.printf(\"[배송 연계] Shippable: 배달 라이더 배차 완료 (예상 배달 소요시간: %d분)\\n\", estimatedTime);\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String customer = sc.next();\n        int amount = sc.nextInt();\n        int distance = sc.nextInt();\n\n        System.out.println(\"=== 배달의민족 주문 접수 파이프라인 ===\");\n        try {\n            DeliveryOrder order = new DeliveryOrder(customer, amount, distance);\n            System.out.printf(\"[주문 검증] 주문자: %s | 주문 금액: %,d원 | 배송 거리: %dkm\\n\",\n                    order.customer, order.amount, order.distanceKm);\n            order.processPayment();\n            order.assignDelivery();\n            System.out.println(\"주문 처리가 성공적으로 완료되었습니다.\");\n        } catch (InvalidOrderException e) {\n            System.out.println(\"[주문 거절] 유효하지 않은 주문입니다.\");\n            System.out.printf(\"사유: %s\\n\", e.getMessage());\n        }\n    }\n}",
        "sample_input": "홍길동 28000 3",
        "sample_output": "=== 배달의민족 주문 접수 파이프라인 ===\n[주문 검증] 주문자: 홍길동 | 주문 금액: 28,000원 | 배송 거리: 3km\n[결제 승인] Payable: 28,000원 결제가 정상 승인되었습니다.\n[배송 연계] Shippable: 배달 라이더 배차 완료 (예상 배달 소요시간: 15분)\n주문 처리가 성공적으로 완료되었습니다.",
        "expected": "=== 배달의민족 주문 접수 파이프라인 ===\n[주문 검증] 주문자: 홍길동 | 주문 금액: 28,000원 | 배송 거리: 3km\n[결제 승인] Payable: 28,000원 결제가 정상 승인되었습니다.\n[배송 연계] Shippable: 배달 라이더 배차 완료 (예상 배달 소요시간: 15분)\n주문 처리가 성공적으로 완료되었습니다.",
        "hint": "1. `class DeliveryOrder implements Payable, Shippable`로 여러 인터페이스를 다중 구현할 수 있습니다.\n2. 생성자 내부에서 15,000원 미만인 경우 `throw new InvalidOrderException(...)`을 던집니다.\n3. main 함수에서 try-catch로 예외를 포착하여 안전하게 주문 흐름을 제어합니다."
    },
    {
        "id": "day06_도전",
        "day": 6,
        "subject": "Java",
        "difficulty": "도전",
        "title": "결제 실패 시 보상 트랜잭션 및 복구 재시도 엔진 (PaymentCompensationEngine)",
        "desc": "외부 결제 PG사 API 호출 시 발생하는 일시적 통신 장애 `NetworkTimeoutException`을 처리하는 결제 재시도 엔진을 작성하세요.\n- 결제 에러 유형(PG_TIMEOUT 또는 LIMIT_EXCEEDED), 주문 금액, 사용된 결제 포인트를 입력받습니다.\n- PG_TIMEOUT인 경우 최대 3회까지 재시도를 수행합니다.\n- 3회 연속 실패 시 재시도를 중단하고, 사용된 포인트를 안전하게 원상 복구하는 '보상 트랜잭션(Compensating Transaction)'을 가동하여 롤백 메시지를 출력하세요.\n\n[입력]\n에러유형 주문금액 사용포인트\n(예: PG_TIMEOUT 50000 5000)",
        "template": "import java.util.Scanner;\n\nclass NetworkTimeoutException extends Exception {\n    public NetworkTimeoutException(String msg) { super(msg); }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\n\nclass NetworkTimeoutException extends Exception {\n    public NetworkTimeoutException(String msg) { super(msg); }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String errorType = sc.next();\n        int amount = sc.nextInt();\n        int point = sc.nextInt();\n\n        System.out.println(\"=== 결제 게이트웨이 복구 엔진 ===\");\n        System.out.printf(\"주문 금액: %,d원 | 사용 포인트: %,d원\\n\", amount, point);\n\n        int maxRetries = 3;\n        boolean paymentSuccess = false;\n\n        for (int attempt = 1; attempt <= maxRetries; attempt++) {\n            try {\n                if (\"PG_TIMEOUT\".equals(errorType)) {\n                    throw new NetworkTimeoutException(\"PG사 응답 시간 초과\");\n                }\n                paymentSuccess = true;\n                break;\n            } catch (NetworkTimeoutException e) {\n                if (attempt < maxRetries) {\n                    System.out.printf(\"[%d차 시도 실패] NetworkTimeoutException 감지 -> %d회차 재시도...\\n\", attempt, attempt);\n                } else {\n                    System.out.printf(\"[%d차 시도 실패] NetworkTimeoutException 감지 -> 재시도 한도 초과!\\n\", attempt);\n                }\n            }\n        }\n\n        System.out.println(\"---------------------------------\");\n        if (!paymentSuccess) {\n            System.out.printf(\"[보상 트랜잭션 가동] 결제 실패로 사용된 포인트 %,dP를 원상 복구합니다.\\n\", point);\n            System.out.println(\"최종 결제 결과: 트랜잭션 롤백 완료\");\n        } else {\n            System.out.println(\"최종 결제 결과: 결제 정상 승인 완료\");\n        }\n    }\n}",
        "sample_input": "PG_TIMEOUT 50000 5000",
        "sample_output": "=== 결제 게이트웨이 복구 엔진 ===\n주문 금액: 50,000원 | 사용 포인트: 5,000원\n[1차 시도 실패] NetworkTimeoutException 감지 -> 1회차 재시도...\n[2차 시도 실패] NetworkTimeoutException 감지 -> 2회차 재시도...\n[3차 시도 실패] NetworkTimeoutException 감지 -> 재시도 한도 초과!\n---------------------------------\n[보상 트랜잭션 가동] 결제 실패로 사용된 포인트 5,000P를 원상 복구합니다.\n최종 결제 결과: 트랜잭션 롤백 완료",
        "expected": "=== 결제 게이트웨이 복구 엔진 ===\n주문 금액: 50,000원 | 사용 포인트: 5,000원\n[1차 시도 실패] NetworkTimeoutException 감지 -> 1회차 재시도...\n[2차 시도 실패] NetworkTimeoutException 감지 -> 2회차 재시도...\n[3차 시도 실패] NetworkTimeoutException 감지 -> 재시도 한도 초과!\n---------------------------------\n[보상 트랜잭션 가동] 결제 실패로 사용된 포인트 5,000P를 원상 복구합니다.\n최종 결제 결과: 트랜잭션 롤백 완료",
        "hint": "1. 실무 금융/이커머스 결제 아키텍처의 필수 패턴인 '재시도(Retry)'와 '보상 트랜잭션(Saga Compensating Transaction)' 모델입니다.\n2. for 루프 내부에서 try-catch를 감싸 일시적 예외 발생 시 회차를 증가시키며 재시도합니다.\n3. 최종 실패 시에는 이미 차감된 포인트를 되돌려주는 롤백 로직을 안전하게 실행합니다."
    },
    {
        "id": "day07_하1",
        "day": 7,
        "subject": "Java",
        "difficulty": "하",
        "title": "ArrayList 단어 필터링 및 사전순 정렬 (WordLengthFilter)",
        "desc": "단어의 개수 N과 N개의 영단어, 그리고 필터링 기준 길이 K를 입력받으세요.\n- `ArrayList<String>`에 모든 단어를 저장한 후, 길이가 K 이상인 단어들만 선별하여 새 리스트에 담습니다.\n- 선별된 단어 목록을 사전순(오름차순)으로 정렬하여 출력하고, 추출된 단어 개수를 출력하세요.\n\n[입력]\n첫째 줄: 단어 수 N\n둘째 줄: N개의 단어가 공백으로 구분\n셋째 줄: 기준 길이 K\n(예:\n6\napple banana cat elephant dog grape\n5)",
        "template": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        ArrayList<String> originalList = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            originalList.add(sc.next());\n        }\n        int k = sc.nextInt();\n\n        ArrayList<String> filteredList = new ArrayList<>();\n        for (String word : originalList) {\n            if (word.length() >= k) {\n                filteredList.add(word);\n            }\n        }\n\n        Collections.sort(filteredList);\n\n        System.out.println(\"=== 단어 필터링 및 정렬 결과 ===\");\n        System.out.printf(\"입력 단어 수: %d개 (필터 기준: %d자 이상)\\n\", n, k);\n        System.out.printf(\"필터링 및 정렬된 단어: %s\\n\", filteredList);\n        System.out.printf(\"추출된 단어 수: %d개\\n\", filteredList.size());\n    }\n}",
        "sample_input": "6\napple banana cat elephant dog grape\n5",
        "sample_output": "=== 단어 필터링 및 정렬 결과 ===\n입력 단어 수: 6개 (필터 기준: 5자 이상)\n필터링 및 정렬된 단어: [apple, banana, elephant, grape]\n추출된 단어 수: 4개",
        "expected": "=== 단어 필터링 및 정렬 결과 ===\n입력 단어 수: 6개 (필터 기준: 5자 이상)\n필터링 및 정렬된 단어: [apple, banana, elephant, grape]\n추출된 단어 수: 4개",
        "hint": "1. `ArrayList<String> list = new ArrayList<>();`를 생성하고 `list.add(...)`로 요소를 추가합니다.\n2. `word.length() >= k` 조건을 만족하는 단어만 새 리스트에 담습니다.\n3. `Collections.sort(filteredList);`를 호출하면 알파벳 오름차순으로 자동 정렬됩니다."
    },
    {
        "id": "day07_중1",
        "day": 7,
        "subject": "Java",
        "difficulty": "중",
        "title": "TreeSet 로또 번호 중복 제거 및 자동 정렬 (LottoSetManager)",
        "desc": "추첨기에서 뽑힌 10개의 정수 번호를 입력받아 `TreeSet<Integer>`에 저장하세요.\n- `TreeSet`의 중복 자동 제거 및 오름차순 정렬 특성을 활용합니다.\n- 입력된 총 번호 개수(10개), 중복이 제거된 고유 번호 목록, 고유 번호 수, 중복으로 탈락한 번호 수, 최소 번호(`first()`)와 최대 번호(`last()`)를 산출하세요.\n\n[입력]\n10개의 정수가 공백으로 주어집니다.\n(예: 7 14 21 7 35 42 14 1 21 9)",
        "template": "import java.util.Scanner;\nimport java.util.TreeSet;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\nimport java.util.TreeSet;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        TreeSet<Integer> numberSet = new TreeSet<>();\n        int totalInputCount = 10;\n\n        for (int i = 0; i < totalInputCount; i++) {\n            numberSet.add(sc.nextInt());\n        }\n\n        int uniqueCount = numberSet.size();\n        int duplicateCount = totalInputCount - uniqueCount;\n\n        System.out.println(\"=== 행운의 로또 번호 추출기 (Set) ===\");\n        System.out.printf(\"입력된 번호 개수: %d개\\n\", totalInputCount);\n        System.out.printf(\"중복 제거된 고유 번호: %s\\n\", numberSet);\n        System.out.printf(\"고유 번호 수: %d개 (중복 탈락: %d개)\\n\", uniqueCount, duplicateCount);\n        System.out.printf(\"최소 번호: %d | 최대 번호: %d\\n\", numberSet.first(), numberSet.last());\n    }\n}",
        "sample_input": "7 14 21 7 35 42 14 1 21 9",
        "sample_output": "=== 행운의 로또 번호 추출기 (Set) ===\n입력된 번호 개수: 10개\n중복 제거된 고유 번호: [1, 7, 9, 14, 21, 35, 42]\n고유 번호 수: 7개 (중복 탈락: 3개)\n최소 번호: 1 | 최대 번호: 42",
        "expected": "=== 행운의 로또 번호 추출기 (Set) ===\n입력된 번호 개수: 10개\n중복 제거된 고유 번호: [1, 7, 9, 14, 21, 35, 42]\n고유 번호 수: 7개 (중복 탈락: 3개)\n최소 번호: 1 | 최대 번호: 42",
        "hint": "1. `Set` 인터페이스는 중복된 값을 허용하지 않는 컬렉션입니다.\n2. 그 중 `TreeSet`은 이진 탐색 트리 기반으로 요소를 자동으로 오름차순 정렬해줍니다.\n3. `numberSet.first()`는 가장 작은 값, `numberSet.last()`는 가장 큰 값을 반환합니다."
    },
    {
        "id": "day07_중2",
        "day": 7,
        "subject": "Java",
        "difficulty": "중",
        "title": "HashMap 학생 성적부 관리 및 최고 득점자 탐색 (StudentScoreMap)",
        "desc": "학생 수 N과 N명의 학생 이름 및 시험 점수를 입력받아 `LinkedHashMap<String, Integer>`에 입력 순서대로 저장하세요.\n- 등록된 전체 학생의 명단과 점수를 한 줄씩 출력하세요.\n- 학급 전체 평균 점수(소수점 둘째 자리)와 최고 득점자의 이름 및 점수를 찾아 출력하세요. (동점자 발생 시 먼저 입력된 학생 기준)\n\n[입력]\n첫째 줄: 학생 수 N\n둘째 줄부터 N개 줄: 학생이름 점수\n(예:\n4\n김철수 88\n이영희 95\n박민수 78\n최동호 92)",
        "template": "import java.util.Scanner;\nimport java.util.LinkedHashMap;\nimport java.util.Map;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\nimport java.util.LinkedHashMap;\nimport java.util.Map;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        LinkedHashMap<String, Integer> scoreMap = new LinkedHashMap<>();\n\n        for (int i = 0; i < n; i++) {\n            String name = sc.next();\n            int score = sc.nextInt();\n            scoreMap.put(name, score);\n        }\n\n        System.out.println(\"=== 학급 성적부 관리 시스템 (Map) ===\");\n        System.out.printf(\"등록 학생 수: %d명\\n\", n);\n\n        int total = 0;\n        int maxScore = -1;\n        String topStudent = \"\";\n\n        for (Map.Entry<String, Integer> entry : scoreMap.entrySet()) {\n            String name = entry.getKey();\n            int score = entry.getValue();\n            System.out.printf(\"- %s: %d점\\n\", name, score);\n            total += score;\n            if (score > maxScore) {\n                maxScore = score;\n                topStudent = name;\n            }\n        }\n\n        double avg = (double) total / n;\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"학급 평균 점수: %.2f점\\n\", avg);\n        System.out.printf(\"최고 득점자: %s (%d점)\\n\", topStudent, maxScore);\n    }\n}",
        "sample_input": "4\n김철수 88\n이영희 95\n박민수 78\n최동호 92",
        "sample_output": "=== 학급 성적부 관리 시스템 (Map) ===\n등록 학생 수: 4명\n- 김철수: 88점\n- 이영희: 95점\n- 박민수: 78점\n- 최동호: 92점\n---------------------------------\n학급 평균 점수: 88.25점\n최고 득점자: 이영희 (95점)",
        "expected": "=== 학급 성적부 관리 시스템 (Map) ===\n등록 학생 수: 4명\n- 김철수: 88점\n- 이영희: 95점\n- 박민수: 78점\n- 최동호: 92점\n---------------------------------\n학급 평균 점수: 88.25점\n최고 득점자: 이영희 (95점)",
        "hint": "1. `LinkedHashMap`을 사용하면 키-값 쌍을 저장하면서 입력 순서를 보장받을 수 있습니다.\n2. `scoreMap.entrySet()`을 for-each로 순회하며 `entry.getKey()`, `entry.getValue()`를 추출합니다.\n3. 순회하면서 합계와 최댓값을 갱신하여 평균과 1등 학생을 찾습니다."
    },
    {
        "id": "day07_상",
        "day": 7,
        "subject": "Java",
        "difficulty": "상",
        "title": "Stream API와 람다식을 활용한 상품 결제 분석기 (ProductStreamPipeline)",
        "desc": "등록 상품 수 N과 N개의 상품 정보(상품명, 카테고리, 가격)를 입력받으세요.\n- 자바 8+ Stream API와 람다식을 활용하여 다음 통계를 산출하세요:\n  1) 카테고리가 '전자기기'인 상품들의 목록을 필터링(`filter`)\n  2) 전자기기 카테고리 상품 수, 총 금액 합계(`mapToInt(p -> p.price).sum()`), 평균 단가(`average()`, 소수점 둘째 자리)\n  3) 전체 상품 중 가격이 50,000원 이상인 프리미엄 상품의 개수 카운트(`filter(p -> p.price >= 50000).count()`)\n\n[입력]\n첫째 줄: 상품 수 N\n둘째 줄부터 N개 줄: 상품명 카테고리 가격\n(예:\n5\n노트북 전자기기 1200000\n자바책 도서 32000\n마우스 전자기기 45000\n스프링책 도서 38000\n키보드 전자기기 89000)",
        "template": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Product {\n    String name;\n    String category;\n    int price;\n\n    public Product(String name, String category, int price) {\n        this.name = name;\n        this.category = category;\n        this.price = price;\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 Stream API를 활용하여 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Product {\n    String name;\n    String category;\n    int price;\n\n    public Product(String name, String category, int price) {\n        this.name = name;\n        this.category = category;\n        this.price = price;\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Product> products = new ArrayList<>();\n\n        for (int i = 0; i < n; i++) {\n            products.add(new Product(sc.next(), sc.next(), sc.nextInt()));\n        }\n\n        System.out.println(\"=== Stream API 상품 데이터 분석 보고서 ===\");\n        System.out.printf(\"전체 상품 수: %d개\\n\", n);\n        System.out.println(\"---------------------------------\");\n\n        List<Product> electroList = products.stream()\n                .filter(p -> \"전자기기\".equals(p.category))\n                .toList();\n\n        int electroSum = electroList.stream()\n                .mapToInt(p -> p.price)\n                .sum();\n\n        double electroAvg = electroList.stream()\n                .mapToInt(p -> p.price)\n                .average()\n                .orElse(0.0);\n\n        System.out.println(\"[전자기기 카테고리 분석]\");\n        System.out.printf(\"- 해당 상품 수: %d개\\n\", electroList.size());\n        System.out.printf(\"- 총 금액 합계: %,d원\\n\", electroSum);\n        System.out.printf(\"- 평균 단가: %,.2f원\\n\", electroAvg);\n        System.out.println(\"---------------------------------\");\n\n        long premiumCount = products.stream()\n                .filter(p -> p.price >= 50000)\n                .count();\n\n        System.out.printf(\"[50,000원 이상 프리미엄 상품 수]: %d개\\n\", premiumCount);\n    }\n}",
        "sample_input": "5\n노트북 전자기기 1200000\n자바책 도서 32000\n마우스 전자기기 45000\n스프링책 도서 38000\n키보드 전자기기 89000",
        "sample_output": "=== Stream API 상품 데이터 분석 보고서 ===\n전체 상품 수: 5개\n---------------------------------\n[전자기기 카테고리 분석]\n- 해당 상품 수: 3개\n- 총 금액 합계: 1,334,000원\n- 평균 단가: 444,666.67원\n---------------------------------\n[50,000원 이상 프리미엄 상품 수]: 2개",
        "expected": "=== Stream API 상품 데이터 분석 보고서 ===\n전체 상품 수: 5개\n---------------------------------\n[전자기기 카테고리 분석]\n- 해당 상품 수: 3개\n- 총 금액 합계: 1,334,000원\n- 평균 단가: 444,666.67원\n---------------------------------\n[50,000원 이상 프리미엄 상품 수]: 2개",
        "hint": "1. `products.stream().filter(p -> \"전자기기\".equals(p.category)).toList()`로 특정 조건 객체만 수집합니다.\n2. `mapToInt(p -> p.price)`로 기본형 IntStream으로 변환 후 `.sum()` 또는 `.average()`를 호출합니다.\n3. `.filter(p -> p.price >= 50000).count()`로 조건에 일치하는 요소의 개수를 빠르게 집계합니다."
    },
    {
        "id": "day07_도전",
        "day": 7,
        "subject": "Java",
        "difficulty": "도전",
        "title": "대용량 로그 스트림 파이프라인 및 복합 그룹핑 집계 (LogStreamAnalyzer)",
        "desc": "웹 서버 접속 로그 N건(HTTP 상태코드, 엔드포인트 URL, 응답시간 ms)을 입력받아 Stream API만으로 다음을 산출하세요.\n- 1) 4xx/5xx 에러 응답(상태코드 >= 400)의 개수 및 에러율(%)\n- 2) 가장 많이 호출된 상위 엔드포인트 Top 1과 호출 횟수\n- 3) 정상 응답(200번대)의 평균 응답 시간(ms, 소수점 둘째 자리)\n\n[입력]\n첫째 줄: 로그 건수 N\n둘째 줄부터 N개 줄: 상태코드 URL 응답시간\n(예:\n6\n200 /api/login 45\n200 /api/products 120\n404 /favicon.ico 10\n500 /api/checkout 350\n200 /api/products 85\n200 /api/products 95)",
        "template": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\nclass LogEntry {\n    int status;\n    String url;\n    int duration;\n    public LogEntry(int status, String url, int duration) {\n        this.status = status;\n        this.url = url;\n        this.duration = duration;\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 Stream API를 활용하여 작성하세요\n        \n    }\n}",
        "solution": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\nclass LogEntry {\n    int status;\n    String url;\n    int duration;\n\n    public LogEntry(int status, String url, int duration) {\n        this.status = status;\n        this.url = url;\n        this.duration = duration;\n    }\n}\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<LogEntry> logs = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            logs.add(new LogEntry(sc.nextInt(), sc.next(), sc.nextInt()));\n        }\n\n        long errorCount = logs.stream()\n                .filter(l -> l.status >= 400)\n                .count();\n\n        long successCount = n - errorCount;\n        double errorRate = ((double) errorCount / n) * 100;\n\n        Map<String, Long> urlCounts = logs.stream()\n                .collect(Collectors.groupingBy(l -> l.url, Collectors.counting()));\n\n        Map.Entry<String, Long> topUrl = urlCounts.entrySet().stream()\n                .max(Map.Entry.comparingByValue())\n                .orElse(null);\n\n        double avgSuccessDuration = logs.stream()\n                .filter(l -> l.status >= 200 && l.status < 300)\n                .mapToInt(l -> l.duration)\n                .average()\n                .orElse(0.0);\n\n        System.out.println(\"=== 서버 접속 로그 스트림 분석 보고서 ===\");\n        System.out.printf(\"총 수집 로그: %d건\\n\", n);\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"[응답 상태 분석] 정상(2xx): %d건 | 에러(4xx/5xx): %d건 (에러율: %.1f%%)\\n\",\n                successCount, errorCount, errorRate);\n        if (topUrl != null) {\n            System.out.printf(\"[최다 호출 엔드포인트] %s (%d회 호출)\\n\", topUrl.getKey(), topUrl.getValue());\n        }\n        System.out.printf(\"[정상 응답 평균 처리시간] %.2fms\\n\", avgSuccessDuration);\n    }\n}",
        "sample_input": "6\n200 /api/login 45\n200 /api/products 120\n404 /favicon.ico 10\n500 /api/checkout 350\n200 /api/products 85\n200 /api/products 95",
        "sample_output": "=== 서버 접속 로그 스트림 분석 보고서 ===\n총 수집 로그: 6건\n---------------------------------\n[응답 상태 분석] 정상(2xx): 4건 | 에러(4xx/5xx): 2건 (에러율: 33.3%)\n[최다 호출 엔드포인트] /api/products (3회 호출)\n[정상 응답 평균 처리시간] 86.25ms",
        "expected": "=== 서버 접속 로그 스트림 분석 보고서 ===\n총 수집 로그: 6건\n---------------------------------\n[응답 상태 분석] 정상(2xx): 4건 | 에러(4xx/5xx): 2건 (에러율: 33.3%)\n[최다 호출 엔드포인트] /api/products (3회 호출)\n[정상 응답 평균 처리시간] 86.25ms",
        "hint": "1. `Collectors.groupingBy(l -> l.url, Collectors.counting())`으로 URL별 호출 빈도 Map을 원라인으로 생성합니다.\n2. `urlCounts.entrySet().stream().max(Map.Entry.comparingByValue())`로 가장 빈도가 높은 엔트리를 찾습니다.\n3. `filter(l -> l.status >= 200 && l.status < 300).mapToInt(l -> l.duration).average()`로 평균을 구합니다."
    },
    {
        "id": "day08_하1",
        "day": 8,
        "subject": "MySQL",
        "difficulty": "하",
        "title": "영업직(SALESMAN) 사원 기본 인적사항 조회",
        "desc": "`EMP` 테이블에서 담당 업무(`JOB`)가 `'SALESMAN'`인 사원들의 사원번호(`EMPNO`), 이름(`ENAME`), 기본급(`SAL`), 커미션(`COMM`)을 조회하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT EMPNO, ENAME, SAL, COMM\nFROM EMP\nWHERE JOB = 'SALESMAN';",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME  | SAL  | COMM\n------+--------+------+------\n 7499 | ALLEN  | 1600 |  300\n 7521 | WARD   | 1250 |  500\n 7654 | MARTIN | 1250 | 1400\n 7844 | TURNER | 1500 |    0",
        "expected": "EMPNO | ENAME  | SAL  | COMM\n------+--------+------+------\n 7499 | ALLEN  | 1600 |  300\n 7521 | WARD   | 1250 |  500\n 7654 | MARTIN | 1250 | 1400\n 7844 | TURNER | 1500 |    0",
        "hint": "1. `SELECT 컬럼1, 컬럼2 ... FROM 테이블명;` 기본 문법을 사용합니다.\n2. 특정 조건을 필터링할 때는 `WHERE JOB = 'SALESMAN'` 절을 추가합니다.\n3. 문자열 값은 반드시 작은따옴표(' ')로 감싸야 합니다."
    },
    {
        "id": "day08_하2",
        "day": 8,
        "subject": "MySQL",
        "difficulty": "하",
        "title": "급여 2,000 이상 3,000 이하 사원 오름차순 조회",
        "desc": "`EMP` 테이블에서 급여(`SAL`)가 2,000 이상 3,000 이하인 사원의 사원번호(`EMPNO`), 이름(`ENAME`), 직무(`JOB`), 급여(`SAL`)를 조회하세요. 결과는 급여(`SAL`) 기준 오름차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT EMPNO, ENAME, JOB, SAL\nFROM EMP\nWHERE SAL BETWEEN 2000 AND 3000\nORDER BY SAL ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME  | JOB       | SAL\n------+--------+-----------+------\n 7782 | CLARK  | MANAGER   | 2450\n 7698 | BLAKE  | MANAGER   | 2850\n 7566 | JONES  | MANAGER   | 2975\n 7788 | SCOTT  | ANALYST   | 3000\n 7902 | FORD   | ANALYST   | 3000",
        "expected": "EMPNO | ENAME  | JOB       | SAL\n------+--------+-----------+------\n 7782 | CLARK  | MANAGER   | 2450\n 7698 | BLAKE  | MANAGER   | 2850\n 7566 | JONES  | MANAGER   | 2975\n 7788 | SCOTT  | ANALYST   | 3000\n 7902 | FORD   | ANALYST   | 3000",
        "hint": "1. 특정 범위의 값을 비교할 때는 `BETWEEN A AND B` 연산자를 사용합니다.\n2. `WHERE SAL >= 2000 AND SAL <= 3000` 과 동일한 결과를 냅니다.\n3. 오름차순 정렬은 `ORDER BY SAL ASC` (ASC는 생략 가능)를 작성합니다."
    },
    {
        "id": "day08_중1",
        "day": 8,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "핵심 연구/영업 부서 고액 연봉자 다중 정렬 조회",
        "desc": "부서 번호(`DEPTNO`)가 20번(RESEARCH) 또는 30번(SALES)이고, 급여(`SAL`)가 1,500 이상인 사원의 사원번호, 이름, 부서번호, 급여를 조회하세요. 결과는 급여가 높은 순(내림차순)으로 정렬하고, 급여가 동일할 경우 이름 오름차순(A-Z)으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT EMPNO, ENAME, DEPTNO, SAL\nFROM EMP\nWHERE DEPTNO IN (20, 30) AND SAL >= 1500\nORDER BY SAL DESC, ENAME ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME  | DEPTNO | SAL\n------+--------+--------+------\n 7902 | FORD   |     20 | 3000\n 7788 | SCOTT  |     20 | 3000\n 7566 | JONES  |     20 | 2975\n 7698 | BLAKE  |     30 | 2850\n 7499 | ALLEN  |     30 | 1600\n 7844 | TURNER |     30 | 1500",
        "expected": "EMPNO | ENAME  | DEPTNO | SAL\n------+--------+--------+------\n 7902 | FORD   |     20 | 3000\n 7788 | SCOTT  |     20 | 3000\n 7566 | JONES  |     20 | 2975\n 7698 | BLAKE  |     30 | 2850\n 7499 | ALLEN  |     30 | 1600\n 7844 | TURNER |     30 | 1500",
        "hint": "1. 여러 개의 값 중 하나와 일치하는 조건은 `IN (값1, 값2)` 연산자를 활용합니다.\n2. 여러 정렬 기준은 `ORDER BY 1차기준 DESC, 2차기준 ASC` 형태로 쉼표로 나열합니다."
    },
    {
        "id": "day08_중2",
        "day": 8,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "이름 패턴 검색 및 직속 상사(MGR) 부재자 조회",
        "desc": "이름(`ENAME`)에 알파벳 `'A'`가 포함되어 있거나, 최고 관리자여서 직속 상사 번호(`MGR`)가 없는(`IS NULL`) 사원의 사원번호, 이름, 직무, 상사번호를 조회하세요. 결과는 사원번호 오름차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT EMPNO, ENAME, JOB, MGR\nFROM EMP\nWHERE ENAME LIKE '%A%' OR MGR IS NULL\nORDER BY EMPNO ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME  | JOB       | MGR\n------+--------+-----------+------\n 7499 | ALLEN  | SALESMAN  | 7698\n 7521 | WARD   | SALESMAN  | 7698\n 7654 | MARTIN | SALESMAN  | 7698\n 7698 | BLAKE  | MANAGER   | 7839\n 7782 | CLARK  | MANAGER   | 7839\n 7839 | KING   | PRESIDENT | NULL\n 7900 | JAMES  | CLERK     | 7698",
        "expected": "EMPNO | ENAME  | JOB       | MGR\n------+--------+-----------+------\n 7499 | ALLEN  | SALESMAN  | 7698\n 7521 | WARD   | SALESMAN  | 7698\n 7654 | MARTIN | SALESMAN  | 7698\n 7698 | BLAKE  | MANAGER   | 7839\n 7782 | CLARK  | MANAGER   | 7839\n 7839 | KING   | PRESIDENT | NULL\n 7900 | JAMES  | CLERK     | 7698",
        "hint": "1. 부분 문자열 검색은 `LIKE '%A%'` 패턴을 사용합니다. (%는 0개 이상의 모든 문자)\n2. NULL 값을 비교할 때는 `= NULL`이 아니라 반드시 `IS NULL` 연산자를 사용해야 합니다."
    },
    {
        "id": "day08_상",
        "day": 8,
        "subject": "MySQL",
        "difficulty": "상",
        "title": "유효 인센티브 수령자의 총 보상 산출 및 랭킹 조회",
        "desc": "커미션(`COMM`)이 `NULL`이 아니고 0보다 큰 사원 중, 기본급과 커미션을 합산한 총 보상액(`TOTAL_COMP`)이 2,000 이상인 사원을 탐색하여 사원번호, 이름, 기본급, 커미션, 총 보상액을 총 보상액 기준 내림차순 정렬 조회하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT EMPNO, ENAME, SAL, COMM, (SAL + COMM) AS TOTAL_COMP\nFROM EMP\nWHERE COMM IS NOT NULL AND COMM > 0 AND (SAL + COMM) >= 2000\nORDER BY TOTAL_COMP DESC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME  | SAL  | COMM | TOTAL_COMP\n------+--------+------+------+-----------\n 7654 | MARTIN | 1250 | 1400 |       2650\n 7499 | ALLEN  | 1600 |  300 |       1900 -> 2000 이상만 필터",
        "expected": "EMPNO | ENAME  | SAL  | COMM | TOTAL_COMP\n------+--------+------+------+-----------\n 7654 | MARTIN | 1250 | 1400 |       2650",
        "hint": "1. 데이터베이스에서 NULL과의 산술 연산 결과는 항상 NULL이 되므로 `COMM IS NOT NULL` 조건이 중요합니다.\n2. 수식 계산 컬럼에 `AS TOTAL_COMP` 별칭(Alias)을 부여할 수 있습니다.\n3. WHERE 절에서는 SELECT 절의 별칭을 직접 사용할 수 없으므로 `(SAL + COMM) >= 2000` 수식을 직접 조건식에 작성합니다."
    },
    {
        "id": "day08_도전",
        "day": 8,
        "subject": "MySQL",
        "difficulty": "도전",
        "title": "윈도우 함수 기반 전사 급여 랭킹 및 누적 급여 합계 집계 (DENSE_RANK & 누적합)",
        "desc": "윈도우 함수(`OVER()`)를 활용하여 전사 모든 사원의 사원번호(`EMPNO`), 이름(`ENAME`), 급여(`SAL`), 전사 급여 순위(`SAL_RANK`), 그리고 급여가 높은 사원부터 현재 사원까지의 누적 급여 합계(`CUMULATIVE_SAL`)를 조회하세요.\n- 순위는 동점자가 있을 때 순위를 건너뛰지 않는 `DENSE_RANK() OVER (ORDER BY SAL DESC)`를 사용하세요.\n- 누적 합계는 `SUM(SAL) OVER (ORDER BY SAL DESC, EMPNO ASC)`를 사용하세요.",
        "template": "-- 윈도우 함수를 활용한 고급 랭킹 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT \n    EMPNO, \n    ENAME, \n    SAL,\n    DENSE_RANK() OVER (ORDER BY SAL DESC) AS SAL_RANK,\n    SUM(SAL) OVER (ORDER BY SAL DESC, EMPNO ASC) AS CUMULATIVE_SAL\nFROM EMP\nORDER BY SAL_RANK ASC, EMPNO ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME  | SAL  | SAL_RANK | CUMULATIVE_SAL\n------+--------+------+----------+---------------\n 7839 | KING   | 5000 |        1 |           5000\n 7788 | SCOTT  | 3000 |        2 |           8000\n 7902 | FORD   | 3000 |        2 |          11000\n 7566 | JONES  | 2975 |        3 |          13975\n ...",
        "expected": "EMPNO | ENAME  | SAL  | SAL_RANK | CUMULATIVE_SAL\n------+--------+------+----------+---------------\n 7839 | KING   | 5000 |        1 |           5000\n 7788 | SCOTT  | 3000 |        2 |           8000\n 7902 | FORD   | 3000 |        2 |          11000\n 7566 | JONES  | 2975 |        3 |          13975\n ...",
        "hint": "1. MySQL 8.0+ 윈도우 함수는 GROUP BY 없이도 행별 집계 및 순위를 계산합니다.\n2. `DENSE_RANK() OVER (ORDER BY SAL DESC)`는 1등, 2등, 2등, 3등 순으로 순위를 매깁니다.\n3. `SUM(SAL) OVER (ORDER BY SAL DESC, EMPNO ASC)`는 순서대로 급여를 누적 집계합니다."
    },
    {
        "id": "day09_하1",
        "day": 9,
        "subject": "MySQL",
        "difficulty": "하",
        "title": "직무별 인원 수 및 평균 급여 집계",
        "desc": "`EMP` 테이블에서 각 담당 업무(`JOB`)별로 사원 수(`EMP_COUNT`)와 평균 급여(`AVG_SAL`)를 집계하세요. 단, 평균 급여는 `ROUND()` 함수를 사용하여 소수점 첫째 자리까지 반올림하고, 직무명 오름차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT JOB, COUNT(*) AS EMP_COUNT, ROUND(AVG(SAL), 1) AS AVG_SAL\nFROM EMP\nGROUP BY JOB\nORDER BY JOB ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "JOB       | EMP_COUNT | AVG_SAL\n----------+-----------+--------\nANALYST   |         2 |  3000.0\nCLERK     |         4 |  1037.5\nMANAGER   |         3 |  2758.3\nPRESIDENT |         1 |  5000.0\nSALESMAN  |         4 |  1400.0",
        "expected": "JOB       | EMP_COUNT | AVG_SAL\n----------+-----------+--------\nANALYST   |         2 |  3000.0\nCLERK     |         4 |  1037.5\nMANAGER   |         3 |  2758.3\nPRESIDENT |         1 |  5000.0\nSALESMAN  |         4 |  1400.0",
        "hint": "1. `GROUP BY 컬럼명`으로 특정 컬럼 기준 행들을 묶습니다.\n2. 행 개수는 `COUNT(*)`, 평균은 `AVG(컬럼)` 함수를 사용합니다.\n3. `ROUND(수식, 1)`을 지정하면 소수점 첫째 자리까지 반올림됩니다."
    },
    {
        "id": "day09_중1",
        "day": 9,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "부서별 고액 총급여 부서 추출 및 급여 통계",
        "desc": "부서별(`DEPTNO`)로 총 급여 합계(`SUM(SAL)`)가 5,000 이상인 부서만을 선별하여, 부서번호, 소속 인원 수(`CNT`), 최고 급여(`MAX_SAL`), 최저 급여(`MIN_SAL`), 총 급여(`TOTAL_SAL`)를 조회하세요. 결과는 총 급여 내림차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT DEPTNO, COUNT(*) AS CNT, MAX(SAL) AS MAX_SAL, MIN(SAL) AS MIN_SAL, SUM(SAL) AS TOTAL_SAL\nFROM EMP\nGROUP BY DEPTNO\nHAVING SUM(SAL) >= 5000\nORDER BY TOTAL_SAL DESC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "DEPTNO | CNT | MAX_SAL | MIN_SAL | TOTAL_SAL\n-------+-----+---------+---------+----------\n    20 |   5 |    3000 |     800 |     10875\n    30 |   6 |    2850 |     950 |      9400\n    10 |   3 |    5000 |    1300 |      8750",
        "expected": "DEPTNO | CNT | MAX_SAL | MIN_SAL | TOTAL_SAL\n-------+-----+---------+---------+----------\n    20 |   5 |    3000 |     800 |     10875\n    30 |   6 |    2850 |     950 |      9400\n    10 |   3 |    5000 |    1300 |      8750",
        "hint": "1. 집계 함수 결과에 대한 필터링 조건은 `WHERE`가 아닌 `HAVING` 절에 작성해야 합니다.\n2. `GROUP BY DEPTNO` 뒤에 `HAVING SUM(SAL) >= 5000`을 명시합니다."
    },
    {
        "id": "day09_중2",
        "day": 9,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "입사 연도별 신규 채용 사원 수 및 최고 급여 분석",
        "desc": "사원들의 입사일(`HIREDATE`)에서 연도를 추출(`YEAR(HIREDATE)`)하여, 연도별 입사 사원 수(`HIRE_COUNT`)와 해당 연도 입사자 중 최고 급여(`MAX_SAL`)를 집계하세요. 연도 오름차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT YEAR(HIREDATE) AS HIRE_YEAR, COUNT(*) AS HIRE_COUNT, MAX(SAL) AS MAX_SAL\nFROM EMP\nGROUP BY YEAR(HIREDATE)\nORDER BY HIRE_YEAR ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "HIRE_YEAR | HIRE_COUNT | MAX_SAL\n----------+------------+--------\n     1980 |          1 |     800\n     1981 |         10 |    5000\n     1982 |          2 |    3000\n     1987 |          1 |    3000",
        "expected": "HIRE_YEAR | HIRE_COUNT | MAX_SAL\n----------+------------+--------\n     1980 |          1 |     800\n     1981 |         10 |    5000\n     1982 |          2 |    3000\n     1987 |          1 |    3000",
        "hint": "1. 날짜 데이터에서 연도만 추출하려면 `YEAR(날짜컬럼)` 함수를 사용합니다.\n2. 추출한 연도 기준으로 `GROUP BY YEAR(HIREDATE)`를 수행합니다."
    },
    {
        "id": "day09_상",
        "day": 9,
        "subject": "MySQL",
        "difficulty": "상",
        "title": "WHERE와 HAVING 복합 필터를 적용한 핵심 직무 급여 분석",
        "desc": "1. 직무가 `'PRESIDENT'`가 아니고, 개별 기본급(`SAL`)이 1,000 이상인 사원들만을 사전 필터링합니다.\n2. 직무별로 그룹화한 뒤, 평균 급여(`AVG_SAL`)가 2,000 이상인 직무만 선별하세요.\n3. 직무명, 사원 수(`CNT`), 평균 급여(소수점 1자리 반올림), 총 급여를 평균 급여 내림차순으로 정렬하여 조회하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT JOB, COUNT(*) AS CNT, ROUND(AVG(SAL), 1) AS AVG_SAL, SUM(SAL) AS TOTAL_SAL\nFROM EMP\nWHERE JOB != 'PRESIDENT' AND SAL >= 1000\nGROUP BY JOB\nHAVING AVG(SAL) >= 2000\nORDER BY AVG_SAL DESC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "JOB     | CNT | AVG_SAL | TOTAL_SAL\n--------+-----+---------+----------\nANALYST |   2 |  3000.0 |      6000\nMANAGER |   3 |  2758.3 |      8275",
        "expected": "JOB     | CNT | AVG_SAL | TOTAL_SAL\n--------+-----+---------+----------\nANALYST |   2 |  3000.0 |      6000\nMANAGER |   3 |  2758.3 |      8275",
        "hint": "1. 개별 행 필터링은 `WHERE` 절에, 그룹 집계 후 필터링은 `HAVING` 절에 분리하여 배치합니다.\n2. `WHERE JOB != 'PRESIDENT' AND SAL >= 1000`\n3. `HAVING AVG(SAL) >= 2000` 순서로 작성합니다."
    },
    {
        "id": "day09_도전",
        "day": 9,
        "subject": "MySQL",
        "difficulty": "도전",
        "title": "CASE WHEN 기반 부서별 직무 배치 인원수 교차 피벗(PIVOT) 집계",
        "desc": "데이터 분석 및 리포팅에서 널리 쓰이는 SQL 피벗(Cross Tabulation) 기법을 사용하여, 부서번호(`DEPTNO`)별로 5개 직무(`CLERK`, `SALESMAN`, `MANAGER`, `ANALYST`, `PRESIDENT`)에 속한 인원 수와 부서 총 사원 수(`TOTAL_COUNT`)를 한 행에 가로로 펼쳐 출력하세요.\n- `CASE WHEN JOB = 'CLERK' THEN 1 ELSE 0 END`와 `SUM()` 함수를 조합하세요.\n- 결과는 부서번호 오름차순으로 정렬하세요.",
        "template": "-- 피벗 집계 쿼리를 작성하세요\nSELECT DEPTNO FROM EMP GROUP BY DEPTNO;",
        "solution": "SELECT \n    DEPTNO,\n    SUM(CASE WHEN JOB = 'CLERK' THEN 1 ELSE 0 END) AS CLERK_CNT,\n    SUM(CASE WHEN JOB = 'SALESMAN' THEN 1 ELSE 0 END) AS SALESMAN_CNT,\n    SUM(CASE WHEN JOB = 'MANAGER' THEN 1 ELSE 0 END) AS MANAGER_CNT,\n    SUM(CASE WHEN JOB = 'ANALYST' THEN 1 ELSE 0 END) AS ANALYST_CNT,\n    SUM(CASE WHEN JOB = 'PRESIDENT' THEN 1 ELSE 0 END) AS PRESIDENT_CNT,\n    COUNT(*) AS TOTAL_COUNT\nFROM EMP\nGROUP BY DEPTNO\nORDER BY DEPTNO ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "DEPTNO | CLERK_CNT | SALESMAN_CNT | MANAGER_CNT | ANALYST_CNT | PRESIDENT_CNT | TOTAL_COUNT\n-------+-----------+--------------+-------------+-------------+---------------+------------\n    10 |         1 |            0 |           1 |           0 |             1 |           3\n    20 |         2 |            0 |           1 |           2 |             0 |           5\n    30 |         1 |            4 |           1 |           0 |             0 |           6",
        "expected": "DEPTNO | CLERK_CNT | SALESMAN_CNT | MANAGER_CNT | ANALYST_CNT | PRESIDENT_CNT | TOTAL_COUNT\n-------+-----------+--------------+-------------+-------------+---------------+------------\n    10 |         1 |            0 |           1 |           0 |             1 |           3\n    20 |         2 |            0 |           1 |           2 |             0 |           5\n    30 |         1 |            4 |           1 |           0 |             0 |           6",
        "hint": "1. RDBMS에서 행을 열로 회전시키는 PIVOT은 `SUM(CASE WHEN 조건 THEN 1 ELSE 0 END)` 패턴으로 구현합니다.\n2. `GROUP BY DEPTNO`를 적용하면 각 부서별로 직무별 인원수가 열(컬럼)로 분리 집계됩니다."
    },
    {
        "id": "day10_하1",
        "day": 10,
        "subject": "MySQL",
        "difficulty": "하",
        "title": "사원 정보 및 소속 부서명 내부 조인 (INNER JOIN)",
        "desc": "`EMP` 테이블과 `DEPT` 테이블을 부서번호(`DEPTNO`)로 내부 조인하여, 사원번호(`EMPNO`), 이름(`ENAME`), 직무(`JOB`), 부서명(`DNAME`), 근무지 위치(`LOC`)를 조회하세요. 결과는 사원번호 오름차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP JOIN DEPT ON 1=1;",
        "solution": "SELECT E.EMPNO, E.ENAME, E.JOB, D.DNAME, D.LOC\nFROM EMP E\nINNER JOIN DEPT D ON E.DEPTNO = D.DEPTNO\nORDER BY E.EMPNO ASC;",
        "sample_input": "MySQL EMP, DEPT 테이블",
        "sample_output": "EMPNO | ENAME  | JOB       | DNAME      | LOC\n------+--------+-----------+------------+---------\n 7369 | SMITH  | CLERK     | RESEARCH   | DALLAS\n 7499 | ALLEN  | SALESMAN  | SALES      | CHICAGO\n 7521 | WARD   | SALESMAN  | SALES      | CHICAGO\n ...",
        "expected": "EMPNO | ENAME  | JOB       | DNAME      | LOC\n------+--------+-----------+------------+---------\n 7369 | SMITH  | CLERK     | RESEARCH   | DALLAS\n 7499 | ALLEN  | SALESMAN  | SALES      | CHICAGO\n 7521 | WARD   | SALESMAN  | SALES      | CHICAGO\n ...",
        "hint": "1. `FROM EMP E INNER JOIN DEPT D ON E.DEPTNO = D.DEPTNO` 구문으로 두 테이블을 연결합니다.\n2. 양쪽 테이블에 공통으로 존재하는 컬럼은 반드시 테이블 별칭(예: `E.DEPTNO`)을 명시해야 모호성(Ambiguity) 에러가 나지 않습니다."
    },
    {
        "id": "day10_중1",
        "day": 10,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "미배치 부서까지 포함하는 외부 조인 및 소속 사원 수 집계 (LEFT JOIN)",
        "desc": "소속 사원이 한 명도 없는 부서(예: 40번 OPERATIONS)를 포함하여 모든 부서의 부서번호(`DEPTNO`), 부서명(`DNAME`), 그리고 소속 사원 수(`EMP_COUNT`)를 조회하세요. 사원 수는 `COUNT(E.EMPNO)`를 사용하고, 부서번호 오름차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM DEPT LEFT JOIN EMP ON 1=1;",
        "solution": "SELECT D.DEPTNO, D.DNAME, COUNT(E.EMPNO) AS EMP_COUNT\nFROM DEPT D\nLEFT JOIN EMP E ON D.DEPTNO = E.DEPTNO\nGROUP BY D.DEPTNO, D.DNAME\nORDER BY D.DEPTNO ASC;",
        "sample_input": "MySQL DEPT, EMP 테이블",
        "sample_output": "DEPTNO | DNAME      | EMP_COUNT\n-------+------------+----------\n    10 | ACCOUNTING |         3\n    20 | RESEARCH   |         5\n    30 | SALES      |         6\n    40 | OPERATIONS |         0",
        "expected": "DEPTNO | DNAME      | EMP_COUNT\n-------+------------+----------\n    10 | ACCOUNTING |         3\n    20 | RESEARCH   |         5\n    30 | SALES      |         6\n    40 | OPERATIONS |         0",
        "hint": "1. 사원이 없는 부서도 결과에 나와야 하므로 `DEPT D LEFT JOIN EMP E ON D.DEPTNO = E.DEPTNO`를 사용합니다.\n2. `COUNT(*)`를 쓰면 매칭되는 사원이 없어도 1이 카운트되므로, NULL을 건너뛰는 `COUNT(E.EMPNO)`를 사용해야 0이 올바르게 계산됩니다."
    },
    {
        "id": "day10_중2",
        "day": 10,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "사원과 직속 관리자 매핑 셀프 조인 (SELF JOIN)",
        "desc": "`EMP` 테이블을 셀프 조인(Self Join)하여 각 사원의 사원번호(`EMPNO`), 사원명(`EMP_NAME`), 그리고 그 사원의 직속 관리자 사원번호(`MGR_EMPNO`), 관리자명(`MGR_NAME`)을 조회하세요. 직속 관리자가 없는 사원(KING)도 목록에 표시되도록 외부 조인을 사용하고, 사원번호 오름차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP E;",
        "solution": "SELECT E.EMPNO, E.ENAME AS EMP_NAME, M.EMPNO AS MGR_EMPNO, M.ENAME AS MGR_NAME\nFROM EMP E\nLEFT JOIN EMP M ON E.MGR = M.EMPNO\nORDER BY E.EMPNO ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | EMP_NAME | MGR_EMPNO | MGR_NAME\n------+----------+-----------+---------\n 7369 | SMITH    |      7902 | FORD\n 7499 | ALLEN    |      7698 | BLAKE\n ...\n 7839 | KING     |      NULL | NULL\n ...",
        "expected": "EMPNO | EMP_NAME | MGR_EMPNO | MGR_NAME\n------+----------+-----------+---------\n 7369 | SMITH    |      7902 | FORD\n 7499 | ALLEN    |      7698 | BLAKE\n ...\n 7839 | KING     |      NULL | NULL\n ...",
        "hint": "1. 같은 테이블을 두 번 참조할 때 별칭을 다르게 지정합니다 (`FROM EMP E LEFT JOIN EMP M ON E.MGR = M.EMPNO`).\n2. KING처럼 MGR이 NULL인 경우도 누락되지 않도록 `LEFT JOIN`을 사용합니다."
    },
    {
        "id": "day10_상",
        "day": 10,
        "subject": "MySQL",
        "difficulty": "상",
        "title": "사원, 부서, 급여등급 3개 테이블 다중 조인 및 비등가 조인 (NON-EQUI JOIN)",
        "desc": "사원(`EMP`), 부서(`DEPT`), 급여 등급(`SALGRADE`) 3개 테이블을 결합하세요.\n- 사원 급여(`E.SAL`)가 급여 등급의 최저(`LOSAL`)와 최고(`HISAL`) 사이에 매핑되는 비등가 조인을 수행합니다.\n- 사원번호, 이름, 부서명, 급여, 급여 등급(`GRADE`)을 조회하세요.\n- 급여 등급이 3등급 이상인 사원만 필터링하고, 등급 내림차순, 급여 내림차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT E.EMPNO, E.ENAME, D.DNAME, E.SAL, S.GRADE\nFROM EMP E\nINNER JOIN DEPT D ON E.DEPTNO = D.DEPTNO\nINNER JOIN SALGRADE S ON E.SAL BETWEEN S.LOSAL AND S.HISAL\nWHERE S.GRADE >= 3\nORDER BY S.GRADE DESC, E.SAL DESC;",
        "sample_input": "MySQL EMP, DEPT, SALGRADE 테이블",
        "sample_output": "EMPNO | ENAME | DNAME      | SAL  | GRADE\n------+-------+------------+------+------\n 7839 | KING  | ACCOUNTING | 5000 |     5\n 7788 | SCOTT | RESEARCH   | 3000 |     4\n 7902 | FORD  | RESEARCH   | 3000 |     4\n 7566 | JONES | RESEARCH   | 2975 |     4\n 7698 | BLAKE | SALES      | 2850 |     4\n 7782 | CLARK | ACCOUNTING | 2450 |     3",
        "expected": "EMPNO | ENAME | DNAME      | SAL  | GRADE\n------+-------+------------+------+------\n 7839 | KING  | ACCOUNTING | 5000 |     5\n 7788 | SCOTT | RESEARCH   | 3000 |     4\n 7902 | FORD  | RESEARCH   | 3000 |     4\n 7566 | JONES | RESEARCH   | 2975 |     4\n 7698 | BLAKE | SALES      | 2850 |     4\n 7782 | CLARK | ACCOUNTING | 2450 |     3",
        "hint": "1. `INNER JOIN SALGRADE S ON E.SAL BETWEEN S.LOSAL AND S.HISAL` 처럼 범위 비교를 통한 비등가 조인을 작성합니다.\n2. 조인 후 `WHERE S.GRADE >= 3`으로 원하는 등급만 선별합니다."
    },
    {
        "id": "day10_도전",
        "day": 10,
        "subject": "MySQL",
        "difficulty": "도전",
        "title": "재귀 CTE(WITH RECURSIVE) 기반 조직도 계층 트리 및 탐색 경로(PATH) 조회",
        "desc": "최고 경영자(`KING`, `MGR IS NULL`)부터 말단 사원까지 이어지는 상하 조직 계층 구조를 `WITH RECURSIVE` 재귀 쿼리로 모델링하세요.\n- 사원번호(`EMPNO`), 이름(`ENAME`), 직속상사번호(`MGR`), 조직 계층 레벨(`LVL`, KING은 1, 직속 부하는 2 ...), 그리고 루트부터 현재 사원까지의 보고 경로(`HIERARCHY_PATH`, 예: `KING > BLAKE > ALLEN`)를 계층 및 사원번호 순으로 출력하세요.",
        "template": "-- 재귀 CTE 쿼리를 작성하세요\nWITH RECURSIVE EMP_TREE AS (\n    SELECT ...\n)\nSELECT * FROM EMP_TREE;",
        "solution": "WITH RECURSIVE EMP_TREE AS (\n    -- Anchor Member: 최고 관리자 (KING)\n    SELECT \n        EMPNO, \n        ENAME, \n        MGR, \n        1 AS LVL,\n        CAST(ENAME AS CHAR(200)) AS HIERARCHY_PATH\n    FROM EMP\n    WHERE MGR IS NULL\n    \n    UNION ALL\n    \n    -- Recursive Member: 부하 사원 재귀 탐색\n    SELECT \n        E.EMPNO, \n        E.ENAME, \n        E.MGR, \n        T.LVL + 1 AS LVL,\n        CONCAT(T.HIERARCHY_PATH, ' > ', E.ENAME) AS HIERARCHY_PATH\n    FROM EMP E\n    INNER JOIN EMP_TREE T ON E.MGR = T.EMPNO\n)\nSELECT EMPNO, ENAME, MGR, LVL, HIERARCHY_PATH\nFROM EMP_TREE\nORDER BY LVL ASC, EMPNO ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME  | MGR  | LVL | HIERARCHY_PATH\n------+--------+------+-----+---------------------------\n 7839 | KING   | NULL |   1 | KING\n 7566 | JONES  | 7839 |   2 | KING > JONES\n 7698 | BLAKE  | 7839 |   2 | KING > BLAKE\n 7782 | CLARK  | 7839 |   2 | KING > CLARK\n 7499 | ALLEN  | 7698 |   3 | KING > BLAKE > ALLEN\n ...",
        "expected": "EMPNO | ENAME  | MGR  | LVL | HIERARCHY_PATH\n------+--------+------+-----+---------------------------\n 7839 | KING   | NULL |   1 | KING\n 7566 | JONES  | 7839 |   2 | KING > JONES\n 7698 | BLAKE  | 7839 |   2 | KING > BLAKE\n 7782 | CLARK  | 7839 |   2 | KING > CLARK\n 7499 | ALLEN  | 7698 |   3 | KING > BLAKE > ALLEN\n ...",
        "hint": "1. `WITH RECURSIVE 이름 AS (...)` 문법으로 재귀 공통 테이블 식을 정의합니다.\n2. Anchor Member는 재귀의 시작점(`WHERE MGR IS NULL`)입니다.\n3. Recursive Member는 `INNER JOIN EMP_TREE T ON E.MGR = T.EMPNO`로 이전 단계의 결과를 참조합니다."
    },
    {
        "id": "day11_하1",
        "day": 11,
        "subject": "MySQL",
        "difficulty": "하",
        "title": "전체 사원 평균 급여 초과 수령자 조회 (단일행 서브쿼리)",
        "desc": "전체 사원의 평균 급여(`AVG(SAL)`)보다 높은 급여를 받는 사원들의 사원번호(`EMPNO`), 이름(`ENAME`), 직무(`JOB`), 급여(`SAL`)를 조회하세요. 결과는 급여 내림차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP WHERE SAL > (SELECT 0);",
        "solution": "SELECT EMPNO, ENAME, JOB, SAL\nFROM EMP\nWHERE SAL > (SELECT AVG(SAL) FROM EMP)\nORDER BY SAL DESC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME | JOB       | SAL\n------+-------+-----------+-----\n 7839 | KING  | PRESIDENT | 5000\n 7788 | SCOTT | ANALYST   | 3000\n 7902 | FORD  | ANALYST   | 3000\n 7566 | JONES | MANAGER   | 2975\n 7698 | BLAKE | MANAGER   | 2850\n 7782 | CLARK | MANAGER   | 2450",
        "expected": "EMPNO | ENAME | JOB       | SAL\n------+-------+-----------+-----\n 7839 | KING  | PRESIDENT | 5000\n 7788 | SCOTT | ANALYST   | 3000\n 7902 | FORD  | ANALYST   | 3000\n 7566 | JONES | MANAGER   | 2975\n 7698 | BLAKE | MANAGER   | 2850\n 7782 | CLARK | MANAGER   | 2450",
        "hint": "1. `WHERE SAL > (SELECT AVG(SAL) FROM EMP)` 단일행 서브쿼리를 조건절에 작성합니다.\n2. 서브쿼리는 괄호 `(...)`로 반드시 감싸야 합니다."
    },
    {
        "id": "day11_중1",
        "day": 11,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "30번 부서의 모든 사원보다 급여가 높은 사원 조회 (ALL 다중행 서브쿼리)",
        "desc": "부서번호가 30번인 사원들의 그 어떤 급여보다도 더 많은 급여를 받는 사원들의 사원번호, 이름, 부서번호, 급여를 조회하세요. (즉, 30번 부서 최고 급여 초과자). 결과는 급여 내림차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP;",
        "solution": "SELECT EMPNO, ENAME, DEPTNO, SAL\nFROM EMP\nWHERE SAL > ALL (SELECT SAL FROM EMP WHERE DEPTNO = 30)\nORDER BY SAL DESC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME | DEPTNO | SAL\n------+-------+--------+-----\n 7839 | KING  |     10 | 5000\n 7788 | SCOTT |     20 | 3000\n 7902 | FORD  |     20 | 3000\n 7566 | JONES |     20 | 2975",
        "expected": "EMPNO | ENAME | DEPTNO | SAL\n------+-------+--------+-----\n 7839 | KING  |     10 | 5000\n 7788 | SCOTT |     20 | 3000\n 7902 | FORD  |     20 | 3000\n 7566 | JONES |     20 | 2975",
        "hint": "1. 다중행 비교 연산자 `> ALL (서브쿼리)`는 서브쿼리가 반환한 모든 값보다 커야 함을 의미합니다.\n2. `> (SELECT MAX(SAL) FROM EMP WHERE DEPTNO = 30)`과 동일한 의미를 가집니다."
    },
    {
        "id": "day11_중2",
        "day": 11,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "부하 직원이 있는 관리자 사원 목록 조회 (EXISTS 서브쿼리)",
        "desc": "적어도 한 명 이상의 부하직원을 두고 있는(즉, 다른 사원의 `MGR` 컬럼에 자신의 사원번호가 존재하는) 관리자 사원들의 사원번호, 이름, 직무, 급여를 `EXISTS` 서브쿼리를 활용하여 조회하세요. 사원번호 오름차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP E WHERE EXISTS (...);",
        "solution": "SELECT E.EMPNO, E.ENAME, E.JOB, E.SAL\nFROM EMP E\nWHERE EXISTS (\n    SELECT 1 FROM EMP S WHERE S.MGR = E.EMPNO\n)\nORDER BY E.EMPNO ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME | JOB       | SAL\n------+-------+-----------+-----\n 7566 | JONES | MANAGER   | 2975\n 7698 | BLAKE | MANAGER   | 2850\n 7782 | CLARK | MANAGER   | 2450\n 7788 | SCOTT | ANALYST   | 3000\n 7839 | KING  | PRESIDENT | 5000\n 7902 | FORD  | ANALYST   | 3000",
        "expected": "EMPNO | ENAME | JOB       | SAL\n------+-------+-----------+-----\n 7566 | JONES | MANAGER   | 2975\n 7698 | BLAKE | MANAGER   | 2850\n 7782 | CLARK | MANAGER   | 2450\n 7788 | SCOTT | ANALYST   | 3000\n 7839 | KING  | PRESIDENT | 5000\n 7902 | FORD  | ANALYST   | 3000",
        "hint": "1. `EXISTS (SELECT 1 FROM EMP S WHERE S.MGR = E.EMPNO)` 서브쿼리는 조건에 맞는 행이 1개라도 존재하면 참(TRUE)을 반환합니다.\n2. 외부 쿼리의 컬럼(`E.EMPNO`)을 서브쿼리 내부에서 참조하는 상관 서브쿼리(Correlated Subquery) 방식입니다."
    },
    {
        "id": "day11_상",
        "day": 11,
        "subject": "MySQL",
        "difficulty": "상",
        "title": "소속 부서 평균 급여 초과자 조회 및 서브쿼리 활용 DML",
        "desc": "자신이 속한 부서의 평균 급여보다 더 높은 급여를 받는 사원의 사원번호, 이름, 부서번호, 급여, 그리고 해당 부서의 평균 급여(`DEPT_AVG_SAL`, 소수점 1자리 반올림)를 조회하세요. 결과는 부서번호 오름차순, 급여 내림차순으로 정렬하세요.",
        "template": "-- 여기에 SQL 쿼리를 작성하세요\nSELECT * FROM EMP E;",
        "solution": "SELECT E.EMPNO, E.ENAME, E.DEPTNO, E.SAL, ROUND(D_AVG.AVG_SAL, 1) AS DEPT_AVG_SAL\nFROM EMP E\nINNER JOIN (\n    SELECT DEPTNO, AVG(SAL) AS AVG_SAL\n    FROM EMP\n    GROUP BY DEPTNO\n) D_AVG ON E.DEPTNO = D_AVG.DEPTNO\nWHERE E.SAL > D_AVG.AVG_SAL\nORDER BY E.DEPTNO ASC, E.SAL DESC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "EMPNO | ENAME | DEPTNO | SAL  | DEPT_AVG_SAL\n------+-------+--------+------+-------------\n 7839 | KING  |     10 | 5000 |       2916.7\n 7788 | SCOTT |     20 | 3000 |       2175.0\n 7902 | FORD  |     20 | 3000 |       2175.0\n 7566 | JONES |     20 | 2975 |       2175.0\n 7698 | BLAKE |     30 | 2850 |       1566.7\n 7499 | ALLEN |     30 | 1600 |       1566.7",
        "expected": "EMPNO | ENAME | DEPTNO | SAL  | DEPT_AVG_SAL\n------+-------+--------+------+-------------\n 7839 | KING  |     10 | 5000 |       2916.7\n 7788 | SCOTT |     20 | 3000 |       2175.0\n 7902 | FORD  |     20 | 3000 |       2175.0\n 7566 | JONES |     20 | 2975 |       2175.0\n 7698 | BLAKE |     30 | 2850 |       1566.7\n 7499 | ALLEN |     30 | 1600 |       1566.7",
        "hint": "1. FROM 절에 인라인 뷰(Inline View) 서브쿼리를 두어 부서별 평균 급여 테이블을 생성하고 이를 EMP와 조인합니다.\n2. `WHERE E.SAL > D_AVG.AVG_SAL` 조건을 부여하여 부서 평균을 넘는 사원만 선별합니다."
    },
    {
        "id": "day11_도전",
        "day": 11,
        "subject": "MySQL",
        "difficulty": "도전",
        "title": "부서별 급여 Top 2 사원 선별 인라인 뷰 서브쿼리 (ROW_NUMBER & PARTITION)",
        "desc": "각 부서(`DEPTNO`)별로 급여가 가장 높은 1위 사원과 2위 사원만을 선별하는 고급 인라인 뷰 서브쿼리를 작성하세요.\n- 서브쿼리 내에서 `ROW_NUMBER() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC, EMPNO ASC)`를 사용하여 부서별 급여 순위(`DEPT_RANK`)를 부여합니다.\n- 메인 쿼리에서 `DEPT_RANK <= 2`인 사원만을 필터링하고, 부서번호 오름차순, 부서 내 순위 오름차순으로 정렬하여 부서번호, 사원번호, 이름, 직무, 급여, 부서 내 순위를 조회하세요.",
        "template": "-- 인라인 뷰 서브쿼리를 작성하세요\nSELECT * FROM (SELECT ...) T WHERE ...;",
        "solution": "SELECT \n    T.DEPTNO, \n    T.EMPNO, \n    T.ENAME, \n    T.JOB, \n    T.SAL, \n    T.DEPT_RANK\nFROM (\n    SELECT \n        DEPTNO, \n        EMPNO, \n        ENAME, \n        JOB, \n        SAL,\n        ROW_NUMBER() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC, EMPNO ASC) AS DEPT_RANK\n    FROM EMP\n) T\nWHERE T.DEPT_RANK <= 2\nORDER BY T.DEPTNO ASC, T.DEPT_RANK ASC;",
        "sample_input": "MySQL EMP 테이블",
        "sample_output": "DEPTNO | EMPNO | ENAME | JOB       | SAL  | DEPT_RANK\n-------+-------+-------+-----------+------+----------\n    10 |  7839 | KING  | PRESIDENT | 5000 |         1\n    10 |  7782 | CLARK | MANAGER   | 2450 |         2\n    20 |  7788 | SCOTT | ANALYST   | 3000 |         1\n    20 |  7902 | FORD  | ANALYST   | 3000 |         2\n    30 |  7698 | BLAKE | MANAGER   | 2850 |         1\n    30 |  7499 | ALLEN | SALESMAN  | 1600 |         2",
        "expected": "DEPTNO | EMPNO | ENAME | JOB       | SAL  | DEPT_RANK\n-------+-------+-------+-----------+------+----------\n    10 |  7839 | KING  | PRESIDENT | 5000 |         1\n    10 |  7782 | CLARK | MANAGER   | 2450 |         2\n    20 |  7788 | SCOTT | ANALYST   | 3000 |         1\n    20 |  7902 | FORD  | ANALYST   | 3000 |         2\n    30 |  7698 | BLAKE | MANAGER   | 2850 |         1\n    30 |  7499 | ALLEN | SALESMAN  | 1600 |         2",
        "hint": "1. `PARTITION BY DEPTNO`는 그룹별로 순위를 독립적으로 다시 1부터 매기도록 파티션을 나눕니다.\n2. WHERE 절에서는 윈도우 함수를 직접 쓸 수 없으므로 반드시 `FROM (SELECT ...) T` 형태의 인라인 뷰 서브쿼리로 감싼 후 `WHERE T.DEPT_RANK <= 2`를 적용해야 합니다."
    },
    {
        "id": "day12_하1",
        "day": 12,
        "subject": "MySQL",
        "difficulty": "하",
        "title": "쇼핑몰 상품 카탈로그 테이블 생성 DDL (PRODUCT)",
        "desc": "온라인 쇼핑몰의 상품 정보를 관리할 `PRODUCT` 테이블을 생성하는 DDL을 작성하세요.\n- `PROD_ID`: 상품 고유 코드 (정수형 `INT`, 기본키 `PRIMARY KEY`, 자동증가 `AUTO_INCREMENT`)\n- `PROD_NAME`: 상품명 (가변길이 문자열 `VARCHAR(100)`, 빈값 불가 `NOT NULL`)\n- `PRICE`: 판매 단가 (정수형 `INT`, 빈값 불가 `NOT NULL`, 기본값 `0`)\n- `STOCK`: 재고 수량 (정수형 `INT`, 빈값 불가 `NOT NULL`, 기본값 `0`)\n- `CREATED_AT`: 등록 일시 (일시형 `DATETIME`, 기본값 현재시각 `DEFAULT CURRENT_TIMESTAMP`)",
        "template": "-- 여기에 CREATE TABLE 문을 작성하세요\nCREATE TABLE PRODUCT (\n);\n",
        "solution": "CREATE TABLE PRODUCT (\n    PROD_ID INT AUTO_INCREMENT PRIMARY KEY,\n    PROD_NAME VARCHAR(100) NOT NULL,\n    PRICE INT NOT NULL DEFAULT 0,\n    STOCK INT NOT NULL DEFAULT 0,\n    CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP\n);",
        "sample_input": "DDL 쿼리 실행 요청",
        "sample_output": "Query OK, 0 rows affected (테이블 생성 성공)",
        "expected": "Query OK, 0 rows affected (테이블 생성 성공)",
        "hint": "1. `CREATE TABLE 테이블명 (컬럼 정의...);` 형식을 사용합니다.\n2. 기본키는 `PRIMARY KEY`, 필수 입력은 `NOT NULL`, 기본값은 `DEFAULT 값` 키워드를 지정합니다."
    },
    {
        "id": "day12_중1",
        "day": 12,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "외래키(FOREIGN KEY) 제약조건이 포함된 주문 테이블 설계",
        "desc": "고객의 주문 정보를 기록하는 `ORDERS` 테이블을 생성하세요.\n- `ORDER_ID`: 주문 번호 (`INT`, `AUTO_INCREMENT`, `PRIMARY KEY`)\n- `ORDER_NO`: 주문 식별 문자열 (`VARCHAR(50)`, `NOT NULL`, `UNIQUE`)\n- `PROD_ID`: 주문 상품 코드 (`INT`, `NOT NULL`)\n- `ORDER_QTY`: 주문 수량 (`INT`, `NOT NULL`)\n- `ORDER_DATE`: 주문 날짜 (`DATETIME`, `DEFAULT CURRENT_TIMESTAMP`)\n- 제약조건: `PROD_ID` 컬럼은 `PRODUCT` 테이블의 `PROD_ID`를 참조하는 외래키(`FOREIGN KEY`)로 설정하세요.",
        "template": "-- 여기에 CREATE TABLE 문을 작성하세요\nCREATE TABLE ORDERS (\n);\n",
        "solution": "CREATE TABLE ORDERS (\n    ORDER_ID INT AUTO_INCREMENT PRIMARY KEY,\n    ORDER_NO VARCHAR(50) NOT NULL UNIQUE,\n    PROD_ID INT NOT NULL,\n    ORDER_QTY INT NOT NULL,\n    ORDER_DATE DATETIME DEFAULT CURRENT_TIMESTAMP,\n    CONSTRAINT FK_ORDERS_PRODUCT FOREIGN KEY (PROD_ID) REFERENCES PRODUCT(PROD_ID)\n);",
        "sample_input": "DDL 쿼리 실행 요청",
        "sample_output": "Query OK, 0 rows affected (테이블 생성 성공)",
        "expected": "Query OK, 0 rows affected (테이블 생성 성공)",
        "hint": "1. 고유 제약조건은 `UNIQUE` 키워드를 컬럼에 추가합니다.\n2. 외래키는 `CONSTRAINT 제약조건명 FOREIGN KEY (자식컬럼) REFERENCES 부모테이블(부모컬럼)` 형태로 정의합니다."
    },
    {
        "id": "day12_중2",
        "day": 12,
        "subject": "MySQL",
        "difficulty": "중",
        "title": "테이블 구조 변경(ALTER TABLE) 및 신규 컬럼/인덱스 추가",
        "desc": "기존 `PRODUCT` 테이블의 스키마를 변경하는 SQL 문 3개를 차례대로 작성하세요.\n1. 상품 할인율(`DISCOUNT_RATE`) 컬럼을 소수형(`DECIMAL(4,2)`, 기본값 `0.00`, NULL 허용)으로 추가하세요 (`ADD COLUMN`).\n2. 상품명(`PROD_NAME`) 컬럼의 크기를 `VARCHAR(200)`으로 확장 수정하세요 (`MODIFY COLUMN`).\n3. 상품명에 빠른 조회를 위한 인덱스(`IDX_PROD_NAME`)를 추가하세요 (`ADD INDEX`).",
        "template": "-- 3개의 ALTER TABLE 문을 작성하세요\nALTER TABLE PRODUCT ...;\nALTER TABLE PRODUCT ...;\nALTER TABLE PRODUCT ...;\n",
        "solution": "ALTER TABLE PRODUCT ADD COLUMN DISCOUNT_RATE DECIMAL(4,2) DEFAULT 0.00;\nALTER TABLE PRODUCT MODIFY COLUMN PROD_NAME VARCHAR(200) NOT NULL;\nALTER TABLE PRODUCT ADD INDEX IDX_PROD_NAME (PROD_NAME);",
        "sample_input": "ALTER TABLE 실행",
        "sample_output": "Query OK, 0 rows affected (테이블 구조 변경 완료)",
        "expected": "Query OK, 0 rows affected (테이블 구조 변경 완료)",
        "hint": "1. 컬럼 추가: `ALTER TABLE 테이블명 ADD COLUMN 컬럼명 자료형 ...;`\n2. 컬럼 수정: `ALTER TABLE 테이블명 MODIFY COLUMN 컬럼명 새자료형 ...;`\n3. 인덱스 추가: `ALTER TABLE 테이블명 ADD INDEX 인덱스명 (컬럼명);`"
    },
    {
        "id": "day12_상",
        "day": 12,
        "subject": "MySQL",
        "difficulty": "상",
        "title": "연쇄 삭제(ON DELETE CASCADE) 및 무결성 주문 상세 테이블 설계",
        "desc": "부모 데이터 삭제 시 자식 데이터가 자동으로 함께 삭제되도록 연쇄 삭제(`ON DELETE CASCADE`)가 지정된 주문 상세 테이블 `ORDER_DETAIL`을 설계하세요.\n- `DETAIL_ID`: 상세 식별자 (`INT AUTO_INCREMENT PRIMARY KEY`)\n- `ORDER_ID`: 주문 번호 (`INT NOT NULL`)\n- `PROD_ID`: 상품 번호 (`INT NOT NULL`)\n- `UNIT_PRICE`: 결제 단가 (`INT NOT NULL CHECK (UNIT_PRICE >= 0)`)\n- `QUANTITY`: 결제 수량 (`INT NOT NULL CHECK (QUANTITY > 0)`)\n- 외래키 1: `ORDER_ID`는 `ORDERS(ORDER_ID)`를 참조하며, 부모 주문 삭제 시 연쇄 삭제(`ON DELETE CASCADE`)\n- 외래키 2: `PROD_ID`는 `PRODUCT(PROD_ID)`를 참조하며, 상품 삭제 시 삭제 제한(`ON DELETE RESTRICT`)",
        "template": "-- 여기에 DDL을 작성하세요\nCREATE TABLE ORDER_DETAIL (\n);\n",
        "solution": "CREATE TABLE ORDER_DETAIL (\n    DETAIL_ID INT AUTO_INCREMENT PRIMARY KEY,\n    ORDER_ID INT NOT NULL,\n    PROD_ID INT NOT NULL,\n    UNIT_PRICE INT NOT NULL CHECK (UNIT_PRICE >= 0),\n    QUANTITY INT NOT NULL CHECK (QUANTITY > 0),\n    CONSTRAINT FK_DETAIL_ORDER FOREIGN KEY (ORDER_ID) REFERENCES ORDERS(ORDER_ID) ON DELETE CASCADE,\n    CONSTRAINT FK_DETAIL_PROD FOREIGN KEY (PROD_ID) REFERENCES PRODUCT(PROD_ID) ON DELETE RESTRICT\n);",
        "sample_input": "DDL 쿼리 실행 요청",
        "sample_output": "Query OK, 0 rows affected (참조 무결성 테이블 생성 완료)",
        "expected": "Query OK, 0 rows affected (참조 무결성 테이블 생성 완료)",
        "hint": "1. 외래키 옵션으로 `ON DELETE CASCADE`를 지정하면 부모 레코드 삭제 시 자식 레코드도 자동 삭제됩니다.\n2. `ON DELETE RESTRICT`는 자식 데이터가 존재할 때 부모 데이터 삭제를 차단하여 무결성을 보호합니다.\n3. `CHECK (조건식)`을 통해 음수 가격이나 0 이하 수량 입력 방지 규칙을 적용합니다."
    },
    {
        "id": "day12_도전",
        "day": 12,
        "subject": "MySQL",
        "difficulty": "도전",
        "title": "사원-프로젝트 N:M 매핑 엔티티 및 복합 제약조건 DDL (PROJECT_MEMBER)",
        "desc": "기업 프로젝트 관리 시스템을 위해 신규 프로젝트(`PROJECT`) 테이블과 사원-프로젝트 참여 매핑 테이블(`PROJECT_MEMBER`)을 생성하는 DDL을 작성하세요.\n1. `PROJECT` 테이블: `PROJ_ID INT AUTO_INCREMENT PRIMARY KEY`, `PROJ_NAME VARCHAR(100) NOT NULL UNIQUE`, `BUDGET DECIMAL(12,2) DEFAULT 0.00`\n2. `PROJECT_MEMBER` 테이블:\n   - `EMPNO INT NOT NULL`, `PROJ_ID INT NOT NULL`\n   - `ROLE VARCHAR(50) NOT NULL DEFAULT 'MEMBER'`\n   - `HOURS_PER_WEEK INT NOT NULL CHECK (HOURS_PER_WEEK BETWEEN 1 AND 40)`\n   - 복합 기본키: `PRIMARY KEY (EMPNO, PROJ_ID)`\n   - 외래키 1: `EMPNO`는 `EMP(EMPNO)` 참조, 사원 삭제 시 `ON DELETE CASCADE`\n   - 외래키 2: `PROJ_ID`는 `PROJECT(PROJ_ID)` 참조, 프로젝트 삭제 시 `ON DELETE CASCADE`",
        "template": "-- 2개의 CREATE TABLE 문을 작성하세요\nCREATE TABLE PROJECT (\n);\nCREATE TABLE PROJECT_MEMBER (\n);",
        "solution": "CREATE TABLE PROJECT (\n    PROJ_ID INT AUTO_INCREMENT PRIMARY KEY,\n    PROJ_NAME VARCHAR(100) NOT NULL UNIQUE,\n    BUDGET DECIMAL(12,2) DEFAULT 0.00\n);\n\nCREATE TABLE PROJECT_MEMBER (\n    EMPNO INT NOT NULL,\n    PROJ_ID INT NOT NULL,\n    ROLE VARCHAR(50) NOT NULL DEFAULT 'MEMBER',\n    HOURS_PER_WEEK INT NOT NULL CHECK (HOURS_PER_WEEK BETWEEN 1 AND 40),\n    PRIMARY KEY (EMPNO, PROJ_ID),\n    CONSTRAINT FK_PM_EMP FOREIGN KEY (EMPNO) REFERENCES EMP(EMPNO) ON DELETE CASCADE,\n    CONSTRAINT FK_PM_PROJ FOREIGN KEY (PROJ_ID) REFERENCES PROJECT(PROJ_ID) ON DELETE CASCADE\n);",
        "sample_input": "DDL 실행",
        "sample_output": "Query OK, 0 rows affected (N:M 매핑 테이블 생성 완료)",
        "expected": "Query OK, 0 rows affected (N:M 매핑 테이블 생성 완료)",
        "hint": "1. 실무 RDBMS에서 N:M 다대다 관계는 중간 연결 매핑 테이블을 생성하여 1:N, M:1 관계로 해소합니다.\n2. `PRIMARY KEY (EMPNO, PROJ_ID)` 처럼 두 컬럼을 묶어 복합 기본키(Composite PK)를 지정하면 동일 사원이 같은 프로젝트에 중복 배정되는 것을 원천 차단합니다."
    },
    {
        "id": "day13_하1",
        "day": 13,
        "subject": "Web",
        "difficulty": "하",
        "title": "온라인 쇼핑몰 회원가입 입력 폼 (SignUpForm)",
        "desc": "아이디, 비밀번호, 이메일, 생년월일, 성별(라디오 버튼), 필수 약관 동의(체크박스), 가입 제출 버튼을 포함하는 표준 HTML5 회원가입 폼을 마크업하세요.\n- `<form action=\"/signup\" method=\"POST\">` 구조\n- 모든 입력 필드에 적절한 `<label for=\"...\">` 연결\n- 필수 입력 항목에 `required` 속성 부여",
        "template": "<!-- 여기에 HTML5 회원가입 폼을 작성하세요 -->\n<form>\n</form>",
        "solution": "<form action=\"/signup\" method=\"POST\">\n    <div>\n        <label for=\"userid\">아이디:</label>\n        <input type=\"text\" id=\"userid\" name=\"userid\" required minlength=\"4\" maxlength=\"16\">\n    </div>\n    <div>\n        <label for=\"password\">비밀번호:</label>\n        <input type=\"password\" id=\"password\" name=\"password\" required>\n    </div>\n    <div>\n        <label for=\"email\">이메일:</label>\n        <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"user@example.com\">\n    </div>\n    <div>\n        <label for=\"birth\">생년월일:</label>\n        <input type=\"date\" id=\"birth\" name=\"birth\">\n    </div>\n    <div>\n        <span>성별:</span>\n        <label><input type=\"radio\" name=\"gender\" value=\"M\" required> 남성</label>\n        <label><input type=\"radio\" name=\"gender\" value=\"F\"> 여성</label>\n    </div>\n    <div>\n        <label><input type=\"checkbox\" name=\"agree\" required> 이용약관 및 개인정보 처리방침 동의 (필수)</label>\n    </div>\n    <button type=\"submit\">회원가입</button>\n</form>",
        "sample_input": "HTML 렌더링",
        "sample_output": "표준 웹 폼 렌더링 결과 확인",
        "expected": "표준 웹 폼 렌더링 결과 확인",
        "hint": "1. `<label for=\"id\">`와 `<input id=\"id\">`의 id/for 값을 일치시키면 접근성이 향상됩니다.\n2. 라디오 버튼은 같은 그룹끼리 `name=\"gender\"` 속성값을 동일하게 맞춰야 택일 동작을 합니다.\n3. `required` 속성을 넣으면 브라우저 자체 유효성 검사가 작동합니다."
    },
    {
        "id": "day13_하2",
        "day": 13,
        "subject": "Web",
        "difficulty": "하",
        "title": "멀티미디어 태그 및 새 창 링크 마크업 (MediaAndLinks)",
        "desc": "오디오 플레이어(`<audio controls>`), 동영상 플레이어(`<video controls>`), 그리고 새 탭에서 열리는 외부 공식 사이트 링크(`<a target=\"_blank\" rel=\"noopener noreferrer\">`)를 구성하세요.",
        "template": "<!-- 여기에 멀티미디어 태그를 작성하세요 -->\n",
        "solution": "<section>\n    <h2>브랜드 소개 영상 및 배경음악</h2>\n    <article>\n        <h3>홍보 영상</h3>\n        <video width=\"480\" height=\"270\" controls poster=\"poster.jpg\">\n            <source src=\"intro.mp4\" type=\"video/mp4\">\n            브라우저가 video 태그를 지원하지 않습니다.\n        </video>\n    </article>\n    <article>\n        <h3>브랜드 BGM</h3>\n        <audio controls>\n            <source src=\"theme.mp3\" type=\"audio/mpeg\">\n            브라우저가 audio 태그를 지원하지 않습니다.\n        </audio>\n    </article>\n    <p>\n        더 많은 정보를 보시려면 \n        <a href=\"https://www.likelion.net\" target=\"_blank\" rel=\"noopener noreferrer\">멋쟁이사자처럼 공식 사이트</a>\n        를 방문하세요.\n    </p>\n</section>",
        "sample_input": "HTML 렌더링",
        "sample_output": "비디오, 오디오 플레이어 및 외부 링크 렌더링 확인",
        "expected": "비디오, 오디오 플레이어 및 외부 링크 렌더링 확인",
        "hint": "1. `<video controls>`와 `<audio controls>` 태그는 재생/정지/음량 컨트롤러를 브라우저에 표시합니다.\n2. `target=\"_blank\"`로 새 창을 열 때는 보안을 위해 `rel=\"noopener noreferrer\"` 속성을 권장합니다."
    },
    {
        "id": "day13_중1",
        "day": 13,
        "subject": "Web",
        "difficulty": "중",
        "title": "시맨틱 웹 표준 카페 메뉴판 테이블 (CafeMenuSemantic)",
        "desc": "웹 표준 시맨틱 태그(`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)와 구조화된 데이터 표 태그(`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<th scope=\"col\">`)를 활용하여 카페 음료 메뉴판을 마크업하세요.",
        "template": "<!-- 시맨틱 구조와 표 태그를 작성하세요 -->\n",
        "solution": "<!DOCTYPE html>\n<html lang=\"ko\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>스타카페 메뉴판</title>\n</head>\n<body>\n    <header>\n        <h1>스타카페 온라인 오더</h1>\n        <nav>\n            <ul>\n                <li><a href=\"#coffee\">커피 메뉴</a></li>\n                <li><a href=\"#dessert\">디저트</a></li>\n            </ul>\n        </nav>\n    </header>\n    <main>\n        <article id=\"coffee\">\n            <h2>시그니처 커피 메뉴</h2>\n            <table>\n                <caption>카페 대표 음료 및 가격 안내표</caption>\n                <thead>\n                    <tr>\n                        <th scope=\"col\">메뉴명</th>\n                        <th scope=\"col\">분류</th>\n                        <th scope=\"col\">칼로리(kcal)</th>\n                        <th scope=\"col\">가격(원)</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>아메리카노</td>\n                        <td>에스프레소</td>\n                        <td>10</td>\n                        <td>4,500</td>\n                    </tr>\n                    <tr>\n                        <td>카페라떼</td>\n                        <td>밀크커피</td>\n                        <td>180</td>\n                        <td>5,000</td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td colspan=\"3\">원두: 에티오피아 예가체프 100%</td>\n                        <td>VAT 포함</td>\n                    </tr>\n                </tfoot>\n            </table>\n        </article>\n    </main>\n    <footer>\n        <p>&copy; 2026 Star Cafe. All rights reserved.</p>\n    </footer>\n</body>\n</html>",
        "sample_input": "HTML 렌더링",
        "sample_output": "시맨틱 구조의 카페 메뉴판 표 렌더링 확인",
        "expected": "시맨틱 구조의 카페 메뉴판 표 렌더링 확인",
        "hint": "1. 시맨틱 태그는 문서의 구조와 의미를 브라우저 및 검색엔진에 명확히 전달합니다.\n2. `<table>` 안에는 `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`을 체계적으로 구성하고 `<th scope=\"col\">`로 헤더 셀의 범위를 명시합니다."
    },
    {
        "id": "day13_중2",
        "day": 13,
        "subject": "Web",
        "difficulty": "중",
        "title": "그룹화 필드셋 기반 고객 설문조사 상세 폼 (SurveyFieldsetForm)",
        "desc": "온라인 서비스 만족도 조사를 위해 `<fieldset>`, `<legend>`, `<select>` 드롭다운 메뉴(`<optgroup>` 포함), 그리고 다중행 텍스트 입력창(`<textarea>`)을 갖춘 설문조사 폼을 마크업하세요.",
        "template": "<!-- 여기에 설문조사 폼을 작성하세요 -->\n",
        "solution": "<form action=\"/api/survey\" method=\"POST\">\n    <fieldset>\n        <legend>기본 고객 정보</legend>\n        <label for=\"customer-name\">성함:</label>\n        <input type=\"text\" id=\"customer-name\" name=\"name\" required>\n    </fieldset>\n    <fieldset>\n        <legend>서비스 만족도 평가</legend>\n        <label for=\"category\">주요 이용 서비스:</label>\n        <select id=\"category\" name=\"category\" required>\n            <option value=\"\">-- 서비스를 선택해주세요 --</option>\n            <optgroup label=\"교육 과정\">\n                <option value=\"fe\">프론트엔드 부트캠프</option>\n                <option value=\"be\">백엔드 자바 부트캠프</option>\n            </optgroup>\n            <optgroup label=\"취업 지원\">\n                <option value=\"mentor\">1:1 멘토링</option>\n                <option value=\"resume\">이력서 코칭</option>\n            </optgroup>\n        </select>\n        <br><br>\n        <label for=\"feedback\">상세 건의사항 및 피드백:</label><br>\n        <textarea id=\"feedback\" name=\"feedback\" rows=\"5\" cols=\"40\" placeholder=\"솔직한 의견을 남겨주세요 (최대 500자)\"></textarea>\n    </fieldset>\n    <br>\n    <button type=\"submit\">설문 제출하기</button>\n</form>",
        "sample_input": "HTML 렌더링",
        "sample_output": "그룹화된 설문조사 폼 UI 확인",
        "expected": "그룹화된 설문조사 폼 UI 확인",
        "hint": "1. `<fieldset>`은 관련된 폼 컨트롤들을 시각적/의미적으로 그룹핑하며, `<legend>`는 그룹의 제목을 정의합니다.\n2. `<select>` 안에서 `<optgroup label=\"...\">`을 사용하면 선택 옵션을 카테고리별로 묶어줄 수 있습니다."
    },
    {
        "id": "day13_상",
        "day": 13,
        "subject": "Web",
        "difficulty": "상",
        "title": "웹 접근성(ARIA) 및 정규식 검증 상품 등록 폼 (AccessibleProductForm)",
        "desc": "쇼핑몰 관리자 전용 상품 등록 폼을 웹 접근성 표준(WAI-ARIA)에 부합하도록 마크업하세요.\n- 상품 식별코드: 정규식 패턴(`pattern=\"^[A-Z]{3}-[0-9]{4}$\"`) 적용 및 도움말을 `aria-describedby`로 연결\n- 상품 이미지 첨부: `<input type=\"file\" accept=\"image/*\">` 및 `<form enctype=\"multipart/form-data\">`\n- 필수 입력 안내 문구에 `aria-required=\"true\"` 명시",
        "template": "<!-- WAI-ARIA 접근성 속성이 적용된 폼을 작성하세요 -->\n",
        "solution": "<form action=\"/admin/products\" method=\"POST\" enctype=\"multipart/form-data\">\n    <h2>신규 상품 등록 (관리자)</h2>\n    <div>\n        <label for=\"sku\">상품 SKU 코드 (대문자 3자리-숫자 4자리):</label>\n        <input type=\"text\" id=\"sku\" name=\"sku\" required \n               pattern=\"^[A-Z]{3}-[0-9]{4}$\" \n               aria-required=\"true\" \n               aria-describedby=\"sku-help\" \n               placeholder=\"예: PRD-1024\">\n        <small id=\"sku-help\">SKU 코드는 영문 대문자 3자리와 하이픈(-), 숫자 4자리 조합이어야 합니다.</small>\n    </div>\n    <div>\n        <label for=\"prod-img\">상품 대표 이미지:</label>\n        <input type=\"file\" id=\"prod-img\" name=\"image\" accept=\"image/png, image/jpeg, image/webp\" required>\n    </div>\n    <button type=\"submit\" aria-label=\"신규 상품 정보 데이터베이스 저장\">상품 등록 완료</button>\n</form>",
        "sample_input": "HTML 렌더링",
        "sample_output": "웹 접근성 규격을 만족하는 상품 등록 폼 렌더링 확인",
        "expected": "웹 접근성 규격을 만족하는 상품 등록 폼 렌더링 확인",
        "hint": "1. `aria-describedby=\"id\"`는 스크린 리더가 입력 필드에 포커스되었을 때 도움말 텍스트를 함께 음성으로 읽어주도록 연계합니다.\n2. 파일 업로드가 포함된 폼은 반드시 `enctype=\"multipart/form-data\"`를 선언해야 합니다.\n3. `pattern=\"...\"` 속성으로 정규식 포맷 클라이언트 유효성 검사를 수행합니다."
    },
    {
        "id": "day13_도전",
        "day": 13,
        "subject": "Web",
        "difficulty": "도전",
        "title": "HTML5 Canvas 서명 패드 및 접근성 전자계약 폼 (CanvasSignaturePad)",
        "desc": "온라인 근로 계약서 작성을 위한 전자 서명 폼을 마크업하세요.\n- 계약자 이름 입력 필드(`<input type=\"text\" required>`)\n- 전자 서명을 그릴 수 있는 그래픽 영역(`<canvas id=\"signature-pad\" width=\"400\" height=\"150\" role=\"img\" aria-label=\"전자 서명 입력 캔버스\">`)\n- '서명 초기화' 버튼과 '계약 체결 완료' 제출 버튼\n- 모든 컨트롤에 WAI-ARIA 접근성 라벨을 충실히 반영하세요.",
        "template": "<!-- Canvas 서명 패드 마크업을 작성하세요 -->\n",
        "solution": "<form action=\"/api/contract/sign\" method=\"POST\">\n    <h2>온라인 전자 근로계약서 체결</h2>\n    <div>\n        <label for=\"signer-name\">서명자 성명:</label>\n        <input type=\"text\" id=\"signer-name\" name=\"signerName\" required aria-required=\"true\">\n    </div>\n    <div style=\"margin: 16px 0;\">\n        <label id=\"sig-label\">본인 자필 전자 서명 (마우스 또는 터치로 서명):</label>\n        <div style=\"border: 2px dashed #94a3b8; border-radius: 8px; width: 400px;\">\n            <canvas id=\"signature-pad\" width=\"400\" height=\"150\" role=\"img\" aria-labelledby=\"sig-label\"></canvas>\n        </div>\n        <button type=\"button\" id=\"btn-clear-sig\" aria-label=\"작성된 서명 지우기\">서명 초기화</button>\n    </div>\n    <div>\n        <label>\n            <input type=\"checkbox\" name=\"agreeTerms\" required aria-required=\"true\">\n            위 계약서의 모든 조항을 성실히 이행할 것을 서약합니다 (필수)\n        </label>\n    </div>\n    <button type=\"submit\">전자계약 체결 완료</button>\n</form>",
        "sample_input": "HTML 렌더링",
        "sample_output": "Canvas 서명 영역 및 전자서명 폼 UI 확인",
        "expected": "Canvas 서명 영역 및 전자서명 폼 UI 확인",
        "hint": "1. `<canvas>` 요소는 자바스크립트로 2D 그래픽이나 서명 궤적을 렌더링하는 데 사용됩니다.\n2. 스크린 리더 사용자를 위해 `role=\"img\"`와 `aria-labelledby=\"라벨id\"`를 선언하여 캔버스의 용도를 명확히 전달합니다."
    },
    {
        "id": "day14_하1",
        "day": 14,
        "subject": "Web",
        "difficulty": "하",
        "title": "쇼핑몰 상태 뱃지 및 가격 태그 스타일링 (ProductBadge)",
        "desc": "쇼핑몰 상품에 부착되는 `BEST`, `30% SALE`, `품절` 뱃지를 스타일링하세요.\n- `display: inline-block`, `border-radius: 4px`, `padding: 4px 8px`, `font-size: 12px`, `font-weight: bold`\n- `.badge-best`: 배경 `#2563eb`, 글자색 `#ffffff`\n- `.badge-sale`: 배경 `#dc2626`, 글자색 `#ffffff`\n- `.badge-soldout`: 배경 `#6b7280`, 글자색 `#ffffff`",
        "template": "<style>\n/* 여기에 뱃지 CSS를 작성하세요 */\n</style>\n",
        "solution": "<style>\n.badge {\n    display: inline-block;\n    padding: 4px 8px;\n    border-radius: 4px;\n    font-size: 12px;\n    font-weight: 700;\n    color: #ffffff;\n    line-height: 1;\n    text-align: center;\n}\n.badge-best {\n    background-color: #2563eb;\n}\n.badge-sale {\n    background-color: #dc2626;\n}\n.badge-soldout {\n    background-color: #6b7280;\n}\n</style>\n<span class=\"badge badge-best\">BEST</span>\n<span class=\"badge badge-sale\">30% SALE</span>\n<span class=\"badge badge-soldout\">일시품절</span>",
        "sample_input": "CSS 렌더링",
        "sample_output": "컬러 뱃지 3종 렌더링 확인",
        "expected": "컬러 뱃지 3종 렌더링 확인",
        "hint": "1. `inline-block`을 적용해야 인라인 흐름을 유지하면서도 `padding`과 `border-radius`가 온전히 반영됩니다.\n2. 공통 클래스(`.badge`)와 개별 테마 클래스(`.badge-best` 등)로 분리 설계하는 것이 유지보수에 좋습니다."
    },
    {
        "id": "day14_중1",
        "day": 14,
        "subject": "Web",
        "difficulty": "중",
        "title": "Flexbox 기반 반응형 글로벌 네비게이션 바 (FlexNavbar)",
        "desc": "로고, 중앙 메뉴 링크 목록, 우측 로그인 버튼으로 구성된 상단 GNB(Global Navigation Bar)를 Flexbox로 마크업 및 스타일링하세요.\n- 컨테이너: `display: flex; justify-content: space-between; align-items: center; padding: 12px 24px;`\n- 메뉴 목록: `display: flex; gap: 20px; list-style: none;`",
        "template": "<style>\n/* 여기에 네비게이션 CSS를 작성하세요 */\n</style>\n",
        "solution": "<style>\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #1e293b;\n    padding: 14px 28px;\n    color: #ffffff;\n}\n.nav-logo {\n    font-size: 20px;\n    font-weight: bold;\n    color: #f97316;\n    text-decoration: none;\n}\n.nav-menu {\n    display: flex;\n    gap: 24px;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.nav-menu a {\n    color: #e2e8f0;\n    text-decoration: none;\n    font-size: 15px;\n}\n.nav-menu a:hover {\n    color: #f97316;\n}\n.btn-login {\n    background-color: #f97316;\n    color: #ffffff;\n    border: none;\n    padding: 8px 16px;\n    border-radius: 6px;\n    cursor: pointer;\n}\n</style>\n<header class=\"navbar\">\n    <a href=\"#\" class=\"nav-logo\">멋사몰</a>\n    <ul class=\"nav-menu\">\n        <li><a href=\"#\">홈</a></li>\n        <li><a href=\"#\">베스트</a></li>\n        <li><a href=\"#\">기획전</a></li>\n        <li><a href=\"#\">고객센터</a></li>\n    </ul>\n    <button class=\"btn-login\">로그인</button>\n</header>",
        "sample_input": "CSS 렌더링",
        "sample_output": "양끝 정렬된 Flexbox GNB 렌더링 확인",
        "expected": "양끝 정렬된 Flexbox GNB 렌더링 확인",
        "hint": "1. `justify-content: space-between;`은 자식 요소들을 양 끝과 균등한 간격으로 배치합니다.\n2. `align-items: center;`는 세로 축 기준 중앙 정렬을 완성합니다.\n3. `gap: 24px;` 속성을 주면 margin 계산 없이 자식들 사이의 간격을 손쉽게 부여할 수 있습니다."
    },
    {
        "id": "day14_중2",
        "day": 14,
        "subject": "Web",
        "difficulty": "중",
        "title": "Flexbox 카드 레이아웃 및 Hover 떠오름 효과 (ProductCard)",
        "desc": "상품 카드 컴포넌트를 Flexbox 세로 방향(`flex-direction: column`)으로 구축하고, 마우스 오버 시 부드럽게 위로 떠오르는 인터랙션 애니메이션을 구현하세요.\n- 카드 테두리(`border: 1px solid #e5e7eb`), 둥근 모서리(`border-radius: 12px`), 안쪽 여백(`padding: 16px`)\n- Hover 시: `transform: translateY(-6px); box-shadow: 0 10px 20px rgba(0,0,0,0.12);`\n- 부드러운 전환: `transition: all 0.25s ease-in-out;`",
        "template": "<style>\n/* 카드 스타일과 호버 효과를 작성하세요 */\n</style>\n",
        "solution": "<style>\n.card-container {\n    display: flex;\n    gap: 20px;\n}\n.product-card {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border: 1px solid #e2e8f0;\n    border-radius: 12px;\n    padding: 20px;\n    background-color: #ffffff;\n    transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.product-card:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);\n}\n.card-thumb {\n    width: 100%;\n    height: 160px;\n    background-color: #f1f5f9;\n    border-radius: 8px;\n    margin-bottom: 12px;\n}\n.card-title {\n    font-size: 16px;\n    font-weight: 600;\n    margin-bottom: 8px;\n}\n.card-price {\n    font-size: 18px;\n    font-weight: 700;\n    color: #ef4444;\n}\n</style>\n<div class=\"card-container\">\n    <div class=\"product-card\">\n        <div class=\"card-thumb\"></div>\n        <div class=\"card-title\">로지텍 MX Master 3S 마우스</div>\n        <div class=\"card-price\">139,000원</div>\n    </div>\n</div>",
        "sample_input": "CSS 렌더링",
        "sample_output": "카드 UI 및 마우스 호버 트랜지션 애니메이션 확인",
        "expected": "카드 UI 및 마우스 호버 트랜지션 애니메이션 확인",
        "hint": "1. `transition: transform 0.25s ease, box-shadow 0.25s ease;`를 기본 상태에 선언해야 호버 시와 벗어날 때 모두 부드럽게 동작합니다.\n2. `transform: translateY(-6px);`로 카드를 살짝 위로 띄우고 그림자를 강조합니다."
    },
    {
        "id": "day14_상",
        "day": 14,
        "subject": "Web",
        "difficulty": "상",
        "title": "반응형 CSS Grid 갤러리 및 미디어 쿼리 (ResponsiveGridGallery)",
        "desc": "화면 너비에 따라 열 수가 자동으로 유연하게 조절되는 반응형 그리드 갤러리를 구축하세요.\n- `display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;`\n- 모바일 반응형 미디어 쿼리(`@media (max-width: 600px)`): 간격을 `12px`로 줄이고 1열로 고정",
        "template": "<style>\n/* CSS Grid 갤러리 및 미디어 쿼리를 작성하세요 */\n</style>\n",
        "solution": "<style>\n.gallery-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    gap: 24px;\n    padding: 20px;\n}\n.gallery-item {\n    background-color: #f8fafc;\n    border: 1px solid #cbd5e1;\n    border-radius: 10px;\n    padding: 24px;\n    text-align: center;\n    font-weight: 600;\n}\n@media (max-width: 600px) {\n    .gallery-grid {\n        grid-template-columns: 1fr;\n        gap: 12px;\n        padding: 12px;\n    }\n}\n</style>\n<div class=\"gallery-grid\">\n    <div class=\"gallery-item\">상품 1</div>\n    <div class=\"gallery-item\">상품 2</div>\n    <div class=\"gallery-item\">상품 3</div>\n    <div class=\"gallery-item\">상품 4</div>\n</div>",
        "sample_input": "CSS 렌더링",
        "sample_output": "화면 폭에 맞춰 열 개수가 변하는 Grid 갤러리 확인",
        "expected": "화면 폭에 맞춰 열 개수가 변하는 Grid 갤러리 확인",
        "hint": "1. `repeat(auto-fit, minmax(220px, 1fr))`은 최소 220px을 보장하면서 남는 여백을 1fr 비율로 균등 분할하여 자동으로 줄바꿈해 줍니다.\n2. `@media (max-width: 600px)` 미디어 쿼리로 모바일 해상도에서 1열 전체 너비로 전환합니다."
    },
    {
        "id": "day14_도전",
        "day": 14,
        "subject": "Web",
        "difficulty": "도전",
        "title": "CSS Grid Area 기반 모던 관리자 대시보드 레이아웃 (DashboardGridArea)",
        "desc": "데스크톱에서는 좌측 고정 사이드바(240px) + 우측 3단(헤더, 메인, 푸터) 구조를 이루고, 모바일(`max-width: 768px`)에서는 세로 1열 스택 구조로 자동 전환되는 관리자 대시보드 레이아웃을 `grid-template-areas` 기법으로 작성하세요.\n- 데스크톱 영역: `\"sidebar header\" \"sidebar main\" \"sidebar footer\"`\n- 모바일 영역: `\"header\" \"sidebar\" \"main\" \"footer\"`\n- CSS 변수(`--primary-bg`, `--card-bg`)를 선언하여 유지보수성을 극대화하세요.",
        "template": "<style>\n/* Grid Area 대시보드 CSS를 작성하세요 */\n</style>\n",
        "solution": "<style>\n:root {\n    --primary-bg: #0f172a;\n    --sidebar-bg: #1e293b;\n    --card-bg: #334155;\n    --text-color: #f8fafc;\n}\n.dashboard-layout {\n    display: grid;\n    grid-template-columns: 240px 1fr;\n    grid-template-rows: 60px 1fr 50px;\n    grid-template-areas:\n        \"sidebar header\"\n        \"sidebar main\"\n        \"sidebar footer\";\n    min-height: 100vh;\n    color: var(--text-color);\n    background-color: var(--primary-bg);\n}\n.dash-header  { grid-area: header; background-color: var(--sidebar-bg); padding: 16px; border-bottom: 1px solid #475569; }\n.dash-sidebar { grid-area: sidebar; background-color: var(--sidebar-bg); padding: 20px; border-right: 1px solid #475569; }\n.dash-main    { grid-area: main; padding: 24px; background-color: var(--primary-bg); }\n.dash-footer  { grid-area: footer; background-color: var(--sidebar-bg); padding: 12px; text-align: center; font-size: 12px; }\n\n@media (max-width: 768px) {\n    .dashboard-layout {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto;\n        grid-template-areas:\n            \"header\"\n            \"sidebar\"\n            \"main\"\n            \"footer\";\n    }\n}\n</style>\n<div class=\"dashboard-layout\">\n    <header class=\"dash-header\">헤더 네비게이션</header>\n    <aside class=\"dash-sidebar\">사이드바 메뉴</aside>\n    <main class=\"dash-main\">대시보드 메인 콘텐츠 분석 그래프</main>\n    <footer class=\"dash-footer\">&copy; 2026 Admin Dashboard</footer>\n</div>",
        "sample_input": "CSS 렌더링",
        "sample_output": "반응형 Grid Area 대시보드 레이아웃 확인",
        "expected": "반응형 Grid Area 대시보드 레이아웃 확인",
        "hint": "1. `grid-template-areas`는 레이아웃의 영역 배치를 시각적으로 직관적이게 네이밍하여 설계하는 모던 CSS Grid 기법입니다.\n2. 미디어 쿼리 내부에서 영역 배치 문자열만 재선언해주면 HTML 변경 없이 반응형 전환이 완성됩니다."
    },
    {
        "id": "day15_하1",
        "day": 15,
        "subject": "Web",
        "difficulty": "하",
        "title": "장바구니 총 주문 금액 계산기 (CartSubtotalCalculator)",
        "desc": "장바구니에 담긴 상품 수 N과 각 상품의 단가 및 수량이 주어집니다. `reduce()`를 활용하여 장바구니 총 주문 금액을 산출하세요.\n\n[입력]\n첫째 줄: 상품 수 N\n둘째 줄부터 N개 줄: 단가 수량\n(예:\n3\n15000 2\n3200 5\n89000 1)",
        "template": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\n// 여기에 자바스크립트 코드를 작성하세요\n",
        "solution": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\nconst n = parseInt(lines[0], 10);\nconst items = [];\nfor (let i = 1; i <= n; i++) {\n    const [price, qty] = lines[i].split(/\\s+/).map(Number);\n    items.push({ price, qty });\n}\n\nconst totalAmount = items.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);\n\nconsole.log('=== 장바구니 결제 금액 산출서 ===');\nconsole.log(`담긴 상품 품목 수: ${n}개`);\nconsole.log(`최종 결제 금액: ${totalAmount.toLocaleString()}원`);",
        "sample_input": "3\n15000 2\n3200 5\n89000 1",
        "sample_output": "=== 장바구니 결제 금액 산출서 ===\n담긴 상품 품목 수: 3개\n최종 결제 금액: 135,000원",
        "expected": "=== 장바구니 결제 금액 산출서 ===\n담긴 상품 품목 수: 3개\n최종 결제 금액: 135,000원",
        "hint": "1. `items.reduce((acc, cur) => acc + (cur.price * cur.qty), 0)` 형태로 누적합을 구합니다.\n2. 숫자에 천 단위 콤마를 찍으려면 `totalAmount.toLocaleString()`을 사용합니다."
    },
    {
        "id": "day15_하2",
        "day": 15,
        "subject": "Web",
        "difficulty": "하",
        "title": "재고 있는 상품 필터링 및 이름 추출 (filter & map)",
        "desc": "장바구니 상품 목록에서 품절되지 않고 구매 가능한(inStock === true) 상품만 선별(filter)하고, 해당 상품들의 이름(name) 배열을 출력하세요.\n\n[입력]\n첫째 줄에 상품 수 N이 주어집니다.\n둘째 줄부터 N개 줄에 걸쳐 '상품명 가격 수량 재고여부(true/false)'가 공백으로 구분되어 주어집니다.\n(예:\n5\n무선마우스 25000 2 true\n기계식키보드 89000 1 false\n게이밍헤드셋 54000 1 true\n장패드 12000 3 true\nUSB허브 18000 1 false)",
        "template": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\n// 여기에 코드를 작성하세요\n",
        "solution": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\nconst n = parseInt(lines[0], 10);\nconst cart = [];\nfor (let i = 1; i <= n; i++) {\n    const [name, price, quantity, inStock] = lines[i].split(/\\s+/);\n    cart.push({\n        name,\n        price: Number(price),\n        quantity: Number(quantity),\n        inStock: inStock === 'true'\n    });\n}\n\nconst availableNames = cart.filter(item => item.inStock).map(item => item.name);\nconsole.log(availableNames);",
        "sample_input": "5\n무선마우스 25000 2 true\n기계식키보드 89000 1 false\n게이밍헤드셋 54000 1 true\n장패드 12000 3 true\nUSB허브 18000 1 false",
        "sample_output": "[ '무선마우스', '게이밍헤드셋', '장패드' ]",
        "expected": "[ '무선마우스', '게이밍헤드셋', '장패드' ]",
        "hint": "1. `array.filter(item => item.inStock)`로 재고 있는 상품만 걸러냅니다.\n2. 걸러진 배열에 `.map(item => item.name)`을 적용하여 상품명만 추출합니다."
    },
    {
        "id": "day15_중1",
        "day": 15,
        "subject": "Web",
        "difficulty": "중",
        "title": "특정 상품의 구매 수량 변경 함수 (불변성 유지 업데이트)",
        "desc": "장바구니 상품 목록과 수량을 변경할 상품의 ID 및 새 수량이 주어집니다. 원본 배열을 변형하지 않고 스프레드 연산자(...)와 map()을 활용하여 불변성을 유지하며 수량을 갱신(최소 1개 이상 유지)한 뒤, 변경된 상품 객체와 전체 장바구니 상품들의 총 수량을 출력하세요.\n\n[입력]\n첫째 줄에 상품 수 N, 변경 대상 상품ID, 새 수량이 공백으로 주어집니다.\n둘째 줄부터 N개 줄에 '상품ID 상품명 기존수량'이 주어집니다.\n(예:\n3 p-01 5\np-01 무선마우스 2\np-02 기계식키보드 1\np-03 게이밍헤드셋 3)",
        "template": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\n// 여기에 코드를 작성하세요\n",
        "solution": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\nconst [nStr, targetId, newQtyStr] = lines[0].split(/\\s+/);\nconst n = parseInt(nStr, 10);\nconst newQty = parseInt(newQtyStr, 10);\n\nconst cart = [];\nfor (let i = 1; i <= n; i++) {\n    const [id, name, qty] = lines[i].split(/\\s+/);\n    cart.push({ id, name, quantity: parseInt(qty, 10) });\n}\n\nconst updatedCart = cart.map(item => {\n    if (item.id === targetId) {\n        return { ...item, quantity: Math.max(1, newQty) };\n    }\n    return item;\n});\n\nconst updatedItem = updatedCart.find(item => item.id === targetId);\nconst totalQty = updatedCart.reduce((sum, item) => sum + item.quantity, 0);\n\nconsole.log('수량 변경 완료:', updatedItem);\nconsole.log(`장바구니 총 담긴 수량: ${totalQty}개`);",
        "sample_input": "3 p-01 5\np-01 무선마우스 2\np-02 기계식키보드 1\np-03 게이밍헤드셋 3",
        "sample_output": "수량 변경 완료: { id: 'p-01', name: '무선마우스', quantity: 5 }\n장바구니 총 담긴 수량: 9개",
        "expected": "수량 변경 완료: { id: 'p-01', name: '무선마우스', quantity: 5 }\n장바구니 총 담긴 수량: 9개",
        "hint": "1. React 등 모던 프론트엔드에서는 불변성(Immutability) 유지가 필수입니다.\n2. `cart.map(item => item.id === targetId ? { ...item, quantity: newQty } : item)` 문법을 사용합니다."
    },
    {
        "id": "day15_중2",
        "day": 15,
        "subject": "Web",
        "difficulty": "중",
        "title": "회원 등급별 할인율 및 마일리지 계산기 (MemberTierDiscount)",
        "desc": "고객 등급(VIP, GOLD, SILVER, BRONZE)과 결제 원금을 입력받아 등급별 할인 및 적립 포인트를 계산하세요.\n- VIP: 15% 할인, 5% 적립\n- GOLD: 10% 할인, 3% 적립\n- SILVER: 5% 할인, 1% 적립\n- BRONZE: 할인 없음(0%), 1% 적립\n- 모든 금액은 정수(Math.floor) 처리합니다.\n\n[입력]\n회원등급 결제원금\n(예: GOLD 80000)",
        "template": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\n// 여기에 코드를 작성하세요\n",
        "solution": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\nconst [tier, amountStr] = lines[0].split(/\\s+/);\nconst amount = parseInt(amountStr, 10);\n\nconst tierPolicy = {\n    VIP: { discountRate: 0.15, pointRate: 0.05 },\n    GOLD: { discountRate: 0.10, pointRate: 0.03 },\n    SILVER: { discountRate: 0.05, pointRate: 0.01 },\n    BRONZE: { discountRate: 0.00, pointRate: 0.01 }\n};\n\nconst policy = tierPolicy[tier] || tierPolicy.BRONZE;\nconst discount = Math.floor(amount * policy.discountRate);\nconst finalPrice = amount - discount;\nconst point = Math.floor(finalPrice * policy.pointRate);\n\nconsole.log('=== 멤버십 혜택 정산서 ===');\nconsole.log(`고객 등급: ${tier}`);\nconsole.log(`결제 원금: ${amount.toLocaleString()}원`);\nconsole.log(`등급 할인: -${discount.toLocaleString()}원`);\nconsole.log(`최종 결제 금액: ${finalPrice.toLocaleString()}원`);\nconsole.log(`적립 포인트: ${point.toLocaleString()}P`);",
        "sample_input": "GOLD 80000",
        "sample_output": "=== 멤버십 혜택 정산서 ===\n고객 등급: GOLD\n결제 원금: 80,000원\n등급 할인: -8,000원\n최종 결제 금액: 72,000원\n적립 포인트: 2,160P",
        "expected": "=== 멤버십 혜택 정산서 ===\n고객 등급: GOLD\n결제 원금: 80,000원\n등급 할인: -8,000원\n최종 결제 금액: 72,000원\n적립 포인트: 2,160P",
        "hint": "1. if-else 대신 객체 매핑(`tierPolicy[tier]`)을 사용하면 코드가 훨씬 깔끔해집니다.\n2. `Math.floor()`로 소수점 이하 금액을 버립니다."
    },
    {
        "id": "day15_상",
        "day": 15,
        "subject": "Web",
        "difficulty": "상",
        "title": "복합 쿠폰 적용 및 조건부 무료배송 파이프라인 (OrderCheckoutPipeline)",
        "desc": "장바구니 상품 목록과 쿠폰 종류(FIXED_5000: 5천원 차감, PERCENT_10: 10% 감면)를 입력받아 결제 파이프라인을 완성하세요.\n- 기본 배송비: 3,000원\n- 무료 배송 조건: 쿠폰 적용 후 순수 상품 금액이 50,000원 이상이면 무료(0원)\n- 최종 결제 총액 = (할인 적용 후 상품 금액) + 배송비\n\n[입력]\n첫째 줄: 쿠폰종류(FIXED_5000 또는 PERCENT_10) 상품품목수N\n둘째 줄부터 N개 줄: 단가 수량\n(예:\nFIXED_5000 2\n28000 1\n32000 1)",
        "template": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\n// 여기에 코드를 작성하세요\n",
        "solution": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\nconst [coupon, nStr] = lines[0].split(/\\s+/);\nconst n = parseInt(nStr, 10);\n\nlet subtotal = 0;\nfor (let i = 1; i <= n; i++) {\n    const [price, qty] = lines[i].split(/\\s+/).map(Number);\n    subtotal += price * qty;\n}\n\nlet discount = 0;\nif (coupon === 'FIXED_5000') {\n    discount = 5000;\n} else if (coupon === 'PERCENT_10') {\n    discount = Math.floor(subtotal * 0.1);\n}\ndiscount = Math.min(discount, subtotal);\n\nconst discountedSubtotal = subtotal - discount;\nconst shippingFee = (discountedSubtotal >= 50000) ? 0 : 3000;\nconst totalPayment = discountedSubtotal + shippingFee;\n\nconsole.log('=== 주문 최종 결제 확인서 ===');\nconsole.log(`주문 상품 합계: ${subtotal.toLocaleString()}원`);\nconsole.log(`쿠폰 적용 할인: -${discount.toLocaleString()}원 (${coupon})`);\nconsole.log(`배송비: ${shippingFee === 0 ? '무료 (50,000원 이상 구매)' : shippingFee.toLocaleString() + '원'}`);\nconsole.log('---------------------------------');\nconsole.log(`최종 결제 금액: ${totalPayment.toLocaleString()}원`);",
        "sample_input": "FIXED_5000 2\n28000 1\n32000 1",
        "sample_output": "=== 주문 최종 결제 확인서 ===\n주문 상품 합계: 60,000원\n쿠폰 적용 할인: -5,000원 (FIXED_5000)\n배송비: 무료 (50,000원 이상 구매)\n---------------------------------\n최종 결제 금액: 55,000원",
        "expected": "=== 주문 최종 결제 확인서 ===\n주문 상품 합계: 60,000원\n쿠폰 적용 할인: -5,000원 (FIXED_5000)\n배송비: 무료 (50,000원 이상 구매)\n---------------------------------\n최종 결제 금액: 55,000원",
        "hint": "1. `subtotal`을 계산한 후 쿠폰 종류에 따라 고정 금액 또는 비율 할인을 계산합니다.\n2. 할인액이 원금을 초과하지 않도록 `Math.min(discount, subtotal)` 처리를 해줍니다.\n3. 할인 후 금액이 50,000원 이상이면 삼항 연산자로 배송비 0원(무료)을 적용합니다."
    },
    {
        "id": "day15_도전",
        "day": 15,
        "subject": "Web",
        "difficulty": "도전",
        "title": "LRU(Least Recently Used) 페이지 교체 캐시 알고리즘 구현 (LruCache)",
        "desc": "최대 용량 `capacity`를 갖는 LRU 캐시 자료구조를 자바스크립트로 구현하세요.\n- `Map`의 삽입 순서 보장 특성을 활용합니다.\n- `PUT key value`: 캐시에 키-값을 저장합니다. 이미 존재하는 키라면 값을 갱신하고 가장 최근 사용(MRU) 위치로 이동합니다. 용량이 가득 찼다면 가장 오래 사용되지 않은(LRU) 첫 번째 항목을 제거(Evict)한 후 저장합니다.\n- `GET key`: 캐시에서 값을 조회하고 해당 항목을 가장 최근 사용 위치로 갱신합니다. (없으면 -1 출력)\n\n[입력]\n첫째 줄: 캐시용량C 명령어수N\n둘째 줄부터 N개 줄: 명령어(PUT key value 또는 GET key)\n(예:\n2 5\nPUT 1 10\nPUT 2 20\nGET 1\nPUT 3 30\nGET 2)",
        "template": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\n// 여기에 LRU Cache 클래스와 실행 로직을 작성하세요\n",
        "solution": "const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n').map(l => l.trim()).filter(Boolean);\nif (lines.length === 0) process.exit(0);\n\nclass LRUCache {\n    constructor(capacity) {\n        this.capacity = capacity;\n        this.cache = new Map();\n    }\n\n    get(key) {\n        if (!this.cache.has(key)) return -1;\n        const val = this.cache.get(key);\n        this.cache.delete(key);\n        this.cache.set(key, val);\n        return val;\n    }\n\n    put(key, val) {\n        if (this.cache.has(key)) {\n            this.cache.delete(key);\n        } else if (this.cache.size >= this.capacity) {\n            const oldestKey = this.cache.keys().next().value;\n            this.cache.delete(oldestKey);\n        }\n        this.cache.set(key, val);\n    }\n}\n\nconst [capStr, nStr] = lines[0].split(/\\s+/);\nconst lru = new LRUCache(parseInt(capStr, 10));\nconst n = parseInt(nStr, 10);\n\nconsole.log(`=== LRU 캐시 시뮬레이터 (용량: ${capStr}) ===`);\nfor (let i = 1; i <= n; i++) {\n    const parts = lines[i].split(/\\s+/);\n    const cmd = parts[0];\n    if (cmd === 'PUT') {\n        lru.put(parts[1], parts[2]);\n        console.log(`PUT ${parts[1]}=${parts[2]} -> 캐시상태: [${Array.from(lru.cache.keys()).join(', ')}]`);\n    } else if (cmd === 'GET') {\n        const res = lru.get(parts[1]);\n        console.log(`GET ${parts[1]} -> ${res}`);\n    }\n}",
        "sample_input": "2 5\nPUT 1 10\nPUT 2 20\nGET 1\nPUT 3 30\nGET 2",
        "sample_output": "=== LRU 캐시 시뮬레이터 (용량: 2) ===\nPUT 1=10 -> 캐시상태: [1]\nPUT 2=20 -> 캐시상태: [1, 2]\nGET 1 -> 10\nPUT 3=30 -> 캐시상태: [1, 3]\nGET 2 -> -1",
        "expected": "=== LRU 캐시 시뮬레이터 (용량: 2) ===\nPUT 1=10 -> 캐시상태: [1]\nPUT 2=20 -> 캐시상태: [1, 2]\nGET 1 -> 10\nPUT 3=30 -> 캐시상태: [1, 3]\nGET 2 -> -1",
        "hint": "1. 자바스크립트의 `Map` 객체는 키의 삽입 순서를 엄격하게 보존합니다.\n2. `delete(key)` 후 다시 `set(key, value)`를 호출하면 해당 키가 Map의 가장 끝(가장 최근)으로 이동합니다.\n3. 가장 오래된 첫 번째 키는 `map.keys().next().value`로 O(1)에 바로 추출할 수 있습니다."
    },
    {
        "id": "day16_하1",
        "day": 16,
        "subject": "Web",
        "difficulty": "하",
        "title": "DOM 카운터 컴포넌트 이벤트 핸들러 (CounterComponent)",
        "desc": "수량을 증가(+), 감소(-) 시키는 카운터 버튼과 현재 수량을 표시하는 DOM 요소를 제어하세요.\n- `+` 버튼 클릭 시 수량 1 증가\n- `-` 버튼 클릭 시 수량 1 감소 (단, 최소 수량 1 이하로 내려가지 않도록 방어)\n- `document.getElementById()`, `addEventListener('click', ...)` 활용",
        "template": "<div id=\"counter-app\">\n    <button id=\"btn-decrease\">-</button>\n    <span id=\"count-display\">1</span>\n    <button id=\"btn-increase\">+</button>\n</div>\n<script>\n// 여기에 DOM 조작 스크립트를 작성하세요\n</script>",
        "solution": "<div id=\"counter-app\">\n    <button id=\"btn-decrease\">-</button>\n    <span id=\"count-display\">1</span>\n    <button id=\"btn-increase\">+</button>\n</div>\n<script>\nlet count = 1;\nconst countDisplay = document.getElementById('count-display');\nconst btnDecrease = document.getElementById('btn-decrease');\nconst btnIncrease = document.getElementById('btn-increase');\n\nbtnIncrease.addEventListener('click', () => {\n    count++;\n    countDisplay.textContent = count;\n});\n\nbtnDecrease.addEventListener('click', () => {\n    if (count > 1) {\n        count--;\n        countDisplay.textContent = count;\n    }\n});\n</script>",
        "sample_input": "DOM 인터랙션",
        "sample_output": "수량 증감 DOM 동적 반영 확인",
        "expected": "수량 증감 DOM 동적 반영 확인",
        "hint": "1. `element.addEventListener('click', callback)`으로 클릭 이벤트를 등록합니다.\n2. `countDisplay.textContent = count;`로 화면에 표시되는 숫자를 갱신합니다."
    },
    {
        "id": "day16_중1",
        "day": 16,
        "subject": "Web",
        "difficulty": "중",
        "title": "동적 할 일 목록(Todo List) 추가 및 삭제 (TodoListDOM)",
        "desc": "입력창에 텍스트를 입력하고 '추가' 버튼을 누르면 `<ul>` 목록에 새로운 `<li>` 항목과 '삭제' 버튼을 동적으로 생성(`document.createElement`)하여 삽입하고, '삭제' 버튼 클릭 시 해당 `<li>`가 DOM에서 제거(`remove()`)되도록 구현하세요.",
        "template": "<div id=\"todo-app\">\n    <input type=\"text\" id=\"todo-input\" placeholder=\"새 할 일\">\n    <button id=\"btn-add\">추가</button>\n    <ul id=\"todo-list\"></ul>\n</div>\n<script>\n// 동적 Todo 스크립트를 작성하세요\n</script>",
        "solution": "<div id=\"todo-app\">\n    <input type=\"text\" id=\"todo-input\" placeholder=\"새 할 일\">\n    <button id=\"btn-add\">추가</button>\n    <ul id=\"todo-list\"></ul>\n</div>\n<script>\nconst todoInput = document.getElementById('todo-input');\nconst btnAdd = document.getElementById('btn-add');\nconst todoList = document.getElementById('todo-list');\n\nfunction addTodo() {\n    const text = todoInput.value.trim();\n    if (!text) return;\n\n    const li = document.createElement('li');\n    li.textContent = text + ' ';\n\n    const delBtn = document.createElement('button');\n    delBtn.textContent = '삭제';\n    delBtn.addEventListener('click', () => {\n        li.remove();\n    });\n\n    li.appendChild(delBtn);\n    todoList.appendChild(li);\n    todoInput.value = '';\n    todoInput.focus();\n}\n\nbtnAdd.addEventListener('click', addTodo);\ntodoInput.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') addTodo();\n});\n</script>",
        "sample_input": "DOM 인터랙션",
        "sample_output": "동적 li 생성 및 삭제 동작 확인",
        "expected": "동적 li 생성 및 삭제 동작 확인",
        "hint": "1. `document.createElement('li')`로 요소를 동적 생성하고 `appendChild()`로 부모에 붙입니다.\n2. 생성된 요소 내부의 삭제 버튼에 `li.remove()` 이벤트 리스너를 직접 바인딩합니다."
    },
    {
        "id": "day16_중2",
        "day": 16,
        "subject": "Web",
        "difficulty": "중",
        "title": "비동기 API 요청 및 로딩/에러 UI 상태 처리 (AsyncDataFetch)",
        "desc": "가상의 비동기 API 통신 함수 `fetchUserProfile(userId)`(Promise 반환)를 호출하여 데이터를 가져오는 동안에는 `#status`에 `\"로딩 중...\"`을 표시하고, 성공 시 사용자 정보를 렌더링하며, 실패(`try-catch`) 시 에러 메시지를 표시하는 비동기(`async/await`) 함수를 구현하세요.",
        "template": "<div id=\"user-app\">\n    <button id=\"btn-load\">프로필 불러오기</button>\n    <div id=\"status\"></div>\n    <div id=\"profile-card\" style=\"display:none;\">\n        <h3 id=\"user-name\"></h3>\n        <p id=\"user-email\"></p>\n    </div>\n</div>\n<script>\n// 비동기 fetch 및 UI 상태 핸들러 작성\n</script>",
        "solution": "<div id=\"user-app\">\n    <button id=\"btn-load\">프로필 불러오기</button>\n    <div id=\"status\"></div>\n    <div id=\"profile-card\" style=\"display:none;\">\n        <h3 id=\"user-name\"></h3>\n        <p id=\"user-email\"></p>\n    </div>\n</div>\n<script>\nfunction mockFetchUser(id) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            if (id > 0) {\n                resolve({ id, name: '홍길동', email: 'hong@likelion.net' });\n            } else {\n                reject(new Error('존재하지 않는 사용자입니다.'));\n            }\n        }, 500);\n    });\n}\n\nconst statusDiv = document.getElementById('status');\nconst profileCard = document.getElementById('profile-card');\nconst userName = document.getElementById('user-name');\nconst userEmail = document.getElementById('user-email');\nconst btnLoad = document.getElementById('btn-load');\n\nbtnLoad.addEventListener('click', async () => {\n    statusDiv.textContent = '데이터를 불러오는 중입니다...';\n    profileCard.style.display = 'none';\n\n    try {\n        const user = await mockFetchUser(1);\n        statusDiv.textContent = '';\n        userName.textContent = user.name;\n        userEmail.textContent = user.email;\n        profileCard.style.display = 'block';\n    } catch (err) {\n        statusDiv.textContent = '오류: ' + err.message;\n    }\n});\n</script>",
        "sample_input": "비동기 요청",
        "sample_output": "로딩 -> 데이터 수신 및 프로필 렌더링 확인",
        "expected": "로딩 -> 데이터 수신 및 프로필 렌더링 확인",
        "hint": "1. `async () => { ... }` 함수 안에서 `await promise` 구문을 사용합니다.\n2. 통신 전 `로딩 중` 상태 표시 -> 완료 후 결과 렌더링 -> `catch(err)`로 예외 상황을 처리합니다."
    },
    {
        "id": "day16_상",
        "day": 16,
        "subject": "Web",
        "difficulty": "상",
        "title": "쇼핑몰 장바구니 실시간 동적 렌더링 및 합계 계산기 (LiveCartManager)",
        "desc": "장바구니 데이터 배열 `cartState`를 바탕으로, 각 품목의 수량 증감 버튼(`+`, `-`)을 클릭할 때마다 불변성을 유지하며 상태를 변경하고, 변경된 데이터를 기반으로 장바구니 목록과 최종 결제 금액(`total-price`)을 화면에 실시간으로 다시 렌더링(`render()`)하는 기능을 구현하세요.",
        "template": "<div id=\"cart-app\">\n    <div id=\"cart-items\"></div>\n    <div id=\"total-summary\">총 결제 금액: <span id=\"total-price\">0</span>원</div>\n</div>\n<script>\n// 실시간 장바구니 상태 및 렌더링 스크립트 작성\n</script>",
        "solution": "<div id=\"cart-app\">\n    <div id=\"cart-items\"></div>\n    <div id=\"total-summary\">총 결제 금액: <strong id=\"total-price\">0</strong>원</div>\n</div>\n<script>\nlet cartState = [\n    { id: 1, name: '기계식 키보드', price: 89000, qty: 1 },\n    { id: 2, name: '게이밍 마우스', price: 45000, qty: 2 }\n];\n\nconst cartItemsContainer = document.getElementById('cart-items');\nconst totalPriceEl = document.getElementById('total-price');\n\nfunction render() {\n    cartItemsContainer.innerHTML = '';\n    let total = 0;\n\n    cartState.forEach(item => {\n        total += item.price * item.qty;\n\n        const row = document.createElement('div');\n        row.className = 'cart-row';\n        row.style.margin = '10px 0';\n        row.innerHTML = `\n            <span>${item.name} (${item.price.toLocaleString()}원)</span>\n            <button class=\"btn-minus\" data-id=\"${item.id}\">-</button>\n            <span>${item.qty}개</span>\n            <button class=\"btn-plus\" data-id=\"${item.id}\">+</button>\n            <span>= ${(item.price * item.qty).toLocaleString()}원</span>\n        `;\n        cartItemsContainer.appendChild(row);\n    });\n\n    totalPriceEl.textContent = total.toLocaleString();\n}\n\ncartItemsContainer.addEventListener('click', (e) => {\n    const id = parseInt(e.target.dataset.id, 10);\n    if (e.target.classList.contains('btn-plus')) {\n        cartState = cartState.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i);\n        render();\n    } else if (e.target.classList.contains('btn-minus')) {\n        cartState = cartState.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i);\n        render();\n    }\n});\n\nrender();\n</script>",
        "sample_input": "DOM 이벤트 위임 인터랙션",
        "sample_output": "수량 변경 시 실시간 품목 금액 및 총액 갱신 확인",
        "expected": "수량 변경 시 실시간 품목 금액 및 총액 갱신 확인",
        "hint": "1. 상태 중심 렌더링 패턴: 데이터를 변경하고 `render()` 함수를 다시 호출하여 UI를 데이터와 일치시킵니다.\n2. 동적으로 생성되는 버튼들에 개별 리스너를 달지 않고 부모 컨테이너에 이벤트 위임(`cartItemsContainer.addEventListener('click', ...)` + `e.target.dataset.id`)을 적용합니다."
    },
    {
        "id": "day16_도전",
        "day": 16,
        "subject": "Web",
        "difficulty": "도전",
        "title": "Proxy 기반 미니 반응형 상태 관리 엔진 (MiniReactiveStore)",
        "desc": "Vue.js 3나 MobX의 핵심 원리인 `Proxy` 기반의 초경량 반응형 상태 관리 함수 `createReactiveStore(initialState)`를 구현하세요.\n- 상태 객체의 속성값을 변경할 때마다 사전에 등록된 구독자(`subscribe(callback)`) 리스너들이 자동으로 감지되어 UI를 실시간 리렌더링하도록 작성하세요.",
        "template": "<div id=\"reactive-app\">\n    <button id=\"btn-inc\">1 증가</button>\n    <div id=\"render-output\"></div>\n</div>\n<script>\n// Proxy 기반 상태 관리자 작성\n</script>",
        "solution": "<div id=\"reactive-app\">\n    <button id=\"btn-inc\">1 증가</button>\n    <div id=\"render-output\"></div>\n</div>\n<script>\nfunction createReactiveStore(initialState) {\n    const listeners = [];\n    \n    const handler = {\n        set(target, prop, value) {\n            target[prop] = value;\n            listeners.forEach(fn => fn(target));\n            return true;\n        }\n    };\n\n    const state = new Proxy(initialState, handler);\n\n    return {\n        state,\n        subscribe(fn) {\n            listeners.push(fn);\n            fn(state); // 초기 1회 즉시 실행\n        }\n    };\n}\n\nconst store = createReactiveStore({ count: 0, user: '홍길동' });\nconst output = document.getElementById('render-output');\nconst btnInc = document.getElementById('btn-inc');\n\nstore.subscribe((state) => {\n    output.innerHTML = `현재 카운트: <strong>${state.count}</strong> (작성자: ${state.user})`;\n});\n\nbtnInc.addEventListener('click', () => {\n    store.state.count++; // 상태 변경 시 자동으로 subscribe 리스너가 호출되어 UI 갱신\n});\n</script>",
        "sample_input": "Proxy 상태 변경 인터랙션",
        "sample_output": "Proxy set 감지 및 UI 자동 렌더링 확인",
        "expected": "Proxy set 감지 및 UI 자동 렌더링 확인",
        "hint": "1. `new Proxy(target, { set(target, prop, val) { ... } })`는 객체의 속성 할당 연산을 가로챕니다(Intercept).\n2. 속성 변경 감지 즉시 `listeners.forEach(fn => fn(target))`를 실행함으로써 현대 프론트엔드 프레임워크의 반응성(Reactivity)을 구현할 수 있습니다."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROBLEMS;
}
