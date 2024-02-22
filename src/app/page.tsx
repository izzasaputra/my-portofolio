import About from "@/container/homepage/about";
import Navbar from "../component/navbar";
import Banner from "../container/homepage/banner";
import styles from "./page.module.scss";
import Technology from "@/container/homepage/technology";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Banner />
      <About />
      <Technology />
    </main>
  );
}
