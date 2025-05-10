import styles from './footer.module.scss'
import TxtLogo from '../../assets/icons/TxtLogo'

const Footer = () => {
	return (
		<footer>
			<div className={styles.footerContent}>
				<div className={styles.footerTop}>
					<nav>
						<div>
							<h2>LEGAL</h2>
							<ul>
								<li>
									<a href=''>Terms of Service</a>
								</li>
								<li>
									<a href=''>Privacy Policy</a>
								</li>
								<li>
									<a href=''>Data Security Policy</a>
								</li>
							</ul>
						</div>
						<div>
							<h2>TECHNOLOGY</h2>
							<ul>
								<li>
									<a href=''>Security Infrastructure</a>
								</li>
								<li>
									<a href=''>Uptime & Node Status</a>
								</li>
								<li>
									<a href=''>API Access</a>
								</li>
							</ul>
						</div>
						<div>
							<h2>COMPANY</h2>
							<ul>
								<li>
									<a href=''>About NEXORA</a>
								</li>
								<li>
									<a href=''>Careers</a>
								</li>
								<li>
									<a href=''>Contact Us</a>
								</li>
							</ul>
						</div>
						<div>
							<h2>RESOURCES</h2>
							<ul>
								<li>
									<a href=''>Knowledge Base</a>
								</li>
								<li>
									<a href=''>Whitepaper</a>
								</li>
								<li>
									<a href=''>Responsible Disclosure</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className={styles.footerBottom}>
					<TxtLogo />
					<p>© 2025 NEXORA — Created by Artler Agency.</p>
					<p>© 2024–2025 NEXORA . All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
