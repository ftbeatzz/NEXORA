import type { SVGProps } from 'react'

const BurgerMenu = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='29'
		height='20'
		viewBox='0 0 29 20'
		fill='none'
		{...props}
	>
		<path
			d='M27 2.40588H2'
			stroke='white'
			stroke-width='3.33809'
			stroke-linecap='round'
		/>
		<path
			d='M27 10.0001H9.5'
			stroke='white'
			stroke-width='3.33809'
			stroke-linecap='round'
		/>
		<path
			d='M27 17.5941H18.25'
			stroke='white'
			stroke-width='3.33809'
			stroke-linecap='round'
		/>
	</svg>
)

export default BurgerMenu
