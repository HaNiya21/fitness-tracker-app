import axios from "axios";
import { rapidApiKey } from "../constants/bodyParts";

const baseURl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'x-rapidapi-key': rapidApiKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }
        const response = await axios.request(options);
        return response.data;
    }
    catch (error) {
        console.log('error', error);
    }
}

export const fetchExercisesByBodyPart = async (bodyPart) => {
    console.log();
    let data = await apiCall(baseURl+`/exercises/bodyPart/${bodyPart}`);
    return data;
}