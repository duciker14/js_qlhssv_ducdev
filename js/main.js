class Student{
    constructor(id, hoTen, maSV, lop, khoa, toan, ly, hoa, hanhdong){
        this.__id = id;
        this.__hoTen= hoTen;
        this.__maSV= maSV;
        this.__lop= lop;
        this.__khoa= khoa;
        this.__toan= toan;
        this.__ly= ly;
        this.__hoa= hoa;
        this.__hanhdong= hanhdong;
    }
    set id(value) {this.__id = value;}
    get id() {return this.__id};

    set hoTen(value) {this.__hoTen = value;}
    get hoTen() {return this.__hoTen};
    
    set maSV(value) {this.__maSV = value;}
    get maSV() {return this.__maSV}
    
    set lop(value) {this.__lop = value;}
    get lop() {return this.__lop}
    
    set khoa(value) {this.__khoa = value;}
    get khoa() {return this.__khoa}
    
    set toan(value) {this.__toan = value;}
    get toan() {return this.__toan}
    
    set ly(value) {this.__ly = value;}
    get ly() {return this.__ly}
    
    set hoa(value) {this.__hoa = value;}
    get hoa() {return this.__hoa}
    
    set hanhdong(value) {this.__hanhdong = value;}
    get hanhdong() {return this.__hanhdong}
}
//Khởi tạo mảng
stdList = Array();
//tạo giá trị
function create() {
    btn = document.getElementById('btnAdd');
    btn.addEventListener('click', addStd);

    rootDom = document.getElementById('display');
    hoTenDom = document.getElementById('nameStudent');
    idStudentDom = document.getElementById('idStudent');
    classStudentDom = document.getElementById('classStudent');
    departmentStudentDom = document.getElementById('departmentStudent');
    mathStudentDom = document.getElementById('mathStudent');
    physicStudentDom = document.getElementById('physicStudent');
    chemistryStudentDom = document.getElementById('chemistryStudent');
}
function render() {
    rootDom.innerHTML = '';
    stdList.forEach(std => {
        rootDom.appendChild(createNodeStudent(std));
    });
}
function createNodeStudent(std) {
    nodeRow = document.createElement('tr');

    nodeHoten = document.createElement('td');
    nodeHoten.innerHTML = std.__hoTen;
    nodeRow.appendChild(nodeHoten);
    
    nodeMaSinhVien = document.createElement('td');
    nodeMaSinhVien.innerHTML = std.__maSV;
    nodeRow.appendChild(nodeMaSinhVien);

    nodeLop = document.createElement('td');
    nodeLop.innerHTML = std.__lop;
    nodeRow.appendChild(nodeLop);

    nodeKhoa = document.createElement('td');
    nodeKhoa.innerHTML = std.__khoa;
    nodeRow.appendChild(nodeKhoa);

    nodeToan = document.createElement('td');
    nodeToan.innerHTML = std.__toan;
    nodeRow.appendChild(nodeToan);

    nodeLy = document.createElement('td');
    nodeLy.innerHTML = std.__ly;
    nodeRow.appendChild(nodeLy);

    nodeHoa = document.createElement('td');
    nodeHoa.innerHTML = std.__hoa;
    nodeRow.appendChild(nodeHoa);
 
    return nodeRow;
}
//create task
id = 0;
function addStd(){ 
    id++;
    std = new Student(
        id,
        hoTenDom.value,
        idStudentDom.value,
        classStudentDom.value,
        departmentStudentDom.value,
        mathStudentDom.value,
        physicStudentDom.value,
        chemistryStudentDom.value
    )
    stdList.push(std);
    render();
}
window.onload = function(e) {
    create();
    // render();
}
