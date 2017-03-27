
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
VALUES ('Trimar', 'Green Electra Hologram Braid', 'assets/images/threads/5033.jpg'),
      ('Trimar', 'Black Electra Hologram Braid', 'assets/images/threads/5034.jpg'),
      ('Trimar', 'Fushsia Electra Hologram Braid', '"assets/images/threads/5035.jpg'),
      ('Trimar', 'Red Electra Hologram Braid', 'assets/images/threads/5036.jpg'),
      ('Trimar', 'Purple Electra Hologram Braid', 'assets/images/threads/5038.jpg'),
      ('Trimar', 'Turquoise Electra Hologram Braid', 'assets/images/threads/5039.jpg');


-- <--- blankColors database --->
CREATE TABLE blankColors (
  id SERIAL PRIMARY KEY,
  color VARCHAR(80) NOT NULL,
  image VARCHAR(80)
);

INSERT INTO blankColors (color, image)
VALUES ('Lavendar Metallic', './assets/images/blankColors/lavenderMetallic.png'),
      ('Light Green Metallic', './assets/images/blankColors/lightGreenMetallic.png');


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
