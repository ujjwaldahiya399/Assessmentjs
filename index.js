document.querySelector('.getInTouchBtn').addEventListener('click', function() {
    // console.log("clicked")
    let selectedDiv = document.querySelector('.welcome');
    selectedDiv.style.backgroundColor = "#a7d3e3";
})

document.querySelector('.ProjetsSxn').addEventListener('click',function() {
    selectedEle = document.querySelectorAll('#spcl');
    console.log(selectedEle);
    for (let i=0;i<selectedEle.length;i++) {
        selectedEle[i].style.textDecoration = "underline";
    }
    // selectedEle.style.textDecoration = "underline" 
})