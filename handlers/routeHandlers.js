import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

//HandleGet

export async function handelGet(res){
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res,200,'application/json',content)
}

//HandelPost 
/**
 Collect the incomming data 
 parse it 
 Senitize it 
 Get our existing data 
 Add the new data to the existing data 
 write the completed data to the JSON file 

 parseJSONBody() will collect and parse the incoming JSON
 santizeData()
 addNewSighting() will do the donkeyt work of adding the data to our dataset
 sendResponse()
 */

 export async function HandelPost(res) {
    console.log('POST request received ')
 }

