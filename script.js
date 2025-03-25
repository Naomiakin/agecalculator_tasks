function calculateAge() {
    let dobInput = document.getElementById("dateofbirth").value;

    if (dobInput === "") {
        document.getElementById("result").innerHTML = "Please enter your date of birth.";
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    // Validate input date
    if (isNaN(dob.getTime())) {
        document.getElementById("result").innerHTML = "Invalid date. Please enter a valid date of birth.";
        return;
    }

    if (dob > today) {
        document.getElementById("result").innerHTML = "Date of birth cannot be in the future.";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    
    // Adjust if birthday hasn't occurred yet in the current year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Handle cases where the person is less than 1 year old
    if (age === 0) {
        let monthAge = today.getMonth() - dob.getMonth();
        let dayAge = today.getDate() - dob.getDate();
        
        if (dayAge < 0) {
            monthAge--;
            dayAge += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        document.getElementById("result").innerHTML = `You are ${monthAge} months and ${dayAge} days old.`;
        return;
    }

    document.getElementById("result").innerHTML = `You are ${age} years old.`;
}
