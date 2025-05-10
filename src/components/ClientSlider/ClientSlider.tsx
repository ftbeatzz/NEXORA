import { useEffect, useRef, useState } from 'react'
import styles from './ClientSlider.module.scss'

const testimonials = [
	{
		title: 'TRUSTED BY INDUSTRY LEADERS',
		text: `Our platform delivers exceptional security and reliability for large-scale enterprises. With 24/7 monitoring and instant threat alerts, NEXORA stands out in protecting critical digital assets.`,
		author: '— Sophia B.',
	},
	{
		title: 'SEAMLESS EXPERIENCE FOR DEVS',
		text: `Integrating NEXORA into our stack was effortless. The comprehensive API, clear documentation, and robust safety protocols let us focus on building without security concerns.`,
		author: '— Marcus T.',
	},
	{
		title: 'ASSETS FEEL SAFER THAN EVER',
		text: `After moving to NEXORA, we experienced zero security incidents. The biometric authentication and AI monitoring gave our team absolute confidence in our vault.`,
		author: '— Elena R.',
	},
	{
		title: 'INVALUABLE FOR ENTERPRISE TEAMS',
		text: `The granular permissions and audit logs are invaluable for our large organization. NEXORA’s governance features streamline compliance and risk management.`,
		author: '— Carlos S.',
	},
	{
		title: 'FLAWLESS BIOMETRIC ACCESS',
		text: `Unlocking our vault with face recognition and fingerprint ensured only authorized personnel can enter. The speed and accuracy are truly impressive.`,
		author: '— Priya K.',
	},
	{
		title: 'ROBUST AI THREAT PREVENTION',
		text: `The AI-driven alerts proactively identified potential vulnerabilities before they became incidents. We haven’t faced any breaches since implementation.`,
		author: '— Zhang W.',
	},
	{
		title: 'ENTERPRISE-GRADE ENCRYPTION',
		text: `Every byte is encrypted end-to-end with military-grade ciphers. Our data confidentiality and integrity are preserved at all times.`,
		author: '— Fatima L.',
	},
	{
		title: 'EFFICIENT AND INTUITIVE UI',
		text: `Managing our vault has never been easier. The intuitive dashboard, combined with deep customization, makes daily operations smooth and error-free.`,
		author: '— Hans G.',
	},
	{
		title: '24/7 MONITORING YOU CAN TRUST',
		text: `Alerts are immediate and detailed, allowing our security team to act in seconds. NEXORA’s real-time monitoring is a game changer for proactive defense.`,
		author: '— Julian P.',
	},
	{
		title: 'DRAMATIC REDUCTION IN RISK',
		text: `Since onboarding, we saw a 90% drop in attempted security incidents. NEXORA’s layered approach truly mitigates vulnerabilities effectively.`,
		author: '— Lena C.',
	},
	{
		title: 'SCALABLE FOR GROWTH',
		text: `NEXORA scales seamlessly as we onboard new assets and teams. The horizontal scaling lets us expand without compromising performance or security.`,
		author: '— Raul D.',
	},
	{
		title: 'COMPREHENSIVE COMPLIANCE TOOLSET',
		text: `Automated compliance checks freed our compliance team from manual reviews. Everything is audit-ready with detailed logs and reports.`,
		author: '— Maria F.',
	},
	{
		title: 'SECURE COLLABORATION MADE SIMPLE',
		text: `Team members can share access securely across jurisdictions. The fine-grained controls ensure visibility without sacrificing confidentiality.`,
		author: '— Akira N.',
	},
	{
		title: 'NEXT-LEVEL REAL-TIME INSIGHTS',
		text: `Live dashboards and audit logs empower us to detect anomalies instantly. The visual analytics help our security analysts stay ahead of threats.`,
		author: '— Tom H.',
	},
	{
		title: 'ZERO COMPROMISE PERFORMANCE',
		text: `High-speed vault access without sacrificing security. We handle thousands of transactions daily with zero latency impact.`,
		author: '— Sophia J.',
	},
	{
		title: 'ROCK-SOLID INFRASTRUCTURE',
		text: `The distributed architecture ensures near-zero downtime and blinding-fast response times. Our operations have never been smoother.`,
		author: '— Victor M.',
	},
	{
		title: 'FUTURE-PROOF SECURITY PLATFORM',
		text: `Continuous updates keep us protected against emerging threats. The modular design means we adopt new features instantly without downtime.`,
		author: '— Olivia S.',
	},
	{
		title: 'EXCEPTIONAL CUSTOMER SUPPORT',
		text: `The support team guided us through every integration step and provided 24/7 assistance. Their expertise accelerated our deployment significantly.`,
		author: '— Ahmed Z.',
	},
	{
		title: 'INTEGRATION IN MINUTES',
		text: `We went from signup to full deployment in under an hour. NEXORA’s onboarding process is streamlined and developer-friendly.`,
		author: '— Carla V.',
	},
	{
		title: 'PEACE OF MIND GUARANTEED',
		text: `Knowing our assets are safe lets us focus on innovation. NEXORA’s unbreakable security gives our stakeholders total confidence.`,
		author: '— Daniel K.',
	},
]

const ClientSlider = () => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [paused, setPaused] = useState(false)
	const pausedRef = useRef(paused)

	// Обновляем pausedRef при изменении paused
	useEffect(() => {
		pausedRef.current = paused
	}, [paused])

	// Основная анимация прокрутки
	useEffect(() => {
		const slider = sliderRef.current
		if (!slider) return

		let start = 0
		const scrollSpeed = 0.5 // пикселей за кадр
		let animationFrame: number

		const animate = () => {
			if (!pausedRef.current) {
				start -= scrollSpeed
				if (Math.abs(start) >= slider.scrollWidth / 3) {
					start = 0
				}
				slider.style.transform = `translateX(${start}px)`
			}
			animationFrame = requestAnimationFrame(animate)
		}

		animationFrame = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(animationFrame)
	}, [])

	return (
		<section className={styles.sliderWrapper}>
			<div
				className={styles.sliderContainer}
				onMouseEnter={() => setPaused(true)}
				onMouseLeave={() => setPaused(false)}
			>
				<div className={styles.sliderTrack} ref={sliderRef}>
					{[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
						<div key={i} className={styles.slide} style={{ cursor: 'pointer' }}>
							<h3>{t.title}</h3>
							<p>{t.text}</p>
							<span>{t.author}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ClientSlider
