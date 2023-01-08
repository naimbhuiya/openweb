


var toggleBtn = document.querySelector(".toggleBtn")
var icon_1 = document.querySelector(".icon-1")
var icon_2 = document.querySelector(".icon-2")


var i = 0 ;

toggleBtn.addEventListener("click" , ()=>{
  i++;

  if(i == 1){
    icon_1.style.display="none";
    icon_2.style.display="inline";
  }else{
    i = 0 ; 
    icon_1.style.display="inline";
    icon_2.style.display="none";
  }


})




/**
 * @author : Md Naim Mzi
 * @date : jan - 02 - 2023
 * 
 */

var heddingTest = ["Web Developer", "Web  Desinger" , "Front-end Developer" , "Back-end Developer" , "Grapich Designer" , "Ui / Ux Designer" , "Optimizer" , "Seo Optimizer" , "Speed Optimizer"];

 const textTransform = document.getElementById("textTransform");


 var count = 0 ;
 setInterval(()=>{
  count++;
  textTransform.innerHTML=`<span class="textTransform" id="textTransform">${heddingTest[count++]}</span>`
   

  if(count >= heddingTest.length){
    count = 0 ;
    textTransform.innerHTML=`<span class="textTransform" id="textTransform">${heddingTest[count++]}</span>`
  }
 
 } , 1500)








/**
 * @author : Md Naim Mizi
 * @date : jan -02 - 2023
 * @What_Work : Our Skills Pogress bar
 */

var pogress_dtls = [
                      {
                      title: "Web Development",
                      width: "90",
                      color: "green"

                      },
                      {
                        title: "Web deigner",
                        width: "90",
                        color: "green"
  
                      },
                      {
                          title: "Ui / Ux Designer",
                          width: "80",
                          color: "#e69b00"
    
                      }
                  ];





let pogressBar = document.querySelector(".pogressBar")

const datas = ()=>{
  pogress_dtls.map((data)=>{
     


    const pogs = document.createElement("div");
                 pogs.className = "pogrs";
    
                 pogressBar.appendChild(pogs)
                 pogs.innerHTML = `
                      <div class="pogress">
                          <div>
                                <span>
                                     <div class="titl_text">
                                     <div class="row">
                                     <div class="col">
                                     ${data.title}
                                     </div>
                                     <div class="col">
                                      <p class="text-end">
                                      ${data.width}
                                      </p>
                                     </div>
                                     </div>
                                      </div>
                                      <div class="pogDiv">
                                        <div class="pogsParsent" style="width:${data.width}%; height: 15px; background: ${data.color};"></div>
                                      </div>
                                </span>
                          </div>
                      </div>
                 `;
  //  const pogsParsent = document.querySelector(".pogsParsent")
  //  pogsParsent.style.width = `${data.width}%`;

  })

  
};
datas();





/**
   * @author : md naim Mizi
   * @edit_date ; 03 - 01 - 2023
   * @title : Diynamic post
   */

var post  = [{
  title: "This is Post Title ",
  imgurl: "https://www.w3schools.com/css/img_forest.jpg"
},{
  title: "This is Post Title ",
  imgurl: "https://www.w3schools.com/css/img_forest.jpg"
},{
  title: "This is Post Title ",
  imgurl: "https://www.w3schools.com/css/img_forest.jpg"
},{
  title: "This is Post Title ",
  imgurl: "https://www.w3schools.com/css/img_forest.jpg"
},{
  title: "This is Post Title ",
  imgurl: "https://www.w3schools.com/css/img_forest.jpg"
},{
  title: "This is Post Title ",
  imgurl: "https://www.w3schools.com/css/img_forest.jpg"
}]

let post_0 = document.querySelector(".blog_div")

var posts = ()=>{
   



   post.map((data)=>{
    const blogs_content = document.createElement("div");
    blogs_content.className = "blogs_content";
    
    post_0.appendChild(blogs_content)



                 blogs_content.innerHTML=`<a href="#">
                 <img src="${data.imgurl}" alt="">
               <p>
                 ${data.title}
               </p>
               </a>`
  })
}

posts()






/**
 * @author : md naim mizi ;
 * @Date : 5-jan-2023 ;
 */



const footer_logo = document.getElementById("footer_logo");
// <span class="color-white">Work</span><span class="color-pink">'S</span>
const logo_mein = document.getElementById("logo-mein") 

const dynaLogo = ()=>{
  const logo = `<span class="color-white">Work</span><span class="color-pink">'S</span>`;
  footer_logo.innerHTML=logo;
  logo_mein.innerHTML=logo;


  const color_white = document.querySelector(".color-white")
  color_white.addEventListener("click" , ()=>{
    window.open(__dirname+"/index.html")
  })
  
};dynaLogo()







/**
 * @author : Md Naim mizi ;
 * @Date : 5 , jan , 2023
 */





var subsCribeInput = document.querySelector(".subsCribeInput")
var subsBtn = document.querySelector("#subsBtn")
var tostmsg = document.querySelector(".tostmsg")
var ptext = document.querySelector(".p-text")

subsBtn.addEventListener("click" , ()=>{
  validSubs(tostmsg , ptext ,  subsCribeInput)
})


function validSubs( tost , tostOpen , subsCribeInput) {
  var errColr = tost.style.color ="#FF0000";

  if(!subsCribeInput.value){
    tost.innerText = "You are enter email";
    tostOpen.style.display="block";
    errColr
  }else if(!isValidEmail(subsCribeInput.value)){
    tost.innerText = "You are enter wrong mail";
    tostOpen.style.display="block";
    errColr
  }else{
    tost.innerText = "You are success!";
    tostOpen.style.display="block";
    tost.style.color ="#00ff00";
  }


}






var myNmae = document.getElementById("myNmae")
var myEmail = document.getElementById("myEmail")
var mySubject = document.getElementById("mySubject")
var formButton = document.getElementById("formButton")
var validTost = document.getElementById("validTost")

formButton.addEventListener("click" , ()=>{
  valid(validTost , validTost , myEmail)
})


function valid( tost , tostOpen , subsCribeInput) {
  var errColr = tost.style.color ="#FF0000";

  if(!subsCribeInput.value){
    tost.innerText = "You are enter email";
    tostOpen.style.display="block";
    errColr
  }else if(!isValidEmail(subsCribeInput.value)){
    tost.innerText = "You are enter wrong mail";
    tostOpen.style.display="block";
    errColr
  }else if(!isValidName(myNmae.value)){
    tost.innerText = "You are enter wrong Name";
    tostOpen.style.display="block";
    errColr;
  }else{
    tost.innerText = "You are success!";
    tostOpen.style.display="block";
    tost.style.color ="#00ff00";
  }

}

function isValidEmail(email) {
  return /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/.test(email)
}


function isValidName(name) {
    return /^[a-zA-Z- ]+$/i.test(name)    
}





// test 

/**
 * 
 * onmousedown="secureBtn(event)
 * 
 * function secureBtn(event) {
  //alert("You pressed button: " + event.button)
  if(event.button == 2){
     console.log("999");
     var errDiv = document.createElement("div")
     errDiv.className="";
     errDiv.innerText="Dont Rogth Click"
     document.appendChild(errDiv)
  }
}


document.addEventListener("contextmenu", function (e){
  // e.preventDefault();

 
}, false);
 * 
 */


