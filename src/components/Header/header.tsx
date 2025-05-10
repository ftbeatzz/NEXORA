import { useEffect, useState } from 'react'
import styles from './header.module.scss'
import LogoHeader from '../../assets/icons/logoHeader'
import WhiteArrow from '../../assets/icons/WhiteArrow'

const Header = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 10) // активируем при небольшом скролле
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
			<div className={styles.headerContent}>
				<div className={styles.logo}>
					<a href='#'>
						<LogoHeader />
					</a>
				</div>
				<nav>
					<ul>
						<li>
							<a href='#about'>About Us</a>
						</li>
						<li>
							<a href='#choose'>Why Choose Us</a>
						</li>
						<li>
							<a href='#vault'>Vault Interface</a>
						</li>
						<li>
							<a href='#key'>Key Capabilities</a>
						</li>
						<li>
							<a href='#security'>Security Protocols</a>
						</li>
						<li>
							<a href='#who'>Who We Protect</a>
						</li>
					</ul>
				</nav>
				<div className={styles.headerBtns}>
					<div className={styles.signIn}>
						<button>Sign in</button>
					</div>
					<div className={styles.langSwitcher}>
						<button>
							<p>English</p>
							<span>
								<WhiteArrow />
							</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
