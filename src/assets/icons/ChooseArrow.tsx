import type { SVGProps } from 'react'

const ChooseArrow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1274'
		height='143'
		viewBox='0 0 1274 143'
		fill='none'
		{...props}
	>
		<path
			d='M1 29.8173L1 11.0554C1 4.88163 6.53906 0.18269 12.6302 1.18915L628.704 102.985C629.774 103.162 630.866 103.163 631.936 102.989L1261.4 0.795312C1267.48 -0.192232 1273 4.50369 1273 10.6661L1273 29.0881C1273 33.9924 1269.44 38.1729 1264.6 38.9589L631.934 141.674C630.865 141.847 629.775 141.846 628.706 141.67L9.37512 39.6844C4.54443 38.8889 1 34.713 1 29.8173Z'
			fill='url(#paintFill)'
			fillOpacity='0.5'
		/>
		<path
			d='M1 29.8173L1 11.0554C1 4.88163 6.53906 0.18269 12.6302 1.18915L628.704 102.985C629.774 103.162 630.866 103.163 631.936 102.989L1261.4 0.795312C1267.48 -0.192232 1273 4.50369 1273 10.6661L1273 29.0881C1273 33.9924 1269.44 38.1729 1264.6 38.9589L631.934 141.674C630.865 141.847 629.775 141.846 628.706 141.67L9.37512 39.6844C4.54443 38.8889 1 34.713 1 29.8173Z'
			stroke='url(#paintStroke)'
		/>
		<defs>
			<linearGradient
				id='paintFill'
				x1='0'
				y1='0'
				x2='1'
				y2='0'
				gradientUnits='objectBoundingBox'
			>
				<stop offset='0%' stopColor='#0A7CFF' />
				<stop offset='50%' stopColor='#00C6FF' />
				<stop offset='100%' stopColor='#0072FF' />
				<animateTransform
					attributeName='gradientTransform'
					type='translate'
					from='-1 0'
					to='1 0'
					dur='2s'
					repeatCount='indefinite'
				/>
			</linearGradient>

			<linearGradient
				id='paintStroke'
				x1='0'
				y1='0'
				x2='1'
				y2='0'
				gradientUnits='objectBoundingBox'
			>
				<stop offset='0%' stopColor='#0A7CFF' />
				<stop offset='50%' stopColor='#00C6FF' />
				<stop offset='100%' stopColor='#0072FF' />
				<animateTransform
					attributeName='gradientTransform'
					type='translate'
					from='-1 0'
					to='1 0'
					dur='4s'
					repeatCount='indefinite'
				/>
			</linearGradient>
		</defs>
	</svg>
)

export default ChooseArrow
