import { Layout} from "../components/Layout.tsx";

export const HomePage = () => {
    return (
        <Layout>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Главная
                </h2>
            </div>
        </Layout>
    );
};