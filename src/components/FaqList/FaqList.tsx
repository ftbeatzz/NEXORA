import { useEffect, useRef, useState } from 'react'
import styles from './FaqList.module.scss'
import BlueArrow from '../../assets/icons/BlueArrow'

const faqItems = [
	{
		title: 'WHO WE ARE',
		text: 'NEXORA is a next-generation security platform built to protect digital assets. Combining military-grade encryption, biometric access, and AI-driven threat prevention, we secure what traditional finance cannot.',
	},
	{
		title: 'WHAT WE OFFER',
		text: 'Our users range from independent creators and crypto-native individuals to large Web3 organizations, NFT platforms, and financial technology firms.',
	},
	{
		title: 'OUR CLIENTS',
		text: 'Our users range from independent creators and crypto-native individuals to large Web3 organizations, NFT platforms, and financial technology firms.',
	},
	{
		title: 'OUR VISION',
		text: 'We believe digital ownership must come with digital sovereignty. NEXORA VAULT is on a mission to redefine how assets are stored, accessed, and protected in a decentralized world — empowering users with tools that are transparent, intelligent, and absolutely secure by design.',
	},
	{
		title: 'OUR TECHNOLOGY',
		text: 'NEXORA VAULT is built on a layered security architecture that blends biometric authentication, AI-driven anomaly detection, and zero-knowledge encryption.',
	},
]

const FaqList = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [visible, setVisible] = useState(false)
	const wrapperRef = useRef<HTMLDivElement>(null)

useEffect(() => {
	const node = wrapperRef.current
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

	// Автоматическое переключение активного вопроса
	useEffect(() => {
		if (!visible) return

		const interval = setInterval(() => {
			setActiveIndex(prevIndex =>
				prevIndex === faqItems.length - 1 ? 0 : prevIndex + 1
			)
		}, 10000) // каждые 10 секунд

		return () => clearInterval(interval)
	}, [visible])

	return (
		<div
			ref={wrapperRef}
			className={`${styles.faqListWrapper} ${visible ? styles.visible : ''}`}
		>
			{faqItems.map((item, index) => {
				const isActive = index === activeIndex
				return (
					<div
						key={index}
						className={`${styles.faqList} ${isActive ? styles.active : ''}`}
						onClick={() => setActiveIndex(index)}
						style={{ transitionDelay: `${index * 0.1}s` }}
					>
						<div className={styles.faqTitle}>
							<h2>{item.title}</h2>
							<BlueArrow
								className={`${styles.arrow} ${isActive ? styles.rotated : ''}`}
							/>
						</div>
						<div
							className={styles.faqText}
							style={{ maxHeight: isActive ? '200px' : '0px' }}
						>
							<p>{item.text}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default FaqList
