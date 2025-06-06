import type { SVGProps } from 'react'

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='25'
		viewBox='0 0 24 25'
		fill='none'
		{...props}
	>
		<path
			d='M18 6.5L6 18.5M6 6.5L18 18.5'
			stroke='white'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
)

export default CloseIcon
