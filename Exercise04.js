// Exercise 04 //

/*
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

const commonCourses = student1Courses.filter(course => student2Courses.includes(course));

if (commonCourses.length > 0) {
  console.log('Cursos comunes:', commonCourses.join(', '));
} else {
  console.log('No hay cursos comunes.');
} */

let student1Courses = ['Comunicación', 'Geografía', 'Lógica'];
let student2Courses = ['Español', 'Matemáticas', 'Inglés'];

let commonCourses = student1Courses.filter(course => student2Courses.includes(course));

if (commonCourses.length > 0) {
    console.log('Common courses:', commonCourses.join(', '));
} else {
    console.log('No common courses.');
}


//====================EJERCICIO RESUELTO EN CLASE====================================
const student1Courses = ['Math', 'English', 'Programming', 'Esto me hace llorar', 'Ciencias ocultas'];

const student2Courses = ['Geography', 'Spanish', 'Programming', 'Ciencias ocultas'];

const commonCourses = [];
for (let course1 of student1Courses ){
    console.log( course1 ); 
    for(let course2 of student2Courses ){
        if( course1 === course2) commonCourses.push( course1 );
    }
}
console.log("Cursos en común: " +  commonCourses.join(", ")  );

// ========== resolviendo con filter e include
const commonCourse2 = student1Courses.filter( course1 =>  student2Courses.includes(course1) );
console.log( commonCourse2 );