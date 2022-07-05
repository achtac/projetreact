
import "../style/App.css"
import  elem from "./image/elem.png"
import "https://kit.fontawesome.com/3b9af339fb.js"

 function Affichemenu(){




 return (

        <div id="affichemain">

           <div id="searchbar">


   <h2> Obtenez Tout du Savoir Ici </h2>
             <div id="reach">
              <input type="search" placeholder="entrer un mot ici" id="rechercher" />
              <button><i class="fas fa-search"> </i> </button>
              </div>
           </div>
               <img src={elem}/>


        </div>



 )



 }

export default Affichemenu;
