export const tool = {
  "id": "E042",
  "title": "1차 반응 반감기 계산기",
  "inputs_text": "양의 1차 속도상수 k [s⁻¹]",
  "formula": "t_1/2 = ln(2) / k",
  "output_text": "반감기 t_1/2 [s]",
  "assumptions": "k>0. 일정한 k의 1차 소멸·붕괴 모델에 한정한다. 0차·2차 반응의 반감기로 적용하지 않으며 약물 복용·치료 용도로 확대하지 않는다.",
  "purpose": "일차 반응 반감기 계산 / 반응공학·붕괴 모델 검산",
  "sources": [
    {
      "label": "OpenStax · Integrated Rate Laws",
      "url": "https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws"
    }
  ],
  "slug": "eng-first-order-half-life",
  "category": "반응",
  "result_label": "1차 반응 반감기 t_½",
  "result_dimension": "time",
  "fields": [
    {
      "key": "k",
      "label": "1차 속도상수 k",
      "dimension": "inverseTime",
      "example": 0.01,
      "constraint": "positive",
      "display_unit": "pers",
      "display_value": "0.01"
    }
  ],
  "site": "https://nanalab.kr/eng-first-order-half-life/",
  "repository": "https://github.com/NaNaCompany/eng-first-order-half-life",
  "condition": "",
  "output_unit": "s"
};
