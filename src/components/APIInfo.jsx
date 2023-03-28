import axios from "axios";
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function APIInfo() {
    const [post, setPost] = useState("");

    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        });
    }, []);

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}
