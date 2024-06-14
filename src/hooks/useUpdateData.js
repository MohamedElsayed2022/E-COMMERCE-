import baseUrl from "../Api/baseUrl";
const useUpdateData = async(url , params )=>{
   const res =await baseUrl.post(url , params )
   return res
}
const useUpdateDataWithImage = async(url , params )=>{
    const config = {
        headers : {"Content-Type" : "multipart/form-data"}
    } 
    const res =await baseUrl.put(url , params , config )
    return res
 }
export { useUpdateData , useUpdateDataWithImage }