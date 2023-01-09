import React, { useEffect, useRef } from 'react';

function Resize2(props) {
  console.log('리사이즈'); //랜더링될때마다 실행됨 +리사이즈발생해서 Ref값 출력해도 같이 실행되지 않음 => 브라우저에 부담이 덜해짐

  const width = useRef(null);

   useEffect(()=>{
      window.addEventListener('resize',()=>{
        width.current = window.innerWidth;
        console.log(width.current);
       });
   },[])

  return (
    <div>
      
    </div>
  );
}

export default Resize2;