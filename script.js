const allStudents = [
  { numbers: 1, Mname: 'Сидоров', name: 'Иван', Lname: 'Михайлович', faculty: 'Физика', birthDay: '12.31.2000', startDate: 2019 },
  { numbers: 2, Mname: 'Сидорова', name: 'Дарья', Lname: 'Михайловна', faculty: 'Астрономия', birthDay: '11.12.1994', startDate: 2006 },
  { numbers: 3, Mname: 'Иванов', name: 'Николай', Lname: 'Николаевич', faculty: 'Экономика', birthDay: '03.03.2000', startDate: 2018 },
  { numbers: 4, Mname: 'Петров', name: 'Николай', Lname: 'Николаевич', faculty: 'Биология', birthDay: '03.03.1999', startDate: 2020 },
  { numbers: 5, Mname: 'Ягодкина', name: 'Николай', Lname: 'Николаевич', faculty: 'Химия', birthDay: '03.03.2003', startDate: 2017 },
  { numbers: 6, Mname: 'Малинкина', name: 'Николай', Lname: 'Николаевич', faculty: 'Астрономия', birthDay: '03.03.1998', startDate: 2021 },
  { numbers: 7, Mname: 'Клюкова', name: 'Николай', Lname: 'Николаевич', faculty: 'Математический', birthDay: '03.03.2002', startDate: 2016 },
];

const birthday = document.getElementById('form__birthday')
birthday.max = new Date().toISOString().split("T")[0];
const startYear = document.getElementById('form__year-start')
startYear.max = new Date().toISOString().split("T")[0];

const addStudents = document.getElementById('add-students');
const formAddStudents = document.getElementById('form__add-students')
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')
const formAddStudentsBtn = document.getElementById('form__btn-add')
const filterStudents = document.getElementsByClassName('filter__students')
let state = false;

btn1.addEventListener('click', () => {
  if (state == false) {
    allStudents.reverse((a, b) => {
      return a - b;
    })
    state = true
  } else {
    allStudents.sort((a, b) => {
      return a.numbers - b.numbers;
    })
    state = false;
  }
  tableOutput(allStudents)
})


btn2.addEventListener('click', () => {
  if (state == false) {
    allStudents.sort((a, b) => {
      let nameA = a.Mname.toLowerCase(), nameB = b.Mname.toLowerCase()
      if (nameA < nameB)
        return -1;
      if (nameA > nameB)
        return 1;
    })
    state = true
  } else {
    allStudents.sort((a, b) => {
      return a.numbers - b.numbers;
    })
    state = false;
  }
  tableOutput(allStudents)
})

btn3.addEventListener('click', () => {
  if (state == false) {
    allStudents.sort((a, b) => {
      let facA = a.faculty.toLowerCase(), facB = b.faculty.toLowerCase()
      if (facA < facB)
        return -1;
      if (facA > facB)
        return 1;
    })
    state = true
  } else {
    allStudents.sort((a, b) => {
      return a.numbers - b.numbers;
    })
    state = false;
  }
  tableOutput(allStudents)
})

btn4.addEventListener('click', () => {
  if (state == false) {
    allStudents.sort((a, b) => {
      let birthdayA = new Date(a.birthDay), birthdayB = new Date(b.birthDay)

      if (birthdayA < birthdayB)
        return -1;
      if (birthdayA > birthdayB)
        return 1;
    })
    state = true
  } else {
    allStudents.sort((a, b) => {
      return a.numbers - b.numbers;
    })
    state = false;
  }
  tableOutput(allStudents)
})

btn5.addEventListener('click', () => {
  if (state == false) {
    allStudents.sort((a, b) => {
      let yearStudyA = a.startDate, yearStudyB = b.startDate;
      if (yearStudyA < yearStudyB)
        return -1;
      if (yearStudyA > yearStudyB)
        return 1;
    })
    state = true
  } else {
    allStudents.sort((a, b) => {
      return a.numbers - b.numbers;
    })
    state = false;
  }
  tableOutput(allStudents)
})

addStudents.addEventListener('click', (e) => {
  btn1.style.backgroundColor = '#909090'
  btn2.style.backgroundColor = '#909090'
  btn3.style.backgroundColor = '#909090'
  btn4.style.backgroundColor = '#909090'
  btn5.style.backgroundColor = '#909090'
  for (let i = 0; i < filterStudents.length; i++) {
    filterStudents[i].style.backgroundColor = '#909090'
    filterStudents[i].style.border = '2px solid gray  '
    filterStudents[i].style.pointerEvents = 'none'
    filterStudents[i].setAttribute('tabIndex', '-1')
  }

  document.body.append(formAddStudents)
  formAddStudents.style.display = 'flex'
  document.body.style.backgroundColor = '#909090'
  addStudents.style.backgroundColor = 'rgb(0, 146, 146)'
  addStudents.style.pointerEvents = 'none'
  btn1.style.pointerEvents = 'none'
  btn2.style.pointerEvents = 'none'
  btn3.style.pointerEvents = 'none'
  btn4.style.pointerEvents = 'none'
  btn5.style.pointerEvents = 'none'

  document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
      formAddStudents.style.display = 'none'
      document.body.style.backgroundColor = 'white'
      addStudents.style.backgroundColor = 'aqua'
      addStudents.style.pointerEvents = 'auto'
      btn1.style.backgroundColor = 'buttonface'
      btn2.style.backgroundColor = 'buttonface'
      btn3.style.backgroundColor = 'buttonface'
      btn4.style.backgroundColor = 'buttonface'
      btn5.style.backgroundColor = 'buttonface'
      btn1.style.pointerEvents = 'auto'
      btn2.style.pointerEvents = 'auto'
      btn3.style.pointerEvents = 'auto'
      btn4.style.pointerEvents = 'auto'
      btn5.style.pointerEvents = 'auto'
      for (let i = 0; i < filterStudents.length; i++) {
        filterStudents[i].style.backgroundColor = 'white'
        filterStudents[i].style.borderColor = 'fieldtext'
        filterStudents[i].style.pointerEvents = 'auto'
      }
    }
  })
})

formAddStudents.addEventListener('change', () => {
  if (formAddStudents.checkValidity()) {
    formAddStudentsBtn.removeAttribute('disabled')
  }
})

let numbers = [];

const Mname = document.getElementById('form__label-Mname')
const name = document.getElementById('form__label-name')
const Lname = document.getElementById('form__label-Lname')
const start = document.getElementById('form__year-start')
const facultet = document.getElementById('form__facultet')

tableOutput(allStudents)

function tableOutput(data) {
  const tbody = document.getElementById('tbody')
  let html = ''
  for (let i = 0; i < data.length; i++) {

    numbers.push(i)
    let years = new Date(data[i].birthDay)
    let today = new Date()

    if (Number(data[i].startDate + 4) > today.getFullYear()) {
      if (Number(today.getMonth()) > 8) {
        yearStudy = today.getFullYear() - data[i].startDate + 1 + ' курс';
      } else {
        yearStudy = today.getFullYear() - data[i].startDate + ' курс';
      }
    } else {
      yearStudy = 'окончил'
    }

    let days = years.getDate();
    let months = Number(years.getMonth() + 1);
    if (days < 10) {
      days = '0' + years.getDate();
    }

    if (months < 10) {
      months = '0' + Number(years.getMonth() + 1);
    }

    let row = `
    <tr>
    <td>${data[i].numbers + '.'}</td>
    <td>${data[i].Mname + ' ' + data[i].name + ' ' + data[i].Lname}</td>
    <td>${data[i].faculty}</td>
    <td>${days + '.' + months + '.' + years.getFullYear() + ' (' + Number(today.getFullYear() - years.getFullYear()) + ' лет)'}</td>
    <td>${data[i].startDate + '-' + Number(data[i].startDate + 4) + ` (${yearStudy})`}
    <tr/>
    `
    html += row
  }
  tbody.innerHTML = html;
}

formAddStudentsBtn.addEventListener('click', () => {
  if (state == true) {
    allStudents.sort((a, b) => {
      return a.numbers - b.numbers;
    })
  }
  state = false
  tableOutput(allStudents)

  let students = []
  students.push(Mname.value.charAt(0).toUpperCase() + Mname.value.slice(1))
  students.push(name.value.charAt(0).toUpperCase() + name.value.slice(1))
  students.push(Lname.value.charAt(0).toUpperCase() + Lname.value.slice(1))

  let dateOfBirth = new Date(birthday.value)
  let dateOfBirthDay = dateOfBirth.getDate()
  let dateOfBirthMonth = Number(dateOfBirth.getMonth() + 1)

  if (Number(dateOfBirthDay) < 10) dateOfBirthDay = '0' + dateOfBirthDay;
  if (Number(dateOfBirthMonth) < 10) dateOfBirthMonth = '0' + dateOfBirthMonth;

  let startYear = new Date(start.value);


  allStudents.push({
    'numbers': allStudents.length + 1,
    'Mname': Mname.value.charAt(0).toUpperCase() + Mname.value.slice(1),
    'name': name.value.charAt(0).toUpperCase() + name.value.slice(1),
    'Lname': Lname.value.charAt(0).toUpperCase() + Lname.value.slice(1),
    'faculty': facultet.value.charAt(0).toUpperCase() + facultet.value.slice(1),
    'birthDay': dateOfBirthMonth + '.' + dateOfBirthDay + '.' + dateOfBirth.getFullYear(),
    'startDate': startYear.getFullYear()
  })

  tableOutput(allStudents)

  Mname.value = ''
  name.value = ''
  Lname.value = ''
  birthday.value = ''
  start.value = ''
  facultet.value = ''
  formAddStudentsBtn.disabled = true;

  formAddStudents.style.display = 'none'
  document.body.style.backgroundColor = 'white'
  addStudents.style.backgroundColor = 'aqua'
  addStudents.style.pointerEvents = 'auto'
  btn1.style.backgroundColor = 'buttonface'
  btn2.style.backgroundColor = 'buttonface'
  btn3.style.backgroundColor = 'buttonface'
  btn4.style.backgroundColor = 'buttonface'
  btn5.style.backgroundColor = 'buttonface'
  btn1.style.pointerEvents = 'auto'
  btn2.style.pointerEvents = 'auto'
  btn3.style.pointerEvents = 'auto'
  btn4.style.pointerEvents = 'auto'
  btn5.style.pointerEvents = 'auto'

  for (let i = 0; i < filterStudents.length; i++) {
    filterStudents[i].style.backgroundColor = 'white'
    filterStudents[i].style.borderColor = 'fieldtext'
    filterStudents[i].style.pointerEvents = 'auto'
  }
})

const inputSearchName = document.getElementById('input-search-name')
const inputSearchFaculty = document.getElementById('input-search-faculty')
const inputSearchStartLearn = document.getElementById('input-search-startLearn')
const inputSearchEndLearn = document.getElementById('input-search-endLearn')

document.querySelector('#filter-list').addEventListener("input", function () {
  let arr = allStudents.slice(0),
    str = '';
  if (str = inputSearchName.value.trim().toLowerCase()) {
    arr = arr.filter(({
      Mname,
      name,
      Lname
    }) => [Mname, name, Lname].some(title => title.toLowerCase().includes(str)))
  }
  if (str = inputSearchFaculty.value.trim().toLowerCase()) {
    arr = arr.filter(({
      faculty
    }) => faculty.toLowerCase().includes(str))
  }
  if (str = inputSearchStartLearn.value.trim().toLowerCase()) {
    arr = arr.filter(({
      startDate
    }) => startDate == str)
  }
  if (str = inputSearchEndLearn.value.trim().toLowerCase()) {
    arr = arr.filter(({
      startDate
    }) => +startDate + 4 == str)
  }

  tableOutput(arr)
})



