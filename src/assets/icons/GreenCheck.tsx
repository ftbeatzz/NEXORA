import type { SVGProps } from 'react'

const GreenCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='20'
		height='21'
		viewBox='0 0 20 21'
		fill='none'
		{...props}
	>
		<circle cx='10' cy='10.5' r='10' fill='#36CD77' />
		<path
			d='M13.3337 8L8.75033 12.5833L6.66699 10.5'
			stroke='white'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
)

export default GreenCheck
