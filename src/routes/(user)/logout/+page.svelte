<script lang="ts">
	import { enhance, applyAction } from '$app/forms';

    let thisLogoutinForm ;
   
</script>
<form bind:this={thisLogoutinForm} method="GET" use:enhance action="?/logout" >
	

    <div class="flex flex-col  gap-6">

        <button class="border px-3 py-1 bg-blue-300 hover:bg-purple-600" type="submit">logout</button>
        
        
    </div>
</form>

<style>
    form{
        display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 25vh;
    width: 50vw;
    margin: auto;
    gap: 25px;
    }
    label{
        width: 70%;
        margin: auto;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    }
</style>