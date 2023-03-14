import WebTables from '../../Pages/Elements/WebTables';



it('add a record',()=>{

    WebTables.webTablesLink();

    WebTables.addRecord();
   
})

it('search after a record',()=>{

    WebTables.webTablesLink();

    WebTables.searchRecord();
   
})

it('search after a new record',()=>{

    WebTables.webTablesLink();

    WebTables.addAndSearchRecord();
   
})







