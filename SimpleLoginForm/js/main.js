const inputs = document.querySelectorAll('.input')

function onFoucs() {
    const parent = this.parentNode.parentNode
    parent.classList.add('focus')
}

function onBlur() {
    let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
    input.addEventListener("focus", onFoucs)
    input.addEventListener("blur", onBlur)
})