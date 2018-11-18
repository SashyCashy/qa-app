import React from 'react';
import axios from "axios";


    static getJSONAsync(){
    return fetch('http://localhost:8081/')
        .then(response => response.json())
        .then(data => this.setState({ data }));

    }



export default getJSONAsync;