//1

SELECT FirstName, LastName, COUNT(Result < 3) ExamsCount
FROM Students
JOIN Exams on StudentId.StudentId = Exams.StudentId
WHERE ExamsCount > 2
GROUP BY StudentId

//2

SELECT FirstName, LastName, COUNT(Result < 3) ExamsCount
FROM Students
JOIN Exams on StudentId.StudentId = Exams.StudentId
WHERE ExamsCount > 2
GROUP BY StudentId
INSERT INTO WeakStudents(StudentId, Group, FirstName)
SELECT StudentId, Group, FirstName FROM Students

SELECT GROUP, COUNT(FirstName) StudentsCount
FROM WeakStudents
WHERE StudentsCount > 10
GROUP BY GROUP
