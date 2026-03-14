/** @type {import('prettier').Config} */
export default {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  // Tailwind CSS 排序配置
  tailwindFunctions: ['classNames', 'clsx', 'cn'],
  tailwindAttributes: ['class', 'className'],
  tailwindPreserveWhitespace: true,
  tailwindSortOrder: 'official',
  
  // 可选的其他 Prettier 配置
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100
};