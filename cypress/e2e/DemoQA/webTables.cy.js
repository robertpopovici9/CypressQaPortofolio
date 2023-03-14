import WebTables, { addDepartament, webTablesLink } from '../../Pages/Elements/WebTables';
beforeEach(()=>{

    WebTables.webTablesLink();
})


it('add a record',()=>{
        
     WebTables.addRecord("Robert", "Popovici", "robert.popovici09@yahoo.com", "27","2500", "QA");
    
})

it('search a record',()=>{

   
    WebTables.search("alden");
   
})

it('edit 1st record',()=>{

    WebTables.edit("Robert");
   
})







