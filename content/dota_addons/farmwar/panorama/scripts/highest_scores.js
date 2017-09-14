"use strict";

(function()
{
	GameEvents.Subscribe( "transferrichestheroradiant", display_richest_radiant );
	GameEvents.Subscribe( "transferrichestherodire", display_richest_dire );

})();

 function display_richest_radiant(data)
 {
 	var heronameNew = data.HeroName;
 	var gold = data.Gold;

 	var hero_panel_radiant = $.FindChildInContext('#topbarradiantpicture');
 	var imagepanel = hero_panel_radiant.GetChild( 0 );
 	imagepanel.heroname = heronameNew;

 	var gold_panel_radiant = $.FindChildInContext('#topbarradiantgold');
 	var goldpanel = gold_panel_radiant.GetChild( 0 );
 	goldpanel.text = gold.toString();
 }

 function display_richest_dire(data)
 {
 	var heronameNewdire = data.HeroName;
 	var gold = data.Gold;

 	var hero_panel_dire = $.FindChildInContext('#topbardirepicture');
 	var imagepanel = hero_panel_dire.GetChild( 0 );
 	imagepanel.heroname = heronameNewdire;

 	var gold_panel_dire = $.FindChildInContext('#topbardiregold');
 	var goldpanel = gold_panel_dire.GetChild( 0 );
 	goldpanel.text = gold.toString();
 }

