var stage;
var layer;
var transformer;
var group;

var MAX_WIDTH = 794;
var MAX_HEIGHT = 1123;

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;



var is_potrait = true;

var ALL_TEXT_ID = [];
var ALL_TEXT_DOM = [];

var ALL_CIRCLE_ID = [];
var ALL_CIRCLE_DOM = [];

var ALL_TRIANGLE_ID = [];
var ALL_TRIANGLE_DOM = [];

var ALL_SQUARE_ID = [];
var ALL_SQUARE_DOM = [];

var ALL_IMAGE_ID = [];
var ALL_IMAGE_DOM = [];


var ALL_LINE_ID = [];
var ALL_LINE_DOM = [];

var ALL_RTEXT_ID = [];
var ALL_RTEXT_DOM = [];

var shift = false;
var stageBackgroundRect;
$(document).ready(function(){
    stage = new Konva.Stage({
        container: 'container',
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
    });

    layer = new Konva.Layer();
    stage.add(layer);
    group = new Konva.Group();

    stageBackgroundRect =  new Konva.Rect({ 
        x:1,
        y:1,
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        listening: true,    
        name:"back", 
        fillLinearGradientStartPoint: { x: -50, y: -50 },
        fillLinearGradientEndPoint: { x: 50, y: 50 },
        strokeEnabled: true,
        stroke: 'grey',

    });


    layer.add(stageBackgroundRect);







    transformer = new Konva.Transformer({ 
        keepRatio: false,
    });
     transformer.on('mouseover', function () {
        stage.container().style.cursor = 'move';
    });
     transformer.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
    });


    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            shift  = true;
        }
    });
    $(document).keyup(function(e)   {
        shift = false;
    });


    transformer.update = function() {
        Konva.Transformer.prototype.update.call(transformer);
        var rot = this.findOne('.rotater');
        rot.stroke("");
        rot.width("20");

        rot.y(-60);
        rot.height("20");

        var imageObj = new Image();
        imageObj.onload = function() {
            rot.fillPatternImage(imageObj);
            rot.fillPatternRepeat("no-repeat");
            rot.fillPriority('pattern');
            rot.fillPatternScale(   {
                x:0.3,
                Y:0.3
            })
        }
        imageObj.src = "svg/rotation2.png";
    }
    transformer.rotationSnaps([]);

    transformer.forceUpdate();


    layer.add(group);
    layer.add(transformer);




    $("#container").css("width",MAX_WIDTH +3);
    $("#container").css("height",MAX_HEIGHT +3);   




    stage.on("click",function(e){
stage.container().style.cursor = 'default';
        //return if target is circle || e.target.hasName('circle') || e.target.hasName('triangle')
        if(e.target === stage || e.target.hasName('back') ){
            transformer.nodes([]);
            layer.batchDraw();
            setActiveProperty("stageBackground",0);
            return;
        }

        transformer.nodes([e.target]);
        layer.batchDraw();

    });
fit();
// stage.container().style.padding = "5px";

// var c = new Konva.Circle({ x:stage.width() / 2, y:stage.height() /2, radius: 5, fill: 'red', strokeWidth: 5 }); layer.add(c);
});


function getCircularText(fColor, circlebunch, trianglebunch, linetextbunch,picturebunch, squarebunch,linesbunch, deletedelements,stagebackground,roundtextbunch) {


    stageBack(stagebackground);
    texts(linetextbunch);
    circles(circlebunch);
    triangles(trianglebunch);
    squares(squarebunch);
    images(picturebunch);
    lines(linesbunch);
    roundtexts(roundtextbunch);



}   

function setActiveProperty(unique,id){

    $(".card-body").removeClass("all");
    hideallproperties();
    var valueoflabel =unique+"#"+id;
    $(this).addClass('all');
    var elementtype = valueoflabel.split("#")[0];
    var elementindex = valueoflabel.split("#")[1];
    var propertywindowid = elementtype.trim() + elementindex;
    $("#" + propertywindowid).attr("style", "display:block");

}
function stageBack(stagebackground){
    //console.log(stagebackground);
    if(stagebackground[0] == null || stagebackground[0] == ""){
        return;
    }
    //Fill
    if(stagebackground[0] == '1'){

        stageBackgroundRect.draggable(false);
        stageBackgroundRect.fillPriority('fill');
        stageBackgroundRect.fill(stagebackground[1]);
        layer.batchDraw();
    }
    //Gradient
    else if(stagebackground[0] == '2'){
        stageBackgroundRect.draggable(false);
        stageBackgroundRect.fillPriority('linear-gradient');
        stageBackgroundRect.fillLinearGradientStartPoint({ x: 0,y:0 });
        stageBackgroundRect.fillLinearGradientEndPoint({ x: stage.width() / 2,y: stage.height() / 2 });
        stageBackgroundRect.fillLinearGradientColorStops([0, stagebackground[3], 1, stagebackground[2]]);
        layer.batchDraw();
    }
    else if(stagebackground[0] == '3' && stagebackground[5] !== null){

        var scale = 0;
        var imgW = 0;
        var imgH = 0;
        stageBackgroundRect.draggable(true);
        stageBackgroundRect.fillPriority('pattern');

        var imageObj = new Image();
        imageObj.onload = function() {
            imgH = parseInt(this.height);
            imgW = parseInt(this.width);
            stageBackgroundRect.fillPatternImage(imageObj);

            if(stagebackground[8] == "1" || stagebackground[8] == null){
                stageBackgroundRect.fillPatternRepeat('repeat');
            }
            else if(stagebackground[8] == "2"){
               stageBackgroundRect.fillPatternRepeat('no-repeat');   
           }
           else if(stagebackground[8] == "3"){ 
            stageBackgroundRect.fillPatternRepeat('no-repeat');  
            scale = Math.max(stage.width() / imgW, stage.height() / imgH);
            //console.log(scale);
            stageBackgroundRect.fillPatternScale({
                x: scale,
                y: scale
            });

        }
        if(stagebackground[8] == "3"){

        }else{
            stageBackgroundRect.fillPatternScale({
                x: parseInt(stagebackground[6]),
                y:    parseInt(stagebackground[7])
            });

        }
        layer.batchDraw();
    };
    imageObj.src = stagebackground[5];
 }

}
function texts(linetextbunch){
   for (var i = 0; i < linetextbunch.length; ++i) {
    //console.log(linetextbunch[i]);
                 //Deleted
                 if (linetextbunch[i][10] != null && linetextbunch[i][10] == "deleted") {
                    ALL_TEXT_DOM[i].remove();
                    stage.draw();
                    continue;
                }

    //Has been drawed
    if(ALL_TEXT_ID.indexOf(i) != -1){
        //Update the text            
        ALL_TEXT_DOM[i].fontFamily(''+linetextbunch[i][4]);
        ALL_TEXT_DOM[i].text(''+linetextbunch[i][0]);
        ALL_TEXT_DOM[i].fill(''+linetextbunch[i][11]);
        ALL_TEXT_DOM[i].fontSize(''+linetextbunch[i][5]);
        ALL_TEXT_DOM[i].fontStyle(''+linetextbunch[i][6]+' '+linetextbunch[i][7]);
        transformer.nodes([]);
        transformer.nodes([ALL_TEXT_DOM[i]]);
        layer.batchDraw();



        continue;

    }
    
    ALL_TEXT_ID.push(i);



    var simpleText = new Konva.Text({

        x: (stage.width() / 2) - 80,
        y: stage.height() / 2,
        text: linetextbunch[i][0],
        id:i,
        fontSize: linetextbunch[i][5],
        fontFamily: linetextbunch[i][4],
        fill: linetextbunch[i][11],
        draggable: true,
    });
    simpleText.offsetX(simpleText.width() / 2);
    simpleText.offsetY(simpleText.height() / 2);
    simpleText.x(simpleText.x() + simpleText.width() / 2);
    simpleText.y(simpleText.y() + simpleText.height() / 2);

    ALL_TEXT_DOM.push(simpleText);
    

    group.add(simpleText);
    
    transformer.nodes([]);
    transformer.nodes([simpleText]);

    layer.batchDraw();


    
    simpleText.on('click',()=>{
        setActiveProperty("LineText ",simpleText.id());
    });


    simpleText.on('transform', function () {
        if(shift)   {
            transformer.rotationSnaps([0, 90, 180, 270]);
            transformer.rotationSnapTolerance(85);

        }
        else    {
             transformer.rotationSnaps([]);
            transformer.rotationSnapTolerance(5);
        }
      });
        simpleText.on('dragstart', function () {
            
            stage.container().style.cursor = 'move';
      });
                simpleText.on('dragend', function () {
            

            stage.container().style.cursor = 'default';
      });



 }
}
// 
function circles(circlebunch){

   for (var i = 0; i < circlebunch.length; ++i) {

    transformer.nodes([]);
                //Deleted
                if (circlebunch[i][12] != null && circlebunch[i][12] == "deleted") {
                    transformer.nodes([]);
                    ALL_CIRCLE_DOM[i].remove();
                    stage.draw();
                    continue;
                }

                if(ALL_CIRCLE_ID.indexOf(i) != -1){

                    transformer.nodes([]);

                    ALL_CIRCLE_DOM[i].fill(''+circlebunch[i][10]);
                    ALL_CIRCLE_DOM[i].strokeWidth(parseInt(circlebunch[i][1]));
                    ALL_CIRCLE_DOM[i].stroke(''+circlebunch[i][11]);
                    ALL_CIRCLE_DOM[i].x(ALL_CIRCLE_DOM[i].x());
                    ALL_CIRCLE_DOM[i].y(ALL_CIRCLE_DOM[i].y());
                    ALL_CIRCLE_DOM[i].radius(circlebunch[i][0]);

                    layer.batchDraw();

                    continue;

                }

                ALL_CIRCLE_ID.push(i);



                var circle = new Konva.Circle({
                    x: stage.width() / 2,
                    y: stage.height() / 2,
                    radius: circlebunch[i][0]+'',
                    fill: circlebunch[i][10]+'',
                    stroke: circlebunch[i][11]+'',
                    strokeWidth: parseInt(circlebunch[i][2]),
                    draggable:true,
                    id:i,
                    name: 'circle',
                });



                ALL_CIRCLE_DOM.push(circle);


                group.add(circle);
                //console.log(group);

                layer.batchDraw();



                circle.on('click',()=>{
                    setActiveProperty("Circle ",circle.id());
                });

    circle.on('transform', function () {
        if(shift)   {
            transformer.rotationSnaps([0, 90, 180, 270]);
            transformer.rotationSnapTolerance(85);

        }
        else    {
                    transformer.rotationSnaps([]);
            transformer.rotationSnapTolerance(5);
        }
      });       
       circle.on('dragstart', function () {
            
            stage.container().style.cursor = 'move';
      });
                circle.on('dragend', function () {
            

            stage.container().style.cursor = 'default';
      });



            }
        }
//
function triangles(trianglebunch){

 transformer.nodes([]);
 for (var i = 0; i < trianglebunch.length; ++i) {
                //Deleted
                if (trianglebunch[i][12] != null && trianglebunch[i][12] == "deleted") {
                    ALL_TRIANGLE_DOM[i].remove();
                    stage.draw();
                    continue;
                }

                if(ALL_TRIANGLE_ID.indexOf(i) != -1){


                    ALL_TRIANGLE_DOM[i].fill(''+trianglebunch[i][10]);
                    ALL_TRIANGLE_DOM[i].strokeWidth(parseInt(trianglebunch[i][1]));
                    ALL_TRIANGLE_DOM[i].stroke(''+trianglebunch[i][11]);
                    ALL_TRIANGLE_DOM[i].x(ALL_TRIANGLE_DOM[i].x());
                    ALL_TRIANGLE_DOM[i].y(ALL_TRIANGLE_DOM[i].y());
                    ALL_TRIANGLE_DOM[i].radius(trianglebunch[i][0]);

                    layer.batchDraw();

                    continue;

                }

                ALL_TRIANGLE_ID.push(i);





                var triangle = new Konva.RegularPolygon({
                  x: stage.width() / 2,
                  y: stage.height() / 2,
                  sides: 3,
                  radius: trianglebunch[i][0],
                  fill: trianglebunch[i][10],
                  stroke: trianglebunch[i][11],
                  strokeWidth: parseInt(trianglebunch[i][1]),
                  draggable:true,
                  id:i,
                  name: 'triangle',
              });

                ALL_TRIANGLE_DOM.push(triangle);


                group.add(triangle);

                layer.batchDraw();



                triangle.on('click',()=>{
                    setActiveProperty("Triangle ",triangle.id());
                });
    triangle.on('transform', function () {
        if(shift)   {
            transformer.rotationSnaps([0, 90, 180, 270]);
            transformer.rotationSnapTolerance(70);

        }
        else    {
                    transformer.rotationSnaps([]);
            transformer.rotationSnapTolerance(5);
        }
      });
       triangle.on('dragstart', function () {
            
            stage.container().style.cursor = 'move';
      });
                triangle.on('dragend', function () {
            

            stage.container().style.cursor = 'default';
      });



            }
        }
//
function squares(squarebunch){

   transformer.nodes([]);
   for (var i = 0; i < squarebunch.length; ++i) {
                //Deleted
                if (squarebunch[i][12] != null && squarebunch[i][12] == "deleted") {
                    ALL_SQUARE_DOM[i].remove();
                    stage.draw();
                    continue;
                }

                if(ALL_SQUARE_ID.indexOf(i) != -1){


                    ALL_SQUARE_DOM[i].fill(squarebunch[i][10]);
                    ALL_SQUARE_DOM[i].strokeWidth(parseInt(squarebunch[i][1]));
                    ALL_SQUARE_DOM[i].stroke(squarebunch[i][11]);
                    ALL_SQUARE_DOM[i].width(parseInt(squarebunch[i][0]));
                    ALL_SQUARE_DOM[i].height(parseInt(squarebunch[i][0]));

                    layer.batchDraw();

                    continue;

                }

                ALL_SQUARE_ID.push(i);


                var square = new Konva.Rect({
                    x: stage.width() / 2 ,
                    y: stage.height() / 2 ,
                    width: 100,
                    height: 100,
                    fill: squarebunch[i][10],
                    stroke: squarebunch[i][11],
                    strokeWidth: parseInt(squarebunch[i][1]),
                    id:i,
                    draggable:true,
                    offset:{
                        x: 50,
                        y:50,
                    },
                });

                ALL_SQUARE_DOM.push(square);


                group.add(square);

                layer.batchDraw();



                square.on('click',()=>{
                    setActiveProperty("Square ",square.id());
                });


    square.on('transform', function () {
        if(shift)   {
            transformer.rotationSnaps([0, 90, 180, 270]);
            transformer.rotationSnapTolerance(85);

        }
        else    {
                    transformer.rotationSnaps([]);
            transformer.rotationSnapTolerance(5);
        }
      });

       square.on('dragstart', function () {
            
            stage.container().style.cursor = 'move';
      });
                square.on('dragend', function () {
            

            stage.container().style.cursor = 'default';
      });


            }
        }
//

function images(picturebunch){
   for (var i = 0; i < picturebunch.length; ++i) {

    transformer.nodes([]);
    if (picturebunch[i][6] != null && picturebunch[i][6] == "deleted") {

        ALL_IMAGE_DOM[i].remove();
        stage.draw();
        continue;
    }
    if(picturebunch[i][0] == ""){
        continue;
    }

    //Has been drawed
    if(ALL_IMAGE_ID.indexOf(i) != -1){
        layer.find(".img").getParent().remove();

        layer.batchDraw();

        var imageObj = new Image();
        imageObj.onload = function() {
            var image = new Konva.Image({
                x: stage.width() / 2 - (150 / 2),
                y: stage.height() / 2 - (150 / 2),
                image: imageObj,
                width: 150,
                draggable:true,
                height: 150,
                id:i,
                name:"img"
            });
            ALL_IMAGE_DOM.push(image);
            group.add(image);
            layer.add(group);
            layer.batchDraw();
        };
        imageObj.src = picturebunch[i][0];
        continue;
    }

    ALL_IMAGE_ID.push(i);


    
    var imageObj = new Image();
    imageObj.onload = function() {
        var image = new Konva.Image({               
           x: stage.width() / 2  - (150 / 2),
           y: stage.height() / 2  - (150 / 2),
           image: imageObj,
           width: 150,
           draggable:true,
           height: 150,
           id:i,
           name:"img"
       });
        ALL_IMAGE_DOM.push(image);
        group.add(image);
        layer.batchDraw();
            image.on('transform', function () {
        if(shift)   {
            transformer.rotationSnaps([0, 90, 180, 270]);
            transformer.rotationSnapTolerance(85);

        }
        else    {
                    transformer.rotationSnaps([]);
            transformer.rotationSnapTolerance(5);
        }
      });
       image.on('dragstart', function () {
            
            stage.container().style.cursor = 'move';
      });
                image.on('dragend', function () {
            

            stage.container().style.cursor = 'default';
      });

    };
    imageObj.src = picturebunch[i][0];
    // alternative API:



}
}

function lines(linebunch){

   transformer.nodes([]);
   for (var i = 0; i < linebunch.length; ++i) {
                //Deleted
                if (linebunch[i][12] != null && linebunch[i][12] == "deleted") {
                    ALL_LINE_DOM[i].remove();
                    stage.draw();
                    continue;
                }


                if(ALL_LINE_ID.indexOf(i) != -1){

                    if(linebunch[i][3] == "0"){

                       ALL_LINE_DOM[i].dashEnabled(false);
                   } 
                   else if(linebunch[i][3] == "1"){
                    ALL_LINE_DOM[i].dashEnabled(true);
                }else{
                    ALL_LINE_DOM[i].remove();
                    layer.batchDraw();
                    var arrow = new Konva.Arrow({
                        points: [stage.width() / 2,stage.height() / 2,20,stage.height() / 2],
                        pointerAtBeginning: true,
                        fill: linebunch[i][10],
                        stroke: linebunch[i][10],
                        id:i,
                        draggable:true,
                        strokeWidth: 4,
                    });
                    ALL_LINE_DOM[i] = arrow;
                    group.add(arrow);
                }

                ALL_LINE_DOM[i].stroke(linebunch[i][10]);
                var prevpoints = ALL_LINE_DOM[i].points();
                prevpoints[2] = parseInt(parseInt(linebunch[i][2]) + (stage.width() / 2));
                ALL_LINE_DOM[i].strokeWidth(parseInt(linebunch[i][1]));

                layer.batchDraw();

                continue;

            }

            ALL_LINE_ID.push(i);


            layer.add(group);

            var Line = new Konva.Line({
                points: [stage.width() / 2,stage.height() / 2,parseInt(parseInt(linebunch[i][2]) + (stage.width() / 2)),stage.height() / 2],
                stroke: linebunch[i][10],
                width:20,
                strokeWidth: parseInt(linebunch[i][1]),
                id:i,
                draggable: true,
                dash: [6, 5],
                dashEnabled: false,
            });
            ALL_LINE_DOM.push(Line);


            group.add(Line);

            layer.batchDraw();



            Line.on('click',()=>{
                setActiveProperty("Line",Line.id());
            });
 Line.on('transform', function () {
        if(shift)   {
            transformer.rotationSnaps([0, 90, 180, 270]);
            transformer.rotationSnapTolerance(85);

        }
        else    {
                    transformer.rotationSnaps([]);
            transformer.rotationSnapTolerance(5);
        }
      });

       Line.on('dragstart', function () {
            
            stage.container().style.cursor = 'move';
      });
                Line.on('dragend', function () {
            

            stage.container().style.cursor = 'default';
      });

        }
}
//
function roundtexts(roundtextbunch){

   transformer.nodes([]);
   for (var i = 0; i < roundtextbunch.length; ++i) {
    


                //Deleted
                if (roundtextbunch[i][11] != null && roundtextbunch[i][11] == "deleted") {
                    ALL_RTEXT_DOM[i].remove();
                    stage.draw();
                    continue;
                }

                if(ALL_RTEXT_ID.indexOf(i) != -1){
                    var radius = roundtextbunch[i][0];
                    ALL_RTEXT_DOM[i].text(''+roundtextbunch[i][3]);
                    ALL_RTEXT_DOM[i].data("M 0, 0 a "+radius / 4 +","+radius / 4+" 0 1,1 40,0");
                    ALL_RTEXT_DOM[i].fontFamily(roundtextbunch[i][4]);
                    ALL_RTEXT_DOM[i].fontSize(parseInt(roundtextbunch[i][5]));
                    ALL_RTEXT_DOM[i].letterSpacing(parseInt(roundtextbunch[i][1]));
                    ALL_RTEXT_DOM[i].rotation(parseInt(roundtextbunch[i][2]));

                    ALL_RTEXT_DOM[i].fill(roundtextbunch[i][10]);

                    ALL_RTEXT_DOM[i].fontStyle(''+roundtextbunch[i][6]+' '+roundtextbunch[i][7]);

                    layer.batchDraw();

                    continue;

                }

                ALL_RTEXT_ID.push(i);


                var textpath = new Konva.TextPath({
                  x: stage.width() / 2,
                  y: 250,
                  draggable:true,
                  fill: roundtextbunch[i][10],
                  id:i,
                  fontSize: parseInt(roundtextbunch[i][5]),
                  fontFamily: roundtextbunch[i][4],
                  text: roundtextbunch[i][3],
                  data: 'M 0, 0 a '+roundtextbunch[i][0] / 4+','+roundtextbunch[i][0] / 4+' 0 1,1 40,0'
              });

                ALL_RTEXT_DOM.push(textpath);


                group.add(textpath);

                layer.batchDraw();



                textpath.on('click',()=>{
                    setActiveProperty("RoundText ",textpath.id());
                });

textpath.on('transform', function () {
        if(shift)   {
            transformer.rotationSnaps([0, 90, 180, 270]);
            transformer.rotationSnapTolerance(85);

        }
        else    {
                    transformer.rotationSnaps([]);
            transformer.rotationSnapTolerance(5);
        }
      });
       textpath.on('dragstart', function () {
            
            stage.container().style.cursor = 'move';
      });
                textpath.on('dragend', function () {
            

            stage.container().style.cursor = 'default';
      });
            }
        }
//
function switchStage(){
    scaleboth(1,1);
    if(is_potrait == true)
    {
        //switch to landscape
        stage.width(MAX_HEIGHT);
        stage.height(MAX_WIDTH);

        stageBackgroundRect.width(MAX_HEIGHT);
        stageBackgroundRect.height(MAX_WIDTH);

        $("#container").css("width",MAX_HEIGHT +2);
        $("#container").css("height",MAX_WIDTH +2);
    }
    else{
        stage.width(MAX_WIDTH);
        stage.height(MAX_HEIGHT);
        stageBackgroundRect.width(MAX_WIDTH);
        stageBackgroundRect.height(MAX_HEIGHT);
        $("#container").css("width",MAX_WIDTH +2);
        $("#container").css("height",MAX_HEIGHT +2);   
    }
    is_potrait = !is_potrait;
    fit();
    layer.draw();

}
// function minusStage(){
// console.log(stage.width());
// scaleboth(2,3);
// console.log(stage.width());
    
// }
function minusStage(){

    stage.x(stage.width() / 2);
    stage.y(stage.height() / 2);

    stage.offsetX(stage.width() / 2);
    stage.offsetY(stage.height() / 2);

    scaleboth(stage.scaleX() - 0.01,stage.scaleY() - 0.01);


}
function plusStage(){

    stage.x(stage.width() / 2);
    stage.y(stage.height() / 2);

    stage.offsetX(stage.width() / 2);
    stage.offsetY(stage.height() / 2);

    scaleboth(stage.scaleX() + 0.01,stage.scaleY() + 0.01);


}

function fit(){
if(is_potrait){
    stage.height(SCREEN_HEIGHT - 145);

    stage.width(((SCREEN_HEIGHT - 145) * MAX_WIDTH / MAX_HEIGHT));


    stageBackgroundRect.height(SCREEN_HEIGHT - 152);
    stageBackgroundRect.width(((SCREEN_HEIGHT - 152) * MAX_WIDTH / MAX_HEIGHT));
    
   var parent = $('#stageparent');
   var parent_sub = $('#stageparent > #parent_sub'); 
   var final = (parent_sub.width() - parent.width())/2;
   parent.scrollLeft(final);
   console.log(final);

    //stage.container().style.margin = "10px auto";


    layer.batchDraw();
}
else{
    stage.width(SCREEN_WIDTH - 285);

    stage.height(((SCREEN_WIDTH - 285) * MAX_WIDTH / MAX_HEIGHT));

    stageBackgroundRect.width(SCREEN_WIDTH - 300);

    stageBackgroundRect.height(((SCREEN_WIDTH - 300) * MAX_WIDTH / MAX_HEIGHT));

    layer.batchDraw();

}    

}
function real(){
    
    stage.width(794);

    stage.height(1123);

    stageBackgroundRect.width(794);

    stageBackgroundRect.height(1123);
    
     scaleboth(1,1);
    layer.batchDraw();

}

function scaleboth(_x,_y){
//stageBackgroundRect.scale({x:_x,y:_y});
stage.scale({x:_x,y:_y});

layer.batchDraw();
}
