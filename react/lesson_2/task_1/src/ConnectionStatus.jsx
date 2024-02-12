import React, { useEffect, useState } from 'react';

export default function ConnectionStatus() {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    window.onoffline = () => {
      setStatus('offline');
    };
    window.ononline = () => {
      setStatus('online');
    };
  }, [])
 

  return <div className={"status"+(status === 'offline'?" status_offline":"")}>{status}</div>;
}
