// Photo-block
document.querySelector('#my_photo').src = dataLeft.photo;
document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${dataLeft.phone}">${dataLeft.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${dataLeft.email}">${dataLeft.email}</a></li>`;
document.querySelector('.address').innerHTML = '<p>' + dataLeft.address + '</p>';

//Skills
let skillsData = '';
for (let item of dataLeft.skills) {
    skillsData += '<li>' + item + '</li>';
}
document.querySelector('.skills-list').innerHTML = skillsData;

//Education
document.querySelector('.education-list').innerHTML = '<li>' + dataLeft.education + '</li>';

//Courses
let coursesData = '';
dataLeft.courses.forEach(item => {
    coursesData += '<li>' + item + '</li>'
})
document.querySelector('.courses-list').innerHTML = coursesData;

//Summary
document.querySelector('.summaryData').innerHTML = dataRight.summary;



