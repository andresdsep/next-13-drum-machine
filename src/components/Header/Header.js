"use client";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import MuteButton from "../MuteButton/MuteButton";

function Header() {
  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <MuteButton />
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
