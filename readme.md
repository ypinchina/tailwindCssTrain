



# 🚀 Tailwind CSS 学习项目

> 基于 Vite + TypeScript + Tailwind CSS v4 的现代化前端项目

## 📋 项目信息

- **项目名称**: tailwindtrain
- **技术栈**: Vite ^7.0.0 + TypeScript ~5.9.3 + Tailwind CSS ^4.2.1
- **构建工具**: Vite (使用 @tailwindcss/vite 插件)
- **CSS 引擎**: LightningCSS (高性能 CSS 处理)

---

## 🛠️ 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

### 代码格式化
```bash
# 使用 Prettier 格式化所有文件
npx prettier --write .

# 检查格式问题
npx prettier --check .
```

---

## 📚 Tailwind CSS 核心知识

### 1️⃣ 基础单位系统

**重要规则**: Tailwind CSS 的基础单位是 **4px**

| Tailwind 类名 | 实际像素值 | 计算方式 |
|--------------|-----------|---------|
| `w-1` / `h-1` | 4px | 1 × 4px |
| `w-2` / `h-2` | 8px | 2 × 4px |
| `w-3` / `h-3` | 12px | 3 × 4px |
| `w-4` / `h-4` | 16px | 4 × 4px |
| `w-5` / `h-5` | 20px | 5 × 4px |
| `w-6` / `h-6` | 24px | 6 × 4px |

**示例**:
```html
<div class="w-4 h-4 p-2 m-3">
  <!-- 宽度：16px, 高度：16px -->
  <!-- 内边距：8px, 外边距：12px -->
</div>
```

---

### 2️⃣ Tailwind CSS v4 新特性

#### ✨ 全新的 CSS 导入方式
```css
/* v4 语法 */
@import 'tailwindcss'

/* v3 旧语法 (已废弃) */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 🎯 核心优势
- ✅ 更简洁的 CSS 语法
- ✅ 更快的编译速度 (使用 LightningCSS)
- ✅ 更好的 Tree Shaking
- ✅ 原生支持 CSS 变量和自定义属性

---

### 3️⃣ 常用工具类分类

#### 📏 布局类 (Layout)
```html
<!-- 容器 -->
<div class="container mx-auto px-4"></div>

<!-- Flexbox -->
<div class="flex items-center justify-between"></div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4"></div>
```

#### 📐 间距类 (Spacing)
```html
<!-- margin (外边距) -->
<div class="m-4 m-x-2 m-y-3 mt-4 mr-6 mb-8 ml-10"></div>

<!-- padding (内边距) -->
<div class="p-4 p-x-2 p-y-3 pt-4 pr-6 pb-8 pl-10"></div>

<!-- gap (间距) -->
<div class="gap-4 gap-x-2 gap-y-3"></div>
```

#### 🎨 样式类 (Styling)
```html
<!-- 背景色 -->
<div class="bg-blue-500 bg-red-300 bg-green-900"></div>

<!-- 文字颜色 -->
<p class="text-white text-gray-800 text-primary"></p>

<!-- 边框 -->
<div class="border border-2 border-blue-500 rounded-lg rounded-full"></div>

<!-- 阴影 -->
<div class="shadow-md shadow-lg shadow-xl"></div>
```

#### 📝 排版类 (Typography)
```html
<h1 class="text-xs text-sm text-base text-lg text-xl text-2xl"></h1>
<p class="font-normal font-medium font-bold"></p>
<p class="text-left text-center text-right text-justify"></p>
```

---

### 4️⃣ 响应式设计

Tailwind CSS 使用移动优先 (Mobile First) 策略：

```html
<!-- 从小屏幕到大屏幕逐渐增强 -->
<div class="
  w-full          /* 所有尺寸 */
  sm:w-1/2        /* ≥640px */
  md:w-1/3        /* ≥768px */
  lg:w-1/4        /* ≥1024px */
  xl:w-1/6        /* ≥1280px */
  2xl:w-1/6       /* ≥1536px */
"></div>
```

**断点参考**:
| 前缀 | 最小宽度 | 典型设备 |
|------|---------|---------|
| `sm:` | 640px | 手机横屏 |
| `md:` | 768px | 平板竖屏 |
| `lg:` | 1024px | 平板横屏 |
| `xl:` | 1280px | 小屏幕笔记本 |
| `2xl:` | 1536px | 桌面显示器 |

---

### 5️⃣ 状态变体 (Variants)

#### 交互状态
```html
<!-- hover 状态 -->
<button class="bg-blue-500 hover:bg-blue-700"></button>

<!-- focus 状态 -->
<input class="border-gray-300 focus:border-blue-500 focus:ring-2" />

<!-- active 状态 -->
<button class="bg-gray-200 active:bg-gray-300"></button>

<!-- disabled 状态 -->
<button class="bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"></button>
```

#### 组合变体
```html
<!-- 同时应用多个状态 -->
<button class="
  bg-blue-500 
  hover:bg-blue-700 
  focus:ring-4 
  focus:ring-blue-300
  disabled:opacity-50
"></button>
```

---

### 6️⃣ 自定义配置

#### 在 CSS 中自定义
```css
@import 'tailwindcss';

@theme {
  --color-brand: #ff5722;
  --font-family-custom: 'Inter', sans-serif;
  --breakpoint-3xl: 1920px;
}

/* 使用自定义值 */
.custom-element {
  @apply bg-brand font-custom;
}
```

#### 使用任意值 (Arbitrary Values)
```html
<!-- 方括号语法 -->
<div class="w-[350px] h-[500px] bg-[#1da1f2]"></div>
<div class="text-[14px] leading-[1.5]"></div>
<div class="grid grid-rows-[repeat(3,1fr)]"></div>
```

---

### 7️⃣ 性能优化技巧

#### ✅ 推荐做法
```html
<!-- 使用语义化类名组合 -->
<button class="btn-primary">

<!-- 在 CSS 中定义 -->
<style>
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
}
</style>
```

#### ❌ 避免过度冗长
```html
<!-- 不推荐：过于冗长 -->
<div class="mt-4 mb-4 ml-6 mr-6 pt-8 pb-8 pl-12 pr-12"></div>

<!-- 推荐：简洁表达 -->
<div class="m-4 my-4 mx-6 p-8 py-8 px-12"></div>
```

---

### 8️⃣ 实用工具函数

#### 🔄 常用简写
| 简写 | 完整形式 |
|------|---------|
| `mx-auto` | `ml-auto mr-auto` |
| `px-4` | `pl-4 pr-4` |
| `py-8` | `pt-8 pb-8` |
| `rounded` | `rounded-md` |
| `shadow` | `shadow-md` |

#### 🎯 常用组合
```html
<!-- 居中布局 -->
<div class="flex items-center justify-center"></div>

<!-- 垂直居中 -->
<div class="min-h-screen flex items-center"></div>

<!-- 卡片样式 -->
<div class="bg-white rounded-lg shadow-lg p-6"></div>

<!-- 响应式图片 -->
<img class="w-full h-auto object-cover" />
```

---

## 🔗 学习资源

- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- [Tailwind CSS v4 发布说明](https://tailwindcss.com/blog/tailwindcss-v4)
- [Vite 官方文档](https://vite.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)

---

## 💡 开发建议

1. **熟记单位系统**: 4px 为基础单位，快速心算各类数值
2. **善用 VS Code 插件**: Tailwind CSS IntelliSense 提供自动补全
3. **使用 `@apply`**: 提取重复的类组合到组件中
4. **响应式优先**: 从移动端开始设计，逐步增强到大屏幕
5. **语义化命名**: 为复杂组件创建语义化的类名
6. **自动格式化**: 保存时自动排序 Tailwind 类名

### 📝 VS Code 推荐设置

在项目根目录创建 `.vscode/settings.json`：

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "tailwindCSS.emmetCompletions": true,
  "tailwindCSS.includeLanguages": {
    "typescript": "html",
    "javascript": "html"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

**启用方法**：
1. 安装 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 扩展
2. 安装 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 扩展
3. 按 `Ctrl+Shift+P` → 输入 "Format Document" 或保存文件时自动格式化

---

## 📝 项目结构

```
tailwindtrain/
├── src/
│   ├── main.ts          # 入口文件
│   ├── style.css        # 全局样式 (导入 Tailwind)
│   ├── counter.ts       # 计数器逻辑
│   └── assets/          # 静态资源
├── public/              # 公共资源
├── index.html           # HTML 模板
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

---

## 🎯 下一步学习路径

1. ✅ 掌握基础单位系统 (4px 规则)
2. ⬜ 学习响应式布局技巧
3. ⬜ 实践自定义主题配置
4. ⬜ 探索动画和过渡效果
5. ⬜ 构建完整的页面组件
6. ⬜ 优化生产环境性能

---

*最后更新：2026-03-14*

