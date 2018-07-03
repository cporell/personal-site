// Read in update list
var updates = {"updates": [
    {"date": "November 2017", "title": "Empyrea Part 1", "content": "Empyrea Part 1 was released. Level cap to 125."},
    {"date": "April 2018", "title": "Hatchmaking", "content": "Add Hatchmaking Kiosk to find hatching partners easily."},
    {"date": "July 2018", "title": "New Textures", "content": "New textures for tutorial, Free-to-Play areas; Classic Mode added."}
]};

// Update the select dropdown
foreach (update in updates)
{
    var option = "<option value=\"#" + update.date + "\">" + update.date + " - " + update.title + "</option>";
    $("whats-new-updates").append(option);
}

// Populate the timeline
var rightSide = 0;
foreach (update in updates)
{
    var contentBlock = "<div class=\"content\">";
    contentBlock += "<p>" + update.content + "</p>";
    contentBlock += "</div>";

    if(rightSide == 0)
    {
        $(contentBlock).appendTo("container right");
        rightSide = 1;
    }
    else
    {
        $(contentBlock).appendTo("container left");
        rightSide = 0;
    }
}