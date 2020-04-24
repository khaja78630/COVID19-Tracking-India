import React, {useEffect, useState} from "react";

import "./App.css";

function App() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({error: false, errorDsc: ""});

    useEffect(() => {
        console.log("use effect");
        setLoading(true);
        fetch("https://covid19.mathdro.id/api/countries/India").then((response) => {
            return response.json();
        }).then((data) => {
            setLoading(false);
            setData(data);
            console.log(data);
        }).catch((error) => {
            // setLoading(false);
            // setError({})
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h2>COVID 19 Tracking India</h2>
                <div> {
                    loading ? <h4>Loading..</h4> : null
                }

                    {
                    !loading && Object.keys(data).length ? (
                        <div>
                            <h4>
                                <span>Confirmed :
                                </span>
                                {
                                data.confirmed.value
                            } </h4>
                            <h4>
                                <span>Recovered :</span>
                                {
                                data.recovered.value
                            } </h4>
                            <h4>
                                <span>Deaths :
                                </span>
                                {
                                data.deaths.value
                            } </h4>
                        </div>
                    ) : null
                } </div>
                {
                !loading && Object.keys(data).length ? (
                    <div>
                        <h4>Last Update: {
                            new Date(data.lastUpdate).toString()
                        }</h4>
                    </div>
                ) : null
            } </header>
            <div></div>
        </div>
    );
}

export default App;
