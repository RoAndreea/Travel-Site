class Review {
    constructor(name, text) {
        this.name = name;
        this.text = text;
    }
}

class ReviewSection {

    constructor() {
        this.reviews = [new Review("David","Londra este o destinatie de vis. Sunt multe locuri de vizitat: Big Ben, Acvariul Londrei, Temnitele Londrei, London Eye, Magazinul M&Ms, Muzeul Britanic!"),new Review("Raluca","Recomand cu caldura Parisul, un oras plin de viata si romantism. O mia lista de itinerarii: Turnul Effel, Muzeul Luvru, Arcul de Triumf, Castelul Versailles")];
    }

    addReview (review) {
        this.reviews.push(review); 
       
        //create the text nodes
        let authorText = document.createTextNode("Nume: " + review.name);
        let messageText = document.createTextNode(review.text);
        
        //new article
        let newArticle = document.createElement("article");
        newArticle.className = "review";

        //div for name
        let newNameDiv = document.createElement("div");
        newNameDiv.className = "review__name";
        newNameDiv.appendChild(authorText);

        //div for text
        let newMessageDiv = document.createElement("div");
        newMessageDiv.className = "review__text";
        newMessageDiv.appendChild(messageText);

        //add both divs as children of the article
        newArticle.appendChild(newNameDiv);
        newArticle.appendChild(newMessageDiv);

        //add it to the review section
        document.getElementById("reviews").appendChild(newArticle);

        this.fadeLastAdded();
    }

    // DEPRECATED | used just as a seed for initial data
    updateReviewSection () {
        document.getElementById("reviews").innerHTML = "<h2>Sugestiile voastre</h2>\n";
        this.reviews.forEach(r => {
            document.getElementById("reviews").innerHTML +=
                '<article class="review"><div class="review__name">Nume: '+
                r.name +
                '</div><div class="review__text">' +
                r.text +
                '</div></article>';
        });
    }

    fadeLastAdded () {
        let reviews = document.getElementsByClassName("review");
        let target = reviews[reviews.length-1];
        target.style.opacity = 0;
        setTimeout(() => {target.style.opacity = 1;}, 100);

    }
    
}

let reviewSection = 0;

window.onload = () => {
    //instantiere ReviewSection
    reviewSection = new ReviewSection();

    //update reviews based on data, regardless of html
    // DEPRECATED | used just as a seed for initial data
    reviewSection.updateReviewSection();

    //adaugare listener on form submit
    document.getElementById("review-form").addEventListener("submit", (event) => {
        event.preventDefault();
        let nameValue = document.getElementById("review-form__name").value;
        let textValue = document.getElementById("review-form__text").value;
        reviewSection.addReview(new Review(nameValue, textValue));
        document.getElementById("review-form__name").value = "";
        document.getElementById("review-form__text").value = "";
    });
}
