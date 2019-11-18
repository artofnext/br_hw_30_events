// parse table to object

let table1 = document.getElementById('table_car');

/**
 * @returns json object
 * 
 * @param {table DOM element} table 
 */
function tableToJson(table) {
    var data = [];
    
    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerText.replace(/ /gi,''); //clean 
    }
    
    // go through cells
    for (var i=1; i<table.rows.length; i++) {
        
        var tableRow = table.rows[i];
        var rowData = {};
        
        for (var j=0; j<tableRow.cells.length; j++) {
            
            rowData[ headers[j] ] = tableRow.cells[j].innerText.replace(/ |\$|kWh|in|mi|hp|sec|\*/gi,''); //clean 
        }
        
        data.push(rowData);
    }       
    
    return data;
}

let jsonTable = tableToJson(table1);
console.log(jsonTable);

/**
 * @returns table DOM node
 * 
 * @param {object} jsonObj 
 */
function jsonToTable (jsonObj) {
    let table = document.createElement('table');
    
    //create table header
    let header = document.createElement('tr');
    for (let elem in jsonObj[0]) {
        let cell = document.createElement('th');
        // cell.style = "background-color:grey;"
        cell.classList.add("table__header");

        cell.addEventListener('click', sortTable);
        
        cell.innerText = elem;
        header.appendChild(cell);
    }
    table.appendChild(header);

    //create table rows
    for (let item of jsonObj) {
        let row = document.createElement('tr');
        // console.log(item);
        for (let index in item) {
            let cell = document.createElement('td');
            cell.innerText = item[index];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    return table;
}

/**
 * Sort table
 * 
 * @param event
 */
function sortTable(e) {

let table = tableRendered;

// find index of column was clicked
let cellIndexToSort = e.target.cellIndex;


let switchedFlag = true;
let counterSafe = 0;

while (switchedFlag && counterSafe < 1000) {
    let rows = table.rows;
    counterSafe++;//to avoid endless loop
    switchedFlag = false;
    for (let i = 1; i < rows.length - 1; i++) {

        let a = rows[i].getElementsByTagName("TD")[cellIndexToSort].innerText;
        let b = rows[i + 1].getElementsByTagName("TD")[cellIndexToSort].innerText;

        if (a > b) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switchedFlag = true;
        }
    }
}

console.log(counterSafe);

}

let tableContainer = document.getElementById('table__container');
let tableRendered = jsonToTable(jsonTable);

tableContainer.appendChild(tableRendered);

// console.log(tableRendered);

