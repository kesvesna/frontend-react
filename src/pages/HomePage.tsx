import { Link } from 'react-router-dom';
import { Navbar} from "../assets/Navbar.tsx";

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Главная
                </h2>
            </div>
        </div>
    );
};