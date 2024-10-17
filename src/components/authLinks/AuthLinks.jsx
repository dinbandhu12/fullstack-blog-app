import Link from "next/link";
import styles from "./authLinks.module.css";


const AuthLink = () => {
  const status = "notauthenticated"

  return <>
    {status === "notauthenticated" ? (
      <Link href="/login">Login</Link>
    ) : (
      <>
        <Link href="/write">WritePost</Link>
        <span className={styles.link}>Logout</span>
      </>
    )}    
  </>
}

export default AuthLink
