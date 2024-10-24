"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { signOut, useSession } from "next-auth/react";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

// animation code start here
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
  // animation code end here

  const { status } = useSession(); 

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link} >Login</Link>
      ) : (
        <>
          <Link href="/writepost" className={styles.link} >WritePost</Link>
          <span className={styles.link} onClick={signOut} >Logout</span>
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
              <Link href="/writepost">WritePost</Link>
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
