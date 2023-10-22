let contact = [
    {
        imgs:'./images/TANVIR.jpg',
        name: "Tanvirul Islam",
        number: 01625568609,
        id: "FD-1902035"
    },
    {
        imgs:'./images/tarek.jpg',
        name: "Rezaul Islam",
        number: 01625568609,
        id: "FD-1902031"
    },

    {
        imgs:'./images/tasrif.jpg',
        name: "Nurain Tasrif",
        number: 01625568609,
        id: "FD-1902030"
    },

    {
        imgs:'./images/tanvir2.jpg',
        name: "Karim Khan",
        number: 016289958604,
        id: "FD-1902033"
    },

    {
        imgs:'./images/tanvir3.jpg',
        name: "Rahim Miah",
        number: 016289953564,
        id: "FD-1902037"
    }
    
];

let wrapperDiv = document.createElement("div");
wrapperDiv.className = "wrapper";
document.body.appendChild(wrapperDiv);

contact.forEach(function(item){

    
    
        let cardDiv = document.createElement("div");
        cardDiv.className = 'card';
    
            let imgDiv = document.createElement("div");
            imgDiv.className = 'profile';
                let profile = document.createElement("img");
                profile.className = "profilePhoto";
                    profile.src = item.imgs;
                imgDiv.appendChild(profile);
            cardDiv.appendChild(imgDiv); 

            let cntDiv = document.createElement("div");
            cntDiv.className = 'content';
            cardDiv.appendChild(cntDiv); 


                let headingDiv = document.createElement("h1")
                headingDiv.classList = 'name';
                    headingDiv.innerHTML = item.name;
                cntDiv.appendChild(headingDiv);

                let numberDiv = document.createElement("h3")
                numberDiv.classList = 'number';
                    numberDiv.innerHTML = item.number;
                cntDiv.appendChild(numberDiv);

                let idDiv = document.createElement("h3")
                idDiv.classList = 'id';
                    idDiv.innerHTML = item.id;
            cntDiv.appendChild(idDiv);


            cardDiv.appendChild(cntDiv); 
            wrapperDiv.appendChild(cardDiv); 


});



   



