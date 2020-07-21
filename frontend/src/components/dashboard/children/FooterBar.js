import React, { useState, useEffect } from 'react';

function FooterBar({ taskData }) {
  // Get screen width - menu
  const findWidth = (inner) => {
    if (inner > 1040) {
      let w = inner * 0.1666667;
      return inner - w;
    } else {
      let w = inner * 0.25;
      return inner - w;
    }
  };
  const [width, setWidth] = useState(findWidth(window.innerWidth));
  useEffect(() => {
    const handleResize = (w) => setWidth(findWidth(window.innerWidth));
    window.addEventListener('resize', handleResize);
  });

  // Count task types
  let grn = 0;
  let ylw = 0;
  let red = 0;
  for (let i = 0; i < taskData.length; i++) {
    if (taskData[i].type === 'progress' || taskData[i].type === 'paused')
      ylw += 1;
    else if (taskData[i].type === 'todo') red += 1;
    else if (taskData[i].type === 'completed') grn += 1;
  }

  // Calculate relative % width
  let tot = grn + ylw + red;
  grn *= width / tot;
  ylw *= width / tot;
  red *= width / tot;

  return (
    <div className="flex absolute bottom-0">
      <div className="bg-owl-grn" style={{ width: grn, height: `20px` }}></div>
      <div className="bg-owl-tan" style={{ width: ylw, height: `20px` }}></div>
      <div className="bg-red-400" style={{ width: red, height: `20px` }}></div>
    </div>
  );
}

export default FooterBar;
