document.querySelectorAll('.plan').forEach(plan => {
    plan.addEventListener('mouseover', () => {
        plan.style.boxShadow = "0px 0px 15px 5px #f8a51f";
    });
    plan.addEventListener('mouseout', () => {
        plan.style.boxShadow = "none";
    });
});

