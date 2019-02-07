/**
 * Creating conditional (cascading) drop-down lists using JavaScript. 
 * The solution we will build in class will violate the DRY principle. 
 * TODO: Your task will be to refactor the solution to remove that code smell.
 * 
 * @author Kristina Marasovic
 */

/**
 * Associative array holding application data. Consider using JSON or XML instead.
 * ES6 maps could also be taken into account.
 */
const CollegeProgram = {// associative array of associative arrays of ...
    "Select a College": "college", //this is being used for ID
    "RIT Croatia": {
        "Select a Campus": "campus", //this is being used for ID
        "Dubrovnik": {
            "Select a Program": "program",
            "Web and Mobile Computing (BS)": 0,
            "Hospitality and Tourism Management (BS)": 0
        },
        "Zagreb": {
            "Select a Program": "program",
            "Web and Mobile Computing (BS)": 0,
            "International Business (BS)": 0,
            "Service Leadership and Innovation (MS)": 0
        }
    },
    "RIT": {
        "Select a Campus": "campus", //this is being used for ID
        "GCCIS - Information Sciences & Technologies": {
            "Select a Program": "program",
            "Web & Mobile Computing (BS)": 0,
            "Human Centered Computing (BS)": 0,
            "Computing & Information Technologies (BS)": 0
        },
        "GCCIS - Computer Science": {
            "Select a Program": "program",
            "Computer Science (BS)": 0,
            "Computer Science (MS)": 0
        }
    }
};

window.onload = function () {
    let selects = document.getElementById("selects");

    //1. TODO: Create the select elements which options will be loaded from the CollegeProgram object
    let collegeSelect = document.createElement("select");
    collegeSelect.setAttribute("id","college");//college shouldn't be hardcoded for project
    selects.appendChild(collegeSelect);

    let campusSelect = document.createElement("select");
    campusSelect.setAttribute("id","campus");//college shouldn't be hardcoded for project
    selects.appendChild(campusSelect);

    let programSelect = document.createElement("select");
    programSelect.setAttribute("id","program");//college shouldn't be hardcoded for project
    selects.appendChild(programSelect);


    //2. TODO: Load the options for the select using a for..in loop 
    for(let college in CollegeProgram){
        collegeSelect.options.add(new Option(college, college));
        //collegeSelect.appendChild(new Option(college,college))  <-- other way of doing it

    }
    collegeSelect.onchange = function () {
        if(this.selectedIndex < 1){
            campusSelect.length = 1;// replace with 0 to hide title
            programSelect.length = 1;
            return;
        }
        campusSelect.length = 0;
        programSelect.length = 0;
        for (let campus in CollegeProgram[this.value]){
            campusSelect.options.add(new Option(campus, campus));

        }
    }
    campusSelect.onchange = function () {
        if(this.selectedIndex < 1){
            programSelect.length = 1;// replace with 0 to hide title
            return;
        }
        programSelect.length = 0;
        //        for (let program in CollegeProgram[collegeSelect.previousSibling.value][this.value]){
        for (let program in CollegeProgram[this.previousSibling.value][this.value]){
            programSelect.options.add(new Option(program, program));

        }
       // return options

    }
    //3. TODO: Implement what will happen on select's option change
    //      TODO: What if first option is selected? How will this affect the next select?
    //      TODO: Use a for..in loop to iterate over CollegeProgram entries to get the options for the select.

};