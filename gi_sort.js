"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 4

   Author: 
   Date:   
   
   Filename: gi_sort.js
   
   Global Variables:
   tableData
      An 2-dimensional array of the data found in the body of the web table
      
   dataCategories
      An array of the column titles found the head of the web table
      
   sortIndex
      The index number of the column by which the web table should be
      sorted where 0 = 1st column, 1 = 2nd column, etc.
      
   sortDirection
      A value indicating direction of the sorting where a value of 1 sorts 
      the data in ascending order and a value of -1 sorts the data in descending order
	
   
   
   Functions List:   
   defineDataArray()
      Extracts values from the body of the web table and stores them in the
      tableData array
      
   writeTableData()
      Writes the sorted data into the table rows and cells       
      
   defineColumns()
      Extracts values form the column heads of the web table and stores 
      them in the dataCategories array; also sets up the onclick event
      handlers for the column heads so that the table can be sorted by
      clicking a table heading cell.
           
   columnSort(e)
      Event handler function that sorts the table data when a column
      heading is clicked  
   
   dataSort2D(a, b)
      Compare function used to sort numeric and alphabetical data from
      a 2-dimensional array 
    

*/
//Creates several global variables and arrays
var tableData = [];
var dataCategories = [];
var sortIndex = 0;
var sortDirection = 1;
//Loads the browser, and when it runs it runs an ananymous function that runs two other function
window.addEventListener("load", function () {
      defineDataArray,
      writeTableData;
});
//Creates a function that 
function defineDataArray() {
      var tableRows = document.querySelectorAll("table.sortable tbody tr")
      for (var i = 0; i < tableData.length; i++) {
            var rowCells = i.children();
            for (var n = 0; n < rowCells.length; n++) {
                  rowValues[n].textContent;
            }
            tableData + rowValues;
      }
      tableData.dataSort2D((a, b));
}
//Creates a function whos main purpose is to create an embedded stylesheet and give css rules
function defineColumns() {
      var cursorStyle = document.createElement("style");
      document.head.appendChild(cursorStyle);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "table.sortable thead tr th{ \
                  cursor:pointer; \
            }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "table.sortable thead tr th::after{ \
                        contnet:'\\00a0'; \
                        font-family: monospace; \
                        margin-left: 5px \
                  }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "table.sortable thead tr th:nth-of-type(1)::after{ \
                              content:'\\25b2'; \
                        }", 2);

      for (var i = dataCategories.textContent; i < document.querySelectorAll("table tr").length; i++) {

      }
}







function dataSort2D(a, b) {
      if (isNaN(parseFloat(a[sortIndex])) === false) {
            return (a[sortIndex] - b[sortIndex]) * sortDirection;
      } else {
            var astring = a[sortIndex].toLowerCase();
            var bstring = b[sortIndex].toLowerCase();

            if (bstring > astring) return -sortDirection;
            if (bstring < astring) return sortDirection;
            return 0;
      }
}