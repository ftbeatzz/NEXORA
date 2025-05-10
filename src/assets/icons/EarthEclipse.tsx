import type { SVGProps } from 'react'
import { forwardRef } from 'react'

const EarthEclipse = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
	(props, ref) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='239'
			height='470'
			viewBox='0 0 239 470'
			fill='none'
			ref={ref}
			{...props}
		>
			<path
				d='M3.7431 467C131.946 467 235.875 363.13 235.875 235C235.875 106.87 131.946 3 3.7431 3'
				stroke='url(#paint0_linear_1_5927)'
				strokeWidth='6'
				strokeLinecap='round'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_1_5927'
					x1='-55.0403'
					y1='212'
					x2='274.147'
					y2='214.503'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0%' stopColor='#0A7CFF' stopOpacity='0.4' />
					<stop offset='100%' stopColor='#0A7CFF' stopOpacity='0.6' />
				</linearGradient>
			</defs>
		</svg>
	)
)

export default EarthEclipse
