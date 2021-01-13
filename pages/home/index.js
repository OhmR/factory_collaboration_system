import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from "../../components/Layout"

export default function Home() {
  return (
    <Layout content={
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            基于订单的家庭工厂协作系统
          </h1>

          <p className={styles.description}>
            由小组12345实现
          </p>

          <div className={styles.grid}>
            <a href="https://github.com/OhmR/factory_collaboration_system" className={styles.card}>
              <h3>前端项目 &rarr;</h3>
              <p>基于订单的家庭工厂协作系统前端仓库</p>
            </a>

            <a href="https://github.com/hjh2333/advanced_software_engineering" className={styles.card}>
              <h3>后端项目 &rarr;</h3>
              <p>基于订单的家庭工厂协作系统后端仓库</p>
            </a>
          </div>
        </main>

      </div>}
    />
  )
}
