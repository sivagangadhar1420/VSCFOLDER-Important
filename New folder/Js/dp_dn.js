 
 //ParentNode
 //var i= document.getElementById("inner").parentNode.style.backgroundColor="blue"   
//console.log(i)
 //document.body, images, head, images.length
                                                                     //nextSibling //childElementCount   ,//parentElement;  body , head

//ParentElement
//var i= document.getElementById("inner").parentElement.style.backgroundColor="blue"   //nextSibling //childElementCount //parentElement;  body , head
//console.log(i)//document.body, images, head, 


//Childern            will target only tags elements id classes
//var c=document.getElementById("inner").children[1].style.backgroundColor="yellow";  // nextSibling//nextElementSibling;
//console.log(c)
//var c=document.getElementById("outer").children[0].style.backgroundColor="yellow";  // nextSibling//nextElementSibling;
//console.log(c)


//ChildNodes            will target  tags elements id classes and Commen data also
 //var cn=document.getElementById("outer").childNodes[2];
//console.log(cn)
//var cn=document.getElementById("outer").childNodes[4]; //[0][1][2][3][4][5][6]
//console.log(cn)
//var cn=document.getElementById("inner").childNodes[4].style.backgroundColor="pink";
// console.log(cn);
//var dn=document.getElementById("outer").childNodes[4].style.background="blue"
// var ch=document.getElementById("inner").childNodes[6]
// console.log(ch)

// <!DOCTYPE html>
// <html>
// <body>

// <ul id="myList1"><li>Coffee</li><li>Tea</li></ul>
// <ul id="myList2"><li>Water</li><li>Milk</li></ul>

// <p>Click the button to move an item from one list to another.</p>

// <button onclick="myFunction()">Try it</button>

// <script>
// function myFunction() {
//   var node = document.getElementById("myList2").childNodes[1];
//   document.getElementById("myList1").appendChild(node);
// }
// </script>

// </body>
// </html>

// <!DOCTYPE html>
// <html>
// <body>

// <ul id="myList1"><li>Coffee</li><li>Tea</li></ul>
// <ul id="myList2"><li>Water</li><li>Milk</li></ul>

// <p>Click the button to move an item from one list to another.</p>

// <button onclick="myFunction()">Try it</button>

// <script>
// function myFunction() {
//   var node = document.getElementById("myList2").lastChild;
//   document.getElementById("myList1").appendChild(node);
// }
// </script>

// </body>
// </html>



//FirsrChild 
//var cn=document.getElementById("inner").firstChild.style.background="blue";
//console.log(cn)
//var cn=document.getElementById("inner").firstElementChild.style.background="red";
//console.log(cn)
// var ch=document.getElementById("c").firstChild;
// console.log(ch)


// LastChild
// var cn=document.getElementById("inner").lastChild;
// console.log(cn)
// var cn=document.getElementById("inner").lastElementChild.style.background="red";
// console.log(cn)
// var ch=document.getElementById("b").lastChild;
// console.log(ch)


//NextSibling
//  var ch=document.getElementById("c").nextElementSibling.style.background="red";
// console.log(ch)
// var ch=document.getElementById("b").nextSibling;
// console.log(ch)


//previousSibling
// var ch=document.getElementById("c").previousElementSibling.style.background="red";
// console.log(ch)
// var ch=document.getElementById("c").previousElementSibling.innerHTML;
// console.log(ch)
// var ch=document.getElementById("c").previousSibling;
// console.log(ch);


//Create Element and Create a Text Node
//CreateElement , createTextNode , createComment

/*var create=document.createElement("p");
var text=document.createTextNode("<h5>The total text is...!</h5>");
var commet=document.createComment("The Entire Text is......")
console.log(create);
console.log(text);
console.log(commet)  */


// AppendChild 
/* var app=document.createElement("h1");
var text=document.createTextNode("This is the text i am looking for");  
app.appendChild(text);
//var s=apped.appendChild(text);
//console.log(s)
var d=document.getElementById("inner").appendChild(app);  //.appendChild(apped); //(s)
console.log(d);     */

//AppendChildInsertBefore

 /* var app=document.createElement("h1", "style", "height:100px; color:blue") //.style.color="red";
  //var app=document.getElementById("inner").style.color="red"
var text=document.createTextNode("This is the text i am looking for");  
app.appendChild(text);
var add=document.getElementById("inner")// .style.backgroundColor="red";
add.insertBefore(app, add.childNodes[2]);   */





//var d=document.getElementById("list")
//document.getElementsByClassName("list1").addEventListener("click", funn1)
/*  var list=document.getElementById("list").addEventListener("click", function(){
   var m= document.getElementById("list1").lastChild;
    var add=document.getElementById("list").appendChild(m)  
})  

 function funn1(){
    var d=document.getElementById("list").lastChild      //childNodes[0]; //lastChild
    document.getElementById("list1").appendChild(d);
}   */





//InsertAdjacentElement

//var d=document.createElement("h1");
//var e=document.createTextNode("Paragragraph text");
//d.appendChild(e);
//var f=document.getElementById("in").insertAdjacentElement("beforebegin",d); //("afterbegin", d), ("afterend", d), ("beforeend", d);

                                                        //InsertAdjacentHTML
/*  var element="<h1>This is text right</h1>"
 var ad=document.getElementById("in").insertAdjacentHTML("beforeend", element)    */
  
                                                  //InsertAdjacentTextNode

/*var text="<h1>Is this Your..Test...!!!!!</h1>";
var add=document.getElementById("in").insertAdjacentText("beforeend",text);  */


                                                        //Removechild and ReplaceChild

                                                              //Replacing

// var n=document.createElement("li");
// var n1=document.createTextNode("coldCoffe");
// n.append(n1);

// var add=document.getElementById("list");
// var tar=add.children[0];

// add.replaceChild(n,tar)


                                                                  //Removing

                                                      //USingChild RemovingChild
//  var a=document.getElementById("list");
//  var del=a.children[1];
//  a.removeChild(del);


                                                         //UsingParentNode
// var a=document.getElementById("l");
// var del=a.parentNode;
// del.remove(a)

                                                  // NextSiblingToRemove previousElementSibling
// var a=document.getElementById("list");
//   var del=a.children[1].previousElementSibling;  //nextElementSibling
//   a.removeChild(del);



//var ok=del.removeChild(a)
//console.log(ok)
// var rem=document.getElementById("in").children[1];  //childNodes[0];
// var del=rem.remove();
      

//  var del1=document.getElementById("in").children[0];
//         var rem=del1.remove(0);
        // console.log(del1)

//          var del=document.getElementById("list").children[1];
//         del.remove()
//                                                                  //lastElementChild//firstElementChild
// console.log(del)


//  var d= document.getElementById("in");
// var u=document.createElement("ul");
// d.append(u)
// // document.body.append(u);
//  var li=document.createElement("li" );
//  var te=document.createTextNode("water");
//  li.append(te)
//  u.append(li)
//  console.log(d)

                                                    //Creating Ul List using DOM insertAdjacent Html
// var c="<ul>";
// var g=document.getElementById("in").insertAdjacentHTML("beforeend", c);
// var add="<li>Water</li><li>Water</li><li>Water</li>";
// var d=document.getElementsByTagName("ul")[1].insertAdjacentHTML("beforeend", add)




// var add="<li>Water</li><li>Water</li><li>Water</li>";
//document.getElementById("list").insertAdjacentHTML("beforeend", add)


// var add=document.getElementById("in");
// var u="<ul>";
// var li="<li>Hot</li><li>cooling</li><li>Drink</li>";
// var app=document.getElementsByTagName("ul").insertAdjacentHTML(li);
// var g=document.getElementById("in").insertAdjacentHTML("afterbegin", u)



// var cr=" <li>Add</li> <li>Water</li> <li>Drink</li>"
// var add=document.getElementById("in").insertAdjacentHTML("beforebegin", cr)

/*<div id="d1"></div>
<script>
    document.getElementById("d1").setAttribute("style", "height:100px; width:300px; background-color:red");
    var t1="<table>";
     document.getElementById("d1").insertAdjacentHTML("afterbegin", t1)
    var t2="<th>Name</th><th>Name</th><th>Name</th>";
        document.getElementsByTagName("table")[0].insertAdjacentHTML("beforeend", t2)    


// var d=document.getElementById("in").childNodes[1]=true;
// d.remove(2);  */


// var c=document.getElementById("list1").addEventListener("mouseover", function(){
//     var lis=document.getElementById("list").lastChild;
//     var m=document.getElementById("list1").appendChild(lis)
// });

/*var list=document.getElementById("list1").addEventListener("click", function(){
    var m= document.getElementById("list").childNodes[0];  // childern[0]  //firstElementChild;  lastChild
     var add=document.getElementById("list1").appendChild(m);
 })  

 //SelectedIndex

//  <!DOCTYPE html>
// <html>
// <body>

// <form>
//   <select id="mySelect" size="4">
//     <option>Apple</option>
//     <option>Pear</option>
//     <option>Banana</option>
//     <option>Orange</option>
//   </select>
// </form>
// <br>

// <button onclick="myFunction()">Remove option with index "2"</button>

// <script>
// function myFunction() {
//   var x = document.getElementById("mySelect");
//   x.remove(2);
// }
// </script>

// <form>
//   Select a fruit:
//   <br>
//   <select id="mySelect" size="4">
//     <option>Apple</option>
//     <option>Pear</option>
//     <option>Banana</option>
//     <option>Orange</option>
//   </select>
// </form>
// <br>

// <button onclick="myFunction()">Remove selected fruit</button>

// <script>
//   function myFunction() {
//   var x = document.getElementById("mySelect");
//   x.remove(x.selectedIndex);
// }
// </script>

// </body>
// </html>

// <form>
//   Select a fruit:
//   <br>
//   <select id="mySelect" size="4">
//     <option>Apple</option>
//     <option>Pear</option>
//     <option>Banana</option>
//     <option>Orange</option>
//   </select>
// </form>
// <br>

// <button onclick="myFunction()">Remove selected fruit</button>

// <script>
// function myFunction() {
//   var x = document.getElementById("mySelect");
//   x.remove(x.selectedIndex);
// }
// </script>


                                                      //Hiding The Content
//var d=document.getElementById("in").hidden=false;
//var d=document.getElementById("in").hidden=true;

<style>
div {
  box-sizing: border-box;
  padding: 16px;
  width: 100%;
  background-color: red;
  color: #fff;
}
.closebtn {
  float: right;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}
.closebtn:hover {
  color: #000;
}
</style>
</head>
<body>

<div>
  <span onclick="this.parentNode.style.display = 'none';" class="closebtn">&times;</span>
  <p>To close this container, click on the X symbol to the right.</p>
</div>

<p>Example list:</p>

<ul>
  <li id="myLI">Coffee</li>
  <li>Tea</li>
</ul>

<p>Click the button to get the node name of the parent node of the li element in the list.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myLI").parentNode.nodeName;
  document.getElementById("demo").innerHTML = x;
}
</script>



/*function add(n1,n2){
    var total=n1+ n2;
    return total;
}
var result=add(10,20)
console.log(result)  

function add(){
    var n1,n2;
    n1=20;
    n2=30;
    var total=n1+ n2;
    return total;
}
var result=add()
console.log(result)  */

                                              //CloneMethod in Javascript (True or False)

/*var btn=document.getElementById("list").addEventListener("mouseover", function(){
var dtn=document.getElementById("list1").childNodes[0];
var ctn=document.getElementById("list").append(dtn);
})  */


                                                          //Using Button
// function funn1(){
//     var dtn=document.getElementById("list1").childNodes[0]; //children[0], lastChild;
// var ctn=document.getElementById("list").append(dtn);
// // }


// //function funn1(){  function will itereate the loopings without function it will returns only once when we mentiioned
// var d=document.getElementById("list")//.children[0]    //lastChild;//children[0]      //firstElementChild//lastElementChild//childNodes[0];
// var d=document.getElementById("list").children[0]  
// var cl=d.cloneNode(true);
// var ap=document.getElementById("list1").append(cl);
// //}
// <body id="b">

// <div id="c" style="border:1px solid black;background-color:pink">
//   <p style="color:red;">A p element</p>
//   <p style="color:green;">A p element</p>
//   <p style="color:blue;" >A p element</p>
// </div>

// <p>Click the button to copy the div element above, including all its attributes and child elements, and append it to the document.</p>

// <button onclick="myFunction()">Try it</button>

// <script>
// function myFunction() {
//  // var elmnt = document.getElementsByTagName("DIV")[0].children[0];   
//OR
//  var elmnt=document.getElementById("b").children[0];
//   var cln = elmnt.cloneNode(true);
//   document.body.appendChild(cln);
// }

// <ul id="myList1"><li>Coffee</li><li>Tea</li></ul>
// <ul id="myList2"><li>Water</li><li>Milk</li></ul>

// <p>Click the button to copy an item from one list to another.</p>

// <button onclick="myFunction()">Try it</button>

// <p>Try changing the <em>deep</em> parameter to false, and only an empty LI element will be cloned.</p>

// <script>
// function myFunction() {
//   var itm = document.getElementById("myList2").lastChild;
//   var cln = itm.cloneNode(true);
//   document.getElementById("myList1").appendChild(cln);
// }
// <div style="border:1px solid black;background-color:pink">
//   <p style="color:red;">A p element</p>
//   <p style="color:green;">A p element</p>
//   <p style="color:blue;">A p element</p>
// </div>

// <p>Click the button to copy the div element above, including all its attributes and child elements, and append it to the document.</p>

// <button onclick="myFunction()">Try it</button>

// <script>
// function myFunction() {
//   var elmnt = document.getElementsByTagName("DIV")[0];
//   var cln = elmnt.cloneNode(true);
//   document.body.appendChild(cln);
// }
// </script>

// </script>
// </script>


//JS Coontains Method  like inludes method includes will serach the data contains will search the Selectors like id ,classname, tagname
// var ck=document.getElementById("d");
// //var dk=document.getElementsByTagName("p")[0];
// var dk=document.getElementById("abc");
// var ch=ck.contains(dk)
// console.log(ch)

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                                //Includes
// var ar=["string" , "Array"];
// var str=ar.includes("Array");
// console.log(str)

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                               //hasAttributes
// var t=document.body.hasAttribute("class");
// console.log(t)

                                                              //haschildNodes
// var x=document.getElementById("d").hasChildNodes();
// console.log(x)

                                                              //  isEqualNode

//sameNodeType , samenodeName, sameNodeValues , sameChildNodes, same attributes , sameattribute values......

                                                                  
                                                                //isEqualNode

// var i=document.getElementById("u").firstElementChild//children[0]//.children[0];
// var j=document.getElementById("u1").children[1];
// var m=i.isEqualNode(j);
// console.log(m)

                                                                //isSameNode


// var i=document.getElementById("u")//.firstElementChild//children[0]//.children[0];


// console.log(i)
// var j=document.getElementById("u1").children[1];
//

/*<button onclick="myFunction()">Try it</button>

<ul id="myList"><li>Coffee</li><li>Tea</li></ul>   */

//<script>
/*
function funn1() {
  var item1 = document.getElementById("u");
  var item2 = document.querySelectorAll("ul")[0];
  
  if (item1 === item2) { 
    alert("THEY ARE THE SAME!!");
  } else {
    alert("They are not the same.");
  }
} 


// var x=document//.all;
// console.log(x)

*/
                                                        //Getting parent ID

/* <p>Example list:</p>

<ul>
  <li id="myLI">Coffee</li>
  <li>Tea</li>
</ul>

<p>Click the button to get the node name of the parent node of the li element in the list.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myLI").parentElement.nodeName; //ParentNode;
  document.getElementById("demo").innerHTML = x;
} */


                                                //SetOPerator  controlling repeating words
// var a=new Set(["fill", "funn", "fill"]);
// Array.from(a)
// console.log(a)
   
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                                    //BrowserObjectModel
//Chrome , FireFox , Opera , InternetExplorer , Edge ,,.....  .

//Get width ,height , of browserWindow ...
// //open and close browser window...
// Move and REsize the BrowserWindow.....
// scroll to browser window...
//Get url , HostName , Protocal , of browser Window....
// Get History of browser window
 
                                                              //Get window Height and width

//InnerHeight, outerHeight , innerWidth,  outerWidth......
//  var ih=window.innerHeight;
// console.log(ih+" InnerHeight")
// var oh=window.outerHeight;
//  console.log(oh+" OuterHeight")
//  var iw=window.innerWidth;
// console.log(iw+" InnerWidth")
// var ow=window.outerWidth;
// // console.log(ow+" outerWidth")

// Window open and Close( height=100px , width=40%"" )

/*  function newWindow(){
//  // window.open("http://www.youtube.com", "_parent", "height=100px,width=100px" ); //("URL", "name(optional)", "_parent, slef top, blank")   //Window will open in current tab using of _parent
 var mynewWindow=window.open("http://www.youtube.com","Blank","height=200px,width=300px,left=300px,top=150px"); //("URL", "name(optional)", "_parent, slef top, blank")
  //MoveBy AndMoveTo//var moveby=document.write("<p>The Window will open soon...!!!!</p>")
}

                                                          //Close
function closewindow(){
  mynewWindow.closewindow();

}

// Windows moveBy() nd MoveTo()
  /*function movewindow(){
  moveby.moveTo(200,200);   /resizeTo(400, 400)
}    */

                                                        //  Resize

//ScrollBy and ScrollTo
// function scrollwindow(){
 //window.scrollBy(10,20);
//  window.scrollBy(-100,0);
  // window.scrollTo(10,40)
// }

//Location Object(.host, hastname, href, serach replace ,reload valueof, protal , port, pathname, origin ,valueof)........

/* 
function newwebsite(){
//var l=location.href= "http://www.facebook.com";
//location.reload();
location.assign("https://www.google.com")
// location.replace("https://www.google.com")
// console.log(l)
 }

                                                            //HistoryObject

// function forwardFunction(){
//   history.forward();
// }
// function backwardFunction(){
//   history.backward();
// }  

                                                            //Toggle both forward and backward

function toggleFunction(){
  history.go(-2);
}     */


