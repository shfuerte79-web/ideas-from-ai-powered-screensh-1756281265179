export const metadata = {\n  title: "Ideas from: AI-Powered Screenshot to Text",\n  description: "```json
[
  {
    title: Smart Note Taker,
    description: أداة SaaS لتحويل لقطات الشاشة إلى نصوص قابلة للتحرير، مع ميزات تنظيمية مثل التصنيف والبحث.,
    mvp_plan: استخدام مكتبة OCR لتحويل لقطات الشاشة إلى نصوص. بناء واجهة مستخدم بسيطة لتحميل الصور وعرض النصوص. إضافة ميزات تصنيف أساسية.
  },
  {
    title: Visual Recipe Extractor,
    description: تطبيق لتحويل لقطات الشاشة للوصفات إلى نصوص، مع إمكانية حفظ الوصفات ومشاركتها.,
    mvp_plan: تطوير واجهة لتحميل الصور، واستخدام OCR لاستخراج النصوص. إضافة خاصية حفظ الوصفات في قاعدة بيانات بسيطة ومشاركة الروابط.
  },
  {
    title: Text-Based Feedback Collector,
    description: أداة لجمع الملاحظات من لقطات الشاشة، موجهة للمدرسين والطلاب لتحويل الملاحظات المكتوبة إلى نصوص رقمية.,
    mvp_plan: إنشاء واجهة لتحميل لقطات الشاشة، واستخدام OCR لاستخراج النصوص. إضافة خاصية لتصدير الملاحظات إلى ملفات PDF أو مستندات Google.
  }
]
```",\n};\n\nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode;\n}) {\n  return (\n    <html lang="en">\n      <body>{children}</body>\n    </html>\n  );\n}