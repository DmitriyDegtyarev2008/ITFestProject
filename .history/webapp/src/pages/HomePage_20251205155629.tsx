import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

function HomePage() {
  const navigate = useNavigate()

  const menuRoutes: Record<string, string> = {
    'About university': '/about',
    'Academic Programs': '/programs',
    'Admission': '/admission',
    '3DTour': '/3d-tour',
    'InterCoop': '/intercoop',
    'Advantages': '/advantages',
  }


  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h1>SpaceDom</h1>
        </div>
        <nav className={styles.sidebarNav}>
          <ul>
            {Object.keys(menuRoutes).map((item, index) => (
              <li key={index}>
                <Link to={menuRoutes[item]}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.sidebarFooter}>
          <Link to="/profile" className={styles.profileLink}>
            <span>Username</span>
          </Link>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.header}>
          <div className={styles.head__title}>
            <h2>Personal Cabinet</h2>
          </div>
          <div className={styles.leave__btn}>
            <button>LEAVE</button>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.profileHeader}>
            <h1 className={styles.main__title}>Username</h1>
            <button className={styles.edit__btn}>EDIT</button>
          </div>

          <div className={styles.main__text}>
            <p>
              I am human. Lorem ipsum dolor sit
              <br /> amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <button onClick={() => navigate('/reg')}>Go to Register Page</button>
      </main>
    </div>
  )
}

export default HomePage
