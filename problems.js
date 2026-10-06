// 멋쟁이사자처럼 9기 전체 16일차 실습 문제 데이터셋 (3시간 맞춤형 94제)
// 각 일차별 상/중/하/도전 난이도 필수 포함 및 초보자 힌트 탑재
// 1일차 6제 / 2일차 10제 / 3일차 10제 고도화 완료 (CS 핵심 지식 및 로직 가이드, 3개 예제 탑재)

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
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int americanoPrice = sc.nextInt();\n        int americanoQty = sc.nextInt();\n        int lattePrice = sc.nextInt();\n        int latteQty = sc.nextInt();\n\n        int supplyPrice = (americanoPrice * americanoQty) + (lattePrice * latteQty);\n        int vat = (int) (supplyPrice * 0.1);\n        int totalAmount = supplyPrice + vat;\n\n        System.out.println(\"=== 스타카페 주문 영수증 ===\");\n        System.out.printf(\"아메리카노 (%d원 x %d잔): %d원\\n\", americanoPrice, americanoQty, americanoPrice * americanoQty);\n        System.out.printf(\"카페라떼 (%d원 x %d잔): %d원\\n\", lattePrice, latteQty, lattePrice * latteQty);\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"공급가액: %d원\\n\", supplyPrice);\n        System.out.printf(\"부가세(10%%): %d원\\n\", vat);\n        System.out.printf(\"최종 결제 금액: %d원\\n\", totalAmount);\n    }\n}\n",
        "sample_input": "4500 2 5000 3",
        "sample_output": "=== 스타카페 주문 영수증 ===\n아메리카노 (4500원 x 2잔): 9000원\n카페라떼 (5000원 x 3잔): 15000원\n---------------------------------\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원",
        "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (4500원 x 2잔): 9000원\n카페라떼 (5000원 x 3잔): 15000원\n---------------------------------\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원",
        "hint": "1. 4개의 정수를 sc.nextInt()로 순서대로 입력받습니다:\n   int americanoPrice = sc.nextInt(); int americanoQty = sc.nextInt();\n   int lattePrice = sc.nextInt(); int latteQty = sc.nextInt();\n2. 부가세는 공급가액의 10%이며, 소수점을 버리고 정수로 변환하기 위해 (int) (supplyPrice * 0.1) 형태로 명시적 형변환을 적용합니다.\n3. System.out.printf() 서식 출력에서 % 기호 자체를 출력할 때는 %% 로 두 번 작성해야 합니다.",
        "testcases": [
            {
                "input": "4500 2 5000 3",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (4500원 x 2잔): 9000원\n카페라떼 (5000원 x 3잔): 15000원\n---------------------------------\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원",
                "is_hidden": false
            },
            {
                "input": "3000 1 4000 2",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (3000원 x 1잔): 3000원\n카페라떼 (4000원 x 2잔): 8000원\n---------------------------------\n공급가액: 11000원\n부가세(10%): 1100원\n최종 결제 금액: 12100원",
                "is_hidden": false
            },
            {
                "input": "5000 0 6000 1",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (5000원 x 0잔): 0원\n카페라떼 (6000원 x 1잔): 6000원\n---------------------------------\n공급가액: 6000원\n부가세(10%): 600원\n최종 결제 금액: 6600원",
                "is_hidden": false
            },
            {
                "input": "4000 5 5500 0",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (4000원 x 5잔): 20000원\n카페라떼 (5500원 x 0잔): 0원\n---------------------------------\n공급가액: 20000원\n부가세(10%): 2000원\n최종 결제 금액: 22000원",
                "is_hidden": true
            },
            {
                "input": "1500 10 2000 5",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (1500원 x 10잔): 15000원\n카페라떼 (2000원 x 5잔): 10000원\n---------------------------------\n공급가액: 25000원\n부가세(10%): 2500원\n최종 결제 금액: 27500원",
                "is_hidden": true
            },
            {
                "input": "4800 3 5300 2",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (4800원 x 3잔): 14400원\n카페라떼 (5300원 x 2잔): 10600원\n---------------------------------\n공급가액: 25000원\n부가세(10%): 2500원\n최종 결제 금액: 27500원",
                "is_hidden": true
            },
            {
                "input": "3500 1 4500 1",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (3500원 x 1잔): 3500원\n카페라떼 (4500원 x 1잔): 4500원\n---------------------------------\n공급가액: 8000원\n부가세(10%): 800원\n최종 결제 금액: 8800원",
                "is_hidden": true
            },
            {
                "input": "10000 1 12000 1",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (10000원 x 1잔): 10000원\n카페라떼 (12000원 x 1잔): 12000원\n---------------------------------\n공급가액: 22000원\n부가세(10%): 2200원\n최종 결제 금액: 24200원",
                "is_hidden": true
            },
            {
                "input": "2500 4 3500 4",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (2500원 x 4잔): 10000원\n카페라떼 (3500원 x 4잔): 14000원\n---------------------------------\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원",
                "is_hidden": true
            },
            {
                "input": "5000 10 6000 10",
                "expected": "=== 스타카페 주문 영수증 ===\n아메리카노 (5000원 x 10잔): 50000원\n카페라떼 (6000원 x 10잔): 60000원\n---------------------------------\n공급가액: 110000원\n부가세(10%): 11000원\n최종 결제 금액: 121000원",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "4500 2 5000 3",
                "output": "=== 스타카페 주문 영수증 ===\n아메리카노 (4500원 x 2잔): 9000원\n카페라떼 (5000원 x 3잔): 15000원\n---------------------------------\n공급가액: 24000원\n부가세(10%): 2400원\n최종 결제 금액: 26400원"
            },
            {
                "input": "3000 1 4000 2",
                "output": "=== 스타카페 주문 영수증 ===\n아메리카노 (3000원 x 1잔): 3000원\n카페라떼 (4000원 x 2잔): 8000원\n---------------------------------\n공급가액: 11000원\n부가세(10%): 1100원\n최종 결제 금액: 12100원"
            },
            {
                "input": "5000 0 6000 1",
                "output": "=== 스타카페 주문 영수증 ===\n아메리카노 (5000원 x 0잔): 0원\n카페라떼 (6000원 x 1잔): 6000원\n---------------------------------\n공급가액: 6000원\n부가세(10%): 600원\n최종 결제 금액: 6600원"
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
        "title": "컴퓨터 메모리 계층 구조 및 데이터 접근 레이턴시 판별기 (MemoryHierarchy)",
        "desc": "데이터 접근에 소요된 지연 시간(Latency, 단위: ns, 나노초)을 입력받아, 컴퓨터 메모리 계층 구조(Memory Hierarchy) 피라미드에서 어느 계층에서 데이터를 가져왔는지 판정하고, 캐시 히트(Cache Hit) 여부를 서식에 맞게 출력하세요.\n\n[메모리 계층 및 지연 시간 기준표]\n- 1ns 이하 (latency <= 1): \"L1 캐시 (L1 Cache)\" | 판정: \"초고속 캐시 히트\"\n- 10ns 이하 (latency <= 10): \"L2/L3 캐시 (L2/L3 Cache)\" | 판정: \"캐시 히트\"\n- 100ns 이하 (latency <= 100): \"메인 메모리 (DRAM RAM)\" | 판정: \"캐시 미스 (메모리 접근)\"\n- 100,000ns 이하 (latency <= 100000): \"초고속 SSD (NVMe Storage)\" | 판정: \"스토리지 I/O\"\n- 100,000ns 초과: \"하드디스크 / 원격 네트워크 (Disk / Network)\" | 판정: \"고지연 I/O 발생\"\n\n[입력]\n첫째 줄에 데이터 접근 지연 시간(ns, 정수)이 주어집니다.\n\n[출력]\n지연 시간에 따라 판정된 계층과 캐시 히트 상태를 분석표 서식에 맞추어 출력하세요.\n=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: {latency}ns\n데이터 위치: {layer}\n접근 상태 판정: {status}\n\n※ 다양한 상황(캐시 히트, DRAM 접근, 스토리지 I/O 등)에 대한 구체적인 입출력은 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        long latency = sc.nextLong();\n\n        String layer;\n        String status;\n\n        if (latency <= 1) {\n            layer = \"L1 캐시 (L1 Cache)\";\n            status = \"초고속 캐시 히트\";\n        } else if (latency <= 10) {\n            layer = \"L2/L3 캐시 (L2/L3 Cache)\";\n            status = \"캐시 히트\";\n        } else if (latency <= 100) {\n            layer = \"메인 메모리 (DRAM RAM)\";\n            status = \"캐시 미스 (메모리 접근)\";\n        } else if (latency <= 100000) {\n            layer = \"초고속 SSD (NVMe Storage)\";\n            status = \"스토리지 I/O\";\n        } else {\n            layer = \"하드디스크 / 원격 네트워크 (Disk / Network)\";\n            status = \"고지연 I/O 발생\";\n        }\n\n        System.out.println(\"=== 메모리 계층 접근 분석표 ===\");\n        System.out.printf(\"소요 지연 시간: %dns\\n\", latency);\n        System.out.printf(\"데이터 위치: %s\\n\", layer);\n        System.out.printf(\"접근 상태 판정: %s\\n\", status);\n    }\n}\n",
        "sample_input": "8",
        "hint": "1. Scanner sc = new Scanner(System.in); long latency = sc.nextLong(); 로 지연 시간을 읽습니다.\n2. if (latency <= 1) 부터 시작하여 else if (latency <= 10), else if (latency <= 100) 처럼 작은 값(빠른 계층)부터 순차적으로 검사합니다.\n3. 일치하는 블록에서 계층명과 판정 문자열을 변수에 저장한 뒤 마지막에 System.out.printf 로 출력합니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 컴퓨터 메모리 계층 구조(Memory Hierarchy)와 레이턴시 피라미드]\n현대 컴퓨터 시스템은 비용, 물리적 크기, 전력 한계로 인해 하나의 초고속 메모리만으로 컴퓨터를 만들 수 없습니다.\n따라서 CPU 레지스터(0.5ns) ➔ L1/L2/L3 캐시(1~10ns) ➔ 메인 메모리 DRAM(100ns) ➔ NVMe SSD(100,000ns) ➔ HDD/네트워크(수십 ms 이상) 순으로 피라미드 형태의 '메모리 계층 구조(Memory Hierarchy)'를 형성합니다.\n\nCPU 코어가 필요한 데이터를 L1/L2 캐시에서 곧바로 찾는 것을 '캐시 히트(Cache Hit)'라고 부르며 단 몇 나노초 만에 처리가 끝납니다.\n반면 캐시에 없어 DRAM이나 디스크까지 내려가야 하는 경우를 '캐시 미스(Cache Miss)'라 부르며, 이때는 CPU가 수천~수십만 사이클 동안 유휴(Idle) 상태로 대기해야 합니다.\n백엔드 실무에서 Redis 인메모리 캐시 도입, 데이터베이스 버퍼 풀(Buffer Pool) 튜닝, CPU 친화적인 연속 메모리 배열(Cache-friendly Data Structure)을 사용하는 이유가 바로 이 계층 구조상의 속도 격차를 극복하기 위함입니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: Scanner로 지연 시간 입력받기\n   Scanner sc = new Scanner(System.in);\n   long latency = sc.nextLong();\n\n2단계: 다중 조건문 if - else if - else 작성 (반드시 가장 빠른 작은 값부터 순서대로 검사!)\n   String layer;\n   String status;\n   if (latency <= 1) {\n       layer = \"L1 캐시 (L1 Cache)\";\n       status = \"초고속 캐시 히트\";\n   } else if (latency <= 10) {\n       layer = \"L2/L3 캐시 (L2/L3 Cache)\";\n       status = \"캐시 히트\";\n   } else if (latency <= 100) {\n       layer = \"메인 메모리 (DRAM RAM)\";\n       status = \"캐시 미스 (메모리 접근)\";\n   } else if (latency <= 100000) {\n       layer = \"초고속 SSD (NVMe Storage)\";\n       status = \"스토리지 I/O\";\n   } else {\n       layer = \"하드디스크 / 원격 네트워크 (Disk / Network)\";\n       status = \"고지연 I/O 발생\";\n   }\n   (주의: 만약 latency <= 100000 을 맨 위에 두면 1ns도 100000 이하에 걸려버리는 논리 오류가 발생하므로, 작은 값부터 순차적으로 필터링해야 합니다!)\n\n3단계: 서식 맞춤 출력\n   System.out.println(\"=== 메모리 계층 접근 분석표 ===\");\n   System.out.printf(\"소요 지연 시간: %dns\\n\", latency);\n   System.out.printf(\"데이터 위치: %s\\n\", layer);\n   System.out.printf(\"접근 상태 판정: %s\\n\", status);",
        "testcases": [
            {
                "input": "8",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 8ns\n데이터 위치: L2/L3 캐시 (L2/L3 Cache)\n접근 상태 판정: 캐시 히트",
                "is_hidden": false
            },
            {
                "input": "1",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 1ns\n데이터 위치: L1 캐시 (L1 Cache)\n접근 상태 판정: 초고속 캐시 히트",
                "is_hidden": false
            },
            {
                "input": "100",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 100ns\n데이터 위치: 메인 메모리 (DRAM RAM)\n접근 상태 판정: 캐시 미스 (메모리 접근)",
                "is_hidden": false
            },
            {
                "input": "50000",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 50000ns\n데이터 위치: 초고속 SSD (NVMe Storage)\n접근 상태 판정: 스토리지 I/O",
                "is_hidden": true
            },
            {
                "input": "5000000",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 5000000ns\n데이터 위치: 하드디스크 / 원격 네트워크 (Disk / Network)\n접근 상태 판정: 고지연 I/O 발생",
                "is_hidden": true
            },
            {
                "input": "0",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 0ns\n데이터 위치: L1 캐시 (L1 Cache)\n접근 상태 판정: 초고속 캐시 히트",
                "is_hidden": true
            },
            {
                "input": "10",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 10ns\n데이터 위치: L2/L3 캐시 (L2/L3 Cache)\n접근 상태 판정: 캐시 히트",
                "is_hidden": true
            },
            {
                "input": "101",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 101ns\n데이터 위치: 초고속 SSD (NVMe Storage)\n접근 상태 판정: 스토리지 I/O",
                "is_hidden": true
            },
            {
                "input": "100000",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 100000ns\n데이터 위치: 초고속 SSD (NVMe Storage)\n접근 상태 판정: 스토리지 I/O",
                "is_hidden": true
            },
            {
                "input": "20000000",
                "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 20000000ns\n데이터 위치: 하드디스크 / 원격 네트워크 (Disk / Network)\n접근 상태 판정: 고지연 I/O 발생",
                "is_hidden": true
            }
        ],
        "sample_output": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 8ns\n데이터 위치: L2/L3 캐시 (L2/L3 Cache)\n접근 상태 판정: 캐시 히트",
        "expected": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 8ns\n데이터 위치: L2/L3 캐시 (L2/L3 Cache)\n접근 상태 판정: 캐시 히트",
        "samples": [
            {
                "input": "8",
                "output": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 8ns\n데이터 위치: L2/L3 캐시 (L2/L3 Cache)\n접근 상태 판정: 캐시 히트"
            },
            {
                "input": "1",
                "output": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 1ns\n데이터 위치: L1 캐시 (L1 Cache)\n접근 상태 판정: 초고속 캐시 히트"
            },
            {
                "input": "100",
                "output": "=== 메모리 계층 접근 분석표 ===\n소요 지연 시간: 100ns\n데이터 위치: 메인 메모리 (DRAM RAM)\n접근 상태 판정: 캐시 미스 (메모리 접근)"
            }
        ]
    },
    {
        "id": "day02_하2",
        "day": 2,
        "subject": "Java",
        "difficulty": "하",
        "title": "HTTP 상태 코드 라우터 & 응답 메시지 생성기 (HttpStatusRouter)",
        "desc": "웹 백엔드 서버가 클라이언트에게 전달할 HTTP 응답 상태 코드(Status Code, 정수)를 입력받아 switch-case 문을 사용하여 상태 메시지와 처리 조치를 서식에 맞게 출력하세요.\n\n[상태 코드 매핑 기준]\n- 200: 메시지 \"200 OK\" | 조치 \"요청이 성공적으로 처리되었습니다.\"\n- 201: 메시지 \"201 Created\" | 조치 \"새로운 리소스가 정상 생성되었습니다.\"\n- 400: 메시지 \"400 Bad Request\" | 조치 \"잘못된 요청 구문 또는 유효하지 않은 파라미터입니다.\"\n- 401: 메시지 \"401 Unauthorized\" | 조치 \"인증 자격 증명이 유효하지 않거나 누락되었습니다.\"\n- 403: 메시지 \"403 Forbidden\" | 조치 \"접근 권한이 없는 보호된 리소스입니다.\"\n- 404: 메시지 \"404 Not Found\" | 조치 \"요청한 경로의 리소스를 찾을 수 없습니다.\"\n- 500: 메시지 \"500 Internal Server Error\" | 조치 \"서버 내부 처리 중 예기치 않은 오류가 발생했습니다.\"\n- 그 외: 메시지 \"UNKNOWN STATUS\" | 조치 \"정의되지 않은 HTTP 상태 코드입니다.\"\n\n[입력]\n첫째 줄에 HTTP 상태 코드 정수가 주어집니다.\n\n[출력]\n=== HTTP 응답 라우팅 결과 ===\n상태 코드: {code}\n응답 메시지: {statusMessage}\n처리 안내: {actionGuide}\n\n※ 구체적인 상태 코드별 입출력 결과는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int code = sc.nextInt();\n\n        String message;\n        String action;\n\n        switch (code) {\n            case 200:\n                message = \"200 OK\";\n                action = \"요청이 성공적으로 처리되었습니다.\";\n                break;\n            case 201:\n                message = \"201 Created\";\n                action = \"새로운 리소스가 정상 생성되었습니다.\";\n                break;\n            case 400:\n                message = \"400 Bad Request\";\n                action = \"잘못된 요청 구문 또는 유효하지 않은 파라미터입니다.\";\n                break;\n            case 401:\n                message = \"401 Unauthorized\";\n                action = \"인증 자격 증명이 유효하지 않거나 누락되었습니다.\";\n                break;\n            case 403:\n                message = \"403 Forbidden\";\n                action = \"접근 권한이 없는 보호된 리소스입니다.\";\n                break;\n            case 404:\n                message = \"404 Not Found\";\n                action = \"요청한 경로의 리소스를 찾을 수 없습니다.\";\n                break;\n            case 500:\n                message = \"500 Internal Server Error\";\n                action = \"서버 내부 처리 중 예기치 않은 오류가 발생했습니다.\";\n                break;\n            default:\n                message = \"UNKNOWN STATUS\";\n                action = \"정의되지 않은 HTTP 상태 코드입니다.\";\n                break;\n        }\n\n        System.out.println(\"=== HTTP 응답 라우팅 결과 ===\");\n        System.out.printf(\"상태 코드: %d\\n\", code);\n        System.out.printf(\"응답 메시지: %s\\n\", message);\n        System.out.printf(\"처리 안내: %s\\n\", action);\n    }\n}\n",
        "sample_input": "404",
        "hint": "1. int code = sc.nextInt(); 로 상태 코드를 읽습니다.\n2. switch (code) { case 200: ... break; ... default: ... break; } 문법을 구성합니다.\n3. 각 case마다 break를 빼먹지 않아야 다음 케이스로 넘어가는 fall-through 버그를 방지할 수 있습니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: HTTP 프로토콜 상태 코드 체계와 REST API 라우팅]\n월드 와이드 웹(WWW)의 기반인 HTTP 프로토콜은 클라이언트의 요청에 대한 처리 결과를 3자리 숫자인 상태 코드(Status Code)로 응답합니다.\n- 2xx (Success): 클라이언트의 요청이 정상 처리됨 (200 OK, 201 Created 등)\n- 3xx (Redirection): 요청을 완료하기 위해 추가 동작(URL 리다이렉트)이 필요함\n- 4xx (Client Error): 클라이언트의 문법 오류, 미인증, 권한 없음, 리소스 부재 (400, 401, 403, 404)\n- 5xx (Server Error): 서버가 정상적인 요청을 처리하다 내부 버그나 DB 장애로 실패함 (500, 502, 503)\n스프링부트(Spring Boot)나 익스프레스(Express) 같은 백엔드 프레임워크에서는 상태 코드에 따라 적절한 에러 핸들러와 라우터로 분기하여 처리합니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: 정수형 상태 코드 입력받기\n   Scanner sc = new Scanner(System.in);\n   int code = sc.nextInt();\n\n2단계: switch-case 문을 활용한 분기 (각 case마다 break 필수!)\n   switch (code) {\n       case 200: message = \"200 OK\"; action = \"요청이 성공적으로 처리되었습니다.\"; break;\n       case 201: message = \"201 Created\"; action = \"새로운 리소스가 정상 생성되었습니다.\"; break;\n       case 400: message = \"400 Bad Request\"; action = \"잘못된 요청 구문 또는 유효하지 않은 파라미터입니다.\"; break;\n       case 401: message = \"401 Unauthorized\"; action = \"인증 자격 증명이 유효하지 않거나 누락되었습니다.\"; break;\n       case 403: message = \"403 Forbidden\"; action = \"접근 권한이 없는 보호된 리소스입니다.\"; break;\n       case 404: message = \"404 Not Found\"; action = \"요청한 경로의 리소스를 찾을 수 없습니다.\"; break;\n       case 500: message = \"500 Internal Server Error\"; action = \"서버 내부 처리 중 예기치 않은 오류가 발생했습니다.\"; break;\n       default: message = \"UNKNOWN STATUS\"; action = \"정의되지 않은 HTTP 상태 코드입니다.\"; break;\n   }\n\n3단계: 서식 출력\n   System.out.println(\"=== HTTP 응답 라우팅 결과 ===\");\n   System.out.printf(\"상태 코드: %d\\n\", code);\n   System.out.printf(\"응답 메시지: %s\\n\", message);\n   System.out.printf(\"처리 안내: %s\\n\", action);",
        "testcases": [
            {
                "input": "404",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 404\n응답 메시지: 404 Not Found\n처리 안내: 요청한 경로의 리소스를 찾을 수 없습니다.",
                "is_hidden": false
            },
            {
                "input": "200",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 200\n응답 메시지: 200 OK\n처리 안내: 요청이 성공적으로 처리되었습니다.",
                "is_hidden": false
            },
            {
                "input": "201",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 201\n응답 메시지: 201 Created\n처리 안내: 새로운 리소스가 정상 생성되었습니다.",
                "is_hidden": false
            },
            {
                "input": "400",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 400\n응답 메시지: 400 Bad Request\n처리 안내: 잘못된 요청 구문 또는 유효하지 않은 파라미터입니다.",
                "is_hidden": true
            },
            {
                "input": "401",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 401\n응답 메시지: 401 Unauthorized\n처리 안내: 인증 자격 증명이 유효하지 않거나 누락되었습니다.",
                "is_hidden": true
            },
            {
                "input": "403",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 403\n응답 메시지: 403 Forbidden\n처리 안내: 접근 권한이 없는 보호된 리소스입니다.",
                "is_hidden": true
            },
            {
                "input": "500",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 500\n응답 메시지: 500 Internal Server Error\n처리 안내: 서버 내부 처리 중 예기치 않은 오류가 발생했습니다.",
                "is_hidden": true
            },
            {
                "input": "999",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 999\n응답 메시지: UNKNOWN STATUS\n처리 안내: 정의되지 않은 HTTP 상태 코드입니다.",
                "is_hidden": true
            },
            {
                "input": "302",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 302\n응답 메시지: UNKNOWN STATUS\n처리 안내: 정의되지 않은 HTTP 상태 코드입니다.",
                "is_hidden": true
            },
            {
                "input": "503",
                "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 503\n응답 메시지: UNKNOWN STATUS\n처리 안내: 정의되지 않은 HTTP 상태 코드입니다.",
                "is_hidden": true
            }
        ],
        "sample_output": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 404\n응답 메시지: 404 Not Found\n처리 안내: 요청한 경로의 리소스를 찾을 수 없습니다.",
        "expected": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 404\n응답 메시지: 404 Not Found\n처리 안내: 요청한 경로의 리소스를 찾을 수 없습니다.",
        "samples": [
            {
                "input": "404",
                "output": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 404\n응답 메시지: 404 Not Found\n처리 안내: 요청한 경로의 리소스를 찾을 수 없습니다."
            },
            {
                "input": "200",
                "output": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 200\n응답 메시지: 200 OK\n처리 안내: 요청이 성공적으로 처리되었습니다."
            },
            {
                "input": "201",
                "output": "=== HTTP 응답 라우팅 결과 ===\n상태 코드: 201\n응답 메시지: 201 Created\n처리 안내: 새로운 리소스가 정상 생성되었습니다."
            }
        ]
    },
    {
        "id": "day02_하3",
        "day": 2,
        "subject": "Java",
        "difficulty": "하",
        "title": "서버 리소스 임계치 모니터링 & 경보 시스템 (ServerHealthAlert)",
        "desc": "서버 모니터링 시스템에서 측정한 CPU 사용률(%), 메모리 사용률(%), 디스크 잔여 공간(GB)의 3가지 지표를 공백으로 구분하여 입력받아 서버의 건전성 상태를 판정하세요.\n\n[경보 판정 조건 (우선순위: 긴급 > 위험 > 주의 > 정상)]\n1. 긴급 조치 [EMERGENCY]: (CPU >= 95 AND 메모리 >= 95) OR 디스크 <= 5GB\n   -> 종합 판정: \"[EMERGENCY] 긴급 조치 - 즉각적인 리소스 확보가 필요합니다.\"\n2. 위험 경보 [CRITICAL]: CPU >= 85 OR 메모리 >= 85 OR 디스크 <= 15GB\n   -> 종합 판정: \"[CRITICAL] 위험 경보 - 관리자 점검이 필요합니다.\"\n3. 주의 관찰 [WARNING]: CPU >= 70 OR 메모리 >= 70 OR 디스크 <= 30GB\n   -> 종합 판정: \"[WARNING] 주의 관찰 - 리소스 사용량을 모니터링하세요.\"\n4. 정상 운영 [NORMAL]: 그 외 모든 경우\n   -> 종합 판정: \"[NORMAL] 정상 운영 - 모든 리소스가 안정적입니다.\"\n\n[입력]\n첫째 줄에 CPU 사용률(정수), 메모리 사용률(정수), 디스크 잔여량(정수)이 공백으로 주어집니다.\n\n[출력]\n=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: {cpu}% | 메모리 사용률: {mem}% | 디스크 잔여량: {disk}GB\n종합 판정: [{ALERT_LEVEL}] {경보 안내}\n\n※ 긴급, 위험, 디스크 고갈 등 다양한 상황에 대한 입출력은 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 코드를 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int cpu = sc.nextInt();\n        int mem = sc.nextInt();\n        int disk = sc.nextInt();\n\n        String status;\n        if ((cpu >= 95 && mem >= 95) || disk <= 5) {\n            status = \"[EMERGENCY] 긴급 조치 - 즉각적인 리소스 확보가 필요합니다.\";\n        } else if (cpu >= 85 || mem >= 85 || disk <= 15) {\n            status = \"[CRITICAL] 위험 경보 - 관리자 점검이 필요합니다.\";\n        } else if (cpu >= 70 || mem >= 70 || disk <= 30) {\n            status = \"[WARNING] 주의 관찰 - 리소스 사용량을 모니터링하세요.\";\n        } else {\n            status = \"[NORMAL] 정상 운영 - 모든 리소스가 안정적입니다.\";\n        }\n\n        System.out.println(\"=== 서버 리소스 상태 진단 보고서 ===\");\n        System.out.printf(\"CPU 사용률: %d%% | 메모리 사용률: %d%% | 디스크 잔여량: %dGB\\n\", cpu, mem, disk);\n        System.out.printf(\"종합 판정: %s\\n\", status);\n    }\n}\n",
        "sample_input": "88 65 50",
        "hint": "1. int cpu = sc.nextInt(); int mem = sc.nextInt(); int disk = sc.nextInt(); 로 3개 정수를 차례로 읽습니다.\n2. 논리 AND (&&) 와 논리 OR (||) 연산자를 조합하여 우선순위가 가장 높은 EMERGENCY 조건부터 if-else if 로 판정합니다.\n3. printf 서식 출력 시 퍼센트 기호(%)는 %% 로 작성해야 정상 출력됩니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 서버 APM(Application Performance Monitoring)과 임계치(Threshold) 경보]\n클라우드 인프라(AWS, GCP)나 대규모 웹 서비스 운영 시, 서버가 다운되기 전에 위험 징후를 감지하는 APM 시스템(Prometheus, Datadog, Grafana)이 필수적입니다.\n운영팀은 리소스 사용량에 따라 3단계 임계치(Threshold: Warning, Critical, Emergency)를 설정하고 자동 경보(Alert)를 발송합니다.\n- CPU/메모리가 95%를 넘거나 디스크가 고갈되면 OOM(Out of Memory) Killer가 프로세스를 강제 종료하거나 커널 패닉이 발생할 수 있습니다.\n프로그래밍에서는 복합 조건문(`&&`, `||`)의 단락 평가(Short-circuit Evaluation)를 고려하여 가장 치명적인 조건을 먼저 검사하도록 설계합니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: 세 가지 리소스 수치 입력받기\n   int cpu = sc.nextInt(); int mem = sc.nextInt(); int disk = sc.nextInt();\n\n2단계: 복합 조건문으로 등급 판별 (가장 심각한 EMERGENCY부터 검사!)\n   if ((cpu >= 95 && mem >= 95) || disk <= 5) { ... }\n   else if (cpu >= 85 || mem >= 85 || disk <= 15) { ... }\n   else if (cpu >= 70 || mem >= 70 || disk <= 30) { ... }\n   else { ... }\n\n3단계: 서식 출력 (% 출력 시 %% 주의)\n   System.out.println(\"=== 서버 리소스 상태 진단 보고서 ===\");\n   System.out.printf(\"CPU 사용률: %d%% | 메모리 사용률: %d%% | 디스크 잔여량: %dGB\\n\", cpu, mem, disk);\n   System.out.printf(\"종합 판정: %s\\n\", status);",
        "testcases": [
            {
                "input": "88 65 50",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 88% | 메모리 사용률: 65% | 디스크 잔여량: 50GB\n종합 판정: [CRITICAL] 위험 경보 - 관리자 점검이 필요합니다.",
                "is_hidden": false
            },
            {
                "input": "96 97 20",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 96% | 메모리 사용률: 97% | 디스크 잔여량: 20GB\n종합 판정: [EMERGENCY] 긴급 조치 - 즉각적인 리소스 확보가 필요합니다.",
                "is_hidden": false
            },
            {
                "input": "50 50 3",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 50% | 메모리 사용률: 50% | 디스크 잔여량: 3GB\n종합 판정: [EMERGENCY] 긴급 조치 - 즉각적인 리소스 확보가 필요합니다.",
                "is_hidden": false
            },
            {
                "input": "95 95 20",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 95% | 메모리 사용률: 95% | 디스크 잔여량: 20GB\n종합 판정: [EMERGENCY] 긴급 조치 - 즉각적인 리소스 확보가 필요합니다.",
                "is_hidden": true
            },
            {
                "input": "50 50 5",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 50% | 메모리 사용률: 50% | 디스크 잔여량: 5GB\n종합 판정: [EMERGENCY] 긴급 조치 - 즉각적인 리소스 확보가 필요합니다.",
                "is_hidden": true
            },
            {
                "input": "95 94 20",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 95% | 메모리 사용률: 94% | 디스크 잔여량: 20GB\n종합 판정: [CRITICAL] 위험 경보 - 관리자 점검이 필요합니다.",
                "is_hidden": true
            },
            {
                "input": "50 85 50",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 50% | 메모리 사용률: 85% | 디스크 잔여량: 50GB\n종합 판정: [CRITICAL] 위험 경보 - 관리자 점검이 필요합니다.",
                "is_hidden": true
            },
            {
                "input": "50 50 15",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 50% | 메모리 사용률: 50% | 디스크 잔여량: 15GB\n종합 판정: [CRITICAL] 위험 경보 - 관리자 점검이 필요합니다.",
                "is_hidden": true
            },
            {
                "input": "70 50 50",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 70% | 메모리 사용률: 50% | 디스크 잔여량: 50GB\n종합 판정: [WARNING] 주의 관찰 - 리소스 사용량을 모니터링하세요.",
                "is_hidden": true
            },
            {
                "input": "69 69 31",
                "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 69% | 메모리 사용률: 69% | 디스크 잔여량: 31GB\n종합 판정: [NORMAL] 정상 운영 - 모든 리소스가 안정적입니다.",
                "is_hidden": true
            }
        ],
        "sample_output": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 88% | 메모리 사용률: 65% | 디스크 잔여량: 50GB\n종합 판정: [CRITICAL] 위험 경보 - 관리자 점검이 필요합니다.",
        "expected": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 88% | 메모리 사용률: 65% | 디스크 잔여량: 50GB\n종합 판정: [CRITICAL] 위험 경보 - 관리자 점검이 필요합니다.",
        "samples": [
            {
                "input": "88 65 50",
                "output": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 88% | 메모리 사용률: 65% | 디스크 잔여량: 50GB\n종합 판정: [CRITICAL] 위험 경보 - 관리자 점검이 필요합니다."
            },
            {
                "input": "96 97 20",
                "output": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 96% | 메모리 사용률: 97% | 디스크 잔여량: 20GB\n종합 판정: [EMERGENCY] 긴급 조치 - 즉각적인 리소스 확보가 필요합니다."
            },
            {
                "input": "50 50 3",
                "output": "=== 서버 리소스 상태 진단 보고서 ===\nCPU 사용률: 50% | 메모리 사용률: 50% | 디스크 잔여량: 3GB\n종합 판정: [EMERGENCY] 긴급 조치 - 즉각적인 리소스 확보가 필요합니다."
            }
        ]
    },
    {
        "id": "day02_중1",
        "day": 2,
        "subject": "Java",
        "difficulty": "중",
        "title": "네트워크 패킷 지수 백오프(Exponential Backoff) 재시도 시뮬레이터 (ExponentialBackoff)",
        "desc": "분산 네트워크 환경에서 서버 장애 시 재시도 간격을 점진적으로 늘려 서버 과부하를 막는 '지수 백오프(Exponential Backoff)' 알고리즘을 1차원 정수 배열을 활용하여 시뮬레이션하세요.\n기본 대기 시간은 100ms이며, 실패할 때마다 대기 시간이 2배씩 증가합니다(100ms, 200ms, 400ms, 800ms, 1600ms, ...).\n최대 재시도 횟수 N을 입력받은 뒤, N개의 통신 결과(1: 성공, 0: 실패)를 크기 N인 1차원 정수 배열(int[] results)에 먼저 저장하세요.\n그 후 배열을 순회하면서:\n- 성공(1)을 만나면 해당 회차에서 성공 메시지를 출력하고 break로 즉시 루프를 탈출합니다.\n- 실패(0)하면 현재 대기 시간을 누적 대기 시간에 더하고 다음 회차 대기 시간을 2배로 증가시킵니다.\n- N회 동안 한 번도 성공하지 못하면 '최종 전송 실패' 메시지를 출력합니다.\n\n[입력]\n첫째 줄에 최대 재시도 횟수 N이 주어집니다.\n둘째 줄에 N개의 결과(0 또는 1)가 공백으로 주어집니다.\n\n[출력]\n매 회차마다 다음 서식으로 출력합니다:\n- 성공 시: \"[회차] 전송 성공! (총 대기 시간: {total}ms)\" 출력 후 즉시 종료\n- 실패 시: \"[회차] 전송 실패 -> 대기 시간: {delay}ms\"\n- N회 모두 실패 시: \"제한 횟수({N}회) 초과로 최종 전송 실패! (총 대기 시간: {total}ms)\"\n\n※ 조기 성공, 1회차 성공, 최대 회차 초과 실패 등 다양한 실행 케이스는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int maxAttempts = sc.nextInt();\n\n        // 여기에 1차원 배열(int[])을 선언하고 지수 백오프 시뮬레이션을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int maxAttempts = sc.nextInt();\n\n        // 1차원 정수 배열에 N개의 시도 결과(0 또는 1)를 저장\n        int[] results = new int[maxAttempts];\n        for (int i = 0; i < maxAttempts; i++) {\n            results[i] = sc.nextInt();\n        }\n\n        int currentDelay = 100;\n        int totalDelay = 0;\n        boolean success = false;\n\n        // 배열 순회하며 지수 백오프 시뮬레이션\n        for (int i = 0; i < results.length; i++) {\n            int attemptNum = i + 1;\n            if (results[i] == 1) {\n                System.out.printf(\"[%d회차] 전송 성공! (총 대기 시간: %dms)\\n\", attemptNum, totalDelay);\n                success = true;\n                break;\n            } else {\n                System.out.printf(\"[%d회차] 전송 실패 -> 대기 시간: %dms\\n\", attemptNum, currentDelay);\n                totalDelay += currentDelay;\n                currentDelay *= 2;\n            }\n        }\n\n        if (!success) {\n            System.out.printf(\"제한 횟수(%d회) 초과로 최종 전송 실패! (총 대기 시간: %dms)\\n\", maxAttempts, totalDelay);\n        }\n    }\n}\n",
        "sample_input": "4\n0 0 1 0",
        "hint": "1. int[] results = new int[maxAttempts]; 로 배열을 생성하고 입력을 채웁니다.\n2. for (int i = 0; i < results.length; i++) 로 배열을 순회하며 results[i] 값을 검사합니다.",
        "cs_knowledge": "💡 **지수 백오프(Exponential Backoff)와 배열(Array) 버퍼링**\n- **배열(Array)**: 동일한 타입의 데이터를 메모리에 연속적으로 나열하여 인덱스 번호(0부터 시작)로 O(1) 시간에 즉시 접근할 수 있는 기본 선형 자료구조입니다.\n- **스트림 수신과 배열 적재**: 네트워크에서 유입되는 일련의 패킷 응답 신호들을 `int[]` 배열에 먼저 적재해 둔 뒤, 순차적으로 백오프 정책 알고리즘을 적용하는 패턴입니다.",
        "logic_guide": "🛠️ **배열 활용 로직 설계 가이드**\n1. `int maxAttempts = sc.nextInt();` 로 N을 입력받습니다.\n2. `int[] results = new int[maxAttempts];` 로 크기 N인 1차원 배열을 생성합니다.\n3. for문을 돌며 `results[i] = sc.nextInt();` 로 N개의 결과를 배열에 저장합니다.\n4. 배열 순회 for문(`for (int i = 0; i < results.length; i++)`)을 돌며:\n   - `if (results[i] == 1)`: 성공 메시지 출력 후 `break;`\n   - `else`: 실패 메시지 출력 후 `totalDelay += currentDelay; currentDelay *= 2;`\n5. 루프 종료 후 성공하지 못했으면 최종 실패 메시지를 출력합니다.",
        "testcases": [
            {
                "input": "4\n0 0 1 0",
                "expected": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 실패 -> 대기 시간: 200ms\n[3회차] 전송 성공! (총 대기 시간: 300ms)",
                "is_hidden": false
            },
            {
                "input": "3\n1 0 0",
                "expected": "[1회차] 전송 성공! (총 대기 시간: 0ms)",
                "is_hidden": false
            },
            {
                "input": "5\n0 0 0 0 0",
                "expected": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 실패 -> 대기 시간: 200ms\n[3회차] 전송 실패 -> 대기 시간: 400ms\n[4회차] 전송 실패 -> 대기 시간: 800ms\n[5회차] 전송 실패 -> 대기 시간: 1600ms\n제한 횟수(5회) 초과로 최종 전송 실패! (총 대기 시간: 3100ms)",
                "is_hidden": false
            },
            {
                "input": "5\n0 0 0 0 1",
                "expected": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 실패 -> 대기 시간: 200ms\n[3회차] 전송 실패 -> 대기 시간: 400ms\n[4회차] 전송 실패 -> 대기 시간: 800ms\n[5회차] 전송 성공! (총 대기 시간: 1500ms)",
                "is_hidden": true
            },
            {
                "input": "2\n0 1",
                "expected": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 성공! (총 대기 시간: 100ms)",
                "is_hidden": true
            },
            {
                "input": "1\n1",
                "expected": "[1회차] 전송 성공! (총 대기 시간: 0ms)",
                "is_hidden": true
            },
            {
                "input": "1\n0",
                "expected": "[1회차] 전송 실패 -> 대기 시간: 100ms\n제한 횟수(1회) 초과로 최종 전송 실패! (총 대기 시간: 100ms)",
                "is_hidden": true
            },
            {
                "input": "6\n0 0 0 1 0 0",
                "expected": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 실패 -> 대기 시간: 200ms\n[3회차] 전송 실패 -> 대기 시간: 400ms\n[4회차] 전송 성공! (총 대기 시간: 700ms)",
                "is_hidden": true
            },
            {
                "input": "4\n0 0 0 0",
                "expected": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 실패 -> 대기 시간: 200ms\n[3회차] 전송 실패 -> 대기 시간: 400ms\n[4회차] 전송 실패 -> 대기 시간: 800ms\n제한 횟수(4회) 초과로 최종 전송 실패! (총 대기 시간: 1500ms)",
                "is_hidden": true
            },
            {
                "input": "3\n0 1 0",
                "expected": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 성공! (총 대기 시간: 100ms)",
                "is_hidden": true
            }
        ],
        "sample_output": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 실패 -> 대기 시간: 200ms\n[3회차] 전송 성공! (총 대기 시간: 300ms)",
        "expected": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 실패 -> 대기 시간: 200ms\n[3회차] 전송 성공! (총 대기 시간: 300ms)",
        "samples": [
            {
                "input": "4\n0 0 1 0",
                "output": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 실패 -> 대기 시간: 200ms\n[3회차] 전송 성공! (총 대기 시간: 300ms)"
            },
            {
                "input": "3\n1 0 0",
                "output": "[1회차] 전송 성공! (총 대기 시간: 0ms)"
            },
            {
                "input": "5\n0 0 0 0 0",
                "output": "[1회차] 전송 실패 -> 대기 시간: 100ms\n[2회차] 전송 실패 -> 대기 시간: 200ms\n[3회차] 전송 실패 -> 대기 시간: 400ms\n[4회차] 전송 실패 -> 대기 시간: 800ms\n[5회차] 전송 실패 -> 대기 시간: 1600ms\n제한 횟수(5회) 초과로 최종 전송 실패! (총 대기 시간: 3100ms)"
            }
        ]
    },
    {
        "id": "day02_중2",
        "day": 2,
        "subject": "Java",
        "difficulty": "중",
        "title": "숫자 맞추기 Up-Down 게임 시뮬레이터 (UpDownGame)",
        "desc": "정답 숫자 target(1~100)과 최대 시도 횟수 K, 그리고 플레이어가 입력한 K개의 추측 숫자를 1차원 정수 배열(int[] guesses)에 저장하여 Up-Down 게임 판정을 진행하세요.\n배열에 저장된 추측값들을 순차적으로 순회하며 판정합니다:\n- 추측값 > 정답: \"[i회차] 추측: X -> DOWN! 더 작은 수를 입력하세요.\"\n- 추측값 < 정답: \"[i회차] 추측: X -> UP! 더 큰 수를 입력하세요.\"\n- 추측값 == 정답: \"[i회차] 추측: X -> 정답입니다! i회 만에 맞추셨습니다!\" 출력 후 break로 즉시 루프 탈출\n- K회 내에 맞추지 못하면: \"아쉽습니다. 제한 횟수(K회) 초과로 실패! 정답은 target였습니다.\" 출력\n\n[입력]\n첫째 줄에 정답 숫자 target과 최대 시도 횟수 K가 공백으로 주어집니다.\n둘째 줄에 K개의 추측 숫자가 공백으로 주어집니다.\n\n[출력]\n각 회차별 추측 결과 및 최종 성공/실패 여부를 서식에 맞추어 출력합니다.\n\n※ 중간 정답 성공, 빠른 회차 성공, 횟수 초과 실패 등 다양한 게임 시뮬레이션은 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 크기 K인 1차원 배열을 선언하고 Up-Down 게임을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int target = sc.nextInt();\n        int attempts = sc.nextInt();\n\n        // 플레이어의 추측값들을 저장할 1차원 배열\n        int[] guesses = new int[attempts];\n        for (int i = 0; i < attempts; i++) {\n            guesses[i] = sc.nextInt();\n        }\n\n        boolean isCorrect = false;\n\n        // 추측값 배열을 순회하며 판정\n        for (int i = 0; i < guesses.length; i++) {\n            int attemptNum = i + 1;\n            int guess = guesses[i];\n\n            if (guess == target) {\n                System.out.printf(\"[%d회차] 추측: %d -> 정답입니다! %d회 만에 맞추셨습니다!\\n\", attemptNum, guess, attemptNum);\n                isCorrect = true;\n                break;\n            } else if (guess < target) {\n                System.out.printf(\"[%d회차] 추측: %d -> UP! 더 큰 수를 입력하세요.\\n\", attemptNum, guess);\n            } else {\n                System.out.printf(\"[%d회차] 추측: %d -> DOWN! 더 작은 수를 입력하세요.\\n\", attemptNum, guess);\n            }\n        }\n\n        if (!isCorrect) {\n            System.out.printf(\"아쉽습니다. 제한 횟수(%d회) 초과로 실패! 정답은 %d였습니다.\\n\", attempts, target);\n        }\n    }\n}\n",
        "sample_input": "50 4\n30 70 45 50",
        "hint": "1. int[] guesses = new int[attempts]; 로 크기 K의 배열을 생성합니다.\n2. guesses[i] 로 각 추측값에 접근하여 target과 비교합니다.",
        "cs_knowledge": "💡 **배열(Array)을 이용한 사용자 입력 로그 기록 및 순차 탐색**\n- **입력 히스토리 보존**: 사용자나 외부 시스템의 입력을 즉시 소비하지 않고 배열에 보존하면, 추후 재검증, 감사(Audit), 롤백 등의 다양한 처리가 가능해집니다.\n- **인덱스와 회차 매핑**: 0-based 인덱스(`i = 0, 1, 2...`)를 사람의 회차(`i + 1 = 1, 2, 3...`)로 변환하여 처리하는 기법을 익힙니다.",
        "logic_guide": "🛠️ **배열 활용 로직 설계 가이드**\n1. `int target = sc.nextInt(); int attempts = sc.nextInt();`\n2. `int[] guesses = new int[attempts];` 배열을 생성합니다.\n3. for문으로 K개의 추측값을 `guesses[i] = sc.nextInt();`에 입력받습니다.\n4. `for (int i = 0; i < guesses.length; i++)` 로 배열을 순회하며:\n   - `int guess = guesses[i];`\n   - `guess == target` 이면 정답 메시지 출력 후 `break;`\n   - `guess < target` 이면 UP 메시지 출력\n   - `guess > target` 이면 DOWN 메시지 출력\n5. 끝까지 못 맞췄다면 실패 메시지를 출력합니다.",
        "testcases": [
            {
                "input": "50 4\n30 70 45 50",
                "expected": "[1회차] 추측: 30 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 70 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 45 -> UP! 더 큰 수를 입력하세요.\n[4회차] 추측: 50 -> 정답입니다! 4회 만에 맞추셨습니다!",
                "is_hidden": false
            },
            {
                "input": "77 3\n50 80 77",
                "expected": "[1회차] 추측: 50 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 80 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 77 -> 정답입니다! 3회 만에 맞추셨습니다!",
                "is_hidden": false
            },
            {
                "input": "10 3\n20 15 12",
                "expected": "[1회차] 추측: 20 -> DOWN! 더 작은 수를 입력하세요.\n[2회차] 추측: 15 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 12 -> DOWN! 더 작은 수를 입력하세요.\n아쉽습니다. 제한 횟수(3회) 초과로 실패! 정답은 10였습니다.",
                "is_hidden": false
            },
            {
                "input": "1 1\n1",
                "expected": "[1회차] 추측: 1 -> 정답입니다! 1회 만에 맞추셨습니다!",
                "is_hidden": true
            },
            {
                "input": "100 5\n50 75 88 94 99",
                "expected": "[1회차] 추측: 50 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 75 -> UP! 더 큰 수를 입력하세요.\n[3회차] 추측: 88 -> UP! 더 큰 수를 입력하세요.\n[4회차] 추측: 94 -> UP! 더 큰 수를 입력하세요.\n[5회차] 추측: 99 -> UP! 더 큰 수를 입력하세요.\n아쉽습니다. 제한 횟수(5회) 초과로 실패! 정답은 100였습니다.",
                "is_hidden": true
            },
            {
                "input": "33 4\n33 50 20 10",
                "expected": "[1회차] 추측: 33 -> 정답입니다! 1회 만에 맞추셨습니다!",
                "is_hidden": true
            },
            {
                "input": "60 5\n10 20 30 40 50",
                "expected": "[1회차] 추측: 10 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 20 -> UP! 더 큰 수를 입력하세요.\n[3회차] 추측: 30 -> UP! 더 큰 수를 입력하세요.\n[4회차] 추측: 40 -> UP! 더 큰 수를 입력하세요.\n[5회차] 추측: 50 -> UP! 더 큰 수를 입력하세요.\n아쉽습니다. 제한 횟수(5회) 초과로 실패! 정답은 60였습니다.",
                "is_hidden": true
            },
            {
                "input": "85 4\n90 80 84 85",
                "expected": "[1회차] 추측: 90 -> DOWN! 더 작은 수를 입력하세요.\n[2회차] 추측: 80 -> UP! 더 큰 수를 입력하세요.\n[3회차] 추측: 84 -> UP! 더 큰 수를 입력하세요.\n[4회차] 추측: 85 -> 정답입니다! 4회 만에 맞추셨습니다!",
                "is_hidden": true
            },
            {
                "input": "42 2\n41 43",
                "expected": "[1회차] 추측: 41 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 43 -> DOWN! 더 작은 수를 입력하세요.\n아쉽습니다. 제한 횟수(2회) 초과로 실패! 정답은 42였습니다.",
                "is_hidden": true
            },
            {
                "input": "25 3\n50 10 25",
                "expected": "[1회차] 추측: 50 -> DOWN! 더 작은 수를 입력하세요.\n[2회차] 추측: 10 -> UP! 더 큰 수를 입력하세요.\n[3회차] 추측: 25 -> 정답입니다! 3회 만에 맞추셨습니다!",
                "is_hidden": true
            }
        ],
        "sample_output": "[1회차] 추측: 30 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 70 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 45 -> UP! 더 큰 수를 입력하세요.\n[4회차] 추측: 50 -> 정답입니다! 4회 만에 맞추셨습니다!",
        "expected": "[1회차] 추측: 30 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 70 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 45 -> UP! 더 큰 수를 입력하세요.\n[4회차] 추측: 50 -> 정답입니다! 4회 만에 맞추셨습니다!",
        "samples": [
            {
                "input": "50 4\n30 70 45 50",
                "output": "[1회차] 추측: 30 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 70 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 45 -> UP! 더 큰 수를 입력하세요.\n[4회차] 추측: 50 -> 정답입니다! 4회 만에 맞추셨습니다!"
            },
            {
                "input": "77 3\n50 80 77",
                "output": "[1회차] 추측: 50 -> UP! 더 큰 수를 입력하세요.\n[2회차] 추측: 80 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 77 -> 정답입니다! 3회 만에 맞추셨습니다!"
            },
            {
                "input": "10 3\n20 15 12",
                "output": "[1회차] 추측: 20 -> DOWN! 더 작은 수를 입력하세요.\n[2회차] 추측: 15 -> DOWN! 더 작은 수를 입력하세요.\n[3회차] 추측: 12 -> DOWN! 더 작은 수를 입력하세요.\n아쉽습니다. 제한 횟수(3회) 초과로 실패! 정답은 10였습니다."
            }
        ]
    },
    {
        "id": "day02_중3",
        "day": 2,
        "subject": "Java",
        "difficulty": "중",
        "title": "CPU 라운드 로빈(Round Robin) 스케줄러 타임슬라이스 시뮬레이터 (RoundRobinScheduler)",
        "desc": "운영체제(OS)의 대표적인 선점형 CPU 스케줄링 기법인 라운드 로빈(Round Robin) 방식을 프로세스 버스트 타임 배열(int[] burst)과 다중 루프로 시뮬레이션하세요.\n두 프로세스 P1과 P2의 초기 잔여 작업 시간(Burst Time, ms)을 크기 2인 정수 배열 `int[] burst = new int[]{ p1, p2 };`에 저장하고, 타임 퀀텀 Q(ms)를 입력받습니다.\n- P1과 P2를 번갈아가며 CPU에 할당합니다 (외부 while 루프 + 내부 배열 순회 for 루프).\n- 매 턴마다 실행 가능한 프로세스는 최대 Q만큼 작업을 처리하고 잔여 시간을 줄입니다. (잔여 시간이 Q보다 작으면 남은 만큼만 처리하고 0으로 완료)\n- 한 프로세스가 완료되면 남은 다른 프로세스만 단독으로 턴을 진행합니다.\n- 모든 프로세스의 잔여 작업이 0이 되면 스케줄링을 종료합니다.\n\n[입력]\n첫째 줄에 P1의 작업 시간, P2의 작업 시간, 타임 퀀텀 Q(모두 정수, ms 단위)가 공백으로 주어집니다.\n\n[출력]\n=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 {t}] {프로세스} 실행 ({처리}ms 처리, {남은작업 또는 완료})\n...\n-----------------------------------------\n총 실행 턴: {총턴수}턴 | 모든 프로세스 처리 완료\n\n※ 두 프로세스의 버스트 타임 차이에 따른 스케줄링 결과는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 프로세스 배열(int[] burst)을 선언하고 다중 루프 스케줄러를 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 프로세스 버스트 타임과 프로세스 이름을 배열로 관리\n        int[] burst = new int[]{ sc.nextInt(), sc.nextInt() };\n        String[] pNames = new String[]{ \"P1\", \"P2\" };\n        int q = sc.nextInt();\n\n        System.out.println(\"=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\");\n        int turn = 0;\n\n        // 외부 while 루프: 모든 프로세스가 완료될 때까지 반복\n        while (burst[0] > 0 || burst[1] > 0) {\n            // 내부 for 루프: 프로세스 배열을 순회하며 퀀텀 할당\n            for (int i = 0; i < burst.length; i++) {\n                if (burst[i] > 0) {\n                    turn++;\n                    int exec = Math.min(burst[i], q);\n                    burst[i] -= exec;\n                    if (burst[i] == 0) {\n                        System.out.printf(\"[턴 %d] %s 실행 (%dms 처리, %s 완료!)\\n\", turn, pNames[i], exec, pNames[i]);\n                    } else {\n                        System.out.printf(\"[턴 %d] %s 실행 (%dms 처리, 남은 작업: %dms)\\n\", turn, pNames[i], exec, burst[i]);\n                    }\n                }\n            }\n        }\n\n        System.out.println(\"-----------------------------------------\");\n        System.out.printf(\"총 실행 턴: %d턴 | 모든 프로세스 처리 완료\\n\", turn);\n    }\n}\n",
        "sample_input": "15 25 10",
        "hint": "1. int[] burst = new int[]{ sc.nextInt(), sc.nextInt() }; 로 프로세스 작업 시간을 배열로 관리합니다.\n2. while 루프 안에 for (int i = 0; i < burst.length; i++) 루프를 두어 각 프로세스를 번갈아 처리합니다.",
        "cs_knowledge": "💡 **배열(Array) 기반의 프로세스 제어 블록(PCB) 스케줄링**\n- **PCB(Process Control Block) 큐**: 운영체제는 실행 준비 상태인 프로세스들의 식별자와 작업 시간을 배열 또는 큐 구조로 관리합니다.\n- **다중 루프와 배열**: 외부 루프(`while (burst[0] > 0 || burst[1] > 0)`)로 전체 작업 완료 여부를 감시하고, 내부 루프(`for (int i = 0; i < burst.length; i++)`)로 배열의 프로세스들을 순차 방문하여 타임슬라이스를 배분합니다.",
        "logic_guide": "🛠️ **배열 및 다중 루프 설계 가이드**\n1. `int[] burst = new int[]{ sc.nextInt(), sc.nextInt() };` 로 P1, P2 시간을 배열에 담습니다.\n2. `String[] pNames = new String[]{ \"P1\", \"P2\" };` 로 이름 배열을 선언합니다.\n3. `int q = sc.nextInt(); int turn = 0;`\n4. **외부 while문 (`while (burst[0] > 0 || burst[1] > 0)`)**:\n   - **내부 for문 (`for (int i = 0; i < burst.length; i++)`)**:\n     * `if (burst[i] > 0)`:\n       - `turn++; int exec = Math.min(burst[i], q); burst[i] -= exec;`\n       - 남은 시간이 0이면 완료 메시지, 아니면 남은 작업 메시지 출력\n5. 종료 후 총 실행 턴수를 출력합니다.",
        "testcases": [
            {
                "input": "15 25 10",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (10ms 처리, 남은 작업: 5ms)\n[턴 2] P2 실행 (10ms 처리, 남은 작업: 15ms)\n[턴 3] P1 실행 (5ms 처리, P1 완료!)\n[턴 4] P2 실행 (10ms 처리, 남은 작업: 5ms)\n[턴 5] P2 실행 (5ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 5턴 | 모든 프로세스 처리 완료",
                "is_hidden": false
            },
            {
                "input": "10 10 5",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (5ms 처리, 남은 작업: 5ms)\n[턴 2] P2 실행 (5ms 처리, 남은 작업: 5ms)\n[턴 3] P1 실행 (5ms 처리, P1 완료!)\n[턴 4] P2 실행 (5ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 4턴 | 모든 프로세스 처리 완료",
                "is_hidden": false
            },
            {
                "input": "5 20 10",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (5ms 처리, P1 완료!)\n[턴 2] P2 실행 (10ms 처리, 남은 작업: 10ms)\n[턴 3] P2 실행 (10ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 3턴 | 모든 프로세스 처리 완료",
                "is_hidden": false
            },
            {
                "input": "30 0 10",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (10ms 처리, 남은 작업: 20ms)\n[턴 2] P1 실행 (10ms 처리, 남은 작업: 10ms)\n[턴 3] P1 실행 (10ms 처리, P1 완료!)\n-----------------------------------------\n총 실행 턴: 3턴 | 모든 프로세스 처리 완료",
                "is_hidden": true
            },
            {
                "input": "8 12 4",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (4ms 처리, 남은 작업: 4ms)\n[턴 2] P2 실행 (4ms 처리, 남은 작업: 8ms)\n[턴 3] P1 실행 (4ms 처리, P1 완료!)\n[턴 4] P2 실행 (4ms 처리, 남은 작업: 4ms)\n[턴 5] P2 실행 (4ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 5턴 | 모든 프로세스 처리 완료",
                "is_hidden": true
            },
            {
                "input": "25 5 10",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (10ms 처리, 남은 작업: 15ms)\n[턴 2] P2 실행 (5ms 처리, P2 완료!)\n[턴 3] P1 실행 (10ms 처리, 남은 작업: 5ms)\n[턴 4] P1 실행 (5ms 처리, P1 완료!)\n-----------------------------------------\n총 실행 턴: 4턴 | 모든 프로세스 처리 완료",
                "is_hidden": true
            },
            {
                "input": "100 50 30",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (30ms 처리, 남은 작업: 70ms)\n[턴 2] P2 실행 (30ms 처리, 남은 작업: 20ms)\n[턴 3] P1 실행 (30ms 처리, 남은 작업: 40ms)\n[턴 4] P2 실행 (20ms 처리, P2 완료!)\n[턴 5] P1 실행 (30ms 처리, 남은 작업: 10ms)\n[턴 6] P1 실행 (10ms 처리, P1 완료!)\n-----------------------------------------\n총 실행 턴: 6턴 | 모든 프로세스 처리 완료",
                "is_hidden": true
            },
            {
                "input": "7 7 10",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (7ms 처리, P1 완료!)\n[턴 2] P2 실행 (7ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 2턴 | 모든 프로세스 처리 완료",
                "is_hidden": true
            },
            {
                "input": "3 3 1",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (1ms 처리, 남은 작업: 2ms)\n[턴 2] P2 실행 (1ms 처리, 남은 작업: 2ms)\n[턴 3] P1 실행 (1ms 처리, 남은 작업: 1ms)\n[턴 4] P2 실행 (1ms 처리, 남은 작업: 1ms)\n[턴 5] P1 실행 (1ms 처리, P1 완료!)\n[턴 6] P2 실행 (1ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 6턴 | 모든 프로세스 처리 완료",
                "is_hidden": true
            },
            {
                "input": "40 40 20",
                "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (20ms 처리, 남은 작업: 20ms)\n[턴 2] P2 실행 (20ms 처리, 남은 작업: 20ms)\n[턴 3] P1 실행 (20ms 처리, P1 완료!)\n[턴 4] P2 실행 (20ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 4턴 | 모든 프로세스 처리 완료",
                "is_hidden": true
            }
        ],
        "sample_output": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (10ms 처리, 남은 작업: 5ms)\n[턴 2] P2 실행 (10ms 처리, 남은 작업: 15ms)\n[턴 3] P1 실행 (5ms 처리, P1 완료!)\n[턴 4] P2 실행 (10ms 처리, 남은 작업: 5ms)\n[턴 5] P2 실행 (5ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 5턴 | 모든 프로세스 처리 완료",
        "expected": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (10ms 처리, 남은 작업: 5ms)\n[턴 2] P2 실행 (10ms 처리, 남은 작업: 15ms)\n[턴 3] P1 실행 (5ms 처리, P1 완료!)\n[턴 4] P2 실행 (10ms 처리, 남은 작업: 5ms)\n[턴 5] P2 실행 (5ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 5턴 | 모든 프로세스 처리 완료",
        "samples": [
            {
                "input": "15 25 10",
                "output": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (10ms 처리, 남은 작업: 5ms)\n[턴 2] P2 실행 (10ms 처리, 남은 작업: 15ms)\n[턴 3] P1 실행 (5ms 처리, P1 완료!)\n[턴 4] P2 실행 (10ms 처리, 남은 작업: 5ms)\n[턴 5] P2 실행 (5ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 5턴 | 모든 프로세스 처리 완료"
            },
            {
                "input": "10 10 5",
                "output": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (5ms 처리, 남은 작업: 5ms)\n[턴 2] P2 실행 (5ms 처리, 남은 작업: 5ms)\n[턴 3] P1 실행 (5ms 처리, P1 완료!)\n[턴 4] P2 실행 (5ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 4턴 | 모든 프로세스 처리 완료"
            },
            {
                "input": "5 20 10",
                "output": "=== CPU 라운드 로빈 스케줄링 시뮬레이션 ===\n[턴 1] P1 실행 (5ms 처리, P1 완료!)\n[턴 2] P2 실행 (10ms 처리, 남은 작업: 10ms)\n[턴 3] P2 실행 (10ms 처리, P2 완료!)\n-----------------------------------------\n총 실행 턴: 3턴 | 모든 프로세스 처리 완료"
            }
        ]
    },
    {
        "id": "day02_상1",
        "day": 2,
        "subject": "Java",
        "difficulty": "상",
        "title": "API Rate Limiter: 다중 테넌트 토큰 버킷 트래픽 제어기 (MultiTenantRateLimiter)",
        "desc": "클라우드 SaaS 멀티테넌시(Multi-Tenancy) 환경에서 각 기업(테넌트)별로 API 트래픽을 제어하는 Rate Limiter를 다중 반복문과 continue 문으로 구현하세요.\n시스템으로 유입되는 총 테넌트 수 T가 주어집니다.\n외부 반복문으로 T개의 테넌트를 순회하고, 각 테넌트의 M개 요청 비용을 1차원 정수 배열(int[] costs)에 저장한 뒤 내부 반복문과 continue 문으로 순회 판별합니다.\n\n[각 테넌트 입력 정보]\n- 첫 줄: 테넌트 식별자(문자열 ID), 버킷 최대 용량 C(정수), 초기 잔여 토큰 K(정수), 요청 개수 M(정수)\n- 둘째 줄: M개의 요청이 필요로 하는 토큰 수 M개가 공백으로 구분되어 주어집니다.\n\n[처리 및 continue 규칙]\n- 비용이 0인 헬스체크(PING/Heartbeat) 요청 (cost == 0):\n  시스템 상태 확인용 무상 면제 트래픽입니다. 바이패스 카운트(bypass)를 1 증가시키고,\n  continue 문을 사용하여 아래의 잔여 토큰 검사 및 차감/차단 로직을 실행하지 않고 즉시 다음 요청으로 건너뜁니다!\n- 일반 API 요청 (cost > 0):\n  * 필요 토큰 <= 현재 잔여 토큰: 토큰 차감(tokens -= cost) 후 '허용(allowed)' 건수 +1\n  * 필요 토큰 > 현재 잔여 토큰: 토큰 차감 없이 '차단(dropped)' 건수 +1\n- 테넌트의 M개 요청 처리가 끝나면 테넌트별 처리 요약을 출력합니다:\n  \"[{ID}] 처리 결과: 허용 {허용건수}건 / 차단 {차단건수}건 / 바이패스 {바이패스건수}건 (잔여 토큰: {잔여토큰})\"\n- 모든 테넌트(T개) 처리가 완료되면 하단에 전체 시스템 통계를 출력합니다:\n  \"=== 전체 시스템 트래픽 집계 ===\"\n  \"총 테넌트: {T}개사 | 총 허용: {총허용}건 | 총 차단: {총차단}건 | 총 바이패스: {총바이패스}건\"\n\n초심자를 위한 상세 힌트와 CS 지식은 아래 설명창을 참고하세요.",
        "cs_knowledge": "💡 **멀티테넌시 Rate Limiting과 무상 헬스체크 트래픽 바이패스(continue)**\n- **멀티테넌시(Multi-Tenancy)**: 단일 인스턴스에서 여러 고객사(테넌트)를 격리 서빙하는 클라우드 기본 구조입니다.\n- **HealthCheck Bypass**: AWS ALB, Nginx 등 프로덕션 게이트웨이는 인프라 모니터링용 Ping/Heartbeat 트래픽(비용 0)에 대해 고객사의 API Rate Limit 쿼터를 소진시키지 않고 즉시 무상 통과(Bypass)시킵니다.\n- **continue 문의 역할**: 특정 조건(비용 0)을 만족할 때, 루프 내의 복잡한 잔여 토큰 차감/차단 분기 로직을 실행하지 않고 루프의 다음 회차로 즉시 제어를 넘기는 대표적인 제어 흐름 최적화 기법입니다.\n- **배열 버퍼링**: 테넌트의 대량 트래픽 요청을 `int[] costs` 배열에 메모리 버퍼링하여 일괄 순회 분석합니다.",
        "logic_guide": "🛠️ **다중 반복문 및 continue 로직 설계 가이드**\n1. 총 테넌트 수 T를 `int tCount = sc.nextInt();`로 입력받습니다.\n2. 시스템 전체 집계를 위해 `int totalAllowed = 0; int totalDropped = 0; int totalBypass = 0;`를 선언합니다.\n3. **외부 for문 (`for (int t = 1; t <= tCount; t++)`)**:\n   - `String tenantId = sc.next(); int capacity = sc.nextInt(); int tokens = sc.nextInt(); int m = sc.nextInt();`\n   - 테넌트별 카운터 `int allowed = 0; int dropped = 0; int bypass = 0;` 선언.\n4. **내부 for문 (`for (int i = 1; i <= m; i++)`)**:\n   - `int[] costs = new int[m]; 에 요청들을 먼저 입력받고, for (int i = 0; i < costs.length; i++) 로 배열을 순회합니다.`\n   - `if (cost == 0) { bypass++; continue; }` -> continue로 아래 토큰 차감/차단 로직을 실행하지 않고 다음 요청으로 건너뜁니다.\n   - `if (tokens >= cost) { tokens -= cost; allowed++; } else { dropped++; }`\n5. 내부 for문 종료 후 테넌트별 결과를 출력하고, 전체 누적 변수에 더합니다.\n6. 외부 for문 종료 후 전체 시스템 트래픽 집계를 출력합니다.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 다중 반복문(이중 for문)을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int tCount = sc.nextInt();\n\n        int totalAllowed = 0;\n        int totalDropped = 0;\n        int totalBypass = 0;\n\n        for (int t = 1; t <= tCount; t++) {\n            String tenantId = sc.next();\n            int capacity = sc.nextInt();\n            int tokens = sc.nextInt();\n            int m = sc.nextInt();\n\n            // 테넌트의 요청 비용 목록을 1차원 정수 배열에 저장\n            int[] costs = new int[m];\n            for (int i = 0; i < m; i++) {\n                costs[i] = sc.nextInt();\n            }\n\n            int allowed = 0;\n            int dropped = 0;\n            int bypass = 0;\n\n            // 비용 배열을 순회하며 요청 판별\n            for (int i = 0; i < costs.length; i++) {\n                int cost = costs[i];\n\n                // [continue 활용] 헬스체크(비용 0) 요청은 무상 통과\n                if (cost == 0) {\n                    bypass++;\n                    continue;\n                }\n\n                if (tokens >= cost) {\n                    tokens -= cost;\n                    allowed++;\n                } else {\n                    dropped++;\n                }\n            }\n\n            System.out.printf(\"[%s] 처리 결과: 허용 %d건 / 차단 %d건 / 바이패스 %d건 (잔여 토큰: %d)\\n\", tenantId, allowed, dropped, bypass, tokens);\n            totalAllowed += allowed;\n            totalDropped += dropped;\n            totalBypass += bypass;\n        }\n\n        System.out.println(\"=== 전체 시스템 트래픽 집계 ===\");\n        System.out.printf(\"총 테넌트: %d개사 | 총 허용: %d건 | 총 차단: %d건 | 총 바이패스: %d건\\n\", tCount, totalAllowed, totalDropped, totalBypass);\n    }\n}\n",
        "hint": "1. 외부 루프는 테넌트를 순회하고, 내부 루프는 각 요청을 순회합니다.\n2. cost == 0 일 때 bypass++ 후 continue; 를 실행하면 아래의 토큰 검사 코드를 거치지 않고 바로 다음 요청으로 넘어갑니다.",
        "samples": [
            {
                "input": "2\nTenantA 100 30 4\n10 0 15 10\nTenantB 50 15 4\n0 5 10 5",
                "output": "[TenantA] 처리 결과: 허용 2건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 5)\n[TenantB] 처리 결과: 허용 2건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 0)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 2개사 | 총 허용: 4건 | 총 차단: 2건 | 총 바이패스: 2건"
            },
            {
                "input": "1\nShopCorp 50 50 5\n0 0 10 20 0",
                "output": "[ShopCorp] 처리 결과: 허용 2건 / 차단 0건 / 바이패스 3건 (잔여 토큰: 20)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 1개사 | 총 허용: 2건 | 총 차단: 0건 | 총 바이패스: 3건"
            },
            {
                "input": "3\nAlpha 20 10 3\n0 15 5\nBeta 30 0 2\n0 1\nGamma 100 50 3\n20 0 20",
                "output": "[Alpha] 처리 결과: 허용 1건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 5)\n[Beta] 처리 결과: 허용 0건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 0)\n[Gamma] 처리 결과: 허용 2건 / 차단 0건 / 바이패스 1건 (잔여 토큰: 10)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 3개사 | 총 허용: 3건 | 총 차단: 2건 | 총 바이패스: 3건"
            }
        ],
        "sample_input": "2\nTenantA 100 30 4\n10 0 15 10\nTenantB 50 15 4\n0 5 10 5",
        "sample_output": "[TenantA] 처리 결과: 허용 2건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 5)\n[TenantB] 처리 결과: 허용 2건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 0)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 2개사 | 총 허용: 4건 | 총 차단: 2건 | 총 바이패스: 2건",
        "expected": "[TenantA] 처리 결과: 허용 2건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 5)\n[TenantB] 처리 결과: 허용 2건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 0)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 2개사 | 총 허용: 4건 | 총 차단: 2건 | 총 바이패스: 2건",
        "testcases": [
            {
                "input": "2\nTenantA 100 30 4\n10 0 15 10\nTenantB 50 15 4\n0 5 10 5",
                "expected": "[TenantA] 처리 결과: 허용 2건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 5)\n[TenantB] 처리 결과: 허용 2건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 0)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 2개사 | 총 허용: 4건 | 총 차단: 2건 | 총 바이패스: 2건",
                "is_hidden": false
            },
            {
                "input": "1\nShopCorp 50 50 5\n0 0 10 20 0",
                "expected": "[ShopCorp] 처리 결과: 허용 2건 / 차단 0건 / 바이패스 3건 (잔여 토큰: 20)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 1개사 | 총 허용: 2건 | 총 차단: 0건 | 총 바이패스: 3건",
                "is_hidden": false
            },
            {
                "input": "3\nAlpha 20 10 3\n0 15 5\nBeta 30 0 2\n0 1\nGamma 100 50 3\n20 0 20",
                "expected": "[Alpha] 처리 결과: 허용 1건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 5)\n[Beta] 처리 결과: 허용 0건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 0)\n[Gamma] 처리 결과: 허용 2건 / 차단 0건 / 바이패스 1건 (잔여 토큰: 10)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 3개사 | 총 허용: 3건 | 총 차단: 2건 | 총 바이패스: 3건",
                "is_hidden": false
            },
            {
                "input": "2\nAcme 50 25 4\n10 0 10 5\nBetaLab 100 40 3\n0 20 15",
                "expected": "[Acme] 처리 결과: 허용 3건 / 차단 0건 / 바이패스 1건 (잔여 토큰: 0)\n[BetaLab] 처리 결과: 허용 2건 / 차단 0건 / 바이패스 1건 (잔여 토큰: 5)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 2개사 | 총 허용: 5건 | 총 차단: 0건 | 총 바이패스: 2건",
                "is_hidden": true
            },
            {
                "input": "1\nSingleUser 10 5 2\n0 5",
                "expected": "[SingleUser] 처리 결과: 허용 1건 / 차단 0건 / 바이패스 1건 (잔여 토큰: 0)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 1개사 | 총 허용: 1건 | 총 차단: 0건 | 총 바이패스: 1건",
                "is_hidden": true
            },
            {
                "input": "1\nHeavyBot 100 10 3\n50 0 50",
                "expected": "[HeavyBot] 처리 결과: 허용 0건 / 차단 2건 / 바이패스 1건 (잔여 토큰: 10)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 1개사 | 총 허용: 0건 | 총 차단: 2건 | 총 바이패스: 1건",
                "is_hidden": true
            },
            {
                "input": "3\nUser1 100 100 3\n0 50 50\nUser2 100 100 3\n101 0 1\nUser3 100 100 2\n10 20",
                "expected": "[User1] 처리 결과: 허용 2건 / 차단 0건 / 바이패스 1건 (잔여 토큰: 0)\n[User2] 처리 결과: 허용 1건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 99)\n[User3] 처리 결과: 허용 2건 / 차단 0건 / 바이패스 0건 (잔여 토큰: 70)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 3개사 | 총 허용: 5건 | 총 차단: 1건 | 총 바이패스: 2건",
                "is_hidden": true
            },
            {
                "input": "2\nServiceX 20 20 5\n0 0 0 0 0\nServiceY 20 0 2\n0 1",
                "expected": "[ServiceX] 처리 결과: 허용 0건 / 차단 0건 / 바이패스 5건 (잔여 토큰: 20)\n[ServiceY] 처리 결과: 허용 0건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 0)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 2개사 | 총 허용: 0건 | 총 차단: 1건 | 총 바이패스: 6건",
                "is_hidden": true
            },
            {
                "input": "4\nT1 10 10 2\n0 10\nT2 10 10 1\n11\nT3 10 0 1\n0\nT4 10 10 3\n6 0 5",
                "expected": "[T1] 처리 결과: 허용 1건 / 차단 0건 / 바이패스 1건 (잔여 토큰: 0)\n[T2] 처리 결과: 허용 0건 / 차단 1건 / 바이패스 0건 (잔여 토큰: 10)\n[T3] 처리 결과: 허용 0건 / 차단 0건 / 바이패스 1건 (잔여 토큰: 0)\n[T4] 처리 결과: 허용 1건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 4)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 4개사 | 총 허용: 2건 | 총 차단: 2건 | 총 바이패스: 3건",
                "is_hidden": true
            },
            {
                "input": "2\nFinTech 1000 500 4\n200 0 150 100\nLogistics 500 100 4\n50 0 60 10",
                "expected": "[FinTech] 처리 결과: 허용 3건 / 차단 0건 / 바이패스 1건 (잔여 토큰: 50)\n[Logistics] 처리 결과: 허용 2건 / 차단 1건 / 바이패스 1건 (잔여 토큰: 40)\n=== 전체 시스템 트래픽 집계 ===\n총 테넌트: 2개사 | 총 허용: 5건 | 총 차단: 1건 | 총 바이패스: 2건",
                "is_hidden": true
            }
        ]
    },
    {
        "id": "day02_상2",
        "day": 2,
        "subject": "Java",
        "difficulty": "상",
        "title": "데이터베이스 WAL(Write-Ahead Logging) 멀티 세션 트랜잭션 관리자 (MultiSessionWalManager)",
        "desc": "데이터베이스 관리 시스템(DBMS)의 트랜잭션 원자성(ACID Atomicity)을 보장하는 WAL(Write-Ahead Logging) 엔진을 다중 반복문으로 구현하세요.\n초기 계좌 잔액은 0원입니다.\n배치로 유입되는 총 트랜잭션 세션 수 T가 주어집니다.\n외부 반복문으로 T개의 트랜잭션 세션을 순회하고, 각 세션의 K개 명령어와 금액을 1차원 배열(String[] ops, int[] vals)로 구성된 Write-Ahead Log 버퍼에 적재한 뒤 순차 검증합니다.\n\n[각 트랜잭션 입력 정보]\n- 첫 줄: 트랜잭션 식별자(문자열 ID, 예: TX_1), 실행할 명령어 개수 K (1 이상)\n- 다음 K개 줄: 명령어(ADD 또는 SUB)와 금액 X가 주어집니다.\n  * ADD X : 임시 변경분(pending)에 X원 가산 (pending += X)\n  * SUB X : 임시 변경분(pending)에 X원 차감 (단, 현재 계좌 잔액 + pending 에서 X를 차감했을 때 잔액이 마이너스가 되면 '잔액 부족 충돌' 오류 플래그를 설정합니다)\n\n[커밋 및 롤백 규칙]\n- K개 작업을 수행하는 동안 잔액 부족 충돌이 한 번도 발생하지 않으면:\n  임시 변경분을 실제 계좌 잔액(balance)에 영구 반영(커밋)하고, 커밋 건수 +1\n  출력: \"[{ID}] COMMIT 완료 (변동: {+/-변동액}원 | 현재 잔액: {잔액}원)\"\n- 작업 중 단 한 번이라도 잔액 부족 충돌이 발생하면:\n  트랜잭션 전체를 무효화(롤백)하여 실제 계좌 잔액을 변경하지 않고, 롤백 건수 +1\n  출력: \"[{ID}] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: {잔액}원)\"\n- 모든 트랜잭션 세션(T개)이 종료되면 최종 보고서를 출력합니다:\n  \"=== WAL 트랜잭션 최종 정산 ===\"\n  \"최종 계좌 잔액: {잔액}원 | 커밋: {커밋수}건 | 롤백: {롤백수}건\"\n\n초심자를 위한 상세 힌트와 CS 지식은 아래 설명창을 참고하세요.",
        "cs_knowledge": "💡 **트랜잭션 원자성(Atomicity)과 WAL(Write-Ahead Logging)**\n- **원자성(All or Nothing)**: 트랜잭션 내의 모든 작업이 100% 성공하거나, 중간에 하나라도 오류(ABORT)가 발생하면 이전 상태로 완벽히 되돌려야(Rollback) 합니다.\n- **WAL(Write-Ahead Logging)**: 실제 데이터베이스 디스크에 영구 쓰기 전에, 메모리 내 임시 버퍼(Pending Log)에 먼저 기록해두고 최종 커밋 시점에 일괄 반영하는 기법입니다.\n- **다중 반복문과 break 제어**: 외부 루프는 여러 트랜잭션 세션을 독립적으로 관리하고, 내부 루프는 각 트랜잭션의 세부 명령어를 수행하다가 충돌(ABORT) 발생 시 `break`로 즉시 내부 루프를 탈출하여 롤백하는 구조입니다.\n- **배열 기반 WAL 로그 버퍼**: 트랜잭션의 연산 시퀀스를 배열에 순서대로 기록(Log)해 두고 검증하는 DBMS 메모리 버퍼 기법입니다.",
        "logic_guide": "🛠️ **배열 기반 WAL 로그 버퍼 로직 설계 가이드**\n1. 총 세션 수 T를 `int tCount = sc.nextInt();`로 입력받습니다.\n2. 계좌 잔액 `int balance = 0; int commitCount = 0; int rollbackCount = 0;`를 선언합니다.\n3. **외부 for문 (`for (int t = 1; t <= tCount; t++)`)**:\n   - `String txId = sc.next(); int k = sc.nextInt();`\n   - K개의 명령어와 금액을 저장할 1차원 배열 버퍼 생성:\n     `String[] ops = new String[k]; int[] vals = new int[k];`\n   - for문으로 `ops[i] = sc.next(); vals[i] = sc.nextInt();` 를 배열에 먼저 적재합니다.\n   - `int pending = 0; boolean hasError = false;`\n4. **내부 for문 (`for (int i = 0; i < k; i++)`)**:\n   - `if (ops[i].equals(\"ADD\"))`: `pending += vals[i];`\n   - `else if (ops[i].equals(\"SUB\"))`:\n     * 잔액 부족 검사: `if (balance + pending < vals[i]) hasError = true; else pending -= vals[i];`\n5. 내부 for문 종료 후:\n   - `if (!hasError)`: `balance += pending; commitCount++; System.out.printf(\"[%s] COMMIT 완료 (변동: %+d원 | 현재 잔액: %d원)\\n\", txId, pending, balance);`\n   - `else`: `rollbackCount++; System.out.printf(\"[%s] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: %d원)\\n\", txId, balance);`\n6. 모든 세션 완료 후 최종 정산 라인을 출력합니다.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 다중 반복문과 break 제어 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int tCount = sc.nextInt();\n\n        int balance = 0;\n        int commitCount = 0;\n        int rollbackCount = 0;\n\n        for (int t = 1; t <= tCount; t++) {\n            String txId = sc.next();\n            int k = sc.nextInt();\n\n            // 트랜잭션의 작업 명령어와 금액을 1차원 배열(Write-Ahead Log 버퍼)에 적재\n            String[] ops = new String[k];\n            int[] vals = new int[k];\n            for (int i = 0; i < k; i++) {\n                ops[i] = sc.next();\n                vals[i] = sc.nextInt();\n            }\n\n            int pending = 0;\n            boolean hasError = false;\n\n            // 로그 배열을 순차적으로 해석 및 검증\n            for (int i = 0; i < k; i++) {\n                if (ops[i].equals(\"ADD\")) {\n                    pending += vals[i];\n                } else if (ops[i].equals(\"SUB\")) {\n                    if (balance + pending < vals[i]) {\n                        hasError = true;\n                    } else {\n                        pending -= vals[i];\n                    }\n                }\n            }\n\n            if (!hasError) {\n                balance += pending;\n                commitCount++;\n                System.out.printf(\"[%s] COMMIT 완료 (변동: %+d원 | 현재 잔액: %d원)\\n\", txId, pending, balance);\n            } else {\n                rollbackCount++;\n                System.out.printf(\"[%s] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: %d원)\\n\", txId, balance);\n            }\n        }\n\n        System.out.println(\"=== WAL 트랜잭션 최종 정산 ===\");\n        System.out.printf(\"최종 계좌 잔액: %d원 | 커밋: %d건 | 롤백: %d건\\n\", balance, commitCount, rollbackCount);\n    }\n}\n",
        "hint": "1. String[] ops = new String[k]; int[] vals = new int[k]; 로 트랜잭션 명령어를 배열 버퍼에 먼저 저장합니다.\n2. 배열을 순회하며 잔액(balance + pending)이 출금액(vals[i])보다 작은지 검사하여 충돌을 감지합니다.",
        "samples": [
            {
                "input": "2\nTX_1 3\nADD 5000\nADD 3000\nSUB 2000\nTX_2 2\nSUB 10000\nADD 5000",
                "output": "[TX_1] COMMIT 완료 (변동: +6000원 | 현재 잔액: 6000원)\n[TX_2] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 6000원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 6000원 | 커밋: 1건 | 롤백: 1건"
            },
            {
                "input": "1\nTX_INIT 2\nADD 10000\nSUB 3000",
                "output": "[TX_INIT] COMMIT 완료 (변동: +7000원 | 현재 잔액: 7000원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 7000원 | 커밋: 1건 | 롤백: 0건"
            },
            {
                "input": "3\nTX_A 1\nADD 1000\nTX_B 1\nSUB 2000\nTX_C 2\nADD 500\nSUB 1200",
                "output": "[TX_A] COMMIT 완료 (변동: +1000원 | 현재 잔액: 1000원)\n[TX_B] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 1000원)\n[TX_C] COMMIT 완료 (변동: -700원 | 현재 잔액: 300원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 300원 | 커밋: 2건 | 롤백: 1건"
            }
        ],
        "sample_input": "2\nTX_1 3\nADD 5000\nADD 3000\nSUB 2000\nTX_2 2\nSUB 10000\nADD 5000",
        "sample_output": "[TX_1] COMMIT 완료 (변동: +6000원 | 현재 잔액: 6000원)\n[TX_2] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 6000원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 6000원 | 커밋: 1건 | 롤백: 1건",
        "expected": "[TX_1] COMMIT 완료 (변동: +6000원 | 현재 잔액: 6000원)\n[TX_2] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 6000원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 6000원 | 커밋: 1건 | 롤백: 1건",
        "testcases": [
            {
                "input": "2\nTX_1 3\nADD 5000\nADD 3000\nSUB 2000\nTX_2 2\nSUB 10000\nADD 5000",
                "expected": "[TX_1] COMMIT 완료 (변동: +6000원 | 현재 잔액: 6000원)\n[TX_2] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 6000원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 6000원 | 커밋: 1건 | 롤백: 1건",
                "is_hidden": false
            },
            {
                "input": "1\nTX_INIT 2\nADD 10000\nSUB 3000",
                "expected": "[TX_INIT] COMMIT 완료 (변동: +7000원 | 현재 잔액: 7000원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 7000원 | 커밋: 1건 | 롤백: 0건",
                "is_hidden": false
            },
            {
                "input": "3\nTX_A 1\nADD 1000\nTX_B 1\nSUB 2000\nTX_C 2\nADD 500\nSUB 1200",
                "expected": "[TX_A] COMMIT 완료 (변동: +1000원 | 현재 잔액: 1000원)\n[TX_B] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 1000원)\n[TX_C] COMMIT 완료 (변동: -700원 | 현재 잔액: 300원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 300원 | 커밋: 2건 | 롤백: 1건",
                "is_hidden": false
            },
            {
                "input": "2\nTX_101 2\nSUB 100\nADD 500\nTX_102 2\nADD 2000\nSUB 500",
                "expected": "[TX_101] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 0원)\n[TX_102] COMMIT 완료 (변동: +1500원 | 현재 잔액: 1500원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 1500원 | 커밋: 1건 | 롤백: 1건",
                "is_hidden": true
            },
            {
                "input": "1\nTX_BIG 4\nADD 50000\nSUB 20000\nADD 10000\nSUB 40000",
                "expected": "[TX_BIG] COMMIT 완료 (변동: +0원 | 현재 잔액: 0원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 0원 | 커밋: 1건 | 롤백: 0건",
                "is_hidden": true
            },
            {
                "input": "1\nTX_FAIL 3\nADD 1000\nSUB 500\nSUB 800",
                "expected": "[TX_FAIL] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 0원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 0원 | 커밋: 0건 | 롤백: 1건",
                "is_hidden": true
            },
            {
                "input": "3\nTX_1 1\nADD 100\nTX_2 1\nADD 200\nTX_3 1\nADD 300",
                "expected": "[TX_1] COMMIT 완료 (변동: +100원 | 현재 잔액: 100원)\n[TX_2] COMMIT 완료 (변동: +200원 | 현재 잔액: 300원)\n[TX_3] COMMIT 완료 (변동: +300원 | 현재 잔액: 600원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 600원 | 커밋: 3건 | 롤백: 0건",
                "is_hidden": true
            },
            {
                "input": "3\nTX_A 1\nSUB 10\nTX_B 1\nSUB 20\nTX_C 1\nSUB 30",
                "expected": "[TX_A] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 0원)\n[TX_B] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 0원)\n[TX_C] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 0원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 0원 | 커밋: 0건 | 롤백: 3건",
                "is_hidden": true
            },
            {
                "input": "2\nTX_FIRST 2\nADD 3000\nSUB 1000\nTX_SECOND 3\nSUB 500\nSUB 1000\nSUB 1000",
                "expected": "[TX_FIRST] COMMIT 완료 (변동: +2000원 | 현재 잔액: 2000원)\n[TX_SECOND] ROLLBACK 취소 (잔액 부족 충돌 | 현재 잔액: 2000원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 2000원 | 커밋: 1건 | 롤백: 1건",
                "is_hidden": true
            },
            {
                "input": "2\nTX_SAVE 2\nADD 10000\nSUB 2000\nTX_USE 2\nSUB 7000\nSUB 1000",
                "expected": "[TX_SAVE] COMMIT 완료 (변동: +8000원 | 현재 잔액: 8000원)\n[TX_USE] COMMIT 완료 (변동: -8000원 | 현재 잔액: 0원)\n=== WAL 트랜잭션 최종 정산 ===\n최종 계좌 잔액: 0원 | 커밋: 2건 | 롤백: 0건",
                "is_hidden": true
            }
        ]
    },
    {
        "id": "day02_도전1",
        "day": 2,
        "subject": "Java",
        "difficulty": "도전",
        "title": "네트워크 다중 패킷 프레임 2차원 체크섬 검증기 (MultiPacketChecksumValidator)",
        "desc": "컴퓨터 네트워크 데이터 링크 계층에서 전송되는 프레임(Frame) 시퀀스의 다중 패킷 무결성을 2차원 체크섬(Checksum) 알고리즘으로 검증하세요.\n수신된 총 패킷 프레임 개수 P가 주어집니다.\n외부 반복문으로 P개의 패킷을 순회하고, 각 패킷의 B개 1바이트 데이터를 1차원 배열(int[] bytes)에 저장한 뒤 배열을 순회하며 합산 및 2차원 체크섬을 계산합니다.\n\n[각 패킷 입력 정보]\n- 첫 줄: 패킷 식별자(문자열 ID, 예: PKT-01), 데이터 바이트 개수 B\n- 둘째 줄: B개의 바이트 데이터(0~255)와 해당 패킷의 수신 체크섬 C(0~255)가 공백으로 주어집니다.\n\n[체크섬 계산 및 판정 규칙]\n- 해당 패킷의 B개 바이트 총합 sum을 구합니다.\n- 계산된 체크섬 = (256 - (sum % 256)) % 256\n- 계산된 체크섬 == 수신된 체크섬 C:\n  정상 패킷 통과(PASS) 카운트 +1\n  출력: \"[{ID}] PASS (합계: {sum} | 체크섬: {calcChecksum})\"\n- 계산된 체크섬 != 수신된 체크섬 C:\n  손상 패킷 감지(FAIL) 카운트 +1\n  출력: \"[{ID}] FAIL: 손상 감지 (계산: {calcChecksum} != 수신: {recvChecksum})\"\n- 모든 패킷(P개) 검증이 끝나면 종합 무결성 분석 보고서를 출력합니다:\n  \"=== 네트워크 프레임 무결성 분석 보고서 ===\"\n  \"총 패킷: {P}개 | 정상: {정상수}개 | 손상: {손상수}개\"\n\n초심자를 위한 상세 힌트와 CS 지식은 아래 설명창을 참고하세요.",
        "cs_knowledge": "💡 **네트워크 프레임 시퀀스와 2차원 패킷 무결성 검증**\n- **데이터 링크 프레임**: 물리 계층을 통해 전송되는 비트 스트림을 패킷/프레임 단위로 묶어 에러를 검출합니다.\n- **체크섬(Checksum)**: 바이트 데이터들의 누적 합(Sum)을 기반으로 역수를 취해 데이터 전송 중 비트 플립(Bit Flip)이나 누락이 일어났는지 1바이트로 검증하는 표준 오류 검출 기법입니다.\n- **다중 반복문(2차원 구조)**: 외부 루프는 전송 스트림 상의 연속된 패킷 프레임들을 하나씩 수신하고, 내부 루프는 각 패킷 프레임 내부의 바이트 청크를 순회하며 누적 체크섬을 연산하는 네트워크 I/O의 대표적 패턴입니다.\n- **바이트 배열(Byte Array)**: 네트워크 소켓을 통해 수신된 패킷 바이트 청크를 배열에 보관하여 체크섬 무결성을 계산합니다.",
        "logic_guide": "🛠️ **바이트 배열 및 2차원 체크섬 로직 설계 가이드**\n1. 총 패킷 수 P를 `int pCount = sc.nextInt();`로 입력받습니다.\n2. `int passCount = 0; int failCount = 0;`를 선언합니다.\n3. **외부 for문 (`for (int p = 1; p <= pCount; p++)`)**:\n   - `String pktId = sc.next(); int bCount = sc.nextInt();`\n   - 패킷 페이로드를 담을 1차원 바이트 배열 생성:\n     `int[] bytes = new int[bCount];`\n   - for문으로 `bytes[b] = sc.nextInt();` 를 배열에 채웁니다.\n   - `int recvChecksum = sc.nextInt();`\n4. **내부 for문 (`for (int b = 0; b < bytes.length; b++)`)**:\n   - 바이트 배열을 순회하며 `sum += bytes[b];` 누적 합산합니다.\n5. 내부 for문 종료 후 체크섬 계산 및 검증:\n   - `int calcChecksum = (256 - (sum % 256)) % 256;`\n   - `if (calcChecksum == recvChecksum)`: `passCount++; System.out.printf(\"[%s] PASS (합계: %d | 체크섬: %d)\\n\", pktId, sum, calcChecksum);`\n   - `else`: `failCount++; System.out.printf(\"[%s] FAIL: 손상 감지 (계산: %d != 수신: %d)\\n\", pktId, calcChecksum, recvChecksum);`\n6. 외부 for문 종료 후 최종 분석 보고서를 출력합니다.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 다중 반복문 기반 패킷 체크섬 검증 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int pCount = sc.nextInt();\n\n        int passCount = 0;\n        int failCount = 0;\n\n        for (int p = 1; p <= pCount; p++) {\n            String pktId = sc.next();\n            int bCount = sc.nextInt();\n\n            // 패킷 페이로드 바이트들을 1차원 배열에 저장\n            int[] bytes = new int[bCount];\n            for (int b = 0; b < bCount; b++) {\n                bytes[b] = sc.nextInt();\n            }\n\n            int recvChecksum = sc.nextInt();\n\n            // 바이트 배열을 순회하며 합산\n            int sum = 0;\n            for (int b = 0; b < bytes.length; b++) {\n                sum += bytes[b];\n            }\n\n            int calcChecksum = (256 - (sum % 256)) % 256;\n\n            if (calcChecksum == recvChecksum) {\n                passCount++;\n                System.out.printf(\"[%s] PASS (합계: %d | 체크섬: %d)\\n\", pktId, sum, calcChecksum);\n            } else {\n                failCount++;\n                System.out.printf(\"[%s] FAIL: 손상 감지 (계산: %d != 수신: %d)\\n\", pktId, calcChecksum, recvChecksum);\n            }\n        }\n\n        System.out.println(\"=== 네트워크 프레임 무결성 분석 보고서 ===\");\n        System.out.printf(\"총 패킷: %d개 | 정상: %d개 | 손상: %d개\\n\", pCount, passCount, failCount);\n    }\n}\n",
        "sample_input": "2\nPKT-01 3\n10 20 30 196\nPKT-02 4\n50 50 50 50 56",
        "sample_output": "[PKT-01] PASS (합계: 60 | 체크섬: 196)\n[PKT-02] PASS (합계: 200 | 체크섬: 56)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 2개 | 정상: 2개 | 손상: 0개",
        "expected": "[PKT-01] PASS (합계: 60 | 체크섬: 196)\n[PKT-02] PASS (합계: 200 | 체크섬: 56)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 2개 | 정상: 2개 | 손상: 0개",
        "samples": [
            {
                "input": "2\nPKT-01 3\n10 20 30 196\nPKT-02 4\n50 50 50 50 56",
                "output": "[PKT-01] PASS (합계: 60 | 체크섬: 196)\n[PKT-02] PASS (합계: 200 | 체크섬: 56)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 2개 | 정상: 2개 | 손상: 0개"
            },
            {
                "input": "1\nPKT-ERR 2\n100 200 99",
                "output": "[PKT-ERR] FAIL: 손상 감지 (계산: 212 != 수신: 99)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 1개 | 정상: 0개 | 손상: 1개"
            },
            {
                "input": "3\nFRAME_A 2\n0 0 0\nFRAME_B 2\n128 128 0\nFRAME_C 1\n255 1",
                "output": "[FRAME_A] PASS (합계: 0 | 체크섬: 0)\n[FRAME_B] PASS (합계: 256 | 체크섬: 0)\n[FRAME_C] PASS (합계: 255 | 체크섬: 1)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 3개 | 정상: 3개 | 손상: 0개"
            }
        ],
        "testcases": [
            {
                "input": "2\nPKT-01 3\n10 20 30 196\nPKT-02 4\n50 50 50 50 56",
                "expected": "[PKT-01] PASS (합계: 60 | 체크섬: 196)\n[PKT-02] PASS (합계: 200 | 체크섬: 56)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 2개 | 정상: 2개 | 손상: 0개",
                "is_hidden": false
            },
            {
                "input": "1\nPKT-ERR 2\n100 200 99",
                "expected": "[PKT-ERR] FAIL: 손상 감지 (계산: 212 != 수신: 99)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 1개 | 정상: 0개 | 손상: 1개",
                "is_hidden": false
            },
            {
                "input": "3\nFRAME_A 2\n0 0 0\nFRAME_B 2\n128 128 0\nFRAME_C 1\n255 1",
                "expected": "[FRAME_A] PASS (합계: 0 | 체크섬: 0)\n[FRAME_B] PASS (합계: 256 | 체크섬: 0)\n[FRAME_C] PASS (합계: 255 | 체크섬: 1)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 3개 | 정상: 3개 | 손상: 0개",
                "is_hidden": false
            },
            {
                "input": "2\nP1 3\n1 2 3 250\nP2 3\n1 2 3 251",
                "expected": "[P1] PASS (합계: 6 | 체크섬: 250)\n[P2] FAIL: 손상 감지 (계산: 250 != 수신: 251)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 2개 | 정상: 1개 | 손상: 1개",
                "is_hidden": true
            },
            {
                "input": "1\nSOLO 4\n25 25 25 25 156",
                "expected": "[SOLO] PASS (합계: 100 | 체크섬: 156)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 1개 | 정상: 1개 | 손상: 0개",
                "is_hidden": true
            },
            {
                "input": "1\nBAD_PKT 3\n10 10 10 0",
                "expected": "[BAD_PKT] FAIL: 손상 감지 (계산: 226 != 수신: 0)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 1개 | 정상: 0개 | 손상: 1개",
                "is_hidden": true
            },
            {
                "input": "3\nSTREAM_1 2\n50 50 156\nSTREAM_2 2\n100 100 56\nSTREAM_3 2\n200 200 68",
                "expected": "[STREAM_1] PASS (합계: 100 | 체크섬: 156)\n[STREAM_2] PASS (합계: 200 | 체크섬: 56)\n[STREAM_3] FAIL: 손상 감지 (계산: 112 != 수신: 68)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 3개 | 정상: 2개 | 손상: 1개",
                "is_hidden": true
            },
            {
                "input": "2\nZERO_SUM 1\n0 0\nMAX_SUM 2\n255 255 2",
                "expected": "[ZERO_SUM] PASS (합계: 0 | 체크섬: 0)\n[MAX_SUM] PASS (합계: 510 | 체크섬: 2)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 2개 | 정상: 2개 | 손상: 0개",
                "is_hidden": true
            },
            {
                "input": "4\nF1 1\n10 246\nF2 1\n20 236\nF3 1\n30 225\nF4 1\n40 216",
                "expected": "[F1] PASS (합계: 10 | 체크섬: 246)\n[F2] PASS (합계: 20 | 체크섬: 236)\n[F3] FAIL: 손상 감지 (계산: 226 != 수신: 225)\n[F4] PASS (합계: 40 | 체크섬: 216)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 4개 | 정상: 3개 | 손상: 1개",
                "is_hidden": true
            },
            {
                "input": "2\nHEADER 5\n1 2 3 4 5 241\nPAYLOAD 3\n100 100 100 12",
                "expected": "[HEADER] PASS (합계: 15 | 체크섬: 241)\n[PAYLOAD] FAIL: 손상 감지 (계산: 212 != 수신: 12)\n=== 네트워크 프레임 무결성 분석 보고서 ===\n총 패킷: 2개 | 정상: 1개 | 손상: 1개",
                "is_hidden": true
            }
        ],
        "hint": "1. int[] bytes = new int[bCount]; 로 각 패킷의 바이트 데이터를 배열에 저장합니다.\n2. for (int b = 0; b < bytes.length; b++) 로 바이트 배열을 순회하여 sum을 구합니다.\n3. 체크섬 공식은 (256 - (sum % 256)) % 256 입니다."
    },
    {
        "id": "day02_도전2",
        "day": 2,
        "subject": "Java",
        "difficulty": "도전",
        "title": "가상 CPU 마이크로코드 명령어 & 레지스터 비트 덤프 엔진 (MicrocodeCpuEmulator)",
        "desc": "컴퓨터 CPU 제어 유닛(Control Unit)의 마이크로코드(Microcode) 반복 연산, 하드웨어 인터럽트(break), 8비트 레지스터 2진수 비트 덤프를 다중 반복문으로 구현하세요.\nCPU 레지스터 파일을 크기 2의 배열(int[] registers = new int[2]; registers[0]: R0, registers[1]: R1)로 관리합니다. (모든 레지스터 값은 8비트 부호 없는 정수 0~255 범위를 유지합니다)\n총 N개의 마이크로 명령어가 주어집니다.\n외부 반복문으로 N개의 명령어를 순회하고, 'REPEAT' 또는 'DUMP' 명령어 실행 시 내부 반복문으로 세부 연산 및 비트 출력을 수행합니다.\n\n[명령어 사양]\n- SET {reg} {val} : 해당 레지스터(R0 또는 R1)에 val 값 대입\n- REPEAT {count} {op} {operand} : op 연산(ADD 또는 SUB)을 내부 반복문으로 count번 연속 반복 실행!\n  * ADD 시 오버플로우 트랩(break):\n    연산 결과(r0 + operand)가 8비트 상한(255)을 초과하면 r0 = 255로 포화시키고,\n    \"[인터럽트] R0 오버플로우 트랩! ({현재회차}회차에서 조기 중단)\" 출력 후 break로 내부 REPEAT 루프 즉시 탈출!\n  * SUB 시 언더플로우 트랩(break):\n    연산 결과(r0 - operand)가 8비트 하한(0) 미만이 되면 r0 = 0으로 포화시키고,\n    \"[인터럽트] R0 언더플로우 트랩! ({현재회차}회차에서 조기 중단)\" 출력 후 break로 내부 REPEAT 루프 즉시 탈출!\n- DUMP {reg} : 해당 레지스터의 8비트 2진수 비트 패턴을 내부 반복문(7번 비트부터 0번 비트까지)으로 순회하여 출력!\n  출력 형식: \"[{reg} 비트 덤프: 10진수 {val} | 2진수 {8자리이진수}]\"\n\n[출력 규칙]\n- 인터럽트 트랩 및 DUMP 명령어 결과는 실행될 때마다 즉시 출력합니다.\n- 모든 명령어(N개) 처리가 완료되면 최종 CPU 상태 보고서를 출력합니다:\n  \"=== 8비트 가상 CPU 실행 보고서 ===\"\n  \"총 사이클: {N}사이클 | 최종 R0: {R0} | 최종 R1: {R1}\"\n\n초심자를 위한 상세 힌트와 CS 지식은 아래 설명창을 참고하세요.",
        "cs_knowledge": "💡 **CPU 하드웨어 인터럽트(Trap)와 루프 조기 탈출(break)**\n- **ALU 오버플로우 트랩**: CPU의 산술논리연산장치(ALU)는 8비트 레지스터 용량을 초과하는 연산이 감지되면 하드웨어 예외 신호(Exception Trap)를 발생시켜 진행 중이던 명령어 마이크로 사이클을 즉시 중단합니다.\n- **포화 연산(Saturation Arithmetic)**: 오버플로우 시 255, 언더플로우 시 0으로 고정하여 시스템 크래시를 방지하는 임베디드/DSP 하드웨어 기법입니다.\n- **break 문의 역할**: 내부 반복문(`for (int c = 1; c <= count; c++)`) 내에서 트랩 조건을 감지했을 때 `break`를 호출하면 내부 루프만 즉시 탈출하여 상위 프로그램 흐름으로 복귀합니다.\n- **레지스터 파일 배열(Register File Array)**: 실제 CPU 하드웨어는 R0~Rn 레지스터들을 레지스터 파일이라는 주소 지정 가능한 배열 구조로 설계합니다.",
        "logic_guide": "🛠️ **레지스터 파일 배열, break, 비트 덤프 배열 로직 가이드**\n1. 총 명령어 개수 N을 `int nCmds = sc.nextInt();`로 입력받습니다.\n2. 크기 2의 레지스터 파일 배열 `int[] registers = new int[2]; int cycles = 0;` (0번 인덱스: R0, 1번 인덱스: R1)\n3. **외부 for문 (`for (int i = 0; i < nCmds; i++)`)**:\n   - `String op = sc.next(); cycles++;`\n   - `if (op.equals(\"SET\"))`:\n     * `String reg = sc.next(); int val = sc.nextInt(); int idx = reg.equals(\"R0\") ? 0 : 1; registers[idx] = val;`\n   - `else if (op.equals(\"REPEAT\"))`:\n     * `int count = sc.nextInt(); String targetOp = sc.next(); int operand = sc.nextInt();`\n     * **내부 for문 (`for (int c = 1; c <= count; c++)`)**:\n       - `if (targetOp.equals(\"ADD\"))`:\n         * `if (registers[0] + operand > 255) { registers[0] = 255; System.out.printf(\"[인터럽트] R0 오버플로우 트랩! (%d회차에서 조기 중단)\\n\", c); break; }`\n         * `else { registers[0] += operand; }`\n       - `else if (targetOp.equals(\"SUB\"))`:\n         * `if (registers[0] - operand < 0) { registers[0] = 0; System.out.printf(\"[인터럽트] R0 언더플로우 트랩! (%d회차에서 조기 중단)\\n\", c); break; }`\n         * `else { registers[0] -= operand; }`\n   - `else if (op.equals(\"DUMP\"))`:\n     * `String reg = sc.next(); int idx = reg.equals(\"R0\") ? 0 : 1; int val = registers[idx];`\n     * 8비트 2진수를 담을 크기 8의 배열 생성: `int[] bits = new int[8];`\n     * **내부 for문 (`for (int bit = 7; bit >= 0; bit--)`)**: `bits[7 - bit] = (val >> bit) & 1;`\n     * `System.out.printf(\"[%s 비트 덤프: 10진수 %d | 2진수 \", reg, val);`\n     * **배열 출력 for문 (`for (int b = 0; b < bits.length; b++)`)**: `System.out.print(bits[b]);`\n     * `System.out.println(\"]\");`\n4. 외부 for문 종료 후 최종 CPU 실행 보고서를 출력합니다.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 다중 반복문 기반 가상 CPU 에뮬레이터 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int nCmds = sc.nextInt();\n\n        // CPU 레지스터를 크기 2의 배열로 관리 (registers[0]: R0, registers[1]: R1)\n        int[] registers = new int[2];\n        int cycles = 0;\n\n        for (int i = 0; i < nCmds; i++) {\n            String op = sc.next();\n            cycles++;\n\n            if (op.equals(\"SET\")) {\n                String reg = sc.next();\n                int val = sc.nextInt();\n                int idx = reg.equals(\"R0\") ? 0 : 1;\n                registers[idx] = val;\n            } else if (op.equals(\"REPEAT\")) {\n                int count = sc.nextInt();\n                String targetOp = sc.next();\n                int operand = sc.nextInt();\n\n                for (int c = 1; c <= count; c++) {\n                    if (targetOp.equals(\"ADD\")) {\n                        // [break 활용] 8비트 상한(255) 초과 시 오버플로우 트랩 발생 및 내부 루프 즉시 탈출\n                        if (registers[0] + operand > 255) {\n                            registers[0] = 255;\n                            System.out.printf(\"[인터럽트] R0 오버플로우 트랩! (%d회차에서 조기 중단)\\n\", c);\n                            break;\n                        }\n                        registers[0] += operand;\n                    } else if (targetOp.equals(\"SUB\")) {\n                        // [break 활용] 8비트 하한(0) 미만 시 언더플로우 트랩 발생 및 내부 루프 즉시 탈출\n                        if (registers[0] - operand < 0) {\n                            registers[0] = 0;\n                            System.out.printf(\"[인터럽트] R0 언더플로우 트랩! (%d회차에서 조기 중단)\\n\", c);\n                            break;\n                        }\n                        registers[0] -= operand;\n                    }\n                }\n            } else if (op.equals(\"DUMP\")) {\n                String reg = sc.next();\n                int idx = reg.equals(\"R0\") ? 0 : 1;\n                int val = registers[idx];\n\n                // 8비트 2진수를 크기 8의 배열에 담아 순회 출력\n                int[] bits = new int[8];\n                for (int bit = 7; bit >= 0; bit--) {\n                    bits[7 - bit] = (val >> bit) & 1;\n                }\n\n                System.out.printf(\"[%s 비트 덤프: 10진수 %d | 2진수 \", reg, val);\n                for (int b = 0; b < bits.length; b++) {\n                    System.out.print(bits[b]);\n                }\n                System.out.println(\"]\");\n            }\n        }\n\n        System.out.println(\"=== 8비트 가상 CPU 실행 보고서 ===\");\n        System.out.printf(\"총 사이클: %d사이클 | 최종 R0: %d | 최종 R1: %d\\n\", cycles, registers[0], registers[1]);\n    }\n}\n",
        "sample_input": "4\nSET R0 10\nREPEAT 3 ADD 5\nDUMP R0\nSET R1 7",
        "sample_output": "[R0 비트 덤프: 10진수 25 | 2진수 00011001]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 4사이클 | 최종 R0: 25 | 최종 R1: 7",
        "expected": "[R0 비트 덤프: 10진수 25 | 2진수 00011001]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 4사이클 | 최종 R0: 25 | 최종 R1: 7",
        "samples": [
            {
                "input": "4\nSET R0 10\nREPEAT 3 ADD 5\nDUMP R0\nSET R1 7",
                "output": "[R0 비트 덤프: 10진수 25 | 2진수 00011001]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 4사이클 | 최종 R0: 25 | 최종 R1: 7"
            },
            {
                "input": "3\nSET R0 200\nREPEAT 3 ADD 30\nDUMP R0",
                "output": "[인터럽트] R0 오버플로우 트랩! (2회차에서 조기 중단)\n[R0 비트 덤프: 10진수 255 | 2진수 11111111]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 3사이클 | 최종 R0: 255 | 최종 R1: 0"
            },
            {
                "input": "4\nSET R0 20\nREPEAT 5 SUB 10\nDUMP R0\nSET R1 100",
                "output": "[인터럽트] R0 언더플로우 트랩! (3회차에서 조기 중단)\n[R0 비트 덤프: 10진수 0 | 2진수 00000000]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 4사이클 | 최종 R0: 0 | 최종 R1: 100"
            }
        ],
        "testcases": [
            {
                "input": "4\nSET R0 10\nREPEAT 3 ADD 5\nDUMP R0\nSET R1 7",
                "expected": "[R0 비트 덤프: 10진수 25 | 2진수 00011001]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 4사이클 | 최종 R0: 25 | 최종 R1: 7",
                "is_hidden": false
            },
            {
                "input": "3\nSET R0 200\nREPEAT 3 ADD 30\nDUMP R0",
                "expected": "[인터럽트] R0 오버플로우 트랩! (2회차에서 조기 중단)\n[R0 비트 덤프: 10진수 255 | 2진수 11111111]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 3사이클 | 최종 R0: 255 | 최종 R1: 0",
                "is_hidden": false
            },
            {
                "input": "4\nSET R0 20\nREPEAT 5 SUB 10\nDUMP R0\nSET R1 100",
                "expected": "[인터럽트] R0 언더플로우 트랩! (3회차에서 조기 중단)\n[R0 비트 덤프: 10진수 0 | 2진수 00000000]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 4사이클 | 최종 R0: 0 | 최종 R1: 100",
                "is_hidden": false
            },
            {
                "input": "3\nSET R0 250\nREPEAT 2 ADD 10\nDUMP R0",
                "expected": "[인터럽트] R0 오버플로우 트랩! (1회차에서 조기 중단)\n[R0 비트 덤프: 10진수 255 | 2진수 11111111]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 3사이클 | 최종 R0: 255 | 최종 R1: 0",
                "is_hidden": true
            },
            {
                "input": "2\nSET R0 15\nDUMP R0",
                "expected": "[R0 비트 덤프: 10진수 15 | 2진수 00001111]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 2사이클 | 최종 R0: 15 | 최종 R1: 0",
                "is_hidden": true
            },
            {
                "input": "4\nSET R0 10\nREPEAT 4 SUB 5\nDUMP R0\nSET R1 100",
                "expected": "[인터럽트] R0 언더플로우 트랩! (3회차에서 조기 중단)\n[R0 비트 덤프: 10진수 0 | 2진수 00000000]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 4사이클 | 최종 R0: 0 | 최종 R1: 100",
                "is_hidden": true
            },
            {
                "input": "2\nSET R1 128\nDUMP R1",
                "expected": "[R1 비트 덤프: 10진수 128 | 2진수 10000000]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 2사이클 | 최종 R0: 0 | 최종 R1: 128",
                "is_hidden": true
            },
            {
                "input": "5\nSET R0 0\nREPEAT 5 ADD 51\nDUMP R0\nREPEAT 1 SUB 1\nDUMP R0",
                "expected": "[R0 비트 덤프: 10진수 255 | 2진수 11111111]\n[R0 비트 덤프: 10진수 254 | 2진수 11111110]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 5사이클 | 최종 R0: 254 | 최종 R1: 0",
                "is_hidden": true
            },
            {
                "input": "3\nSET R0 85\nDUMP R0\nSET R1 170",
                "expected": "[R0 비트 덤프: 10진수 85 | 2진수 01010101]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 3사이클 | 최종 R0: 85 | 최종 R1: 170",
                "is_hidden": true
            },
            {
                "input": "4\nSET R0 64\nREPEAT 2 ADD 32\nDUMP R0\nDUMP R1",
                "expected": "[R0 비트 덤프: 10진수 128 | 2진수 10000000]\n[R1 비트 덤프: 10진수 0 | 2진수 00000000]\n=== 8비트 가상 CPU 실행 보고서 ===\n총 사이클: 4사이클 | 최종 R0: 128 | 최종 R1: 0",
                "is_hidden": true
            }
        ],
        "hint": "1. int[] registers = new int[2]; 로 R0(0번), R1(1번) 레지스터를 배열로 관리합니다.\n2. REPEAT 루프 내부에서 8비트 한계 초과 시 break; 로 내부 루프를 탈출합니다.\n3. DUMP에서는 크기 8의 int[] bits 배열에 2진수를 담은 뒤 순회하여 출력합니다."
    },
    {
        "id": "day03_하1",
        "day": 3,
        "subject": "Java",
        "difficulty": "하",
        "title": "정수 배열 기초 통계 분석 및 이상치(Outlier) 탐색기 (ArrayStatistics)",
        "desc": "정수 N(3 <= N <= 30)과 N개의 정수를 입력받아 1차원 정수 배열(int[])에 저장한 후, 배열의 기초 통계와 평균으로부터 가장 크게 벗어난 이상치(Outlier)를 탐색하세요.\n\n[요구 분석 항목]\n1. 원소 개수: N개\n2. 합계: 전체 원소의 총합\n3. 평균: 소수점 둘째 자리까지 반올림 (%.2f)\n4. 최댓값 및 최솟값\n5. 최대 편차 원소: 평균과의 절대 편차(|arr[i] - 평균|)가 가장 큰 원소의 값과 편차 (절대 편차 동률 시 배열 앞쪽 원소 우선, 편차는 소수점 둘째 자리 %.2f)\n\n[입력]\n첫째 줄에 정수의 개수 N이 주어집니다.\n둘째 줄에 N개의 정수가 공백으로 주어집니다. (음수, 0, 양수 가능)\n\n[출력]\n=== 배열 기초 통계 분석표 ===\n원소 개수: {N}개\n합계: {sum}\n평균: {avg}\n최댓값: {max}\n최솟값: {min}\n최대 편차 원소: {outlierVal} (편차: {maxDev})\n\n※ 다양한 데이터(음수 포함, 동일값, 극단값 등)에 대한 입출력은 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 1차원 배열 선언 및 통계 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        long sum = 0;\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n            sum += arr[i];\n        }\n\n        int max = arr[0];\n        int min = arr[0];\n        for (int i = 1; i < n; i++) {\n            if (arr[i] > max) max = arr[i];\n            if (arr[i] < min) min = arr[i];\n        }\n\n        double avg = (double) sum / n;\n\n        int outlierVal = arr[0];\n        double maxDev = Math.abs(arr[0] - avg);\n        for (int i = 1; i < n; i++) {\n            double dev = Math.abs(arr[i] - avg);\n            if (dev > maxDev + 1e-9) {\n                maxDev = dev;\n                outlierVal = arr[i];\n            }\n        }\n\n        System.out.println(\"=== 배열 기초 통계 분석표 ===\");\n        System.out.printf(\"원소 개수: %d개\\n\", n);\n        System.out.printf(\"합계: %d\\n\", sum);\n        System.out.printf(\"평균: %.2f\\n\", avg);\n        System.out.printf(\"최댓값: %d\\n\", max);\n        System.out.printf(\"최솟값: %d\\n\", min);\n        System.out.printf(\"최대 편차 원소: %d (편차: %.2f)\\n\", outlierVal, maxDev);\n    }\n}\n",
        "hint": "1. int[] arr = new int[n]; 로 배열을 생성하고 for 루프로 원소를 입력받으며 합계(sum)를 누적합니다.\n2. double avg = (double) sum / n; 으로 평균을 구합니다.\n3. Math.abs(arr[i] - avg)를 계산하여 가장 큰 편차를 가진 원소(outlierVal)를 찾습니다. 편차가 더 클 때만(>) 갱신하여 동률 시 앞선 원소가 유지되게 합니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 1차원 정적 연속 배열(Contiguous Memory Allocation)과 O(1) 임의 접근]\n배열(Array)은 동일한 타입의 데이터 요소들을 물리적 메모리 상에 빈틈없이 '연속된 공간(Contiguous Block)'으로 할당하는 가장 기초적인 선형 자료구조입니다.\n배열의 i번째 요소의 메모리 주소는 '시작 주소 + (i × 요소의 바이트 크기)'라는 단순한 곱셈 연산으로 즉시 계산되므로, 인덱스를 통한 원소 접근 시간 복잡도는 항상 O(1)입니다.\n또한 메모리가 연속적으로 배치되어 있어 CPU가 다음 데이터를 미리 캐시로 가져오는 '공간 지역성(Spatial Locality)' 효과를 극대화할 수 있습니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: Scanner로 N을 입력받고 크기 N인 배열 생성\n   int n = sc.nextInt();\n   int[] arr = new int[n];\n2단계: for 루프로 N개의 정수를 읽어 배열에 채우고 sum 누적\n3단계: 배열을 순회하며 max와 min 갱신\n4단계: avg = (double) sum / n 계산 후, 다시 순회하며 Math.abs(arr[i] - avg)의 최댓값과 해당 원소값 기록\n5단계: 서식에 맞춰 printf로 결과 출력",
        "testcases": [
            {
                "input": "5\n12 85 43 90 27",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 5개\n합계: 257\n평균: 51.40\n최댓값: 90\n최솟값: 12\n최대 편차 원소: 12 (편차: 39.40)",
                "is_hidden": false
            },
            {
                "input": "4\n10 10 10 10",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 4개\n합계: 40\n평균: 10.00\n최댓값: 10\n최솟값: 10\n최대 편차 원소: 10 (편차: 0.00)",
                "is_hidden": false
            },
            {
                "input": "6\n-10 -5 0 5 10 100",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 6개\n합계: 100\n평균: 16.67\n최댓값: 100\n최솟값: -10\n최대 편차 원소: 100 (편차: 83.33)",
                "is_hidden": false
            },
            {
                "input": "3\n1 2 3",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 3개\n합계: 6\n평균: 2.00\n최댓값: 3\n최솟값: 1\n최대 편차 원소: 1 (편차: 1.00)",
                "is_hidden": true
            },
            {
                "input": "5\n-50 -20 -30 -10 -40",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 5개\n합계: -150\n평균: -30.00\n최댓값: -10\n최솟값: -50\n최대 편차 원소: -50 (편차: 20.00)",
                "is_hidden": true
            },
            {
                "input": "4\n10 30 10 30",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 4개\n합계: 80\n평균: 20.00\n최댓값: 30\n최솟값: 10\n최대 편차 원소: 10 (편차: 10.00)",
                "is_hidden": true
            },
            {
                "input": "5\n100000 200000 300000 400000 500000",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 5개\n합계: 1500000\n평균: 300000.00\n최댓값: 500000\n최솟값: 100000\n최대 편차 원소: 100000 (편차: 200000.00)",
                "is_hidden": true
            },
            {
                "input": "5\n-1000 0 10 20 30",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 5개\n합계: -940\n평균: -188.00\n최댓값: 30\n최솟값: -1000\n최대 편차 원소: -1000 (편차: 812.00)",
                "is_hidden": true
            },
            {
                "input": "10\n15 22 8 45 67 3 99 12 54 33",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 10개\n합계: 358\n평균: 35.80\n최댓값: 99\n최솟값: 3\n최대 편차 원소: 99 (편차: 63.20)",
                "is_hidden": true
            },
            {
                "input": "7\n0 0 0 0 0 0 100",
                "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 7개\n합계: 100\n평균: 14.29\n최댓값: 100\n최솟값: 0\n최대 편차 원소: 100 (편차: 85.71)",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "5\n12 85 43 90 27",
                "output": "=== 배열 기초 통계 분석표 ===\n원소 개수: 5개\n합계: 257\n평균: 51.40\n최댓값: 90\n최솟값: 12\n최대 편차 원소: 12 (편차: 39.40)"
            },
            {
                "input": "4\n10 10 10 10",
                "output": "=== 배열 기초 통계 분석표 ===\n원소 개수: 4개\n합계: 40\n평균: 10.00\n최댓값: 10\n최솟값: 10\n최대 편차 원소: 10 (편차: 0.00)"
            },
            {
                "input": "6\n-10 -5 0 5 10 100",
                "output": "=== 배열 기초 통계 분석표 ===\n원소 개수: 6개\n합계: 100\n평균: 16.67\n최댓값: 100\n최솟값: -10\n최대 편차 원소: 100 (편차: 83.33)"
            }
        ],
        "sample_input": "5\n12 85 43 90 27",
        "sample_output": "=== 배열 기초 통계 분석표 ===\n원소 개수: 5개\n합계: 257\n평균: 51.40\n최댓값: 90\n최솟값: 12\n최대 편차 원소: 12 (편차: 39.40)",
        "expected": "=== 배열 기초 통계 분석표 ===\n원소 개수: 5개\n합계: 257\n평균: 51.40\n최댓값: 90\n최솟값: 12\n최대 편차 원소: 12 (편차: 39.40)"
    },
    {
        "id": "day03_하2",
        "day": 3,
        "subject": "Java",
        "difficulty": "하",
        "title": "서버 접속 로그 IP 빈도수 집계 & 최다 접속 IP 추적기 (IpFrequencyCounter)",
        "desc": "웹 서버로 유입된 총 요청 수 N(1 <= N <= 100)과, 각 요청의 클라이언트 IP 호스트 식별 번호(1~20 사이의 정수) N개가 순서대로 주어집니다.\n1차원 카운팅 배열(int[] freq = new int[21])을 선언하여 각 호스트 번호별 유입 빈도수를 집계하세요.\n\n[요구 분석 항목]\n1. 1번부터 20번 호스트 중 유입된 적이 있는(빈도수 >= 1) 호스트들의 번호와 요청 수를 번호 오름차순으로 출력하세요.\n2. 총 유효 요청 건수 N을 출력하세요.\n3. 가장 많은 요청을 보낸 최다 접속 호스트 번호와 요청 수를 출력하세요. (최다 요청 호스트가 여러 개인 경우 번호가 가장 작은 호스트 출력)\n\n[입력]\n첫째 줄에 총 요청 수 N이 주어집니다.\n둘째 줄에 N개의 호스트 식별 번호(1~20)가 공백으로 주어집니다.\n\n[출력]\n=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #{번호}: {빈도수}회\n...\n---------------------------------\n총 유효 요청: {N}건\n최다 접속 호스트: IP #{최다번호} ({최다빈도}회)\n\n※ 단일 IP 요청, 동률 최다 요청 등 다양한 케이스는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 카운팅 배열(int[] freq = new int[21])을 활용한 집계 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] freq = new int[21];\n\n        for (int i = 0; i < n; i++) {\n            int host = sc.nextInt();\n            if (host >= 1 && host <= 20) {\n                freq[host]++;\n            }\n        }\n\n        int maxHost = 1;\n        int maxCount = 0;\n        for (int i = 1; i <= 20; i++) {\n            if (freq[i] > maxCount) {\n                maxCount = freq[i];\n                maxHost = i;\n            }\n        }\n\n        System.out.println(\"=== 서버 접속 IP 빈도 분석표 ===\");\n        System.out.println(\"[호스트별 요청 현황]\");\n        for (int i = 1; i <= 20; i++) {\n            if (freq[i] > 0) {\n                System.out.printf(\"IP #%d: %d회\\n\", i, freq[i]);\n            }\n        }\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"총 유효 요청: %d건\\n\", n);\n        System.out.printf(\"최다 접속 호스트: IP #%d (%d회)\\n\", maxHost, maxCount);\n    }\n}\n",
        "hint": "1. 호스트 번호가 1~20이므로 크기 21인 배열 `int[] freq = new int[21];`를 선언하면 인덱스를 호스트 번호 그대로 사용할 수 있습니다.\n2. 입력받은 host에 대해 `freq[host]++;`로 빈도를 누적합니다.\n3. 1부터 20까지 순회하며 `freq[i] > maxCount`인 경우 `maxCount`와 `maxHost`를 갱신합니다. 엄격한 초과(`>`) 비교를 사용하면 동률 시 번호가 더 작은 호스트가 자연스럽게 유지됩니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 직접 번지 테이블(Direct Addressing Table)과 카운팅(Counting) 정렬]\n데이터 값의 범위가 1~20처럼 작고 제한적인 경우, 복잡한 검색 트리나 해시 함수 없이 데이터 값을 배열의 '인덱스(Index)'로 직접 사용하는 기법을 '직접 번지 테이블(Direct Addressing Table)'이라고 부릅니다.\n키 충돌(Collision)이 전혀 발생하지 않으며 조회 및 갱신 시간 복잡도가 완벽한 O(1)입니다.\n이 기법은 카운팅 정렬(Counting Sort)의 핵심 원리이자, 대규모 서버의 IP 블랙리스트 필터링, 웹 트래픽 히트맵 집계 등 실무 시스템에서 매우 자주 사용됩니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: 크기 21인 카운트 배열 선언\n   int[] freq = new int[21];\n2단계: N번 반복하며 정수를 읽어 freq[host]++ 수행\n3단계: 1부터 20까지 순회하면서 freq[i] > 0인 항목만 `IP #i: freq[i]회` 형식으로 출력\n4단계: 최다 요청 호스트(maxHost, maxCount)를 추적하여 하단 종합 정보 출력",
        "testcases": [
            {
                "input": "8\n7 2 7 5 7 2 2 7",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #2: 3회\nIP #5: 1회\nIP #7: 4회\n---------------------------------\n총 유효 요청: 8건\n최다 접속 호스트: IP #7 (4회)",
                "is_hidden": false
            },
            {
                "input": "5\n3 3 3 3 3",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #3: 5회\n---------------------------------\n총 유효 요청: 5건\n최다 접속 호스트: IP #3 (5회)",
                "is_hidden": false
            },
            {
                "input": "6\n4 2 4 2 1 1",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #1: 2회\nIP #2: 2회\nIP #4: 2회\n---------------------------------\n총 유효 요청: 6건\n최다 접속 호스트: IP #1 (2회)",
                "is_hidden": false
            },
            {
                "input": "1\n15",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #15: 1회\n---------------------------------\n총 유효 요청: 1건\n최다 접속 호스트: IP #15 (1회)",
                "is_hidden": true
            },
            {
                "input": "10\n1 2 3 4 5 6 7 8 9 10",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #1: 1회\nIP #2: 1회\nIP #3: 1회\nIP #4: 1회\nIP #5: 1회\nIP #6: 1회\nIP #7: 1회\nIP #8: 1회\nIP #9: 1회\nIP #10: 1회\n---------------------------------\n총 유효 요청: 10건\n최다 접속 호스트: IP #1 (1회)",
                "is_hidden": true
            },
            {
                "input": "7\n20 20 20 1 1 1 2",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #1: 3회\nIP #2: 1회\nIP #20: 3회\n---------------------------------\n총 유효 요청: 7건\n최다 접속 호스트: IP #1 (3회)",
                "is_hidden": true
            },
            {
                "input": "12\n5 5 5 10 10 10 15 15 15 20 20 20",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #5: 3회\nIP #10: 3회\nIP #15: 3회\nIP #20: 3회\n---------------------------------\n총 유효 요청: 12건\n최다 접속 호스트: IP #5 (3회)",
                "is_hidden": true
            },
            {
                "input": "4\n19 18 19 18",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #18: 2회\nIP #19: 2회\n---------------------------------\n총 유효 요청: 4건\n최다 접속 호스트: IP #18 (2회)",
                "is_hidden": true
            },
            {
                "input": "15\n7 7 7 7 7 1 2 3 4 5 6 8 9 10 11",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #1: 1회\nIP #2: 1회\nIP #3: 1회\nIP #4: 1회\nIP #5: 1회\nIP #6: 1회\nIP #7: 5회\nIP #8: 1회\nIP #9: 1회\nIP #10: 1회\nIP #11: 1회\n---------------------------------\n총 유효 요청: 15건\n최다 접속 호스트: IP #7 (5회)",
                "is_hidden": true
            },
            {
                "input": "20\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
                "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #1: 1회\nIP #2: 1회\nIP #3: 1회\nIP #4: 1회\nIP #5: 1회\nIP #6: 1회\nIP #7: 1회\nIP #8: 1회\nIP #9: 1회\nIP #10: 1회\nIP #11: 1회\nIP #12: 1회\nIP #13: 1회\nIP #14: 1회\nIP #15: 1회\nIP #16: 1회\nIP #17: 1회\nIP #18: 1회\nIP #19: 1회\nIP #20: 1회\n---------------------------------\n총 유효 요청: 20건\n최다 접속 호스트: IP #1 (1회)",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "8\n7 2 7 5 7 2 2 7",
                "output": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #2: 3회\nIP #5: 1회\nIP #7: 4회\n---------------------------------\n총 유효 요청: 8건\n최다 접속 호스트: IP #7 (4회)"
            },
            {
                "input": "5\n3 3 3 3 3",
                "output": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #3: 5회\n---------------------------------\n총 유효 요청: 5건\n최다 접속 호스트: IP #3 (5회)"
            },
            {
                "input": "6\n4 2 4 2 1 1",
                "output": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #1: 2회\nIP #2: 2회\nIP #4: 2회\n---------------------------------\n총 유효 요청: 6건\n최다 접속 호스트: IP #1 (2회)"
            }
        ],
        "sample_input": "8\n7 2 7 5 7 2 2 7",
        "sample_output": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #2: 3회\nIP #5: 1회\nIP #7: 4회\n---------------------------------\n총 유효 요청: 8건\n최다 접속 호스트: IP #7 (4회)",
        "expected": "=== 서버 접속 IP 빈도 분석표 ===\n[호스트별 요청 현황]\nIP #2: 3회\nIP #5: 1회\nIP #7: 4회\n---------------------------------\n총 유효 요청: 8건\n최다 접속 호스트: IP #7 (4회)"
    },
    {
        "id": "day03_하3",
        "day": 3,
        "subject": "Java",
        "difficulty": "하",
        "title": "학생 점수 역순 조회 및 커트라인 합격 필터링 (ReverseScoreFilter)",
        "desc": "학생 수 N(1 <= N <= 30)과 N명의 시험 점수(0~100 정수), 그리고 합격 기준 커트라인 점수 C를 입력받아 배열에 저장하세요.\n\n[요구 분석 항목]\n1. 입력된 점수들을 역순(마지막 학생부터 첫 번째 학생 순서)으로 공백으로 구분하여 한 줄에 출력하세요.\n2. 커트라인 점수 C 이상을 득점한 합격자 수를 계산하세요.\n3. 전체 학생 대비 최종 합격률을 소수점 첫째 자리까지(%.1f%%) 계산하여 출력하세요. (합격자가 0명이면 0.0%)\n\n[입력]\n첫째 줄에 학생 수 N이 주어집니다.\n둘째 줄에 N개의 점수가 공백으로 주어집니다.\n셋째 줄에 기준 점수 C가 주어집니다.\n\n[출력]\n=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: {역순으로 나열된 점수들}\n기준 점수: {C}점 이상\n합격자 수: {passCount}명 (총 {N}명 중)\n최종 합격률: {passRate}%\n\n※ 전원 합격, 전원 탈락, 1명 입력 등 다양한 케이스는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 배열 역순 순회 및 커트라인 필터링 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] scores = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            scores[i] = sc.nextInt();\n        }\n        int cutoff = sc.nextInt();\n\n        int passCount = 0;\n        System.out.println(\"=== 점수 역순 조회 및 합격 판정 ===\");\n        System.out.print(\"역순 점수: \");\n        for (int i = n - 1; i >= 0; i--) {\n            System.out.print(scores[i]);\n            if (i > 0) System.out.print(\" \");\n            if (scores[i] >= cutoff) {\n                passCount++;\n            }\n        }\n        System.out.println();\n\n        double passRate = (passCount * 100.0) / n;\n        System.out.printf(\"기준 점수: %d점 이상\\n\", cutoff);\n        System.out.printf(\"합격자 수: %d명 (총 %d명 중)\\n\", passCount, n);\n        System.out.printf(\"최종 합격률: %.1f%%\\n\", passRate);\n    }\n}\n",
        "hint": "1. 배열의 역순 순회는 `for (int i = n - 1; i >= 0; i--)` 구문을 사용합니다.\n2. 인덱스 바운드에 주의하세요! 크기 N인 배열의 마지막 인덱스는 N이 아닌 N - 1 입니다.\n3. 합격률 계산 시 정수 나눗셈 방지를 위해 `(passCount * 100.0) / n` 실수를 사용하세요.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 배열의 순방향 vs 역방향 순회와 인덱스 바운드 관리]\n자바를 비롯한 대부분의 현대 프로그래밍 언어에서 배열 인덱스는 0부터 시작하는 '제로 베이스드 인덱싱(Zero-based Indexing)'을 사용합니다.\n크기가 N인 배열의 유효 인덱스 범위는 [0, N - 1]이며, N번째 인덱스에 접근하려고 하면 JVM은 즉시 `ArrayIndexOutOfBoundsException` 런타임 예외를 발생시키며 프로그램을 비정상 종료합니다.\n역순 순회(Reverse Traversal)는 스택(Stack)의 후입선출(LIFO) 동작을 흉내 내거나, 최근에 추가된 최신 로그부터 역추적 분석할 때 기본이 되는 제어 패턴입니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: N 입력 및 scores 배열 생성 후 입력값 채우기\n2단계: 커트라인 점수 cutoff 입력받기\n3단계: for (int i = n - 1; i >= 0; i--) 로 역순 순회하며 요소 출력\n4단계: 순회 중 scores[i] >= cutoff 이면 passCount 1 증가\n5단계: passRate = (passCount * 100.0) / n 계산 후 종합 리포트 출력",
        "testcases": [
            {
                "input": "5\n70 85 60 95 80\n75",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 80 95 60 85 70\n기준 점수: 75점 이상\n합격자 수: 3명 (총 5명 중)\n최종 합격률: 60.0%",
                "is_hidden": false
            },
            {
                "input": "4\n50 55 58 59\n60",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 59 58 55 50\n기준 점수: 60점 이상\n합격자 수: 0명 (총 4명 중)\n최종 합격률: 0.0%",
                "is_hidden": false
            },
            {
                "input": "3\n100 100 100\n90",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 100 100 100\n기준 점수: 90점 이상\n합격자 수: 3명 (총 3명 중)\n최종 합격률: 100.0%",
                "is_hidden": false
            },
            {
                "input": "1\n88\n80",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 88\n기준 점수: 80점 이상\n합격자 수: 1명 (총 1명 중)\n최종 합격률: 100.0%",
                "is_hidden": true
            },
            {
                "input": "1\n50\n70",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 50\n기준 점수: 70점 이상\n합격자 수: 0명 (총 1명 중)\n최종 합격률: 0.0%",
                "is_hidden": true
            },
            {
                "input": "6\n90 80 70 60 50 40\n70",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 40 50 60 70 80 90\n기준 점수: 70점 이상\n합격자 수: 3명 (총 6명 중)\n최종 합격률: 50.0%",
                "is_hidden": true
            },
            {
                "input": "5\n0 0 0 0 0\n0",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 0 0 0 0 0\n기준 점수: 0점 이상\n합격자 수: 5명 (총 5명 중)\n최종 합격률: 100.0%",
                "is_hidden": true
            },
            {
                "input": "5\n0 0 0 0 0\n1",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 0 0 0 0 0\n기준 점수: 1점 이상\n합격자 수: 0명 (총 5명 중)\n최종 합격률: 0.0%",
                "is_hidden": true
            },
            {
                "input": "8\n75 75 75 75 75 75 75 75\n75",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 75 75 75 75 75 75 75 75\n기준 점수: 75점 이상\n합격자 수: 8명 (총 8명 중)\n최종 합격률: 100.0%",
                "is_hidden": true
            },
            {
                "input": "7\n45 92 63 88 51 77 100\n65",
                "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 100 77 51 88 63 92 45\n기준 점수: 65점 이상\n합격자 수: 4명 (총 7명 중)\n최종 합격률: 57.1%",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "5\n70 85 60 95 80\n75",
                "output": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 80 95 60 85 70\n기준 점수: 75점 이상\n합격자 수: 3명 (총 5명 중)\n최종 합격률: 60.0%"
            },
            {
                "input": "4\n50 55 58 59\n60",
                "output": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 59 58 55 50\n기준 점수: 60점 이상\n합격자 수: 0명 (총 4명 중)\n최종 합격률: 0.0%"
            },
            {
                "input": "3\n100 100 100\n90",
                "output": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 100 100 100\n기준 점수: 90점 이상\n합격자 수: 3명 (총 3명 중)\n최종 합격률: 100.0%"
            }
        ],
        "sample_input": "5\n70 85 60 95 80\n75",
        "sample_output": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 80 95 60 85 70\n기준 점수: 75점 이상\n합격자 수: 3명 (총 5명 중)\n최종 합격률: 60.0%",
        "expected": "=== 점수 역순 조회 및 합격 판정 ===\n역순 점수: 80 95 60 85 70\n기준 점수: 75점 이상\n합격자 수: 3명 (총 5명 중)\n최종 합격률: 60.0%"
    },
    {
        "id": "day03_중1",
        "day": 3,
        "subject": "Java",
        "difficulty": "중",
        "title": "편의점 주간 매출 데이터 분석 및 3일 이동평균(Moving Average) 계산기 (WeeklySalesAnalyzer)",
        "desc": "월요일부터 일요일까지 7일간의 편의점 일일 매출액(0 이상의 정수)을 입력받아 1차원 배열에 저장하세요.\n\n[요구 분석 항목]\n1. 주간 총매출 및 일평균 매출(정수 단위 반올림 Math.round 사용, 천 단위 쉼표 %,d원)\n2. 최고 매출 요일과 금액, 최저 매출 요일과 금액 (동률 시 앞선 요일 우선, 요일명: 월요일, 화요일, ..., 일요일)\n3. 수요일부터 일요일까지 각 요일의 '최근 3일간 이동평균(3-Day Moving Average, 정수 단위 반올림)'을 순서대로 계산하여 출력하세요.\n   - 수요일 이동평균: (월 + 화 + 수) / 3.0\n   - 목요일 이동평균: (화 + 수 + 목) / 3.0\n   - 금요일 이동평균: (수 + 목 + 금) / 3.0\n   - 토요일 이동평균: (목 + 금 + 토) / 3.0\n   - 일요일 이동평균: (금 + 토 + 일) / 3.0\n\n[입력]\n첫째 줄에 7개의 정수가 공백으로 주어집니다.\n\n[출력]\n=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: {총액}원\n일평균 매출: {평균}원\n최고 매출 요일: {최고요일} ({금액}원)\n최저 매출 요일: {최저요일} ({금액}원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: {금액}원 (월~수 평균)\n목요일: {금액}원 (화~목 평균)\n금요일: {금액}원 (수~금 평균)\n토요일: {금액}원 (목~토 평균)\n일요일: {금액}원 (금~일 평균)\n\n※ 주말 집중형, 평일 집중형 등 다양한 매출 패턴은 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 7일 매출 통계 및 3일 슬라이딩 윈도우 이동평균 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] dayNames = {\"월요일\", \"화요일\", \"수요일\", \"목요일\", \"금요일\", \"토요일\", \"일요일\"};\n        long[] sales = new long[7];\n        long total = 0;\n\n        for (int i = 0; i < 7; i++) {\n            sales[i] = sc.nextLong();\n            total += sales[i];\n        }\n\n        int maxIdx = 0;\n        int minIdx = 0;\n        for (int i = 1; i < 7; i++) {\n            if (sales[i] > sales[maxIdx]) maxIdx = i;\n            if (sales[i] < sales[minIdx]) minIdx = i;\n        }\n\n        long dailyAvg = Math.round((double) total / 7.0);\n\n        System.out.println(\"=== 주간 매출 및 이동평균 분석표 ===\");\n        System.out.printf(\"주간 총매출: %,d원\\n\", total);\n        System.out.printf(\"일평균 매출: %,d원\\n\", dailyAvg);\n        System.out.printf(\"최고 매출 요일: %s (%,d원)\\n\", dayNames[maxIdx], sales[maxIdx]);\n        System.out.printf(\"최저 매출 요일: %s (%,d원)\\n\", dayNames[minIdx], sales[minIdx]);\n        System.out.println(\"---------------------------------\");\n        System.out.println(\"[3일 이동평균 현황]\");\n\n        String[] rangeLabels = {\"월~수\", \"화~목\", \"수~금\", \"목~토\", \"금~일\"};\n        for (int i = 2; i < 7; i++) {\n            double windowSum = sales[i - 2] + sales[i - 1] + sales[i];\n            long ma = Math.round(windowSum / 3.0);\n            System.out.printf(\"%s: %,d원 (%s 평균)\\n\", dayNames[i], ma, rangeLabels[i - 2]);\n        }\n    }\n}\n",
        "hint": "1. String[] dayNames = {\"월요일\", ...}; 배열을 만들어 인덱스 0~6에 요일명을 매핑합니다.\n2. 일평균은 Math.round((double) total / 7.0) 으로 정수 반올림합니다.\n3. 3일 이동평균은 for (int i = 2; i < 7; i++) 루프에서 (sales[i-2] + sales[i-1] + sales[i]) / 3.0 을 Math.round 로 감싸서 출력합니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 시계열 데이터(Time-Series Data) 처리와 슬라이딩 윈도우(Sliding Window)]\n주식 가격, 서버 CPU 사용량, 센서 데이터처럼 시간의 흐름에 따라 연속적으로 발생하는 데이터를 '시계열 데이터(Time-Series Data)'라고 부릅니다.\n단기적인 노이즈를 제거하고 추세를 파악하기 위해 고정된 크기 K개의 최근 데이터 평균을 연속해서 구하는 기법을 '이동평균(Moving Average)'이라 합니다.\n알고리즘 분야에서는 이를 '슬라이딩 윈도우(Sliding Window)' 패턴이라 부르며, 윈도우가 한 칸 전진할 때 '새 원소 추가 + 맨 앞 원소 제거' 연산으로 O(1) 시간에 갱신하는 것이 핵심 최적화 기법입니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: 요일 이름 문자열 배열과 크기 7의 sales 배열 선언\n2단계: 7개의 매출을 입력받으며 total 누적, maxIdx/minIdx 탐색\n3단계: 일평균 dailyAvg 계산 및 기본 통계 출력\n4단계: i=2부터 i=6까지 순회하며 (sales[i-2] + sales[i-1] + sales[i]) / 3.0 의 Math.round 계산\n5단계: 서식에 맞춰 %,d원 형식으로 5일간의 이동평균 출력",
        "testcases": [
            {
                "input": "850000 920000 780000 890000 1200000 1450000 1300000",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 7,390,000원\n일평균 매출: 1,055,714원\n최고 매출 요일: 토요일 (1,450,000원)\n최저 매출 요일: 수요일 (780,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 850,000원 (월~수 평균)\n목요일: 863,333원 (화~목 평균)\n금요일: 956,667원 (수~금 평균)\n토요일: 1,180,000원 (목~토 평균)\n일요일: 1,316,667원 (금~일 평균)",
                "is_hidden": false
            },
            {
                "input": "1000000 1000000 1000000 1000000 1000000 1000000 1000000",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 7,000,000원\n일평균 매출: 1,000,000원\n최고 매출 요일: 월요일 (1,000,000원)\n최저 매출 요일: 월요일 (1,000,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 1,000,000원 (월~수 평균)\n목요일: 1,000,000원 (화~목 평균)\n금요일: 1,000,000원 (수~금 평균)\n토요일: 1,000,000원 (목~토 평균)\n일요일: 1,000,000원 (금~일 평균)",
                "is_hidden": false
            },
            {
                "input": "500000 300000 200000 100000 800000 2500000 3000000",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 7,400,000원\n일평균 매출: 1,057,143원\n최고 매출 요일: 일요일 (3,000,000원)\n최저 매출 요일: 목요일 (100,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 333,333원 (월~수 평균)\n목요일: 200,000원 (화~목 평균)\n금요일: 366,667원 (수~금 평균)\n토요일: 1,133,333원 (목~토 평균)\n일요일: 2,100,000원 (금~일 평균)",
                "is_hidden": false
            },
            {
                "input": "0 0 0 0 0 0 0",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 0원\n일평균 매출: 0원\n최고 매출 요일: 월요일 (0원)\n최저 매출 요일: 월요일 (0원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 0원 (월~수 평균)\n목요일: 0원 (화~목 평균)\n금요일: 0원 (수~금 평균)\n토요일: 0원 (목~토 평균)\n일요일: 0원 (금~일 평균)",
                "is_hidden": true
            },
            {
                "input": "1234567 2345678 3456789 4567890 5678901 6789012 7890123",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 31,962,960원\n일평균 매출: 4,566,137원\n최고 매출 요일: 일요일 (7,890,123원)\n최저 매출 요일: 월요일 (1,234,567원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 2,345,678원 (월~수 평균)\n목요일: 3,456,786원 (화~목 평균)\n금요일: 4,567,860원 (수~금 평균)\n토요일: 5,678,601원 (목~토 평균)\n일요일: 6,786,012원 (금~일 평균)",
                "is_hidden": true
            },
            {
                "input": "2000000 1800000 1500000 1200000 900000 600000 300000",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 8,300,000원\n일평균 매출: 1,185,714원\n최고 매출 요일: 월요일 (2,000,000원)\n최저 매출 요일: 일요일 (300,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 1,766,667원 (월~수 평균)\n목요일: 1,500,000원 (화~목 평균)\n금요일: 1,200,000원 (수~금 평균)\n토요일: 900,000원 (목~토 평균)\n일요일: 600,000원 (금~일 평균)",
                "is_hidden": true
            },
            {
                "input": "500000 500000 500000 1500000 1500000 1500000 500000",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 6,500,000원\n일평균 매출: 928,571원\n최고 매출 요일: 목요일 (1,500,000원)\n최저 매출 요일: 월요일 (500,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 500,000원 (월~수 평균)\n목요일: 833,333원 (화~목 평균)\n금요일: 1,166,667원 (수~금 평균)\n토요일: 1,500,000원 (목~토 평균)\n일요일: 1,166,667원 (금~일 평균)",
                "is_hidden": true
            },
            {
                "input": "100 200 400 800 1600 3200 6400",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 12,700원\n일평균 매출: 1,814원\n최고 매출 요일: 일요일 (6,400원)\n최저 매출 요일: 월요일 (100원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 233원 (월~수 평균)\n목요일: 467원 (화~목 평균)\n금요일: 933원 (수~금 평균)\n토요일: 1,867원 (목~토 평균)\n일요일: 3,733원 (금~일 평균)",
                "is_hidden": true
            },
            {
                "input": "999999 0 999999 0 999999 0 999999",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 3,999,996원\n일평균 매출: 571,428원\n최고 매출 요일: 월요일 (999,999원)\n최저 매출 요일: 화요일 (0원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 666,666원 (월~수 평균)\n목요일: 333,333원 (화~목 평균)\n금요일: 666,666원 (수~금 평균)\n토요일: 333,333원 (목~토 평균)\n일요일: 666,666원 (금~일 평균)",
                "is_hidden": true
            },
            {
                "input": "350000 420000 390000 510000 880000 1250000 1100000",
                "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 4,900,000원\n일평균 매출: 700,000원\n최고 매출 요일: 토요일 (1,250,000원)\n최저 매출 요일: 월요일 (350,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 386,667원 (월~수 평균)\n목요일: 440,000원 (화~목 평균)\n금요일: 593,333원 (수~금 평균)\n토요일: 880,000원 (목~토 평균)\n일요일: 1,076,667원 (금~일 평균)",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "850000 920000 780000 890000 1200000 1450000 1300000",
                "output": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 7,390,000원\n일평균 매출: 1,055,714원\n최고 매출 요일: 토요일 (1,450,000원)\n최저 매출 요일: 수요일 (780,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 850,000원 (월~수 평균)\n목요일: 863,333원 (화~목 평균)\n금요일: 956,667원 (수~금 평균)\n토요일: 1,180,000원 (목~토 평균)\n일요일: 1,316,667원 (금~일 평균)"
            },
            {
                "input": "1000000 1000000 1000000 1000000 1000000 1000000 1000000",
                "output": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 7,000,000원\n일평균 매출: 1,000,000원\n최고 매출 요일: 월요일 (1,000,000원)\n최저 매출 요일: 월요일 (1,000,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 1,000,000원 (월~수 평균)\n목요일: 1,000,000원 (화~목 평균)\n금요일: 1,000,000원 (수~금 평균)\n토요일: 1,000,000원 (목~토 평균)\n일요일: 1,000,000원 (금~일 평균)"
            },
            {
                "input": "500000 300000 200000 100000 800000 2500000 3000000",
                "output": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 7,400,000원\n일평균 매출: 1,057,143원\n최고 매출 요일: 일요일 (3,000,000원)\n최저 매출 요일: 목요일 (100,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 333,333원 (월~수 평균)\n목요일: 200,000원 (화~목 평균)\n금요일: 366,667원 (수~금 평균)\n토요일: 1,133,333원 (목~토 평균)\n일요일: 2,100,000원 (금~일 평균)"
            }
        ],
        "sample_input": "850000 920000 780000 890000 1200000 1450000 1300000",
        "sample_output": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 7,390,000원\n일평균 매출: 1,055,714원\n최고 매출 요일: 토요일 (1,450,000원)\n최저 매출 요일: 수요일 (780,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 850,000원 (월~수 평균)\n목요일: 863,333원 (화~목 평균)\n금요일: 956,667원 (수~금 평균)\n토요일: 1,180,000원 (목~토 평균)\n일요일: 1,316,667원 (금~일 평균)",
        "expected": "=== 주간 매출 및 이동평균 분석표 ===\n주간 총매출: 7,390,000원\n일평균 매출: 1,055,714원\n최고 매출 요일: 토요일 (1,450,000원)\n최저 매출 요일: 수요일 (780,000원)\n---------------------------------\n[3일 이동평균 현황]\n수요일: 850,000원 (월~수 평균)\n목요일: 863,333원 (화~목 평균)\n금요일: 956,667원 (수~금 평균)\n토요일: 1,180,000원 (목~토 평균)\n일요일: 1,316,667원 (금~일 평균)"
    },
    {
        "id": "day03_중2",
        "day": 3,
        "subject": "Java",
        "difficulty": "중",
        "title": "2차원 행렬(Matrix) 행별/열별 집계 및 대각합 계산기 (MatrixRowColSum)",
        "desc": "행의 개수 R(2 <= R <= 5)과 열의 개수 C(2 <= C <= 5)를 입력받고, R x C 개의 정수를 행 우선(Row-Major) 순서로 입력받아 2차원 배열(int[R][C])에 저장하세요.\n\n[요구 분석 항목]\n1. 각 행(1행 ~ R행)의 합계와 평균 (소수점 첫째 자리 %.1f)\n2. 각 열(1열 ~ C열)의 합계와 평균 (소수점 첫째 자리 %.1f)\n3. 행렬 전체 총합\n4. 주 대각선 합계: R == C (정방행렬)인 경우 좌상단(0,0)부터 우하단(R-1,C-1)까지의 주 대각선 원소 합계 출력. R != C인 경우 '정방행렬 아님' 출력.\n\n[입력]\n첫째 줄에 R과 C가 공백으로 주어집니다.\n다음 R개 줄에 걸쳐 각 줄마다 C개의 정수가 공백으로 주어집니다.\n\n[출력]\n=== {R}x{C} 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 {sum} | 평균 {avg}\n...\n---------------------------------\n[열별 통계]\n1열: 합계 {sum} | 평균 {avg}\n...\n---------------------------------\n행렬 전체 총합: {totalSum}\n주 대각선 합계: {diagSum 또는 '정방행렬 아님'}\n\n※ 정방행렬(3x3)과 비정방행렬(2x4 등)에 대한 예시는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 2차원 배열 선언, 행/열/대각선 집계 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int r = sc.nextInt();\n        int c = sc.nextInt();\n        int[][] matrix = new int[r][c];\n\n        long totalSum = 0;\n        long[] rowSum = new long[r];\n        long[] colSum = new long[c];\n\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                matrix[i][j] = sc.nextInt();\n                totalSum += matrix[i][j];\n                rowSum[i] += matrix[i][j];\n                colSum[j] += matrix[i][j];\n            }\n        }\n\n        System.out.printf(\"=== %dx%d 행렬 종합 집계표 ===\\n\", r, c);\n        System.out.println(\"[행별 통계]\");\n        for (int i = 0; i < r; i++) {\n            double rowAvg = (double) rowSum[i] / c;\n            System.out.printf(\"%d행: 합계 %d | 평균 %.1f\\n\", i + 1, rowSum[i], rowAvg);\n        }\n        System.out.println(\"---------------------------------\");\n        System.out.println(\"[열별 통계]\");\n        for (int j = 0; j < c; j++) {\n            double colAvg = (double) colSum[j] / r;\n            System.out.printf(\"%d열: 합계 %d | 평균 %.1f\\n\", j + 1, colSum[j], colAvg);\n        }\n        System.out.println(\"---------------------------------\");\n        System.out.printf(\"행렬 전체 총합: %d\\n\", totalSum);\n\n        if (r == c) {\n            long diagSum = 0;\n            for (int i = 0; i < r; i++) {\n                diagSum += matrix[i][i];\n            }\n            System.out.printf(\"주 대각선 합계: %d\\n\", diagSum);\n        } else {\n            System.out.println(\"주 대각선 합계: 정방행렬 아님\");\n        }\n    }\n}\n",
        "hint": "1. 2차원 배열 선언: `int[][] matrix = new int[r][c];`\n2. 입력받을 때 `rowSum[i] += val;` 과 `colSum[j] += val;` 로 행/열 합계를 동시에 누적하면 간결합니다.\n3. 행의 평균은 `c(열의 개수)`로 나누고, 열의 평균은 `r(행의 개수)`로 나누어야 함에 주의하세요!",
        "cs_knowledge": "🖥️ [CS 핵심 지식: Row-Major Order(행 우선 순서)와 CPU 캐시 라인(64-Byte) 친화성]\nC, C++, Java 등의 언어는 2차원 배열을 메모리에 저장할 때 첫 번째 행의 원소들을 연속 배치한 후, 그 뒤에 두 번째 행의 원소들을 붙여 배치하는 '행 우선 순서(Row-Major Order)' 방식을 따릅니다.\nCPU가 메모리에서 데이터를 가져올 때 단일 변수가 아닌 64바이트 '캐시 라인(Cache Line)' 단위로 통째로 가져오기 때문에, 이중 루프를 `for(i) for(j) matrix[i][j]` 순으로 도는 것이 `for(j) for(i) matrix[i][j]` 순으로 도는 것보다 수십 배 이상 빠릅니다.\n이를 무시하고 열 우선 순회를 돌면 매번 캐시 미스(Cache Miss)가 발생하여 심각한 성능 저하가 초래됩니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: R, C를 입력받고 rowSum[R], colSum[C] 누적 배열 선언\n2단계: 이중 for문으로 matrix[i][j]를 채우며 totalSum, rowSum[i], colSum[j] 동시 누적\n3단계: 행별 합계 및 rowSum[i]/c 평균 출력\n4단계: 열별 합계 및 colSum[j]/r 평균 출력\n5단계: 전체 합계 출력 및 R == C 조건 검사하여 주 대각선(matrix[i][i]) 합계 또는 '정방행렬 아님' 출력",
        "testcases": [
            {
                "input": "3 3\n1 2 3\n4 5 6\n7 8 9",
                "expected": "=== 3x3 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 6 | 평균 2.0\n2행: 합계 15 | 평균 5.0\n3행: 합계 24 | 평균 8.0\n---------------------------------\n[열별 통계]\n1열: 합계 12 | 평균 4.0\n2열: 합계 15 | 평균 5.0\n3열: 합계 18 | 평균 6.0\n---------------------------------\n행렬 전체 총합: 45\n주 대각선 합계: 15",
                "is_hidden": false
            },
            {
                "input": "2 4\n10 20 30 40\n50 60 70 80",
                "expected": "=== 2x4 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 100 | 평균 25.0\n2행: 합계 260 | 평균 65.0\n---------------------------------\n[열별 통계]\n1열: 합계 60 | 평균 30.0\n2열: 합계 80 | 평균 40.0\n3열: 합계 100 | 평균 50.0\n4열: 합계 120 | 평균 60.0\n---------------------------------\n행렬 전체 총합: 360\n주 대각선 합계: 정방행렬 아님",
                "is_hidden": false
            },
            {
                "input": "4 4\n1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1",
                "expected": "=== 4x4 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 1 | 평균 0.3\n2행: 합계 1 | 평균 0.3\n3행: 합계 1 | 평균 0.3\n4행: 합계 1 | 평균 0.3\n---------------------------------\n[열별 통계]\n1열: 합계 1 | 평균 0.3\n2열: 합계 1 | 평균 0.3\n3열: 합계 1 | 평균 0.3\n4열: 합계 1 | 평균 0.3\n---------------------------------\n행렬 전체 총합: 4\n주 대각선 합계: 4",
                "is_hidden": false
            },
            {
                "input": "2 2\n5 10\n15 20",
                "expected": "=== 2x2 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 15 | 평균 7.5\n2행: 합계 35 | 평균 17.5\n---------------------------------\n[열별 통계]\n1열: 합계 20 | 평균 10.0\n2열: 합계 30 | 평균 15.0\n---------------------------------\n행렬 전체 총합: 50\n주 대각선 합계: 25",
                "is_hidden": true
            },
            {
                "input": "3 2\n1 2\n3 4\n5 6",
                "expected": "=== 3x2 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 3 | 평균 1.5\n2행: 합계 7 | 평균 3.5\n3행: 합계 11 | 평균 5.5\n---------------------------------\n[열별 통계]\n1열: 합계 9 | 평균 3.0\n2열: 합계 12 | 평균 4.0\n---------------------------------\n행렬 전체 총합: 21\n주 대각선 합계: 정방행렬 아님",
                "is_hidden": true
            },
            {
                "input": "5 5\n1 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25",
                "expected": "=== 5x5 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 15 | 평균 3.0\n2행: 합계 40 | 평균 8.0\n3행: 합계 65 | 평균 13.0\n4행: 합계 90 | 평균 18.0\n5행: 합계 115 | 평균 23.0\n---------------------------------\n[열별 통계]\n1열: 합계 55 | 평균 11.0\n2열: 합계 60 | 평균 12.0\n3열: 합계 65 | 평균 13.0\n4열: 합계 70 | 평균 14.0\n5열: 합계 75 | 평균 15.0\n---------------------------------\n행렬 전체 총합: 325\n주 대각선 합계: 65",
                "is_hidden": true
            },
            {
                "input": "2 5\n0 0 0 0 0\n1 1 1 1 1",
                "expected": "=== 2x5 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 0 | 평균 0.0\n2행: 합계 5 | 평균 1.0\n---------------------------------\n[열별 통계]\n1열: 합계 1 | 평균 0.5\n2열: 합계 1 | 평균 0.5\n3열: 합계 1 | 평균 0.5\n4열: 합계 1 | 평균 0.5\n5열: 합계 1 | 평균 0.5\n---------------------------------\n행렬 전체 총합: 5\n주 대각선 합계: 정방행렬 아님",
                "is_hidden": true
            },
            {
                "input": "4 2\n-5 5\n-10 10\n-15 15\n-20 20",
                "expected": "=== 4x2 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 0 | 평균 0.0\n2행: 합계 0 | 평균 0.0\n3행: 합계 0 | 평균 0.0\n4행: 합계 0 | 평균 0.0\n---------------------------------\n[열별 통계]\n1열: 합계 -50 | 평균 -12.5\n2열: 합계 50 | 평균 12.5\n---------------------------------\n행렬 전체 총합: 0\n주 대각선 합계: 정방행렬 아님",
                "is_hidden": true
            },
            {
                "input": "3 3\n-1 -2 -3\n-4 -5 -6\n-7 -8 -9",
                "expected": "=== 3x3 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 -6 | 평균 -2.0\n2행: 합계 -15 | 평균 -5.0\n3행: 합계 -24 | 평균 -8.0\n---------------------------------\n[열별 통계]\n1열: 합계 -12 | 평균 -4.0\n2열: 합계 -15 | 평균 -5.0\n3열: 합계 -18 | 평균 -6.0\n---------------------------------\n행렬 전체 총합: -45\n주 대각선 합계: -15",
                "is_hidden": true
            },
            {
                "input": "3 4\n100 200 300 400\n500 600 700 800\n900 1000 1100 1200",
                "expected": "=== 3x4 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 1000 | 평균 250.0\n2행: 합계 2600 | 평균 650.0\n3행: 합계 4200 | 평균 1050.0\n---------------------------------\n[열별 통계]\n1열: 합계 1500 | 평균 500.0\n2열: 합계 1800 | 평균 600.0\n3열: 합계 2100 | 평균 700.0\n4열: 합계 2400 | 평균 800.0\n---------------------------------\n행렬 전체 총합: 7800\n주 대각선 합계: 정방행렬 아님",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "3 3\n1 2 3\n4 5 6\n7 8 9",
                "output": "=== 3x3 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 6 | 평균 2.0\n2행: 합계 15 | 평균 5.0\n3행: 합계 24 | 평균 8.0\n---------------------------------\n[열별 통계]\n1열: 합계 12 | 평균 4.0\n2열: 합계 15 | 평균 5.0\n3열: 합계 18 | 평균 6.0\n---------------------------------\n행렬 전체 총합: 45\n주 대각선 합계: 15"
            },
            {
                "input": "2 4\n10 20 30 40\n50 60 70 80",
                "output": "=== 2x4 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 100 | 평균 25.0\n2행: 합계 260 | 평균 65.0\n---------------------------------\n[열별 통계]\n1열: 합계 60 | 평균 30.0\n2열: 합계 80 | 평균 40.0\n3열: 합계 100 | 평균 50.0\n4열: 합계 120 | 평균 60.0\n---------------------------------\n행렬 전체 총합: 360\n주 대각선 합계: 정방행렬 아님"
            },
            {
                "input": "4 4\n1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1",
                "output": "=== 4x4 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 1 | 평균 0.3\n2행: 합계 1 | 평균 0.3\n3행: 합계 1 | 평균 0.3\n4행: 합계 1 | 평균 0.3\n---------------------------------\n[열별 통계]\n1열: 합계 1 | 평균 0.3\n2열: 합계 1 | 평균 0.3\n3열: 합계 1 | 평균 0.3\n4열: 합계 1 | 평균 0.3\n---------------------------------\n행렬 전체 총합: 4\n주 대각선 합계: 4"
            }
        ],
        "sample_input": "3 3\n1 2 3\n4 5 6\n7 8 9",
        "sample_output": "=== 3x3 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 6 | 평균 2.0\n2행: 합계 15 | 평균 5.0\n3행: 합계 24 | 평균 8.0\n---------------------------------\n[열별 통계]\n1열: 합계 12 | 평균 4.0\n2열: 합계 15 | 평균 5.0\n3열: 합계 18 | 평균 6.0\n---------------------------------\n행렬 전체 총합: 45\n주 대각선 합계: 15",
        "expected": "=== 3x3 행렬 종합 집계표 ===\n[행별 통계]\n1행: 합계 6 | 평균 2.0\n2행: 합계 15 | 평균 5.0\n3행: 합계 24 | 평균 8.0\n---------------------------------\n[열별 통계]\n1열: 합계 12 | 평균 4.0\n2열: 합계 15 | 평균 5.0\n3열: 합계 18 | 평균 6.0\n---------------------------------\n행렬 전체 총합: 45\n주 대각선 합계: 15"
    },
    {
        "id": "day03_중3",
        "day": 3,
        "subject": "Java",
        "difficulty": "중",
        "title": "원형 큐(Circular Queue) / 링 버퍼(Ring Buffer) 패킷 큐 시뮬레이터 (RingBufferSimulator)",
        "desc": "고정된 크기 K(2 <= K <= 10)의 1차원 정수 배열을 활용하여 선입선출(FIFO) 링 버퍼(Ring Buffer / Circular Queue)를 구현하세요.\n총 M(1 <= M <= 30)개의 명령어가 순서대로 주어지며, 다음 규칙에 따라 처리합니다:\n\n[명령어 규격]\n1. ENQ <id>: 패킷 ID(양의 정수)를 큐에 추가합니다.\n   - 큐에 빈 공간이 있는 경우: 버퍼의 tail 위치에 패킷을 저장하고 tail을 다음 위치((tail + 1) % K)로 이동합니다. 카운트를 1 증가시키고 `[ENQ] 패킷 {id} 수신 (버퍼: {count}/{K})`를 출력합니다.\n   - 버퍼가 가득 찬 경우(count == K): 패킷을 버퍼에 넣지 못하고 `[DROP] 버퍼 풀: 패킷 {id} 유실`을 출력합니다.\n2. DEQ: 큐에서 가장 오래된 패킷을 꺼내 처리합니다.\n   - 큐에 패킷이 있는 경우: head 위치의 패킷을 꺼내고 head를 다음 위치((head + 1) % K)로 이동합니다. 카운트를 1 감소시키고 `[PROCESS] 패킷 {id} 처리 완료 (버퍼: {count}/{K})`를 출력합니다.\n   - 큐가 비어있는 경우(count == 0): `[EMPTY] 버퍼 언더플로우: 처리할 패킷 없음`을 출력합니다.\n\n[입력]\n첫째 줄에 버퍼 크기 K가 주어집니다.\n둘째 줄에 명령어 개수 M이 주어집니다.\n다음 M개 줄에 걸쳐 명령어가 한 줄에 하나씩 주어집니다. (예: `ENQ 101` 또는 `DEQ`)\n\n[출력]\n=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n(명령어 처리 로그)\n---------------------------------\n최종 잔여 패킷 ({count}개): [{FIFO 순서로 나열된 패킷 ID 목록}]\n(잔여 패킷이 없으면 '최종 잔여 패킷 (0개): []' 출력)\n\n※ 오버플로우(DROP), 언더플로우(EMPTY), 순환 회전 등 다양한 시나리오는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 head, tail, count와 모듈로(%) 연산을 이용한 링 버퍼를 구현하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int k = sc.nextInt();\n        int m = sc.nextInt();\n\n        int[] buffer = new int[k];\n        int head = 0;\n        int tail = 0;\n        int count = 0;\n\n        System.out.println(\"=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\");\n\n        for (int step = 0; step < m; step++) {\n            String cmd = sc.next();\n            if (cmd.equals(\"ENQ\")) {\n                int id = sc.nextInt();\n                if (count == k) {\n                    System.out.printf(\"[DROP] 버퍼 풀: 패킷 %d 유실\\n\", id);\n                } else {\n                    buffer[tail] = id;\n                    tail = (tail + 1) % k;\n                    count++;\n                    System.out.printf(\"[ENQ] 패킷 %d 수신 (버퍼: %d/%d)\\n\", id, count, k);\n                }\n            } else if (cmd.equals(\"DEQ\")) {\n                if (count == 0) {\n                    System.out.println(\"[EMPTY] 버퍼 언더플로우: 처리할 패킷 없음\");\n                } else {\n                    int processedId = buffer[head];\n                    head = (head + 1) % k;\n                    count--;\n                    System.out.printf(\"[PROCESS] 패킷 %d 처리 완료 (버퍼: %d/%d)\\n\", processedId, count, k);\n                }\n            }\n        }\n\n        System.out.println(\"---------------------------------\");\n        StringBuilder sb = new StringBuilder();\n        int cur = head;\n        for (int i = 0; i < count; i++) {\n            sb.append(buffer[cur]);\n            if (i < count - 1) sb.append(\", \");\n            cur = (cur + 1) % k;\n        }\n        System.out.printf(\"최종 잔여 패킷 (%d개): [%s]\\n\", count, sb.toString());\n    }\n}\n",
        "hint": "1. 링 버퍼는 고정 배열 `int[] buffer = new int[k];`에 `head`(읽을 위치), `tail`(쓸 위치), `count`(현재 원소 개수) 3개 변수로 상태를 관리합니다.\n2. 인덱스 전진 시 `(tail + 1) % k` 처럼 모듈로 연산자를 사용하여 끝에 도달하면 0번 인덱스로 자연스럽게 순환하도록 합니다.\n3. 최종 잔여 패킷 출력 시 `head` 위치부터 시작하여 `count`번 만큼 `cur = (cur + 1) % k`로 전진하며 원소를 수집합니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 네트워크 카드(NIC) 링 버퍼와 생산자-소비자(Producer-Consumer) 패턴]\n네트워크 인터페이스 카드(NIC)는 초당 수백만 개의 패킷이 도착할 때 메모리를 매번 동적 할당하지 않고, 미리 정해진 고정 크기의 '링 버퍼(Ring Buffer)'를 순환 재활용합니다.\n패킷을 수신하는 하드웨어(생산자)는 tail을 전진시키고, OS 커널 네트워크 스택(소비자)은 head를 전진시키며 처리합니다.\n서버 CPU가 과부하되어 패킷 처리 속도가 수신 속도를 따라가지 못하면 버퍼가 가득 차게 되며, 이때 발생하는 현상이 바로 '패킷 드랍(Packet Drop/Loss)'입니다.\n리눅스 명령어 `ifconfig`나 `netstat`에서 보이는 'dropped packets' 지표가 바로 이 링 버퍼 오버플로우의 결과입니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: 버퍼 크기 K와 명령어 수 M 입력받고 int[K] 배열 및 head, tail, count = 0 선언\n2단계: M번 반복하며 cmd = sc.next() 읽기\n3단계: ENQ인 경우 id 읽고, count == K이면 DROP 메시지, 아니면 buffer[tail]=id, tail=(tail+1)%K, count++ 후 로그 출력\n4단계: DEQ인 경우 count == 0이면 EMPTY 메시지, 아니면 buffer[head] 꺼내고 head=(head+1)%K, count-- 후 로그 출력\n5단계: head부터 count개만큼 순환 순회하여 최종 잔여 패킷 리스트 출력",
        "testcases": [
            {
                "input": "3\n6\nENQ 101\nENQ 102\nDEQ\nENQ 103\nENQ 104\nENQ 105",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 101 수신 (버퍼: 1/3)\n[ENQ] 패킷 102 수신 (버퍼: 2/3)\n[PROCESS] 패킷 101 처리 완료 (버퍼: 1/3)\n[ENQ] 패킷 103 수신 (버퍼: 2/3)\n[ENQ] 패킷 104 수신 (버퍼: 3/3)\n[DROP] 버퍼 풀: 패킷 105 유실\n---------------------------------\n최종 잔여 패킷 (3개): [102, 103, 104]",
                "is_hidden": false
            },
            {
                "input": "2\n4\nDEQ\nENQ 501\nDEQ\nDEQ",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[EMPTY] 버퍼 언더플로우: 처리할 패킷 없음\n[ENQ] 패킷 501 수신 (버퍼: 1/2)\n[PROCESS] 패킷 501 처리 완료 (버퍼: 0/2)\n[EMPTY] 버퍼 언더플로우: 처리할 패킷 없음\n---------------------------------\n최종 잔여 패킷 (0개): []",
                "is_hidden": false
            },
            {
                "input": "4\n6\nENQ 1\nENQ 2\nENQ 3\nENQ 4\nDEQ\nDEQ",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 1 수신 (버퍼: 1/4)\n[ENQ] 패킷 2 수신 (버퍼: 2/4)\n[ENQ] 패킷 3 수신 (버퍼: 3/4)\n[ENQ] 패킷 4 수신 (버퍼: 4/4)\n[PROCESS] 패킷 1 처리 완료 (버퍼: 3/4)\n[PROCESS] 패킷 2 처리 완료 (버퍼: 2/4)\n---------------------------------\n최종 잔여 패킷 (2개): [3, 4]",
                "is_hidden": false
            },
            {
                "input": "2\n6\nENQ 10\nENQ 20\nENQ 30\nDEQ\nENQ 40\nDEQ",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 10 수신 (버퍼: 1/2)\n[ENQ] 패킷 20 수신 (버퍼: 2/2)\n[DROP] 버퍼 풀: 패킷 30 유실\n[PROCESS] 패킷 10 처리 완료 (버퍼: 1/2)\n[ENQ] 패킷 40 수신 (버퍼: 2/2)\n[PROCESS] 패킷 20 처리 완료 (버퍼: 1/2)\n---------------------------------\n최종 잔여 패킷 (1개): [40]",
                "is_hidden": true
            },
            {
                "input": "5\n2\nENQ 999\nDEQ",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 999 수신 (버퍼: 1/5)\n[PROCESS] 패킷 999 처리 완료 (버퍼: 0/5)\n---------------------------------\n최종 잔여 패킷 (0개): []",
                "is_hidden": true
            },
            {
                "input": "3\n8\nENQ 1\nENQ 2\nDEQ\nDEQ\nDEQ\nENQ 3\nENQ 4\nENQ 5",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 1 수신 (버퍼: 1/3)\n[ENQ] 패킷 2 수신 (버퍼: 2/3)\n[PROCESS] 패킷 1 처리 완료 (버퍼: 1/3)\n[PROCESS] 패킷 2 처리 완료 (버퍼: 0/3)\n[EMPTY] 버퍼 언더플로우: 처리할 패킷 없음\n[ENQ] 패킷 3 수신 (버퍼: 1/3)\n[ENQ] 패킷 4 수신 (버퍼: 2/3)\n[ENQ] 패킷 5 수신 (버퍼: 3/3)\n---------------------------------\n최종 잔여 패킷 (3개): [3, 4, 5]",
                "is_hidden": true
            },
            {
                "input": "2\n5\nENQ 1\nENQ 2\nENQ 3\nENQ 4\nENQ 5",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 1 수신 (버퍼: 1/2)\n[ENQ] 패킷 2 수신 (버퍼: 2/2)\n[DROP] 버퍼 풀: 패킷 3 유실\n[DROP] 버퍼 풀: 패킷 4 유실\n[DROP] 버퍼 풀: 패킷 5 유실\n---------------------------------\n최종 잔여 패킷 (2개): [1, 2]",
                "is_hidden": true
            },
            {
                "input": "4\n8\nENQ 11\nENQ 12\nENQ 13\nENQ 14\nDEQ\nDEQ\nDEQ\nDEQ",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 11 수신 (버퍼: 1/4)\n[ENQ] 패킷 12 수신 (버퍼: 2/4)\n[ENQ] 패킷 13 수신 (버퍼: 3/4)\n[ENQ] 패킷 14 수신 (버퍼: 4/4)\n[PROCESS] 패킷 11 처리 완료 (버퍼: 3/4)\n[PROCESS] 패킷 12 처리 완료 (버퍼: 2/4)\n[PROCESS] 패킷 13 처리 완료 (버퍼: 1/4)\n[PROCESS] 패킷 14 처리 완료 (버퍼: 0/4)\n---------------------------------\n최종 잔여 패킷 (0개): []",
                "is_hidden": true
            },
            {
                "input": "5\n7\nENQ 10\nENQ 20\nENQ 30\nDEQ\nENQ 40\nENQ 50\nENQ 60",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 10 수신 (버퍼: 1/5)\n[ENQ] 패킷 20 수신 (버퍼: 2/5)\n[ENQ] 패킷 30 수신 (버퍼: 3/5)\n[PROCESS] 패킷 10 처리 완료 (버퍼: 2/5)\n[ENQ] 패킷 40 수신 (버퍼: 3/5)\n[ENQ] 패킷 50 수신 (버퍼: 4/5)\n[ENQ] 패킷 60 수신 (버퍼: 5/5)\n---------------------------------\n최종 잔여 패킷 (5개): [20, 30, 40, 50, 60]",
                "is_hidden": true
            },
            {
                "input": "10\n5\nENQ 100\nENQ 200\nENQ 300\nENQ 400\nENQ 500",
                "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 100 수신 (버퍼: 1/10)\n[ENQ] 패킷 200 수신 (버퍼: 2/10)\n[ENQ] 패킷 300 수신 (버퍼: 3/10)\n[ENQ] 패킷 400 수신 (버퍼: 4/10)\n[ENQ] 패킷 500 수신 (버퍼: 5/10)\n---------------------------------\n최종 잔여 패킷 (5개): [100, 200, 300, 400, 500]",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "3\n6\nENQ 101\nENQ 102\nDEQ\nENQ 103\nENQ 104\nENQ 105",
                "output": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 101 수신 (버퍼: 1/3)\n[ENQ] 패킷 102 수신 (버퍼: 2/3)\n[PROCESS] 패킷 101 처리 완료 (버퍼: 1/3)\n[ENQ] 패킷 103 수신 (버퍼: 2/3)\n[ENQ] 패킷 104 수신 (버퍼: 3/3)\n[DROP] 버퍼 풀: 패킷 105 유실\n---------------------------------\n최종 잔여 패킷 (3개): [102, 103, 104]"
            },
            {
                "input": "2\n4\nDEQ\nENQ 501\nDEQ\nDEQ",
                "output": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[EMPTY] 버퍼 언더플로우: 처리할 패킷 없음\n[ENQ] 패킷 501 수신 (버퍼: 1/2)\n[PROCESS] 패킷 501 처리 완료 (버퍼: 0/2)\n[EMPTY] 버퍼 언더플로우: 처리할 패킷 없음\n---------------------------------\n최종 잔여 패킷 (0개): []"
            },
            {
                "input": "4\n6\nENQ 1\nENQ 2\nENQ 3\nENQ 4\nDEQ\nDEQ",
                "output": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 1 수신 (버퍼: 1/4)\n[ENQ] 패킷 2 수신 (버퍼: 2/4)\n[ENQ] 패킷 3 수신 (버퍼: 3/4)\n[ENQ] 패킷 4 수신 (버퍼: 4/4)\n[PROCESS] 패킷 1 처리 완료 (버퍼: 3/4)\n[PROCESS] 패킷 2 처리 완료 (버퍼: 2/4)\n---------------------------------\n최종 잔여 패킷 (2개): [3, 4]"
            }
        ],
        "sample_input": "3\n6\nENQ 101\nENQ 102\nDEQ\nENQ 103\nENQ 104\nENQ 105",
        "sample_output": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 101 수신 (버퍼: 1/3)\n[ENQ] 패킷 102 수신 (버퍼: 2/3)\n[PROCESS] 패킷 101 처리 완료 (버퍼: 1/3)\n[ENQ] 패킷 103 수신 (버퍼: 2/3)\n[ENQ] 패킷 104 수신 (버퍼: 3/3)\n[DROP] 버퍼 풀: 패킷 105 유실\n---------------------------------\n최종 잔여 패킷 (3개): [102, 103, 104]",
        "expected": "=== 링 버퍼(Ring Buffer) 시뮬레이션 ===\n[ENQ] 패킷 101 수신 (버퍼: 1/3)\n[ENQ] 패킷 102 수신 (버퍼: 2/3)\n[PROCESS] 패킷 101 처리 완료 (버퍼: 1/3)\n[ENQ] 패킷 103 수신 (버퍼: 2/3)\n[ENQ] 패킷 104 수신 (버퍼: 3/3)\n[DROP] 버퍼 풀: 패킷 105 유실\n---------------------------------\n최종 잔여 패킷 (3개): [102, 103, 104]"
    },
    {
        "id": "day03_상1",
        "day": 3,
        "subject": "Java",
        "difficulty": "상",
        "title": "영화관 좌석 예약 현황판 및 연속 좌석 최적 탐색기 (CinemaSeatManager)",
        "desc": "R행 C열(2 <= R <= 8, 3 <= C <= 10) 크기의 영화관 좌석 배치도(1: 이미 예약됨, 0: 빈 좌석)와 예약 희망 일행 수 K(1 <= K <= C)가 주어집니다.\n일행 K명이 한 행에서 좌우로 나란히 앉을 수 있는 가장 이상적인 연속 좌석 구간을 탐색하세요.\n\n[★ 핵심 원칙: 한 행에 가능한 연속 좌석이 여러 개일 때 '가운데 우선' 배정]\n한 행에 비어있는 연속 좌석의 길이가 K개보다 길면, K명이 앉을 수 있는 구간(시작 열) 후보가 여러 개 존재할 수 있습니다.\n- 예를 들어, C=8열 상영관에서 2열부터 7열까지 6자리가 연속으로 비어있고 4명(K=4)이 예매하려 할 때, 가능한 4연속 구간은 `2~5열`, `3~6열`, `4~7열` 3가지가 됩니다.\n- 관람객은 스크린 중앙에서 영화를 보길 선호하므로, 반드시 **화면 정중앙 열과 가장 가까운 구간(중앙 편차가 가장 작은 구간)을 해당 행의 대표 후보로 결정**해야 합니다!\n  1) 화면 정중앙 열 기준 = (C + 1) / 2.0 (실수)  (예: C=8이면 4.5열, C=5이면 3.0열)\n  2) 구간 [start열 ~ end열]의 중심 = (start열 + end열) / 2.0 (실수)\n  3) 중앙 편차 = |구간 중심 - 화면 정중앙 열|\n     - 2~5열: 중심 3.5열 ➔ 편차 |3.5 - 4.5| = 1.0\n     - 3~6열: 중심 4.5열 ➔ 편차 |4.5 - 4.5| = 0.0 (★ 정중앙 일치!)\n     - 4~7열: 중심 5.5열 ➔ 편차 |5.5 - 4.5| = 1.0\n     ➔ 따라서 해당 행에서는 가장 가운데에 위치한 `3~6열`이 선택됩니다.\n\n[상세 요구 분석 항목 및 동률 규정]\n1. 상영관 기본 정보: 총 좌석 수, 빈 좌석 수, 예약된 좌석 수 집계\n2. 행별 연속 좌석 탐색: 각 행(1행 ~ R행)에서 좌우로 연속된 0(빈 좌석)이 K개 이상인 구간들을 검사합니다.\n   - 각 행마다 K명 연속 좌석이 가능하면, 중앙 편차가 가장 작은 최적 구간 1개 [start열~end열]을 결정합니다.\n   - [동률 규정 1]: 한 행 내에서 최소 중앙 편차가 같은 구간이 2개 이상일 경우(예: 편차 0.5로 대칭인 경우), 더 왼쪽 좌석(시작 열 start가 작은 구간)을 선택합니다.\n   - K명 연속 좌석이 불가능한 행은 목록에 출력하지 않습니다.\n3. 추천 최적 좌석 선정:\n   - 연속 좌석이 가능한 행들의 대표 후보 중, 전체 상영관에서 중앙 편차가 가장 작은(가장 가운데인) 구간을 최종 '추천 최적 좌석'으로 선정합니다.\n   - [동률 규정 2]: 여러 행 간에 최소 중앙 편차가 같을 경우, 더 앞쪽 행(행 번호가 작은 행)을 우선 선정합니다.\n   - 상영관 전체에 연속 좌석이 가능한 행이 하나도 없다면 '[연속 좌석 예약 가능 현황]' 아래에 '연속 좌석 예약 불가: 분할 예매 필요'를 출력하고, '추천 최적 좌석: 없음'을 출력합니다.\n\n[입력]\n첫째 줄에 행 수 R과 열 수 C가 공백으로 주어집니다.\n다음 R개 줄에 걸쳐 각 줄마다 C개의 좌석 상태(0 또는 1)가 공백으로 주어집니다.\n마지막 줄에 예약 희망 인원 수 K가 주어집니다.\n\n[출력]\n=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: {총좌석}석 (빈 좌석: {빈좌석}석, 예약됨: {예약좌석}석)\n예약 희망 인원: {K}명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n{행}행: {start}열~{end}열 (중앙 편차: {편차})\n... (가능한 행들에 대해 행 번호 오름차순 출력)\n---------------------------------\n추천 최적 좌석: {행}행 {start}열~{end}열 (또는 '추천 최적 좌석: 없음')\n\n※ 만석, 여러 행 가능, 정중앙 배치 등 다양한 예시는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 2차원 좌석 배열 순회 및 연속 빈좌석 최적 구간 탐색 알고리즘을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Solution {\n    static class SeatOption {\n        int row;\n        int startCol;\n        int endCol;\n        double dev;\n\n        SeatOption(int row, int startCol, int endCol, double dev) {\n            this.row = row;\n            this.startCol = startCol;\n            this.endCol = endCol;\n            this.dev = dev;\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int r = sc.nextInt();\n        int c = sc.nextInt();\n\n        int[][] seats = new int[r][c];\n        int totalEmpty = 0;\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                seats[i][j] = sc.nextInt();\n                if (seats[i][j] == 0) totalEmpty++;\n            }\n        }\n        int k = sc.nextInt();\n\n        double screenCenter = (c + 1) / 2.0;\n        ArrayList<SeatOption> rowBestList = new ArrayList<>();\n\n        for (int i = 0; i < r; i++) {\n            SeatOption bestInRow = null;\n            for (int start = 0; start <= c - k; start++) {\n                boolean allEmpty = true;\n                for (int len = 0; len < k; len++) {\n                    if (seats[i][start + len] != 0) {\n                        allEmpty = false;\n                        break;\n                    }\n                }\n                if (allEmpty) {\n                    int startCol1 = start + 1;\n                    int endCol1 = start + k;\n                    double blockCenter = (startCol1 + endCol1) / 2.0;\n                    double dev = Math.abs(blockCenter - screenCenter);\n\n                    if (bestInRow == null || dev < bestInRow.dev - 1e-9) {\n                        bestInRow = new SeatOption(i + 1, startCol1, endCol1, dev);\n                    }\n                }\n            }\n            if (bestInRow != null) {\n                rowBestList.add(bestInRow);\n            }\n        }\n\n        System.out.println(\"=== CGV 상영관 좌석 배정 분석 보고서 ===\");\n        System.out.printf(\"총 좌석: %d석 (빈 좌석: %d석, 예약됨: %d석)\\n\", r * c, totalEmpty, (r * c) - totalEmpty);\n        System.out.printf(\"예약 희망 인원: %d명\\n\", k);\n        System.out.println(\"---------------------------------\");\n        System.out.println(\"[연속 좌석 예약 가능 현황]\");\n\n        if (rowBestList.isEmpty()) {\n            System.out.println(\"연속 좌석 예약 불가: 분할 예매 필요\");\n            System.out.println(\"---------------------------------\");\n            System.out.println(\"추천 최적 좌석: 없음\");\n        } else {\n            SeatOption overallBest = rowBestList.get(0);\n            for (SeatOption opt : rowBestList) {\n                System.out.printf(\"%d행: %d열~%d열 (중앙 편차: %.1f)\\n\", opt.row, opt.startCol, opt.endCol, opt.dev);\n                if (opt.dev < overallBest.dev - 1e-9) {\n                    overallBest = opt;\n                }\n            }\n            System.out.println(\"---------------------------------\");\n            System.out.printf(\"추천 최적 좌석: %d행 %d열~%d열\\n\", overallBest.row, overallBest.startCol, overallBest.endCol);\n        }\n    }\n}\n",
        "hint": "1. 나눗셈 주의: 정수 나눗셈 `(c + 1) / 2`를 하면 소수점이 버려져 중심이 어긋납니다. 반드시 `(c + 1) / 2.0` 실수 나눗셈을 사용하세요!\n2. 각 행에서 `start`를 0부터 `c - k`까지 1씩 증가시키며 `seats[i][start ~ start+k-1]`이 모두 0인지 검사합니다.\n3. K개가 모두 0이면 구간 중심 `(start + 1 + start + k) / 2.0`을 구하고, `Math.abs(구간중심 - 화면중심)`으로 편차를 구합니다.\n4. `dev < bestInRow.dev - 1e-9` (엄격한 미만 `<` 조건)으로 비교하면, 자연스럽게 편차가 더 작은 구간이 선택되고 동률 시에는 먼저 발견된(더 왼쪽인) 구간이 유지됩니다.\n5. 모든 행의 최적 후보 중에서도 전체 편차가 가장 작은 구간을 최종 추천 좌석으로 선정합니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 연속 메모리 할당(Contiguous Allocation)과 메모리 외부 단편화(External Fragmentation)]\n운영체제가 프로세스에 메모리를 할당할 때, 전체 빈 메모리 총량이 충분하더라도 연속된 공간이 부족하여 할당에 실패하는 현상을 '외부 단편화(External Fragmentation)'라고 합니다.\n영화관 좌석 예약에서 빈 좌석이 10석이나 남아있는데 3명이 나란히 앉을 수 없는 상황이 바로 외부 단편화의 대표적 사례입니다.\n이 문제에서 사용하는 연속 빈 공간 탐색 알고리즘은 운영체제의 '최초 적합(First-Fit)', '최적 적합(Best-Fit)' 메모리 배치 기법의 기본 원리와 정확히 일치합니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: R, C 및 2차원 좌석 배열 seats[R][C] 입력받고 빈 좌석 수(totalEmpty) 카운트\n2단계: K 입력받기 및 screenCenter = (c + 1) / 2.0 실수 계산\n3단계: 각 행(i)을 순회하며:\n  - bestInRow = null 초기화\n  - start = 0부터 c - k까지 K연속 빈좌석 검사\n  - K연속 빈칸 발견 시 구간 중심 및 dev = Math.abs(중심 - screenCenter) 계산\n  - bestInRow == null 이거나 dev < bestInRow.dev 이면 bestInRow 갱신 (가장 가운데 좌석 선택)\n  - bestInRow가 존재하면 rowBestList에 추가\n4단계: rowBestList가 비어있으면 '연속 좌석 예약 불가: 분할 예매 필요' 및 '추천 최적 좌석: 없음' 출력\n5단계: rowBestList가 있으면 각 행별 현황을 서식대로 출력하고, dev가 가장 작은 행(동률 시 앞선 행)을 최종 '추천 최적 좌석'으로 출력",
        "testcases": [
            {
                "input": "4 5\n0 1 0 0 0\n1 1 1 0 1\n0 0 0 0 1\n1 0 1 0 1\n3",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 20석 (빈 좌석: 11석, 예약됨: 9석)\n예약 희망 인원: 3명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 3열~5열 (중앙 편차: 1.0)\n3행: 2열~4열 (중앙 편차: 0.0)\n---------------------------------\n추천 최적 좌석: 3행 2열~4열",
                "is_hidden": false
            },
            {
                "input": "3 4\n1 1 1 1\n1 0 1 0\n0 1 0 1\n2",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 12석 (빈 좌석: 4석, 예약됨: 8석)\n예약 희망 인원: 2명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n연속 좌석 예약 불가: 분할 예매 필요\n---------------------------------\n추천 최적 좌석: 없음",
                "is_hidden": false
            },
            {
                "input": "3 5\n0 0 0 0 0\n1 0 0 0 1\n1 1 0 1 1\n3",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 15석 (빈 좌석: 9석, 예약됨: 6석)\n예약 희망 인원: 3명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 2열~4열 (중앙 편차: 0.0)\n2행: 2열~4열 (중앙 편차: 0.0)\n---------------------------------\n추천 최적 좌석: 1행 2열~4열",
                "is_hidden": false
            },
            {
                "input": "2 3\n0 0 0\n0 0 0\n1",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 6석 (빈 좌석: 6석, 예약됨: 0석)\n예약 희망 인원: 1명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 2열~2열 (중앙 편차: 0.0)\n2행: 2열~2열 (중앙 편차: 0.0)\n---------------------------------\n추천 최적 좌석: 1행 2열~2열",
                "is_hidden": true
            },
            {
                "input": "2 3\n1 1 1\n1 1 1\n1",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 6석 (빈 좌석: 0석, 예약됨: 6석)\n예약 희망 인원: 1명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n연속 좌석 예약 불가: 분할 예매 필요\n---------------------------------\n추천 최적 좌석: 없음",
                "is_hidden": true
            },
            {
                "input": "4 6\n1 0 0 0 0 1\n0 0 1 1 0 0\n0 0 0 1 1 1\n1 1 0 0 0 0\n4",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 24석 (빈 좌석: 15석, 예약됨: 9석)\n예약 희망 인원: 4명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 2열~5열 (중앙 편차: 0.0)\n4행: 3열~6열 (중앙 편차: 1.0)\n---------------------------------\n추천 최적 좌석: 1행 2열~5열",
                "is_hidden": true
            },
            {
                "input": "3 4\n0 0 1 1\n1 0 0 1\n1 1 0 0\n2",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 12석 (빈 좌석: 6석, 예약됨: 6석)\n예약 희망 인원: 2명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 1열~2열 (중앙 편차: 1.0)\n2행: 2열~3열 (중앙 편차: 0.0)\n3행: 3열~4열 (중앙 편차: 1.0)\n---------------------------------\n추천 최적 좌석: 2행 2열~3열",
                "is_hidden": true
            },
            {
                "input": "5 5\n1 0 0 0 1\n0 0 0 0 0\n1 1 1 1 1\n0 0 1 0 0\n0 0 0 0 0\n5",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 25석 (빈 좌석: 17석, 예약됨: 8석)\n예약 희망 인원: 5명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n2행: 1열~5열 (중앙 편차: 0.0)\n5행: 1열~5열 (중앙 편차: 0.0)\n---------------------------------\n추천 최적 좌석: 2행 1열~5열",
                "is_hidden": true
            },
            {
                "input": "4 8\n1 0 0 0 0 0 0 1\n0 0 1 0 0 0 0 0\n1 1 1 1 0 0 0 0\n0 0 0 0 1 1 1 1\n4",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 32석 (빈 좌석: 21석, 예약됨: 11석)\n예약 희망 인원: 4명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 3열~6열 (중앙 편차: 0.0)\n2행: 4열~7열 (중앙 편차: 1.0)\n3행: 5열~8열 (중앙 편차: 2.0)\n4행: 1열~4열 (중앙 편차: 2.0)\n---------------------------------\n추천 최적 좌석: 1행 3열~6열",
                "is_hidden": true
            },
            {
                "input": "3 5\n0 0 0 0 0\n1 1 1 1 1\n0 1 0 0 0\n2",
                "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 15석 (빈 좌석: 9석, 예약됨: 6석)\n예약 희망 인원: 2명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 2열~3열 (중앙 편차: 0.5)\n3행: 3열~4열 (중앙 편차: 0.5)\n---------------------------------\n추천 최적 좌석: 1행 2열~3열",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "4 5\n0 1 0 0 0\n1 1 1 0 1\n0 0 0 0 1\n1 0 1 0 1\n3",
                "output": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 20석 (빈 좌석: 11석, 예약됨: 9석)\n예약 희망 인원: 3명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 3열~5열 (중앙 편차: 1.0)\n3행: 2열~4열 (중앙 편차: 0.0)\n---------------------------------\n추천 최적 좌석: 3행 2열~4열"
            },
            {
                "input": "3 4\n1 1 1 1\n1 0 1 0\n0 1 0 1\n2",
                "output": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 12석 (빈 좌석: 4석, 예약됨: 8석)\n예약 희망 인원: 2명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n연속 좌석 예약 불가: 분할 예매 필요\n---------------------------------\n추천 최적 좌석: 없음"
            },
            {
                "input": "3 5\n0 0 0 0 0\n1 0 0 0 1\n1 1 0 1 1\n3",
                "output": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 15석 (빈 좌석: 9석, 예약됨: 6석)\n예약 희망 인원: 3명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 2열~4열 (중앙 편차: 0.0)\n2행: 2열~4열 (중앙 편차: 0.0)\n---------------------------------\n추천 최적 좌석: 1행 2열~4열"
            }
        ],
        "sample_input": "4 5\n0 1 0 0 0\n1 1 1 0 1\n0 0 0 0 1\n1 0 1 0 1\n3",
        "sample_output": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 20석 (빈 좌석: 11석, 예약됨: 9석)\n예약 희망 인원: 3명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 3열~5열 (중앙 편차: 1.0)\n3행: 2열~4열 (중앙 편차: 0.0)\n---------------------------------\n추천 최적 좌석: 3행 2열~4열",
        "expected": "=== CGV 상영관 좌석 배정 분석 보고서 ===\n총 좌석: 20석 (빈 좌석: 11석, 예약됨: 9석)\n예약 희망 인원: 3명\n---------------------------------\n[연속 좌석 예약 가능 현황]\n1행: 3열~5열 (중앙 편차: 1.0)\n3행: 2열~4열 (중앙 편차: 0.0)\n---------------------------------\n추천 최적 좌석: 3행 2열~4열"
    },
    {
        "id": "day03_상2",
        "day": 3,
        "subject": "Java",
        "difficulty": "상",
        "title": "2차원 이미지 비트맵 90도 회전 & 3x3 박스 블러 필터 연산기 (MatrixRotationBlur)",
        "desc": "N x N 크기(3 <= N <= 7)의 2차원 그레이스케일 픽셀 값(0~255 정수) 행렬을 입력받아 그래픽스 이미지 회전 및 블러 필터 파이프라인을 시뮬레이션하세요.\n\n[파이프라인 단계별 규칙]\n1. 1단계: 90도 시계방향 회전 (90-Degree Clockwise Rotation)\n   - 원본 행렬 A(r, c)를 시계 방향으로 90도 회전한 행렬 R을 생성합니다.\n   - 회전 변환 공식: R[c][N - 1 - r] = A[r][c]\n2. 2단계: 3x3 박스 블러 필터 적용 (Box Blur Convolution)\n   - 회전된 행렬 R에 대해 3x3 박스 블러 필터를 적용한 새 행렬 B를 생성합니다.\n   - 테두리(가장자리) 픽셀(행 인덱스 0 또는 N-1, 열 인덱스 0 또는 N-1): 주변 픽셀이 부족하므로 블러 연산 없이 회전된 원본 픽셀 값(R[i][j])을 그대로 유지합니다.\n   - 내부 픽셀(1 <= i, j <= N-2): 자신을 포함한 3x3 영역(총 9개 픽셀)의 합을 9로 나눈 정수(소수점 버림 `sum / 9`)를 취합니다.\n\n[입력]\n첫째 줄에 행렬 크기 N이 주어집니다.\n다음 N개 줄에 걸쳐 각 줄마다 N개의 픽셀 정수(0~255)가 공백으로 주어집니다.\n\n[출력]\n=== [1단계] 90도 시계방향 회전 비트맵 ===\n(N행 N열의 회전된 행렬 출력, 각 행의 원소는 공백으로 구분)\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n(N행 N열의 블러 필터 적용 행렬 출력, 각 행의 원소는 공백으로 구분)\n\n※ 3x3 최소 크기, 4x4, 단일 색상 등 다양한 케이스는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 2차원 행렬 90도 회전 및 3x3 컨볼루션 블러 필터 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[][] a = new int[n][n];\n\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                a[i][j] = sc.nextInt();\n            }\n        }\n\n        int[][] rotated = new int[n][n];\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                rotated[j][n - 1 - i] = a[i][j];\n            }\n        }\n\n        int[][] blurred = new int[n][n];\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {\n                    blurred[i][j] = rotated[i][j];\n                } else {\n                    int sum = 0;\n                    for (int di = -1; di <= 1; di++) {\n                        for (int dj = -1; dj <= 1; dj++) {\n                            sum += rotated[i + di][j + dj];\n                        }\n                    }\n                    blurred[i][j] = sum / 9;\n                }\n            }\n        }\n\n        System.out.println(\"=== [1단계] 90도 시계방향 회전 비트맵 ===\");\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print(rotated[i][j]);\n                if (j < n - 1) System.out.print(\" \");\n            }\n            System.out.println();\n        }\n        System.out.println(\"---------------------------------\");\n        System.out.println(\"=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\");\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print(blurred[i][j]);\n                if (j < n - 1) System.out.print(\" \");\n            }\n            System.out.println();\n        }\n    }\n}\n",
        "hint": "1. 90도 시계방향 회전 공식: 원본의 (i, j) 원소는 회전 행렬의 (j, n - 1 - i) 위치로 이동합니다.\n2. 블러 필터 적용 시 회전된 행렬(rotated)을 바탕으로 새 배열(blurred)을 채워야 합니다.\n3. 테두리(i==0 || i==n-1 || j==0 || j==n-1)는 그대로 복사하고, 내부 픽셀은 di=-1~1, dj=-1~1 중첩 루프로 9개 합을 구해 9로 나눕니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 컴퓨터 그래픽스 픽셀 버퍼와 2D 공간 필터링 컨볼루션(Convolution)]\n디지털 이미지는 2차원 픽셀 배열로 표현되며, 이미지 회전과 필터링은 GPU 셰이더 및 포토샵, OpenCV 등의 핵심 연산입니다.\n박스 블러(Box Blur)는 주변 픽셀들의 가중 평균을 구하여 고주파(High-frequency) 노이즈를 부드럽게 감쇄시키는 대표적인 저역 통과 필터(Low-Pass Filter)입니다.\n이 3x3 윈도우를 한 칸씩 이동하며 곱하고 더하는 연산 구조가 바로 현대 딥러닝 인공지능의 시각 지능을 지탱하는 '합성곱 신경망(Convolutional Neural Network, CNN)'의 모태입니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: N 입력 및 a[N][N] 2차원 배열 입력받기\n2단계: rotated[j][n - 1 - i] = a[i][j] 로 90도 회전 행렬 완성\n3단계: blurred[N][N] 선언 후 테두리는 rotated 값 그대로 복사, 내부는 3x3 9개 원소 합 / 9 계산\n4단계: 1단계 회전 비트맵 출력\n5단계: 구분선 출력 후 2단계 블러 필터 비트맵 출력",
        "testcases": [
            {
                "input": "4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n13 9 5 1\n14 10 6 2\n15 11 7 3\n16 12 8 4\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n13 9 5 1\n14 10 6 2\n15 11 7 3\n16 12 8 4",
                "is_hidden": false
            },
            {
                "input": "3\n10 20 30\n40 50 60\n70 80 90",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n70 40 10\n80 50 20\n90 60 30\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n70 40 10\n80 50 20\n90 60 30",
                "is_hidden": false
            },
            {
                "input": "5\n0 0 0 0 0\n0 255 255 255 0\n0 255 255 255 0\n0 255 255 255 0\n0 0 0 0 0",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n0 0 0 0 0\n0 255 255 255 0\n0 255 255 255 0\n0 255 255 255 0\n0 0 0 0 0\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n0 0 0 0 0\n0 113 170 113 0\n0 170 255 170 0\n0 113 170 113 0\n0 0 0 0 0",
                "is_hidden": false
            },
            {
                "input": "3\n100 100 100\n100 100 100\n100 100 100",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n100 100 100\n100 100 100\n100 100 100\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n100 100 100\n100 100 100\n100 100 100",
                "is_hidden": true
            },
            {
                "input": "3\n0 0 0\n0 90 0\n0 0 0",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n0 0 0\n0 90 0\n0 0 0\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n0 0 0\n0 10 0\n0 0 0",
                "is_hidden": true
            },
            {
                "input": "4\n255 0 255 0\n0 255 0 255\n255 0 255 0\n0 255 0 255",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n0 255 0 255\n255 0 255 0\n0 255 0 255\n255 0 255 0\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n0 255 0 255\n255 113 141 0\n0 141 113 255\n255 0 255 0",
                "is_hidden": true
            },
            {
                "input": "5\n10 20 30 40 50\n60 70 80 90 100\n110 120 130 140 150\n160 170 180 190 200\n210 220 230 240 250",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n210 160 110 60 10\n220 170 120 70 20\n230 180 130 80 30\n240 190 140 90 40\n250 200 150 100 50\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n210 160 110 60 10\n220 170 120 70 20\n230 180 130 80 30\n240 190 140 90 40\n250 200 150 100 50",
                "is_hidden": true
            },
            {
                "input": "6\n1 1 1 1 1 1\n2 2 2 2 2 2\n3 3 3 3 3 3\n4 4 4 4 4 4\n5 5 5 5 5 5\n6 6 6 6 6 6",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n6 5 4 3 2 1\n6 5 4 3 2 1\n6 5 4 3 2 1\n6 5 4 3 2 1\n6 5 4 3 2 1\n6 5 4 3 2 1\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n6 5 4 3 2 1\n6 5 4 3 2 1\n6 5 4 3 2 1\n6 5 4 3 2 1\n6 5 4 3 2 1\n6 5 4 3 2 1",
                "is_hidden": true
            },
            {
                "input": "3\n1 2 3\n4 5 6\n7 8 9",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n7 4 1\n8 5 2\n9 6 3\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n7 4 1\n8 5 2\n9 6 3",
                "is_hidden": true
            },
            {
                "input": "4\n50 60 70 80\n90 100 110 120\n130 140 150 160\n170 180 190 200",
                "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n170 130 90 50\n180 140 100 60\n190 150 110 70\n200 160 120 80\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n170 130 90 50\n180 140 100 60\n190 150 110 70\n200 160 120 80",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16",
                "output": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n13 9 5 1\n14 10 6 2\n15 11 7 3\n16 12 8 4\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n13 9 5 1\n14 10 6 2\n15 11 7 3\n16 12 8 4"
            },
            {
                "input": "3\n10 20 30\n40 50 60\n70 80 90",
                "output": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n70 40 10\n80 50 20\n90 60 30\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n70 40 10\n80 50 20\n90 60 30"
            },
            {
                "input": "5\n0 0 0 0 0\n0 255 255 255 0\n0 255 255 255 0\n0 255 255 255 0\n0 0 0 0 0",
                "output": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n0 0 0 0 0\n0 255 255 255 0\n0 255 255 255 0\n0 255 255 255 0\n0 0 0 0 0\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n0 0 0 0 0\n0 113 170 113 0\n0 170 255 170 0\n0 113 170 113 0\n0 0 0 0 0"
            }
        ],
        "sample_input": "4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16",
        "sample_output": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n13 9 5 1\n14 10 6 2\n15 11 7 3\n16 12 8 4\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n13 9 5 1\n14 10 6 2\n15 11 7 3\n16 12 8 4",
        "expected": "=== [1단계] 90도 시계방향 회전 비트맵 ===\n13 9 5 1\n14 10 6 2\n15 11 7 3\n16 12 8 4\n---------------------------------\n=== [2단계] 3x3 박스 블러 필터 적용 결과 ===\n13 9 5 1\n14 10 6 2\n15 11 7 3\n16 12 8 4"
    },
    {
        "id": "day03_도전1",
        "day": 3,
        "subject": "Java",
        "difficulty": "도전",
        "title": "N x N 달팽이(소용돌이) 배열 생성기 & 주 대각선 분석기 (SpiralMatrix)",
        "desc": "정수 N(2 <= N <= 8)을 입력받아, N x N 크기의 2차원 배열에 1부터 N^2까지의 자연수를 시계 방향 소용돌이(우 -> 하 -> 좌 -> 상) 형태로 채워 넣으세요.\n\n[요구 분석 항목]\n1. N x N 달팽이 소용돌이 배열 출력:\n   - 각 숫자는 2자리 너비 우측 정렬(`%2d`)로 출력하며, 같은 행의 숫자 사이에는 공백 1개를 둡니다.\n2. 중심 원소 분석:\n   - N이 홀수인 경우: 정중앙 1개 좌표(1-indexed 행, 열)의 원소 값을 출력합니다. (예: 5x5이면 3행 3열)\n   - N이 짝수인 경우: 정중앙에 위치한 4개 원소의 평균을 소수점 첫째 자리까지(%.1f) 계산하여 출력합니다. (예: 4x4이면 2~3행, 2~3열의 4개 값 평균)\n3. 대각선(X자) 고유 원소 합계:\n   - 좌상단->우하단 주 대각선과 우상단->좌하단 부 대각선에 위치한 모든 고유(Unique) 원소들의 총합을 출력하세요.\n   - 홀수 크기 행렬의 정중앙 교차점 원소는 중복해서 더해지지 않아야 합니다.\n\n[입력]\n첫째 줄에 정수 N(2 <= N <= 8)이 주어집니다.\n\n[출력]\n=== {N}x{N} 달팽이 소용돌이 배열 ===\n(배열 내용 출력)\n---------------------------------\n중심 좌표 ({r}행 {c}열) 원소: {val} (홀수인 경우)\n중심 4개 원소 평균: {avg} (짝수인 경우)\n대각선(X자) 고유 원소 합계: {diagSum}\n\n※ 홀수(3, 5), 짝수(2, 4) 등 다양한 크기는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 방향 벡터(dr, dc)를 활용한 2차원 소용돌이 시뮬레이션을 구현하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[][] matrix = new int[n][n];\n\n        // 우, 하, 좌, 상\n        int[] dr = {0, 1, 0, -1};\n        int[] dc = {1, 0, -1, 0};\n\n        int r = 0, c = 0, dir = 0;\n        for (int val = 1; val <= n * n; val++) {\n            matrix[r][c] = val;\n            if (val == n * n) break;\n\n            int nr = r + dr[dir];\n            int nc = c + dc[dir];\n\n            if (nr < 0 || nr >= n || nc < 0 || nc >= n || matrix[nr][nc] != 0) {\n                dir = (dir + 1) % 4;\n                nr = r + dr[dir];\n                nc = c + dc[dir];\n            }\n            r = nr;\n            c = nc;\n        }\n\n        System.out.printf(\"=== %dx%d 달팽이 소용돌이 배열 ===\\n\", n, n);\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.printf(\"%2d\", matrix[i][j]);\n                if (j < n - 1) System.out.print(\" \");\n            }\n            System.out.println();\n        }\n        System.out.println(\"---------------------------------\");\n\n        if (n % 2 == 1) {\n            int centerR = n / 2;\n            int centerC = n / 2;\n            System.out.printf(\"중심 좌표 (%d행 %d열) 원소: %d\\n\", centerR + 1, centerC + 1, matrix[centerR][centerC]);\n        } else {\n            int r1 = n / 2 - 1, r2 = n / 2;\n            int c1 = n / 2 - 1, c2 = n / 2;\n            double centerAvg = (matrix[r1][c1] + matrix[r1][c2] + matrix[r2][c1] + matrix[r2][c2]) / 4.0;\n            System.out.printf(\"중심 4개 원소 평균: %.1f\\n\", centerAvg);\n        }\n\n        long diagSum = 0;\n        for (int i = 0; i < n; i++) {\n            diagSum += matrix[i][i];\n            if (i != n - 1 - i) {\n                diagSum += matrix[i][n - 1 - i];\n            }\n        }\n        System.out.printf(\"대각선(X자) 고유 원소 합계: %d\\n\", diagSum);\n    }\n}\n",
        "hint": "1. 방향 벡터 `int[] dr = {0, 1, 0, -1}; int[] dc = {1, 0, -1, 0};`를 선언하고 `dir`을 0부터 시작합니다.\n2. 다음 이동할 좌표 `(nr, nc)`가 배열 범위를 벗어나거나 이미 값이 채워져(`matrix[nr][nc] != 0`) 있으면 `dir = (dir + 1) % 4`로 방향을 90도 회전합니다.\n3. X자 대각선 합산 시 `if (i != n - 1 - i)` 조건을 두어 홀수 중심 원소가 중복 합산되지 않도록 방지합니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: 2차원 공간 시뮬레이션 방향 벡터(dr, dc)와 경계/방문 판정]\n달팽이 배열 문제는 2차원 격자(Grid) 상에서 에이전트가 장애물이나 경계를 만났을 때 회전하며 탐색하는 '시뮬레이션(Simulation)' 및 '구현(Implementation)'의 대표 문제입니다.\n하드코딩된 if문 대신 방향 벡터(Direction Vector: dr, dc)와 모듈로 연산(`(dir + 1) % 4`)을 활용하면 동서남북 4방향 회전 로직을 단 3줄로 우아하게 추상화할 수 있습니다.\n이 기법은 로봇 청소기 이동 알고리즘, 게임 캐릭터 충돌 감지, 미로 탐색(DFS/BFS) 등 컴퓨터 사이언스 전반에서 가장 빈번하게 사용되는 핵심 구현 테크닉입니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: N 입력 및 matrix[N][N] 배열 생성\n2단계: dr={0, 1, 0, -1}, dc={1, 0, -1, 0} 방향 벡터 선언\n3단계: val=1부터 N*N까지 matrix[r][c]=val 채우기, 다음 위치 검사 후 회전\n4단계: %2d 서식으로 소용돌이 배열 출력\n5단계: N이 홀수이면 단일 중심 원소 출력, 짝수이면 중앙 4개 원소 평균 출력\n6단계: i != n - 1 - i 중복 방지 조건으로 X자 대각선 고유 원소 총합 출력",
        "testcases": [
            {
                "input": "5",
                "expected": "=== 5x5 달팽이 소용돌이 배열 ===\n 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9\n---------------------------------\n중심 좌표 (3행 3열) 원소: 25\n대각선(X자) 고유 원소 합계: 133",
                "is_hidden": false
            },
            {
                "input": "4",
                "expected": "=== 4x4 달팽이 소용돌이 배열 ===\n 1  2  3  4\n12 13 14  5\n11 16 15  6\n10  9  8  7\n---------------------------------\n중심 4개 원소 평균: 14.5\n대각선(X자) 고유 원소 합계: 80",
                "is_hidden": false
            },
            {
                "input": "3",
                "expected": "=== 3x3 달팽이 소용돌이 배열 ===\n 1  2  3\n 8  9  4\n 7  6  5\n---------------------------------\n중심 좌표 (2행 2열) 원소: 9\n대각선(X자) 고유 원소 합계: 25",
                "is_hidden": false
            },
            {
                "input": "2",
                "expected": "=== 2x2 달팽이 소용돌이 배열 ===\n 1  2\n 4  3\n---------------------------------\n중심 4개 원소 평균: 2.5\n대각선(X자) 고유 원소 합계: 10",
                "is_hidden": true
            },
            {
                "input": "6",
                "expected": "=== 6x6 달팽이 소용돌이 배열 ===\n 1  2  3  4  5  6\n20 21 22 23 24  7\n19 32 33 34 25  8\n18 31 36 35 26  9\n17 30 29 28 27 10\n16 15 14 13 12 11\n---------------------------------\n중심 4개 원소 평균: 34.5\n대각선(X자) 고유 원소 합계: 274",
                "is_hidden": true
            },
            {
                "input": "7",
                "expected": "=== 7x7 달팽이 소용돌이 배열 ===\n 1  2  3  4  5  6  7\n24 25 26 27 28 29  8\n23 40 41 42 43 30  9\n22 39 48 49 44 31 10\n21 38 47 46 45 32 11\n20 37 36 35 34 33 12\n19 18 17 16 15 14 13\n---------------------------------\n중심 좌표 (4행 4열) 원소: 49\n대각선(X자) 고유 원소 합계: 389",
                "is_hidden": true
            },
            {
                "input": "8",
                "expected": "=== 8x8 달팽이 소용돌이 배열 ===\n 1  2  3  4  5  6  7  8\n28 29 30 31 32 33 34  9\n27 48 49 50 51 52 35 10\n26 47 60 61 62 53 36 11\n25 46 59 64 63 54 37 12\n24 45 58 57 56 55 38 13\n23 44 43 42 41 40 39 14\n22 21 20 19 18 17 16 15\n---------------------------------\n중심 4개 원소 평균: 62.5\n대각선(X자) 고유 원소 합계: 656",
                "is_hidden": true
            },
            {
                "input": "3",
                "expected": "=== 3x3 달팽이 소용돌이 배열 ===\n 1  2  3\n 8  9  4\n 7  6  5\n---------------------------------\n중심 좌표 (2행 2열) 원소: 9\n대각선(X자) 고유 원소 합계: 25",
                "is_hidden": true
            },
            {
                "input": "5",
                "expected": "=== 5x5 달팽이 소용돌이 배열 ===\n 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9\n---------------------------------\n중심 좌표 (3행 3열) 원소: 25\n대각선(X자) 고유 원소 합계: 133",
                "is_hidden": true
            },
            {
                "input": "4",
                "expected": "=== 4x4 달팽이 소용돌이 배열 ===\n 1  2  3  4\n12 13 14  5\n11 16 15  6\n10  9  8  7\n---------------------------------\n중심 4개 원소 평균: 14.5\n대각선(X자) 고유 원소 합계: 80",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "5",
                "output": "=== 5x5 달팽이 소용돌이 배열 ===\n 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9\n---------------------------------\n중심 좌표 (3행 3열) 원소: 25\n대각선(X자) 고유 원소 합계: 133"
            },
            {
                "input": "4",
                "output": "=== 4x4 달팽이 소용돌이 배열 ===\n 1  2  3  4\n12 13 14  5\n11 16 15  6\n10  9  8  7\n---------------------------------\n중심 4개 원소 평균: 14.5\n대각선(X자) 고유 원소 합계: 80"
            },
            {
                "input": "3",
                "output": "=== 3x3 달팽이 소용돌이 배열 ===\n 1  2  3\n 8  9  4\n 7  6  5\n---------------------------------\n중심 좌표 (2행 2열) 원소: 9\n대각선(X자) 고유 원소 합계: 25"
            }
        ],
        "sample_input": "5",
        "sample_output": "=== 5x5 달팽이 소용돌이 배열 ===\n 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9\n---------------------------------\n중심 좌표 (3행 3열) 원소: 25\n대각선(X자) 고유 원소 합계: 133",
        "expected": "=== 5x5 달팽이 소용돌이 배열 ===\n 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9\n---------------------------------\n중심 좌표 (3행 3열) 원소: 25\n대각선(X자) 고유 원소 합계: 133"
    },
    {
        "id": "day03_도전2",
        "day": 3,
        "subject": "Java",
        "difficulty": "도전",
        "title": "희소 행렬(Sparse Matrix) 압축 표현(CSR 포맷) 및 벡터 곱 (SparseMatrixCompressor)",
        "desc": "대부분의 원소가 0인 R x C 크기(2 <= R, C <= 6)의 희소 행렬(Sparse Matrix) A와, 크기 C인 열 벡터 v가 주어집니다.\n이 행렬을 대규모 AI/빅데이터 처리에 필수적인 **CSR(Compressed Sparse Row) 포맷**으로 압축하고, 압축된 배열만을 순회하여 행렬-벡터 곱(A * v = y)을 수행하세요.\n\n[CSR 압축 및 연산 규격]\n1. CSR 3대 배열 생성 (행 우선 순서):\n   - `values`: 0이 아닌 유효 원소 값들을 순서대로 저장한 1차원 리스트\n   - `col_indices`: values의 각 원소가 원본 행렬에서 위치했던 열 인덱스(0-indexed)\n   - `row_ptr`: 크기 R + 1 인 1차원 배열. row_ptr[i]는 i번째 행의 0이 아닌 원소들이 values에서 시작되는 인덱스를 저장. (row_ptr[0] = 0, row_ptr[R] = values의 총 원소 수)\n2. 압축률 계산:\n   - 0인 원소의 개수 / (R * C) * 100.0 (소수점 첫째 자리 %.1f%%)\n3. 행렬-벡터 곱(Matrix-Vector Multiplication):\n   - 결과 벡터 y의 크기는 R입니다.\n   - i번째 행의 계산은 `for (int k = row_ptr[i]; k < row_ptr[i + 1]; k++)` 로 values[k]와 v[col_indices[k]]를 곱하여 누적합니다. (0인 원소는 계산에 전혀 참여하지 않음!)\n\n[입력]\n첫째 줄에 R과 C가 공백으로 주어집니다.\n다음 R개 줄에 걸쳐 각 줄마다 C개의 정수가 공백으로 주어집니다. (희소 행렬 A)\n마지막 줄에 C개의 정수가 공백으로 주어집니다. (입력 벡터 v)\n\n[출력]\n=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: {R}x{C} ({R*C}개 원소)\n유효(Non-Zero) 원소 수: {values.size()}개 (압축률: {압축률}%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [{values 목록}]\ncol_indices: [{col_indices 목록}]\nrow_ptr: [{row_ptr 목록}]\n---------------------------------\n입력 벡터: [{v 목록}]\n행렬-벡터 곱 결과: [{y 목록}]\n\n※ 0이 많은 희소 행렬, 단위 행렬 등 다양한 케이스는 아래 [예제 1, 2, 3]을 참고하세요.",
        "template": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // 여기에 CSR 압축(values, col_indices, row_ptr) 및 행렬-벡터 곱 로직을 작성하세요\n        \n    }\n}\n",
        "solution": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int r = sc.nextInt();\n        int c = sc.nextInt();\n\n        int[][] a = new int[r][c];\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                a[i][j] = sc.nextInt();\n            }\n        }\n\n        int[] v = new int[c];\n        for (int j = 0; j < c; j++) {\n            v[j] = sc.nextInt();\n        }\n\n        ArrayList<Integer> values = new ArrayList<>();\n        ArrayList<Integer> colIndices = new ArrayList<>();\n        int[] rowPtr = new int[r + 1];\n\n        rowPtr[0] = 0;\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                if (a[i][j] != 0) {\n                    values.add(a[i][j]);\n                    colIndices.add(j);\n                }\n            }\n            rowPtr[i + 1] = values.size();\n        }\n\n        int nnz = values.size();\n        int totalElements = r * c;\n        int zeroCount = totalElements - nnz;\n        double compressRate = (zeroCount * 100.0) / totalElements;\n\n        int[] y = new int[r];\n        for (int i = 0; i < r; i++) {\n            int sum = 0;\n            for (int k = rowPtr[i]; k < rowPtr[i + 1]; k++) {\n                int val = values.get(k);\n                int col = colIndices.get(k);\n                sum += val * v[col];\n            }\n            y[i] = sum;\n        }\n\n        System.out.println(\"=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\");\n        System.out.printf(\"원본 크기: %dx%d (%d개 원소)\\n\", r, c, totalElements);\n        System.out.printf(\"유효(Non-Zero) 원소 수: %d개 (압축률: %.1f%%)\\n\", nnz, compressRate);\n        System.out.println(\"---------------------------------\");\n        System.out.println(\"[CSR 압축 구조]\");\n        System.out.println(\"values: \" + values);\n        System.out.println(\"col_indices: \" + colIndices);\n        System.out.print(\"row_ptr: [\");\n        for (int i = 0; i <= r; i++) {\n            System.out.print(rowPtr[i]);\n            if (i < r) System.out.print(\", \");\n        }\n        System.out.println(\"]\");\n        System.out.println(\"---------------------------------\");\n        System.out.print(\"입력 벡터: [\");\n        for (int j = 0; j < c; j++) {\n            System.out.print(v[j]);\n            if (j < c - 1) System.out.print(\", \");\n        }\n        System.out.println(\"]\");\n        System.out.print(\"행렬-벡터 곱 결과: [\");\n        for (int i = 0; i < r; i++) {\n            System.out.print(y[i]);\n            if (i < r - 1) System.out.print(\", \");\n        }\n        System.out.println(\"]\");\n    }\n}\n",
        "hint": "1. 0이 아닌 원소를 만날 때마다 `values.add(val);`와 `colIndices.add(j);`를 수행합니다.\n2. 각 행 i가 끝날 때마다 `rowPtr[i + 1] = values.size();`로 누적 원소 수를 기록합니다.\n3. 행렬-벡터 곱은 i번째 행에 대해 `for (int k = rowPtr[i]; k < rowPtr[i+1]; k++)` 루프를 돌며 `sum += values.get(k) * v[colIndices.get(k)];`로 O(Non-Zero) 시간에 계산합니다.",
        "cs_knowledge": "🖥️ [CS 핵심 지식: AI/그래프 연산의 필수 자료구조 CSR(Compressed Sparse Row)]\n소셜 네트워크 친구 관계 그래프(수억 명 x 수억 명)나 추천 시스템 사용자-아이템 평점 행렬 등 실무 대규모 데이터는 99.9% 이상이 0으로 가득 찬 '희소 행렬(Sparse Matrix)'입니다.\n이를 일반 2차원 배열로 저장하면 테라바이트급 메모리가 낭비되므로, 0이 아닌 값만 세 개의 1차원 배열로 압축 보관하는 'CSR(Compressed Sparse Row)' 형식을 사용합니다.\nSciPy, PyTorch, TensorFlow 등의 AI 프레임워크는 내부적으로 이 CSR 구조를 바탕으로 0을 건너뛰는 초고속 행렬 연산을 수행합니다.",
        "logic_guide": "📘 [단계별 로직 구성 순서 & 초보자 가이드]\n1단계: R, C 및 a[R][C] 행렬과 v[C] 벡터 입력받기\n2단계: ArrayList<Integer> values, colIndices 선언 및 int[R+1] rowPtr 선언\n3단계: 이중 루프를 돌며 a[i][j] != 0 일 때 values, colIndices 추가, 행 종료 시 rowPtr[i+1] = values.size()\n4단계: rowPtr 범위를 순회하며 i번째 행의 유효 원소들만 v[col]과 곱해 y[i] 누적\n5단계: 서식에 맞춰 원본 크기, 압축률, 3대 배열, 곱 결과 벡터 출력",
        "testcases": [
            {
                "input": "4 4\n0 5 0 0\n8 0 0 0\n0 0 0 0\n0 0 3 6\n1 2 3 4",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 4x4 (16개 원소)\n유효(Non-Zero) 원소 수: 4개 (압축률: 75.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [5, 8, 3, 6]\ncol_indices: [1, 0, 2, 3]\nrow_ptr: [0, 1, 2, 2, 4]\n---------------------------------\n입력 벡터: [1, 2, 3, 4]\n행렬-벡터 곱 결과: [10, 8, 0, 33]",
                "is_hidden": false
            },
            {
                "input": "3 3\n1 0 0\n0 1 0\n0 0 1\n10 20 30",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 3x3 (9개 원소)\n유효(Non-Zero) 원소 수: 3개 (압축률: 66.7%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [1, 1, 1]\ncol_indices: [0, 1, 2]\nrow_ptr: [0, 1, 2, 3]\n---------------------------------\n입력 벡터: [10, 20, 30]\n행렬-벡터 곱 결과: [10, 20, 30]",
                "is_hidden": false
            },
            {
                "input": "2 3\n0 0 0\n0 0 0\n5 10 15",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 2x3 (6개 원소)\n유효(Non-Zero) 원소 수: 0개 (압축률: 100.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: []\ncol_indices: []\nrow_ptr: [0, 0, 0]\n---------------------------------\n입력 벡터: [5, 10, 15]\n행렬-벡터 곱 결과: [0, 0]",
                "is_hidden": false
            },
            {
                "input": "3 3\n1 2 3\n4 5 6\n7 8 9\n1 1 1",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 3x3 (9개 원소)\n유효(Non-Zero) 원소 수: 9개 (압축률: 0.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [1, 2, 3, 4, 5, 6, 7, 8, 9]\ncol_indices: [0, 1, 2, 0, 1, 2, 0, 1, 2]\nrow_ptr: [0, 3, 6, 9]\n---------------------------------\n입력 벡터: [1, 1, 1]\n행렬-벡터 곱 결과: [6, 15, 24]",
                "is_hidden": true
            },
            {
                "input": "2 4\n7 0 0 9\n0 4 0 0\n2 3 5 7",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 2x4 (8개 원소)\n유효(Non-Zero) 원소 수: 3개 (압축률: 62.5%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [7, 9, 4]\ncol_indices: [0, 3, 1]\nrow_ptr: [0, 2, 3]\n---------------------------------\n입력 벡터: [2, 3, 5, 7]\n행렬-벡터 곱 결과: [77, 12]",
                "is_hidden": true
            },
            {
                "input": "4 2\n1 2\n0 0\n3 4\n0 5\n10 20",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 4x2 (8개 원소)\n유효(Non-Zero) 원소 수: 5개 (압축률: 37.5%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [1, 2, 3, 4, 5]\ncol_indices: [0, 1, 0, 1, 1]\nrow_ptr: [0, 2, 2, 4, 5]\n---------------------------------\n입력 벡터: [10, 20]\n행렬-벡터 곱 결과: [50, 0, 110, 100]",
                "is_hidden": true
            },
            {
                "input": "3 4\n0 0 0 1\n0 0 2 0\n0 3 0 0\n4 3 2 1",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 3x4 (12개 원소)\n유효(Non-Zero) 원소 수: 3개 (압축률: 75.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [1, 2, 3]\ncol_indices: [3, 2, 1]\nrow_ptr: [0, 1, 2, 3]\n---------------------------------\n입력 벡터: [4, 3, 2, 1]\n행렬-벡터 곱 결과: [1, 4, 9]",
                "is_hidden": true
            },
            {
                "input": "4 3\n5 0 0\n0 0 0\n0 0 7\n0 9 0\n2 4 6",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 4x3 (12개 원소)\n유효(Non-Zero) 원소 수: 3개 (압축률: 75.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [5, 7, 9]\ncol_indices: [0, 2, 1]\nrow_ptr: [0, 1, 1, 2, 3]\n---------------------------------\n입력 벡터: [2, 4, 6]\n행렬-벡터 곱 결과: [10, 0, 42, 36]",
                "is_hidden": true
            },
            {
                "input": "2 2\n0 0\n0 1\n5 10",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 2x2 (4개 원소)\n유효(Non-Zero) 원소 수: 1개 (압축률: 75.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [1]\ncol_indices: [1]\nrow_ptr: [0, 0, 1]\n---------------------------------\n입력 벡터: [5, 10]\n행렬-벡터 곱 결과: [0, 10]",
                "is_hidden": true
            },
            {
                "input": "5 5\n10 0 0 0 0\n0 0 20 0 0\n0 0 0 0 30\n0 40 0 0 0\n0 0 0 50 0\n1 2 3 4 5",
                "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 5x5 (25개 원소)\n유효(Non-Zero) 원소 수: 5개 (압축률: 80.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [10, 20, 30, 40, 50]\ncol_indices: [0, 2, 4, 1, 3]\nrow_ptr: [0, 1, 2, 3, 4, 5]\n---------------------------------\n입력 벡터: [1, 2, 3, 4, 5]\n행렬-벡터 곱 결과: [10, 60, 150, 80, 200]",
                "is_hidden": true
            }
        ],
        "samples": [
            {
                "input": "4 4\n0 5 0 0\n8 0 0 0\n0 0 0 0\n0 0 3 6\n1 2 3 4",
                "output": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 4x4 (16개 원소)\n유효(Non-Zero) 원소 수: 4개 (압축률: 75.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [5, 8, 3, 6]\ncol_indices: [1, 0, 2, 3]\nrow_ptr: [0, 1, 2, 2, 4]\n---------------------------------\n입력 벡터: [1, 2, 3, 4]\n행렬-벡터 곱 결과: [10, 8, 0, 33]"
            },
            {
                "input": "3 3\n1 0 0\n0 1 0\n0 0 1\n10 20 30",
                "output": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 3x3 (9개 원소)\n유효(Non-Zero) 원소 수: 3개 (압축률: 66.7%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [1, 1, 1]\ncol_indices: [0, 1, 2]\nrow_ptr: [0, 1, 2, 3]\n---------------------------------\n입력 벡터: [10, 20, 30]\n행렬-벡터 곱 결과: [10, 20, 30]"
            },
            {
                "input": "2 3\n0 0 0\n0 0 0\n5 10 15",
                "output": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 2x3 (6개 원소)\n유효(Non-Zero) 원소 수: 0개 (압축률: 100.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: []\ncol_indices: []\nrow_ptr: [0, 0, 0]\n---------------------------------\n입력 벡터: [5, 10, 15]\n행렬-벡터 곱 결과: [0, 0]"
            }
        ],
        "sample_input": "4 4\n0 5 0 0\n8 0 0 0\n0 0 0 0\n0 0 3 6\n1 2 3 4",
        "sample_output": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 4x4 (16개 원소)\n유효(Non-Zero) 원소 수: 4개 (압축률: 75.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [5, 8, 3, 6]\ncol_indices: [1, 0, 2, 3]\nrow_ptr: [0, 1, 2, 2, 4]\n---------------------------------\n입력 벡터: [1, 2, 3, 4]\n행렬-벡터 곱 결과: [10, 8, 0, 33]",
        "expected": "=== 희소 행렬 CSR 압축 및 벡터 곱 분석표 ===\n원본 크기: 4x4 (16개 원소)\n유효(Non-Zero) 원소 수: 4개 (압축률: 75.0%)\n---------------------------------\n[CSR 압축 구조]\nvalues: [5, 8, 3, 6]\ncol_indices: [1, 0, 2, 3]\nrow_ptr: [0, 1, 2, 2, 4]\n---------------------------------\n입력 벡터: [1, 2, 3, 4]\n행렬-벡터 곱 결과: [10, 8, 0, 33]"
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
