export default {
    query : "",
    page : 1,
    per_page : 12,
    APIkey : "22369623-edd43be12dfa9e950e5b9828c",
    BaseUrl : "https://pixabay.com/api/",
    async fetchArticles() {
        try{
         const response = await fetch(`${this.BaseUrl}?key=${this.APIkey}&q=${this.query}&page=${this.page}&per_page=${this.per_page}?`)
         this.page +=1;
        

        return await response.json();
        }
        catch(error){
            toastr.error(error)
        }
     },
     get searchQuery() {
        return  this.query ;
     },
     set searchQuery(string){
         this.query = string;
     },
     resetPage(){
         this.page = 1;
     }
}




// export default {
//     page: 1,
//     fetchArticles(query){
//         const options = {
//             headers : {
//                 Authorization : '22369623-edd43be12dfa9e950e5b9828c'
//             },
//         };
//         const params = `&q=${query}&image_type=photo`

//         fetch(baseUrl + params , options )
//         .then(response => response.json())
//         .then(data => {
//                 console.log(data)
//             });
        
//     },    
// };
// //https://pixabay.com/api/?key=22369623-edd43be12dfa9e950e5b9828c&q=yellow+flowers&image_type=photo