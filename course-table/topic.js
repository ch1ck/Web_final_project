let topicsArray=["尚未开学",
"法定假日",
"环境准备",
"随机性",
"重复性",
"条件判断"
];
let holidayArray=[
    true,
    true,
    false,
    false,
    false
];

let myDate=new Date();

function setDate(month,day){
    myDate.setMonth(month-1,day);
    myDate.setSeconds(0);
    myDate.setMinutes(0);
    myDate.setHours(0);

}

setDate(2,21);