import type { FC } from 'react';
import { Spin } from 'antd';

import { usePDF } from './usePDF';

const demoPDF =
  'https://gw.alipayobjects.com/os/antfincdn/ahHPSArTXO/Wicked%252520Problems%252520in%252520Design%252520Thinking.pdf';

const PDFReview: FC = () => {
  const { container, pdfDocument, loading } = usePDF(demoPDF);

  console.log(pdfDocument);
  return (
    <div>
      <div ref={container}>{loading ? <Spin /> : null}</div>
    </div>
  );
};

export default PDFReview;
