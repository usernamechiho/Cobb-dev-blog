import styles from './layout.module.scss'

interface IChildrenType {
  children: JSX.Element
}

const Layout = ({ children }: IChildrenType) => {
  return <main className={styles.globalLayout}>{children}</main>
}

export default Layout
