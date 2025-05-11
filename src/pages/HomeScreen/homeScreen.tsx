import { useEffect, useRef, useState } from 'react'
import styles from './homeScreen.module.scss'
import FaqList from '../../components/FaqList/FaqList'
import ChooseArrow from '../../assets/icons/ChooseArrow'
import SilverLine from '../../assets/icons/SilverLine'
import AnimatedCounter from '../../components/AnimatedCouner/AnimatedCouner'
import GreenCheck from '../../assets/icons/GreenCheck'
import GpuIcon from '../../assets/icons/GpuIcon'
import LockIcon from '../../assets/icons/LockIcon'
import ShieldIcon from '../../assets/icons/ShieldIcon'
import NetworkIcon from '../../assets/icons/NetworkIcon'
import HandsIcon from '../../assets/icons/HandsIcon'
import PercentageIcon from '../../assets/icons/PercentageIcon'
import ClientSlider from '../../components/ClientSlider/ClientSlider'
import EcllipseIcon from '../../assets/icons/EcllipseIcon'

const HomeScreen = () => {
	const imgRef = useRef<HTMLDivElement>(null)
	const [visible, setVisible] = useState(false)
	const chooseRef = useRef<HTMLDivElement>(null)
	const [animated, setAnimated] = useState(false)
	const earthRef = useRef<HTMLDivElement>(null)
	const [visibleEarth, setVisibleEarth] = useState(false)

	useEffect(() => {
		const node = imgRef.current
		if (!node) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true)
			},
			{ threshold: 0.3 }
		)

		observer.observe(node)
		return () => observer.unobserve(node) // используем сохранённое значение
	}, [])

	useEffect(() => {
		const node = chooseRef.current
		if (!node) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setAnimated(true)
			},
			{ threshold: 0.3 }
		)

		observer.observe(node)
		return () => observer.unobserve(node) // используем сохранённое значение
	}, [])

	useEffect(() => {
		const node = earthRef.current
		if (!node) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisibleEarth(true)
			},
			{ threshold: 0.6 }
		)

		observer.observe(node)
		return () => observer.unobserve(node) // используем сохранённое значение
	}, [])

	return (
		<main className={styles.content}>
			<section className={styles.heroContainer} id='who'>
				<div className={styles.heroWrapper}>
					<div className={styles.heroContent}>
						<div className={styles.heroTxtWrapper}>
							<div className={styles.heroTxt}>
								<h1>One Platform. Infinite Potential.</h1>
								<p>
									Join institutions, investors, and Web3 developers who rely on
									NEXORA to protect what matters most.
								</p>
								<p>
									We safeguard your digital assets with enterprise-grade
									encryption, AI-driven threat detection, and biometric access
									protocols — built for the future of finance.
								</p>
							</div>
							<div className={styles.heroBtn}>
								<button>Learn more</button>
							</div>
						</div>
						<div className={styles.heroImg}>
							<img src='/public/iceLogo.png' alt='' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.faqContainer} id='about'>
				<div className={styles.faqWrapper}>
					<div className={styles.faqContent}>
						<div className={styles.faqImg} ref={imgRef}>
							<img
								src='/public/faqImg.png'
								alt='FAQ image'
								className={visible ? styles.show : ''}
							/>
						</div>
						<FaqList />
					</div>
				</div>
			</section>

			<section className={styles.chooseContainer} id='choose'>
				<div className={styles.chooseWrapper} ref={chooseRef}>
					<div className={styles.chooseContent}>
						<h2
							className={`${styles.animateIn} ${
								animated ? styles.fadeInUp : ''
							}`}
						>
							WHY CHOOSE NEXORA
						</h2>
						<div className={styles.chooseContentTop}>
							<div
								className={`${styles.leftContent} ${styles.animateIn} ${
									animated ? styles.fadeInLeft : ''
								}`}
							>
								<div className={styles.chooseImg}>
									<img src='/public/forPartners.png' alt='' />
								</div>
								<div className={styles.chooseTxt}>
									<h3>FOR PARTNERS</h3>
									<ul>
										<li>
											Partners and resellers benefit from immediate execution of
											secure vault requests and custody services.
										</li>
										<li>
											We reward high-volume performance with tiered commissions
											and early access to premium security tools.
										</li>
									</ul>
								</div>
							</div>
							<div
								className={`${styles.silverLine} ${styles.animateIn} ${
									animated ? styles.fadeInUp : ''
								}`}
							>
								<SilverLine />
							</div>
							<div
								className={`${styles.rightContent} ${styles.animateIn} ${
									animated ? styles.fadeInRight : ''
								}`}
							>
								<div className={styles.chooseImg}>
									<img src='/public/forClients.png' alt='' />
								</div>
								<div className={styles.chooseTxt}>
									<h3>FOR ENTERPRISE CLIENTS</h3>
									<ul>
										<li>
											Institutional clients, custodians, and Web3 enterprises
											gain unlimited access to arbitration tools, automated
											compliance layers, and real-time vault management — all
											within a zero-compromise security framework.
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div
							className={`${styles.chooseContentBottom} ${styles.animateIn} ${
								animated ? styles.fadeInUp : ''
							}`}
						>
							<div className={styles.arrow}>
								<ChooseArrow />
							</div>
							<div className={styles.arrowTxt}>
								<h4>
									NEXORA delivers elite digital security services —
									precision-built for those who demand the highest standard.
								</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.handsContainer} id='vault'>
				<div className={styles.handsWrapper}>
					<h2
						className={`${styles.animateIn} ${animated ? styles.fadeInUp : ''}`}
					>
						YOU'RE IN SECURE HANDS
					</h2>
					<h3>
						NEXORA VAULT is engineered for resilience, privacy, and total
						digital sovereignty.
					</h3>
					<div className={styles.handsContent}>
						<div className={styles.leftContent}>
							<div className={styles.handsLeftBlocks}>
								<p>
									Infrastructure across zero-trust jurisdictions ensures maximum
									operational security
								</p>
							</div>
							<div className={styles.handsLeftBlocks}>
								<p>
									Biometric and encrypted identity layers verify users without
									exposing sensitive data
								</p>
							</div>
						</div>
						<div className={styles.imgWrapper}>
							<img src='/public/handsLogo.png' alt='' />
						</div>
						<div className={styles.rightContent}>
							<div className={styles.handsRightBlocks}>
								<p>
									Data centers comply with ISO/IEC 27001 and store nothing
									without explicit consent
								</p>
							</div>
							<div className={styles.handsRightBlocks}>
								<p>
									Designed to meet evolving demands of Web3, DeFi platforms, and
									digital institutions
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.earthContainer} id='security' ref={earthRef}>
				<div className={styles.earthWrapper}>
					<div className={styles.earthContent}>
						<div
							className={`${styles.earthLeft} ${
								visibleEarth ? styles.fadeInLeft : styles.animateIn
							}`}
						>
							<img src='/public/earth.png' alt='' />
						</div>
						<div className={styles.earthRightWrapper}>
							<div
								className={`${styles.earthMiddle} ${
									visibleEarth ? styles.fadeInLeft : styles.animateIn
								}`}
							>
								<img src='/public/lines.png' alt='' />
							</div>
							<div className={styles.earthRight}>
								<div className={styles.topList}>
									<h2>Core Security Protocols:</h2>
									<ul>
										{[
											'End-to-end biometric authentication',
											'AI-powered behavioral monitoring',
											'Role-based access control (RBAC)',
											'Blockchain audit verification',
											'Immutable access logs',
											'Redundant multi-zone data architecture',
										].map((text, index) => (
											<li
												key={index}
												className={`${styles.animateIn} ${
													visibleEarth ? styles.fadeInUp : ''
												}`}
												style={{ animationDelay: `${index * 0.2}s` }}
											>
												<span>
													<EcllipseIcon />
												</span>
												{text}
											</li>
										))}
									</ul>
								</div>
								<div className={styles.bottomList}>
									<h2>Built to Uphold:</h2>
									<ul>
										{[
											'Global Data Sovereignty Principles',
											'GDPR & Zero-Knowledge Data Standards',
											'Crypto Custodial Responsibility Acts',
											'Cross-border Encryption Compliance',
										].map((text, index) => (
											<li
												key={index}
												className={`${styles.animateIn} ${
													visibleEarth ? styles.fadeInUp : ''
												}`}
												style={{ animationDelay: `${(index + 6) * 0.2}s` }}
											>
												<span>
													<EcllipseIcon />
												</span>
												{text}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.countingContainer}>
				<div className={styles.countingWrapper}>
					<div className={styles.countingContent}>
						<div className={styles.countingBlock}>
							<h2>
								<AnimatedCounter targetNumber={1500} />
							</h2>
							<p>
								Active enterprise and Web3 clients securely storing digital
								assets in real-time through our distributed vault system.
							</p>
						</div>
						<SilverLine />
						<div className={styles.countingBlock}>
							<h2>
								<AnimatedCounter targetNumber={550} />
							</h2>
							<p>
								Automated access requests, verifications, and threat scans
								processed daily across NEXORA’s secure environments.
							</p>
						</div>
						<SilverLine />
						<div className={styles.countingBlock}>
							<h2>
								<AnimatedCounter targetNumber={250} />
							</h2>
							<p>
								Protected applications, ecosystems, and integrations using
								NEXORA protocols across finance, gaming, cloud, and identity.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.keyContainer} id='key'>
				<div className={styles.keyWrapper}>
					<h2>KEY CAPABILITIES</h2>
					<h3>Built to secure the digital frontier.</h3>
					<div className={styles.keyContent}>
						<div className={styles.keyBlock}>
							<h4>Biometric Access Control</h4>
							<p>
								Advanced fingerprint, facial, and behavioral biometrics ensure
								that vaults respond only to verified, living identities — not
								passwords.
							</p>
						</div>
						<div className={styles.keyBlockGray}>
							<h4>Zero-Knowledge Encryption</h4>
							<p>
								Vault contents are encrypted and validated without ever being
								exposed. Only you hold the keys — not even NEXORA can access
								your data.
							</p>
						</div>
						<div className={styles.keyBlockGray}>
							<h4>AI-Powered Threat Detection</h4>
							<p>
								Our autonomous security layer monitors vault behavior and flags
								anomalies in real time, neutralizing threats before they
								escalate.
							</p>
						</div>
						<div className={styles.keyBlock}>
							<h4>Immutable Compliance Logging</h4>
							<p>
								Every action is recorded in an unalterable audit log — ready for
								institutional review and aligned with global regulatory
								standards.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.featuresContainer}>
				<div className={styles.featuresWrapper}>
						<div className={styles.featuresContent}>
							<div className={styles.featuresLeft}>
								<div className={styles.featuresTop}>
									<h2>What You Get</h2>
									<ul>
										<li>
											<span>
												<GreenCheck />
											</span>
											Verified identity-bound vaults with biometric
											authentication
										</li>
										<li>
											<span>
												<GreenCheck />
											</span>
											Access to your assets from any secure device, anytime
										</li>
										<li>
											<span>
												<GreenCheck />
											</span>
											Full control of encryption keys and storage segmentation
										</li>
									</ul>
								</div>
								<div className={styles.featuresBottom}>
									<h2>OuR FEATURES INCLUDE</h2>
									<ul>
										<li>
											<span>
												<GpuIcon />
											</span>
											AI-secured threat detection and alerting
										</li>
										<li>
											<span>
												<LockIcon />
											</span>
											Zero-knowledge encryption with no third-party access
										</li>
										<li>
											<span>
												<ShieldIcon />
											</span>
											Support for enterprise-scale asset protection
										</li>
										<li>
											<span>
												<NetworkIcon />
											</span>
											Immutable activity logs for full compliance review
										</li>
										<li>
											<span>
												<HandsIcon />
											</span>
											24/7 access and monitoring across secure environments
										</li>
										<li>
											<span>
												<PercentageIcon />
											</span>
											Fully anonymous vault options with tiered security
											profiles
										</li>
									</ul>
								</div>
							</div>
							<div className={styles.featuresRight}>
								<img src='/public/bull.png' alt='' />
							</div>
						</div>
				</div>
			</section>

			<section className={styles.clientSliderContainer}>
				<div className={styles.clientSliderWrapper}>
					<h2>Built on Trust, Proven by Clients</h2>
					<div className={styles.clientSliderContent}>
						<ClientSlider />
					</div>
				</div>
			</section>
		</main>
	)
}

export default HomeScreen
