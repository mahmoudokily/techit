import React from 'react';

type DialogStyle = {
  overlay: React.CSSProperties;
  content?: React.CSSProperties;
};

const Style: DialogStyle = {
  overlay: {
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: 999,
    maxHeight: '100vh',
    background: ' rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
  },
};

export default Style;
