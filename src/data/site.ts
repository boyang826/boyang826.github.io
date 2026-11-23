// Contact links. Leave a field empty to hide it on the site.
export const site = {
  email: 'yang88@engineering.upenn.edu',
  github: '',
  linkedin: 'https://www.linkedin.com/in/bo-yang-731814432/',
};

// Phone-free résumé PDFs served from public/resume/.
export const resumes = {
  en: [
    { key: 'embedded', href: '/resume/bo-yang-embedded.pdf' },
    { key: 'product', href: '/resume/bo-yang-product.pdf' },
  ],
  zh: [
    { key: 'embedded', href: '/resume/bo-yang-embedded-zh.pdf', download: '杨博-宾夕法尼亚大学-嵌入式开发实习-简历.pdf' },
    { key: 'product', href: '/resume/bo-yang-product-zh.pdf', download: '杨博-宾夕法尼亚大学-产品经理实习-简历.pdf' },
  ],
} as const;
