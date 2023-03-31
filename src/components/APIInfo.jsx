import React from 'react';
import axiosCreate from "../config/axios.cofig";
import { useQuery } from 'react-query';

export default function APIInfo({ value }) {

    // api request handling
    const fetchGases = async () => {
        try {
            const response = await axiosCreate.get();
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    // api data fetching
    const { data, isLoading, error, status } = useQuery(
        "gasName",
        fetchGases
    );

    console.log("Gas: ", value)
    console.log(typeof (value));
    console.log("concentration: ", data && data[value].concentration);

    return (
        <>
            {isLoading && <p>Loading...</p>}

            {error && <p>Error: </p>}

            {status === "success" && (
                <>
                    <h1>Hello World!</h1>
                    <h3>Concentration of {value} is: {data[value].concentration}</h3>
                </>
            )}
        </>
    )
}
