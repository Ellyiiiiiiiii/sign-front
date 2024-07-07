import styles from './loader.module.css';

export default function loader() {
  return (
    <>
      <div className={styles['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}
