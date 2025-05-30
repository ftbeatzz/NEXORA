import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from './layouts/MainLayout'
import HomeScreen from './pages/HomeScreen/homeScreen'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MainLayout>
			<HomeScreen />
		</MainLayout>
	</StrictMode>
)
