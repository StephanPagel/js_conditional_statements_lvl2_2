let qualityInput = document.getElementById('quality_input');

function checkAirQuality() {
    if (qualityInput.value >= 0 && qualityInput.value <= 50) {
        qualityOutput2 = 'Good';
        qualityOutput3 = 'Little or no risk';
        bgColor = 'green';
    }
    else if (qualityInput.value > 50 && qualityInput.value <= 100) {
        qualityOutput2 = 'Moderate';
        qualityOutput3 = 'Acceptable quality';
        bgColor = 'yellow';
    }
    else if (qualityInput.value > 100 && qualityInput.value <= 150) {
        qualityOutput2 = 'Unhealthy for sensitive groups';
        qualityOutput3 = 'Generable publics not likely affected';
        bgColor = 'orange';
    }
    document.getElementById('quality_output_1').innerHTML = (`${qualityInput.value}`);
    document.getElementById('quality_output_2').innerHTML = (`${qualityOutput2}`);
    document.getElementById('quality_output_3').innerHTML = (`${qualityOutput3}`);
    document.body.style.backgroundColor = (`${bgColor}`);
}