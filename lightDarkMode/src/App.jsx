
import useTheme from "./hooks/useTheme";
import styles from './Theme.module.css'


function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <main className={`${styles.main} ${theme === 'dark-theme' ? styles.darkTheme : styles.lightTheme}`}>
        <h1>Light Dark Mode</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </main>
    </>
  )
}

export default App
