// kubejs/server_scripts/example.js
// This is just an example script to show off multiple types of recipes and removal methods
// Supports /reload

// Listen to server recipe event
onEvent('recipes', event => {
  // Remove broken recipes from vanilla and other mods
  // This is on by default, so you don't need this line
  //event.removeBrokenRecipes = true
	event.remove({mod: 'plantinajar'})
  
  
  // Example of using items with NBT in a recipe

  event.shaped('plantinajar:plant_jar', [
    'GGG',
    'GRG',
    'GIG'
  ], {
    G: 'minecraft:glass',
    I: 'minecraft:hopper',
	R: 'minecraft:redstone'
  }) 
  
  event.shaped('trumpet-skeleton:trumpet', [
    ' B ',
    'BNB',
    'RBB'
  ], {
    B: 'techreborn:brass_ingot',
    N: 'charm:raid_horn',
	R: '#minecraft:buttons'
  }) 
  event.shapeless('allure:magenta_slime_block', '9x astromine:space_slime_ball')
  event.shapeless('minecraft:slime_ball', 'astromine:space_slime_ball')
  event.shapeless('4x bewitchment:dragons_blood_resin', 'bewitchment:dragons_blood_log')
  event.replaceInput({}, 'earthtojavamobs:ruby', '#c:rubies')
  event.replaceInput({}, 'techreborn:ruby_gem', '#c:rubies')
  event.replaceInput({}, 'croptopia:salt', '#c:salt_dusts')
  
})