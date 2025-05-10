import { useEffect, useRef, useState } from 'react'

type Props = {
	targetNumber: number
	duration?: number
}

const AnimatedCounter = ({ targetNumber, duration = 2000 }: Props) => {
	const spanRef = useRef<HTMLSpanElement>(null)
	const [count, setCount] = useState(0)
	const [started, setStarted] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !started) setStarted(true)
			},
			{ threshold: 0.4 }
		)

		if (spanRef.current) observer.observe(spanRef.current)
		const current = spanRef.current
		return () => {
			if (current) observer.unobserve(current)
		}
	}, [started])

	useEffect(() => {
		if (!started) return

		const start = performance.now()

		// 🧠 Экспоненциальное замедление
		const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

		const step = (now: number) => {
			const elapsed = now - start
			const progress = Math.min(elapsed / duration, 1)
			const eased = easeOutExpo(progress)
			setCount(Math.floor(eased * targetNumber))

			if (progress < 1) {
				requestAnimationFrame(step)
			} else {
				setCount(targetNumber)
			}
		}

		requestAnimationFrame(step)
	}, [started, targetNumber, duration])

	return <span ref={spanRef}>{count}+</span>
}

export default AnimatedCounter
