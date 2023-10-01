Battleship Project --> Project Planning #3 --> Action Reaction Notes



**ALL ACTIONS ARE USER INPUTS, NOT NECESSARILY ACTIONS COMPLETED BY COMPUTER CALCULATIONS
**Specific Functions


--------------------------------------------------------------------------------------------

Main Goals  

1. Create ShipFactory()
2. Create GameboardFactory()
3. Create PlayerFactory()
4. Create Vs CPU Mode ***Minimum needed for application
    a. Make a way for CPU to randomly place ships on board
    b. Make a way for player to place ships on board
5. Create VS Player Mode
    a. Create a handoff mode
6. Create a random online mode






---------------------------------------------------------------------------------------------

ACTION - Home Page Loaded
    - R0 - ****ACTION**** Choose Game Mode
    

ACTION - Choose Game Mode
    - R0 - ****ACTION**** Choose CPU
    - R0 - ****ACTION**** Choose Versus


ACTION - Choose CPU
    - R0 - Player1 created (User)
        -R1 - Player1 Gameboard Created
            - R2 - Player1 Ships Generated
                - ** - Check if number of placed ship left is 0
                    - *** - Number of ships left is 0
                        - R4 - ****ACTION**** Player1 Presses START Button
                    - *** - Number of ships left is not 0
                        - R3 - ****ACTION**** Player1 Ships Placed on Player1 Gameboard
                            - ** - Check if number of placed ship left is 0
                            

    - R0 - Player2 created (CPU)
        - R1 - Player2 Gameboard Created 
            - R2 - Player2 Ships Generated
                - ** - Check if number of placed ships left is 0
                    - *** - Number of ships left is 0
                    - *** - Number of ships left is not 0  
                        - R3 - Player2 Ships Randomly Placed on Player2 Gameboard


***At what point is the number of ships going to be determined and understood?
***It makes sense for the number of ships needed to be placed to be calculated after ships are generated but before they are placed


ACTION - Player1 Ships Placed on Player1 Gameboard
    - R0 - ****ACTION**** Player1 Chooses Ship 
        - R1 - is ship placed?
            - R2 - Yes
                - R3 - RETURN - Ship placed


ACTION - Player1 Chooses Ship 
    - R0 - ****ACTION**** Player1 Chooses a Coordinate for Ship
        - R1 - is ship placed?
            - R2 - Yes
                - R3 - RETURN - Ship placed


ACTION - Player1 Chooses a Coordinate for Ship
    - R0 - Check if tile has been used
        - R1 - Tile not used
            - R2 - Tile is selected for ship
                - R3 - Subtract 1 tile from number of tiles needed for ship left
                    - R4 - Check if number of tiles needed for ship left is 0
                        - R5 - Number of tiles left for ship is 0
                            - R6 - RETURN - Ship placed
                        - R5 - Number of tiles left for ship is NOT 0
                            - R6 - Place the end tile for that ship
                                - R7 - Subtract 1 tile from number of tiles needed for ship left
                                - R7 - Check if end tile has the right slope
                                    - R8 - End Tile has the same X value OR Y Value as first tile clicked
                                        - R9 - Check if number of tiles left for ship is equal to ship tile total number - 2
                                            - R10 - It is equal
                                                - R11 - Find all tiles in between first tile and end tile that have the same slope
                                                    - R12 - First tile and end tile have the same X value
                                                        - R13 - Find all tiles that have the Y values in between first tile Y and end tile Y with the same X value
                                                            - R14 - Select those tiles for the ships
                                                                - R15 - Subtract the number of those tiles from the number of tiles left for the ship
                                                                - R5 - Number of tiles left for ship is  0
                                                    - R12 - First tile and end tile have the same Y value
                                                        - R13 - Find all tiles that have the X values in between first tile X and end tile X with the same Y value
                                                            - R14 - Select those tiles for the ships
                                                                - R15 - Subtract the number of those tiles from the number of tiles left for the ship
                                                                - R5 - Number of tiles left for ship is  0
                                            - R10 - It is not equal
                                                - R11 - Remove end tile
                                                - R11 - Add 1 tile to number of tiles needed for ship left
                                                - R5 - Number of tiles left for ship is NOT 0
                                    - R8 - End Tile does not have the same X value or Y value as first tile clicked
                                        - R9 - Tile not placed
                                        - R5 - Number of tiles left for ship is NOT 0
        - R1 - Tile already used
            - R2 - Tile not selected for ship
                - R3 - ****ACTION**** Player1 Chooses a Coordinate for Ship



ACTION - Player1 Presses START Button (Choose CPU)
    - R0 - ****ACTION**** Player1 Presses Tile on Player2 Grid 
        

ACTION - Player1 Presses Tile on Player2 Grid 
    - R0 - Player2 (CPU) Barred From Pressing Tile on Player1 Grid
    - R0 - Check if Tile contains ship
        - R1 - Tile does not contain ship
            - R2 - Turn Switch
            - R2 - ****ACTION**** Player2 (CPU) Presses Tile on Player1 Grid 
        - R1 - Tile does contain ship
            - R2 - Check if Selected Ship is Sunk
                - R3 - Selected Ship is Sunk
                    - R4 - Player2 Ship counted as sunk in Player2 Gameboard
                        - R5 - Check if Player2 Gameboard has all ships sunk
                            - R6 - Player2 Gameboard has no ships
                                - R7 - Game Over, Player1 Wins
                                    - R8 - All ship data and Gameboard data is wiped
                                        - R9 - Prompt For Either Play Again or Go Back to Home Page
                                            - R10 - ****ACTION**** Choose CPU
                                            - R10 - ****ACTION**** Home Page Loaded
                                        
                            - R6 - Player2 Gameboard has some ships left
                                - R7 - ****ACTION**** Player1 Presses Tile on Player2 Grid
                - R3 - Selected Ship is not Sunk
                    - R4 - ****ACTION**** Player1 Presses Tile on Player2 Grid


ACTION - Player2 (CPU) Presses Tile on Player1 Grid 
    - R0 - Player1 (Player) Barred From Pressing Tile on Player1 Grid
    - R0 - Random Tile is Selected by CPU
        - R1 - Check if Tile contains ship
            - R2 - Tile does not contain ship
                - R3 - Turn Switch
                - R3 - ****ACTION**** Player1 Presses Tile on Player2 Grid
            - R2 - Tile does contain ship
                - R3 - Check if Selected Ship is Sunk
                    - R4 - Selected Ship is Sunk
                        - R5 - Player1 Ship Counted as Sunk in Player1 Gameboard
                            - R6 - Check if Player1 Gameboard has all ships sunk
                                - R7 - Player1 Gameboard has no ships
                                    - R8 - Game Over, Player2 Wins
                                        - R9 - All ship data and Gameboard data is wiped
                                            - R10 - Prompt For Either Play Again or Go Back to Home Page
                                                - R11 - ****ACTION**** Choose CPU
                                                - R11 - ****ACTION**** Home Page Loaded

                                - R7 - Player1 Gameboard has some ships left
                                    - R8 - ****ACTION**** Player2 (CPU) Presses Tile on Player1 Grid
                    - R4 - Selected Ship is Not Sunk
                        - R5 - ****ACTION**** Player2 (CPU) Presses Tile on Player1 Grid


ACTION - Choose VERSUS
    -

--------------------------------------------------------------------------


Battleship Project --> Project Planning #7 --> 3 Main Objects
- Ship
- Gameboard
- Player


