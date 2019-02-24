import axios from 'axios';

const apiBaseUrl = `https://api.datamuse.com/words?rel_rhy=`
const maxRes = `&max=15`

// remember, action creator functions MUST return an object with a property of TYPE (may also include payload)
function fetchRhymes(word) {
    console.log(word);
    const data = axios.get(apiBaseUrl+word+maxRes);
    console.log(data)

    return {
        type: 'GET_RHYMES',
        payload: data
    }
}

export default fetchRhymes;