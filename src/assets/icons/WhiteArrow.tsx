import type { SVGProps } from 'react'

const WhiteArrow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='11'
		height='6'
		viewBox='0 0 11 6'
		fill='none'
		{...props}
	>
		<path
			d='M5.5 6C5.725 6 5.875 5.925 6.025 5.775L10.525 1.275C10.825 0.975 10.825 0.525 10.525 0.225C10.225 -0.075 9.775 -0.075 9.475 0.225L5.5 4.2L1.525 0.225C1.225 -0.075 0.775 -0.075 0.474999 0.225C0.174999 0.525 0.174999 0.975 0.474999 1.275L4.975 5.775C5.125 5.925 5.275 6 5.5 6Z'
			fill='white'
		/>
	</svg>
)

export default WhiteArrow
