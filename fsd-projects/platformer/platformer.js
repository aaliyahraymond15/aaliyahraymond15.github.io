$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(50, 500, 200, 10);
    createPlatform(300, 400, 200, 10);
    createPlatform(550, 300, 200, 10);
    createPlatform(800, 200, 200, 10);
    createPlatform(1050, 100, 200, 10);

    // TODO 3 - Create Collectables
    createCollectable("diamond", 100, 450);
    createCollectable("max", 350, 350);
    createCollectable("steve", 1050, 50);

    // TODO 4 - Create Cannons
    createCannon("top", 800, 750);
    createCannon("right", 100, 2000);
    createCannon("left", 300, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
