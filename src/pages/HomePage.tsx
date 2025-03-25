import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Добро пожаловать!</h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Начните работу с нашим сервисом</h2>
                        <div className="flex justify-center space-x-4 mt-6">
                            <Link
                                to="/login"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Войти
                            </Link>
                            <Link
                                to="/register"
                                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                            >
                                Регистрация
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};