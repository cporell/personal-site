load();

function load()
{
    // Read in update list
    var updates = [
        {"date": "November 2017", "title": "Empyrea Part 1", "content": "Empyrea Part 1 was released. Level cap to 125."},
        {"date": "April 2018", "title": "Hatchmaking", "content": "Add Hatchmaking Kiosk to find hatching partners easily."},
        {"date": "July 2018", "title": "New Textures", "content": "New textures for tutorial, Free-to-Play areas; Classic Mode added."}
    ];

    console.log("hi");

    // Update the select dropdown
    updates.forEach(function(update){
        console.log(update);
        var option = "<option value=\"#" + update.date + "\">" + update.date + " - " + update.title + "</option>";
        document.getElementById("whats-new-updates").innerHTML += option;
    });

    // Populate the timeline
    var rightSide = true;
    updates.forEach(function(update){
        var contentBlock;
        if(rightSide == true) 
        {
            contentBlock = "<div class=\"container right\">";
        }
        else
        {
            contentBlock = "<div class=\"container left\">";
        }
        
        contentBlock += "<div class=\"content\">";
        contentBlock += "<h2>" + update.date + " - " + update.title + "</h2>";
        contentBlock += "<p>" + update.content + "</p>";
        contentBlock += "</div>";
        contentBlock += "</div>";

        rightSide = !rightSide;

        // if(rightSide == true)
        // {
        //     document.getElementById("whats-new-timeline-right").innerHTML += contentBlock;
        //     rightSide = false;
        // }
        // else
        // {
        //     document.getElementById("whats-new-timeline-left").innerHTML += contentBlock;
        //     rightSide = true;
        // }
        document.getElementById("whats-new-timeline").innerHTML += contentBlock;
    });
}