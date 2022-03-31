async function fetchPokemon() {
 let url ="https://pokeapi.co/api/v2/pokemon/"+document.getElementById('input').value.toLowerCase();
     fetch(url)
     const response = await fetch(url);
     if (!response.ok){
         let Error=   `
     <h3>
     The pokemon you were looking for does not exist <i class='fa-solid fa-face-sad-cry'></i>

      </h3>`;
    document.getElementById("Stats").innerHTML = Error;}
     var data = await response.json();
     console.log(data);
    show(data);
    
   
}

const EvList = document.querySelector("#input");
EvList.addEventListener('keyup', function(event) {
    if (event.keyCode == 13){
    fetchPokemon();
    }});



function show(data) {
    let id =data.id;
    let urlImage= 
    '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png" />';
    let tab = urlImage+
        `
      
        <br>
        Abilities:
        <tr>

          <th></th>
         
         </tr>`;

      // Loop to access all rows 
      for (let r of data.abilities) {
        tab += 
    `<tr> 
            
       <td>${r.ability.name} </td>
    
        
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("Stats").innerHTML = tab;
}
