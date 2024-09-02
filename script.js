function updateColor(inputId, color) {
    const input = document.getElementById(inputId);
    let percentage = parseInt(input.value, 10); 
    
    
    if (isNaN(percentage) || input.value.trim() === '') {
        percentage = 0;
    } else {
        
        percentage = Math.max(0, Math.min(100, percentage));
    }

    
    const background = percentage === 0
        ? '#e0e1df' 
        : `linear-gradient(to right, ${color} 0%, ${color} ${percentage}%, #ffffff ${percentage}%, #ffffff 100%)`;
    
    input.style.background = background;

}


