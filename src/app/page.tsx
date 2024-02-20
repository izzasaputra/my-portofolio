
import Navbar from "../component/navbar";
import Banner from "../container/homepage/banner";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Banner/>
      <div style={{marginTop:'200px'}}>
        lorem
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae necessitatibus, voluptate aperiam cupiditate tempora vero saepe fugit? Nisi recusandae inventore ipsa iusto nobis illo ad delectus quis aperiam accusamus!
    </main>
  );
}
