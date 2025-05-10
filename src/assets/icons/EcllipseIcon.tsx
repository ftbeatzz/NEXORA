import type { SVGProps } from 'react'

const EcllipseIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='25'
		height='24'
		viewBox='0 0 25 24'
		fill='none'
		{...props}
	>
		<circle cx='12.125' cy='12' r='11.5' stroke='url(#paint0_linear_1_140)' />
		<defs>
			<linearGradient
				id='paint0_linear_1_140'
				x1='5.56407'
				y1='34.0587'
				x2='33.1474'
				y2='-21.108'
				gradientUnits='userSpaceOnUse'
			>
				<stop stop-color='#82A1A4' />
				<stop offset='0.251156' stop-color='#696969' />
				<stop offset='0.451645' stop-color='#696969' />
				<stop offset='0.665' stop-color='#F9F8F6' />
				<stop offset='0.825' stop-color='#D4D4D4' />
				<stop offset='1' stop-color='#82A1A4' />
			</linearGradient>
		</defs>
	</svg>
)

export default EcllipseIcon

