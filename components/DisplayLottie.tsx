import React from "react";
// 1. Dùng dynamic import của Next.js
import dynamic from 'next/dynamic';

// 2. Import Lottie với tùy chọn ssr: false
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* 3. Thêm kiểm tra typeof window để đảm bảo chỉ chạy trên trình duyệt */}
      {typeof window !== "undefined" && (
        /* @ts-ignore */
        <Lottie options={defaultOptions} />
      )}
    </div>
  );
};

export default GreetingLottie;