"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";

const AuthLink = () => {
  const [open, setOpen] = useState(false);
  
  // for slide up and down animation
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    if(open) {
      // start the closing animation
      setIsClosing(true);
      // wait for animation to complete before hiding menu
      setTimeout(() => {
        setOpen(false);
        setIsClosing(false);
      }, 300); // same duration as our animation
    } else {
      setOpen(true);
    }
  };

  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link} >Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link} >WritePost</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      {/* <div className={styles.burger} onClick={() => setOpen(!open)}> */}
      <div className={styles.burger} onClick={ handleToggle }>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={`${styles.responsiveMenu} ${isClosing ? styles.slideUp : ''}`} >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">WritePost</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
          {/* <div className={styles.themeToggle}>
            <ThemeToggle />
          </div> */}
        </div>
        
      )}
    </>
  );
};

export default AuthLink;
