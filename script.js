fetch("https://rickandmortyapi.com/api/episode", {
        method: "GET",
      }) // I will use this fuction for API
        .then((response) => response.json()) // Resposta Resolved
        /*.then((json) => console.log(json)); // printing in the index */
        .then(functin(json){

        var containerCard = document.queryselector('containerCard');

        })