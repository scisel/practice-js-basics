function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}

Student.prototype.addGrade = function (subject, grade) {

    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function (subject) {

    if (typeof subject === 'undefined') {
        const grades = [];
        for (const key in this.grades) {
            const arr = this.grades[key];
            arr.forEach(function (item) {
                grades.push(item)
            })
        }

        let sum = 0;
        grades.forEach(element => {
            sum = sum + element
        });

        const average = sum / grades.length;
        const averageRounded = average.toFixed(2)
        return averageRounded
    }

    if (typeof this.grades[subject] === 'undefined') {
        return 0;
    }

    let sum = 0;
    const grades = this.grades[subject];
    grades.forEach(element => {
        sum = sum + element
    });

    const average = sum / grades.length;
    const averageRounded = average.toFixed(2)
    return averageRounded
}


const student = new Student('Jan', 'Kowalski');
console.log(student)
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths'); // 5
console.log(avgMath)
const avg = student.getAverageGrade(); // 4.33
console.log(avg)