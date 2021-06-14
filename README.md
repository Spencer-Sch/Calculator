# Calculator App

## Instructions to run code on your machine

### After downloading the project folder:

### Step 1: install Webpack and Webpack-cli in the project folder

TERMINAL> npm install webpack webpack-cli

### Step 3: install dev-server in the project folder

TERMINAL> npm install webpack-dev-server

### Step 4: Start up the dev-server

TERMINAL> npm run dev

### Step 5: in your browser visit -> localhost:8080

### To shut down the dev server:

- In the terminal press "ctrl + c"
- Press "y"
- Press "enter"

## Development Notes

Day 1

- Fill out basic HTML and CSS
- Work to set up Webpack and Dev Server

Day 2

- Work to set up Webpack and Dev Server

Day 3

- Added some logic to button class
- Succeeded in getting Webpack and Dev Server working as desired

Day 4

- Added 'App' class
- Added 'Calculator' module
- Began adding calculator logic
- In the process of restructuring 'Calculator' class

Day 5

- Finished restructuring 'Calculator' class
- Altered 'operator-button' class
- Successfully implemented basic calculator funcionality
- Began restructuring logic flow to allow for better/more advanced funcionality

Day 6

- Successfully restructured logic for "+", "-", "X", "/" operations to mimic the Windows calculator
- Succesfully added functionality of "C", "CE", and "<=" buttons
- Started adding functionality for "=" button

Day 7

- Successfully added logic for nearly all applications of "=" button
- Added "equalsHelper" method to eliminate redundency in, and increase the readability of, "equals" method
- Cleaned up un-needed code in Calculator, OperatorButton, and NumberButton classes
- Made notes of some bugs that will be addressed next session

Day 8

- Fixed bugs within "CE" and "C" logic
- Added logic to prevent division by 0
- Added functionality for adding a decimal to numbers
- Added logic to limit only one decimal can be added to a number
- Added logic to recognize when the decimal in a number has been removed using "backspace" and will then allow a new decimal to be added

Day 9

- Began adding logic for "+/-" button
  - Mostly successful. Found a few tricky situations to straighten out
- Added new static "negate" method to "Util" class

Day 10

- Completed logic for "+/-" button and for "." as it relates to "+/-"
- Began planning for "%" button logic

Day 11

- Began adding logic for "%" button
  - Successfully added functionality for three use scenarios
  - Need to work on logic for three more scenarios
- Added new static "getPercent" method to "Util" class

Day 12

- Completed functionality for all buttons
- Added "percentHelper" method to "Calculator" class
- Cleaned up old comment code
- Added "output" class module
- Add functionality so calculator output would be displayed on the screen
- Added HistoryEntry module/class
  - Started adding logic to create and display history entries...needs work

Day 13

- Attempted to get equasion history to render to the screen
  - Looked at two different guides for this type of DOM manipulation. My code is not working the same as the code in the guides. I do not know why.

Day 14

- Successfully got equasion history entries to render to the screen
- Added functionality to "clear" button to clear all history entries from the history UL
- Began working on functionality to click on a history entry and have the calculator repopulate with that equasion's info
- Refactored "renderOperand" and "renderEquasion" methods of the "Output" class to return data instead of assigning it to global properties. This allowed me to re-use "renderEquasion" in the "render" method of the "HistoryEntry" class

Day 15

- Successfully added functionality to click on a history entry and have the calculator repopulate with that equasion's info
- Added styling to history entries
- Put a max limit on how many digits long an operand can be
- Added logic to shink the font size of the main output to prevent the text from crossing the boundries of its area
- Contained number text inside of each history entry
- Added scrolling to overflow of the history column
- Fixed some last minute bugs

Day 16

- Re-ordered methods inside "calculator" class for improve readability
- Removed all "console.log()" lines

# Project Complete!
