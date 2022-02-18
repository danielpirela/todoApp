import { AppRouter } from './routers/AppRouter'
import { AuthProvider} from './auth/AuthProvider'

const App = () => {
    return (
        <div className="h-screen w-full flex justify-center overflowx-hidden">
            <div className="w-[90%]">
               
                    <AppRouter/>
               
            </div>
        </div>
)}

export {App}