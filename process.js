// Author: Mina Taherzadeh,000922772 and all is my own work
// This is my Java script code that will link to html file and make the elements of svg , svg animations, moving circles , a player ,...
// date: 17 March 2024




/**
 * 
 *  This is a function that will make svg elements of Player which is a Snow Man 
 * 
 */
function createPlayer() {

    const svgNS = "http://www.w3.org/2000/svg";


    // if we already don't have player that is id of the group of elements that made player and belongs to svg
    if (!document.getElementById("player")) {

        // get SVG 
        let svg = document.querySelector("svg");

        // build ga group in svg
        let svggroup = document.createElementNS(svgNS, "g");

        // this will put player as id of this group
        svggroup.setAttribute("id", "player");

        // this will put the transfrom of the player to scale it
        svggroup.setAttribute("transform", "scale(1.0, 1.0)");

        // build the head of the player which is ellipse
        let grouphead = document.createElementNS(svgNS, "ellipse");
        grouphead.setAttribute("cx", 480); // put x coordinate location of head
        grouphead.setAttribute("cy", 800); // put y coordinate location of head
        grouphead.setAttribute("rx", 40); // put x radius of head
        grouphead.setAttribute("ry", 40); // put y radius of head
        grouphead.setAttribute("id", "playerHead"); // set id for the head 


        // build and add head ellipse to group 
        svggroup.appendChild(grouphead);

        // build the left eye of the player which is circle
        let groupfirstEye = document.createElementNS(svgNS, "circle");
        groupfirstEye.setAttribute("cx", 468);  // put x coordinate location of left eye
        groupfirstEye.setAttribute("cy", 790);  // put y coordinate location of left eye
        groupfirstEye.setAttribute("r", 5); // put radius of left eye
        groupfirstEye.setAttribute("id", "firstdress"); // set id for left eye


        // build and add left eye circle to group 
        svggroup.appendChild(groupfirstEye);

        // build the right eye of the player which is circle
        let groupsecondEye = document.createElementNS(svgNS, "circle");
        groupsecondEye.setAttribute("cx", 490); // put x coordinate location of right eye
        groupsecondEye.setAttribute("cy", 790); // put y coordinate location of right eye
        groupsecondEye.setAttribute("r", 5); // put radius of right eye

        groupsecondEye.setAttribute("fill", "black"); // the color of right eye (fill)

        // build and add right eye circle to group 
        svggroup.appendChild(groupsecondEye);

        // build the nose of the player which is line
        let nose = document.createElementNS(svgNS, "line");
        nose.setAttribute("x1", 480); // put the x coordinate that line will start from
        nose.setAttribute("y1", 800); // put the y coordinate that line will start from
        nose.setAttribute("x2", 480); // put the x coordinate that line will end to
        nose.setAttribute("y2", 820); // put the y coordinate that line will end to
        nose.setAttribute("id", "nose"); // set id for nose


        // build and add nose line to group 
        svggroup.appendChild(nose);

        // build the body of the player which is ellipse
        let groupBody = document.createElementNS(svgNS, "ellipse");
        groupBody.setAttribute("cx", 480); // put x coordinate location of body
        groupBody.setAttribute("cy", 920); // put y coordinate location of body
        groupBody.setAttribute("rx", 90); // put x radius of body
        groupBody.setAttribute("ry", 90); // put y radius of body
        groupBody.setAttribute("fill", "white"); // the color of body ellipse (fill)

        // build and add body ellipse to group 
        svggroup.appendChild(groupBody);

        // build the first black circle in body'player which is circle
        let dressOne = document.createElementNS(svgNS, "circle");
        dressOne.setAttribute("cx", 480); // put x coordinate location of first black circle in body'player
        dressOne.setAttribute("cy", 850); // put y coordinate location of first black circle in body'player
        dressOne.setAttribute("r", 5); // put radius of first black circle in body'player

        groupfirstEye.setAttribute("fill", "black");  // the color of first circle in body'player (fill)

        // build and add first black circle in body'player to group 
        svggroup.appendChild(dressOne);

        // build the second black circle in body'player which is circle
        let dressTwo = document.createElementNS(svgNS, "circle");
        dressTwo.setAttribute("cx", 480); // put x coordinate location of second black circle in body'player
        dressTwo.setAttribute("cy", 900); // put y coordinate location of second black circle in body'player
        dressTwo.setAttribute("r", 5); // put radius of second black circle in body'player

        groupfirstEye.setAttribute("fill", "black");  // the color of second circle in body'player (fill)

        // build and add second black circle in body'player to group 
        svggroup.appendChild(dressTwo);

        // build the third black circle in body'player which is circle
        let dressThree = document.createElementNS(svgNS, "circle");
        dressThree.setAttribute("cx", 480); // put x coordinate location of third black circle in body'player
        dressThree.setAttribute("cy", 950); // put y coordinate location of third black circle in body'player
        dressThree.setAttribute("r", 5); // put radius of third black circle in body'player

        groupfirstEye.setAttribute("fill", "black");  // the color of third circle in body'player (fill)

        // build and add third black circle in body'player to group 
        svggroup.appendChild(dressThree);

        // build and add player group to svg
        svg.appendChild(svggroup);
    }

}

/**
 *  This is a function that will make player to move to x and y coordinate
 * 
 * @param {*} event this is an event that is for moving the player group in svg
 * @returns if we don't have sny player it doesn't do anything
 */
function movePlayer(event) {

    // get the player which is id of player group(that means all elements in that head,body,dress and nose)
    let node = document.getElementById("player");

    // if there is no player this function doesn't work
    if (!node) return;

    // get the transform element of player 
    let transform = node.getAttribute("transform");

    // moving in x coordinate
    let translateX = parseFloat(transform.split("(")[1].split(")")[0]);

    // the speed of the player for moving
    const speed = 20;

    // this is like if statement but switch way for keyboard
    switch (event.code) {

        // if user put his hands on left keyboard
        case "ArrowLeft":

            translateX -= speed; //  user press on (Arrow left) left keyboard player will go to left
            event.preventDefault(); // this will prevent the default behavior if key press
            break;

        // if user put his hands on right keyboard
        case "ArrowRight":
            translateX += speed; // user press on (Arrow right) right keyboard player will go to right
            event.preventDefault();  // this will prevent the default behavior if key press
            break;
        default:
            break;
    }

    // This is if statement for when user move the mouse
    if (event.movementX < 0) { // movementX will show the amount of the movement of mouse in x coordiante

        translateX -= speed; // when mouse moved to the left the player will go to left
        event.preventDefault();
    } else if (event.movementX > 0) {

        translateX += speed; // when mouse moved to the right the player will go to right
        event.preventDefault();
    }



    // this is the new transform for player group in svg
    node.setAttribute("transform", `translate(${translateX}, 0)`);
}
// this is for when user pressed on left or right keyboard
document.addEventListener("keydown", event => movePlayer(event));

// this is for when user moved mouse to right or left
document.addEventListener("mousemove", event => movePlayer(event));



const svgNS = "http://www.w3.org/2000/svg";
let boardsizeX = 1100;
let boardsizeY = 800;

// the min size of snow ball
let minCircleRadius = 30;

// the max size of snow ball
let maxCircleRadius = 70;


let xspeed = 2; // Define xspeed for snow movement
let yspeed = 4;

let myTimer = null;

/**
 *  this is a function to make snow ball
 * 
 * @returns it will return snow
 */

function makeSnow() {
    const svgNS = "http://www.w3.org/2000/svg";


    // build snow in svg as circle
    let snow = document.createElementNS(svgNS, "circle");

    // set class for snow
    snow.setAttribute("class", "snow");

    // set id for snow 
    snow.setAttribute("id", "snowId");

    // randomise the ball size or radious
    let radius = Math.floor(Math.random() * (maxCircleRadius - minCircleRadius) + minCircleRadius);

    // set this random radious for snowball
    snow.setAttribute("r", radius);

    // randomise the x coordiante that ball will start from in svg
    let cx = Math.floor(Math.random() * (boardsizeX - 2 * radius) + radius);

    // set this random x-coordinate for snowball
    snow.setAttribute("cx", cx);

    // randomise the y coordiante that ball will start from in svg
    let cy = Math.floor(Math.random() * (boardsizeY * 0.75 - 2 * radius) + radius);

    // set this random y-coordinate for snowball
    snow.setAttribute("cy", cy);

    // get the color of the snow ball from input 
    const color = document.getElementById("snowColor").value;

    // set the color of snow balls from the color that user selected 
    snow.setAttribute("fill", color);

    return snow;
}

/**
 * A function when user click on easy button(because it is easy it's going to have less snowballs)
 * 
 * this function also make snowBalls but because it also calls to create player 
 */
function startGameEasy() {
    // call create player function to create player 
    createPlayer();

    const svgNS = "http://www.w3.org/2000/svg";

    // get svg 
    let svg = document.querySelector("svg");

    // create a new group in svg
    let svggroup = document.createElementNS(svgNS, "g");

    // put snowBalls for the id of this group
    svggroup.setAttribute("id", "snowBalls");

    // put the number of our snowballs
    let snowCount = 5;
    for (let i = 0; i < snowCount; i++) {

        // make 5 snowballs
        let snow = makeSnow();

        // build and add these snowballs to group in svg
        svggroup.appendChild(snow);

        // build and add this group into svg
        svg.appendChild(svggroup);
    }
}

/**
 * This is a function that will do exactly what last function did but this one has more snowballs and it is for hard level
 */
function startGameHard() {
    // call create player function to create player 
    createPlayer();

    // get svg 
    let svg = document.querySelector("svg");

    // put the number of our snowballs
    let snowCount = 50;
    for (let i = 0; i < snowCount; i++) {

        // make 50 snowballs
        let snow = makeSnow();

        // build and add this group into svg
        svg.appendChild(snow);
    }

}



/**
 * This function will make snows move without any attribuation by user
 */
function moveSnow() {

    // put timer that in how much time it take time to it move(here come down)
    myTimer = setInterval(function () {

        // get the snow balls which their id is snow
        let snowballs = document.querySelectorAll(".snow");

        // we put this to this action on each snow ball that we have
        snowballs.forEach(function (snow) {

            // get the y-coordinate location of snow balls
            let cy = parseFloat(snow.getAttribute("cy"));

            // add it to move it to down / y- coordinate (bigger number will make it faster )
            cy += 5.5;

            // update the y location of snowballs
            snow.setAttribute("cy", cy);

            // call touch function to know when it should get remove
            contactLocation();


        });
    }, 1000 / 30);








}
// this our score each snowball that snowman catch is equal to 1 point for score 
let score = 0;

/**
 * This is a function that will remove the snow balls and add score if the snowball and 
 */
function contactLocation() {

    // get player id which is group in svg that contains the player and its different elements head , body ,...
    let player = document.getElementById("player");

    //  check if player exist 
    if (player) {
        let playerHead = player.querySelector("ellipse"); // get the head element of player
        let playerBody = player.querySelector("ellipse"); // get the body element of player
        let snowballs = document.querySelectorAll(".snow");// get the id of snowBalls

        // put condition for all of the snowballs that we have in svg
        snowballs.forEach(function (snow) {
            // let snowX = parseFloat(snow.getAttribute("cx"));
            // let snowY = parseFloat(snow.getAttribute("cy"));

            // check if the snow is touching the head or body of the player
            let playerHeadRect = playerHead.getBoundingClientRect(); // this is the rectangle of player head ( becuase it wasn't ok to use with center of circle i tried to do the boundaries with rectangle that works better)
            let playerBodyRect = playerBody.getBoundingClientRect(); // this is for body rect that read the boundry of body of the player or snowman
            let snowRect = snow.getBoundingClientRect(); // the rectangle  boundry for snowballs

            // with getBoundingClientRect we can choose its left , right , bottom and top of the object that we choose

            // now consitions for removing snow when snowman and snowballs get in touch with eachother
            if (
                snowRect.left < playerHeadRect.right &&
                snowRect.right > playerHeadRect.left &&
                snowRect.top < playerHeadRect.bottom &&
                snowRect.bottom > playerHeadRect.top &&

                snowRect.left < playerBodyRect.right &&
                snowRect.right > playerBodyRect.left &&
                snowRect.top < playerBodyRect.bottom &&
                snowRect.bottom > playerBodyRect.top &&

                snowRect.left < playerBodyRect.right &&
                snowRect.right > playerBodyRect.left &&
                snowRect.top < playerBodyRect.bottom &&
                snowRect.bottom > playerBodyRect.top
            ) {

                snow.remove(); // remove the snow if touching the head of the player
                score += 1; // add score for each snow that will remove
                document.getElementById("score").innerText = score; // update score in html file 

            }


        });
    }
}





/**
 *  
 * This is a function which will make a text in svg and animate it. this is first text which is for starting the game and appear before game start
 * 
 * this is a animate svg element
 */
function textAnimationOne() {


    let svgNS = "http://www.w3.org/2000/svg";

    // get svg
    let svg = document.querySelector("svg");

    // create a new group for this element in svg
    let svggroup = document.createElementNS(svgNS, "g");

    // put value in the text element in svg
    let innerText = document.createTextNode("Let's Start The Game");

    // create text element in svg
    let svgText = document.createElementNS(svgNS, "text");
    let angle = 0; //  the first value of angle
    let ox = 0; //  the first value of translate x
    let oy = 0; //  the first value of translate y
    let x = 400; // Adjust x position 
    let y = 540; // Adjust y position 


    svgText.setAttribute("fill", "pink"); // set the fill color of this text pink
    svgText.setAttribute("stroke", "blue"); // set the stroke of this text blue


    svgText.setAttribute("id", "svgText"); // set the id of this text
    svgText.setAttribute("x", x); // set x position of this text
    svgText.setAttribute("y", y); // set y position of this text
    svgText.setAttribute("font-size", "50px"); // set the font size
    svgText.setAttribute("transform", `rotate(${angle} ${x} ${y}) translate(${ox} ${oy})`); // the first transform of this text 



    svgText.appendChild(innerText); // build and add the value of the text to group

    svggroup.appendChild(svgText); // build and add this text to group
    svg.appendChild(svggroup); // build and add this group to svg

    // Animate the rotation of this svg element
    setInterval(() => {
        angle += 2; // increment angle for rotation
        ox += 0.5; // increment translate x
        oy += 0.25; // increment translate y
        svgText.setAttribute("transform", `rotate(${angle} ${x} ${y}) translate(${ox} ${oy})`); // update the transform of this text because we changed the lements that it contains
    }, 27); // adjust the interval for smoothness and moving of that

}

/**
 * This is a function for animationg a text that will appear after game finished and user won the game / got complete score (5 for easy 50 for hard)
 * 
 * this is a animate svg element
 */
function textAnimationWin() {


    let svgNS = "http://www.w3.org/2000/svg";

    // get svg
    let svg = document.querySelector("svg");

    // create a new group for this element in svg
    let svggroup = document.createElementNS(svgNS, "g");

    let innerText = document.createTextNode("You won");

    // create text element in svg
    let svgText = document.createElementNS(svgNS, "text");
    let angle = 0; // the first value of angle
    let ox = 0; //  the first value of translate x
    let oy = 0; //  the first value of translate y
    let x = 400; // Adjust x position 
    let y = 540; // Adjust y position

    svgText.setAttribute("fill", "green"); // set the fill color of this text green
    svgText.setAttribute("stroke", "white"); // set the stroke color of this text white
    svgText.setAttribute("id", "svgText"); // set id for this text
    svgText.setAttribute("x", x); // set x position of this text
    svgText.setAttribute("y", y); // set y position of this text
    svgText.setAttribute("font-size", "100px"); // set the font size
    svgText.setAttribute("transform", `rotate(${angle} ${x} ${y}) translate(${ox} ${oy})`); // the first transform of this text 

    svgText.appendChild(innerText); // build and add the value of the text to group


    svggroup.appendChild(svgText); // build and add this text to group
    svg.appendChild(svggroup); // build and add this group to svg

    // Animate the rotation of this svg element
    setInterval(() => {
        angle += 2; // increment angle for rotation
        ox += 0.5; // increment translate x
        oy += 0.25; // Increment translate y
        svgText.setAttribute("transform", `rotate(${angle} ${x} ${y}) translate(${ox} ${oy})`); // update the transform of this text because we changed the lements that it contains
    }, 27); // adjust the interval for smoothness and moving of that

}

/**
 * This is a function for when game finished and user couldn't get complete score and lost in game 
 * 
 * this is a animate svg element
 */
function textAnimationloose() {


    let svgNS = "http://www.w3.org/2000/svg";

    // get svg 
    let svg = document.querySelector("svg");

    // create group in svg
    let svggroup = document.createElementNS(svgNS, "g");
    
   
    // create text in group of this svg
    let svgText = document.createElementNS(svgNS, "text");

    // put value in this text element
    let innerText = document.createTextNode("You Lost");
    let angle = 0;  // the first value of angle
    let ox = 0; //  the first value of translate x
    let oy = 0; //  the first value of translate y
    let x = 400; // Adjust x position 
    let y = 540; // Adjust y position 

    svgText.setAttribute("fill", "red"); // set the fill color of this text red
    svgText.setAttribute("stroke", "black"); // set the stroke color of this text black
    svgText.setAttribute("id", "svgText"); // set id for this text
    svgText.setAttribute("x", x); // set x position of this text
    svgText.setAttribute("y", y); // set y position of this text
    svgText.setAttribute("font-size", "100px"); // set the font size
    svgText.setAttribute("transform", `rotate(${angle} ${x} ${y}) translate(${ox} ${oy})`); // the first transform of this text 

    svgText.appendChild(innerText); // build and add the value of the text to group
 
    svggroup.appendChild(svgText); // build and add this text to group
    svg.appendChild(svggroup); // build and add this group to svg

    // Animate the rotation of this svg element
    setInterval(() => {
        angle += 2; // increment angle for rotation
        ox += 0.5;  // increment translate x
        oy += 0.25; // increment translate y
        svgText.setAttribute("transform", `rotate(${angle} ${x} ${y}) translate(${ox} ${oy})`); // update the transform of this text because we changed the lements that it contains
    }, 27); // adjust the interval for smoothness and moving of that

}



/**
 * This is a function for removing a svg element which is text 
 */
function removeText() {
    // Remove the text element
    let svgText = document.getElementById("svgText");

    // if text exist
    if (svgText) {
        svgText.remove();
    }

}

/**
 * This is a function for removing snowman(player) from svg when game finished
 */
function removePlayer() {

    // get svg 
    let svg = document.querySelector("svg");

    // get player which is the group in svg that made player / snowman (all of the elements in that group)
    let player = document.getElementById("player");

    // remove the child or this group from svg
    svg.removeChild(player);




}

/**
 * Now when the page load here is the important part of our code that will call functions to make game
 */
window.addEventListener("load", function () {




    // Start a Game when user chose level easy
    document.getElementById("easy").addEventListener("click", function () {
        

        // disapearing the easy , hard button and the text that was asking do u want to play game
        document.getElementById("easy").style.display = "none";
        document.getElementById("hard").style.display = "none";
        document.getElementById("text").innerText = "";
        
        // call this function to start game text animate appear 
        textAnimationOne();

        // after 5 second the text will get remove and the game will start
        setTimeout(function () {
            removeText();

        }, 5000);

        // the easy game will start 

        setTimeout(function () {

            startGameEasy();

        }, 5000);


        // we have moveSnow function here that will make snow balls move
        moveSnow();

        // to remove player and finish the game after snowballs disapear   
        setTimeout(function () {

            removePlayer();

        }, 13400);


        // appear the animate text which depend on score that show you win or you lost
        setTimeout(function () {
            if (score == 5) {

                textAnimationWin();
            }
            else {

                textAnimationloose();
            }



        }, 13400);
        
        // I rathrede after 5 second remove the win or lost text because it looks better but it was our choice we can still have it till it dispears from svg by moving
        setTimeout(function () {

            removeText();



        }, 19000);


 });

    // Start a Game when user chose level hard
    document.getElementById("hard").addEventListener("click", function () {

         // disapearing the easy , hard button and the text that was asking do u want to play game
        document.getElementById("easy").style.display = "none";
        document.getElementById("hard").style.display = "none";
        document.getElementById("text").innerText = "";
       
        // call this function to start game text animate appear 
        textAnimationOne()

        
        // after 5 second the text will get remove and the game will start
        setTimeout(function () {
            removeText();

        }, 5000);

         // the hard game will start 
        setTimeout(function () {

            startGameHard();

        }, 5000);

        
        // we have moveSnow function here that will make snow balls move
        moveSnow();

        // to remove player and finish the game after snowballs disapear   
        setTimeout(function () {

            removePlayer();


        }, 13400);


        // appear the animate text which depend on score that show you win or you lost
        setTimeout(function () {

            if (score == 50) {

                textAnimationWin()
            }
            else {

                textAnimationloose();
            }

        }, 13400);

        // I rathrede after 5 second remove the win or lost text because it looks better but it was our choice we can still have it till it dispears from svg by moving
        setTimeout(function () {

            removeText();


        }, 19000);


    });
});





