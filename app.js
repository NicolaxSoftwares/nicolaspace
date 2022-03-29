async function fetchPokemon() {
 let url ="https://pokeapi.co/api/v2/pokemon/"+document.getElementById('input').value
     fetch(url)
     const response = await fetch(url);
     var data = await response.json();
     console.log(data);
    show(data);
    
   
}
function show(data) {

    let tab = 
        `
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
