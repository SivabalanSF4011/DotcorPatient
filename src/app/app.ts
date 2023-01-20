import { Grid } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { RadioButton } from '@syncfusion/ej2-buttons';
import { DatePicker } from '@syncfusion/ej2-calendars';

enableRipple(true);

//----------------------------------------------------------------------------------------------------------------
//                                     Get Data from Web API
//----------------------------------------------------------------------------------------------------------------

let doctorGrid: Grid;
let patientGrid: Grid;
let appointmentGrid: Grid;

function GetData()
{
    let doctorURL = "https://localhost:44323/api/doctor";
    let patientURL = "https://localhost:44323/api/patient";
    let appointmentURL = "https://localhost:44323/api/appointment";

    fetch(doctorURL)
        .then(res => res.json())
        .then(data => {DoctorData(data)});

    fetch(patientURL)
        .then(res => res.json())
        .then(data => {PatientData(data)});
    
    fetch(appointmentURL)
    .then(res => res.json())
    .then(data => {AppointmentData(data)});

}

function DoctorData(data: any)
{
    for(let i = 0; i < data.length; i++)
    {
        console.log(data[i]);
        doctorsName.push(data[i].name);
    }

    doctorGrid = new Grid({
        dataSource: data,
        columns: [
                { field: 'doctorID', headerText: 'Doctor ID', textAlign: 'Center', width: 100, type: 'number' },
                { field: 'name', width: 100, headerText: 'Name',textAlign: 'Center', type: 'string' },
                { field: 'department', width: 100, headerText: 'Department', textAlign: 'Center', type: 'string' }
        ]
    });

    doctorGrid.appendTo('#Grid1');

}

function PatientData(data: any)
{
    for(let i = 0; i < data.length; i++)
    {
        console.log(data[i]);
        patientsName.push(data[i].name);
    }
    
    patientGrid = new Grid({
        dataSource: data,
        columns: [
                { field: 'patientID', headerText: 'Doctor ID', textAlign: 'Center', width: 100, type: 'number' },
                { field: 'name', width: 100, headerText: 'Name',textAlign: 'Center', type: 'string' },
                { field: 'age', width: 100, headerText: 'Age', textAlign: 'Center', type: 'string' },
                { field: 'gender', width: 100, headerText: 'Gender',textAlign: 'Center', type: 'string' },
        ]
    });

    patientGrid.appendTo('#Grid2');
}

function AppointmentData(data: Object[])
{
    
    for(let i = 0; i < data.length; i++)
    {
        console.log(data[i]);
    }
    
    appointmentGrid = new Grid({
        dataSource: data,
        columns: [
                { field: 'appointmentID', headerText: 'Appointment ID', textAlign: 'Center', width: 100, type: 'number' },
                { field: 'patientName', width: 100, headerText: 'Patient Name',textAlign: 'Center', type: 'string' },
                { field: 'doctorName', width: 100, headerText: 'Doctor Name', textAlign: 'Center', type: 'string' },
                { field: 'date', width: 100, headerText: 'Date', textAlign: 'Center', type: 'yMd' },
                { field: 'problem', width: 100, headerText: 'Problem',textAlign: 'Center', type: 'string' }
        ]
    });

    appointmentGrid.appendTo('#Grid3');
}

//----------------------------------------------------------------------------------------------------------------
//                                Create Add, Edit and Delete Buttons
//----------------------------------------------------------------------------------------------------------------


let EditBtn: Button = new Button({ cssClass: `e-info e-small`});
let DeleteBtn: Button = new Button({ cssClass: `e-primary e-small`});
let AddBtn: Button = new Button({ cssClass: `e-round e-success e-small`, iconCss: 'e-icons e-plus-icon'});

EditBtn.appendTo("#editBtn-1");
DeleteBtn.appendTo("#deleteBtn-1");
AddBtn.appendTo("#roundbtn-1");

EditBtn.appendTo("#editBtn-2");
DeleteBtn.appendTo("#deleteBtn-2");
AddBtn.appendTo("#roundbtn-2");

EditBtn.appendTo("#editBtn-3");
DeleteBtn.appendTo("#deleteBtn-3");
AddBtn.appendTo("#roundbtn-3");

//----------------------------------------------------------------------------------------------------------------
//                                        Create Input fields
//----------------------------------------------------------------------------------------------------------------


let doctorHeading: string = '<h1 class="List-Title"> Doctor Details <h1/> <br>';
let patientHeading: string = '<h1 class="List-Title"> Patient Details <h1/> <br>';
let appointmentHeading: string = '<h1 class="List-Title"> Appointment Details <h1/> <br>';

let doctorHeadingUpdate: string = '<h1 class="List-Title"> Update Doctor Details <h1/> <br>';
let patientHeadingUpdate: string = '<h1 class="List-Title"> Update Patient Details <h1/> <br>';
let appointmentHeadingUpdate: string = '<h1 class="List-Title"> Update Appointment Details <h1/> <br>';

let drName: string = '<input id="doctorName" class="e-input e-success" type="text" placeholder="Doctor Name" value="" /> <br><br> ';
let drDept: string = `<input type="text" id="doctorDept" /> <br> `;

let ptName: string = '<input id="patientName" class="e-input e-success" type="text" placeholder="Patient Name" /> <br><br> ';
let age: string = '<input id="age" class="e-input e-success" type="number" placeholder="Age" /> <br><br> ';
let gender: string = `  <p class="genderHead"> Gender: <p/> <br> 
                        <div class="genderOptions">
                        <input type='radio' name="gender" id='default' value="Default"/>
                        <input type='radio' name="gender" id='male' value="Male"/>
                        <input type='radio' name="gender" id='female' value="Female"/>
                        <div/>`;


let drNames: string = `<input type="text" id="doctorsName" /> <br><br> `;
let ptNames: string = `<input type="text" id="patientsName" /> <br><br> `;
let date: string = `<input type="text" id="date" /> <br><br> `;
let problems: string = `<input id="problems" class="e-input e-success" type="text" placeholder="Problem" /> <br> `;

// Edit Inputs

let drNameEdit: string = '<input id="doctorNameEdit" class="e-input e-success" type="text" placeholder="Doctor Name" value="" /> <br><br> ';
let drDeptEdit: string = `<input type="text" id="doctorDeptEdit" /> <br> `;

let ptNameEdit: string = '<input id="patientNameEdit" class="e-input e-success" type="text" placeholder="Patient Name" /> <br><br> ';
let ageEdit: string = '<input id="ageEdit" class="e-input e-success" type="number" placeholder="Age" /> <br><br> ';
let genderEdit: string = `  <p class="genderHead"> Gender: <p/> <br> 
                            <div class="genderOptions">
                            <input type='radio' name="genderEdit" id='defaultEdit' value="Default"/>
                            <input type='radio' name="genderEdit" id='maleEdit' value="Male"/>
                            <input type='radio' name="genderEdit" id='femaleEdit' value="Female"/>
                            <div/>`;

let drNamesEdit: string = `<input type="text" id="doctorsNameEdit" /> <br><br> `;
let ptNamesEdit: string = `<input type="text" id="patientsNameEdit" /> <br><br> `;
let dateEdit: string = `<input type="text" id="dateEdit" /> <br><br> `;
let problemsEdit: string = `<input id="problemsEdit" class="e-input e-success" type="text" placeholder="Problem" /> <br> `;
// Declaring and Initializing URL paths as Globally for Delete and Edit

let deleteURL: string = "";
let editURL: string = "";


//----------------------------------------------------------------------------------------------------------------
//                                     Create Pop Ups for Doctor
//----------------------------------------------------------------------------------------------------------------

let doctorAddPopUp = new Dialog({

    buttons: [
        {
            'click': () => { 
                StoreDoctorData();
                doctorAddPopUp.hide();},

            buttonModel: {
                cssClass: `e-success e-small`,
                content: 'Add'
            }
        },
        {
            'click': () => { doctorAddPopUp.hide(); },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat e-small cancel-btn'
            }
        }
    ],

    showCloseIcon: true,
    content: doctorHeading + drName + drDept,
    position: { X: 'center', Y: 'center' },
    width: '500px',
    height: '350px'
});

    document.getElementById("roundbtn-1")!.onclick = (): void => {
    doctorAddPopUp.show();
}

doctorAddPopUp.appendTo('#doctorAddPopUp');
doctorAddPopUp.hide();

let deptData: string[] = ['General', 'Ortho', 'Physio'];

let deptDataList: DropDownList = new DropDownList({
    dataSource: deptData,
    cssClass: `e-success e-small`,
    placeholder: "Select a Department"
});

deptDataList.appendTo('#doctorDept');

//----------------------------------------------------------------------------------------------------------------
//                                     Create Pop Ups for Patient
//----------------------------------------------------------------------------------------------------------------

let patientAddPopUp = new Dialog({

    buttons: [
        {

            'click': () => { 
                StorePatientData();
                patientAddPopUp.hide();},

            buttonModel: {

                cssClass: `e-success e-small`,
                content: 'Add'
            }
        },
        {
            'click': () => { patientAddPopUp.hide(); },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat e-small cancel-btn'
            }
        }
    ],

    showCloseIcon: true,
    content: patientHeading + ptName + age + gender,
    position: { X: 'center', Y: 'center' },
    width: '500px',
    height: '400px'
});

    document.getElementById("roundbtn-2")!.onclick = (): void => {
    patientAddPopUp.show();
}

patientAddPopUp.appendTo('#patientAddPopUp');
patientAddPopUp.hide();


let radiobutton: RadioButton = new RadioButton({ label: 'Default', cssClass: 'e-success'});
radiobutton.appendTo('#default');

radiobutton = new RadioButton({ label: 'Male', checked: true, cssClass: 'e-success'});
radiobutton.appendTo('#male');

radiobutton = new RadioButton({ label: 'Female', cssClass: 'e-success'});  
radiobutton.appendTo('#female');

//----------------------------------------------------------------------------------------------------------------
//                                   Create Pop Ups for Appointment
//----------------------------------------------------------------------------------------------------------------

let appointmentAddPopUp = new Dialog({

    buttons: [
        {
            'click': () => { 
                StoreAppointmentData();
                appointmentAddPopUp.hide();},

            buttonModel: {
                cssClass: `e-success e-small`,
                content: 'Add'
            }
        },
        {
            'click': () => { appointmentAddPopUp.hide(); },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat e-small cancel-btn'
            }
        }
    ],

    showCloseIcon: true,
    content: appointmentHeading + ptNames + drNames + date + problems,  
    position: { X: 'center', Y: 'center' },
    width: '500px',
    height: '450px'
});

    document.getElementById("roundbtn-3")!.onclick = (): void => {
    appointmentAddPopUp.show();
}

appointmentAddPopUp.appendTo('#appointmentAddPopUp');
appointmentAddPopUp.hide();

let doctorsName: string[] = [];
let patientsName: string[] = [];
let drNameList: DropDownList;

drNameList = new DropDownList({
    dataSource: doctorsName,
    cssClass: `e-success e-small`,
    placeholder: "Select Doctor"
});

drNameList.appendTo('#doctorsName');

let ptNameList: DropDownList = new DropDownList({
    dataSource: patientsName,
    cssClass: `e-success e-small`,
    placeholder: "Select Patient"
});

ptNameList.appendTo('#patientsName');

let datePicker: DatePicker = new DatePicker({
    placeholder: 'Enter date',
    cssClass: `e-success e-small`
});

datePicker.appendTo('#date');

//----------------------------------------------------------------------------------------------------------------
//                                  Create Pop Ups for Delete Operation
//----------------------------------------------------------------------------------------------------------------


let docDeletePopUp = new Dialog({

    buttons: [
        {
            'click': () => { 
                DeleteData();
                docDeletePopUp.hide();},

            buttonModel: {
                cssClass: `e-primary e-small`,
                content: 'Delete'
            }
        },
        {
            'click': () => { docDeletePopUp.hide(); },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat e-small cancel-btn'
            }
        }
    ],

    header: 'Delete Record',
    position: { X: 'center', Y: 'center' },
    showCloseIcon: true,
    content: "Are you sure you want to delete? ",  
    width: '500px',
    cssClass: 'e-top',
    // allowDragging: true,
});


docDeletePopUp.appendTo('#docDeletePopUp');
docDeletePopUp.hide();



document.getElementById("deleteBtn-1")!.onclick = (): void => {
    let selectedRow: any = document.getElementById("Grid1")?.getElementsByClassName("e-row");
    let flag: boolean = true;
    for (let i = 0; i < selectedRow.length; i++) 
    {
        if(selectedRow[i].ariaSelected && selectedRow[i] != null)
        {
            console.log(selectedRow[i]);
            let IdValue = selectedRow[i].childNodes[0].textContent;
            console.log(IdValue);
            deleteURL = "https://localhost:44323/api/doctor/delete/" + IdValue;
            console.log(deleteURL);
            docDeletePopUp.show();
            flag = false;
        }
        
    }
    if(flag)
    {
        console.log("Please select any of Doctor data to delete");
        alert("Please select any of Doctor data to delete!!");
    }
    
}

document.getElementById("deleteBtn-2")!.onclick = (): void => {
    
    let selectedRow: any = document.getElementById("Grid2")?.getElementsByClassName("e-row");
    let flag: boolean = true;
    for (let i = 0; i < selectedRow.length; i++) 
    {
        if(selectedRow[i].ariaSelected && selectedRow[i] != null)
        {
            console.log(selectedRow[i]);
            let IdValue = selectedRow[i].childNodes[0].textContent;
            console.log(IdValue);
            deleteURL = "https://localhost:44323/api/patient/delete/" + IdValue;
            console.log(deleteURL);
            docDeletePopUp.show();
            flag = false;
        }
    }
    if(flag)
    {
        console.log("Please select any of Patient data to delete");
        alert("Please select any of Patient data to delete!!");
    }
}

document.getElementById("deleteBtn-3")!.onclick = (): void => {
    
    let selectedRow: any = document.getElementById("Grid3")?.getElementsByClassName("e-row");
    let flag: boolean = true;
    for (let i = 0; i < selectedRow.length; i++) 
    {
        if(selectedRow[i].ariaSelected && selectedRow[i] != null)
        {
            console.log(selectedRow[i]);
            let IdValue = selectedRow[i].childNodes[0].textContent;
            console.log(IdValue);
            deleteURL = "https://localhost:44323/api/appointment/delete/" + IdValue;
            console.log(deleteURL);
            docDeletePopUp.show();
            flag = false;
        }
    }
    if(flag)
    {
        console.log("Please select any of Appointment data to delete");
        alert("Please select any of Appointment data to delete!!");
    }
}



//----------------------------------------------------------------------------------------------------------------
//                                Create Pop Ups for Doctor Edit Operation
//----------------------------------------------------------------------------------------------------------------


let doctorEditPopUp = new Dialog({

    buttons: [
        {
            'click': () => { 
                UpdateDoctor();
                doctorEditPopUp.hide();},

            buttonModel: {
                cssClass: `e-success e-small`,
                content: 'Update'
            }
        },
        {
            'click': () => { doctorEditPopUp.hide(); },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat e-small cancel-btn'
            }
        }
    ],

    showCloseIcon: true,
    content: doctorHeadingUpdate + drNameEdit + drDeptEdit,
    position: { X: 'center', Y: 'center' },
    width: '500px',
    height: '350px'
});

doctorEditPopUp.appendTo('#doctorEditPopUp');
doctorEditPopUp.hide();

let deptList: DropDownList = new DropDownList({
    dataSource: deptData,
    cssClass: `e-success e-small`,
    placeholder: "Select a Department"
});

deptList.appendTo('#doctorDeptEdit');

// Get ID and PUT URL of selected Doctor Data

document.getElementById("editBtn-1")!.onclick = (): void => {
    let selectedRow: any = document.getElementById("Grid1")?.getElementsByClassName("e-row");
    let flag: boolean = true;
    for (let i = 0; i < selectedRow.length; i++) 
    {
        if(selectedRow[i].ariaSelected && selectedRow[i] != null)
        {
            console.log(selectedRow[i]);

            let IdValue = selectedRow[i].childNodes[0].textContent;
            console.log(IdValue);

            let name = document.getElementById('doctorNameEdit') as HTMLInputElement;
            let dept = document.getElementById('doctorDeptEdit') as HTMLInputElement;
            name.value = selectedRow[i].childNodes[1].textContent;
            dept.value = selectedRow[i].childNodes[2].textContent;

            editURL = "https://localhost:44323/api/doctor/put/" + IdValue;
            console.log(editURL);
            doctorEditPopUp.show();
            flag = false;
        }
        
    }
    if(flag)
    {
        console.log("Please select any of Doctor data to Update");
        alert("Please select any of Doctor data to Update!!");
    }
    
}

//----------------------------------------------------------------------------------------------------------------
//                               Create Pop Ups for Patient Edit Operation
//----------------------------------------------------------------------------------------------------------------

let patientEditPopUp = new Dialog({

    buttons: [
        {

            'click': () => { 
                UpdatePatient();
                patientEditPopUp.hide();},

            buttonModel: {

                cssClass: `e-success e-small`,
                content: 'Update'
            }
        },
        {
            'click': () => { patientEditPopUp.hide(); },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat e-small cancel-btn'
            }
        }
    ],

    showCloseIcon: true,
    content: patientHeadingUpdate + ptNameEdit + ageEdit + genderEdit,
    position: { X: 'center', Y: 'center' },
    width: '500px',
    height: '400px'
});

    document.getElementById("editBtn-2")!.onclick = (): void => {
    patientEditPopUp.show();
}

patientEditPopUp.appendTo('#patientEditPopUp');
patientEditPopUp.hide();


let radioBtnEdit: RadioButton = new RadioButton({ label: 'Default', cssClass: 'e-success'});
radioBtnEdit.appendTo('#defaultEdit');

radioBtnEdit = new RadioButton({ label: 'Male', checked: true, cssClass: 'e-success'});
radioBtnEdit.appendTo('#maleEdit');

radioBtnEdit = new RadioButton({ label: 'Female', cssClass: 'e-success'});  
radioBtnEdit.appendTo('#femaleEdit');


// Get ID and PUT URL of selected Patient Data

document.getElementById("editBtn-2")!.onclick = (): void => {
    let selectedRow: any = document.getElementById("Grid2")?.getElementsByClassName("e-row");
    let flag: boolean = true;
    for (let i = 0; i < selectedRow.length; i++) 
    {
        if(selectedRow[i].ariaSelected && selectedRow[i] != null)
        {
            console.log(selectedRow[i]);
            let IdValue = selectedRow[i].childNodes[0].textContent;
            console.log(IdValue);

            let name = document.getElementById('patientNameEdit') as HTMLInputElement;
            let age = document.getElementById('ageEdit') as HTMLInputElement;
            let gender: any = document.querySelector('input[name="genderEdit"]:checked');
            name.value = selectedRow[i].childNodes[1].textContent;
            age.value = selectedRow[i].childNodes[2].textContent;
            gender.value = selectedRow[i].childNodes[3].textContent;

            editURL = "https://localhost:44323/api/patient/put/" + IdValue;
            console.log(editURL);
            patientEditPopUp.show();
            flag = false;
        }
        
    }
    if(flag)
    {
        console.log("Please select any of Patient data to Update");
        alert("Please select any of Patient data to Update!!");
    }
    
}


//----------------------------------------------------------------------------------------------------------------
//                            Create Pop Ups for Appointment Edit Operation
//----------------------------------------------------------------------------------------------------------------


let appointmentEditPopUp = new Dialog({

    buttons: [
        {
            'click': () => { 
                UpdateAppointment();
                appointmentEditPopUp.hide();},

            buttonModel: {
                cssClass: `e-success e-small`,
                content: 'Update'
            }
        },
        {
            'click': () => { appointmentEditPopUp.hide(); },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat e-small cancel-btn'
            }
        }
    ],

    showCloseIcon: true,
    content: appointmentHeadingUpdate + ptNamesEdit + drNamesEdit + dateEdit + problemsEdit, 
    position: { X: 'center', Y: 'center' },
    width: '500px',
    height: '450px'

});

    document.getElementById("editBtn-3")!.onclick = (): void => {
    appointmentEditPopUp.show();
}

appointmentEditPopUp.appendTo('#appointmentEditPopUp');
appointmentEditPopUp.hide();



let datePickerEdit: DatePicker = new DatePicker({
    placeholder: 'Enter date',
    cssClass: `e-success e-small`
});

datePickerEdit.appendTo('#dateEdit');

let drNameListEdit: DropDownList = new DropDownList({
    dataSource: doctorsName,
    cssClass: `e-success e-small`,
    placeholder: "Select Doctor"
});

drNameListEdit.appendTo('#doctorsNameEdit');

let ptNameListEdit: DropDownList = new DropDownList({
    dataSource: patientsName,
    cssClass: `e-success e-small`,
    placeholder: "Select Patient"
});

ptNameListEdit.appendTo('#patientsNameEdit');

// Get ID and PUT URL of selected Patient Data

document.getElementById("editBtn-3")!.onclick = (): void => {
    let selectedRow: any = document.getElementById("Grid3")?.getElementsByClassName("e-row");
    let flag: boolean = true;
    for (let i = 0; i < selectedRow.length; i++) 
    {
        if(selectedRow[i].ariaSelected && selectedRow[i] != null)
        {
            console.log(selectedRow[i]);

            let IdValue = selectedRow[i].childNodes[0].textContent;
            console.log(IdValue);

            let drName = document.getElementById('doctorsNameEdit') as HTMLInputElement;
            let ptName = document.getElementById('patientsNameEdit') as HTMLInputElement;
            let date: any = document.getElementById('dateEdit') as HTMLInputElement;
            let problem = document.getElementById('problemsEdit') as HTMLInputElement;
            drName.value = selectedRow[i].childNodes[1].textContent;
            ptName.value = selectedRow[i].childNodes[2].textContent;
            date.value = selectedRow[i].childNodes[3].textContent;
            problem.value = selectedRow[i].childNodes[4].textContent;

            editURL = "https://localhost:44323/api/appointment/put/" + IdValue;
            console.log(editURL);
            appointmentEditPopUp.show();
            flag = false;
        }
        
    }
    if(flag)
    {
        console.log("Please select any of Appointment data to Update");
        alert("Please select any of Appointment data to Update!!");
    }
    
}


//----------------------------------------------------------------------------------------------------------------
//                                       Store Data into Web API
//----------------------------------------------------------------------------------------------------------------

function StoreDoctorData()
{
    console.log("Post Data");
    let doctorName: any = document.getElementById('doctorName') as HTMLInputElement; // Give proper data type
    let doctorDept: any = document.getElementById('doctorDept') as HTMLInputElement;

    console.log(doctorName.value.trim());
    console.log(doctorDept.value.trim());

    console.log(doctorName.value.trim() != "");
    console.log(doctorDept.value.trim() != "");

    if(doctorName.value.trim() != "" && doctorDept.value.trim() != "")
    {
        const doctorObj = { 
            name: doctorName.value,
            department: doctorDept.value
         };
        
        let postURL = "https://localhost:44323/api/doctor/post";
        PostData(postURL, doctorObj);
    }

    doctorName.value = '';
    doctorDept.value = '';
    
}


function StorePatientData()
{
    console.log("Post Data");
    let patientName: any = document.getElementById('patientName') as HTMLInputElement;
    let ageValue: any = document.getElementById('age') as HTMLInputElement;
    let genderValue: any = document.querySelector('input[name="gender"]:checked');

    console.log(genderValue.value);

    if(patientName.value.trim() != "" && ageValue.value.trim() != "" && genderValue.value.trim() != "")
    {
        const patientObj = { 
            name: patientName.value,
            age: ageValue.value,
            gender: genderValue.value
         };
        
        let postURL = "https://localhost:44323/api/patient/post";
        PostData(postURL, patientObj);
    }

    patientName.value = '';
    ageValue.value = '';
    genderValue.value = '';
    
}


function StoreAppointmentData()
{
    console.log("Post Data");
    
    let ptsName: any = document.getElementById('patientsName') as HTMLInputElement;
    let drsName: any = document.getElementById('doctorsName') as HTMLInputElement; 
    let date: any = document.getElementById('date') as HTMLInputElement;
    let problem: any = document.getElementById('problems') as HTMLInputElement;

    if(ptsName.value.trim() != "" && drsName.value.trim() != "" && date.value.trim() != "" && problem.value.trim() != "")
    {
        const appointmentObj = { 
            patientName: ptsName.value,
            doctorName: drsName.value,
            date: date.value,
            problem: problem.value
         };
        
        let postURL = "https://localhost:44323/api/appointment/post";
        PostData(postURL, appointmentObj);
    }
    ptsName.value = '';
    drsName.value = '';
    date.value = '';
    problem.value = '';
    
}


//----------------------------------------------------------------------------------------------------------------
//                              Update Date of Doctor, Patient and Appointment
//----------------------------------------------------------------------------------------------------------------

// Update Data

function UpdateDoctor()
{
    console.log("Update Doctor Data");
    let editName: any = document.getElementById('doctorNameEdit') as HTMLInputElement; // Give proper data type
    let editDept: any = document.getElementById('doctorDeptEdit') as HTMLInputElement;

    if(editName.value.trim() != "" && editDept.value.trim() != "")
    {
        const doctorObj = { 
            name: editName.value,
            department: editDept.value
         };
        
        PutData(doctorObj);
    }
    editName.value = '';
    editDept.value = '';
    
}

function UpdatePatient()
{
    console.log("Post Data");
    let patientName: any = document.getElementById('patientNameEdit') as HTMLInputElement;
    let age: any = document.getElementById('ageEdit') as HTMLInputElement;
    let gender: any = document.querySelector('input[name="genderEdit"]:checked');

    console.log(gender.value);

    if(patientName.value.trim() != "" && age.value.trim() != "" && gender.value.trim() != "")
    {
        const patientObj = { 
            name: patientName.value,
            age: age.value,
            gender: gender.value
         };
    
        PutData(patientObj);
    }
    patientName.value = '';
    age.value = '';
    gender.value = '';
    
}

function UpdateAppointment()
{
    console.log("Post Data");
    let drsName: any = document.getElementById('doctorsNameEdit') as HTMLInputElement; // Give proper data type
    let ptsName: any = document.getElementById('patientsNameEdit') as HTMLInputElement;
    let date: any = document.getElementById('dateEdit') as HTMLInputElement;
    let problem: any = document.getElementById('problemsEdit') as HTMLInputElement;

    if(ptsName.value.trim() != "" && drsName.value.trim() != "" && date.value.trim() != "" && problem.value.trim() != "")
    {
        const appointmentObj = { 
            patientName: ptsName.value,
            doctorName: drsName.value,
            date: date.value,
            problem: problem.value
         };
        
        PutData(appointmentObj);
    }
    ptsName.value = '';
    drsName.value = '';
    date.value = '';
    problem.value = '';
    
}


//----------------------------------------------------------------------------------------------------------------
//                                        Post Data into Web API
//----------------------------------------------------------------------------------------------------------------

function PostData(url: string, inputData: any)
{
    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            AutoUpdate();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
}


//----------------------------------------------------------------------------------------------------------------
//                                             Delete Data 
//----------------------------------------------------------------------------------------------------------------

function DeleteData()
{
    console.log("Delete Data");
    
    console.log(deleteURL);
    
    fetch(deleteURL, {
        method: 'DELETE',
    })
        .then((response) => response.text())
        .then((data) => {
            console.log('Success:', data);
            AutoUpdate();
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}


//----------------------------------------------------------------------------------------------------------------
//                                        Put Date into Web API
//----------------------------------------------------------------------------------------------------------------

function PutData(inputData: any)
{
    fetch(editURL, {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            AutoUpdate();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

//----------------------------------------------------------------------------------------------------------------
//                           Auto Update of Doctor, Patient and Appointment
//----------------------------------------------------------------------------------------------------------------


function AutoUpdate()
{
    console.log("Auto Updating all the data!!!");
    console.log("Test-1" + doctorsName);
    doctorsName = [];
    patientsName = [];
    console.log("Test-2" + doctorsName);

    let doctorURL = "https://localhost:44323/api/doctor";
    let patientURL = "https://localhost:44323/api/patient";
    let appointmentURL = "https://localhost:44323/api/appointment";

    fetch(doctorURL)
        .then(res => res.json())
        .then(data => {
            doctorGrid.dataSource = data;
            for(let i = 0; i < data.length; i++)
            {
                doctorsName.push(data[i].name);
            }
            console.log(doctorsName);

            drNameList.dataSource = doctorsName;
            drNameListEdit.dataSource = doctorsName;

        });

    fetch(patientURL)
        .then(res => res.json())
        .then(data => {
            patientGrid.dataSource = data;
            for(let i = 0; i < data.length; i++)
            {
                patientsName.push(data[i].name);
            }
            console.log(patientsName);
            ptNameList.dataSource = patientsName;
            ptNameListEdit.dataSource = patientsName;

        });
    
    fetch(appointmentURL)
        .then(res => res.json())
        .then(data => {
            appointmentGrid.dataSource = data;
        });

}




window.addEventListener("load", GetData, false);




// var doctorData:any = doctorGrid.getSelectedRecords();