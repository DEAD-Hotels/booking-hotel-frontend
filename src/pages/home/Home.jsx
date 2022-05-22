import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import Header from "../../components/header/Header";

export const Home = () => {
    return (
        <div>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Поиск по типу размещения</h1>
                <PropertyList/>
            </div>
        </div>
    )
}