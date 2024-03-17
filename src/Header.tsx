import React from "react";
import logo from '../src/stackline_logo.svg'

export default function Header() {
    return (
        <header style={styles.header}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </header>
      );
}

const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#012840',
      color: 'white',
      padding: '10px 20px',
    },
    logo: {
      width: '100px', 
      marginRight: '10px', 
    }
  };