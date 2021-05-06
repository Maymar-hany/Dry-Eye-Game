
var compined={
  'amino+hyaluronic':'images/hyalfid.png',
  'amino+hyaluronic+riboflavin':'images/ribolisin.png',
  'amino+hyaluronic+echinacea':'images/iridium.png',
  'ginkgo+hyaluronic':'images/trium.png',
  'nacl+hyaluronic':'images/edenorm.png',
  'amino+liposome':'images/tearfid.png',
  'carbopol+echinacea+aloevera':'images/iridium-gel.png',
  'amino+lipoic+hypromelose':'images/tioretin.png'
}
var infictions = [
 { 
  'images/trium.png':'eye-post', 
  'images/hyalfid.png':'long-screen',
  'images/tioretin.png':'diabetic', 
  'images/edenorm.png':'post-surgery', 
  'images/tearfid.png':'Meibomian', 
  'images/iridium.png':'dry',
  'images/ribolisin.png':'uv-light',
  'images/iridium-gel.png':'red-eye'
 }
 
]
var compounds = [
  {
    id:'amino',
    name:'Amino Acid',
    img:'images/amino.png'
  },
  {
    id:'ginkgo',
    name:'Ginkgo biloba',
    img:'images/ginkgo.png'
  },
  {
    id:'hyaluronic',
    name:'Hyaluronic Acid',
    img:'images/hyaluronic.png'
  },
  {
    id:'carbopol',
    name:'Carbopol',
    img:'images/carbopol.png'
  },
  {
    id:'echinacea',
    name:'Echinacea',
    img:'images/echinacea.png'
  },
  {
    id:'hypromelose',
    name:'Hypromelose',
    img:'images/hypromelose.png'
  }
  ,
   {
    id:'aloevera',
    name:'Aloe Vera',
    img:'images/aloevera.png'
  }
  ,
  {
    id:'lipoic',
    name:'Lipoic',
    img:'images/lipoic.png'
  },
  {
    id:'liposome',
    name:'Liposome',
    img:'images/liposome.png'
  }
  ,
  {
    id:'nacl',
    name:'NaCL',
    img:'images/nacl.png'
  } 
  ,
  {
    id:'riboflavin',
    name:'Riboflavin',
    img:'images/riboflavin.png'
  } 
]
var medicines=[
  {
    id:'hyalfid',
    class:'hyalfid1',
    img:'images/hyalfid.png',
    des:'images/hyalfid-des.jpg'

  },
  {
    id:'trium',
    class:'trium1',
    img:'images/trium.png',
    des:'images/Trium-des.jpg'
  },
  {
    id:'edenorm',
    class:'edenorm1',
    img:'images/edenorm.png',
    des:'images/edenorm-des.jpg'

  },
  {
    id:'tearfid',
    class:'tearfid1',
    img:'images/tearfid.png',
    des:'images/tearfid-des.jpg'
  },
  {
    id:'tioretin',
    class:'tioretin1',
    img:'images/tioretin.png',
    des:'images/tiorten-des.jpg'
  },
  {
    id:'iridium',
    class:'iridium1',
    img:'images/iridium.png',
    des:'images/iridium-des.jpg'
  },
  {
    id:'ribolisin',
    class:'ribolisin1',
    img:'images/ribolisin.png',
    des:'images/ribolsin-des.jpg'
  },
  {
    id:'iridium-gel',
    class:'iridium-gel1',
    img:'images/iridium-gel.png'
  },
  
]
var patients =[
  {
    attribute:'images/trium.png',
    id:'eye-post',
    infiction:'Patients with dry eye post eye surgery',
    img:'images/icon1.png'
  },
  {
    attribute:'images/hyalfid.png',
    id:'long-screen',
    infiction:'Patients with Multifactorial Dry eye e.g long screen time',
    img:'images/icon-5.png'
  },
  {
    attribute:'images/edenorm.png',
    id:'post-surgery',
    infiction:'',
    img:'images/icon-8.png'
  },
  {
    attribute:'images/tearfid.png',
    id:'Meibomian',
    infiction:'',
    img:'images/icon-2.png'
  },
  {
    attribute:'images/iridium.png',
    id:'dry',
    infiction:'',
    img:'images/icon-3.png'
  },
  {
    attribute:'images/tioretin.png',
    id:'diabetic',
    infiction:'',
    img:'images/icon-6.png'
  },
  {
    attribute:'images/ribolisin.png',
    id:'uv-light',
    infiction:'',
    img:'images/icon-4.png'
  },
  {
    attribute:'images/iridium-gel.png',
    id:'red-eye',
    infiction:'',
    img:'images/icon-7.png'
  },
  
 
]
var count = 0;
var score =0;
var item2='';
var item3 =''
var comp ='';
var show ='';
var productResult="";
var compoundsdiv = document.getElementById('compounds');
var products = document.getElementById('products');
var medicine = document.getElementById("medicine");
var patientsdiv=document.getElementById('patients')
var lab = document.getElementById('labs')
var result = document.getElementById("relieved-div")
var suffer = document.getElementById("suffer-div")
var toast = document.getElementById("snackbar");

window.onload=function() {
  addCompounds();
  addPatients();
  showMedicine();
  showProducts();
}
var med=""
window.dragMoveListener = dragMoveListener
function showMedicine ( params  ){

    medicines.forEach(element => {
      if(element.id==='iridium-gel'){
        med = ` 
        <div id="${element.id}" class="is-hidden medicine-item">
    <img width="150px" id="medicImg" src="${element.img}">
    </div>
    `
      }else{
        med = ` 
        <div id="${element.id}" class="single-medicine is-hidden  medicine-item"> 
    <img  id="medicImg" src="${element.img}">
    </div>
    `
      }
    
   medicine.innerHTML +=med 
  
  }); 
  
}
function showProducts(){
  medicines.forEach(element => {
    if(element.id==='iridium-gel'){
      med = ` 
      <div id="${element.class}" class="product-item is-hidden">
  <img width="110px" id="medicImg" src="${element.img}">
  </div>
  `
    }else{
      med = ` 
     <div id="product-style" class="column is-3">
      <div id="${element.class}" class="single-product is-hidden product-item " onclick = "openDescription(this.id)">
    
  <img  id="medicImg" src="${element.img}">
  </div>
  
            <span id="info">Click For More Information</span>
        
  </div>
  
  `
  
    }
 
  products.innerHTML +=med
  var moreInfo =document.getElementById("product-style")
  var span = document.getElementById('info')
moreInfo.addEventListener("mouseover", event => {
  span.style.display='inline-block'
});
moreInfo.addEventListener("mouseout", event => {
  span.style.display='none'
});
}); 
}
function addCompounds (){
  compounds.forEach(element => {
   // var compound = document.createElement('div')
    var compound=
    `
    <div id="item-style" class="column is-4"> 
    <div id="${element.id}" class="item">
   <img width="250" height="250" src="${element.img}" >
   </div>
   </div>
        `
        compoundsdiv.innerHTML+= compound
    // compound.classList.add('item')
     
    // compound.classList.add('is-2')
    // compound.id=element.id
  //compoundsdiv.insertBefore (compound , lab)
  });
}
function addPatients (){
  patients.forEach(element => {
    var patient = `
    <div id="patient-style" class="column is-4">
    <div id="patient-icon">
    <div  id="${element.id}" class="dropzone-patient" data-medic="${element.attribute}">
   
     
    <img width="150" height="150"  src="${element.img}" >
     </div>   
    </div
    </div>
    `
    /*    <div class="card">
    <div  id="${element.id}" class="dropzone-patient" data-medic="${element.attribute}">
      <span class="icon is-large is-right has-text-success ">
        <i id="check" class=" fa fa-check"></i>
      </span>
      <div class="card-image has-text-centered ">
        <figure class="image is-64x64 is-inline-block">  
   <img src="${element.img}" >
        </figure>
      </div>
      <br>
      <div class="card-content">
        
        <div class="content">
          <p>
            ${element.infiction}
          </p>
        </div>
      </div>
    </div>
    </div> */

  patientsdiv.innerHTML +=patient
  });
}
function dragMoveListener (event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

interact('.item')
  .draggable({
    listeners: {
       move: dragMoveListener
     },
     /* modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ], */ 
     inertia: true,
       
  })
  interact('.medicine-item')
  .draggable({
    listeners: { move: dragMoveListener } ,
    inertia: true,
  })
 
  interact('.dropzone')
  .dropzone({
    accept: '.item',
    overlap: 0.75,

    ondropactivate: function (event) {
      const item = event.relatedTarget
      item.classList.add('dragging')
      event.target.id="components"
   
    },
    ondropdeactivate: function (event) {
      const item = event.relatedTarget
      event.target.id=""
      item.classList.add('item')
      item.classList.remove('cant-drop','shake')
      item.classList.remove('dragging', 'cannot-drop')
    },
    ondragenter: function(event) {
      const item = event.relatedTarget
      var zone = event.dropzone
      if(count > 3 && !item.className.includes('dropped')){
        item.classList.add('shake')
        
        item.classList.add('cant-drop')
        toast.innerHTML= 'No more elements allowed!'
        toast.style.backgroundColor="rgba(201, 10, 10, 0.753)"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", "");}, 4000); 
      }
     
      if (item2===''){
        item2 =event.relatedTarget.id
      }else{
        item2 +="+" +event.relatedTarget.id
      }
      
      
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')
      item.classList.add('drop-target')
       var data = event.relatedTarget.id
       var target = event.target
       medicdiv = document.createElement('div')
       var Array = item2.split("+");
       var one =Array[0]
       var two = Array[1]
       var three = Array[2]
       //var medicTarget = compined[`${item2}+${data}`] ?? compined[`${data}+${item2}`]
       var medicTarget = compined[`${one}+${two}+${three}`] ||compined[`${one}+${three}+${two}`]||
        compined[`${two}+${one}+${three}`] ||
       compined[`${two}+${three}+${one}`] ||
       compined[`${three}+${two}+${one}`] ||
       compined[`${three}+${one}+${two}`] ||
       compined[`${one}+${two}`] || compined[`${two}+${one}`]
       
      
      if(medicTarget!==undefined ){

        medicines.forEach(element => {
          if(element.img === medicTarget){
            show = document.getElementById(element.id)
            var product = document.getElementById("product");
            var output= document.getElementById("output");
            
            var audio = new Audio('pop.wav');
            productResult = document.getElementById(show.id+'1')
            
      //var compare = document.querySelector("#"+productResult.id).querySelector('#medicImg').getAttribute('src')
      
            if(productResult.className.includes('is-hidden')){
              if(medicTarget==='images/iridium-gel.png'){
                output.style.height = '150px';
                output.style.width = '200px';
                
                audio.play();
                output.src=medicTarget
              }else{
                audio.play();
                output.src=medicTarget
              }
              
              product.classList.add('is-active') 
            }
         
        
          }
        })
     }
    },
    ondragleave: function(event) {
      const item = event.relatedTarget
      item.classList.remove('can-drop')
      item.classList.add('cannot-drop')
      item.classList.remove('drop-target')
      item.classList.remove('cant-drop','shake','dropped')
      if(count!=0){
        count-=1
      }
      
      item2=''
        medic=document.getElementById('medicine')
      var currentmedic = document.getElementById(show.id)
      if(currentmedic !== null){
      if(currentmedic.className.includes('medicine-item')){
        currentmedic.classList.add('is-hidden')
      }
    }
    },
   
    ondrop:function(event){
      const item = event.relatedTarget
      if(!item.className.includes('dropped')){
      do {
        count++
        item.classList.add('dropped')
      } while (!item.className.includes('dropped'));
      
    }
      console.log(count);
    }
    
  }) 
 
  interact('.dropzone-patient')
  .dropzone({
    accept: '.medicine-item',
    overlap: 0.50,
   
    ondropactivate: function (event) {
      const item = event.relatedTarget
      item.classList.add('dragging')
    },
    ondropdeactivate: function (event) {
      const item = event.relatedTarget
      item.classList.remove('dragging', 'cannot-drop')
    },
    ondragenter: function(event) {
      const item = event.relatedTarget
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')  
      
       if(item.className.includes('medicine-item')){
         //currentmedic = item.querySelector("#"+show.id).querySelector('#medicImg').getAttribute('src') 
         currentmedic = item.querySelector('#medicImg').getAttribute('src')
       }
       var targetid= event.target.id
      
      var attr=document.getElementById(targetid).getAttribute('data-medic')
      var audio = new Audio('mixkit-achievement-bell-600.wav');
     // var i = document.querySelector("#"+targetid).querySelector("#check")
      if (attr == currentmedic ){
         // i.style.display='flex' 
         audio.play();
         
         //console.log(compare);
         
        
          item.classList.remove('medicine-item','dragging')
        
          }
          else{
            
           
            
           }
           
    },
    ondragleave: function(event) {
      const item = event.relatedTarget
      item.classList.remove('can-drop')
      item.classList.add('cannot-drop')
      var d= event.target.id
      
     /*   var i = document.querySelector("#"+d).querySelector("#check")
      i.style.display = 'none' */
      
    },
    ondrop:function(event) {
      const item = event.relatedTarget
      
      if (!item.className.includes('medicine-item')){
        result.classList.add('is-active')
      document.getElementById("score").innerHTML = ++score;
    
      }else{
        suffer.classList.add('is-active')
      }
    if (score===medicines.length){
      
         openfinalscore();
     }
    }

  })
  
  
  var product = document.getElementById("product");
  
  
   function openfinalscore(){
    var winner =  document.getElementById("winner");
    var audio = new Audio('winsound.mp3');
    winner.classList.add('is-active')
    audio.play();
    document.getElementById("sc").innerHTML=score;
    
  }
  function closefinalscore(){
    winner.classList.remove('is-active')
  }
  function matchproduct(){
    product.classList.remove('is-active')
    show.classList.remove('is-hidden')
  }
  function closeproduct(){
    show.classList.remove('is-hidden')
    product.classList.remove('is-active')
  }
  function closeresult(){
    show.classList.add('is-hidden')
    result.classList.remove('is-active')
     
      productResult.classList.remove('is-hidden')
      
    
  }
  function closesuffer(){
    
    suffer.classList.remove('is-active')
  }
function startGame() {
  var start = document.getElementById("startgame")
  start.classList.remove('is-active')

}
var descrip = document.getElementById("description-div")
function openDescription(productId) {
  
  var decription= document.getElementById("description");
  var newid = productId.slice(0, -1);
  medicines.forEach(element => {
    if(element.id == newid){
      decription.src=element.des
      console.log(newid);
    }
  })
  descrip.classList.add('is-active')
  
}
function closedescription(){
  descrip.classList.remove('is-active')
}
