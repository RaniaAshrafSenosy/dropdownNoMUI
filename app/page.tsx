import Image from "next/image";
import styles from "./page.module.css";
import SelectMenu from "./components/SelectMenu";

export default function Home() {
  const colors = ['red', 'blue', 'green', 'pink', 'purple', 'orange'];
  const choices=['sunday','monday','tuesday','wednesday','thursday','friday'];
  return (
    <main >
      <SelectMenu colors={colors} choices={choices} multiple={false} />
    </main>
  );
}
