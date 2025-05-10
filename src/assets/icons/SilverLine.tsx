import type { SVGProps } from 'react'

const SilverLine = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='2'
		height='478'
		viewBox='0 0 2 478'
		fill='none'
		{...props}
	>
		<path
			d='M1 476.912L1 1.06445'
			stroke='url(#paint0_linear_1_97)'
			stroke-linecap='round'
		/>
		<defs>
			<linearGradient
				id='paint0_linear_1_97'
				x1='1.925'
				y1='123.992'
				x2='0.588391'
				y2='123.994'
				gradientUnits='userSpaceOnUse'
			>
				<stop stop-color='#82A1A4' stop-opacity='0.25' />
				<stop offset='0.665' stop-color='#F9F8F6' />
				<stop offset='1' stop-color='#82A1A4' stop-opacity='0.25' />
			</linearGradient>
		</defs>
	</svg>
)

export default SilverLine
