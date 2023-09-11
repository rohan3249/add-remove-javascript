const FrameWork = document.querySelector(`#FrameWork`);
const btn = document.querySelector(`#btn`);
const list = document.querySelector(`#list`);
const removebtn = document.querySelector(`#removebtn`);

btn.onclick = (e) =>{
    e.preventDefault();
    if (FrameWork.value == ``) {
        alert(`Please Add Your Skill`);
    };
    const option = new Option(FrameWork.value);
    list.add(option);
    FrameWork.value = ``;
};

removebtn.onclick = (e)=>{
    e.preventDefault();
    let selected = [];
    for (let i = 0; i < list.options.length; i++) {
        selected[i] = list.options[i].selected;
    };
    let index = list.options.length;
    while (index--) {
        if (selected[index]) {
            list.remove(index)
        }
    };
};