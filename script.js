var submit = document.getElementById('submit');
            function main() {
                submit.addEventListener('click', () => {
                    var name = document.getElementById('name').value;
                    var subjects = document.getElementById('surya').value;
                    var sem = document.getElementById('sem').value;
                    var head = document.getElementById('head');
                    head.innerHTML = `<div>Hey ${name} Enter Your Subject Details...</div>`;

                    var content = document.getElementById('content');
                    content.innerHTML = '';
                    for (var i = 0; i < subjects; i++) {
                        content.innerHTML += `
                        <div>
                            <p>Enter Subject ${i + 1}:</p>
                            <input type="text" id="sub${i + 1}" placeholder="Fill The Subject Name" required>
                            <input type="number" id="fstmid${i + 1}" placeholder="Enter MidMarks1" required>
                            <input type="number" id="sndmid${i + 1}"  placeholder="Enter MidMarks2" required>
                            <input type="number" id="semmarks${i + 1}" placeholder="Enter SemMarks" required>
                        </div>
                    `;



                    }
                    submit.style.display = "none";
                    document.getElementById('submitsub').style.display = "block";


                    document.getElementById('submitSub').addEventListener('click', () => {
                        head.innerHTML = '';
                        head.innerHTML += `<div style="color:red;">B.Tech Semester End Examinations Result</div>`
                        var details = `
                        <div>
                        <div>STUDENT NAME: ${name}</div>
                            <center>
                                <table border='5' style="min-width:400px;min-height:200px;margin:20px;">
                                    <tr style="background-color:aqua;color:black;">
                                        <th>Course Name</th>
                                        <th>Grade Points</th>
                                    </tr>`;

                        var totalgrade = 0;
                        for (let j = 0; j < subjects; j++) {
                            var subjectName = document.getElementById(`sub${j + 1}`).value;
                            var internal1 = document.getElementById(`fstmid${j + 1}`).value;
                            var internal2 = document.getElementById(`sndmid${j + 1}`).value;
                            var semMarks = parseInt(document.getElementById(`semmarks${j + 1}`).value);
                            if (internal1 > internal2) {
                                let score1 = Math.ceil((internal1) * (0.8));
                                let score2 = Math.ceil((internal2) * (0.2));
                                var total = score1 + score2;
                            } else {
                                let score1 = Math.ceil((internal1) * (0.2));
                                let score2 = Math.ceil((internal2) * (0.8));
                                var total = score1 + score2;
                            }
                            var marks = total + semMarks;
                            var grade;
                            if (marks >= 90) {
                                grade = 10;
                            } else if (marks >= 80) {
                                grade = 9;
                            } else if (marks >= 70) {
                                grade = 8;

                            } else if (marks >= 60) {
                                grade = 7;

                            } else if (marks >= 50) {
                                grade = 6;
                            } else if (marks >= 40) {
                                grade = 5;
                            } else {
                                grade = 0;
                            }
                            totalgrade += grade;

                            details += `
                            <tr>
                                <td>${subjectName}</td>
                                <td align="center">${grade}</td>
                                </tr>`;


                        }
                        var final= totalgrade/subjects ;


                        details += `
                                </table>
                            </center>
                        </div>`;
                        details += `<div style="font-weight: bold;">Semester Grade Point Average(SGPA): ${final}</div>`;

                        content.innerHTML = details;
                        document.getElementById('submitsub').style.display = "none";


                    })
                })
            }
            main();

