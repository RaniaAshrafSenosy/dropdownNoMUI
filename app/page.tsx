import Image from "next/image";
import styles from "./page.module.css";
import SelectMenu from "./components/SelectMenu";

export default function Home() {
  const colors = ['rgba(255, 0, 0,1)','rgba(0, 0, 255,1)','rgba(0, 255, 0,1)','rgba(255, 0, 255,1)','rgba(128, 0, 128,1)','rgba(255, 165, 0,1)'];
  const choices=['sunday','monday','tuesday','wednesday','thursday','friday'];
  return (
    <main >
      <h1>From scratch</h1>


      <SelectMenu colors={colors} choices={choices} multiple={true} />
      <SelectMenu colors={colors} choices={choices} multiple={false} />
      

    </main>
  );
}
