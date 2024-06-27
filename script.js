

function checkConditions() {
    const email = document.getElementById('email').value;
    const emailMessage = document.getElementById('emailMessage').textContent;
    const phone = document.getElementById('phone_number').value;
    const phoneMessage = document.getElementById('phoneMessage').textContent;
    const first = document.getElementById('first').value;
    const firstMessage = document.getElementById('firstMessage').textContent;
    const last = document.getElementById('last').value;
    const lastMessage = document.getElementById('lastMessage').textContent;
    const country = document.getElementById('country').value;
    const countryMessage = document.getElementById('countryMessage').textContent;
    const nextButton = document.querySelector('.end-button');

    if (
        email !== '' && emailMessage === '' &&
        phone !== '' && phoneMessage === '' &&
        first !== '' && firstMessage === '' &&
        last !== '' && lastMessage === '' &&
        country !== '' && countryMessage === ''
    ) {
        nextButton.disabled = false;
        nextButton.style.backgroundColor = '#DBE1D5';
        nextButton.style.Color = '#35543D';
        nextButton.style.border = '1.4px solid #497f57';
        nextButton.style.cursor = 'pointer';
    } else {
        nextButton.disabled = true;
        nextButton.style.backgroundColor = '#E0E0E0';
        nextButton.style.border = 'none';
        nextButton.style.cursor = 'not-allowed';
    }
}

// Add event listeners to input fields to validate and check conditions

// email
document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailMessage = document.getElementById('emailMessage');
    
    const emailPattern = /(.+)\@(.+)\.(.+)/;
    const match = email.match(emailPattern);
    let mid = ["gmail","yahoo","hotmail","outlook","icloud","aol","zoho"];
    let end = ["com", "org", "net", "edu", "gov", "mil", "int", "co", "biz", "info", "us", "uk", "ca", "au", "in"];
    if (emailPattern.test(email) && mid.includes(match[2]) && end.includes(match[3])) {
        emailMessage.textContent = '';
    } else {
        emailMessage.textContent = 'Enter correct format';
    }
    checkConditions();
});

// phone number
document.getElementById('phone_number').addEventListener('input', function() {
    const phone = this.value;
    const phoneMessage = document.getElementById('phoneMessage');
    
    const phonePattern = /^\d{10}$/;
    if (phonePattern.test(phone)) {
        phoneMessage.textContent = '';
    } else {
        phoneMessage.textContent = 'Enter 10 digit number';
    }
    checkConditions();
});

// first name
document.getElementById('first').addEventListener('input', function() {
    const first = this.value;
    const firstMessage = document.getElementById('firstMessage');
    
    const firstPattern = /^[A-Za-z]+$/;
    if (firstPattern.test(first)) {
        firstMessage.textContent = '';
    } else {
        firstMessage.textContent = 'Name must have Alphabets';
    }
    checkConditions();
});

// last name
document.getElementById('last').addEventListener('input', function() {
    const last = this.value;
    const lastMessage = document.getElementById('lastMessage');
    
    const lastPattern = /^[A-Za-z]+$/;
    if (lastPattern.test(last)) {
        lastMessage.textContent = '';
    } else {
        lastMessage.textContent = 'Surname must have Alphabets';
    }
    checkConditions();
});

// country
document.getElementById('country').addEventListener('input', function() {
    const country = this.value.toLowerCase();
    const countryMessage = document.getElementById('countryMessage');
    
    const validcountries = [
        "afghanistan", "albania", "algeria", "argentina", "australia", "austria", "bangladesh", 
        "belgium", "brazil", "canada", "chile", "china", "colombia", "czech republic", "denmark", 
        "egypt", "finland", "france", "germany", "greece", "hungary", "india", "indonesia", "iran", 
        "iraq", "ireland", "israel", "italy", "japan", "kenya", "south korea", "malaysia", "mexico", 
        "netherlands", "new zealand", "nigeria", "norway", "pakistan", "peru", "philippines", "poland", 
        "portugal", "romania", "russia", "saudi arabia", "singapore", "south africa", "spain", "sweden", 
        "switzerland", "taiwan", "thailand", "turkey", "ukraine", "united arab emirates", "united kingdom", 
        "united states", "vietnam", "algeria", "angola", "argentina", "australia", "austria", "bangladesh", 
        "belgium", "brazil", "canada", "chile", "china", "colombia", "czech republic", "denmark", 
        "egypt", "finland", "france", "germany", "greece", "hungary", "india", "indonesia", "iran", 
        "iraq", "ireland", "israel", "italy", "japan", "kenya", "south korea", "malaysia", "mexico", 
        "netherlands", "new zealand", "nigeria", "norway", "pakistan", "peru", "philippines", "poland", 
        "portugal", "romania", "russia", "saudi arabia", "singapore", "south africa", "spain", "sweden", 
        "switzerland", "taiwan", "thailand", "turkey", "ukraine", "united arab emirates", "united kingdom", 
        "united states", "vietnam"];

    if (validcountries.includes(country.toLowerCase())) {
        countryMessage.textContent = '';
    } else {
        countryMessage.textContent = 'Country not listed';
    }
    checkConditions();
});

// Initial check on page load
checkConditions();





// "(.+)\@(.+)\.(.+)" = something @ something . something
// .+ means something (any character)
// \@ means @
// \. means .
// () will separate parts

// \d is digits or numbers
// {} this will limit the number of characters 
// ex:- \d{10} means minimum 10 digits should be entered


// /^[^\s@]+@[^\s@]+\.[^\s@]+$/