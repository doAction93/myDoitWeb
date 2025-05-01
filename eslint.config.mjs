import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Next.js 기본 설정을 가져온 뒤, 그 다음에 rules 오브젝트를 추가
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // react/no-unescaped-entities 룰을 전역 비활성화
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
