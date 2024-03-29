<script lang="ts">
    import { enhance, applyAction } from '$app/forms';
    
    let dealer_email = '';
    let password = '';
    let errorMessage = '';
    let thisLoginFormForDealer ;
    
</script>
<p>this is dealer login page</p>
<form bind:this={thisLoginFormForDealer} method="POST" use:enhance action="?/login" >
	
	
	<label>
		Email
		<input class="focus:border-hidden" name="dealer_email" type="email" bind:value={dealer_email} required>
	</label>
	<label>
		Password
		<input name="password" type="password" bind:value={password} required>
	</label>
    {#if errorMessage}
    <p>{errorMessage}</p>
{/if}
    <div class="flex flex-col  gap-6">

        <button class="border px-3 py-1 bg-blue-300 hover:bg-purple-600" type="submit">Log in</button>
        <p>click here to <a href="/dealersPage/register">Sign Up</a></p>
        
        
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