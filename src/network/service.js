import { BASEURL } from "../settings/config";

export const fetchGet = async (body) => {
    try{
        let headers = {
            'Accept': 'application/json'
        };
        let urlParam = Object.entries(body).map(e => e.join('=')).join('&');
        console.log( `${BASEURL}${urlParam}`);
        let response = await fetch( `${BASEURL}${urlParam}`, {
        method: "GET"
        });
        let json = await response.json();
        return json;
    }catch (error){
        console.log(error);
        // DO SOMETHING
    }
    
}