import React, { useEffect } from 'react';

// 모달 오버레이에서 스크롤 방지
function usePreventScroll(open: boolean) {
  useEffect(() => {
    if (open) {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    } else return;
  }, [open]);
}

export default usePreventScroll;
