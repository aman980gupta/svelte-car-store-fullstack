<script lang="ts">
    import { enhance, applyAction } from '$app/forms';
    let dealership_email= ""
    let dealership_id= ""
    let password = '';
    let errorMessage = '';
    let location = '';
    let thisRegisterFormForDealer;
</script>
<h>this is dealer register page</h>

<form bind:this={thisRegisterFormForDealer} method="POST" use:enhance action="?/register" >
    <label>
		location
		<input name="location" type="text" bind:value={location} required>
	</label>
    <label>
		dealer id
		<input name="dealership_id" type="text" bind:value={dealership_id} required>
	</label>
	<label>
		Email
		<input name="dealership_email" type="email" bind:value={dealership_email} required>
	</label>
	<label>
		Password
		<input name="password" type="password" bind:value={password} required>
	</label>
    {#if errorMessage}
    <p>{errorMessage}</p>
{/if}
    <div class="flex  gap-6">

        
        <button type="submit" class="border px-3 py-1 bg-blue-300 hover:bg-purple-600">Sign Up</button>
        <p>click here to <a href="/dealersPage/dealerLogin">login</a></p>
        <!-- <button class="border px-3 py-1 bg-blue-300 " on:click={getData}>click me</button> -->
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