import React, { useEffect, useState } from 'react';

export default function Dimensions() {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
  });

  const { width, height } = dimensions;

  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
}
