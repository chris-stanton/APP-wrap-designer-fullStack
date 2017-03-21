
/*DH blank mesurements, measure from guide to guide
all other blanks measure from tip to butt*/
////////////////////////////////////////////////////////////////////////////////
// <------ DATABASE SETUP CODE FOR SQL ------>

CREATE TABLE blanks (
id SERIAL PRIMARY KEY,
blankName VARCHAR(80) NOT NULL,
mfgName VARCHAR(80) NOT NULL,
blankLength INT NOT NULL,
blankMaterial VARCHAR(80),
handleLength INT NOT NULL,
handleType VARCHAR(80)
);

INSERT INTO blanks (blankName, mfgName, blankLength, blankMaterial, guides, handleLength, handleType)
VALUES
-- values have baan added to the database
        ('Mini Bite', 'DH Custom Rods and Tackle', '21', 'Fiberglass', 'add array here', '3', 'Cork');
        ('Seven Douce', 'DH Custom Rods and Tackle', '24', 'Fiberglass', 'add array here', '3', 'Cork');


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


CREATE TABLE guideSpacing (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80),
  oneTwo INT NOT NULL,
  twoThree INT NOT NULL,
  threeFour INT,
  fourFive INT,
  fiveSix INT
);



CREATE TABLE threads (
id SERIAL PRIMARY KEY,
mfgName VARCHAR(80),
color VARCHAR(80),
image VARCHAR(80)
);

INSERT INTO threads (mfgName, color, image)
VALUES
-- values have baan added to the database
        ('NCP', 'Black', "assets/images/threads/0001.jpg"),
       ('NCP', 'White', "assets/images/threads/0002.jpg"),
       ('NCP', 'Light Blue', "assets/images/threads/0037.jpg"),
       ('NCP', 'Cobalt Blue', "assets/images/threads/0050.jpg"),
       ('NCP', 'Peach', "assets/images/threads/0051.jpg");



/////////////////////////////////////////////////////////////////////////////////
// <------ DATABASE SETUP CODE FOR MONGODB ------>
//specifies which database to use

//creates collections within "solo" database
db.createCollection( ‘dhBlanks’ );
db.createCollection( ‘mhxBlanks’ );
db.createCollection( ‘threadColors’ );


/*DH blanks*/
db.dhBlanks.insert(
  [
    {
      blankName: 'Mini Bite',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 21,
      blankMaterial: 'Fiberglass',
      guides: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.25
        },
        {
          name: 'guideThree',
          guideSize: 5,
          guideSpacing: 2.75
        },
        {
          name: 'guideFour',
          guideSize: 10,
          guideSpacing: 3.5
        }
      ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: 'Seven Douce',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: '24',
      blankMaterial: 'Fiberglass',
      guides: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.25
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 2.50
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 3.00
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 3.75
        }
      ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: 'Noodle',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 26,
      blankMaterial: 'Fiberglass',
      guides: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.00
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 2.25
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 2.875
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 3.75
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: 'El Dente',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 28,
      blankMaterial: "Fiberglass",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.25
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 2.75
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 3.50
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: 'Longboard',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 32,
      blankMaterial: 'Fiberglass',
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.25
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.69
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 3.19
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 3.69
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 4.25
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: 'Noodle 36',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 36,
      blankMaterial: 'Fiberglass',
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.25
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.75
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 3.50
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 4.50
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 5.75
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },
]);





    {
      blankName: 'Gill Seeker 20',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 20,
      blankMaterial: 'Carbon',
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.00
        },
        {
          name: 'guideThree',
          guideSize: 5,
          guideSpacing: 2.37
        },
        {
          name: 'guideFour',
          guideSize: 10,
          guideSpacing: 3.50
        }
      ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: 'Gill Seeker',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 24,
      blankMaterial: 'Carbon',
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.25
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.75
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 3.50
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 4.50
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 5.75
      ],
      handleLength: 3,
      handleType: 'Cork'
    }

    {
      blankName: 'Gill Seeker 26',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 26,
      blankMaterial: 'Carbon',
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.12
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 2.38
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 3.00
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 4.25
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: 'Gill Seeker 30',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 30,
      blankMaterial: 'Carbon',
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.56
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 3.56
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 3.19
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: 'Gill Seeker 32',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 32,
      blankMaterial: 'Carbon',
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.00
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.56
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 3.19
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 3.81
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: 'Perch Pounder 24',
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 24,
      blankMaterial: 'Carbon',
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.25
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 2.50
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 3.00
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 3.75
        }
      ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: "Perch Pounder 26",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 26,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.13
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 2.38
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 3.25
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: "Perch Pounder 28",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 28,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.13
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 2.38
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 3.25
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Perch Pounder 30",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 30,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.00
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.25
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 2.88
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 3.25
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 4.38
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Perch Pounder 32",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 32,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.00
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.56
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 3.19
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 3.81
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Walleye Stinger 26",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 26,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.13
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 2.38
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 3.25
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Walleye Stinger 28",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 28,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 3,
          guideSpacing: 2.13
        },
        {
          name: 'guideThree',
          guideSize: 4,
          guideSpacing: 2.38
        },
        {
          name: 'guideFour',
          guideSize: 5,
          guideSpacing: 3.25
        },
        {
          name: 'guideFive',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Walleye Stinger 30",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 30,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.00
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.25
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 2.88
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 3.75
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Walleye Stinger 32",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 32,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.00
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.56
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 3.19
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 3.81
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 4.50
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Walleye Stinger 34",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 34,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.00
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.69
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 3.44
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 4.25
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 5.13
        }
      ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Walleye Stinger 36",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 36,
      blankMaterial: "Carbon",
      guideSize: [
        {
          name: 'tipTop',
          guideSize: 2,
          guideSpacing: 0
        },
        {
          name: 'guideTwo',
          guideSize: 2,
          guideSpacing: 2.00
        },
        {
          name: 'guideThree',
          guideSize: 3,
          guideSpacing: 2.69
        },
        {
          name: 'guideFour',
          guideSize: 4,
          guideSpacing: 3.44
        },
        {
          name: 'guideFive',
          guideSize: 5,
          guideSpacing: 4.25
        },
        {
          name: 'guideSix',
          guideSize: 10,
          guideSpacing: 5.19
        }
      ],
      guideSpacing: [
        {'2: 0'},
        {'2: 2'},
        {'3: 2 11/16'},
        {'4: 3 7/16'},
        {'5: 4.25'},
        {'10: 5 1/8'}
        ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Pannie Dropper 19+2",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 19+2,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: 2'},
        {'guideTwo: 3'},
        {'guideThree: 5'},
        {'guideFour: 10'}
        ],
      guideSpacing: [
        {'2: '},
        {'3: '},
        {'5: '},
        {'10:'}
        ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: "Pannie Dropper 20+2",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 20+2,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: #1'},
        {'guideTwo: 2'},
        {'guideThree: 3'},
        {'guideFour: 5'},
        {'guideFifth: 10'}
        ],
      guideSpacing: [
        {'#1: 0'},
        {'2: 2 1/8'},
        {'3: 2.5'},
        {'5: 3'},
        {'10: 3.5'}
        ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: "Pannie Dropper 22+2",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 22+2,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: #1'},
        {'guideTwo: 2'},
        {'guideThree: 3'},
        {'guideFour: 5'},
        {'guideFifth: 10'}
        ],
      guideSpacing: [
        {'#1: 0'},
        {'2: 2'},
        {'3: 2.25'},
        {'5: 2 7/8'},
        {'10: 3.75'}
        ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: "Pannie Dropper 24+2",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 24+2,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: #1'},
        {'guideTwo: 2'},
        {'guideThree: 3'},
        {'guideFour: 4'},
        {'guideFour: 5'},
        {'guideFifth: 10'}
        ],
      guideSpacing: [
        {'#1: 0'},
        {'2: 2'},
        {'3: 2 1/8'},
        {'4: 2.5'},
        {'5: 3'},
        {'10: 3.5'}
        ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: "Pannie Dropper 26+2",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 26+2,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: #1'},
        {'guideTwo: 2'},
        {'guideThree: 3'},
        {'guideFour: 4'},
        {'guideFifth: 5'},
        {'guideSixth: 10'}
        ],
      guideSpacing: [
        {'#1: 0'},
        {'2: 2'},
        {'3: 2 1/8'},
        {'4: 2 3/8'},
        {'5: 3'},
        {'10: 3.5'}
        ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Pannie Dropper 28+2",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 28+2,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: #1'},
        {'guideTwo: 2'},
        {'guideThree: 2'},
        {'guideFour: 3'},
        {'guideFifth: 4'},
        {'guideSixth: 5'},
        {'7th: 10'}
        ],
      guideSpacing: [
        {'#1: 0'},
        {'2: 2'},
        {'2: 2 1/8'},
        {'3: 2 3/8'},
        {'4: 3'},
        {'5: 3.5'},
        {'10: 2.25'}
        ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: "Pantum 24+2",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 24+2,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: #1'},
        {'guideTwo: 2'},
        {'guideThree: 3'},
        {'guideFour: 4'},
        {'guideFifth: 5'},
        {'guideSixth: 10'}
        ],
      guideSpacing: [
        {'#1: 0'},
        {'2: 2'},
        {'3: 2 1/8'},
        {'4: 2.5'},
        {'5: 3'},
        {'10: 3.5}'
        ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: "Pannie Dropper 25+2",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 25+2,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: #1'},
        {'guideTwo: 2'},
        {'guideThree: 3'},
        {'guideFour: 4'},
        {'guideFour: 5'},
        {'guideFifth: 10'}
        ],
      guideSpacing: [
        {'#1: 0'},
        {'2: 2'},
        {'3: 2 3/8'},
        {'4: 2.5'},
        {'5: 3'},
        {'10: 3.5'}
        ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: "Pannie Dropper 29+2",
      mfgName: 'DH Custom Rods and Tackle',
      blankLength: 29+2,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: #1'},
        {'guideTwo: 2'},
        {'guideThree: 3'},
        {'guideFour: 4'},
        {'guideFour: 5'},
        {'guideFifth: 10'}
        ],
      guideSpacing: [
        {'#1: 0'},
        {'2: 2'},
        {'3: 2.25'},
        {'4: 2 7/8'},
        {'5: 3.75'},
        {'10: 4.5'}
        ],
      handleLength: 3,
      handleType: 'Cork'
    }
  ]
);


/*MHX blanks*/
db.mhxBlanks.insert(
  [
    {
      blankName: 'CIB-24ML-MHX',
      mfgName: 'MHX',
      blankLength: 24,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: 2'},
        {'guideTwo: 3'},
        {'guideThree: 4'},
        {'guideFour: 5'},
        {'guideFifth: 10'}
        ],
      guideSpacing: [
        {'2: 0'},
        {'3: 2.5'},
        {'4: 5 3/8'},
        {'5: 8.75'},
        {'10: 13 13/16'}
        ],
      handleLength: 3,
      handleType: 'Cork'
    },

    {
      blankName: 'FIB-26UL-MHX',
      mfgName: 'MHX',
      blankLength: 26,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: 2'},
        {'guideTwo: 3'},
        {'guideThree: 4'},
        {'guideFour: 5'},
        {'guideFifth: 10'}
        ],
      guideSpacing: [
        {'2: 0'},
        {'3: 2 13/16'},
        {'4: 6'},
        {'5: 9.75'},
        {'10: 14.25'}
        ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: 'CIB-28UL-MHX',
      mfgName: 'MHX',
      blankLength: 28,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: 2'},
        {'guideTwo: 3'},
        {'guideThree: 4'},
        {'guideFour: 5'},
        {'guideFifth: 10'}
        ],
      guideSpacing: [
        {'2: 0'},
        {'3: 2 5/8'},
        {'4: 5 7/8'},
        {'5: 9.75'},
        {'10: 14 3/4'}
        ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: 'CIB-32UL-MHX',
      mfgName: 'MHX',
      blankLength: 32,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: 2'},
        {'guideTwo: 2'},
        {'guideThree: 3'},
        {'guideFour: 4'},
        {'guideFifth: 5'},
        {'guideSixth: 10'}
        ],
      guideSpacing: [
        {'2: 0'},
        {'2: 2.5'},
        {'3: 2.25'},
        {'4: 7.75'},
        {'5: 10.5'},
        {'10: 14.75'}
        ],
      handleLength: 5,
      handleType: 'Cork'
    },

    {
      blankName: 'CIB-36MLMF-MHX',
      mfgName: 'MHX',
      blankLength: 36,
      blankMaterial: "Carbon",
      guideSize: [
        {'tipTop: 2'},
        {'guideTwo: 2'},
        {'guideThree: 3'},
        {'guideFour: 4'},
        {'guideFifth: 5'},
        {'guideSixth: 10'}
        ],
      guideSpacing: [
        {'2: 0'},
        {'2: 3 1/8'},
        {'3: 6 9/16'},
        {'4: 10 9/16'},
        {'5: 15 1/16'},
        {'10: 20 3/16'}
        ],
      handleLength: 5,
      handleType: 'Cork'
    };
  ]
);

////Thread Colors////
db.threadColors.insert(
  [
    {
      mfgName: "NCP",
      color: "Black",
      image: "assets/images/threads/0001.jpg"
    },

    {
      mfgName: "NCP",
      color: "White",
      image: "assets/images/threads/0002.jpg"
    },

    {
      mfgName: "NCP",
      color: "Light Blue",
      image: "assets/images/threads/0037.jpg"
    },

    {
      mfgName: "NCP",
      color: "Cobalt Blue",
      image: "assets/images/threads/0050.jpg"
    },

    {
      mfgName: "NCP",
      color: "Peach",
      image: "assets/images/threads/0051.jpg"
    },

    {
      mfgName: "NCP",
      color: "Rose",
      image: "assets/images/threads/0052.jpg"
    },

    {
      mfgName: "NCP",
      color: "Navy",
      image: "assets/images/threads/0066.jpg"
    },

    {
      mfgName: "NCP",
      color: "Spring Green",
      image: "assets/images/threads/0105.jpg"
    },

    {
      mfgName: "NCP",
      color: "Sunburst",
      image: "assets/images/threads/0200.jpg"
    },

    {
      mfgName: "NCP",
      color: "Garnet",
      image: "assets/images/threads/0206.jpg"
    },

    {
      mfgName: "NCP",
      color: "Orange",
      image: "assets/images/threads/0221.jpg"
    },

    {
      mfgName: "NCP",
      color: "Royal Blue",
      image: "assets/images/threads/0245.jpg"
    },

    {
      mfgName: "NCP",
      color: "Dark Blue",
      image: "assets/images/threads/0246.jpg"
    },

    {
      mfgName: "NCP",
      color: "Rust",
      image: "assets/images/threads/0257.jpg"
    },

    {
      mfgName: "NCP",
      color: "Blue Dun",
      image: "assets/images/threads/0272.jpg"
    },

    {
      mfgName: "NCP",
      color: "Tan",
      image: "assets/images/threads/0290.jpg"
    },

    {
      mfgName: "NCP",
      color: "Scarlet",
      image: "assets/images/threads/0326.jpg"
    },

    {
      mfgName: "NCP",
      color: "Candy Apple",
      image: "assets/images/threads/0335.jpg"
    },

    {
      mfgName: "NCP",
      color: "Marron",
      image: "assets/images/threads/0337.jpg"
    },

    {
      mfgName: "NCP",
      color: "Gold",
      image: "assets/images/threads/0340.jpg"
    },

    {
      mfgName: "NCP",
      color: "Dark Brown",
      image: "assets/images/threads/0396.jpg"
    },

    {
      mfgName: "NCP",
      color: "Hot Pink",
      image: "assets/images/threads/0411.jpg"
    },

    {
      mfgName: "NCP",
      color: "Charcoal",
      image: "assets/images/threads/0441.jpg"
    },

    {
      mfgName: "NCP",
      color: "Purple",
      image: "assets/images/threads/0468.jpg"
    },

    {
      mfgName: "NCP",
      color: "Medium Brown",
      image: "assets/images/threads/0541.jpg"
    },

    {
      mfgName: "NCP",
      color: "Teal",
      image: "assets/images/threads/0638.jpg"
    },

    {
      mfgName: "NCP",
      color: "Medium Gray",
      image: "assets/images/threads/0720.jpg"
    },

    {
      mfgName: "NCP",
      color: "Gun Metal",
      image: "assets/images/threads/1011.jpg"
    },
  ]);



    {
      mfgName: 29,
      color: "Chestnut",
      image: "assets/images/threads/5274.jpg"
    },

    {
      mfgName: 30,
      color: "Dark Green",
      image: "assets/images/threads/5896.jpg"
    },

    {
      mfgName: 31,
      color: "Lemon Yellow",
      image: "assets/images/threads/6778.jpg"
    },

    {
      mfgName: 32,
      color: "Medium Green",
      image: "assets/images/threads/6779.jpg"
    },

//Metallic
    {
      mfgName: 33,
      color: "Metallic Gold",
      image: "assets/images/threads/9000.jpg"
    },

    {
      mfgName: 34,
      color: "Metallic Black",
      image: "assets/images/threads/9001.jpg"
    },

    {
      mfgName: 35,
      color: "Metallic Silver",
      image: "assets/images/threads/9002.jpg"
    },

    {
      mfgName: 36,
      color: "Metallic Pearl White",
      image: "assets/images/threads/9003.jpg"
    },

    {
      mfgName: 37,
      color: "Metallic Old Gold",
      image: "assets/images/threads/9004.jpg"
    },

    {
      mfgName: 38,
      color: "Metallic Pewter",
      image: "assets/images/threads/9005.jpg"
    },

    {
      mfgName: 39,
      color: "Metallic Pale Gold",
      image: "assets/images/threads/9007.jpg"
    },

    {
      mfgName: 40,
      color: "Metallic Burgundy",
      image: "assets/images/threads/9008.jpg"
    },

    {
      mfgName: 41,
      color: "Metallic Glitzy Gold",
      image: "assets/images/threads/9009.jpg"
    },

    {
      mfgName: 42,
      color: "Metallic Ice Blue",
      image: "assets/images/threads/9037.jpg"
    },

    {
      mfgName: 43,
      color: "Metallic Electric Blue",
      image: "assets/images/threads/9050.jpg"
    },

    {
      mfgName: 44,
      color: "Metallic Rainbow",
      image: "assets/images/threads/9060.jpg"
    },

    {
      mfgName: 45,
      color: "Metallic Lime",
      image: "assets/images/threads/9105.jpg"
    },

    {
      mfgName: 46,
      color: "Metallic Fuschia",
      image: "assets/images/threads/9206.jpg"
    },

    {
      mfgName: 47,
      color: "Metallic Royal Blue",
      image: "assets/images/threads/9245.jpg"
    },

    {
      mfgName: 48,
      color: "Metallic Aquamarine",
      image: "assets/images/threads/9252.jpg"
    },

    {
      mfgName: 49,
      color: "Metallic Aqua",
      image: "assets/images/threads/9270.jpg"
    },

    {
      mfgName: 50,
      color: "Metallic Red",
      image: "assets/images/threads/9326.jpg"
    },

    {
      mfgName: 51,
      color: "Metallic Dusty Rose",
      image: "assets/images/threads/9337.jpg"
    },

    {
      mfgName: 52,
      color: "Metallic Green",
      image: "assets/images/threads/9358.jpg"
    },

    {
      mfgName: 53,
      color: "Metallic Copper",
      image: "assets/images/threads/9396.jpg"
    },

    {
      mfgName: 54,
      color: "Metallic Aquamarine",
      image: "assets/images/threads/9252.jpg"
    },

    {
      mfgName 55,
      color: "Metallic Purple",
      image: "assets/images/threads/9468.jpg"
    },

    {
      mfgName 56,
      color: "Metallic Red Bronze",
      image: "assets/images/threads/9540.jpg"
    },

    {
      mfgName 57,
      color: "Metallic Bronze",
      image: "assets/images/threads/9541.jpg"
    },

//Trimar
    {
      mfgName 58,
      color: "Trimar Black/Gold",
      image: "assets/images/threads/0001g.jpg"
    },

    {
      mfgName 59,
      color: "Trimar Black/Silver",
      image: "assets/images/threads/0001s.jpg"
    },

    {
      mfgName 60,
      color: "Trimar Black/Gold",
      image: "assets/images/threads/0001g.jpg"
    },

    {
      mfgName 61,
      color: "Trimar White/Gold",
      image: "assets/images/threads/0002g.jpg"
    },

    {
      mfgName 62,
      color: "Trimar White/Silver",
      image: "assets/images/threads/0002s.jpg"
    },

    {
      mfgName 63,
      color: "Trimar Blue/Gold",
      image: "assets/images/threads/0254g.jpg"
    },

    {
      mfgName 64,
      color: "Trimar Blue/Silver",
      image: "assets/images/threads/0254s.jpg"
    },

    {
      mfgName 65,
      color: "Trimar Red/Gold",
      image: "assets/images/threads/0326g.jpg"
    },

    {
      mfgName 66,
      color: "Trimar Red/Silver",
      image: "assets/images/threads/0326s.jpg"
    },

    {
      mfgName 67,
      color: "Trimar Brown/Gold",
      image: "assets/images/threads/0541g.jpg"
    },

    {
      mfgName 68,
      color: "Trimar Brown/Silver",
      image: "assets/images/threads/0541s.jpg"
    },

    {
      mfgName 69,
      color: "Trimar Green/Gold",
      image: "assets/images/threads/5896g.jpg"
    },

    {
      mfgName 70,
      color: "Trimar Green/Silver",
      image: "assets/images/threads/5896s.jpg"
    },

//Classic Twist
    {
      mfgName 71,
      color: "Classic Twist Black/White",
      image: "assets/images/threads/0002t.jpg"
    },

    {
      mfgName 72,
      color: "Classic Twist Black/Yellow",
      image: "assets/images/threads/0207t.jpg"
    },

    {
      mfgName 73,
      color: "Classic Twist Black/Orange",
      image: "assets/images/threads/0221t.jpg"
    },

    {
      mfgName 74,
      color: "Classic Twist Black/Scarlet",
      image: "assets/images/threads/0326t.jpg"
    },

    {
      mfgName 75,
      color: "Classic Twist Black/Green",
      image: "assets/images/threads/5896t.jpg"
    },

//Electra Hologram Braid
    {
      mfgName 76,
      color: "Pearl Electra Hologram Braid",
      image: "assets/images/threads/4014.jpg"
    },

    {
      mfgName 77,
      color: "Silver Electra Hologram Braid",
      image: "assets/images/threads/5030.jpg"
    },

    {
      mfgName 78,
      color: "Gold Electra Hologram Braid",
      image: "assets/images/threads/5031.jpg"
    },

    {
      mfgName 79,
      color: "Royal Blue Electra Hologram Braid",
      image: "assets/images/threads/5032.jpg"
    },

    {
      mfgName 80,
      color: "Green Electra Hologram Braid",
      image: "assets/images/threads/5033.jpg"
    },

    {
      mfgName 81,
      color: "Black Electra Hologram Braid",
      image: "assets/images/threads/5034.jpg"
    },

    {
      mfgName 82,
      color: "Fushsia Electra Hologram Braid",
      image: "assets/images/threads/5035.jpg"
    },

    {
      mfgName 83,
      color: "Red Electra Hologram Braid",
      image: "assets/images/threads/5036.jpg"
    },

    {
      mfgName 84,
      color: "Purple Electra Hologram Braid",
      image: "assets/images/threads/5038.jpg"
    },

    {
      mfgName 85,
      color: "Turquoise Electra Hologram Braid",
      image: "assets/images/threads/5039.jpg"
    },

    {
      mfgName 86,
      color: "Lilac Electra Hologram Braid",
      image: "assets/images/threads/5040.jpg"
    },

    {
      mfgName 87,
      color: "Pink Electra Hologram Braid",
      image: "assets/images/threads/5041.jpg"
    },

//HT Braid
    {
      mfgName 89,
      color: "Silver HT Braid",
      image: "assets/images/threads/htb0000.jpg"
    },

    {
      mfgName 90,
      color: "Silver/Black HT Braid",
      image: "assets/images/threads/htb0001.jpg"
    },

    {
      mfgName 91,
      color: "Pearl HT Braid",
      image: "assets/images/threads/htb0002.jpg"
    },

    {
      mfgName 92,
      color: "Gold/Black HT Braid",
      image: "assets/images/threads/htb0003.jpg"
    },

    {
      mfgName 93,
      color: "Gold HT Braid",
      image: "assets/images/threads/htb0004.jpg"
    },

    {
      mfgName 94,
      color: "Aquamarine HT Braid",
      image: "assets/images/threads/htb0014.jpg"
    },

    {
      mfgName 95,
      color: "Royal Blue HT Braid",
      image: "assets/images/threads/htb0245.jpg"
    },

    {
      mfgName 96,
      color: "Red HT Braid",
      image: "assets/images/threads/htb0326.jpg"
    },

    {
      mfgName 97,
      color: "Red/Black HT Braid",
      image: "assets/images/threads/htb0327.jpg"
    },

    {
      mfgName 98,
      color: "Light Blue HT Braid",
      image: "assets/images/threads/htb0337.jpg"
    },

    {
      mfgName 99,
      color: "Green HT Braid",
      image: "assets/images/threads/htb0358.jpg"
    },

    {
      mfgName 100,
      color: "Purple HT Braid",
      image: "assets/images/threads/htb0468.jpg"
    },

    {
      mfgName 101,
      color: "Black HT Braid",
      image: "assets/images/threads/htb9001.jpg"
    },

    {
      mfgName 102,
      color: "Burgundy HT Braid",
      image: "assets/images/threads/htb9003.jpg"
    },

    {
      mfgName 103,
      color: "Orange HT Braid",
      image: "assets/images/threads/htb9221.jpg"
    },

    {
      mfgName 104,
      color: "Copper HT Braid",
      image: "assets/images/threads/htb9396.jpg"
    },

//HT Metallic Braid
    {
      mfgName 104,
      color: "Gold HT Electra Metalic",
      image: "assets/images/threads/htem9000.jpg"
    },

    {
      mfgName 105,
      color: "Silver HT Electra Metalic",
      image: "assets/images/threads/htem9002.jpg"
    },

    {
      mfgName 106,
      color: "Royal Blue HT Electra Metalic",
      image: "assets/images/threads/htem9245.jpg"
    },

    {
      mfgName 107,
      color: "Red HT Electra Metalic",
      image: "assets/images/threads/htem9326.jpg"
    },

    {
      mfgName 108,
      color: "Green HT Electra Metalic",
      image: "assets/images/threads/htem9358.jpg"
    },

//ProWrap
