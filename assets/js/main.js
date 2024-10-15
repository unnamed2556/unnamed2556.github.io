$(document).ready(function(){


    
    glavnaSlikaAutomaticSlider();
    ispisBrojeva();
    ispisSpecijalnihMenija();
    manuelniSlajder();
    ispisMenija();
    ispisTipaPitanja();
    ispisSocijalnihMedija();
    // getViewportWidth();

    // window.addEventListener('resize', getViewportWidth);

    var offset = 300, 
    offset_opacity = 1200, 
    $back_to_top = $('#bckToTop');


    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $back_to_top.addClass('bckToTop-is-visible');
        } else {
            $back_to_top.removeClass('bckToTop-is-visible bckToTop-fade-out');
        }
        
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('bckToTop-fade-out');
        }
    });

    $back_to_top.on('click', function() {
        $.scrollTo(0, 700);
    });
    





    $(".hover-over-specials").on('click', ispisModala);
                 
    $(".list-group-item-action").on('click', aktivnoDugme);

    $("#dugme-submit").on('click', obradaForme);

    AOS.init();
});

var newBtn;
var formcheck;
var tajmer;
var data;

// function getViewportWidth() {
//     const width = window.innerWidth;
//     console.log(`Current viewport width: ${width}px`);
// }





function glavnaSlikaAutomaticSlider()
{
    var autoSlider="";
    autoSlideshow.forEach((s) => {
        autoSlider +=`<div class="carousel-item ${s.autoSlideStatus}" data-bs-interval="7000">
                  <div class="container-fluid ${s.autoSlideImg} px-0">
                    <div class="col-lg-11 col-xxl-10 col-4xl-9 col-5xl-8 mx-auto" ${s.anim}>
                      <div class="row">
                        <div class="col-10 offset-1 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-7 text-center h-280">
                           <p class="fs-2">${s.autoSlideText}</p>
                           <img class="img-fluid w-60" src="assets/img/divider.svg" alt="divider">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`
    });

    $("#bg-pic .carousel-inner").html(autoSlider);
}

function ispisBrojeva(){
    let br = "";
    brojevi.forEach((b) => {
        br +=`
            <div class="col-8 col-lg-4 my-5 px-4 px-xl-2">
                    <div class="card h-100 text-center bg-transparent border-0">
                      <img src="${b.brojeviImg}" class="card-img-top w-needs align-self-center" alt="${b.brojeviAlt}" data-aos="fade-down" data-aos-once="true" data-aos-easing="ease-out" data-aos-duration="800" data-aos-offset="200">
                      <div class="card-body" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-duration="800" data-aos-offset="200">
                        <h5 class="card-title fw-bold py-2">${b.brojeviNaslovi}</h5>
                        <p class="card-text">${b.brojeviTekst}</p>
                      </div>
                    </div>
                  </div>`
    });
    $("#numbers .row").html(br);
}
    
function ispisSpecijalnihMenija() {
    let specialFood = "";
    data = window.innerWidth;
    let animation="";
    console.log(data);
    month_specials.forEach((special) => {
        if(data<=767){
            animation=special.fade768;
        }
        else if(data >= 768 && data<=1199){
            animation=special.fade992;
        }
        else if(data >= 1200)
        {
            animation=special.fade1200;
        }
        console.log(animation);

        specialFood +=`
            <div id="${special.modalId}" class="col hover-over-specials" data-bs-target="#${special.modalTarget}">
                <div class="row">
                    <div class="col-6 px-0 ${special.order}">
                        <img class="img-fluid" src="${special.foodImg}" alt="${special.foodAlt}">
                    </div>
                    <div class="col-6 px-1 px-lg-3 text-center foodColorGrey">
                        <div class="h-100 d-flex flex-column justify-content-center justify-content-lg-between" data-aos="${animation}" data-aos-once="true" data-aos-easing="ease-out" data-aos-duration="800">
                            <div>
                                <p class="h5 fw-bold my-1 mt-lg-3 mt-xl-1 mt-xxl-3" >${special.foodType}</p>
                                <div class="w-50 mx-auto border-top border-dark mb-1 mb-lg-2"></div>
                            </div>
                            <p class="mb-1 mb-lg-2">${special.foodText}</p>
                            <p class="fw-bold mb-0 mb-lg-2">${special.foodPrice}</p>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    $("#month_special").html(specialFood);
}
    
function ispisModala(){
        var tempList = month_specials.filter(vrednost => this.id == vrednost.modalId);

        var modalHtml =`<div class="modal fade" id="${tempList[0].modalTarget}" tabindex="-1" aria-labelledby="${tempList[0].modalTarget}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="mx-auto">
                            <h1 class="modal-title fs-5 fw-bold mb-2" id="${tempList[0].modalTarget}Label">${tempList[0].foodTitle}</h1>
                            <div class="w-100 border-top border-dark"></div>
                        </div>
                    </div>
                    <div class="modal-body d-flex flex-column align-items-center">
                        <div class="col-7 col-md-6 col-lg-7 col-6xl-9 d-flex justify-content-center">
                            <img class="img-fluid" src="${tempList[0].foodImg}" alt="${tempList[0].foodAlt}">
                        </div>
                        <div class="col-12 mt-4">
                            <p class="text-center">${tempList[0].foodTextExtended}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    
    $(modalHtml).insertAfter("#"+this.id);








    $("#"+tempList[0].modalTarget).modal("show").on('hidden.bs.modal', function () {
        $(this).remove();
    });
}

function manuelniSlajder() {
    let carouselSlides = '';

    manualSlideshow.forEach((s) => {
        carouselSlides+= `<div class="carousel-item ${s.status}">
                  <div id="${s.slideId}" class="about-slide ${s.slideStyle}" style="${s.slidePic}">
                    <div class="col-lg-11 col-xxl-10 col-4xl-9 col-5xl-8 mx-auto py-5">
                      <div class="row justify-content-center justify-content-lg-start">
                        <div class="col-11 col-lg-10 offset-lg-1 col-xxl-7 offset-xxl-0 col-3xl-6 offset-3xl-1 col-5xl-5 offset-5xl-0 text-center">
                          <p class="h2">About us</p>
                          <img class="img-fluid w-50" src="assets/img/divider.svg" alt="divider">
                          <div class="about-text-height pt-5 mb-3" ${s.anim}>
                            <p class="fs-2 mb-0">${s.slideText}</p>
                          </div>
                          <img class="img-fluid m-needs pt-4" src="assets/img/signature.png" alt="signature" ${s.animeSignature}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
    });
    
    $("#about .carousel-inner").html(carouselSlides);
}

function aktivnoDugme(){

    $(".list-group-item-action").removeClass('aktivan');  

    $(this).addClass('aktivan');                         

    newBtn = this.id;                                   

    ispisMenija();                                      
}

function ispisMenija(){

    var odredjena_hrana = menu_food.filter(vrednost => {
        switch(newBtn) {
            case "main_dishes_button":
                return vrednost.foodType === "main_dishes";
            case "desserts_button":
                return vrednost.foodType === "desserts";
            case "drinks_button":
                return vrednost.foodType === "drinks";
            case "starters_button":
            default: 
                return vrednost.foodType === "starters";
        }
    });

    
    var starters_col = `<div id="starters" class="d-flex flex-column flex-lg-row justify-content-start justify-content-lg-between" data-aos="fade-down" data-aos-once="true" data-aos-easing="ease-out" data-aos-duration="1200" data-aos-offset="200">
                            <div class="col-12 col-lg-6 pe-lg-4 ps-0">
                                <table class="table table-responsive table-borderless mb-0 mb-lg-2">
                                <tbody>`;

    odredjena_hrana.forEach((item, index) => {
        starters_col += `<tr class="d-flex mt-1 mt-lg-3">
                            <td><p class="mb-0">${item.foodName}</p></td>
                            <td class="dots flex-grow-1"></td>
                            <td><p>${item.foodPrice}</p></td>
                        </tr>
                        <tr class="h-needs">
                            <td><p class="text-muted fst-italic">${item.foodIngrediants}</p></td>
                        </tr>`;
        
        
        if (index === Math.floor(odredjena_hrana.length / 2) - 1) {
            starters_col += `</tbody></table></div><div class="col-12 col-lg-6 pe-lg-4 ps-0">
                            <table class="table table-responsive table-borderless">
                                <tbody>`;
        }
    });

    starters_col += `</tbody></table></div></div>`;

    
    $("#menu-display").html(starters_col);

}

function ispisTipaPitanja(){
    var temp = `<option selected value="0">Choose the type of question</option>` + 
    tipPitanja.map(tip => `<option value="${tip}">${tip}</option>`).join('');

    $("#typeOfConversation").html(temp);
}

function obradaForme(){
    formcheck=0;
    let $objFirstName, $objLastName, $objEmail, $objConversationType, $objRadio, $objTextArea;

    $objFirstName = $("#firstName");
    $objLastName = $("#surname");
    $objEmail = $("#emailRestaurant");
    $objConversationType=$("#typeOfConversation");
    $objRadio = $('input[name="privatePublic"]');
    $objTextArea=$("#commentTextArea");

    let reFirstLastName, reEmail;

    reFirstLastName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{2,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,14})*$/;

    reEmail= /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.com$/;

    proveraRegularnimIzrazima(reFirstLastName, $objFirstName, "First Name is not in the correct format. Example: <b>John</b>");

    proveraRegularnimIzrazima(reFirstLastName, $objLastName, "Last Name is not in the correct format. Example: <b>Smith</b>");

    proveraRegularnimIzrazima(reEmail, $objEmail, "Email adress is not in the correct format. Example: <b>john.smith33@gmail.com</b>");

    let typeOfQuestionValue = $objConversationType.val();

    if(typeOfQuestionValue == "0"){
        if(data<=1199){
            data="bg-opacity-50";
        }
        else if(data >= 1200)
        {
            data="bg-opacity-25";
        }

        $objConversationType.next().text("Please choose a type of question.").show('fast');

        $objConversationType.removeClass("bg-transparent").addClass("bg-danger").addClass(data);
    }
    else{
        $objConversationType.next().hide('fast').text("");

        $objConversationType.addClass("bg-transparent").removeClass("bg-danger").removeClass(data);

        
        formcheck++;
        
    }

    let statusVrednost = "";
    

    $objRadio.each(function() {
        if ($(this).is(':checked')) {
            statusVrednost = $(this).val();
            return false; 
        }
    });

    
    proveraCekiranihElemenata(statusVrednost, $objRadio, "Please choose if you want this conversation to remain private or become public.");

    if($objTextArea.val().length < 20){
        if(data<=1199){
            data="bg-opacity-50";
        }
        else if(data >= 1200)
        {
            data="bg-opacity-25";
        }

        $objTextArea.next().text("The text needs to be at least 20 characthers long.").show('fast');

        $objTextArea.removeClass("bg-transparent").addClass("bg-danger").addClass(data);   
    }
    else{
        $objTextArea.next().hide('fast').text("");

        $objTextArea.addClass("bg-transparent").removeClass("bg-danger").removeClass(data);
        formcheck++;
    }


    if(formcheck == 6)
    {
        $("#successfullForm").text("Submision has been succesfull!").show('fast');
        
        tajmer= setTimeout(function()
        {
            $("#successfullForm").hide('fast').text("");
        },7000); 
    }  
}

function proveraRegularnimIzrazima(re, $objekat, poruka){
    data=window.innerWidth;
    if(data<=1199){
        data="bg-opacity-50";
    }
    else if(data >= 1200)
    {
        data="bg-opacity-25";
    }
    
    if(!re.test($objekat.val())){
        if($objekat.val() == "")
        {
            $objekat.next().text("The field cannot be left empty!");
        }
        else{
            $objekat.next().html(poruka);
        }
        $objekat.removeClass("bg-transparent").addClass("bg-danger");
        $objekat.addClass(data);

        $objekat.next().show('fast');
    }
    else{
        $objekat.next().hide('fast').text('');
        
        $objekat.removeClass("bg-danger").addClass("bg-transparent");
        $objekat.removeClass(data);
       
        formcheck++;
    }
}

function proveraCekiranihElemenata(vrednostCekiranihElemenata, $niz, poruka) {
    data=window.innerWidth;
    if(data<=1199){
        data="bg-opacity-50";
    }
    else if(data >= 1200)
    {
        data="bg-opacity-25";
    }
    
    let $errorMessage = $niz.eq(0).parent().parent().next('p'); 
    
    if (vrednostCekiranihElemenata == "") {
        $errorMessage.text(poruka).show('fast');
        $niz.eq(0).parent().parent().addClass("bg-danger py-3");
        $niz.eq(0).parent().parent().addClass(data);
    } else {
        $errorMessage.hide('fast').text("");
        $niz.eq(0).parent().parent().removeClass("bg-danger py-3");
        $niz.eq(0).parent().parent().removeClass(data);
        formcheck++;
    }
}

function ispisSocijalnihMedija()
{
    let social = "";
    socialMedija.forEach((s) => {
        social +=`
            <div class="col d-flex justify-content-center p-0 ${s.offSet}">
                      <a href="${s.link}" target="_blank">
                        ${s.sprite}
                      </a>
                    </div>`
    });
    $("#social-media").html(social);
}


const autoSlideshow =[
    {
        autoSlideImg:"bg-picture1",
        autoSlideText:"Fresh, vibrant, and delicious, our menu is inspired by seasonal ingredients and a passion for sustainable eating",
        autoSlideStatus:"active",
        anim:'data-aos="fade-left" data-aos-once="true" data-aos-easing="ease-in-out" data-aos-duration="1000"',
    },
    {
        autoSlideImg:"bg-picture2",
        autoSlideText:"From farm to table, every dish is crafted with care, bringing you the best of local and organic flavors",
        autoSlideStatus:"",
        anim:"",
    }
]

const brojevi=[
    {
        brojeviImg:"assets/img/icon-vege.svg",
        brojeviAlt:"Basket of Vegetables",
        brojeviNaslovi:"LOCALLY SOURCED",
        brojeviTekst:"Our restaurant proudly serves dishes made with locally sourced ingredients, supporting nearby farmers and ensuring the freshest flavors in every bite."
    },
    {
        brojeviImg:"assets/img/icon-coffee.svg",
        brojeviAlt:"Bowl of water",
        brojeviNaslovi:"SPRING WATER",
        brojeviTekst:"We offer refreshing, locally sourced sustainable spring water, bringing the pure taste of nature right to your table."
    },
    {
        brojeviImg:"assets/img/icon-sweet.svg",
        brojeviAlt:"Cup cake",
        brojeviNaslovi:"PLANT BASED DESSERTS",
        brojeviTekst:"Our vegan desserts are crafted with plant-based ingredients, delivering indulgent flavors without compromising on quality or sustainability."
    }
]

const month_specials=[
    {
        foodImg:"assets/img/special-1-hd.png",
        foodAlt:"bowl of salad",
        foodType:"Starter",
        foodTitle:"Green leaf salad with sourdough",
        foodText:"Try our delicious Green leaf salad with sourdough as a starter",
        foodTextExtended:"Our Green Leaf Salad features a vibrant mix of fresh, crisp greens tossed with a light, zesty vinaigrette that enhances their natural flavors. Accompanied by warm, artisanal sourdough bread, this starter is the perfect way to kick off your meal with a refreshing and wholesome touch.",
        foodPrice:"3$",
        modalTarget:"salad1",
        modalId:"meal-1",
        order:"order-0",
        fade1200:"fade-right",
        fade992:"fade-right",
        fade768:"fade-right"
    },
    {
        foodImg:"assets/img/special-2-hd.png",
        foodAlt:"bowl of broth",
        foodType:"Main dish",
        foodTitle:"Mushroom and Garlic Soup",
        foodText:"Grab a bowl of our steaming Mushroom and garlic soup",
        foodTextExtended:"Indulge in our rich Mushroom and Garlic Soup, a comforting blend of earthy mushrooms simmered with aromatic garlic for a deep, savory flavor. Finished with a drizzle of truffle oil and a sprinkle of fresh herbs, this hearty dish is perfect for warming the soul.",
        foodPrice:"10$",
        modalTarget:"broth1",
        modalId:"meal-2",
        order:"order-1 order-md-0",
        fade1200:"fade-right",
        fade992:"fade-right",
        fade768:"fade-left"
    },
    {
        foodImg:"assets/img/special-3-hd.png",
        foodAlt:"bowl of salad",
        foodType:"Main dish",
        foodTitle:"Vegan Caesar salad with eggplant",
        foodText:"One of our favorites, the Vegan Caesar salad with eggplant",
        foodTextExtended:"Savor our Vegan Caesar Salad, featuring crisp romaine lettuce tossed in a creamy, house-made dressing with a delightful hint of garlic and lemon. Topped with roasted eggplant for a smoky flavor and finished with crunchy croutons and a sprinkle of nutritional yeast, this salad is a delicious twist on a classic favorite",
        foodPrice:"12$",
        modalTarget:"salad2",
        modalId:"meal-3",
        order:"order-0 order-md-1 order-xl-0",
        fade1200:"fade-right",
        fade992:"fade-left",
        fade768:"fade-right"
    },
    {
        foodImg:"assets/img/special-4-hd.png",
        foodAlt:"cake on a plate",
        foodType:"Dessert",
        foodTitle:"Vanilla chessecake",
        foodText:"If you like cake, this Vanilla cheesecake is a must try",
        foodTextExtended:"Indulge in our Vanilla Cheesecake, a silky-smooth treat made with rich vegan cream cheese and infused with pure vanilla. Set on a buttery, crumbly crust and topped with a luscious fruit compote, this dessert is the perfect sweet ending to your meal",
        foodPrice:"9$",
        modalTarget:"cake1",
        modalId:"meal-4",
        order:" order-1",
        fade1200:"fade-left",
        fade992:"fade-left",
        fade768:"fade-left"
    },
    {
        foodImg:"assets/img/special-5-hd.png",
        foodAlt:"donut",
        foodType:"Dessert",
        foodTitle:"Chocolate sprinkle donut",
        foodText:"If you like a classic definitely try our chocolate donut",
        foodTextExtended:"Savor our Chocolate Sprinkle Donut, a delightful treat that boasts a fluffy texture and is filled with rich cacao cream. Topped with colorful sprinkles, it's a playful and indulgent dessert that's sure to satisfy your sweet tooth",
        foodPrice:"5$",
        modalTarget:"donut1",
        modalId:"meal-5",
        order:"order-0 order-xl-1",
        fade1200:"fade-left",
        fade992:"fade-right",
        fade768:"fade-right"
    },
    {
        foodImg:"assets/img/special-6-hd.png",
        foodAlt:"watermelon drink",
        foodType:"Drink",
        foodTitle:"Watermelon party",
        foodText:"Have a drink of our refreshing watermelon lemon lime cocktail",
        foodTextExtended:"Quench your thirst with our Watermelon Lemon Lime Cocktail, a refreshing blend that perfectly balances sweet watermelon with zesty lemon and lime. This vibrant drink is garnished with a slice of fresh watermelon, making it a delightful choice for any occasion",
        foodPrice:"11$",
        modalTarget:"watermelon1",
        modalId:"meal-6",
        order:"order-1 order-md-0 order-xl-1",
        fade1200:"fade-left",
        fade992:"fade-right",
        fade768:"fade-left"
    }
]

const manualSlideshow = [
    {
        slideId:"about-slide-1",
        slidePic:"background-image:url('/assets/img/beans.png');",
        slideStyle:"manualSliderPicPosition1",
        slideText:"Our restaurant is dedicated to creating delicious vegan dishes that celebrate fresh, local ingredients. We believe in sustainability and support local farmers to source our produce.",
        status:"active",
        anim:'data-aos="fade" data-aos-once="true" data-aos-easing="ease-out" data-aos-duration="1200"',
        animeSignature:'data-aos="fade-left" data-aos-once="true" data-aos-easing="ease-out" data-aos-duration="800"'
    },
    {
        slideId:"about-slide-2",
        slidePic:"background-image:url('/assets/img/fruit_bowl_800.png');",
        slideStyle:"manualSliderPicPosition2",
        slideText:"Our menu features innovative recipes that bring together flavors from around the world. We aim to provide a welcoming atmosphere where everyone can enjoy plant-based cuisine.",
        status:"",
        anim:"",
        animeSignature:""
    },
    {
        slideId:"about-slide-3",
        slidePic:"background-image:url('/assets/img/spaget.png');",
        slideStyle:"manualSliderPicPosition3",
        slideText:"We are passionate about promoting a healthy lifestyle and raising awareness about plant-based eating. Our team is committed to making every visit a great experiance.",
        status:"",
        anim:"",
        animeSignature:""
    }
];

const menu_food=
[
    {
        foodName: "GREEN LEAF SALAD WITH SOURDOUGH",
        foodIngrediants: "mixed greens, cucumber, avocado, sourdough bread",
        foodPrice: "$3",
        foodType: "starters"
    },
    {
        foodName: "ROASTED BEET HUMMUS WITH PITA",
        foodIngrediants: "roasted beets, tahini, garlic, warm pita bread",
        foodPrice: "$3",
        foodType: "starters"
    },
    {
        foodName: "GRILLED ASPARAGUS WITH LEMON TAHINI",
        foodIngrediants: "grilled asparagus, lemon, tahini sauce, pine nuts",
        foodPrice: "$5",
        foodType: "starters"
    },
    {
        foodName: "AVOCADO TOAST WITH RADISH AND HERBS",
        foodIngrediants: "avocado, radish, fresh herbs, olive oil",
        foodPrice: "$7",
        foodType: "starters"
    },
    {
        foodName: "STUFFED MUSHROOMS WITH CRUMBS",
        foodIngrediants: "mushrooms, garlic, parsley, breadcrumbs,cheese",
        foodPrice: "$8",
        foodType: "starters"
    },
    {
        foodName: "ZUCCHINI FRITTERS WITH LEMON AIOLI",
        foodIngrediants: "zucchini, chickpea flour, garlic, lemon aioli",
        foodPrice: "$9",
        foodType: "starters"
    }
    ,
    {
        foodName: "MUSHROOM AND GARLIC SOUP",
        foodIngrediants: "shiitake mushrooms, vegetable broth, garlic, thyme, coconut cream",
        foodPrice: "$10",
        foodType: "main_dishes"
    },
    {
        foodName: "VEGAN CAESAR SALAD WITH PURPLE CABBAGE",
        foodIngrediants: "romaine lettuce, purple cabbage, croutons, vegan parmesan, Caesar dressing",
        foodPrice: "$12",
        foodType: "main_dishes"
    },
    {
        foodName: "SPICY THAI NOODLE BOWL",
        foodIngrediants: "rice noodles, bell peppers, carrots, cilantro, peanut sauce",
        foodPrice: "$15",
        foodType: "main_dishes"
    },
    {
        foodName: "LENTIL CURRY WITH RICE",
        foodIngrediants: "red lentils, coconut milk, spinach, curry spices, basmati rice",
        foodPrice: "$17",
        foodType: "main_dishes"
    },
    {
        foodName: "ROASTED VEGETABLE QUINOA BOWL",
        foodIngrediants: "quinoa, roasted zucchini, bell peppers, chickpeas, tahini dressing",
        foodPrice: "$18",
        foodType: "main_dishes"
    },
    {
        foodName: "STUFFED BELL PEPPERS",
        foodIngrediants: "bell peppers, brown rice, black beans, corn, salsa",
        foodPrice: "$20",
        foodType: "main_dishes"
    },
    {
        foodName: "SPAGHETTI AGLIO E OLIO",
        foodIngrediants: "spaghetti, garlic, olive oil, chili flakes, parsley",
        foodPrice: "$21",
        foodType: "main_dishes"
    },
    {
        foodName: "VEGAN BURGER WITH SWEET POTATO FRIES",
        foodIngrediants: "black bean burger, whole grain bun, lettuce, tomato, sweet potato fries",
        foodPrice: "$23",
        foodType: "main_dishes"
    },
    {
        foodName: "CHICKPEA AND SPINACH STEW",
        foodIngrediants: "chickpeas, spinach, tomatoes, cumin, served with crusty bread",
        foodPrice: "$26",
        foodType: "main_dishes"
    },
    {
        foodName: "VEGETABLE STIR-FRY WITH TOFU",
        foodIngrediants: "mixed vegetables, tofu, soy sauce, ginger, sesame seeds",
        foodPrice: "$27",
        foodType: "main_dishes"
    },
    {
        foodName: "POTATO AND KALE HASH",
        foodIngrediants: "potatoes, kale, onions, garlic, smoked paprika",
        foodPrice: "$29",
        foodType: "main_dishes"
    },
    {
        foodName: "BUTTERNUT SQUASH RISOTTO",
        foodIngrediants: "arborio rice, butternut squash, vegetable broth, nutritional yeast, sage",
        foodPrice: "$30",
        foodType: "main_dishes"
    }
    ,
    {
        foodName: "CHOCOLATE SPRINKLE DONUT",
        foodIngrediants: "flour, cocoa powder, almond milk, coconut oil, sprinkles",
        foodPrice: "$5",
        foodType: "desserts"
    },
    {
        foodName: "PEACH SLICES WITH COCONUT ICEREAM",
        foodIngrediants: "fresh peaches, lemon juice, cocnut icecream",
        foodPrice: "$7",
        foodType: "desserts"
    },
    {
        foodName: "VANILLA CHESSECAKE",
        foodIngrediants: "flour, almond milk, vanilla extract, cocoa powder, coconut cream",
        foodPrice: "$9",
        foodType: "desserts"
    },
    {
        foodName: "RAW CACAO BROWNIE BITES",
        foodIngrediants: "dates, walnuts, raw cacao powder, almond butter, sea salt",
        foodPrice: "$12",
        foodType: "desserts"
    },
    {
        foodName: "FRESH SPRING WATER",
        foodIngrediants: "water, ice",
        foodPrice: "$3",
        foodType: "drinks"
    },
    {
        foodName: "FRESH LEMONADE",
        foodIngrediants: "lemons, water, agave syrup, mint",
        foodPrice: "$5",
        foodType: "drinks"
    },
    {
        foodName: "HIBISCUS ICED TEA",
        foodIngrediants: "hibiscus tea, lemon juice, agave syrup, ice",
        foodPrice: "$6",
        foodType: "drinks"
    },
    {
        foodName: "COCONUT WATER FIZZ",
        foodIngrediants: "coconut water, sparkling water, lime juice, mint",
        foodPrice: "$8",
        foodType: "drinks"
    },
    {
        foodName: "WATERMELON COCKTAIL",
        foodIngrediants: "watermelon juice, vodka, lime juice, mint",
        foodPrice: "$11",
        foodType: "drinks"
    },
    {
        foodName: "MANGO MARGARITA",
        foodIngrediants: "mango puree, tequila, lime juice, agave syrup, salt rim",
        foodPrice: "$12",
        foodType: "drinks"
    },
    {
        foodName: "VODKA SELTZER",
        foodIngrediants: "vodka, sparkling water, lemon wedge",
        foodPrice: "$16",
        foodType: "drinks"
    },
    {
        foodName: "LONG ISLAND ICED TEA",
        foodIngrediants: "vodka, tequila, rum, gin, triple sec, lemon juice, cola",
        foodPrice: "$18",
        foodType: "drinks"
    }
]

const tipPitanja =["Suggestion", "Complaint", "Review", "Question", "Marketing"];

const socialMedija =[
    {
        offSet:"",
        link:"https://www.instagram.com",
        sprite:`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>`,
    },
    {
        offSet:"",
        link:"https://www.facebook.com",
        sprite:`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-meta" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"/>
                        </svg>`,
    },
    {
        offSet:"",
        link:"https://x.com",
        sprite:`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>`,
    },
    {
        offSet:"",
        link:"#",
        sprite:`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                        </svg>`,
    },
    {
        offSet:"",
        link:"#",
        sprite:`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-rss-fill" viewBox="0 0 16 16">
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2m0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2m.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                        </svg>`,
    },
    {
        offSet:"",
        link:"#",
        sprite:`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                        </svg>`,
    },

]