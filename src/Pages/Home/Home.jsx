import { useState } from "react";
import { SparkiflyLoader } from "../../components/sparkifly_loader/sparkifly_loader"
import { MainHeader } from "../../components/main_header/main_header";
import { SearchHeader } from "../../components/search_header/search_header";
import { Categories } from "../../components/categories/categories";
import { Navigation } from "../../components/navigation/navigation";

export const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 3000)


    return (
        <div className="w-full h-full flex flex-col overflow-y-auto">
            <main className="flex-grow basis-0 overflow-y-auto">
                <SparkiflyLoader loading={isLoading} />
                <MainHeader />
                <SearchHeader />
                <Categories />
            </main>
            <Navigation />
        </div >
    )

}
