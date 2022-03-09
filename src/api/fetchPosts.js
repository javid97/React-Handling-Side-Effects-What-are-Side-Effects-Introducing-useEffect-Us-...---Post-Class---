const API_URL = "https://jsonplaceholder.typicode.com/posts?_page=";
const fetchPosts = async (page) => {
    try{
        const response = await fetch(`${API_URL}${page}&_limit=5`);
        if(!response.ok) throw Error("Wrong Url");
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

export default fetchPosts;