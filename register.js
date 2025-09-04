document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById('firstName').value.trim(),
      lastName: document.getElementById('lastName').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      birthday: document.getElementById('birthday').value,
      email: document.getElementById('email').value.trim(),
      password: document.getElementById('password').value
    };

    const message = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Phone: ${formData.phone}
Birthday: ${formData.birthday}
Email: ${formData.email}
Password: ${formData.password}
`;

    alert(message);
  });