import "./Featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
    const {data, loading, error} = useFetch("http://localhost:8081/hotels/countByCity");
    return (
        <div className="featured container">
            {loading ?
                ("Loading, pls wait")
                : (
                    <>
                        {
                            data.map((city, key) =>
                                <div className="featuredItem">
                                    <img
                                        src={city.cityName === 'Москва' ?
                                        ("https://t-cf.bstatic.com/xdata/images/city/square250/619986.webp?k=b207fb9d5bd46701d8d5cfaa76eb988cc57394e3d4a6df0a261d5b3c322f0a0f&o=")
                                        :
                                        "https://media.istockphoto.com/photos/singapore-skyline-at-marina-bay-at-twilight-with-glowing-sunset-the-picture-id1176969551?k=20&m=1176969551&s=612x612&w=0&h=15amOa-t2T-loGyxcMBK2e0mHrHmpD1NFx9f1KQ6uXU="
                                        }
                                        alt=""
                                        className="featuredImg"
                                    />
                                    <div className="featuredTitles">
                                        <h1 className="featuredTitleCity">{city.cityName}</h1>
                                        <span className="featuredTitleDesc">{city.numberOfCities} варинтов размещения</span>
                                    </div>
                                </div>
                            )
                        }
                    </>)
            }
        </div>
    );
};

export default Featured;