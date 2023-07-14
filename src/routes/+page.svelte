<script>
    let filename = 1;
    let scroll;

    $: name = filename+'.png'


    function changeImage(direction){
        if(direction == 1){
            if(filename == 16){
                filename = 0;
            }
            filename += 1;
        }else{
            if(filename == 1){
                filename = 16;
            }
            filename -= 1;
        }

    }

    if (typeof window !== "undefined") {
            window.addEventListener("wheel", event => {
                const delta = Math.sign(event.deltaY);
                scroll = delta;
                changeImage(delta);
            });
    }
    
</script>

<p>{name}</p>
<!-- <div>
    <img src = {'/image/'+name} alt = 'leaf'/>
</div> -->



<style>
    img{
        max-width: 30%;
        max-height: 30%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>