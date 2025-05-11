import { useEffect, useState } from 'react'
import styles from './header.module.scss'
import LogoHeader from '../../assets/icons/logoHeader'
import WhiteArrow from '../../assets/icons/WhiteArrow'
import BurgerMenu from '../../assets/icons/BurgerMenu'
import CloseIcon from '../../assets/icons/CloseIcon'

const Header = () => {
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<>
			{menuOpen && (
				<div className={styles.overlay} onClick={() => setMenuOpen(false)} />
			)}
			<header
				className={[
					styles.header,
					scrolled && !menuOpen ? styles.scrolled : null,
					menuOpen ? styles.menuOpenHeader : null,
				]
					.filter(Boolean)
					.join(' ')}
			>
				<div className={styles.headerContent}>
					<div className={styles.logo}>
						<a href='#'>
							<LogoHeader />
						</a>
					</div>
					<div
						className={`${styles.burgerIcon} ${menuOpen ? styles.open : ''}`}
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<BurgerMenu className={styles.iconBurger} />
						<CloseIcon className={styles.iconClose} />
					</div>
					<nav className={styles.desktopNav}>
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

				{menuOpen && (
					<div className={styles.mobileMenu}>
						<nav>
							<ul>
								<li>
									<a href='#about' onClick={() => setMenuOpen(false)}>
										About Us
									</a>
								</li>
								<li>
									<a href='#choose' onClick={() => setMenuOpen(false)}>
										Why Choose Us
									</a>
								</li>
								<li>
									<a href='#vault' onClick={() => setMenuOpen(false)}>
										Vault Interface
									</a>
								</li>
								<li>
									<a href='#key' onClick={() => setMenuOpen(false)}>
										Key Capabilities
									</a>
								</li>
								<li>
									<a href='#security' onClick={() => setMenuOpen(false)}>
										Security Protocols
									</a>
								</li>
								<li>
									<a href='#who' onClick={() => setMenuOpen(false)}>
										Who We Protect
									</a>
								</li>
							</ul>
						</nav>
						<div className={styles.mobileBtns}>
							<button className={styles.signIn}>Sign in</button>
							<button className={styles.langSwitcher}>
								<p>English</p>
								<span>
									<WhiteArrow />
								</span>
							</button>
						</div>
					</div>
				)}
			</header>
		</>
	)
}

export default Header
