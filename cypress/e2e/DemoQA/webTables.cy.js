import WebTables, { addDepartament, webTablesLink } from '../../Pages/Elements/WebTables';
beforeEach(()=>{

    WebTables.webTablesLink();
})


it('add a record',()=>{

        //select new button
        WebTables.registrationForm()
    

        //complete the form with data
     WebTables.addRecord("Robert", "Popovici", "robert.popovici09@yahoo.com", "27","2500", "QA");
    
})

it('search a record',()=>{

   //select search element
   WebTables.searchBar();

   // search for a specific element
    WebTables.search("alden");
   
})

it('edit 1st record',()=>{

    WebTables.edit("Robert");
   
})







