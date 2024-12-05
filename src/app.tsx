
import Menu from './assets/components/menu-mobile';
import AppRoutes from './routes/AppRoutes';

export default function App() {
    return (
        <>
            <Menu/>
            <main>
                <AppRoutes /> 
            </main>
        </>
    )
}