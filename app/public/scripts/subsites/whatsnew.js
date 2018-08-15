load();

function load()
{
    // Read in update list
    var updates = [
        {"date": "July 2018", "title": "New Textures", "content": "New textures for tutorial, Free-to-Play areas; Classic Mode added."},
        {"date": "April 2018", "title": "Hatchmaking", "content": "Add Hatchmaking Kiosk to find hatching partners easily."},
        
        {"date": "November 2017", "title": "Empyrea Part 1", "content": "Empyrea Part 1 was released. Level cap to 125."},     
        {"date": "July 2017", "title": "PvP Updates", "content": "testing"},
        {"date": "April 2017", "title": "Monstrology", "content": "Monstrology side activity - defeat certain classes of monsters to gain minion Treasure Cards, \"silver bullet\" Treasure Cards, and housing guests."},

        {"date": "November 2016", "title": "Mirage", "content": "Mirage released. Level cap to 120."},
        {"date": "August 2016", "title": "Level 50 Elixir", "content": "Level 50 Elixir added to Crowns Shop - players who have completed Dragonspyre can boost a new character to level 50 using Crowns."},
        {"date": "April 2016", "title": "Daily Assignments", "content": "Daily Assignments added - complete small tasks to earn Gold, Crowns, Arena Tickets, and items."},

        {"date": "November 2015", "title": "Polaris", "content": "Polaris released, beginning the Old Cob Arc. Level cap to 110. Arcanum released."},
        {"date": "July 2015", "title": "Ultra Summer Update", "content": "testing"},
        {"date": "April 2015", "title": "Jewel Socketing", "content": "testing"},

        {"date": "November 2014", "title": "Four Dungeons", "content": "New dungeons released - Kembaalung (level 30), Barkingham Palace (level 40), House of Scales (level 60), Darkmoor (level 100). Debut of Shadow-enhanced (school spells with regular + shadow pip cost) magic."},
        {"date": "September 2014", "title": "Crown Shop", "content": "testing"},
        {"date": "July 2014", "title": "Fishing", "content": "Fishing side activity - use fishing spells in certain bodies of water to gain fish for housing decorations and crafting."},
        {"date": "April 2014", "title": "Khrysalis Part 2", "content": "End of Khrysalis released, completing Morganthe Arc. Level cap to 100. Debut of Shadow summon (Shadow attack after several rounds of waiting) magic."},
        {"date": "March 2014", "title": "Team Up!, Dungeon Recall", "content": "Adds Team Up! Kiosk near Bazaar - interact to assist other players with instance zones. Add Dungeon Recall to compass - return to your last dungeon without having to leave a marker."},
        {"date": "January 2014", "title": "Misc. Updates", "content": "testing"},

        {"date": "November 2013", "title": "Khrysalis Part 1, Shadow Magic, Castle Tours", "content": "Beginning of Khrysalis released. Level cap to 95. Debut of Shadow transformation (alter shape to receive strong boosts) magic."},
        {"date": "August 2013", "title": "Aquila", "content": "New dungeon zone released - Mount Olympus (level 30), Atlantea (level 70), Tartarus (level 90)"},
        {"date": "June 2013", "title": "PvP Tournaments", "content": "testing"},
        {"date": "April 2013", "title": "Events", "content": "Add new timed events - special mobs, bosses, and quests added to certain worlds for a limited time."},

        {"date": "December 2012", "title": "Housing Minigames, Misc. Updates", "content": "testing"},
        {"date": "November 2012", "title": "Azteca", "content": "Azteca released. Level cap to 90."},
        {"date": "September 2012", "title": "Decorating Elixir", "content": "testing"},
        {"date": "August 2012", "title": "Mega Pets", "content": "testing"},
        {"date": "June 2012", "title": "Misc. Updates", "content": "testing"},
        {"date": "May 2012", "title": "Avalon", "content": "Avalon released. Level cap to 80."},
        {"date": "April 2012", "title": "Misc. Updates", "content": "testing"},

        {"date": "November 2011", "title": "Zafaria", "content": "Zafaria released. Level cap to 70."},
        {"date": "August 2011", "title": "Wysteria", "content": "New side world Wysteria (level ~25) released."},
        {"date": "May 2011", "title": "Wintertusk", "content": "New side world Wintertusk (level 50-60) released, continuing the Grizzleheim story."},
        {"date": "February 2011", "title": "Celestia Housing", "content": "testing"},
        
        {"date": "December 2010", "title": "Gardening", "content": "Gardening side activity - raise plants in your house to receive gold, treasure cards, reagents, and items."},
        {"date": "October 2010", "title": "Celestia, Astral Magic", "content": "Celestia released, beginning the Morganthe Arc. Level cap raised to 60. Debut of Sun (enchant), Moon (polymorph), and Star (aura) magic."},
        {"date": "September 2010", "title": "Celebrity Guest", "content": "testing"},
        {"date": "July 2010", "title": "Celestia Preview", "content": "testing"},
        {"date": "May 2010", "title": "Advanced Pets", "content": "testing"},
        
        {"date": "December 2009", "title": "School Houses", "content": "testing"},
        {"date": "October 2009", "title": "Mounts, Crown Shop", "content": "testing"},
        {"date": "July 2009", "title": "Grizzleheim, Bazaar, Crafting", "content": "New side world Grizzleheim (level 20-40) released."},
        {"date": "May 2009", "title": "Housing,  Voiceovers", "content": "testing"},
        {"date": "April 2009", "title": "Quest Helper, PvP", "content": "testing"},
        {"date": "March 2009", "title": "Voiceovers, Shared Bank", "content": "testing"},
        {"date": "February 2009", "title": "True Friends, Booster Packs", "content": "testing"},
        {"date": "January 2009", "title": "Dragonspyre", "content": "Dragonspyre released, completing the Malistaire arc. Level cap to 50."},

        {"date": "October 2008", "title": "Zone Passes", "content": "testing"},

    ];

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
        
        contentBlock += "<div class=\"content\" id=\"" + update.date + "\">";
        contentBlock += "<h2>" + update.date + " - " + update.title + "</h2>";
        contentBlock += "<p>" + update.content + "</p>";
        contentBlock += "</div>";
        contentBlock += "</div>";

        rightSide = !rightSide;

        document.getElementById("whats-new-timeline").innerHTML += contentBlock;
    });
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}