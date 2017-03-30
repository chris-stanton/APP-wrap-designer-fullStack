
/*DH blank mesurements, measure from guide to guide
all other blanks measure from tip to butt*/


-- <--- threads table --->
CREATE TABLE threads (
  id SERIAL PRIMARY KEY,
  mfgName VARCHAR(80) NOT NULL,
  color VARCHAR(80) NOT NULL,
  image VARCHAR(80)
);

INSERT INTO threads (mfgName, color, image)
VALUES ('ProWrap', 'Neon Orange', 'assets/images/threads/neonOrange.png'),
        ('ProWrap', 'Neon Pink', 'assets/images/threads/neonPink.png'),
        ('ProWrap', 'Neon Green', 'assets/images/threads/neonGreen.png');


-- <--- blankColors database --->
CREATE TABLE blankColors (
  id SERIAL PRIMARY KEY,
  color VARCHAR(80) NOT NULL,
  image VARCHAR(80)
);

INSERT INTO blankColors (color, image, mfgName)
VALUES ('Belize Blue', './assets/images/blankColors/belizeBlue.png', 'St. Croix'),
        ('Carbon Pearl', './assets/images/blankColors/carbonPearl.png', 'St. Croix'),
        ('Lava Red Metallic', './assets/images/blankColors/lavaRedMetallic.png', 'St. Croix'),
        ('Canteen Green Pearl', './assets/images/blankColors/canteenGreenPearl.png', 'St. Croix'),
        ('Forest Green Pearl', './assets/images/blankColors/forestGreenPearl.png', 'St. Croix'),
        ('Blue Green Flip', './assets/images/blankColors/blueGreenFlip.png', 'St. Croix'),
        ('Cobalt Blue Pearl', './assets/images/blankColors/cobaltBluePearl.png', 'St. Croix'),
        ('Galatin Green', './assets/images/blankColors/galatinGreen.png', 'St. Croix'),
        ('Black Pearl', './assets/images/blankColors/blackPearl.png', 'St. Croix'),
        ('Tidemaster Green', './assets/images/blankColors/tidemasterGreen.png', 'St. Croix'),
        ('Fushsia Metallic', './assets/images/blankColors/fuchsiaMetallic.png', 'St. Croix'),
        ('Burgundy', './assets/images/blankColors/burgundy.png', 'St. Croix'),
        ('Sea Foam Green', './assets/images/blankColors/seaFoamGreen.png', 'St. Croix'),
        ('Honey Pearl', './assets/images/blankColors/honeyPearl.png', 'St. Croix'),
        ('White Pearl', './assets/images/blankColors/whitePearl.png', 'St. Croix');



-- <--- database being currentlly used --->
CREATE TABLE newBlanks (
  id SERIAL PRIMARY KEY,
  blankName VARCHAR(80) NOT NULL,
  mfgName VARCHAR(80) NOT NULL,
  blankLength INT NOT NULL,
  blankMaterial VARCHAR(80),
  handleLength INT NOT NULL,
  guideSizeTipTop INT NOT NULL,
  guideSizeTwo INT NOT NULL,
  guideSizeThree INT NOT NULL,
  guideSizeFour INT NOT NULL,
  guideSizeFive INT,
  guideSizeSix INT,
  oneTwo INT NOT NULL,
  twoThree INT NOT NULL,
  threeFour INT,
  fourFive INT,
  fiveSix INT
);

INSERT INTO newBlanks (blankName, mfgName, blankLength, blankMaterial, handleLength,
            guideSizeTipTop, guideSizeTwo, guideSizeThree, guideSizeFour, guideSizeFive, guideSizeSix
            oneTwo, twoThree, threeFour, fourFive, fiveSix)
VALUES ('LongBoard', 'DH Custom Rods and Tackle', '32', 'Fiberglass', '5',
       2, 2, 3, 4, 5, 10,
       3.25, 2.69, 3.19, 3.69, 4.25);


-- <--- admin rights --->
CREATE TABLE adminEmail (
  id SERIAL PRIMARY KEY,
  userEmail VARCHAR(80) NOT NULL
);

INSERT INTO adminEmail (userEmail)
VALUES ('cstanton0760@yahoo.com');
