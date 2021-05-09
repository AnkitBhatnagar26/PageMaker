$('canvas').remove();




    var mainCanvas = document.createElement('canvas');
    var ctxRef = mainCanvas.getContext('2d');
    mainCanvas.style.backgroundImage = "url('svg/back.svg')";

    mainCanvas.width = 406;
    mainCanvas.height = 527;

    var stage = new Konva.Stage({
        container: 'container',
        width: mainCanvas.width,
        height: mainCanvas.width,
    });


       var layer = new Konva.Layer();

      var arc = new Konva.Arc({
        x: stage.width() / 2,
        y: stage.height() / 2,
        innerRadius: 40,
        outerRadius: 70,
        angle: 60,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4,
      });

      // add the shape to the layer
      layer.add(arc);

      // add the layer to the stage
      stage.add(layer);


    mainCanvas.setAttribute("id", "can");
    var centerX = mainCanvas.width / 2;
    var centerY = mainCanvas.height / 2;


    //Circles
    for (var i = 0; i < circlebunch.length; ++i) {
        console.log(circlebunch[i]);

        if (circlebunch[i][11] != null && circlebunch[i][11] == "deleted") {
            continue;
        }

        ctxRef.beginPath();

        ctxRef.arc(circlebunch[i][11], centerY, (circlebunch[i][0] / 2) - 5, 0, 2 * Math.PI, false);
        ctxRef.lineWidth = circlebunch[i][1] * 2;
        ctxRef.strokeStyle = circlebunch[i][10];
        ctxRef.save();
        ctxRef.clip();

        ctxRef.stroke();
        ctxRef.restore();

    }
    //Line Text
    for (var i = 0; i < linetextbunch.length; ++i) {
        console.log(linetextbunch[i]);
        if (linetextbunch[i][10] != null && linetextbunch[i][10] == "deleted") {
            continue;
        }

        ctxRef.font = linetextbunch[i][6] + ' ' + linetextbunch[i][7] + ' ' + linetextbunch[i][5] + 'px ' + linetextbunch[i][4];
        //console.log(linetextbunch[i][6] + ' ' + linetextbunch[i][7] + ' ' + linetextbunch[i][5] + 'px ' + linetextbunch[i][4]);
        ctxRef.save();
        ctxRef.fillStyle = linetextbunch[i][11];
        ctxRef.translate(linetextbunch[i][1], linetextbunch[i][2]);
        ctxRef.rotate(linetextbunch[i][3] * (Math.PI / 180));
        ctxRef.textBaseline = 'middle';
        ctxRef.textAlign = 'center';
        ctxRef.fillText(linetextbunch[i][0], 0, 15 / 2);
        ctxRef.restore();
    }
    //Rounded Text
    for (var i = 0; i < textbunch.length; ++i) {


        if (textbunch[i][11] != null && textbunch[i][11] == "deleted") {
            continue;
        }


        ctxRef.save();
        var diameter = parseInt(textbunch[i][0]);
        var text = textbunch[i][3];
        var startAngle = parseInt(textbunch[i][2]);
        var kerning = parseInt(textbunch[i][1]);
        var fName = textbunch[i][4];
        var fSize = textbunch[i][5] + "px";
        var align = "center";
        var inwardFacing = true;
        var textInside = true;

        align = align.toLowerCase();

        // calculate height of the font. Many ways to do this
        // you can replace with your own!
        var div = document.createElement("div");
        div.innerHTML = text;
        div.style.position = 'absolute';
        div.style.top = '-10000px';
        div.style.left = '-10000px';
        div.style.fontFamily = fName;
        div.style.fontSize = fSize;
        document.body.appendChild(div);
        var textHeight = div.offsetHeight;
        document.body.removeChild(div);

        // omit next line for transparent background
        mainCanvas.style.backgroundColor = 'white';
        ctxRef.font = textbunch[i][7] + ' ' + textbunch[i][6] + ' ' + fSize + ' ' + fName;


        var clockwise = align == "right" ? 1 : -1; // draw clockwise for aligned right. Else Anticlockwise
        startAngle = startAngle * (Math.PI / 180); // convert to radians

        ctxRef.fillStyle = textbunch[i][10];



        // in cases where we are drawing outside diameter,
        // expand diameter to handle it
        if (!textInside) diameter += textHeight * 2;










        // Reverse letters for align Left inward, align right outward 
        // and align center inward.
        if (((["left", "center"].indexOf(align) > -1) && inwardFacing) || (align == "right" && !inwardFacing)) text = text.split("").reverse().join("");

        // Setup letters and positioning
        ctxRef.translate(250 / 2, 250 / 2); // Move to center
        startAngle += (Math.PI * !inwardFacing); // Rotate 180 if outward
        ctxRef.textBaseline = 'middle'; // Ensure we draw in exact center
        ctxRef.textAlign = 'center'; // Ensure we draw in exact center

        // rotate 50% of total angle for center alignment
        if (align == "center") {
            for (var j = 0; j < text.length; j++) {
                var charWid = ctxRef.measureText(text[j]).width;
                startAngle += ((charWid + (j == text.length - 1 ? 0 : kerning)) / (diameter / 2 - textHeight)) / 2 * -clockwise;
            }
        }

        // Phew... now rotate into final start position
        ctxRef.rotate(startAngle);

        // Now for the fun bit: draw, rotate, and repeat
        for (var j = 0; j < text.length; j++) {
            var charWid = ctxRef.measureText(text[j]).width; // half letter
            // rotate half letter
            ctxRef.rotate((charWid / 2) / (diameter / 2 - textHeight) * clockwise);
            // draw the character at "top" or "bottom" 
            // depending on inward or outward facing
            ctxRef.fillText(text[j], 0, (inwardFacing ? 1 : -1) * (0 - diameter / 2 + textHeight / 2));

            ctxRef.rotate((charWid / 2 + kerning) / (diameter / 2 - textHeight) * clockwise); // rotate half letter
        }

        ctxRef.restore();
    }
    ctxRef.globalCompositeOperation = 'destination-over';
    var u;
    for (var h = 0; h < pictures.length; ++h) {
        if (pictures[h][6] != null && pictures[h][6] == "deleted") {
            continue;
        }
        u = h;
    }

    for (var m = 0; m < pictures.length; ++m) {
        if (pictures[m][6] != null && pictures[m][6] == "deleted") {
            continue;
        }

        var img = new Image();

        var ang = 0; //angle
        img.onload = function() { //on image load do the following stuff
            var ct = document.getElementById('measure');
            ct.appendChild(img);
            var wrh = img.width / img.height;

            //var wrh = img.width / img.height;
            var newWidth = mainCanvas.width;

            var newHeight = newWidth / wrh;

            ct.removeChild(img);


            ctxRef.save(); //saves the state of canvas
            ctxRef.translate(pictures[u][2], pictures[u][3]); //let's translate
            ctxRef.rotate(Math.PI / 180 * pictures[u][4]); //increment the angle and rotate the image 
            ctxRef.translate(-(mainCanvas.width / 2), -(mainCanvas.height / 2)); //let's translate

            ctxRef.drawImage(img, pictures[u][2] - newWidth / 2, pictures[u][3] - newHeight / 2, newWidth, newHeight);



            // ctxRef.drawImage(img, pictures[u][2] - iw/2, pictures[u][3] - ih/2, iw, ih); //draw the image ;)
            ctxRef.restore(); //restore the state of canvas
        };
        img.src = pictures[u][0];
        //


    }

    // Return it
    return (mainCanvas);