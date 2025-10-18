let stories = document.querySelector('#stories');
let fullScreen = document.querySelector('#full-screen');

let arr = [
    {
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
        story: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        story: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686"
    },
    {
        dp:"https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        story: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    },
    {
        dp:"https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035",
        story: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        story: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=988"
    }
]

let clutter = "";

arr.forEach(function(elem, index){
    clutter += ` <div   class="story">
                <img id = "${index}" src="${elem.dp}"alt="">
            </div>`
})

stories.innerHTML = clutter;

stories.addEventListener('click',function(e){
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[e.target.id].story})`;

    setTimeout(function(){
        fullScreen.style.display = "none";
    },5000);
})

