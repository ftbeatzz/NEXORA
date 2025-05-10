import type { SVGProps } from 'react'

const BlueArrow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='29'
		height='19'
		viewBox='0 0 29 19'
		fill='none'
		{...props}
	>
		<g clip-path='url(#clip0_1_68)'>
			<path
				d='M1.67072 9.63062H23.782'
				stroke='#0A7CFF'
				stroke-width='2.375'
				stroke-miterlimit='20'
				stroke-linecap='square'
			/>
			<path
				d='M15.7303 18.0738L24.3894 10.378C24.8369 9.98026 24.837 9.28102 24.3895 8.88319L15.7303 1.18517'
				stroke='#0A7CFF'
				stroke-width='2.375'
				stroke-miterlimit='20'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_68'>
				<rect
					width='28.5'
					height='19'
					fill='white'
					transform='translate(0.0319824)'
				/>
			</clipPath>
		</defs>
	</svg>
)

export default BlueArrow
