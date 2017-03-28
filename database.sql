
/*DH blank mesurements, measure from guide to guide
all other blanks measure from tip to butt*/

-- <--- blanks table --->
CREATE TABLE blanks (
  id SERIAL PRIMARY KEY,
  blankName VARCHAR(80) NOT NULL,
  mfgName VARCHAR(80) NOT NULL,
  blankLength INT NOT NULL,
  blankMaterial VARCHAR(80),
  handleLength INT NOT NULL,
  handleType VARCHAR(80)
);

INSERT INTO blanks (blankName, mfgName, blankLength, blankMaterial, handleLength, handleType)
VALUES('Mini Bite', 'DH Custom Rods and Tackle', '21', 'Fiberglass', '3', 'Cork'),
      ('Seven Douce', 'DH Custom Rods and Tackle', '24', 'Fiberglass', '3', 'Cork');


-- <--- guideSize table --->
CREATE TABLE guides (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80),
  guideSizeTipTop INT NOT NULL,
  guideSizeTwo INT NOT NULL,
  guideSizeThree INT NOT NULL,
  guideSizeFour INT NOT NULL,
  guideSizeFive INT,
  guideSizeSix INT
);


-- <--- guideSpacing table --->
CREATE TABLE guideSpacing (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80),
  oneTwo INT NOT NULL,
  twoThree INT NOT NULL,
  threeFour INT,
  fourFive INT,
  fiveSix INT
);


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
VALUES ('Red', './assets/images/blankColors/red.png', 'RodGeeks'),
        ('Brick Red', './assets/images/blankColors/brickRed.png', 'RodGeeks'),
        ('Maroon', './assets/images/blankColors/maroon.png', 'RodGeeks'),
        ('Orange', './assets/images/blankColors/orange.png', 'RodGeeks'),
        ('Yellow', './assets/images/blankColors/yellow.png', 'RodGeeks'),
        ('Ivory', './assets/images/blankColors/ivory.png', 'RodGeeks'),
        ('White', './assets/images/blankColors/white.png', 'RodGeeks'),
        ('Green', './assets/images/blankColors/green.png', 'RodGeeks'),
        ('Purple', './assets/images/blankColors/purple.png', 'RodGeeks'),
        ('Light Blue', './assets/images/blankColors/lightBlue.png', 'RodGeeks'),
        ('Blue', './assets/images/blankColors/blue.png', 'RodGeeks'),
        ('Dark Blue', './assets/images/blankColors/darkBlue.png', 'RodGeeks');



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
