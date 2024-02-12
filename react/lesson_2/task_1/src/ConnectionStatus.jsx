import React, { useEffect, useState } from 'react';

export default function ConnectionStatus() {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    window.addEventListener('offline', () => {
      setStatus('offline');
    });
    window.addEventListener('online', () => {
      setStatus('online');
    });

    return() => {
      window.removeEventListener('offline', () => {
        setStatus('offline');
      });
      window.removeEventListener('online', () => {
        setStatus('online');
      });
    }
  }, [])
 

  return <div className={"status"+(status === 'offline'?" status_offline":"")}>{status}</div>;
}
