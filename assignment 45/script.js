// const form = document.getElementById('signupForm');
// const formDataDisplay = document.getElementById('formData');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     formDataDisplay.innerHTML = `
//         <h3>Submitted Data:</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Password:</strong> ${password}</p>
//     `;
// });

// const readMoreBtn = document.getElementById('readMoreBtn');
//         const moreContent = document.getElementById('moreContent');

//         readMoreBtn.addEventListener('click', function() {
//             if (moreContent.style.display === 'none') {
//                 moreContent.style.display = 'block';
//                 readMoreBtn.textContent = 'Read Less';
//             } else {
//                 moreContent.style.display = 'none';
//                 readMoreBtn.textContent = 'Read More';
//             }
//         });
// const studentForm = document.getElementById('studentForm');
// const studentTable = document.getElementById('studentTable').querySelector('tbody');
// const editForm = document.getElementById('editForm');

// let editRow = null;

// studentForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const grade = document.getElementById('grade').value;

//     const row = document.createElement('tr');
//     row.innerHTML = `
//         <td>${name}</td>
//         <td>${age}</td>
//         <td>${grade}</td>
//         <td>
//             <button class="editBtn">Edit</button>
//             <button class="deleteBtn">Delete</button>
//         </td>
//     `;

//     studentTable.appendChild(row);

//     row.querySelector('.deleteBtn').addEventListener('click', function() {
//         row.remove();
//     });

//     row.querySelector('.editBtn').addEventListener('click', function() {
//         editRow = row;
//         document.getElementById('editName').value = name;
//         document.getElementById('editAge').value = age;
//         document.getElementById('editGrade').value = grade;
//         editForm.style.display = 'block';
//     });

//     studentForm.reset();
// });

// editForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const editName = document.getElementById('editName').value;
//     const editAge = document.getElementById('editAge').value;
//     const editGrade = document.getElementById('editGrade').value;

//     if (editRow) {
//         editRow.children[0].textContent = editName;
//         editRow.children[1].textContent = editAge;
//         editRow.children[2].textContent = editGrade;
//     }

//     editForm.style.display = 'none';
//     editForm.reset();
// });
