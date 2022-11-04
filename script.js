const recentLocations = [];

//This section is where the user enters desired location and where JS verifys if the entry is valid 
const getLocation = () => {
    const userLocation = locationInput.value;
    if (userLocation === '')  {
        setLocationError('Enter location');
    } else {
        lookupLocation(userLocation);
    }
}

// This section is to clear any error on the page 
const clearError = () => {
    const errorDisplay = document.getElementById('error');
    errorDisplay.textContent = '';
}

//This section is to display the error on the page



