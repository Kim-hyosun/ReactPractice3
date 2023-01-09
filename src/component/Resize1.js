import React, { useEffect, useState } from 'react';

function Resize1(props) {
  console.log('리사이즈'); //랜더링 될때마다 실행 + 리사이즈 할때마다 같이 실행되고 있음  => 해결법 : useRef > resize2페이지에서 실습 

  const [ width, setWidth] =useState(null);
useEffect(()=>{ //상태 변화 감지하는 것들은 모두 useEffect사용해야함
  window.addEventListener('resize',()=>{
    setWidth(window.innerWidth);
  })
},[]);

useEffect(()=>{
console.log(width);
},[width]);

  return (
    <>
      
    </>
  );
}

export default Resize1;