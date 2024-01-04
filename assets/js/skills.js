// script.js

function showSkillDetails(skillName) {
    const skillCard = document.querySelector(`.skill-card:contains('${skillName}')`);
    const additionalInfo = skillCard.querySelector('.additional-info');

    if (additionalInfo) {
        additionalInfo.style.display = (additionalInfo.style.display === 'none' || !additionalInfo.style.display) ? 'block' : 'none';
    }
}

// Custom :contains() jQuery-like function
// Note: This is a simplified version and may not cover all cases
// For a complete solution, consider using a library like jQuery
Element.prototype.containsText = function (text) {
    return this.innerText.toLowerCase().includes(text.toLowerCase());
};

NodeList.prototype.forEach = Array.prototype.forEach;

document.querySelectorAll('.skill-card').forEach(function (element) {
    element.contains = function (text) {
        return this.innerText.toLowerCase().includes(text.toLowerCase());
    };
});
