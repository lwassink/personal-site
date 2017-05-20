import React from 'react';

export default ({ fixed }) => {
  let styles = {};
  if (fixed) {
    styles = {
      position: 'fixed',
      bottom: 0,
      zIndex: 1
    }
  }
  return (
    <footer className="copyright-bar" style={styles} >
    &copy; {new Date(Date.now()).getFullYear()} Luke Wassink
    </footer>
  );
};
