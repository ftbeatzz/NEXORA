import Lottie from 'lottie-react'
import loaderAnimation from '../../assets/animations/preloader1.json'
import styles from './Preloader.module.scss'

const Preloader = () => {
	return (
		<div className={styles.preloaderWrapper}>
			<Lottie
				animationData={loaderAnimation}
				loop={true}
				style={{ height: '560px', width: '560px' }}
			/>
		</div>
	)
}

export default Preloader
