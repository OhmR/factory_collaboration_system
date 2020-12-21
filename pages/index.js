// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import '@ant-design/pro-form/dist/form.css';
// import Layout from "../components/Layout"
import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import cookie from "react-cookies"

function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!cookie.load('HFuserinfo')) {
      router.push("/login")
    } else {
      router.push("/home")
    }
  }, [])
  return (null)
}

export default Home;