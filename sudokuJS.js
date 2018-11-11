"use strict";

class SudokuJS 
{
    constructor(selector, options = {}) 
    {

        /*
        * constants
        *-----------*/
        this.Difficulties = Object.freeze({
            Unknown: "unknown",
            Easy: "easy",
            Medium: "medium",
            Hard: "hard",
            VeryHard: "very hard"
        });

        this.SolveModes = Object.freeze({
            Step: "step",
            All: "all"
        });

        this.options = options;

        /*
        * variables
        *-----------*/
        let solveMode = this.SolveModes.Step
        let difficulty = this.Difficulties.Unknown
        let candidatesShowing = false
        let editingCandidates = false
        let boardFinished = false
        let boardError = false
        let onlyUpdatedCandidates = false
        let gradingMode = false //solving without updating UI
        let generatingMode = false //silence board unsolvable errors
        let invalidCandidates = [] //used by the generateBoard function

        /*
        the score reflects how much increased difficulty the board gets by having the pattern rather than an already solved cell
        */
        this.Strategies = Object.freeze({
            OpenSingles:         { title: "openSingles",         function: openSingles,         score: 0.1 },
            SingleCandidate:     { title: "singleCandidate",     function: singleCandidate,     score: 9 },
            VisualElimination:   { title: "visualElimination",   function: visualElimination,   score: 8 },
            NakedPair:           { title: "nakedPair",           function: nakedPair,           score: 50 },
            PointingElimination: { title: "pointingElimination", function: pointingElimination, score: 80 },
            HiddenPair:          { title: "hiddenPair",          function: hiddenPair,          score: 90 },
            NakedTriplet:        { title: "nakedTriplet",        function: nakedTriplet,        score: 100 },
            HiddenTriplet:       { title: "hiddenTriplet",       function: hiddenTriplet,       score: 140 },
            NakedQuad:           { title: "nakedQuad",           function: nakedQuad,           score: 150 },
            HiddenQuad:          { title: "hiddenQuad",          function: hiddenQuad,          score: 280 }
        });

        this.usedStrategies = [];
        this.board = [];
        this.boardSize;
        this.boardNumbers;

        this.houses = [
            //hor. rows
            [],
            //vert. rows
            [],
            //boxes
            []
        ];

        /*
        * selectors
        *-----------*/
        this.board = document.querySelector(selector);
        this.boardInput;
        this.boardInputCandidates;
    }

    /*
    * methods
    *-----------*/
    //shortcut for logging..
    log(message) 
    {
        if (window.console && console.log) {
            console.log(message);
        }
    }

    //array contains function
    contains(array, object) {
        return array.some((element) => {
            return (element === object);
        })
    }

    /* calcBoardDifficulty
    * --------------
    *  TYPE: solely based on strategies required to solve board (i.e. single count per strategy)
    *  SCORE: distinguish between boards of same difficulty.. based on point system. Needs work.
    * -----------------------------------------------------------------*/
    calcBoardDifficulty(sedStrategies) 
    {

    }
}
