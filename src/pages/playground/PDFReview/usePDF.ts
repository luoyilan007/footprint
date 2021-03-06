import type { PDFDocumentProxy } from 'pdfjs-dist/webpack';
import { getDocument } from 'pdfjs-dist/webpack';

import { useEffect, useRef, useState } from 'react';

/**
 * PDF hooks
 * @param defaultUrl
 */
export const usePDF = (defaultUrl: string) => {
  const container = useRef<HTMLDivElement>(null);
  const [pdf, setPDF] = useState<PDFDocumentProxy | undefined>();
  const [loading, setLoading] = useState(false);

  /**
   * PDF 加载方法
   * @param url
   */
  const loadPDF = async (url: string) => {
    // 下面就是解析文件或者url
    const task = getDocument(url);

    setLoading(true);
    const pdfDoc = await task.promise;
    setLoading(false);

    setPDF(pdfDoc);

    // 因为不想要分页所以循环生成canvas
    for (let i = 1; i <= pdfDoc.numPages; i += 1) {
      // 因为不知道把pdf解析了多少页，所以我们需要循环创建canvas并且一定要不同的id
      const canvas = document.createElement('canvas');

      canvas.id = `pdf${i}`;
      const ctx = canvas.getContext('2d');
      // 通过getPage的方法获取到每一页的内容渲染，结束后把当前创建的canvas添加到页面中
      pdfDoc.getPage(i).then((page) => {
        const viewport = page.getViewport({ scale: 1 });
        const desiredWidth = 600;
        const scale = desiredWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });
        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;
        // 进行文件读取加载

        page.render({ canvasContext: ctx!, viewport: scaledViewport });

        container.current?.appendChild(canvas);
      });
    }
  };

  useEffect(() => {
    loadPDF(defaultUrl);
  }, []);

  return { container, loadPDF, pdfDocument: pdf, loading };
};
