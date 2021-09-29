function Student(name, gender, age) {
    this.name = name,
        this.gender = gender,
        this.age = age
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName
}


Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
        this.marks = [mark]
    } else {
        this.marks.push(mark)
    }
}

Student.prototype.addMarks = function(...marks) {
    this.marks = marks
}


Student.prototype.getAvg = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return avg = ((sum / arr.length).toFixed(4))
}

Student.prototype.exclude = function(reason) {
    this.excluded = reason
    delete this.marks
    delete this.subject
}